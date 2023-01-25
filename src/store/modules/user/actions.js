import axios from "axios"

export default {
    async loadUsers(context) {
        context.commit('resetUsers')
        var response = null;
        response = await axios.get('users',{
          mode: 'cors',
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token")
          }
        });
        const responseData = response.data;
        
        const users = [];
        for (let i = 0 ; i < responseData.length ; i++) {
          const user = {
            uid: responseData[i].uid,
            name: responseData[i].name,
            email: responseData[i].email,
            password: responseData[i].password,
            created: responseData[i].created,
            users: responseData[i].users,
            customers: responseData[i].customers,
            ticketing: responseData[i].ticketing,
            stores: responseData[i].stores
          }
          users.push(user)
        }
        context.commit('setUsers', users)
      },
      async saveUser(context, payload) {
        var response = null;
        var jsonData = {
          uid: payload.uid,
          name: payload.name,
          email: payload.email,
          password: payload.password,
          created: payload.created,
          users: payload.users,
          customers: payload.customers,
          ticketing: payload.ticketing,
          stores: payload.stores
        }
        if (payload.uid === '') {
          response = await axios.post('users', JSON.stringify(jsonData), {
            mode: 'cors',
            headers: {
              "Content-Type": "application/json",
              "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }
          })
        }else {
          response = await axios.put(`users`,JSON.stringify(jsonData), {
            mode: 'cors',
            headers: {
              "Content-Type": "application/json",
              "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }
          })
        }
        const responseData = await response.data;
        context.commit('saveUser',responseData)
        context.dispatch('loadUsers')
        context.commit('resetUser')
      },
      async deleteUser(context,payload) {
        var response = null;
        response = await axios.put(`users/${payload}/delete`,{}, {
            mode: 'cors',
            headers: {
              "Content-Type": "application/json",
              "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }
        })
        context.dispatch('loadUsers')
        context.commit('resetUser')
      },
      editUser(context,payload){
        context.commit('editUser',payload)
      },
      cancelUser(context) {
        context.commit('resetUser')
      }
}
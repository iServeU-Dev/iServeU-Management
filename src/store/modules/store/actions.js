import axios from "axios"
export default {
    async loadStores(context) {
        context.commit('resetStores')
        var response = null;
        response = await axios.get('stores',{
          mode: 'cors',
          headers: {
            "Content-Type": "application/json",
            "Authorization" : "Bearer " + sessionStorage.getItem("token")
          }
        })
        const responseData = await response.data;

        const stores = [];
        for (let i = 0 ; i < responseData.length ; i++) {
          const store = {
            uid : responseData[i].uid,
            customer : responseData[i].customer,
            name : responseData[i].name,
            username : responseData[i].username,
            password : responseData[i].password,
            installation_enabled : responseData[i].installation_enabled,
            efood_enabled :  responseData[i].efood_enabled,
            wolt_enabled :  responseData[i].wolt_enabled,
            created : responseData[i].created,
            installation : responseData[i].installation,
            efood : responseData[i].efood,
            wolt : responseData[i].wolt
          }
          stores.push(store)
        }
        context.commit('setStores', stores)
      },
      async saveStore(context, payload) {
        var response = null;
        var jsonData = {
          uid : payload.uid,
          customer : payload.customer,
          name : payload.name,
          username : payload.username,
          password : payload.password,
          installation_enabled : payload.installation_enabled,
          efood_enabled :  payload.efood_enabled,
          wolt_enabled :  payload.wolt_enabled,
          created : payload.created,
          installation : payload.installation,
          efood : payload.efood,
          wolt : payload.wolt
        }
        if (payload.uid === '') {
          response = await axios.post('stores', JSON.stringify(jsonData),{
            headers: {
              "Content-Type": "application/json",
              "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }
          })
        }else {
          response = await axios.put('stores', JSON.stringify(jsonData),{
            headers: {
              "Content-Type": "application/json",
              "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }
          })
        }
        const responseData = await response.data;
        context.commit('saveStore',responseData)
        context.dispatch('loadStores')
        context.commit('resetStore')
      },
      editStore(context,payload){
        context.commit('editStore',payload)
      },
      editWoltMatcher(context, payload) {
        context.commit('editWoltMatcher',payload)
      },
      editEfoodMatcher(context, payload) {
        context.commit('editEfoodMatcher',payload)
      },
      cancelStore(context) {
        context.commit('resetStore')
      }
}
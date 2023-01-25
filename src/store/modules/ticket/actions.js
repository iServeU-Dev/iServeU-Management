import axios from "axios"

export default {
    async loadTickets(context) {
        context.commit('resetTickets')
        var response = null;
        response = await axios.get('tickets',{
          mode: 'cors',
          headers: {
            "Content-Type": "application/json",
            "Authorization" : "Bearer " + sessionStorage.getItem("token")
          }
        })
        const responseData = await response.data;
        const tickets = [];
        for (let i = 0 ; i < responseData.length ; i++) {
          const ticket = {
            uid: responseData[i].uid,
            customer: responseData[i].customer,
            user: responseData[i].user,
            store: responseData[i].store,
            created: responseData[i].created,
            description: responseData[i].description,
            status: responseData[i].status,
            solution: responseData[i].solution,
            closed: responseData[i].closed,
          }
          tickets.push(ticket)
        }
        context.commit('setTickets', tickets)
      },
      async saveTicket(context, payload) {
        var response = null;
        var jsonData = {
          uid: payload.uid,
          user: payload.user,
          store: payload.store,
          created: payload.created,
          description: payload.description,
          status: payload.status,
          solution: payload.solution,
        }
        console.log(jsonData)
        if (payload.uid === '') {
          response = await axios.post('tickets',JSON.stringify(jsonData), {
            headers: {
              "Content-Type": "application/json",
              "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }
          })
        }else {
          response = await axios.put(`tickets`,JSON.stringify(jsonData), {
            headers: {
              "Content-Type": "application/json",
              "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }
          })
        }
        const responseData = await response.data;
        context.commit('saveTicket',responseData)
        context.dispatch('loadTickets')
        context.commit('resetTicket')
      },
      async deleteTicket(context, payload) {
        var response = null;
        console.log(payload)
        response = await axios.put(`tickets/${payload}/delete`,{}, {
            headers: {
              "Content-Type": "application/json",
              "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }
        })
        console.log(response.data)
        context.dispatch('loadTickets')
        context.commit('resetTicket')
      },
      editTicket(context,payload){
        context.commit('editTicket',payload)
      },
      cancelTicket(context) {
        context.commit('resetTicket')
      }
}
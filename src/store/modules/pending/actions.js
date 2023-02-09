import axios from "axios"
export default {
    async setDone(context,payload) {
      context.commit("setDone", payload)
      if(context.getters["done"] == false) {
        context.dispatch("loadPendings")
      }else {
        context.dispatch("loadDonePendings")
      }
    },
    async checkStore(context, payload) {
      var response = null;
        response = await axios.get(`pendings/store/${payload}`,{
          mode: 'cors',
          headers: {
            "Content-Type": "application/json",
            "Authorization" : "Bearer " + sessionStorage.getItem("token")
          }
        })
        const responseData = await response.data;
        return responseData
    },
    async loadDonePendings(context) {
      context.commit('resetPendings')
      var response = null;
      response = await axios.get('pendings/done',{
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
          "Authorization" : "Bearer " + sessionStorage.getItem("token")
        }
      })
      const responseData = await response.data;

      const pendings = [];
      for (let i = 0 ; i < responseData.length ; i++) {
        const pending = {
          uid : responseData[i].uid,
          store : responseData[i].store,
          customer : responseData[i].customer,
          installation_enabled : responseData[i].installation_enabled,
          efood_enabled :  responseData[i].efood_enabled,
          wolt_enabled :  responseData[i].wolt_enabled,
          created : responseData[i].created,
          installation : responseData[i].installation,
          efood : responseData[i].efood,
          wolt : responseData[i].wolt,
          deleted : responseData[i].deleted
        }
        pendings.push(pending)
      }
      context.commit('setPendings', pendings)
    },
    async loadPendings(context) {
        context.commit('resetPendings')
        var response = null;
        response = await axios.get('pendings',{
          mode: 'cors',
          headers: {
            "Content-Type": "application/json",
            "Authorization" : "Bearer " + sessionStorage.getItem("token")
          }
        })
        const responseData = await response.data;

        const pendings = [];
        for (let i = 0 ; i < responseData.length ; i++) {
          const pending = {
            uid : responseData[i].uid,
            store : responseData[i].store,
            customer : responseData[i].customer,
            installation_enabled : responseData[i].installation_enabled,
            efood_enabled :  responseData[i].efood_enabled,
            wolt_enabled :  responseData[i].wolt_enabled,
            created : responseData[i].created,
            installation : responseData[i].installation,
            efood : responseData[i].efood,
            wolt : responseData[i].wolt,
            deleted : responseData[i].deleted
          }
          pendings.push(pending)
        }
        context.commit('setPendings', pendings)
      },
      async savePending(context, payload) {
        var response = null;
        var jsonData = {
          uid : payload.uid,
          customer : payload.customer,
          store : payload.store,
          installation_enabled : payload.installation_enabled,
          efood_enabled :  payload.efood_enabled,
          wolt_enabled :  payload.wolt_enabled,
          created : payload.created,
          installation : payload.installation,
          efood : payload.efood,
          wolt : payload.wolt,
          deleted : payload.deleted
        }
        if (payload.uid === '') {
          response = await axios.post('pendings', JSON.stringify(jsonData),{
            headers: {
              "Content-Type": "application/json",
              "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }
          })
        }else {
          response = await axios.put('pendings', JSON.stringify(jsonData),{
            headers: {
              "Content-Type": "application/json",
              "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }
          })
        }
        const responseData = await response.data;
        context.commit('savePending',responseData)
        if(context.getters["done"] == false) {
          context.dispatch("loadPendings")
        }else {
          context.dispatch("loadDonePendings")
        }
        context.commit('resetPending')
      },
      async deletePending(context, payload) {
        var response = null;
        response = await axios.put(`pendings/${payload}/delete`,{}, {
            headers: {
              "Content-Type": "application/json",
              "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }
        })
        if(context.getters["done"] == false) {
          context.dispatch("loadPendings")
        }else {
          context.dispatch("loadDonePendings")
        }
        context.commit('resetPending')
      },
      editPending(context,payload){
        context.commit('editPending',payload)
      },
      editWoltMatcher(context, payload) {
        context.commit('editWoltMatcher',payload)
      },
      editEfoodMatcher(context, payload) {
        context.commit('editEfoodMatcher',payload)
      },
      cancelPending(context) {
        context.commit('resetPending')
      }
}
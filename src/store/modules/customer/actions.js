import axios from "axios";
export default {
    async loadCustomers(context) {
        context.commit('resetCustomers')
        var response = null;
        response = await axios.get('customers', {
          mode: 'cors',
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem("token")
          }
        })
        const responseData = await response.data;
        
        const customers = [];
        for (let i = 0 ; i < responseData.length ; i++) {
          const customer = {
            uid: responseData[i].uid,
            name: responseData[i].name,
            phone: responseData[i].phone,
            vat_number: responseData[i].vat_number,
            created: responseData[i].created,
            last_updated: responseData[i].lastUpdated,
          }
           customers.push(customer)
        }
         context.commit('setCustomers', customers)
      },
      async saveCustomer(context, payload) {
        var response = null;
        var jsonData = {
          uid: payload.uid,
          name: payload.name,
          phone: payload.phone,
          vat_number: payload.vat_number,
          created: payload.created,
          last_updated: payload.last_updated
        }
        if (payload.uid === '') {
          response = await axios.post('customers', JSON.stringify(jsonData),{
            headers: {
              "Content-Type": "application/json",
              "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }
          })
        }else {
          response = await axios.put(`customers`, JSON.stringify(jsonData), {
            headers: {
              "Content-Type": "application/json",
              "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }
          })
        }
        const responseData = await response.data;
        context.commit('saveCustomer',responseData)
        context.dispatch('loadCustomers')
        context.commit('resetCustomer')
      },
      async deleteCustomer(context, payload) {
        var response = null;
        var url = `customers/${payload}/delete`
        response = await axios.put(url,{}, {
            headers: {
              "Content-Type": "application/json",
              "Authorization" : "Bearer " + sessionStorage.getItem("token")
            }
        })
        context.dispatch('loadCustomers')
        context.commit('resetCustomer')
      },
      editCustomer(context,payload){
        context.commit('editCustomer',payload)
      },
      cancelCustomer(context) {
        context.commit('resetCustomer')
      }
}
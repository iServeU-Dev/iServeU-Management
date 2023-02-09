export  default {
    setCustomers(state, payload){
      state.customers = payload
    },
    saveCustomer(state,payload) {
      state.customers.push(payload)
    },
    editCustomer(state,payload){
      state.customer.uid = payload.uid
      state.customer.name = payload.name,
      state.customer.phone =  payload.phone,
      state.customer.vat_number = payload.vat_number,
      state.customer.created = payload.created,
      state.customer.last_updated = payload.last_updated
      state.customer.stores = payload.stores
    },
    resetCustomers(state){
      state.customers = []
    },
    resetCustomerSave(state) {
      state.customer.uid = "",
      state.customer.name = "",
      state.customer.phone =  "",
      state.customer.vat_number = "",
      state.customer.created = "",
      state.customer.last_updated = ""
      state.customer.stores = []
    },
    resetCustomer(state) {
      const length = state.customer.stores.length
      for(let i = length-1; i >= 0; --i) {
        if(state.customer.stores[i].uid == '') {
          state.customer.stores.splice(i, 1);
        }else {
          state.customer.stores[i].deleted = false;
        }
      }
      state.customer.uid = "",
      state.customer.name = "",
      state.customer.phone =  "",
      state.customer.vat_number = "",
      state.customer.created = "",
      state.customer.last_updated = ""
      state.customer.stores = []
    },
    addStore(state) {
      state.customer.stores.push({
        uid: "",
        name: "",
        username: "",
        password : "",
        phone: "",
        deleted : false
    })
    },
    deleteNewStore(state, payload) {
      state.customer.stores.splice(payload, 1);
    },
    deleteStore(state, payload) {
      if(state.customer.stores[payload].uid === '') {
        state.customer.stores.splice(payload, 1);
      }else {
        state.customer.stores[payload].deleted = true;
      }
    }
  }
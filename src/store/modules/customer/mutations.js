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
    },
    resetCustomers(state){
      state.customers = []
    },
    resetCustomer(state) {
      state.customer.uid = "",
      state.customer.name = "",
      state.customer.phone =  "",
      state.customer.vat_number = "",
      state.customer.created = "",
      state.customer.last_updated = ""
    }
  }
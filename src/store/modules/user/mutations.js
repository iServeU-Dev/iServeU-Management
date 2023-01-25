export  default {
    setUsers(state, payload){
      state.users = payload
    },
    saveUser(state,payload) {
      state.users.push(payload)
    },
    editUser(state,payload){
      state.user.uid = payload.uid
      state.user.name = payload.name,
      state.user.email =  payload.email,
      state.user.password = payload.password,
      state.user.created = payload.created,
      state.user.users = payload.users,
      state.user.stores = payload.stores,
      state.user.customers = payload.customers,
      state.user.ticketing = payload.ticketing
    },
    resetUsers(state){
      state.users = []
    },
    resetUser(state) {
      state.user.uid = ''
      state.user.name = '',
      state.user.email =  '',
      state.user.password = '',
      state.user.created = '',
      state.user.users = false,
      state.user.stores = false,
      state.user.customers = false,
      state.user.ticketing = false
    }
  }
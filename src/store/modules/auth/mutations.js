export  default {
    setlogedInUser(state, payload){
      state.logedInUser = payload
    },
    resetLogedInUser(state){
      state.logedInUser = null
    },
    setError(state, payload) {
      state.error = payload
    },
    resetError(state) {
      state.error = null
    }
  }
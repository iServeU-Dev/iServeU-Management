export  default {
    setTickets(state, payload){
      state.tickets = payload
    },
    saveTicket(state,payload) {
      state.tickets.push(payload)
    },
    editTicket(state,payload){
      state.ticket.uid = payload.uid
      state.ticket.user = payload.user,
      state.ticket.store =  payload.store,
      state.ticket.created = payload.created,
      state.ticket.description = payload.description,
      state.ticket.status = payload.status,
      state.ticket.solution = payload.solution,
      state.ticket.closed = payload.closed
    },
    resetTickets(state){
      state.tickets = []
    },
    resetTicket(state) {
      state.ticket.uid = ""
      state.ticket.user = null,
      state.ticket.store =  null,
      state.ticket.created = "",
      state.ticket.description = "",
      state.ticket.status = 0,
      state.ticket.solution = "",
      state.ticket.closed = false
    }
  }
import { createStore } from 'vuex'
import userModule from './modules/user/index.js'
import pendingModule from './modules/pending/index.js'
import customerModule from './modules/customer/index.js'
import ticketModule from './modules/ticket/index.js'
import authModule from './modules/auth/index.js'

export default createStore({
  modules: {
    user : userModule,
    pending : pendingModule,
    customer : customerModule,
    ticket : ticketModule,
    auth : authModule
  }
})

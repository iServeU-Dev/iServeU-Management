import { createStore } from 'vuex'
import userModule from './modules/user/index.js'
import storeModule from './modules/store/index.js'
import customerModule from './modules/customer/index.js'
import ticketModule from './modules/ticket/index.js'
import authModule from './modules/auth/index.js'

export default createStore({
  modules: {
    user : userModule,
    store : storeModule,
    customer : customerModule,
    ticket : ticketModule,
    auth : authModule
  }
})

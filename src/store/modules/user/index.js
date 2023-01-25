import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      users: [],
      logedInUser: null,
      user: {
        uid: '',
        name: '',
        email: '',
        password: '',
        created: '',
        users: false,
        stores: false,
        customers: false,
        ticketing: false
      }
    };
  },
  mutations,
  actions,
  getters
};
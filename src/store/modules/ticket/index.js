import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      done: false,
      tickets: [],
      ticket: {
        uid : '',
        user : null,
        customer : null,
        store : null,
        created : '',
        description : '',
        status : 0,
        solution : '',
        closed : false,
        date_closed : ''
      }
    };
  },
  mutations,
  actions,
  getters
};

// update: {
//   timestamp: '',
//   user: null,
// }
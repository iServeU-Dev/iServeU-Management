import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      customers: [],
      customer: {
        uid : "",
        name: "",
        phone: "",
        vat_number : "",
        created : "",
        last_updated : ""
      }
    };
  },
  mutations,
  actions,
  getters
};
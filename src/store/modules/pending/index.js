import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      done: false,
      pendings:[],
      pending: {
        uid: "",
        customer: null,
        store: null,
        installation_enabled : false,
        efood_enabled : false,
        wolt_enabled : false,
        installation : {
          uid : "",
          live: {
            uid : "",
            products : false,
            products_info: "",
            preferences : false,
            preferences_info : "",
            pricebooks: false,
            pricebooks_info : "",
            discounts : false,
            discounts_info : "",
            cancels : false,
            cancels_info : "",
          },
          hardware: {
            uid : "",
            pc : false,
            pc_info : "",
            programs : false,
            programs_info: "",
            printers : false,
            printers_info : "",
            fiscal : false,
            fiscal_info: "",
            router: false,
            router_info : "",
            antenna : false,
            antenna_info : ""
          },
          software: {
            uid : "",
            training : false,
            training_info : "",
            privileges : false,
            privileges_info: "",
            tables : false,
            tables_info : "",
            printings : false,
            printings_info : "",
            work_clock : false,
            work_clock_info: ""
          }
        },
        efood : {
          uid : "",
          customer: false,
          match: false,
          matcher : 0, // 0-> iserveu , 1->customer
          credentials : false,
          credentials_info : "",
          vendor : false,
          connect : false,
        },
        wolt : {
          uid : "",
          export : false,
          connect : false,
          match : false,
          matcher : 0, // 0-> iserveu , 1->customer, 2->wolt
          credentials : false,
          credentials_info : ""
        }
      },
      stores: [],
      store: {
        uid : "",
        customer : null,
        name : "",
        username : "",
        password : "",
        created : "",
      },
    };
  },
  mutations,
  actions,
  getters
};
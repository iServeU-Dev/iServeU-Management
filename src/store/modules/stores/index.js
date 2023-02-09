import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      customers: [
        {
          uid : "123213213213",
          name: "ALEXIS",
          phone: "6948031808",
          vat_number : "141661239",
          created : "",
          last_updated : "",
          stores: [
            {
              uid: "adsfasdfdsafasd",
              name: "Test Store 1",
              username: "sdasdasdasda",
              password: "dsffdasdafsdsfa",
              phone : "699445646",
              deleted : false
            },
            {
              uid: "45455464sdaffdsa5",
              name: "Test Store 1e4",
              username: "cdsaf",
              password: "acds",
              phone : "699445acssa646",
              deleted : false
            },
            {
              uid: "ascddsacvsa",
              name: "Test Store asdc1",
              username: "dargasdga",
              password: "dsffadsgasgdasdafsdsfa",
              phone : "asdfefsa",
              deleted : false
            }
          ]
        }
      ],
      customer: {
        uid : "",
        name: "",
        phone: "",
        vat_number : "",
        created : "",
        last_updated : "",
        stores : []
      }
    };
  },
  mutations,
  actions,
  getters
};
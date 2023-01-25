export  default {
    setStores(state, payload){
      state.stores = payload
    },
    saveStore(state,payload) {
      state.stores.push(payload)
    },
    editStore(state,payload){
      state.store.uid = payload.uid
      state.store.customer = payload.customer,
      state.store.name = payload.name,
      state.store.username = payload.username,
      state.store.password = payload.password,
      state.store.installation_enabled = payload.installation_enabled,
      state.store.efood_enabled = payload.efood_enabled,
      state.store.wolt_enabled = payload.wolt_enabled,
      state.store.created = payload,
      state.store.installation.uid = payload.installation.uid
      state.store.installation.live.uid = payload.installation.live.uid
      state.store.installation.live.products = payload.installation.live.products,
      state.store.installation.live.products_info = payload.installation.live.products_info,
      state.store.installation.live.preferences = payload.installation.live.preferences,
      state.store.installation.live.preferences_info = payload.installation.live.preferences_info,
      state.store.installation.live.pricebooks = payload.installation.live.pricebooks,
      state.store.installation.live.pricebooks_info = payload.installation.live.pricebooks_info,
      state.store.installation.live.discounts = payload.installation.live.discounts,
      state.store.installation.live.discounts_info = payload.installation.live.discounts_info,
      state.store.installation.live.cancels = payload.installation.live.cancels,
      state.store.installation.live.cancels_info = payload.installation.live.cancels_info,

      state.store.installation.hardware.uid = payload.installation.hardware.uid
      state.store.installation.hardware.pc = payload.installation.hardware.pc,
      state.store.installation.hardware.pc_info = payload.installation.hardware.pc_info,
      state.store.installation.hardware.programs = payload.installation.hardware.programs,
      state.store.installation.hardware.programs_info = payload.installation.hardware.programs_info,
      state.store.installation.hardware.printers = payload.installation.hardware.printers,
      state.store.installation.hardware.printers_info = payload.installation.hardware.printers_info,
      state.store.installation.hardware.fiscal = payload.installation.hardware.fiscal,
      state.store.installation.hardware.fiscal_info = payload.installation.hardware.fiscal_info,
      state.store.installation.hardware.router = payload.installation.hardware.router,
      state.store.installation.hardware.router_info = payload.installation.hardware.router_info,
      state.store.installation.hardware.antenna = payload.installation.hardware.antenna,
      state.store.installation.hardware.antenna_info = payload.installation.hardware.antenna_info,

      state.store.installation.software.uid = payload.installation.software.uid,
      state.store.installation.software.training = payload.installation.software.training,
      state.store.installation.software.training_info = payload.installation.software.training_info,
      state.store.installation.software.privileges = payload.installation.software.privileges,
      state.store.installation.software.privileges_info = payload.installation.software.privileges_info,
      state.store.installation.software.tables = payload.installation.software.tables,
      state.store.installation.software.tables_info = payload.installation.software.tables_info,
      state.store.installation.software.printings = payload.installation.software.printings,
      state.store.installation.software.printings_info = payload.installation.software.printings_info,
      state.store.installation.software.work_clock = payload.installation.software.work_clock,
      state.store.installation.software.work_clock_info = payload.installation.software.work_clock_info,

      state.store.efood.uid = payload.efood.uid,
      state.store.efood.customer = payload.efood.customer,
      state.store.efood.match = payload.efood.match,
      state.store.efood.matcher = payload.efood.matcher, // 0-> iserveu , 1->customer
      state.store.efood.credentials = payload.efood.credentials,
      state.store.efood.vendor = payload.efood.vendor,
      state.store.efood.connect = payload.efood.connect,

      state.store.wolt.uid = payload.wolt.uid,
      state.store.wolt.export = payload.wolt.export,
      state.store.wolt.connect = payload.wolt.connect,
      state.store.wolt.match = payload.wolt.match,
      state.store.wolt.matcher = payload.wolt.matcher, // 0-> iserveu , 1->customer, 2->wolt
      state.store.wolt.credentials = payload.wolt.credentials
    },
    editWoltMatcher(state, payload) {
      state.store.wolt.matcher = payload
    },
    editEfoodMatcher(state, payload) {
      state.store.efood.matcher = payload
    },
    resetStores(state){
      state.stores = []
    },
    resetStore(state) {
      state.store.uid = "",
      state.store.customer = null,
      state.store.name = "",
      state.store.username = "",
      state.store.password = "",
      state.store.installation_enabled = false,
      state.store.efood_enabled = false,
      state.store.wolt_enabled = false,
      state.store.created = "",
      state.store.installation.live.products = false,
      state.store.installation.live.products_info = "",
      state.store.installation.live.preferences = false,
      state.store.installation.live.preferences_info = "",
      state.store.installation.live.pricebooks = false,
      state.store.installation.live.pricebook_info = "",
      state.store.installation.live.discounts = false,
      state.store.installation.live.discounts_info = "",
      state.store.installation.live.cancels = false,
      state.store.installation.live.cancels_info = "",

      state.store.installation.hardware.pc = false,
      state.store.installation.hardware.pc_info = "",
      state.store.installation.hardware.programs = false,
      state.store.installation.hardware.programs_info = "",
      state.store.installation.hardware.printers = false,
      state.store.installation.hardware.printers_info = "",
      state.store.installation.hardware.fiscal = false,
      state.store.installation.hardware.fiscal_info = "",
      state.store.installation.hardware.router = false,
      state.store.installation.hardware.router_info = "",
      state.store.installation.hardware.antenna = false,
      state.store.installation.hardware.antenna_info = "",

      state.store.installation.software.training = false,
      state.store.installation.software.training_info = "",
      state.store.installation.software.privileges = false,
      state.store.installation.software.privileges_info = "",
      state.store.installation.software.tables = false,
      state.store.installation.software.tables_info = "",
      state.store.installation.software.printings = false,
      state.store.installation.software.printings_info = false,
      state.store.installation.software.work_clock = false,
      state.store.installation.software.work_clock_info = "",

      state.store.efood.customer = false,
      state.store.efood.match = false,
      state.store.efood.matcher = 0, // 0-> iserveu , 1->customer
      state.store.efood.credentials = false,
      state.store.efood.vendor = false,
      state.store.efood.connect = false,

      state.store.wolt.export = false,
      state.store.wolt.connect = false,
      state.store.wolt.match = false,
      state.store.wolt.matcher = 0, // 0-> iserveu , 1->customer, 2->wolt
      state.store.wolt.credentials = false
    }
  }
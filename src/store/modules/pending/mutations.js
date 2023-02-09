export  default {
    setPendings(state, payload){
      state.pendings = payload
    },
    savePending(state,payload) {
      state.pendings.push(payload)
    },
    editPending(state,payload){
      state.pending.uid = payload.uid,
      state.pending.customer = payload.customer,
      state.pending.store = payload.store,
      state.pending.installation_enabled = payload.installation_enabled,
      state.pending.efood_enabled = payload.efood_enabled,
      state.pending.wolt_enabled = payload.wolt_enabled,
      state.pending.created = payload,
      state.pending.installation.uid = payload.installation.uid
      state.pending.installation.live.uid = payload.installation.live.uid
      state.pending.installation.live.products = payload.installation.live.products,
      state.pending.installation.live.products_info = payload.installation.live.products_info,
      state.pending.installation.live.preferences = payload.installation.live.preferences,
      state.pending.installation.live.preferences_info = payload.installation.live.preferences_info,
      state.pending.installation.live.pricebooks = payload.installation.live.pricebooks,
      state.pending.installation.live.pricebooks_info = payload.installation.live.pricebooks_info,
      state.pending.installation.live.discounts = payload.installation.live.discounts,
      state.pending.installation.live.discounts_info = payload.installation.live.discounts_info,
      state.pending.installation.live.cancels = payload.installation.live.cancels,
      state.pending.installation.live.cancels_info = payload.installation.live.cancels_info,

      state.pending.installation.hardware.uid = payload.installation.hardware.uid
      state.pending.installation.hardware.pc = payload.installation.hardware.pc,
      state.pending.installation.hardware.pc_info = payload.installation.hardware.pc_info,
      state.pending.installation.hardware.programs = payload.installation.hardware.programs,
      state.pending.installation.hardware.programs_info = payload.installation.hardware.programs_info,
      state.pending.installation.hardware.printers = payload.installation.hardware.printers,
      state.pending.installation.hardware.printers_info = payload.installation.hardware.printers_info,
      state.pending.installation.hardware.fiscal = payload.installation.hardware.fiscal,
      state.pending.installation.hardware.fiscal_info = payload.installation.hardware.fiscal_info,
      state.pending.installation.hardware.router = payload.installation.hardware.router,
      state.pending.installation.hardware.router_info = payload.installation.hardware.router_info,
      state.pending.installation.hardware.antenna = payload.installation.hardware.antenna,
      state.pending.installation.hardware.antenna_info = payload.installation.hardware.antenna_info,

      state.pending.installation.software.uid = payload.installation.software.uid,
      state.pending.installation.software.training = payload.installation.software.training,
      state.pending.installation.software.training_info = payload.installation.software.training_info,
      state.pending.installation.software.privileges = payload.installation.software.privileges,
      state.pending.installation.software.privileges_info = payload.installation.software.privileges_info,
      state.pending.installation.software.tables = payload.installation.software.tables,
      state.pending.installation.software.tables_info = payload.installation.software.tables_info,
      state.pending.installation.software.printings = payload.installation.software.printings,
      state.pending.installation.software.printings_info = payload.installation.software.printings_info,
      state.pending.installation.software.work_clock = payload.installation.software.work_clock,
      state.pending.installation.software.work_clock_info = payload.installation.software.work_clock_info,

      state.pending.efood.uid = payload.efood.uid,
      state.pending.efood.customer = payload.efood.customer,
      state.pending.efood.match = payload.efood.match,
      state.pending.efood.matcher = payload.efood.matcher, // 0-> iserveu , 1->customer
      state.pending.efood.credentials = payload.efood.credentials,
      state.pending.efood.credentials_info = payload.efood.credentials_info,
      state.pending.efood.vendor = payload.efood.vendor,
      state.pending.efood.connect = payload.efood.connect,

      state.pending.wolt.uid = payload.wolt.uid,
      state.pending.wolt.export = payload.wolt.export,
      state.pending.wolt.connect = payload.wolt.connect,
      state.pending.wolt.match = payload.wolt.match,
      state.pending.wolt.matcher = payload.wolt.matcher, // 0-> iserveu , 1->customer, 2->wolt
      state.pending.wolt.credentials = payload.wolt.credentials,
      state.pending.wolt.credentials_info = payload.wolt.credentials_info
    },
    editWoltMatcher(state, payload) {
      state.pending.wolt.matcher = payload
    },
    editEfoodMatcher(state, payload) {
      state.pending.efood.matcher = payload
    },
    resetPendings(state){
      state.pendings = []
    },
    resetPending(state) {
      state.pending.uid = "",
      state.pending.customer = null,
      state.pending.store = null,
      state.pending.installation_enabled = false,
      state.pending.efood_enabled = false,
      state.pending.wolt_enabled = false,
      state.pending.created = "",
      state.pending.installation.live.products = false,
      state.pending.installation.live.products_info = "",
      state.pending.installation.live.preferences = false,
      state.pending.installation.live.preferences_info = "",
      state.pending.installation.live.pricebooks = false,
      state.pending.installation.live.pricebook_info = "",
      state.pending.installation.live.discounts = false,
      state.pending.installation.live.discounts_info = "",
      state.pending.installation.live.cancels = false,
      state.pending.installation.live.cancels_info = "",

      state.pending.installation.hardware.pc = false,
      state.pending.installation.hardware.pc_info = "",
      state.pending.installation.hardware.programs = false,
      state.pending.installation.hardware.programs_info = "",
      state.pending.installation.hardware.printers = false,
      state.pending.installation.hardware.printers_info = "",
      state.pending.installation.hardware.fiscal = false,
      state.pending.installation.hardware.fiscal_info = "",
      state.pending.installation.hardware.router = false,
      state.pending.installation.hardware.router_info = "",
      state.pending.installation.hardware.antenna = false,
      state.pending.installation.hardware.antenna_info = "",

      state.pending.installation.software.training = false,
      state.pending.installation.software.training_info = "",
      state.pending.installation.software.privileges = false,
      state.pending.installation.software.privileges_info = "",
      state.pending.installation.software.tables = false,
      state.pending.installation.software.tables_info = "",
      state.pending.installation.software.printings = false,
      state.pending.installation.software.printings_info = false,
      state.pending.installation.software.work_clock = false,
      state.pending.installation.software.work_clock_info = "",

      state.pending.efood.customer = false,
      state.pending.efood.match = false,
      state.pending.efood.matcher = 0, // 0-> iserveu , 1->customer
      state.pending.efood.credentials = false,
      state.pending.efood.vendor = false,
      state.pending.efood.connect = false,

      state.pending.wolt.export = false,
      state.pending.wolt.connect = false,
      state.pending.wolt.match = false,
      state.pending.wolt.matcher = 0, // 0-> iserveu , 1->customer, 2->wolt
      state.pending.wolt.credentials = false
    },
    setDone(state,payload) {
      state.done = payload
    }
  }
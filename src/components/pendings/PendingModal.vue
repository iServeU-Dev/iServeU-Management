<template>
    <section class="modal">
        <error-comp v-if="error !== null" :error="error"/>
        <div class="modal__content">
            <div class="cont__header">
                <h2>Νέο Κατάστημα</h2>
            </div>
            <div class="box">
                <h3 class="box__header">Βασικές Πληροφορίες</h3>
                <div class="box__container">
                    <div class="box__container--field">
                        <label for="email">Πελάτης:</label>
                        <v-select class="selection" :filter="fuseSearch" :options="customers" label='name' v-model="pending.customer"></v-select>
                    </div>
                    <div class="box__container--field box__container--field-store">
                        <label for="email">Κατάστημα:</label>
                        <v-select class="selection" :options="stores" label='name' v-model="pending.store" @option:selected="storeCheck"></v-select>
                    </div>
                    <div class="box__container--enabled">
                        <div class="box__container--field">
                        <label>Εγκατάσταση:</label>
                        <div class="check">
                            <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.installation_enabled">
                            <svg-icon class="icon__success" name="toggle_on" v-if="pending.installation_enabled"></svg-icon>
                            <svg-icon class="icon__danger" name="toggle_off" v-if="!pending.installation_enabled"></svg-icon>
                        </div>
                        </div>
                        <div class="box__container--field">
                            <label>Efood:</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.efood_enabled">
                                <svg-icon class="icon__success" name="toggle_on" v-if="pending.efood_enabled"></svg-icon>
                                <svg-icon class="icon__danger" name="toggle_off" v-if="!pending.efood_enabled"></svg-icon>
                            </div>
                        </div>
                        <div class="box__container--field">
                            <label>Wolt:</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.wolt_enabled">
                                <svg-icon class="icon__success" name="toggle_on" v-if="pending.wolt_enabled"></svg-icon>
                                <svg-icon class="icon__danger " name="toggle_off" v-if="!pending.wolt_enabled"></svg-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box" v-if="pending.installation_enabled">
                <h3 class="box__header">Εγκατάσταση</h3>
                <div class="box__container installation__box">
                    <div class="install">
                        <div class="install__title">
                            <h4>Live</h4>
                        </div>
                        <div class="check__container">
                            <label for="">Προϊόντα</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.installation.live.products">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.installation.live.products"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.installation.live.products"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="pending.installation.live.products_info">
                        </div>
                        <div class="check__container">
                            <label for="">Προτιμήσεις</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.installation.live.preferences">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.installation.live.preferences"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.installation.live.preferences"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="pending.installation.live.preferences_info">
                        </div>
                        <div class="check__container">
                            <label for="">Τιμοκατάλογοι</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.installation.live.pricebooks">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.installation.live.pricebooks"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.installation.live.pricebooks"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="pending.installation.live.pricebooks_info">
                        </div>
                        <div class="check__container">
                            <label for="">Λόγοι Έκπτωσεις</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.installation.live.discounts">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.installation.live.discounts"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.installation.live.discounts"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="pending.installation.live.discounts_info">
                        </div>
                        <div class="check__container">
                            <label for="">Λόγοι Ακύρωσεις</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.installation.live.cancels">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.installation.live.cancels"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.installation.live.cancels"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="pending.installation.live.cancels_info">
                        </div>
                    </div>
                    <div class="training">
                        <div class="training__title">
                            <h4>Εκπαίδευση</h4>
                        </div>
                        <div class="check__container">
                            <label for="">Εκπαίδευση Χρηστών</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.installation.software.training">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.installation.software.training"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.installation.software.training"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="pending.installation.software.training_info">
                        </div>
                        <div class="check__container">
                            <label for="">Δικαιώματα</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.installation.software.priveleges">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.installation.software.priveleges"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.installation.software.priveleges"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="pending.installation.software.priveleges_info">
                        </div>
                        <div class="check__container">
                            <label for="">Τραπέζια</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.installation.software.tables">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.installation.software.tables"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.installation.software.tables"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="pending.installation.software.tables_info">
                        </div>
                        <div class="check__container">
                            <label for="">Εκτυπώσεις</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.installation.software.printings">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.installation.software.printings"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.installation.software.printings"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="pending.installation.software.printings_info">
                        </div>
                        <div class="check__container">
                            <label for="">Μισθοδοσία</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.installation.software.clock_work">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.installation.software.clock_work"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.installation.software.clock_work"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="pending.installation.software.clock_work_info">
                        </div>
                    </div>
                    <div class="equipment">
                        <div class="equipment__title">
                            <h4>Εξοπλισμός</h4>
                        </div>
                        <div class="check__container">
                            <label for="">Pc</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.installation.hardware.pc">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.installation.hardware.pc"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.installation.hardware.pc"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="pending.installation.hardware.pc_info">
                        </div>
                        <div class="check__container">
                            <label for="">Προγραμματα</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.installation.hardware.programs">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.installation.hardware.programs"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.installation.hardware.programs"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="pending.installation.hardware.programs_info">
                        </div>
                        <div class="check__container">
                            <label for="">Εκτυπωτές</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.installation.hardware.printers">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.installation.hardware.printers"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.installation.hardware.printers"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="pending.installation.hardware.printers_info">
                        </div>
                        <div class="check__container">
                            <label for="">Φορολογικός</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.installation.hardware.fiscal">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.installation.hardware.fiscal"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.installation.hardware.fiscal"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="pending.installation.hardware.fiscal_info">
                        </div>
                        <div class="check__container">
                            <label for="">Ρούτερ</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.installation.hardware.router">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.installation.hardware.router"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.installation.hardware.router"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="pending.installation.hardware.router_info">
                        </div>
                        <div class="check__container">
                            <label for="">Κεραία</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.installation.hardware.antenna">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.installation.hardware.antenna"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.installation.hardware.antenna"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="pending.installation.hardware.antenna_info">
                        </div>
                    </div>
                </div>
            </div>
            <div class="box" v-if="pending.efood_enabled">
                <h3 class="box__header">Efood</h3>
                <div class="box__container">
                    <div class="check__container">
                    <label for="">Επικοινωνια με Πελάτη</label>
                    <div class="check">
                        <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.efood.customer_contact">
                        <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.efood.customer_contact"></svg-icon>
                        <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.efood.customer_contact"></svg-icon>
                    </div>
                </div>
                <div class="check__container">
                    <label for="">Τοποθετηση Vendor Id</label>
                    <div class="check">
                        <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.efood.vendor">
                        <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.efood.vendor"></svg-icon>
                        <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.efood.vendor"></svg-icon>
                    </div>
                    <input class="input_enabled" type="text" name="" id="" v-model="pending.efood.credentials_info">
                </div>
                <div class="check__container">
                    <label for="">Αντιστοιχιση Προϊόντων</label>
                    <div class="check">
                        <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.efood.match">
                        <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.efood.match"></svg-icon>
                        <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.efood.match"></svg-icon>
                    </div>
                    <label for="">iServeU</label>
                    <svg-icon name="check_box-n" v-if="pending.efood.matcher !== 1" @click="setEfoodMatcher(1)"></svg-icon>
                    <svg-icon name="check_box-y" v-if="pending.efood.matcher === 1" @click="setEfoodMatcher(0)"></svg-icon>
                    <label for="">Πελάτης</label>
                    <svg-icon name="check_box-n" v-if="pending.efood.matcher !== 2" @click="setEfoodMatcher(2)"></svg-icon>
                    <svg-icon name="check_box-y" v-if="pending.efood.matcher === 2" @click="setEfoodMatcher(0)"></svg-icon>
                </div>
                <div class="check__container">
                    <label for="">Εγκατάσταση-Παραμετροποιηση Connect</label>
                    <div class="check">
                        <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.efood.connect">
                        <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.efood.connect"></svg-icon>
                        <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.efood.connect"></svg-icon>
                    </div>
                </div>
                <div class="check__container">
                    <label for="">Ενεργοποιήση απο Efood</label>
                    <div class="check">
                        <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.efood.credentials">
                        <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.efood.credentials"></svg-icon>
                        <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.efood.credentials"></svg-icon>
                    </div>
                </div>
                </div>
            </div>
            <div class="box" v-if="pending.wolt_enabled">
                <h3 class="box__header">Wolt</h3>
                <div class="box__container">
                    <div class="check__container">
                    <label for="">Connect - Eξαγωγη Προϊόντων</label>
                    <div class="check">
                        <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.wolt.export">
                        <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.wolt.export"></svg-icon>
                        <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.wolt.export"></svg-icon>
                    </div>
                </div>
                <div class="check__container">
                    <label for="">Αντιστοιχιση Προϊόντων</label>
                    <div class="check">
                        <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.wolt.match">
                        <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.wolt.match"></svg-icon>
                        <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.wolt.match"></svg-icon>
                    </div>
                    <label for="">iServeU</label>
                    <svg-icon name="check_box-n" v-if="pending.wolt.matcher !== 1"  @click="setWoltMatcher(1)"></svg-icon>
                    <svg-icon name="check_box-y" v-if="pending.wolt.matcher === 1" @click="setWoltMatcher(0)"></svg-icon>
                    <label for="">Πελάτης</label>
                    <svg-icon name="check_box-n" v-if="pending.wolt.matcher !== 2" @click="setWoltMatcher(2)"></svg-icon>
                    <svg-icon name="check_box-y" v-if="pending.wolt.matcher === 2" @click="setWoltMatcher(0)"></svg-icon>
                    <label for="">Wolt</label>
                    <svg-icon name="check_box-n" v-if="pending.wolt.matcher !== 3" @click="setWoltMatcher(3)"></svg-icon>
                    <svg-icon name="check_box-y" v-if="pending.wolt.matcher === 3" @click="setWoltMatcher(0)"></svg-icon>
                </div>
                <div class="check__container">
                    <label for="">Παραμετροποίηση Connect</label>
                    <div class="check">
                        <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.wolt.connect">
                        <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.wolt.connect"></svg-icon>
                        <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.wolt.connect"></svg-icon>
                    </div>
                </div>
                <div class="check__container">
                    <label for="">Credentials Wolt</label>
                    <div class="check">
                        <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="pending.wolt.credentials">
                        <svg-icon class="check__icon icon__success" name="check_box-y" v-if="pending.wolt.credentials"></svg-icon>
                        <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!pending.wolt.credentials"></svg-icon>
                    </div>
                    <input class="input_enabled" type="text" name="" id="" v-model="pending.wolt.credentials_info">
                </div>
                </div>
            </div>
            <div class="cont__btns">
                <button class="success" @click="save">Αποθήκευση</button>
                <button class="warning" @click="cancel">Ακύρωση</button>
            </div>
        </div>
    </section>
</template>
<script>
import Fuse from 'fuse.js';
import SvgIcon from '../shared/SvgIcon.vue'
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import ErrorComp from '../shared/ErrorComp.vue'
export default {
    components: {
        SvgIcon,
        vSelect,
        ErrorComp
    },
    data() {
        return {
            check : true
        }
    },
    computed: {
        pending: {
            get() {
                return this.$store.getters["pending/pending"]
            },
            set(value){
                this.$store.dispatch("pending/editPending", value)
            }
        },
        customers() {
            return this.$store.getters["customer/customers"]
        },
        stores() {
            if( this.pending.customer == null) {
                return []
            } else {
                return this.pending.customer.stores
            }
        },
        error() {
            return this.$store.getters["auth/error"]
        }
    },
    methods: {
        storeCheck() {
            if(this.pending.uid == "") {
                this.$store.dispatch("pending/checkStore", this.pending.store.uid).then((value) => {
                    if(value === false) {
                        this.check = false
                    }
                    else {
                        this.check = true
                    }
                }
                )
            }
        },
        setWoltMatcher(value) {
            this.$store.dispatch("pending/editWoltMatcher", value)
        },
        setEfoodMatcher(value) {
            this.$store.dispatch("pending/editEfoodMatcher", value)
        },
        save() {
            const payload = {
                uid : this.pending.uid,
                store : this.pending.store,
                customer : this.pending.customer,
                installation_enabled : this.pending.installation_enabled,
                efood_enabled : this.pending.efood_enabled,
                wolt_enabled : this.pending.wolt_enabled,
                created : this.pending.created,
                deleted : false,
                installation : {
                    uid: this.pending.installation.uid,
                    live: {
                        uid: this.pending.installation.live.uid,
                        products : this.pending.installation.live.products,
                        products_info: this.pending.installation.live.products_info,
                        preferences : this.pending.installation.live.preferences,
                        preferences_info : this.pending.installation.live.preferences_info,
                        pricebooks: this.pending.installation.live.pricebooks,
                        pricebooks_info : this.pending.installation.live.pricebooks_info,
                        discounts : this.pending.installation.live.discounts,
                        discounts_info : this.pending.installation.live.discounts_info,
                        cancels : this.pending.installation.live.cancels,
                        cancels_info : this.pending.installation.live.cancels_info,
                    },
                    hardware: {
                        uid : this.pending.installation.hardware.uid,
                        pc : this.pending.installation.hardware.pc,
                        pc_info : this.pending.installation.hardware.pc_info,
                        programs : this.pending.installation.hardware.programs,
                        programs_info : this.pending.installation.hardware.programs_info,
                        printers : this.pending.installation.hardware.printers,
                        printers_info : this.pending.installation.hardware.printers_info,
                        fiscal : this.pending.installation.hardware.fiscal,
                        fiscal_info : this.pending.installation.hardware.fiscal_info,
                        router: this.pending.installation.hardware.router,
                        router_info: this.pending.installation.hardware.router_info,
                        antenna : this.pending.installation.hardware.antenna,
                        antenna_info : this.pending.installation.hardware.antenna_info,
                    },
                    software: {
                        uid : this.pending.installation.software.uid,
                        training : this.pending.installation.software.training,
                        training_info : this.pending.installation.software.training_info,
                        privileges : this.pending.installation.software.privileges,
                        privileges_info : this.pending.installation.software.privileges_info,
                        tables : this.pending.installation.software.tables,
                        tables_info : this.pending.installation.software.tables_info,
                        printings : this.pending.installation.software.printings,
                        printings_info : this.pending.installation.software.printings_info,
                        work_clock : this.pending.installation.software.work_clock,
                        work_clock_info : this.pending.installation.software.work_clock_info,
                    }
                },
                efood : {
                    uid : this.pending.efood.uid,
                    customer: this.pending.efood.customer,
                    match: this.pending.efood.match,
                    matcher : this.pending.efood.matcher, // 0-> iserveu , 1->customer
                    credentials : this.pending.efood.credentials,
                    credentials_info : this.pending.efood.credentials_info,
                    vendor : this.pending.efood.vendor,
                    connect : this.pending.efood.connect,
                },
                wolt : {
                    uid : this.pending.wolt.uid,
                    export : this.pending.wolt.export,
                    connect : this.pending.wolt.connect,
                    match : this.pending.wolt.match,
                    matcher :this.pending.wolt.matcher, // 0-> iserveu , 1->customer, 2->wolt
                    credentials : this.pending.wolt.credentials,
                    credentials_info : this.pending.wolt.credentials_info,
                }
            }
            if( this.check === false || payload.uid != "") {
                if(payload.customer === null) {
                    this.$store.commit("auth/setError", "Empty Customer")
                }
                else if (payload.name === "") {
                    this.$store.commit("auth/setError", "Empty Name")
                }
                else if (payload.username === "") {
                    this.$store.commit("auth/setError", "Empty Username")
                }
                else if (payload.password === "") {
                    this.$store.commit("auth/setError", "Empty Password")
                }
                else {
                    this.$store.dispatch("pending/savePending", payload)
                    this.$store.commit("auth/setError", null)
                    this.$router.push('/pendings')
                }
            } else {
                this.$store.commit("auth/setError", "Store Pending Already Exists")
            }
            

        },
        cancel() {
            this.$store.dispatch("pending/cancelPending")
            this.$store.commit("auth/setError", null)
            this.$router.push('/pendings')
        },
        fuseSearch(options, search) {
        const fuse = new Fuse(options, {
            keys: ['name', 'phone', 'vat_number'],
            shouldSort: true,
            useExtendedSearch: true
        })
        return search.length
            ? fuse.search("'"+search).map(({ item }) => item)
            : fuse.list
        }
    }
}
</script>
<style scoped>
    .box__container--enabled {
        margin-top: 1rem;
        grid-column-start: 1;
        grid-column-end: 3;
        display: grid;
        grid-template-columns: repeat(3, auto);
    }
    .check {
        justify-self: right;
        margin: 0.2rem 2.5rem 0.5rem 0;
        display: grid;
    }
    .check_b {
        grid-row-start: 1;
        grid-column-start: 1;
        height: 1.8rem;
        width: 1.8rem;
        margin-left: 0rem;
    }
    .check__icon {
        grid-row-start: 1;
        grid-column-start: 1;
        height: 1.8rem;
        width: 1.8rem;
    }
    .installation__box {
        grid-template-columns: repeat(3, auto);
    }
    .store__name {
        grid-row-start: 2;
        margin-top: 0.5rem;
    }
    .store__username {
        grid-row-start: 3;
    }
    .store__password {
        grid-row-start: 3;
    }
    .install__title, 
    .training__title, 
    .equipment__title {
        border-bottom: 1px solid black;
        margin-right: 0.5rem;
    }
    .check__container {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(2, 1fr);
        align-items: center;
    }
    .input_enabled {
        grid-column-start: 1;
        grid-column-end: 3;
    }
    .box__container--field-store {
        grid-row-start: 2;
    }
@media only screen and (max-width: 768px) {
    .check {
        justify-self: left;
        margin: 0.2rem 2.5rem 0.5rem 0;
        display: grid;
    }
    .installation__box {
        grid-template-columns: 1fr;
    }
    .store__name {
        grid-row-start: 2;
        margin-top: 0.5rem;
    }
    .store__username {
        grid-row-start: 3;
    }
    .store__password {
        grid-row-start: 4;
    }
}
</style>
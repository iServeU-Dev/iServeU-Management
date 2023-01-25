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
                        <v-select class="selection" :options="customers" label='name' v-model="store.customer"></v-select>
                    </div>
                    <div class="box__container--field store__name">
                        <label for="email">Όνομα Καταστήματος:</label>
                        <input class="input_enabled" type="text" name="afm" id="afm" v-model="store.name">
                    </div>
                    <div class="box__container--field store__username">
                        <label for="email">Username:</label>
                        <input class="input_enabled" type="text" name="afm" id="afm" v-model="store.username">
                    </div>
                    <div class="box__container--field store__password">
                        <label for="email">Password:</label>
                        <input class="input_enabled" type="text" name="afm" id="afm" v-model="store.password">
                    </div>
                    <div class="box__container--enabled">
                        <div class="box__container--field">
                        <label>Εγκατάσταση:</label>
                        <div class="check">
                            <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.installation_enabled">
                            <svg-icon class="icon__success" name="toggle_on" v-if="store.installation_enabled"></svg-icon>
                            <svg-icon class="icon__danger" name="toggle_off" v-if="!store.installation_enabled"></svg-icon>
                        </div>
                        </div>
                        <div class="box__container--field">
                            <label>Efood:</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.efood_enabled">
                                <svg-icon class="icon__success" name="toggle_on" v-if="store.efood_enabled"></svg-icon>
                                <svg-icon class="icon__danger" name="toggle_off" v-if="!store.efood_enabled"></svg-icon>
                            </div>
                        </div>
                        <div class="box__container--field">
                            <label>Wolt:</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.wolt_enabled">
                                <svg-icon class="icon__success" name="toggle_on" v-if="store.wolt_enabled"></svg-icon>
                                <svg-icon class="icon__danger " name="toggle_off" v-if="!store.wolt_enabled"></svg-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box" v-if="store.installation_enabled">
                <h3 class="box__header">Εγκατάσταση</h3>
                <div class="box__container installation__box">
                    <div class="install">
                        <div class="install__title">
                            <h4>Live</h4>
                        </div>
                        <div class="check__container">
                            <label for="">Προϊόντα</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.installation.live.products">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.installation.live.products"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.installation.live.products"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="store.installation.live.products_info">
                        </div>
                        <div class="check__container">
                            <label for="">Προτιμήσεις</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.installation.live.preferences">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.installation.live.preferences"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.installation.live.preferences"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="store.installation.live.preferences_info">
                        </div>
                        <div class="check__container">
                            <label for="">Τιμοκατάλογοι</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.installation.live.pricebooks">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.installation.live.pricebooks"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.installation.live.pricebooks"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="store.installation.live.pricebooks_info">
                        </div>
                        <div class="check__container">
                            <label for="">Λόγοι Έκπτωσεις</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.installation.live.discounts">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.installation.live.discounts"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.installation.live.discounts"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="store.installation.live.discounts_info">
                        </div>
                        <div class="check__container">
                            <label for="">Λόγοι Ακύρωσεις</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.installation.live.cancels">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.installation.live.cancels"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.installation.live.cancels"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="store.installation.live.cancels_info">
                        </div>
                    </div>
                    <div class="training">
                        <div class="training__title">
                            <h4>Εκπαίδευση</h4>
                        </div>
                        <div class="check__container">
                            <label for="">Εκπαίδευση Χρηστών</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.installation.software.training">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.installation.software.training"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.installation.software.training"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="store.installation.software.training_info">
                        </div>
                        <div class="check__container">
                            <label for="">Δικαιώματα</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.installation.software.priveleges">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.installation.software.priveleges"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.installation.software.priveleges"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="store.installation.software.priveleges_info">
                        </div>
                        <div class="check__container">
                            <label for="">Τραπέζια</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.installation.software.tables">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.installation.software.tables"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.installation.software.tables"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="store.installation.software.tables_info">
                        </div>
                        <div class="check__container">
                            <label for="">Εκτυπώσεις</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.installation.software.printings">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.installation.software.printings"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.installation.software.printings"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="store.installation.software.printings_info">
                        </div>
                        <div class="check__container">
                            <label for="">Μισθοδοσία</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.installation.software.clock_work">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.installation.software.clock_work"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.installation.software.clock_work"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="store.installation.software.clock_work_info">
                        </div>
                    </div>
                    <div class="equipment">
                        <div class="equipment__title">
                            <h4>Εξοπλισμός</h4>
                        </div>
                        <div class="check__container">
                            <label for="">Pc</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.installation.hardware.pc">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.installation.hardware.pc"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.installation.hardware.pc"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="store.installation.hardware.pc_info">
                        </div>
                        <div class="check__container">
                            <label for="">Προγραμματα</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.installation.hardware.programs">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.installation.hardware.programs"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.installation.hardware.programs"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="store.installation.hardware.programs_info">
                        </div>
                        <div class="check__container">
                            <label for="">Εκτυπωτές</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.installation.hardware.printers">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.installation.hardware.printers"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.installation.hardware.printers"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="store.installation.hardware.printers_info">
                        </div>
                        <div class="check__container">
                            <label for="">Φορολογικός</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.installation.hardware.fiscal">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.installation.hardware.fiscal"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.installation.hardware.fiscal"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="store.installation.hardware.fiscal_info">
                        </div>
                        <div class="check__container">
                            <label for="">Ρούτερ</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.installation.hardware.router">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.installation.hardware.router"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.installation.hardware.router"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="store.installation.hardware.router_info">
                        </div>
                        <div class="check__container">
                            <label for="">Κεραία</label>
                            <div class="check">
                                <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.installation.hardware.antenna">
                                <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.installation.hardware.antenna"></svg-icon>
                                <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.installation.hardware.antenna"></svg-icon>
                            </div>
                            <input class="input_enabled" type="text" name="" id="" v-model="store.installation.hardware.antenna_info">
                        </div>
                    </div>
                </div>
            </div>
            <div class="box" v-if="store.efood_enabled">
                <h3 class="box__header">Efood</h3>
                <div class="box__container">
                    <div class="check__container">
                    <label for="">Επικοινωνια με Πελάτη</label>
                    <div class="check">
                        <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.efood.customer_contact">
                        <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.efood.customer_contact"></svg-icon>
                        <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.efood.customer_contact"></svg-icon>
                    </div>
                </div>
                <div class="check__container">
                    <label for="">Τοποθετηση Vendor Id</label>
                    <div class="check">
                        <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.efood.vendor">
                        <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.efood.vendor"></svg-icon>
                        <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.efood.vendor"></svg-icon>
                    </div>
                </div>
                <div class="check__container">
                    <label for="">Αντιστοιχιση Προϊόντων</label>
                    <div class="check">
                        <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.efood.match">
                        <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.efood.match"></svg-icon>
                        <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.efood.match"></svg-icon>
                    </div>
                    <label for="">iServeU</label>
                    <svg-icon name="check_box-n" v-if="store.efood.matcher !== 1" @click="setEfoodMatcher(1)"></svg-icon>
                    <svg-icon name="check_box-y" v-if="store.efood.matcher === 1" @click="setEfoodMatcher(0)"></svg-icon>
                    <label for="">Πελάτης</label>
                    <svg-icon name="check_box-n" v-if="store.efood.matcher !== 2" @click="setEfoodMatcher(2)"></svg-icon>
                    <svg-icon name="check_box-y" v-if="store.efood.matcher === 2" @click="setEfoodMatcher(0)"></svg-icon>
                </div>
                <div class="check__container">
                    <label for="">Εγκατάσταση-Παραμετροποιηση Connect</label>
                    <div class="check">
                        <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.efood.connect">
                        <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.efood.connect"></svg-icon>
                        <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.efood.connect"></svg-icon>
                    </div>
                </div>
                <div class="check__container">
                    <label for="">Ενεργοποιήση απο Efood</label>
                    <div class="check">
                        <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.efood.credentials">
                        <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.efood.credentials"></svg-icon>
                        <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.efood.credentials"></svg-icon>
                    </div>
                </div>
                </div>
            </div>
            <div class="box" v-if="store.wolt_enabled">
                <h3 class="box__header">Wolt</h3>
                <div class="box__container">
                    <div class="check__container">
                    <label for="">Connect - Eξαγωγη Προϊόντων</label>
                    <div class="check">
                        <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.wolt.export">
                        <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.wolt.export"></svg-icon>
                        <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.wolt.export"></svg-icon>
                    </div>
                </div>
                <div class="check__container">
                    <label for="">Αντιστοιχιση Προϊόντων</label>
                    <div class="check">
                        <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.wolt.match">
                        <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.wolt.match"></svg-icon>
                        <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.wolt.match"></svg-icon>
                    </div>
                    <label for="">iServeU</label>
                    <svg-icon name="check_box-n" v-if="store.wolt.matcher !== 1"  @click="setWoltMatcher(1)"></svg-icon>
                    <svg-icon name="check_box-y" v-if="store.wolt.matcher === 1" @click="setWoltMatcher(0)"></svg-icon>
                    <label for="">Πελάτης</label>
                    <svg-icon name="check_box-n" v-if="store.wolt.matcher !== 2" @click="setWoltMatcher(2)"></svg-icon>
                    <svg-icon name="check_box-y" v-if="store.wolt.matcher === 2" @click="setWoltMatcher(0)"></svg-icon>
                    <label for="">Wolt</label>
                    <svg-icon name="check_box-n" v-if="store.wolt.matcher !== 3" @click="setWoltMatcher(3)"></svg-icon>
                    <svg-icon name="check_box-y" v-if="store.wolt.matcher === 3" @click="setWoltMatcher(0)"></svg-icon>
                </div>
                <div class="check__container">
                    <label for="">Παραμετροποίηση Connect</label>
                    <div class="check">
                        <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.wolt.connect">
                        <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.wolt.connect"></svg-icon>
                        <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.wolt.connect"></svg-icon>
                    </div>
                </div>
                <div class="check__container">
                    <label for="">Credentials Wolt</label>
                    <div class="check">
                        <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="store.wolt.credentials">
                        <svg-icon class="check__icon icon__success" name="check_box-y" v-if="store.wolt.credentials"></svg-icon>
                        <svg-icon class="check__icon icon__primary" name="check_box-n" v-if="!store.wolt.credentials"></svg-icon>
                    </div>
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
    computed: {
        store: {
            get() {
                return this.$store.getters["store/store"]
            },
            set(value){
                this.$store.dispatch("store/editStore", value)
            }
        },
        customers() {
            return this.$store.getters["customer/customers"]
        },
        error() {
            return this.$store.getters["auth/error"]
        }
    },
    methods: {
        setWoltMatcher(value) {
            this.$store.dispatch("store/editWoltMatcher", value)
        },
        setEfoodMatcher(value) {
            this.$store.dispatch("store/editEfoodMatcher", value)
        },
        save() {
            const payload = {
                uid : this.store.uid,
                customer : this.store.customer,
                name : this.store.name,
                username : this.store.username,
                password : this.store.password,
                installation_enabled : this.store.installation_enabled,
                efood_enabled : this.store.efood_enabled,
                wolt_enabled : this.store.wolt_enabled,
                created : this.store.created,
                installation : {
                    uid: this.store.installation.uid,
                    live: {
                        uid: this.store.installation.live.uid,
                        products : this.store.installation.live.products,
                        products_info: this.store.installation.live.products_info,
                        preferences : this.store.installation.live.preferences,
                        preferences_info : this.store.installation.live.preferences_info,
                        pricebooks: this.store.installation.live.pricebooks,
                        pricebooks_info : this.store.installation.live.pricebooks_info,
                        discounts : this.store.installation.live.discounts,
                        discounts_info : this.store.installation.live.discounts_info,
                        cancels : this.store.installation.live.cancels,
                        cancels_info : this.store.installation.live.cancels_info,
                    },
                    hardware: {
                        uid : this.store.installation.hardware.uid,
                        pc : this.store.installation.hardware.pc,
                        pc_info : this.store.installation.hardware.pc_info,
                        programs : this.store.installation.hardware.programs,
                        programs_info : this.store.installation.hardware.programs_info,
                        printers : this.store.installation.hardware.printers,
                        printers_info : this.store.installation.hardware.printers_info,
                        fiscal : this.store.installation.hardware.fiscal,
                        fiscal_info : this.store.installation.hardware.fiscal_info,
                        router: this.store.installation.hardware.router,
                        router_info: this.store.installation.hardware.router_info,
                        antenna : this.store.installation.hardware.antenna,
                        antenna_info : this.store.installation.hardware.antenna_info,
                    },
                    software: {
                        uid : this.store.installation.software.uid,
                        training : this.store.installation.software.training,
                        training_info : this.store.installation.software.training_info,
                        privileges : this.store.installation.software.privileges,
                        privileges_info : this.store.installation.software.privileges_info,
                        tables : this.store.installation.software.tables,
                        tables_info : this.store.installation.software.tables_info,
                        printings : this.store.installation.software.printings,
                        printings_info : this.store.installation.software.printings_info,
                        work_clock : this.store.installation.software.work_clock,
                        work_clock_info : this.store.installation.software.work_clock_info,
                    }
                },
                efood : {
                    uid : this.store.efood.uid,
                    customer: this.store.efood.customer,
                    match: this.store.efood.match,
                    matcher : this.store.efood.matcher, // 0-> iserveu , 1->customer
                    credentials : this.store.efood.credentials,
                    vendor : this.store.efood.vendor,
                    connect : this.store.efood.connect,
                },
                wolt : {
                    uid : this.store.wolt.uid,
                    export : this.store.wolt.export,
                    connect : this.store.wolt.connect,
                    match : this.store.wolt.match,
                    matcher :this.store.wolt.matcher, // 0-> iserveu , 1->customer, 2->wolt
                    credentials : this.store.wolt.credentials,
                }
            }
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
                this.$store.dispatch("store/saveStore", payload)
                this.$store.commit("auth/setError", null)
                this.$router.push('/stores')
            }

        },
        cancel() {
            this.$store.dispatch("store/cancelStore")
            this.$store.commit("auth/setError", null)
            this.$router.push('/stores')
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
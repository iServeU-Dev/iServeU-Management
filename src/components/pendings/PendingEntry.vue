<template>
    <div class="store">
        <comfirmation-modal v-if="openCheck == true" :payload="pending" @saveAction="done" @cancelAction="closeConfimartion"></comfirmation-modal>
        <div class="store__header" @click.self="expand">
            <div class="store_header--title">
                {{ pending.store.name }}
            </div>
            <div class="store_header--actions">
                <button class="store_header--actions-btn" @click="openCheckModal()" v-if="!pending.deleted">
                    <svg-icon class="store_header--actions-icon success" name="check"></svg-icon>
                </button>
                <button class="store_header--actions-btn" @click="editPending(pending)">
                    <svg-icon class="store_header--actions-icon edit" name="edit"></svg-icon>
                </button>
            </div>
        </div>
        <div class="store__body" v-if="collapse">
            <div class="store__body--details">
                <div class="store__body--title">
                    <h3>Στοιχεία</h3>
                </div>
                <div class="store__body--info">
                    <div class="store__body--entry store__body--entry-name">
                        <label for="email">Ημερομηνία:</label>
                        {{date}}
                    </div>
                    <div class="store__body--entry store__body--entry-name">
                        <label for="email">Πελάτης:</label>
                        {{pending.customer.name}}
                    </div>
                    <div class="store__body--entry store__body--entry-name">
                        <label for="email">Τηλέφωνο:</label>
                        {{pending.store.phone}}
                    </div>
                    <div class="store__body--entry store__body--entry-name">
                        <label for="email">Username:</label>
                        {{pending.store.username}}
                    </div>
                    <div class="store__body--entry store__body--entry-name">
                        <label for="email">Password:</label>
                        {{pending.store.password}}
                    </div>
                </div>
            </div>
            <div class="store__body--install" v-if="pending.installation_enabled">
                <div class="store__body--title">
                    <h3>Εγκατάσταση</h3>
                </div>
                <div class="install">
                    <div class="install__title">
                        <h4>Live</h4>
                    </div>
                    <div class="entry">
                        <label for="">Προϊόντα</label>
                        <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.installation.live.products === false"></svg-icon>
                        <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.installation.live.products === true"></svg-icon>
                        <input class="input__field" type="text" name="" id="" :value="pending.installation.live.products_info">
                    </div>
                    <div class="entry">
                        <label for="">Προτιμήσεις</label>
                        <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.installation.live.preferences === false"></svg-icon>
                        <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.installation.live.preferences === true"></svg-icon>
                        <input class="input__field" type="text" name="" id="" :value="pending.installation.live.preferences_info">
                    </div>
                    <div class="entry">
                        <label for="">Τιμοκατάλογοι</label>
                        <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.installation.live.pricebooks === false"></svg-icon>
                        <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.installation.live.pricebooks === true"></svg-icon>
                        <input class="input__field" type="text" name="" id="" :value="pending.installation.live.pricebooks_info">
                    </div>
                    <div class="entry">
                        <label for="">Λόγοι Έκπτωσεις</label>
                        <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.installation.live.discounts === false"></svg-icon>
                        <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.installation.live.discounts === true"></svg-icon>
                        <input class="input__field" type="text" name="" id="" :value="pending.installation.live.discounts_info">
                    </div>
                    <div class="entry">
                        <label for="">Λόγοι Ακύρωσεις</label>
                        <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.installation.live.cancels === false"></svg-icon>
                        <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.installation.live.cancels === true"></svg-icon>
                        <input class="input__field" type="text" name="" id="" :value="pending.installation.live.cancels_info">
                    </div>
                </div>
                <div class="training">
                    <div class="training__title">
                        <h4>Εκπαίδευση</h4>
                    </div>
                    <div class="entry">
                        <label for="">Εκπαίδευση Χρηστών</label>
                        <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.installation.software.training === false"></svg-icon>
                        <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.installation.software.training === true"></svg-icon>
                        <input class="input__field" type="text" name="" id="" :value="pending.installation.software.training_info">
                    </div>
                    <div class="entry">
                        <label for="">Δικαιώματα</label>
                        <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.installation.software.privileges === false"></svg-icon>
                        <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.installation.software.privileges === true"></svg-icon>
                        <input class="input__field" type="text" name="" id="" :value="pending.installation.software.privileges_info">
                    </div>
                    <div class="entry">
                        <label for="">Τραπέζια</label>
                        <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.installation.software.tables === false"></svg-icon>
                        <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.installation.software.tables === true"></svg-icon>
                        <input class="input__field" type="text" name="" id="" :value="pending.installation.software.tables_info">
                    </div>
                    <div class="entry">
                        <label for="">Εκτυπώσεις</label>
                        <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.installation.software.printings === false"></svg-icon>
                        <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.installation.software.printings === true"></svg-icon>
                        <input class="input__field" type="text" name="" id="" :value="pending.installation.software.printings_info">
                    </div>
                    <div class="entry">
                        <label for="">Μισθοδοσία</label>
                        <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.installation.software.work_clock === false"></svg-icon>
                        <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.installation.software.work_clock === true"></svg-icon>
                        <input class="input__field" type="text" name="" id="" :value="pending.installation.software.work_clock_info">
                    </div>
                </div>
                <div class="equipment">
                    <div class="equipment__title">
                        <h4>Εξοπλισμός</h4>
                    </div>
                    <div class="entry">
                        <label for="">Pc</label>
                        <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.installation.hardware.pc === false"></svg-icon>
                        <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.installation.hardware.pc === true"></svg-icon>
                        <input class="input__field" type="text" name="" id="" :value="pending.installation.software.pc_info">
                    </div>
                    <div class="entry">
                        <label for="">Προγραμματα</label>
                        <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.installation.hardware.programs === false"></svg-icon>
                        <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.installation.hardware.programs === true"></svg-icon>
                        <input class="input__field" type="text" name="" id="" :value="pending.installation.software.programs_info">
                    </div>
                    <div class="entry">
                        <label for="">Εκτυπωτές</label>
                        <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.installation.hardware.printers === false"></svg-icon>
                        <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.installation.hardware.printers === true"></svg-icon>
                        <input class="input__field" type="text" name="" id="" :value="pending.installation.software.printers_info">
                    </div>
                    <div class="entry">
                        <label for="">Φορολογικός</label>
                        <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.installation.hardware.fiscal === false"></svg-icon>
                        <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.installation.hardware.fiscal === true"></svg-icon>
                        <input type="text" name="" id="" :value="pending.installation.software.fiscal_info">
                    </div>
                    <div class="entry">
                        <label for="">Ρούτερ</label>
                        <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.installation.hardware.router === false"></svg-icon>
                        <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.installation.hardware.router === true"></svg-icon>
                        <input class="input__field" type="text" name="" id="" :value="pending.installation.software.router_info">
                    </div>
                    <div class="entry">
                        <label for="">Κεραία</label>
                        <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.installation.hardware.antenna === false"></svg-icon>
                        <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.installation.hardware.antenna === true"></svg-icon>
                        <input class="input__field" type="text" name="" id="" :value="pending.installation.software.antenna_info">
                    </div>
                </div>
            </div>
            <div class="store__body--efood" v-if="pending.efood_enabled">
                <div class="store__body--title">
                    <h3>Efood</h3>
                </div>
                <div class="entry">
                    <label for="">Επικοινωνια με Πελάτη</label>
                    <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.efood.customer === false"></svg-icon>
                    <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.efood.customer === true"></svg-icon>
                </div>
                <div class="entry">
                    <label for="">Τοποθετηση Vendor Id</label>
                    <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.efood.vendor === false"></svg-icon>
                    <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.efood.vendor === true"></svg-icon>
                    <input disabled class="input_enabled" type="text" name="" id="" :value="pending.efood.credentials_info">
                </div>
                <div class="entry">
                    <label for="">Αντιστοιχιση Προϊόντων</label>
                    <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.efood.match === false"></svg-icon>
                    <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.efood.match === true"></svg-icon>
                    <label for="">iServeU</label>
                    <svg-icon class="icon__primary-n icon" name="radio-off" v-if="pending.efood.matcher !== 1"></svg-icon>
                    <svg-icon class="icon__success-n icon" name="radio-on" v-if="pending.efood.matcher === 1"></svg-icon>
                    <label>Πελάτης</label>
                    <svg-icon class="icon__primary-n icon" name="radio-off" v-if="pending.efood.matcher !== 2"></svg-icon>
                    <svg-icon class="icon__success-n icon" name="radio-on" v-if="pending.efood.matcher === 2"></svg-icon>
                </div>
                <div class="entry">
                    <label for="">Εγκατάσταση-Παραμετροποιηση Connect</label>
                    <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.efood.connect === false"></svg-icon>
                    <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.efood.connect === true"></svg-icon>
                </div>
                <div class="entry">
                    <label for="">Ενεργοποιήση απο Efood</label>
                    <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.efood.enabled === false"></svg-icon>
                    <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.efood.enabled === true"></svg-icon>
                </div>
            </div>
            <div class="store__body--wolt" v-if="pending.wolt_enabled">
                <div class="store__body--title">
                    <h3>Wolt</h3>
                </div>
                <div class="entry">
                    <label for="">Connect - Eξαγωγη Προϊόντων</label>
                    <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.wolt.export === false"></svg-icon>
                    <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.wolt.export === true"></svg-icon>
                </div>
                <div class="entry">
                    <label for="">Αντιστοιχιση Προϊόντων</label>
                    <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.wolt.match === false"></svg-icon>
                    <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.wolt.match === true"></svg-icon>
                    <label for="">iServeU</label>
                    <svg-icon class="icon__primary-n icon" name="radio-off" v-if="pending.wolt.matcher !== 1"></svg-icon>
                    <svg-icon class="icon__success-n icon" name="radio-on" v-if="pending.wolt.matcher === 1"></svg-icon>
                    <label for="">Πελάτης</label>
                    <svg-icon class="icon__primary-n icon" name="radio-off" v-if="pending.wolt.matcher !== 2"></svg-icon>
                    <svg-icon class="icon__success-n icon" name="radio-on" v-if="pending.wolt.matcher === 2"></svg-icon>
                    <label for="">Wolt</label>
                    <svg-icon class="icon__primary-n icon" name="radio-off" v-if="pending.wolt.matcher !== 3"></svg-icon>
                    <svg-icon class="icon__success-n icon" name="radio-on" v-if="pending.wolt.matcher === 3"></svg-icon>
                </div>
                <div class="entry">
                    <label for="">Παραμετροποίηση Connect</label>
                    <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.wolt.connect === false"></svg-icon>
                    <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.wolt.connect === true"></svg-icon>
                </div>
                <div class="entry">
                    <label for="">Credentials Wolt</label>
                    <svg-icon class="icon__primary-n icon" name="check_box-n" v-if="pending.wolt.credentials === false"></svg-icon>
                    <svg-icon class="icon__success-n icon" name="check_box-y" v-if="pending.wolt.credentials === true"></svg-icon>
                    <input disabled class="input_enabled" type="text" name="" id="" :value="pending.wolt.credentials_info">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SvgIcon from '../shared/SvgIcon.vue'
import ComfirmationModal from "../shared/ComfirmationModal.vue";
export default {
    props: [
        "pending"
    ],
    data() {
        return {
            collapse: false,
            enabled: false,
            date : this.pending.created.split("T")[0],
            openCheck: false
        }
    },
    components: {
        SvgIcon,
        ComfirmationModal
    },
    methods: {
        openCheckModal(){
            this.openCheck = true
        },
        closeConfimartion() {
            this.openCheck = false
        },
        expand() {
            this.collapse = !this.collapse
        },
        editPending(payload) {
            this.$store.dispatch("pending/editPending", payload)
            this.$router.push('pendings/edit')
        },
        done() {
            this.$store.dispatch("pending/deletePending", this.pending.uid)
        }
    }
}
</script>
<style scoped>
    .store {
        margin: 0.5rem;
        border: 1px solid #5f5c5c79;
        border-radius: var(--border-radius-1);
    }
    .store__header {
        cursor: pointer;
        background: #7a79782c;
        padding: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .store_header--title {
        margin-left: 1rem;
        font-size: 1rem;
        font-weight: bold;
        display: flex;
        align-items: center;
    }
    .store_header--actions {
        display: grid;
        grid-template-columns: repeat(2,auto);
    }
    .store_header--actions-btn {
        cursor: pointer;
        border-radius: 5px;
        margin: 0 0.2rem;
        display: grid;
        justify-content: center;
        align-content: center;
    }
    .edit {
        background: var(--color-warning);
    }
    .danger {
        background: var(--color-danger);
    }
    .store_header--actions-icon {
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 5px;
        padding: 0.2rem;
        fill: white;
    }
    .store__body {
        border-top: 1px solid #5f5c5c79;
        background: #7a797810;
        padding: 2rem;
        display: grid;
    }
    .icon__success-n {
        fill: var(--color-success);
        margin-left: 0.3rem;
    }
    .icon__primary-n {
        fill: var(--color-primary);
        margin-left: 0.3rem;
    }
    .icon {
        height: 1.5rem;
        width: 1.5rem;
    }
    .store__body--info {
        display: grid;
    }
    .store__body--entry {
        margin: 0.5rem;
        justify-self: start;
    }
    .store__body--entry label {
        font-weight: bold;
    }
    .store__body--entry input {
        padding: 0.3rem;
        border: 1px solid rgba(0, 0, 0, 0.267);
        border-radius: 5px;
        margin-left: 0.5rem;
    }
    .store__body--entry-priv {
        grid-row-start: 2;
        display: grid;
        grid-template-columns: repeat(2,auto);
        align-items: center;
        justify-content: left;
    }
    .store__body--title {
        border-bottom: 1px solid rgba(0, 0, 0, 0.267);
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
        padding-bottom: 0.5rem;
        grid-row-start: 1;
        grid-column-start: 1;
        grid-column-end: 4;
    }
    .store__body--install {
        display: grid;
        grid-template-rows: auto 1fr;
        grid-template-columns: repeat(3,1fr);
    }
    .install {
        grid-row-start: 2;
        grid-column-start: 1;
    }
    .training {
        grid-row-start: 2;
        grid-column-start: 2;
    }
    .equipment {
        grid-row-start: 2;
        grid-column-start: 3;
    }
    .entry {
        display: grid;
        grid-template-columns: 80% 20%;
    }
    .input__field {
        padding: 0.2rem;
        margin: 0.5rem 0;
        border: 1px solid #9191917c;
        border-radius: 2px;
    }
    .equipment__title,
    .install__title,
    .training__title {
        border-bottom: 1px solid rgba(0, 0, 0, 0.267);
        padding-bottom: 0.5rem;
        margin-bottom: 0.5rem;
    }
@media only screen and (max-width: 768px) {
    .store_header--actions-icon {
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 5px;
        padding: 0.2rem;
        fill: white;
    }
    .store__body {
        border-top: 1px solid #5f5c5c79;
        background: #7a797810;
        padding: 0.5rem;
        display: grid;
    }
    .icon__success-n {
        fill: var(--color-success);
        margin-left: 0.3rem;
    }
    .icon__primary-n {
        fill: var(--color-primary);
        margin-left: 0.3rem;
    }
    .icon {
        height: 1.5rem;
        width: 1.5rem;
    }
    .store__body--info {
        display: grid;
    }
    .store__body--entry {
        margin: 0.5rem;
        justify-self: start;
    }
    .store__body--entry label {
        font-weight: bold;
    }
    .store__body--entry input {
        padding: 0.3rem;
        border: 1px solid rgba(0, 0, 0, 0.267);
        border-radius: 5px;
        margin-left: 0.5rem;
    }
    .store__body--entry-priv {
        grid-row-start: 2;
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: left;
    }
    .store__body--install {
        display: grid;
        grid-template-rows: auto 1fr;
        grid-template-columns: 1fr;
    }
    .install {
        grid-row-start: 2;
        grid-column-start: 1;
    }
    .training {
        grid-row-start: 3;
        grid-column-start: 1;
    }
    .equipment {
        grid-row-start: 4;
        grid-column-start: 1;
    }
    .entry {
        display: grid;
        grid-template-columns: 80% 20%;
    }
    .input__field {
        padding: 0.2rem;
        margin: 0.5rem 0;
        border: 1px solid #9191917c;
        border-radius: 2px;
    }
    .ticket_header--actions-btn {
        cursor: pointer;
        border-radius: 5px;
        margin: 0 0.2rem;
        display: grid;
        justify-content: center;
        align-content: center;
    }
    .ticket_header--actions-icon {
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 5px;
        padding: 0.2rem;
        fill: white;
    }
}
</style>
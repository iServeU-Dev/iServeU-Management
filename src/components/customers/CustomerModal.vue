<template>
    <section class="modal">
        <error-comp v-if="error !== null" :error="error"/>
        <div class="modal__content">
            <div class="cont__header">
                <h2>Νέος Πελάτης</h2>
            </div>
            <div class="box">
                <h3 class="box__header">Βασικές Πληροφορίες</h3>
                <div class="box__container">
                    <div class="box__container--field">
                        <label for="email">Όμομα:</label>
                        <input class="input_enabled" type="text" name="name" id="name" v-model="customer.name">
                    </div>
                    <div class="box__container--field customer__phone">
                        <label for="email">Τηλέφωνο:</label>
                        <input class="input_enabled" type="text" name="afm" id="afm" v-model="customer.phone">
                    </div>
                    <div class="box__container--field customer__vat">
                        <label for="email">ΑΦΜ:</label>
                        <input class="input_enabled" type="text" name="afm" id="afm" v-model="customer.vat_number">
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
import ErrorComp from '../shared/ErrorComp.vue'
export default {
    components: {
        ErrorComp
    },
    computed: {
        customer: {
            get() {
                return this.$store.getters["customer/customer"]
            },
            set(value) {
                this.$store.dispatch('customer/editCustomer', value)
            }  
        },
        error() {
            return this.$store.getters["auth/error"]
        }
    },
    methods: {
        save() {
            const payload = {
                uid : this.customer.uid,
                name: this.customer.name,
                phone: this.customer.phone,
                vat_number: this.customer.vat_number,
                created: this.customer.created,
                last_updated: this.customer.last_updated
            }
            if (payload.name === ""){
                this.$store.commit("auth/setError", "Empty Name")
            }
            else if(payload.phone === "") {
                this.$store.commit("auth/setError", "Empty Phone")
            }
            else if(payload.vat_number === "") {
                this.$store.commit("auth/setError", "Empty Vat Number")
            }
            else {
                this.$store.dispatch("customer/saveCustomer", payload)
                this.$store.commit("auth/setError", null)
                this.$router.push('/customers')
            }
        },
        cancel() {
            this.$store.dispatch("customer/cancelCustomer")
            this.$store.commit("auth/setError", null)
            this.$router.push('/customers')
        }
    }
}
</script>
<style scoped>
    .customer__vat {
        grid-row-start: 2;
    }
    .customer__phone {
        grid-row-start: 3;
    }
</style>
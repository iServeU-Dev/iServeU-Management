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
            <div class="box">
                <h3 class="box__header">Καταστήματα</h3>
                <div class="box__container">
                    <div class="store__header">
                        <div class="store__header--add">
                            <button class="success__btn" @click="addStore">
                                <span>Create</span>
                            </button>
                        </div>
                    </div>
                    <div class="store__entrys">
                        <!-- <store-entry v-for="(store, index) in customer.stores" :key="store.uid" :store="store" :index="index" @updateCustomer = "updateStore"></store-entry> -->
                        <div v-for="(store, index) in customer.stores" :key="store.uid">
                            <div class="store__headers" v-if="customer.stores[index].deleted === false">
                                <div class="store__header--name"><input type="text" placeholder="Όνομα..." v-model="customer.stores[index].name"></div>
                                    <div class="store__header--username"><input type="text" placeholder="Username..." v-model="customer.stores[index].username"></div>
                                    <div class="store__header--password"><input type="text" placeholder="Password..." v-model="customer.stores[index].password"></div>
                                    <div class="store__header--password"><input type="text" placeholder="Phone..." v-model="customer.stores[index].phone"></div>
                                    <div class="store__header--add">
                                        <button class="danger__btn" @click="deleteStore(index)" v-if="customer.stores[index].uid === ''">
                                            <svg-icon class="icon" name="clear"></svg-icon>
                                        </button>
                                    </div>
                            </div>
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
import ErrorComp from '../shared/ErrorComp.vue'
import SvgIcon from '../shared/SvgIcon.vue';
export default {
    components: {
        ErrorComp,
        SvgIcon
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
        addStore(){
            
            this.$store.dispatch('customer/addStore', {
                uid: "",
                name: "",
                username: "",
                password : "",
                phone: "",
                deleted : false
            })
        },
        save() {
            const payload = {
                uid : this.customer.uid,
                name: this.customer.name,
                phone: this.customer.phone,
                stores : this.customer.stores,
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
                for(let i = 0; i< this.customer.stores.length ; i++ ) {
                    if(this.customer.stores[i].name === "") {
                        this.$store.commit("auth/setError", "Empty Store Name")
                        return
                    }
                }
                this.$store.dispatch("customer/saveCustomer", payload)
                this.$store.commit("auth/setError", null)
                this.$router.push('/customers')
            }
        },
        deleteStore(payload) {
            this.$store.dispatch("customer/deleteStore", payload)  
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
    .box__container {
        grid-template-columns: 1fr;
    }
    .store__header {
        display: grid;
        padding: 0.5rem;
        border-bottom: 2px solid var(--color-primary);
        align-items: center ;
    }
    .store__header--add {
        justify-self: right;
        
    }
    .success__btn {
        cursor: pointer;
        padding: 0.3rem 0.5rem;
        border-radius: 5px;
        background: var(--color-success);
        color: white;
        display: grid;
        align-content: center;
        justify-content: center;
    }
    .store__entrys > :nth-child(even) {
        border-radius: 2px;
        background-color: rgba(128, 128, 128, 0.24);
    }

    .store__headers {
        margin: 0.2rem;
        display: grid;
        grid-template-columns: repeat(4,1fr) 0.2fr;
        padding: 0.2rem;
        border-bottom: none;
        align-items: center ;
    }
    input {
        padding: 0.2rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.418);
        background-color: white;
        border-radius: 2px;
    }
    .store__header--add {
        justify-self: right;
        display: flex;
        
    }
    .success__btn {
        margin-right: 0.2rem;
        cursor: pointer;
        padding: 0.3rem 0.3rem;
        border-radius: 5px;
        background: var(--color-success);
        color: white;
        display: grid;
        align-content: center;
        justify-content: center;
    }
    .danger__btn {
        margin-right: 0.2rem;
        cursor: pointer;
        padding: 0.3rem 0.3rem;
        border-radius: 5px;
        background: var(--color-danger);
        color: white;
        display: grid;
        align-content: center;
        justify-content: center;
    }
    .icon {
        height: 1rem;
        width: 1rem;
        fill: white;
    }
</style>
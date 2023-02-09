<template>
    <section class="modal">
        <error-comp v-if="error !== null" :error="error"/>
        <div class="modal__content">
            <div class="cont__header">
                <h2>Νέο Εισητήριο</h2>
            </div>
            <div class="box">
                <h3 class="box__header">Βασικές Πληροφορίες</h3>
                <div class="box__container">
                    <div class="box__container--field">
                        <label for="email">Πελάτης:</label>
                        <v-select class="selection" :filter="fuseSearch" :options="customers" label='name' v-model="ticket.customer"></v-select>
                    </div>
                    <div class="box__container--field store">
                        <label for="email">Κατάστημα:</label>
                        <v-select class="selection" :options="stores" label='name' v-model="ticket.store"></v-select>
                    </div>
                    <div class="box__container--field problem">
                        <label for="email">Πρόβλημα:</label>
                        <textarea type="text" name="afm" id="afm" v-model="ticket.description"></textarea>
                    </div>
                    <div class="box__container--field solution">
                        <label for="email">Επίλυση:</label>
                        <textarea type="text" name="afm" id="afm" v-model="ticket.solution"></textarea>
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
import Fuse from "fuse.js";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import ErrorComp from "../shared/ErrorComp.vue";
export default {
    data() {
        return {
            customer: {}
        }
    },
    components: {
        vSelect,
        ErrorComp
    },
    computed: {
        customers() {
            return this.$store.getters["customer/customers"]
        },
        stores() {
            if(this.ticket.customer === null) {
                return []
            }
            else {
                return this.ticket.customer.stores;
            }
            
        },
        ticket: {
            get() {
                return this.$store.getters["ticket/ticket"]
            },
            set(value) {
                this.$store.dispatch("ticket/editTicket", value)
            }
        },
        error() {
            return this.$store.getters["auth/error"]
        }
    },
    methods: {
        save() {
            const payload = {
                uid : this.ticket.uid,
                store : this.ticket.store,
                customer : this.ticket.customer,
                user : this.$store.getters["auth/logedInUser"],
                created : this.ticket.created,
                description : this.ticket.description,
                status : this.ticket.status,
                solution : this.ticket.solution,
                closed : this.ticket.closed,
                date_closed : this.ticket.date_closed
            }
            if (payload.store === null){
                this.$store.commit("auth/setError", "Empty Store")
            }
            else if (payload.user === null) {
                this.$store.commit("auth/setError", "Empty User")
            }
            else {
                this.$store.dispatch("ticket/saveTicket", payload)
                this.$store.commit("auth/setError", null)
                this.$router.push('/ticketing')
            }
            
        },
        cancel() {
            this.$store.dispatch("ticket/cancelTicket")
            this.$store.commit("auth/setError", null)
            this.$router.push('/ticketing')
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
        },
    }
}
</script>
<style>
    .store {
        margin-top: 1rem;
        grid-row-start: 2;
    }
    .problem {
        grid-row-start: 3;
        margin: 1rem;
        margin-left: 0;
    }
    .solution {
        grid-row-start: 3;
        margin: 1rem;
    }
    textarea {
        padding: 0.5rem;
        border: 1px solid rgba(0, 0, 0, 0.267);
        border-radius: 5px;
        height: 15vh;
    }
@media only screen and (max-width: 768px) {
    .problem {
        grid-row-start: 3;
        margin: 1rem;
    }
    .solution {
        grid-row-start: 4;
        margin: 1rem;
    }
    textarea {
        padding: 0.5rem;
        border: 1px solid rgba(0, 0, 0, 0.267);
        border-radius: 5px;
        height: 15vh;
    }
}
</style>
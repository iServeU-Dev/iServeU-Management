<template>
    <section class="cont">
        <controls-comp title="Εκκρεμότητες" path="stores" @searchFilter="setSearch"></controls-comp>
        <div class="table">
            <store-entry v-for="store in stores" :key="store.uid" :store="store"></store-entry>
        </div>
        <router-view></router-view>
    </section>
</template>
<script>
import Fuse from 'fuse.js'
import ControlsComp from './shared/ControlsComp.vue'
import StoreEntry from './stores/StoreEntry.vue'
export default {
    props:[
        "onSearchFilter"
    ],
    data() {
        return {
            searchFilter: ''
        }
    },
    computed: {
        stores() {
            const strs = this.$store.getters["store/stores"]
            let returned= []
            const fuse = new Fuse(strs, {
                keys: ['name', 'customer.name', '.customer.phone', 'customer.vat_number'],
                useExtendedSearch: true
            })
            if (this.searchFilter === "") {
                returned = strs
            }else {
                let fuseSearch = fuse.search("'"+this.searchFilter)
                for (let i = 0; i < fuseSearch.length; i+=1) {
                    returned.push(fuseSearch[i].item)
                }
            }
            return returned
        }
    },
    components: {
        ControlsComp,
        StoreEntry
    },
    methods:{
        setSearch(value) {
            this.searchFilter = value
        }
    },
    mounted() {
        this.$store.dispatch("customer/loadCustomers")
        this.$store.dispatch("user/loadUsers")
        this.$store.dispatch("store/loadStores")
        this.$store.dispatch("ticket/loadTickets")
    }
}
</script>
<template>
    <section class="cont">
        <controls-comp title="Πελάτες" path="customers" @searchFilter="setSearch"></controls-comp>
        <div class="table">
            <customer-entry v-for="customer in customers" :key="customer.uid" :customer="customer"></customer-entry>
        </div>
        <router-view></router-view>
    </section>
</template>
<script>
import Fuse from 'fuse.js'
import ControlsComp from './shared/ControlsComp.vue'
import CustomerEntry from './customers/CustomerEntry.vue'
export default {
    props:[
        "onSearchFilter"
    ],
    data() {
        return {
            searchFilter: ''
        }
    },
    components: {
        ControlsComp,
        CustomerEntry
    },
    computed: {
        customers() {
            const custs = this.$store.getters["customer/customers"]
            let returned= []
            const fuse = new Fuse(custs, {
                keys: ['name',"phone", 'vat_number'],
                useExtendedSearch: true
            })
            if (this.searchFilter === "") {
                returned = custs
            }else {
                let fuseSearch = fuse.search("'"+this.searchFilter)
                for (let i = 0; i < fuseSearch.length; i+=1) {
                    returned.push(fuseSearch[i].item)
                }
            }
            return returned.slice().sort((a,b) => {
                let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();
                if (fa < fb) {
                    return -1
                }
                if (fa > fb) {
                    return 1
                }
                return 0
            })
            
        }
    },
    methods:{
        setSearch(value) {
            this.searchFilter = value
        }
    },
    mounted() {
        this.$store.dispatch("customer/loadCustomers")
    }
}
</script>
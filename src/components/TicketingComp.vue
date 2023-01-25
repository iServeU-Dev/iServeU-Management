<template>
    <section class="cont">
        <controls-comp title="Ticketing" path="ticketing" @searchFilter="setSearch"></controls-comp>
        <div class="table">
            <ticket-entry v-for="ticket in tickets" :key="ticket.uid" :ticket="ticket"></ticket-entry>
        </div>
        <router-view></router-view>
    </section>
</template>
<script>
import Fuse from 'fuse.js'
import ControlsComp from './shared/ControlsComp.vue'
import TicketEntry from './tickets/TicketEntry.vue'
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
        TicketEntry
    }, 
    computed: {
        tickets() {
            const ticks = this.$store.getters["ticket/tickets"]
            let returned= []
            const fuse = new Fuse(ticks, {
                keys: ['store.name', 'store.customer.name', 'store.customer.phone', 'store.customer.vat_number'],
                useExtendedSearch: true
            })
            if (this.searchFilter === "") {
                returned = ticks
            }else {
                let fuseSearch = fuse.search("'"+this.searchFilter)
                for (let i = 0; i < fuseSearch.length; i+=1) {
                    returned.push(fuseSearch[i].item)
                }
            }
            return returned
        }
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
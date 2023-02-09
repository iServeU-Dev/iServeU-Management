<template>
    <section class="cont">
        <controls-comp title="Εγκαταστάσεις" path="pendings" @searchFilter="setSearch"></controls-comp>
        <div class="filter">
            <div>Ενεργά:</div>
            <div class="icon_cont">
                <input type="checkbox" v-model="done" class="icon__check">
                <svg-icon class="icon icon__active" name="active" v-if="!done"></svg-icon>
                <svg-icon class="icon icon__deactive" name="deactive" v-if="done"></svg-icon>
            </div>
        </div>
        <div class="table">
            <pending-entry v-for="pending in pendings" :key="pending.uid" :pending="pending"></pending-entry>
        </div>
        <router-view></router-view>
    </section>
</template>
<script>
import Fuse from 'fuse.js'
import ControlsComp from './shared/ControlsComp.vue'
import PendingEntry from './pendings/PendingEntry.vue'
import SvgIcon from './shared/SvgIcon.vue'
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
        pendings() {
            const strs = this.$store.getters["pending/pendings"]
            let returned= []
            const fuse = new Fuse(strs, {
                keys: ['store.name', 'customer.name', 'customer.phone', 'customer.vat_number'],
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
        },
        done: {
            get() {
                return this.$store.getters["pending/done"]
            },
            set(value) {
                this.$store.dispatch("pending/setDone", value)
            }
        }
    },
    components: {
        ControlsComp,
        PendingEntry,
        SvgIcon
    },
    methods:{
        setSearch(value) {
            this.searchFilter = value
        }
    },
    mounted() {
        this.$store.dispatch("customer/loadCustomers")
        if(this.$store.getters["pending/done"] == false) {
            this.$store.dispatch("pending/loadPendings")
        }else {
            this.$store.dispatch("pending/loadDonePendings")
        }
    }
}
</script>
<style scoped>
    .filter {
        font-weight: bold;
        color: darkcyan;
        margin-top: 0.2rem;
        padding: 0.5rem;
        display: flex;
        align-items: center;
    }
    .icon_cont {
        cursor: pointer;
        margin-left: 0.2rem;
        display: grid;
        align-items: center;
    }
    .icon__check {
        z-index: 7;
        cursor: pointer;
        grid-column-start: 1;
        grid-row-start: 1;
        align-self: center;
        height: 1.5rem;
        width: 1.5rem;
    }
    .icon {
        grid-column-start: 1;
        grid-row-start: 1;
        align-self: center;
        height: 1.5rem;
        width: 1.5rem;
    }
    .icon__active {
        fill: var(--color-success);
    }
    .icon__deactive {
        fill: var(--color-danger);
    }
</style>
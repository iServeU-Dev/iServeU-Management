<template>
    <section class="cont">
        <controls-comp title="Χρήστες" path="users" @searchFilter="setSearch"></controls-comp>
        <div class="table">
            <user-entry v-for="user in users" :key="user.uid" :user="user"></user-entry>
        </div>
        <router-view></router-view>
    </section>
</template>
<script>
import Fuse from 'fuse.js'
import ControlsComp from './shared/ControlsComp.vue'
import UserEntry from './users/UserEntry.vue'
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
        UserEntry
    },
    computed: {
        users() {
            const usrs = this.$store.getters["user/users"]
            let returned= []
            const fuse = new Fuse(usrs, {
                keys: ['name', 'email'],
                useExtendedSearch: true
            })
            if (this.searchFilter === "") {
                returned = usrs
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
        this.$store.dispatch("user/loadUsers")
    }
}
</script>
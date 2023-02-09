<template>
    <div class="store__headers" v-if="store.deleted === false">
        <div class="store__header--name"><input type="text" placeholder="Όνομα..." v-model="storeEntry.name" @keyup="updateStore"></div>
            <div class="store__header--username"><input type="text" placeholder="Username..." v-model="storeEntry.username" @keyup="updateStore"></div>
            <div class="store__header--password"><input type="text" placeholder="Password..." v-model="storeEntry.password" @keyup="updateStore"></div>
            <div class="store__header--password"><input type="text" placeholder="Phone..." v-model="storeEntry.phone" @keyup="updateStore"></div>
            <div class="store__header--add">
                <button class="danger__btn" @click="deleteStore">
                    <svg-icon class="icon" name="clear"></svg-icon>
                </button>
            </div>
    </div>
</template>
<script>
import SvgIcon from '../shared/SvgIcon.vue';
export default {
    props: [
        "store",
        "index"
    ],
    data() {
        return {
            storeEntry: this.store
        }
    },
    components: {
        SvgIcon
    },
    methods: {
        deleteStore() {
            if(this.store.uid === "") {
                this.$store.dispatch("customer/deleteNewStore", this.index)
            }else {
                this.$store.dispatch("customer/deleteStore", this.index)
            }
            
        },
        updateStore() {
            this.$emit("updateCustomer", {
                index : this.index,
                store : this.storeEntry})
        }
    }
}
</script>
<style scoped>
    .box__container {
        grid-template-columns: 1fr;
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
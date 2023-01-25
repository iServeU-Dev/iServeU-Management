<template>
    <div class="store">
        <div class="store__header" @click.self="expand">
            <div class="store_header--title">
                {{ customer.name }}
            </div>
            <div class="store_header--actions">
                <button class="store_header--actions-btn" @click="editCustomer(customer)">
                    <svg-icon class="store_header--actions-icon edit" name="edit"></svg-icon>
                </button>
                <button class="store_header--actions-btn" @click="deleteCustomer(customer.uid)">
                    <svg-icon class="store_header--actions-icon danger" name="clear"></svg-icon>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import SvgIcon from '../shared/SvgIcon.vue'
export default {
    props: [
        'customer'
    ],
    data() {
        return {
            collapse: false,
            enabled: false
        }
    },
    components: {
        SvgIcon
    },
    methods: {
        expand() {
            this.collapse = !this.collapse
        },
        editCustomer(payload) {
            this.$store.dispatch("customer/editCustomer", payload)
            this.$router.push("customers/edit")
        },
        deleteCustomer(uid) {
            this.$store.dispatch("customer/deleteCustomer", uid)
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
    .icon__success {
        fill: var(--color-success);
        margin-left: 0.3rem;
    }
    .icon__danger {
        fill: var(--color-danger);
        margin-left: 0.3rem;
    }
    .icon {
        margin: 0 0.2rem;
        height: 1rem;
        width: 1rem;
    }
    .store__body--info {
        display: grid;
    }
    .store__body--entry {
        margin: 0.5rem;
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
    }
    .store__body--install {
        display: grid;
        grid-template-rows: auto 1fr;
        grid-template-columns: repeat(3,1fr);
    }
    .store__body--title {
        grid-row-start: 1;
        grid-column-start: 1;
        grid-column-end: 4;
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
</style>
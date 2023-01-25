<template>
    <div class="user">
        <error-comp v-if="error !== null" :error="error"/>
        <div class="user__header">
            <div class="user_header--title">
                {{ user.name }}
            </div>
            <div class="user_header--actions">
                <button class="user_header--actions-btn" @click="editUser(user)">
                    <svg-icon class="user_header--actions-icon edit" name="edit"></svg-icon>
                </button>
                <button class="user_header--actions-btn"  @click="deleteUser(user.uid)">
                    <svg-icon class="user_header--actions-icon danger" name="clear"></svg-icon>
                </button>
            </div>
        </div>
        <div class="user__body" v-if="collapse">
            <div class="user__body--entry user__body--entry-name">
                <label for="email">E-mail:</label>
                {{user.email}}
            </div>
            <div class="user__body--entry user__body--entry-date">
                <label for="">Date Created:</label>
                {{user.created}}
            </div>
            <div class="user__body--entry user__body--entry-priv">
                <label for="">Ticketing:</label>
                <div class="checkbox_cont">
                    <!-- <input type="checkbox" class="check" id="checkb"> -->
                    <svg-icon class="icon__success" name="toggle_on" v-if="user.ticketing"></svg-icon>
                    <svg-icon class="icon__danger" name="toggle_off" v-if="!user.ticketing"></svg-icon>
                </div>
            </div>
            <div class="user__body--entry user__body--entry-priv">
                <label for="">Stores:</label>
                <div class="checkbox_cont">
                    <!-- <input type="checkbox" class="check" id="checkb"> -->
                    <svg-icon class="icon__success" name="toggle_on" v-if="user.stores"></svg-icon>
                    <svg-icon class="icon__danger" name="toggle_off" v-if="!user.stores"></svg-icon>
                </div>
            </div>
            <div class="user__body--entry user__body--entry-priv">
                <label for="">Customers:</label>
                <div class="checkbox_cont">
                    <!-- <input type="checkbox" class="check" id="checkb"> -->
                    <svg-icon class="icon__success" name="toggle_on" v-if="user.customers"></svg-icon>
                    <svg-icon class="icon__danger" name="toggle_off" v-if="!user.customers"></svg-icon>
                </div>
            </div>
            <div class="user__body--entry user__body--entry-priv">
                <label for="">Users:</label>
                <div class="checkbox_cont">
                    <!-- <input type="checkbox" class="check" id="checkb"> -->
                    <svg-icon class="icon__success" name="toggle_on" v-if="user.users"></svg-icon>
                    <svg-icon class="icon__danger" name="toggle_off" v-if="!user.users"></svg-icon>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SvgIcon from '../shared/SvgIcon.vue'
import ErrorComp from '../shared/ErrorComp.vue'
export default {
    props: [
        "user"
    ],
    data() {
        return {
            collapse: false
        }
    },
    computed: {
        logedInUser(){
            return this.$store.getters["auth/logedInUser"]
        },
        error() {
            return this.$store.getters["auth/error"]
        }
    },
    components: {
        SvgIcon,
        ErrorComp
    },
    methods: {
        expand() {
            this.collapse = !this.collapse
            console.log(this.user)
        },
        editUser(payload) {
            this.$store.dispatch("user/editUser", payload)
            this.$router.push('users/edit')
        },
        deleteUser(uid) {
            if(this.logedInUser.uid === uid) {
                this.$store.commit("auth/setError", "User Loged In")
                setTimeout(() => this.$store.commit("auth/setError", null), 2000);

            }
            else {
                this.$store.dispatch("user/deleteUser", uid)
            }
        }
    }
}
</script>
<style scoped>
    .user {
        margin: 0.5rem;
        border: 1px solid #5f5c5c79;
        border-radius: var(--border-radius-1);
    }
    .user__header {
        cursor: pointer;
        background: #7a79782c;
        padding: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .user_header--title {
        margin-left: 1rem;
        font-size: 1rem;
        font-weight: bold;
    }
    .user_header--actions {
        display: grid;
        grid-template-columns: repeat(2,auto);
    }
    .user_header--actions-btn {
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
    .user_header--actions-icon {
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 5px;
        padding: 0.2rem;
        fill: white;
    }
    .user__body {
        border-top: 1px solid #5f5c5c79;
        background: #7a797810;
        padding: 2rem;
        display: grid;
        grid-template-columns: repeat(4,1fr);
    }
    .icon__success {
        fill: var(--color-success);
        margin-left: 0.3rem;
        height: 2.5rem;
        width: 2.5rem;
    }
    .icon__danger {
        fill: var(--color-danger);
        margin-left: 0.3rem;
        height: 2.5rem;
        width: 2.5rem;
    }
    .user__body--entry {
        margin: 0.5rem;
    }
    .user__body--entry label {
        font-weight: bold;
    }
    .user__body--entry input {
        padding: 0.3rem;
        border: 1px solid rgba(0, 0, 0, 0.267);
        border-radius: 5px;
        margin-left: 0.5rem;
    }
    .user__body--entry-priv {
        grid-row-start: 2;
        display: grid;
        grid-template-columns: repeat(2,auto);
        align-items: center;
        justify-content: left;
    }
    .checkbox_cont {
        display: grid;
    }
    .check {
        grid-row-start: 1;
        grid-column-start: 1;
    }
    .icon__success {
        grid-row-start: 1;
        grid-column-start: 1;
    }
    .icon__danger {
        grid-row-start: 1;
        grid-column-start: 1;
    }
</style>
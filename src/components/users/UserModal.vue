<template>
    <section class="modal">
        <error-comp v-if="error !== null" :error="error"/>
        <div class="modal__content">
            <div class="cont__header">
                <h2>Νέος Χρήστης</h2>
            </div>
            <div class="box">
                <h3 class="box__header">Βασικές Πληροφορίες</h3>
                <div class="box__container">
                    <div class="box__container--field">
                        <label for="email">Όμομα:</label>
                        <input class="input_enabled" type="text" name="name" id="name" v-model="user.name">
                    </div>
                    <div class="box__container--field user__email">
                        <label for="email">E-mail:</label>
                        <input class="input_enabled" type="email" name="e-mail" id="email" v-model="user.email">
                    </div>
                    <div class="box__container--field user__password">
                        <label for="password">Password:</label>
                        <input class="input_enabled" type="password" name="password" id="password" v-model="user.password">
                    </div>
                </div>
            </div>
            <div class="box box_priv">
                <h3 class="box__header">Δικαιώματα</h3>
                <div class="box__container">
                    <div class="box__container--field">
                        <label for="email">Ticketing:</label>
                        <div class="check">
                            <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="user.ticketing">
                            <svg-icon class="icon__success" name="toggle_on" v-if="user.ticketing"></svg-icon>
                            <svg-icon class="icon__danger" name="toggle_off" v-if="!user.ticketing"></svg-icon>
                        </div>
                    </div>
                    <div class="box__container--field">
                        <label for="email">Stores:</label>
                        <div class="check">
                            <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="user.stores">
                            <svg-icon class="icon__success" name="toggle_on" v-if="user.stores"></svg-icon>
                            <svg-icon class="icon__danger" name="toggle_off" v-if="!user.stores"></svg-icon>
                        </div>
                    </div>
                    <div class="box__container--field">
                        <label for="email">Customers:</label>
                        <div class="check">
                            <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="user.customers">
                            <svg-icon class="icon__success" name="toggle_on" v-if="user.customers"></svg-icon>
                            <svg-icon class="icon__danger" name="toggle_off" v-if="!user.customers"></svg-icon>
                        </div>
                    </div>
                    <div class="box__container--field">
                        <label for="email">Users:</label>
                        <div class="check">
                            <input class="check_b"  type="checkbox" name="Energo" id="toggle" v-model="user.users">
                            <svg-icon class="icon__success" name="toggle_on" v-if="user.users"></svg-icon>
                            <svg-icon class="icon__danger" name="toggle_off" v-if="!user.users"></svg-icon>
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
import SvgIcon from '../shared/SvgIcon.vue'
import ErrorComp from '../shared/ErrorComp.vue'
export default {
    components: {
        SvgIcon,
        ErrorComp
    },
    computed: {
        user: {
            get(){
                return this.$store.getters["user/user"]
            },
            set(value) {
                this.$store.dispatch('user/editUser', value)
            }
        },
        error() {
            return this.$store.getters["auth/error"]
        }
    },
    methods: {
        save() {
            const payload = {
                uid : this.user.uid,
                name: this.user.name,
                email: this.user.email,
                password: this.user.password,
                ticketing: this.user.ticketing,
                stores: this.user.stores,
                users: this.user.users,
                customers: this.user.customers,
                created: this.user.created,
                last_updated: this.user.last_updated
            }
            if (payload.name === "") {
                this.$store.commit("auth/setError", "Empty Name")
            }
            else if(payload.email === "") {
                this.$store.commit("auth/setError", "Empty Email")
            }
            else if(payload.password === "") {
                this.$store.commit("auth/setError", "Empty Password")
            }
            else {
                this.$store.dispatch("user/saveUser", payload)
                this.$store.commit("auth/setError", null)
                this.$router.push('/users')
            }
            
        },
        cancel() {
            this.$store.dispatch("user/cancelUser")
            this.$store.commit("auth/setError", null)
            this.$router.push('/users')
        }
    }
}
</script>
<style scoped>
    .box_priv {
        display: none;
    }
    .user__email {
        grid-row-start: 2;
    }
    .user__password {
        grid-row-start: 2;
    }
@media only screen and (max-width: 768px) {
    .box_container {
        padding: 0.5rem;
        grid-template-columns: 1fr;
    }
    .user__password {
        grid-row-start: 3;
    }
}
</style>
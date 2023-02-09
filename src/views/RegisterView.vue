<template>
    <section class="login">
        <error-comp v-if="error !== null" :error="error"/>
        <div class="login__body">
            <h2 class="login__body--title">Register</h2>
            <form class="login__body--form" @submit.prevent="register">
                <div class="login__body--name login__input">
                    <label class="login__input--label" for="name">Όνομα:</label>
                    <input class="login__input--field" type="text" name="" id="name" v-model="name">
                </div>
                <div class="login__body--username login__input">
                    <label class="login__input--label" for="username">E-mail:</label>
                    <input class="login__input--field" type="email" name="" id="username" v-model="email">
                </div>
                <div class="login__body--password login__input">
                    <label class="login__input--label" for="password">Password:</label>
                    <input class="login__input--field" type="password" name="" id="password" v-model="password">
                </div>
                    <input class="login__body--submit" type="submit" value="Register">

            </form>
            <p> --
                <router-link to="/login">Go back</router-link>
            </p>
        </div>
    </section>
</template>
<script>
import ErrorComp from "../components/shared/ErrorComp.vue"
export default {
    data() {
        return {
            name: "",
            email : "",
            password : ""
        }
    },
    components: {
        ErrorComp
    },
    computed: {
        error() {
            return this.$store.getters["auth/error"]
        }
    },
    methods: {
        register() {
            const payload = {
                name : this.name,
                email : this.email,
                password : this.password,
                enabled : true
            }
            if ( payload.name === "") {
                this.$store.commit("auth/setError", "Empty Name")
            }
            else if ( payload.email === "") {
                this.$store.commit("auth/setError", "Empty E-mail")
            }
            else if ( payload.password === "") {
                this.$store.commit("auth/setError", "Empty Password")
            } else {
                this.$store.dispatch("auth/register", payload)
                this.name = ""
                this.email = ""
                this.password = ""
                this.$store.commit("auth/setError", null)
            }

        }
    }
}
</script>
<style scoped>
    .login__body--form {
        display: grid;
        grid-template-columns: repeat(2, auto);
    }
    .login__body--name {
        grid-column-start: 1;
        grid-column-end: 3;
    }
    .login__body--submit {
        grid-column-start: 1;
        grid-column-end: 3;
        width: 80%;
        justify-self: center;
        align-self: center;
    }
    @media only screen and (max-width: 768px) {
    .login {
        height: 100vh;
        width: 100vw;
        display: grid;
        justify-items: center;
        align-items: center;
    }
    .login__body--form {
        width: auto;
        padding: 1rem;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, auto);
    }
    .login__body--name {
        grid-column-start: 1;
        grid-column-end: 2;
    }
    .login__body--submit {
        grid-column-start: 1;
        grid-column-end: 2;
        width: 80%;
        justify-self: center;
        align-self: center;
    }
}
</style>
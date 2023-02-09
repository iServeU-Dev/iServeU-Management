<template>
    <section class="login">
        <error-comp v-if="error !== null" :error="error"/>
        <div class="login__body">
            <h2 class="login__body--title">Login</h2>
            <form class="login__body--form" @submit.prevent="login">
                <div class="login__body--username login__input">
                    <label class="login__input--label" for="username">Username:</label>
                    <input class="login__input--field" type="email" name="" id="username" v-model="username">
                </div>
                <div class="login__body--password login__input">
                    <label class="login__input--label" for="password">Password:</label>
                    <input class="login__input--field" type="password" name="" id="password" v-model="password">
                </div>
                <div class="login__body--button">
                    <input class="login__body--submit" type="submit" value="Login">
                    <div>
                        
                    </div>
                    <p>Sign Up
                            <router-link to="/register">Here</router-link>
                    </p>
                </div>
            </form>
        </div>
    </section>
</template>
<script>
import ErrorComp from "../components/shared/ErrorComp.vue"
export default {
    data() {
        return {
            username: "",
            password: ""
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
        login() {
            if ( this.username === ""){
                this.$store.commit("auth/setError", "Empty Username")
            }
            else if(this.password === "") {
                this.$store.commit("auth/setError", "Empty Password")
            }else {
                this.$store.dispatch("auth/logIn", {
                username: this.username,
                password : this.password
                })
                this.$store.commit("auth/setError", null)
            }
            
        }
    }
}
</script>
<style>
    .login {
        height: 100vh;
        width: 100vw;
        display: grid;
        justify-items: center;
        align-items: center;
    }
    .login__body {
        width: 40rem;
        padding: 1rem;
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius-2);
        display: grid;
        grid-template-rows: repeat(2, auto);
    }
    .login__body--title {
        font-size: 2rem;
        background-color: #141E30;
        background-image: linear-gradient(45deg, #141E30, #243B55);
        background-size: 100%;
        background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
        display: grid;
        justify-content: center;
        padding: 2rem;
    }
    .login__input {
        padding: 1rem;
        display: grid;
        grid-template-rows: repeat(2, auto);
    }
    .login__input--label{
        margin-left: 0.2rem;
    }
    .login__input--field {
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid var(--color-primary);
    }
    .login__body--submit {
        background-color: var(--color-primary);
        border-radius: var(--border-radius-1);
        color: white;
        margin: 1rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
    .login__body--button {
        justify-self: center;
        align-self: end;
        display: grid;
        grid-template-columns: repeat(2, auto);
        
    }
    .login__body--form {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
    }
@media only screen and (max-width: 768px) {
    .login {
        height: 100vh;
        width: 100vw;
        display: grid;
        justify-items: center;
        align-items: center;
    }
    .login__body {
        width: 80%;
        padding: 1rem;
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius-2);
        display: grid;
        grid-template-rows: repeat(2, auto);
    }
}
</style>
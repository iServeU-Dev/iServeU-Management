<template>
    <section class="login">
        <div class="login__body">
            <h2 class="login__body--title">Recover</h2>
            <form class="login__body--form" @submit.prevent="recover">
                <div class="login__body--username login__input">
                    <label class="login__input--label" for="username">E-mail</label>
                    <input class="login__input--field" type="email" name="" id="username">
                </div>
                <div class="login__body--button">
                    <input class="login__body--submit" type="submit" value="Recover">
                    
                </div>
            </form>
            <p> --
                <router-link to="/login">Go back</router-link>
            </p>
        </div>
    </section>
</template>
<script>
export default {
    methods: {
        recover() {
            this.$router.push("/login");
        }
    }
}
</script>
<template>
    <div class="header"  :class="{open: open}">
        <nav class="navbar">
            <div class="navbar__overlay" @click="toggleMenuOpen"></div>
            <button type="button" class="navbar__burger"
                @click="toggleMenuOpen">
                <svg-icon class="navbar__menu--icon" name="menu"></svg-icon>
            </button>
            <h1 class="navbar__title">iServeU Management</h1>
            <nav class="navbar__menu">
                <button type="button" @click="goTicketing"><svg-icon class="navbar__menu--icon" name="ticket"></svg-icon><span>Εκκρεμότητες</span></button>
                <button type="button" @click="goPendings"><svg-icon class="navbar__menu--icon" name="store"></svg-icon><span>Εγκαταστάσεις</span></button>
                <button type="button" @click="goCustomers"><svg-icon class="navbar__menu--icon" name="customer"></svg-icon><span>Πελάτες</span></button>
                <button type="button" @click="goUsers"><svg-icon class="navbar__menu--icon" name="user"></svg-icon><span>Χρήστες</span></button>
                <button type="button" @click="logout"><svg-icon class="navbar__menu--icon" name="logout"></svg-icon><span>Logout</span></button>
            </nav>
        </nav>
    </div>
</template>
<script>
import SvgIcon from './SvgIcon.vue'
export default {
    data() {
        return {
            open: false
        }
    },
    components: {
        "svg-icon":SvgIcon
    },
    methods: {
        toggleMenuOpen() {
            this.open = !this.open
        },
        goPendings(){
            this.$router.push("/pendings")
        },
        goUsers(){
            this.$router.push("/users")
        },
        goTicketing(){
            this.$router.push("/ticketing")
        },
        goCustomers(){
            this.$router.push("/customers")
        },
        logout(){
            sessionStorage.setItem("token", null)
            sessionStorage.setItem("user", null)
            this.$store.commit("auth/resetLogedInUser")
            this.$router.push("/login")
        },
    }
}
</script>
<style scoped>
    .header {
        background: #3b3d43;
    }
    button {
        border: 0;
        padding: 0;
        font-family: inherit;
        background: transparent;
        color: inherit;
        cursor: pointer;
    }
    .navbar {
        z-index: 1;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 64px;
        background: #19191c;
        color: #f9f9f9;
        font-family: "Poppins";
        box-sizing: border-box;
    }
    .navbar__overlay {
        position: fixed;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        visibility: hidden;
        opacity: 0;
        transition: 0.3s;
    }
    .header.open .navbar__overlay {
        visibility: visible;
        opacity: 1;
    }
    .navbar__burger {
        position: absolute;
        top: 0;
        left: 0;
        display: grid;
        place-items: center;
        width: 64px;
        height: 64px;
        padding: 0;
    }
    .navbar__title {
        margin: 0;
        font-size: 16px;
    }
    .navbar__menu {
        position: fixed;
        z-index: 3;
        top: 0;
        left: 0;
        translate: -100% 0;
        width: 200px;
        height: 100%;
        padding: 20px;
        display: flex;
        gap: 8px;
        flex-direction: column;
        align-items: flex-start;
        background: #000000;
        visibility: hidden;
        transition: translate 0.3s;
    }
    .header.open .navbar__menu {
        translate: 0 0;
        visibility: visible;
    }
    .navbar__menu > button {
        color: rgba(255, 255, 255, 0.5);
        background: transparent;
        padding: 0 8px;
        display: grid;
        grid-template-columns: auto auto;
        gap: 5px;
    }
    .navbar__menu > button.active {
        color: inherit;
    }
    .navbar__menu--icon {
        fill: white;
        height: 18px;
        width: 18px;
    }
    @media only screen and (min-width: 600px) {
        .navbar {
            justify-content: space-between;
            padding: 0 0 0 16px;
        }
        .navbar__overlay {
            display: none;
        }
        .navbar__burger {
            display: none;
        }
        .navbar__menu {
            position: static;
            translate: 0 0;
            width: auto;
            background: transparent;
            flex-direction: row;
            visibility: visible;
        }
    }
</style>
<!-- <template>
    <div class="header">
        <button>Home</button>
        <div class="header__options">
            <button class="header__options--button">
                <div>
                    Stores
                </div>
                
            </button>
            <button class="header__options--button">Users</button>
            <button class="header__options--button">Logout</button>
        </div>
    </div>
</template>
<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-primary);
    margin: 5rem;
}
.header__options {
    display: grid;
    grid-template-columns: repeat(3, auto);
    margin-right: 1.6rem;
}
.header__options--button {
    padding: 2rem 3rem;
    border-left: 1px solid var(--color-primary);
    border-right: 1px solid var(--color-primary);
    transform: skew(-30deg);
    cursor: pointer;
}
.header__options--button div {
    transform: skew(30deg);
}
</style> -->
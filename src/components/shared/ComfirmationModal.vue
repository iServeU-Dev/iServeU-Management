<template>
    <div class="modal">
        <div class="modal__container">
            <div class="modal__container--header">
                Προσοχή...
            </div>
            <div class="modal__container--par">
                Να γίνει διευθέτηση του <span>{{ payload.store.name }}</span>;
            </div>
            <div class="cont__btns">
                <button class="success" @click="saveAction">Αποθήκευση</button>
                <button class="warning" @click="cancelAction">Ακύρωση</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: [
        "payload"
    ],
    methods: {
        saveAction() {
            this.$emit("saveAction")
        },
        cancelAction() {
            this.$emit("cancelAction")
        }
    }
}
</script>
<style scoped>
    .modal {
        z-index: 100;
    }
    .modal__container {
        background-color: #fefefe;
        margin: 5% auto; /* 15% from the top and centered */
        padding: 20px;
        width: 30%; /* Could be more or less, depending on screen size */
        border-radius: 1rem;
    }
    .modal__container--header {
        font-size: 1.7rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid grey;
    }
    .modal__container--par {
        font-size: 1rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid grey;
    }
    .modal__container--par span {
        color: grey;
        font-size: 1.2rem;
    }
@media only screen and (max-width: 768px) {
    .modal__container {
        background-color: #fefefe;
        margin: 5% auto; /* 15% from the top and centered */
        padding: 20px;
        width: 90%; /* Could be more or less, depending on screen size */
        border-radius: 1rem;
    }
}
</style>
<template>
    <div class="error">
        <p class="error__message">{{ error }}</p>
    </div>
</template>
<script>
export default {
    props: ['error']
}
</script>
<style scoped>
    .error {
        z-index: 1000;
        position: absolute;
        top: 10px;
        right: 10px;
        min-width: 5rem;
        min-height: 3rem;
        padding: 1rem;
        border: 1px solid #eb0000d7;
        border-radius: 5px;
        background: #eb0000a6;
        color: white;
        display: grid;
        justify-items: center;
        align-items: center;
    }
</style>
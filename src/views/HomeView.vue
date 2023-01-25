<template>
    <section>
        <header-comp></header-comp>
        <router-view></router-view>
    </section>
</template>
<script>
import HeaderComp from '../components/shared/HeaderComp.vue'
export default {
    components: {
        HeaderComp
    }
}
</script>
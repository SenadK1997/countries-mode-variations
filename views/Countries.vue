<script>
import NavBar from '../src/components/NavBar.vue';
import BodyPage from '../src/components/BodyPage.vue';
export default {
    name: 'Countries',
    data() {
        return {
            mode: false
        };
    },
    components: { NavBar, BodyPage },
}
</script>
<template>
        <BodyPage />
</template>

<style scoped>
    
</style>
    
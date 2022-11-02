<script>
import NavBar from '../src/components/NavBar.vue';
import BodyPage from '../src/components/BodyPage.vue';
export default {
    name: 'Countries',
    data() {
        return {};
    },
    components: { NavBar, BodyPage }
}
</script>
<template>
    <section class="c-section-navbar">
        <NavBar />
    </section>
        <BodyPage />
</template>

<style scoped>

    .c-section-navbar {
        min-width: 100%;
        box-shadow: 0 2px 16px -6px grey;
    }
</style>
    
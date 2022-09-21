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
    <section class="c-section-body">
        <BodyPage />
    </section>
</template>

<style scoped>
    .c-section-body {
        background-color: #ffffff;
        height: 100%;
    }
</style>
    
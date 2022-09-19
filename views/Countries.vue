<script>
import NavBar from '../src/components/NavBar.vue';
export default {
    name: 'Countries',
    data() {
        return {};
    },
    components: { NavBar }
}
</script>
<template>
    <section class="c-section-navbar">
        <NavBar />
    </section>
    <section class="c-section-body">

    </section>
</template>

<style scoped>
    .c-section-body {
        background-color: #fafafa;
    }
</style>
    
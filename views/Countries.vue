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
        background-color: hsl(0, 0%, 98%);
        height: 100%;
    }
    .c-section-navbar {
        max-width: 100%;
        justify-content: center;
    }
    @media (max-width: 375px) {
        .c-section-navbar {
            width: 375px;
        }
    }
</style>
    
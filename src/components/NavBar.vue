<script>
export default {
    name: 'Navbar',
    data() {
        return {
        }
    }
}
</script>

<template>
    <div class="wrapper-shadow">
        <section class="c-section">
            <div class="c-section__parent__div">
                <div class="c-section__header"><h1>Where in the world?</h1></div>
                <div class="c-section__mode">
                    <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                    <button @click="">Dark Mode</button>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.wrapper-shadow {
    box-shadow: 0 2px 16px -6px grey;
    align-items: center;
    justify-content: center;
}
.c-section {
    display: flex;
    width: 100%;
    max-width: 1268px;
    height: 100px;
}
.c-section__parent__div {
    display: flex;
    justify-content: space-between;
    max-width: 1268px;
    width: 100%;
    align-items: center;
}
.c-section__header h1 {
    font-size: 30px;
    font-weight: 800;
    margin-left: 35px;
}
.c-section__mode {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 100;
    cursor: pointer;
    margin-right: 25px;
}
.c-section__mode button {
    border: none;
    background-color: inherit;
    font-size: 20px;
    font-weight: 200;
    cursor: pointer;
}

@media (max-width: 500px) {
    .c-section {
    width: 100%;
    max-width: 500px;
    }
    .c-section__parent__div {
        width: 100%;
    }
    .c-section__header h1 {
        font-size: 20px;
    }
    .c-section__mode {
    font-size: 14px;
    font-weight: 100;
    cursor: pointer;
    }
    .c-section__mode button {
    font-size: 14px;
    font-weight: 200;
    cursor: pointer;
    color: black;
    }
}

</style>
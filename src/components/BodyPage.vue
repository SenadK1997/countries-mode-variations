<script>
    export default {
        name: 'BodyPage',
        data() {
            return {
                selected: 'Test'
            }
        }
    }
</script>
    
<template>
    <section class="c-section__filters">
        <div class="c-section__filters__parent">
            <div class="c-section__filters-input">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input type="text" id="search-input" placeholder="Search for a country...">
            </div>
            <div class="c-section__filters-select__parent">
                <select placeholder="Filter by Region" class="c-section__filters-select__child">
                    <option>Filter by Region</option>
                    <option>Africa</option>
                    <option>America</option>
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>Oceania</option>
                </select>
            </div>
        </div>
    </section>
    <section class="c-section__countries">
        <div class="c-section__countries__card">
            <div class="c-section__countries__card__img"><img class="c-section__countries__card__img" src="https://flagcdn.com/de.svg" alt="Error loading image"></div>
            <div class="c-section__countries__card__information">
                <h3>Germany</h3>
                <p>Population: 81.770,900</p>
                <p>Region: Europe</p>
                <p>Capital: Berlin</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .c-section__filters {
        display: flex;
        max-width: 100%;
        justify-content: center;
        margin-top: 100px;
        font-size: 24px;
        align-items: center;
        background-color: hsl(0, 0%, 98%);
    }
    .c-section__countries {
        background-color: hsl(0, 0%, 98%);
        display: flex;
        width: 1268px;
        justify-content: center;
        align-items: center;
        max-width: 100%;
    }
    .c-section__countries__card__img {
        width: 15em;
        height: 15em;
    }
    .c-section__filters__parent {
        display: flex;
        justify-content: space-between;
        width: 1268px;
    }
    .c-section__filters-input {
        display: flex;
        align-items: center;
        width: 500px;
        height: 50px;
        background-color: #fff;
        border-radius: 5px;
    }
    .c-section__filters-input svg {
        padding-left: 55px;
    }
    .c-section__filters-input input {
        border: none;
        font-size: 16px;
        margin-left: 20px;
        height: 50px;
    }
    .c-section__filters-select__parent {
        height: 50px;
        font-size: 16px;
        background-color: #fff;
        height: 50px;
        align-items: center;
    }
    .c-section__filters-select__child {
        border: none;
        background-color: #fff;
        font-size: 16px;
        width: 180px;
        height: 50px;
        align-items: center;
    }
    .c-section__filters-select__child option {
        cursor: pointer;
    }
</style>
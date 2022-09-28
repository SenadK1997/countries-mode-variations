<script>
    import {createApp} from 'vue'
    import axios from 'axios'
    
    export default {
        name: 'BodyPage',
        data() {
            return {
                selected: 'Test',
                countries: []
            }
        },

        created() {
            const that = this
            axios.get('https://restcountries.com/v3.1/all')
            .then(function (response) {
                // handle success
                console.log({ response })
                that.countries = response.data
            })
        },

        methods: {
            getCapital(country) {
                if (country.capital?.length) {
                    return country.capital[0]
                }
            },
            getFlags(country) {
                console.log(country.flags.png)
                    return country.flags.png
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
            <div v-for="country in countries" class="c-section__countries__card">
                <div class="c-section__countries__card__inside">
                    <div class="c-section__countries__card__img"><img class="c-section__countries__card__img" 
                        :src="getFlags(country)" alt="Error loading image"></div>
                        <div class="c-section__countries__card__information">
                            <h3>{{ country.name.common }}</h3>
                            <p>Population: {{ country.population }}</p>
                            <p>Region: {{ country.region }}</p>
                            <p>Capital: {{ getCapital(country) }}</p>
                        </div>
                </div>
            </div>
    </section>
</template>

<style scoped>
    .c-section__filters {
        display: flex;
        width: 1268px;
        max-width: 100%;
        margin-top: 100px;
        font-size: 24px;
        background-color: hsl(0, 0%, 98%);
        align-items: center;
        justify-content: center;
    }
    .c-section__countries__card__inside {
        display: flex;
        flex-direction: column;
        margin: 0;
        justify-content: space-between;
        align-items: center;
    }
    .c-section__countries {
        background-color: hsl(0, 0%, 98%);
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 15px;
        width: 1268px;
        justify-content: space-between;
        align-items: center;
        max-width: 100%;
        
    }
    .c-section__countries__card {
        margin-top: 150px;
    }
    .c-section__countries__card__information {
        display: flex;
        flex-direction: column;
        width: 260px;
        background-color: #fff;
    }
    .c-section__countries__card__information p {
        margin: 0;
    }
    .c-section__countries__card__img {
        width: 260px;
        height: 140px;
        border-radius: 5px;
    }
    .c-section__filters__parent {
        display: flex;
        width: 1268px;
        justify-content: space-between;
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
        width: inherit;
    }
    .c-section__filters-select__parent {
        height: 50px;
        font-size: 16px;
        background-color: #fff;
        height: 50px;
        align-items: center;
        margin-right: 25px;
    }
    .c-section__filters-select__child {
        border: none;
        background-color: #fff;
        font-size: 18px;
        width: 180px;
        height: 50px;
        align-items: center;
    }
    .c-section__filters-select__child option {
        cursor: pointer;
        font-size: 14px;
    }
</style>
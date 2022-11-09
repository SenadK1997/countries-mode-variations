<script>
    import {createApp, ref} from 'vue'
    import axios from 'axios'
import { resetTracking } from '@vue/reactivity'
import NavBar from './NavBar.vue'
    
    export default {
    name: "BodyPage",
    data() {
        return {
            selected: "Test",
            countries: [],
            search: null,
            selectedFilter: "AllRegions",
            shownCountries: [],
            searchValue: "",
            test: [],
            modeDark: false
        };
    },
    created() {
        const that = this;
        let countries = null;
        axios.get("https://restcountries.com/v3.1/all")
            .then((response) => {
            this.countries = response.data;
            this.shownCountries = this.countries;
        });
    },
    methods: {
        getCapital(country) {
            if (country?.capital?.length) {
                return country.capital[0];
            }
        },
        getFlags(country) {
            if (country?.flags?.png) {
                return country.flags.png;
            }
            return "";
        },
        changeFilter() {
            this.searchValue = "";
            this.shownCountries = (this.selectedFilter === "AllRegions") ? this.countries :
                this.countries.filter(item => item.region === this.selectedFilter);
        },
        // onSearch () {
        //   this.selectedFilter = 'AllRegions'
        //   this.shownCountries = this.countries.filter(country => {
        //     const name = country.name.common.toLowerCase()
        //     return !!name.includes(this.searchValue.toLowerCase());
        //
        //   })
        // },
        detailedCountry(code) {
            this.$router.push({ name: "DetailsPage", params: { code: code } });
        },
        darkMode() {
            this.modeDark = !this.modeDark
        }
    },
    watch: {
        searchValue() {
            if (this.searchValue.length) {
                this.selectedFilter = "AllRegions";
                return this.shownCountries = this.countries.filter((country) => {
                    const name = country.name.common.toLowerCase();
                    return name.includes(this.searchValue.toLowerCase());
                });
            }
            this.shownCountries = this.countries;
        }
    },
    components: { NavBar }
}
</script>
    
<template>
    <NavBar class="c-section-navbar" @dark-mode="darkMode" />
    <div :class="{ 'dark-body' : modeDark }">
        <section class="c-section__filters" :class="{ 'dark-body' : modeDark }">
            <div class="c-section__filters__parent" :class="{ 'dark-body' : modeDark }">
                <div class="c-section__filters-input" :class="{ 'dark-lighter' : modeDark }">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65" :class="{ 'dark-lighter' : modeDark }"></line></svg>
                    <input type="text" id="search-input" v-model="searchValue" placeholder="Search for a country..." :class="{ 'dark-lighter' : modeDark }">
                </div>
                <div class="c-section__filters-select__parent" :class="{ 'dark-lighter' : modeDark }">
                    <select placeholder="Filter by Region" class="c-section__filters-select__child" v-model="selectedFilter" @change="changeFilter" :class="{ 'dark-lighter' : modeDark }">
                        <option value="AllRegions">Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </div>
        </section>
        <section class="c-section__countries" v-if="shownCountries.length" :class="{ 'dark-body' : modeDark }">
            <div v-for="country in shownCountries" class="c-section__countries__card">
                <div class="c-section__countries__card__inside" :class="{ 'dark-box' : modeDark }">
                    <div class="c-section__countries__card__img" @click="detailedCountry(country.cca2)"><img class="c-section__countries__card__img" 
                        :src="getFlags(country)" alt="Error loading image"></div>
                        <div v-if="country" class="c-section__countries__card__information" :class="{ 'dark-lighter' : modeDark }">
                            <h3>{{ country.name.common }}</h3>
                            <p>Population: {{ country.population.toLocaleString() }}</p>
                            <p>Region: {{ country.region }}</p>
                            <p>Capital: {{ getCapital(country) }}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
</template>

<style scoped>
    body .dark-body {
        background-color: hsl(207, 26%, 17%) !important;
        color: #fff !important;
    }
    .dark-lighter {
        background-color: hsl(209, 23%, 22%) !important;
        color: #fff !important;
    }
    .dark-box {
        box-shadow: none !important;
    }
    .c-section-navbar {
        min-width: 100%;
        box-shadow: 0 2px 16px -6px grey;
    }
    .c-section__filters {
        display: flex;
        width: 100%;
        padding-top: 100px;
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
        border-radius: 5px;
        box-shadow: 0px 0px 10px 1px rgb(190, 190, 190);
        width: fit-content;
    }
    .c-section__countries {
        background-color: hsl(0, 0%, 98%);
        max-width: 1268px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .c-section__countries__card {
        margin-top: 150px;
    }
    .c-section__countries__card__information {
        display: flex;
        flex-direction: column;
        width: 260px;
        background-color: #fff;
        padding: 15px;
    }
    .c-section__countries__card__information p {
        margin: 3px 0px;
        font-size: 16px;
    }
    .c-section__countries__card__img {
        width: 290px;
        height: 160px;
        border-radius: 5px;
        cursor: pointer;
    }
    .c-section__filters__parent {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        max-width: 1268px;
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
        position: static;
    }
    .c-section__filters-input input {
        border: none;
        font-size: 16px;
        margin-left: 20px;
        width: inherit;
    }
    .c-section__filters-select__parent {
        height: 50px;
        font-size: 16px;
        background-color: #fff;
        height: 50px;
        align-items: center;
        margin-right: 25px;
        margin-left: 40px;
    }
    .c-section__filters-select__child {
        border: none;
        font-size: 17px;
        width: 180px;
        height: 50px;
        align-items: center;
    }
    .c-section__filters-select__child option {
        cursor: pointer;
        font-size: 14px;
    }


    @media (max-width: 500px) {
        
        .c-section__filters {
            width: 100%;
            max-width: 500px;
        }
        .c-section__filters__parent {
            display: flex;
            flex-direction: column;
        }
        #search-input {
            width: 100%;
            justify-content: center;
            margin: 0 auto;
        }
        .c-section__filters-input {
            width: 100%;
            padding: 0 auto;
            margin: 0 auto;
        }
        .c-section__filters-select__parent {
            margin-right: 0;
            max-width: fit-content;
            margin-top: 20px;
            margin-left: 0px;
        }
        .c-section__countries {
            width: 100%;
            max-width: 500px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        }
        .c-section__filters-select__child {
            color: black;
            margin-left: 0px;
        }
        .c-section__countries__card {
            margin-top: 50px;
            width: 100%;
            max-width: 290px;
        }
        .c-section__filters__parent {
            margin-left: 15px;
            margin-right: 15px;
        }
    }
</style>
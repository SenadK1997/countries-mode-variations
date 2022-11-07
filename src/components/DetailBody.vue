<script>
import axios from 'axios'
import NavBar from './NavBar.vue'
export default {
    data() {
        return {
            country: [],
            shownCountry: [],
            modeDark: false
        };
    },
    created() {
        axios.get("https://restcountries.com/v3.1/alpha/" + this.$route.params.code)
            .then((response) => {
            this.country = response.data;
            this.shownCountry = this.country;
            console.log(response.data[0]);
        });
    },
    methods: {
        getCapital(detail) {
            if (detail?.capital?.length) {
                return detail.capital[0];
            }
        },
        getFlags(detail) {
            if (detail?.flags?.png) {
                return detail.flags.png;
            }
            return "";
        },
        getBorders(borders) {
            const shownBorders = [];
            for (const border in borders) {
                shownBorders.push(borders[border]);
            }
            return shownBorders;
        },
        getLanguages(languages) {
            const shownLangs = [];
            for (const lang in languages) {
                // example: imamo objekat {'key1': 'value1', 'key2': 'value2', 'key3': 'Kenan Balija' }
                // console.log(lang) --- ovo ti je key: key1, key2, key3
                // console.log(languages[lang]) --- ovo je value: value1, value2, Kenan Balija
                shownLangs.push(languages[lang]); // --- samo pushas u shown languages array
            }
            // shown langs ti bude ['value1', 'value2', 'Kenan Balija']
            return shownLangs.join(", "); // sa ovom metodom Join odradimo da nam vrati String: 'value1, value2, Kenan Balija'
        },
        getDomain(domains) {
            const shownDomains = [];
            for (const domain in domains) {
                shownDomains.push(domains[domain]);
            }
            return shownDomains.join(", ");
        },
        getCurrencies(currencies) {
            let shownCurrencies = [];
            for (let x in currencies) {
                shownCurrencies = currencies[x].name;
            }
            return shownCurrencies;
        },
        darkMode() {
            this.modeDark = !this.modeDark
        }
    },
    components: { NavBar }
}
</script>

<template>
    <NavBar @dark-mode="darkMode" />
    <div class="c-parent" :class="{ 'dark-body' : modeDark }">
        <div class="c-parent__section" :class="{ 'dark-body' : modeDark }">
            <div class="c-back" >
                <button class="c-back-btn" @click="this.$router.push('/')" :class="{ 'dark-lighter' : modeDark }">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"></path></svg>
                    Back
                </button>
            </div>
            <div class="c-parent__section">
                <section class="c-section" v-for="detail in country">
                    <div class="c-section__img">
                        <img :src="getFlags(detail)" alt="Error loading image">
                    </div>
                    <div class="c-section__right">
                        <div class="c-section__right-left">
                            <h1>{{ detail.name.common }}</h1>
                            <p>Native Name: <div class="c-section__rigth__divs">{{ detail.name.official }}</div></p>
                            <p>Population: <div class="c-section__rigth__divs">{{ detail.population.toLocaleString() }}</div></p>
                            <p>Region: <div class="c-section__rigth__divs">{{ detail.region }}</div></p>
                            <p>Sub Region: <div class="c-section__rigth__divs">{{ detail.subregion }}</div></p>
                            <p>Capital: <div class="c-section__rigth__divs">{{ getCapital(detail) }}</div></p>
                            <div class="c-section-left-border">
                                <p>Border Countries:</p>
                                <button v-for="border in getBorders(detail.borders)" :class="{ 'dark-lighter' : modeDark }">{{ border }}</button>
                            </div>
                        </div>
                        <div class="c-section__right-rigth">
                            <p>Top Level Domain: <div class="c-section__rigth__divs"> {{ getDomain(detail.tld) }}</div></p>
                            <p>Currencies: <div class="c-section__rigth__divs">{{ getCurrencies(detail.currencies) }}</div></p>
                            <p>Languages: <div class="c-section__rigth__divs">{{ getLanguages(detail.languages) }}</div></p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    </template>
<style>
.app {
    height: 100vh;
}

</style>


<style scoped>
@import url('http://fonts.cdnfonts.com/css/nunito-sans');

 body .dark-body {
        background-color: hsl(207, 26%, 17%) !important;
        color: #fff !important;
    }
    .c-parent {
        max-width: 100%;
        height: 100vh;
    }
    .dark-lighter {
        background-color: hsl(209, 23%, 22%) !important;
        color: #fff !important;
        box-shadow: none !important;
    }
    .dark-box {
        box-shadow: none !important;
    }

.c-back {
    display: flex;
    margin-top: 70px;
    align-items: center;
    cursor: pointer;
    max-width: 450px;
}
.c-parent__section {
    display: flex;
}
.c-parent__section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    max-width: 1268px;
    margin: auto;
}
.c-section__right-rigth {
   position: static;
}
.c-section__rigth__divs {
    font-weight: 300;
    margin-left: 5px;
}
.c-section__right-rigth p {
    font-weight: 700;
    font-size: 16px;
    padding: 0;
    margin: 0;
    margin-top: 10px;
    display: flex;
    white-space: nowrap;
}
.c-back-btn {
    padding: 10px 40px;
    font-family: Nunito Sans;
    font-size: 18px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: none;
    background-color: #fff;
    box-shadow: 0px 0px 5px grey;
    cursor: pointer;
}
.c-back-btn svg {
    margin-right: 5px;
}
.c-section {
    margin-top: 100px;
    display: flex;
    max-width: 1268px;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
}
.c-section__img {
    margin: 0;
}
.c-section__img img {
    width: 100%;
    height: 380px;
}
.c-section__right {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.c-section-left-border {
    display: flex;
    align-items: center;
    white-space: nowrap;
    flex-wrap: wrap;
    width: 600px;
    text-align: right;
}
.c-section-left-border button {
    border-radius: 10px;
    border: none;
    background-color: #fff;
    box-shadow: 0px 0px 5px grey;
    padding: 6px 26px 6px 26px;
    cursor: pointer;
    margin-left: 5px;
}
.c-section__right-left {
    display: flex;
    flex-direction: column;
    width: 400px;
}
.c-section__rigth-left div {
    font-weight: 300;
}
.c-section__right-left h1 {
    font-weight: 900;
    font-size: 28px;
}
.c-section__right-left p {
    font-weight: 700;
    font-size: 16px;
    padding: 0;
    margin: 0;
    margin-top: 10px;
    display: flex;
}

@media (max-width: 500px) {
    .c-parent {
        max-width: 500px;
    }
    .c-parent__section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    max-width: 450px;
    margin: auto;
}
    .app {
        max-width: 500px;
    }
    .c-section {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 500px;
        justify-content: center;
        margin-top: 50px;
    }
    .c-section-left-border {
        max-width: 450px;
        flex-wrap: wrap;
    }
    .c-section__right {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: space-around;
        max-width: 450px;
}
    .c-section__right-left {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 455px;
        justify-content: center;
    }
    .c-section__right-rigth {
        width: 100%;
        max-width: 455px;
        margin-top: 20px;
        margin-bottom: 50px;
    }
    .c-section__img {
        justify-content: center;
        margin-left: 0;
    }
    .c-section__img img {
        width: 100%;
        height: auto;
        width: 100%;
        max-width: 500px;
        justify-content: center;
        align-items: center;
    }
    .c-back {
            width: 100%;
            max-width: 455px;
            justify-content: flex-start;
        }
        .c-section-left-border {
            width: 100%;
            max-width: 455px;
        }
        .c-parent__section {
            justify-content: flex-start;
            max-width: 450px;
        }
}
</style>

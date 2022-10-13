<script>
import axios from 'axios'
export default {
    data() {
        return {
            country: [],
            shownCountry: []
        }
    },
    created() {
                    axios.get('https://restcountries.com/v3.1/all')
                    .then((response) => {
                        this.country = response.data
                        this.shownCountry = this.country
                        console.log(response.data)
                    })
                },
                methods: {
            getCapital(detail) {
                if (detail?.capital?.length) {
                    return detail.capital[0]
                }
            },
            getFlags(detail) {
                if (detail?.flags?.png) {
                  return detail.flags.png
                }
                return ''
            },
            getBorders(detail) {
                if (detail?.borders?.length) {
                    return detail.borders[0,3]
                }
            },

            getLanguages (languages) {
              const shownLangs = []
              for (const lang in languages) {
                // example: imamo objekat {'key1': 'value1', 'key2': 'value2', 'key3': 'Kenan Balija' }
                // console.log(lang) --- ovo ti je key: key1, key2, key3
                // console.log(languages[lang]) --- ovo je value: value1, value2, Kenan Balija
                shownLangs.push(languages[lang]) // --- samo pushas u shown languages array
              }
              // shown langs ti bude ['value1', 'value2', 'Kenan Balija']
              return shownLangs.join(', ') // sa ovom metodom Join odradimo da nam vrati String: 'value1, value2, Kenan Balija'
            }
        }
}
</script>

<template>
        <div class="c-back">
            <button class="c-back-btn">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"></path></svg>
                Back
            </button>
        </div>

        <section class="c-section" v-for="detail in country">
            <div class="c-section__img">
                <img :src="getFlags(detail)" alt="Error loading image">
            </div>
                <div class="c-section__right">
                    <div class="c-section__right-left">
                            <h1>{{ detail.name.common }}</h1>
                            <p>Native Name: <div>{{ detail.name.official }}</div></p>
                            <p>Population: <div>{{ detail.population.toLocaleString() }}</div></p>
                            <p>Region: <div>{{ detail.region }}</div></p>
                            <p>Sub Region: <div>{{ detail.subregion }}</div></p>
                            <p>Capital: <div>{{ getCapital(detail) }}</div></p>
                        <div class="c-section-left-border">
                                <p>Border Countries:</p>
                                <button>{{ getBorders(detail) }}</button>
                        </div>
                    </div>
                    <div class="c-section__right-rigth">
                        <p>Top Level Domain: <div>{{ detail.tld }}</div></p>
                        <p>Currencies: <div>{{ detail.currencies }}</div></p>
                        <p>Languages: <div>{{ getLanguages(detail.languages) }}</div></p>
                    </div>
            </div>
        </section>
</template>

<style scoped>
@import url('http://fonts.cdnfonts.com/css/nunito-sans');

.c-back {
    display: flex;
    margin-left: 40px;
    margin-top: 70px;
    align-items: center;
    cursor: pointer;
}
.c-section__right-rigth {
   position: static;
}
.c-section__right-rigth p {
    font-weight: 700;
    font-size: 16px;
    padding: 0;
    margin: 0;
    margin-top: 10px;
    display: flex;
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
}
.c-back-btn svg {
    margin-right: 5px;
}
.c-section {
    margin-top: 100px;
    display: flex;
    width: 1268px;
    justify-content: space-between;
    max-width: 100%;
    align-items: center;
}
.c-section__img {
    margin-left: 40px;
}
.c-section__img img {
    width: 600px;
    height: 400px;
}
.c-section__right {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.c-section-left-border {
    display: flex;
    width: 480px;
    justify-content: space-between;
}
.c-section-left-border button {
    border-radius: 10px;
    border: none;
    background-color: #fff;
    box-shadow: 0px 0px 5px grey;
    padding: 0px 26px 0px 26px;
    cursor: pointer;
}
.c-section__right-left {
    display: flex;
    flex-direction: column;
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
</style>

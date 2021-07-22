import listTemplate from '../tempates/list.hbs'
import countryTemplate from '../tempates/country.hbs'

const countryList = document.querySelector(".country-list")
const countryInfo = document.querySelector(".country-info")

function list(countries) {
    countryList.innerHTML = countries.map(listTemplate).join(" ")
}

function country(countries) {
    countryInfo.innerHTML = countries.map(countryTemplate).join("")
}

function clear() {
    countryList.innerHTML = ''
    countryInfo.innerHTML = ''
}

export default {
    list,
    country,
    clear
}
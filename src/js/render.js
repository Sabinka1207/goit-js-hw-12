import listTemplate from '../tempates/list.hbs'
import countryTemplate from '../tempates/country.hbs'

const countryList = document.querySelector(".country-list")
const countryInfo = document.querySelector(".country-info")

function list(countries) {
    countryList.innerHTML = countries.map(listTemplate).join(" ")
}

function country(notUpdatedCountry) {
    const country = {
    ...notUpdatedCountry,
    languages: notUpdatedCountry.languages.map(l => l.name).join(", ")
    }
 
    countryList.innerHTML = countryTemplate(country)

    // let countryCard = `
    // <div class="country-card">
    //     <div class="country-header">
    //         <img 
    //         class="country-header__img" 
    //         src=${country.flag} 
    //         alt=${country.name}
    //         >
    //         <span class="country-header__title">${country.name}</span>
    //     </div>
    //     <p class="country-descr">
    //         <span class="country-descr__bold">
    //             Capital: 
    //         </span>
    //         ${country.capital}
    //     </p>
    //     <p class="country-descr">
    //         <span class="country-descr__bold">
    //             Population: 
    //         </span>
    //         ${country.population}
    //     </p>
    //     <p class="country-descr">
    //         <span class="country-descr__bold">
    //             Languages:
    //             </span>
    //             ${country.languages}
    //     </p>
    // </div>
    // `
    
    // countryInfo.innerHTML = countryCard
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
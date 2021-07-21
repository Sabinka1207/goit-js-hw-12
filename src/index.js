import './css/styles.css';
// import debounce from "lodash.debounce";
var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

console.log(debounce)

const input = document.querySelector("#search-box")
input.addEventListener('input', onInput)

function onInput(evt) {
    debounce(debounced, 3000)

}

function debounced() {
    console.log(evt.target.value)
    console.log("OK")           
}
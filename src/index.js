import './css/styles.css';
var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const input = document.querySelector("#search-box")
input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));



function onInput(evt) {
    console.log(evt.target.value)
}


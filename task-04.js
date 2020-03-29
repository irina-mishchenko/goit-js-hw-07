"use strict";

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counter = document.getElementById('value');

let counterValue =0;

decrementBtn.addEventListener('click', handleDecrementClick);
incrementBtn.addEventListener('click', handleIncrementClick);

function handleDecrementClick() {
    counterValue -=1;
    counter.textContent = counterValue;
}

function handleIncrementClick() {
    counterValue +=1;
    counter.textContent = counterValue;
}
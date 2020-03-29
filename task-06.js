'use strict';

const input = document.getElementById('validation-input');
input.addEventListener('change', checkInput);

function checkInput(event) {
    const neededLength = Number (input.getAttribute ('data-length'));
    if(event.currentTarget.value.length === neededLength) {
        input.classList.add('valid');
    } else {
        input.classList.add('invalid');
    }
}


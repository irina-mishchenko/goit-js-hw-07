'use strict';

const inputFontSizeControl = document.getElementById('font-size-control');
const inputText = document.getElementById('text');

console.dir(inputFontSizeControl.value);
inputFontSizeControl.addEventListener('input', changeFontSize);

function changeFontSize(event) {
  inputText.style.fontSize = event.currentTarget.value + 'px';
}
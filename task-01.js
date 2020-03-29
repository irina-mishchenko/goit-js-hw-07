"use strict";

const categories = document.querySelectorAll('#categories > .item');
console.log(`В списке ${categories.length} категории.`);

const itemsTitlesAndLength = document.querySelectorAll('.item').forEach(item => {
    const itemTitle = document.querySelector('h2').textContent;
    const itemLength = document.querySelectorAll('li').length;
    console.log(`Категория: ${itemTitle}, Количество элементов: ${itemLength}`);
})
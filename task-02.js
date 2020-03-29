"use strict";

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

createNewItems(ingredients);

function createNewItems(ingredients) {
    const listOfItems = document.querySelector('#ingredients');
    ingredients.map(ingredient =>{
        let li = document.createElement('li');
        li.append(ingredient);
        listOfItems.append(li);
    })
}

console.log(ingredients);





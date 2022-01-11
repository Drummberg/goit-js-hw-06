const ingredients = [
'Potatoes',
'Mushrooms',
'Garlic',
'Tomatos',
'Herbs',
'Condiments',
];

const mainEl = document.querySelector("#ingredients");

const elementsEl = ingredients.map((ingredient) => {
    const ingredientsEl = document.createElement('li');
    ingredientsEl.textContent = ingredient;
    ingredientsEl.classList.add('item');

    return ingredientsEl;
});    
console.log(elementsEl);
mainEl.append(...elementsEl);
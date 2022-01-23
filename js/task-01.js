
// const listEl = document.querySelectorAll(".item");
// const totals = listEl.length;
// console.log(`Number of categories: ${totals}`);

// for (let i = 0; i < totals; i += 1){
//     const categoriesNameEl = listEl[i].firstElementChild.textContent;
//     console.log(`Category: ${categoriesNameEl}`);
    
//     const ChildElements = listEl[i].lastElementChild;
//     const totalsChildEl = ChildElements.querySelectorAll('li')
//     console.log(`Elements: ${totalsChildEl.length}`);
// }

const list = document.querySelector('#categories');
const items = list.querySelectorAll('.item');
console.log(`В списке ${items.length} категории:`);
items.forEach(node => {
const h2 = node.querySelector('h2');
const nodeItems = node.querySelectorAll('li');
console.log(` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`);
});















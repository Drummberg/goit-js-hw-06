
const listEl = document.querySelectorAll(".item");
const totals = listEl.length;
console.log(`Number of categories: ${totals}`);

for (let i = 0; i < totals; i += 1){
    const categoriesNameEl = listEl[i].firstElementChild.textContent;
    console.log(`Category: ${categoriesNameEl}`);    
    
    const ChildElements = listEl[i].lastElementChild;
    const totalsChildEl = ChildElements.querySelectorAll('li')
    console.log(`Elements: ${totalsChildEl.length}`);
}
















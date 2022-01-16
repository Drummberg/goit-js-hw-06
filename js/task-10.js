const inputEl = document.querySelector('#controls input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const newDivBoxes = document.querySelector('#boxes');


inputEl.addEventListener('input', () => {
    
    return btnCreate.addEventListener       ('click', createBoxes);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


function createBoxes(amount) {
    // amount = inputEl.value;
    let divWidth = 30;
    let divHeight = 30;
    const divs = document.createElement("div");
    divs.length;
    divs.style.width = divWidth + 'px';
    divs.style.height = divHeight + 'px';
    divs.style.color = getRandomHexColor();
    newDivBoxes.append(divs);
    console.log(divs.style.color);
};

btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
    const deleteDivs = document.querySelector('#boxes div');
    deleteDivs.remove();
}


const nameColor = document.querySelector('.color');
const btnChange = document.querySelector('.change-color');

btnChange.addEventListener('click', changesBackgroundColorOfBody);
    
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function changesBackgroundColorOfBody(event) {
    const fuu = getRandomHexColor();
    document.body.style.backgroundColor = fuu;
    nameColor.textContent = fuu;
    };


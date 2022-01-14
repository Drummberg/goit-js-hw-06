const searchRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

searchRef.addEventListener("input", (event) => {
    spanRef.textContent = event.currentTarget.value;
})
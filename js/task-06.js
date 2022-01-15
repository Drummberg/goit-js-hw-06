const inputRef = document.querySelector('input');
const dataRef = document.querySelector('[data-length="6"]');
const numberData = Number(dataRef.dataset.length);

inputRef.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === numberData) {
        return inputRef.setAttribute('class', 'valid');
    } else { return inputRef.setAttribute('class', 'invalid') };
   
});


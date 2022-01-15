const searchRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

searchRef.addEventListener("input", boo);
 
function boo(event) {
    if (searchRef.value !== '') {
    return spanRef.textContent = searchRef.value;
    }
    else {
        return spanRef.textContent = 'Anonymous';
    }

};
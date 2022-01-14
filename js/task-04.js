const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};



const counterValue = document.querySelector('#value');
console.log(counterValue);

const addListenerBtnDecrement = document.querySelector('[data-action="decrement"]');
addListenerBtnDecrement.addEventListener('click', function () {
    counter.decrement();
    counterValue.textContent = counter.value;
});

const addListenerBtnIncrement = document.querySelector('[data-action="increment"]');
addListenerBtnIncrement.addEventListener('click', function() {
    counter.increment();
    counterValue.textContent = counter.value;
});

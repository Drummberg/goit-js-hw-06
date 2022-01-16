const form = document.querySelector('.login-form');
form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();
event.currentTarget.reset();
    const formElements = event.currentTarget.elements;

        const email = formElements.email.value;
    const password = formElements.password.value;

    const formData = { email, password };

    if (formElements.email.value === "" || formElements.password.value === "") {
        return alert("Please fill in all the fields!");
        
    };

    
    
    console.log(formData);
};

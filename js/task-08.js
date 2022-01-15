const form = document.querySelector('.login-form');
form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();

      const {
        elements: { email, password }
        } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
    };

    const formElements = event.currentTarget.elements;

        const mail = formElements.email.value;
    const passwordUser = formElements.password.value;

    const formData = { mail, passwordUser };

     

    event.currentTarget.reset();
    
    console.log(formData);
};

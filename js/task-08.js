
const formLoginEl = document.querySelector('.login-form')


formLoginEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Всі поля повинні бути заповнені!");
    };
    
    const userParam = {
        email: email.value,
        password: password.value,
    };

    console.log(userParam);
    event.currentTarget.reset();
});

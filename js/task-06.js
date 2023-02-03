
const inputEl = document.getElementById('validation-input');

inputEl.addEventListener('blur', event => {

    const maxInputLength = event.currentTarget.getAttribute('data-length');
    const inputLength = event.currentTarget.value.length;

    if (inputLength >= maxInputLength) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    }
    else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');
    };

});


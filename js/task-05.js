
const inputText = document.getElementById('name-input');
const outputText = document.getElementById('name-output');

inputText.addEventListener('input', event => {

    const inputValue = event.currentTarget.value;

    if (inputValue === '') { outputText.textContent = 'Anonymous' }
    else { outputText.textContent = inputValue }
});

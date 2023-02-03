
const inputText = document.getElementById('name-input');
const outputText = document.getElementById('name-output');

inputText.addEventListener('input', event =>
    outputText.textContent = inputText.value);


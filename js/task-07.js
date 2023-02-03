
const inputRangeEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');


inputRangeEl.addEventListener('input', event => {

    const size = event.currentTarget.value;
    textEl.style.fontSize = `${size}px`;
});
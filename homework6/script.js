
function getCounterValue() {
    return localStorage.getItem('counter') || 0;
}

function setCounterValue(value) {
    localStorage.setItem('counter', value);
}

function updateCounterDisplay() {
    const counterElement = document.getElementById('counter');
    counterElement.textContent = getCounterValue();
}

function increment() {
    const currentValue = parseInt(getCounterValue());
    const newValue = currentValue + 1;
    setCounterValue(newValue);
    updateCounterDisplay();
}

function decrement() {
    const currentValue = parseInt(getCounterValue());
    const newValue = currentValue - 1;
    setCounterValue(newValue);
    updateCounterDisplay();
}

window.onload = updateCounterDisplay;







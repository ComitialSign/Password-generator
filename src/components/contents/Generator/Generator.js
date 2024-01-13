export function calculateLength() {
    const lengthValue = document.getElementById('rangeSlider').value;
    
    return lengthValue;
}

export function generate(useSymbol, useNumber, useUppercase) {
    const lengthValue = calculateLength();
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    if (useNumber) {
        const randomDigit = Math.floor(Math.random() * 10);
        result += randomDigit.toString();
        length--; 
        characters += '0123456789';
    }

    if (useSymbol) {
        const randomSymbol = '!@#$%^&*()_+[]{}|;:,.<>?';
        result += randomSymbol.charAt(Math.floor(Math.random() * randomSymbol.length));
        length--; 
        characters += randomSymbol;
    }

    if (useUppercase) {
        const randomUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        result += randomUppercase.charAt(Math.floor(Math.random() * randomUppercase.length));
        length--;
        characters += randomUppercase;
    }

    for(let i = 0; i < lengthValue; i++) {
        const randomIndex =  Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }     

    return result;
}

export function runGenerate() {
    const useNumber = document.getElementById('number').checked;
    const useSymbol = document.getElementById('symbol').checked;
    const useUppercase = document.getElementById('uppercase').checked;
    
    const password = generate(useSymbol, useNumber, useUppercase);

    const display = document.getElementById('display');

    return display.textContent = password;
}

export function copyText() {
    const display = document.getElementById('display');
    
    const range = document.createRange();
    range.selectNode(display);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
    display.textContent = 'Text copied!';
}
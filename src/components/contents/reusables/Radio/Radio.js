export function Radio(name, value, labelElement, isChecked, onchange) {
    const container = document.createElement('div');

    const radioElement = document.createElement(`input`);
    radioElement.type = 'radio';
    radioElement.name = name;
    radioElement.value = value;
    radioElement.checked = isChecked || false;
    radioElement.onchange = onchange;

    const labelElement = document.createElement('label');
    labelElement.textContent = labelText;

    container.appendChild(radioElement);
    container.appendChild(labelElement);

    return container;
}
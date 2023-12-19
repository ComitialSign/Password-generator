export function Checkbox(labelText, isChecked, onchange) {
    const container = document.createElement('div');

    const checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.checked = isChecked || false;
    checkboxElement.onchange = onchange;

    const labelElement = document.createElement('label');
    labelElement.textContent = labelText;

    container.appendChild(checkboxElement);
    container.appendChild(labelElement);

    return container;
}
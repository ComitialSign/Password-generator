export function Checkbox(labelText, value, className, isChecked, onchange) {
    const container = document.createElement('div');

    const checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.checked = isChecked || false;
    checkboxElement.onchange = onchange;
    checkboxElement.value = value;
    checkboxElement.className = className;

    const labelElement = document.createElement('label');
    labelElement.textContent = labelText;

    container.appendChild(checkboxElement);
    container.appendChild(labelElement);

    return container;
}
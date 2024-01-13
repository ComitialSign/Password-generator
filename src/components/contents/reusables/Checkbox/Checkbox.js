export function Checkbox(labelText, value, className, isChecked, id) {
    const container = document.createElement('div');

    const checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.checked = isChecked || false;
    checkboxElement.onchange = onchange;
    checkboxElement.value = value;
    checkboxElement.className = className;
    checkboxElement.id = id;

    const labelElement = document.createElement('label');
    labelElement.textContent = labelText;

    container.appendChild(checkboxElement);
    container.appendChild(labelElement);

    return container;
}
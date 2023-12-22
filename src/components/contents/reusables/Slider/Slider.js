export function Slider(value, className, onchange) {
    const container = document.createElement('div');

    const sliderElement = document.createElement('input');
    sliderElement.type = 'range';
    sliderElement.min = '5';
    sliderElement.max = '100';
    sliderElement.value = value;
    sliderElement.className = className;
    sliderElement.addEventListener('change', onchange);

    container.appendChild(sliderElement);

    return container;
}
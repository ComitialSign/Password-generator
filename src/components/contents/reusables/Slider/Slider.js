export function Slider(value, className, onchange) {
    const fragment = document.createDocumentFragment();

    const sliderElement = document.createElement('input');
    sliderElement.type = 'range';
    sliderElement.min = '5';
    sliderElement.max = '100';
    sliderElement.value = value;
    sliderElement.className = className;
    sliderElement.addEventListener('change', onchange);

    fragment.appendChild(sliderElement);

    return fragment;
}
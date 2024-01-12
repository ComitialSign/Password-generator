export function Slider(label, value, className) {
    const fragment = document.createDocumentFragment();

    const sliderLabel = document.createElement('p');
    sliderLabel.textContent = label;

    const sliderElement = document.createElement('input');
    sliderElement.type = 'range';
    sliderElement.min = '5';
    sliderElement.max = '100';
    sliderElement.value = value;
    sliderElement.className = className;

    const sliderValue = document.createElement('span');
    sliderValue.textContent = value;
  
    sliderElement.addEventListener('input', () => {
        sliderValue.textContent = sliderElement.value;
    });

    fragment.appendChild(sliderLabel);
    fragment.appendChild(sliderElement);
    fragment.appendChild(sliderValue);

    return fragment;
}
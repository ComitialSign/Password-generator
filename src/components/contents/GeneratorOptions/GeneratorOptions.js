import style from './GeneratorOptions.module.scss';
import { Button } from '../reusables/Button/Button';
import { Checkbox } from '../reusables/Checkbox/Checkbox'
import { Slider } from '../reusables/Slider/Slider'

export function GeneratorOptions() {

    //div's

    const generatorOptionsElement = document.createElement('div');
    generatorOptionsElement.classList.add(style.container);

    const divCheckbox = document.createElement('div');
    divCheckbox.classList.add(style['div-checkbox']);
    generatorOptionsElement.appendChild(divCheckbox);

    const divSlider = document.createElement('div');
    divSlider.classList.add(style['div-slider']);
    generatorOptionsElement.appendChild(divSlider);

    const divButton = document.createElement('div');
    divButton.classList.add(style['div-button']);
    generatorOptionsElement.appendChild(divButton);

    //elements

    const numberCheckbox = Checkbox('Number', 'number', style.checkbox, );
    divCheckbox.appendChild(numberCheckbox);
    const symbolCheckbox = Checkbox('Symbol', 'symbol', style.checkbox, );
    divCheckbox.appendChild(symbolCheckbox);
    const uppercaseCheckbox = Checkbox('Uppercase', 'uppercase', style.checkbox, );
    divCheckbox.appendChild(uppercaseCheckbox);

    const sliderElement = Slider('Length:',8, style.slider);
    divSlider.appendChild(sliderElement);
    
    const buttonElement = Button('generate', style.button, );
    divButton.appendChild(buttonElement);

    return generatorOptionsElement;
}
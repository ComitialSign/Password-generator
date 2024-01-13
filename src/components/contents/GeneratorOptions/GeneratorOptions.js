import style from './GeneratorOptions.module.scss';
import { Button } from '../reusables/Button/Button';
import { Checkbox } from '../reusables/Checkbox/Checkbox'
import { Slider } from '../reusables/Slider/Slider'
import { runGenerate, copyText } from '../Generator/Generator';



export function GeneratorOptions() {

    //divs

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

    //checkbox
    const numberCheckbox = Checkbox('Number', 'number', style.checkbox, false, 'number');
    divCheckbox.appendChild(numberCheckbox);

    const symbolCheckbox = Checkbox('Symbol', 'symbol', style.checkbox, false, 'symbol');
    divCheckbox.appendChild(symbolCheckbox);

    const uppercaseCheckbox = Checkbox('Uppercase', 'uppercase', style.checkbox, false, 'uppercase');
    divCheckbox.appendChild(uppercaseCheckbox);

    //slider
    const sliderElement = Slider('Length:',8, style.slider);
    divSlider.appendChild(sliderElement);
    
    //btn
    const btngenerate = Button('generate', style.button, runGenerate);
    divButton.appendChild(btngenerate);

    const btnCopy = Button('copy', style.button, copyText);
    divButton.appendChild(btnCopy);

    return generatorOptionsElement;
}
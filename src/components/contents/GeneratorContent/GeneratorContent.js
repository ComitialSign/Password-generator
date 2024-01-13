import style from './GeneratorContent.module.scss';
import { GeneratorDisplay } from '../GeneratorDisplay/GeneratorDisplay';
import { GeneratorOptions } from '../GeneratorOptions/GeneratorOptions';

export function GeneratorContent() {
    const generatorContentElement = document.createElement('main');
    generatorContentElement.classList.add(style.main);
    
    const generatorDisplayElement = GeneratorDisplay();
    generatorContentElement.appendChild(generatorDisplayElement);

    const generatorOptionsElement = GeneratorOptions();
    generatorContentElement.appendChild(generatorOptionsElement);

    return generatorContentElement;
}
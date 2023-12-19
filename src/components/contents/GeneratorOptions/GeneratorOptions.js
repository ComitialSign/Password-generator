import style from './GeneratorOptions.module.scss';

export function GeneratorOptions() {
    const generatorOptionsElement = document.createElement('div');
    generatorOptionsElement.classList.add(style.div);

    return generatorOptionsElement;
}
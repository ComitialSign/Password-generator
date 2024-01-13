import style from './GeneratorDisplay.module.scss';

export function GeneratorDisplay() {
    const displayElement = document.createElement('div');
    displayElement.classList.add(style.div);

    const contentElement = document.createElement('p');
    contentElement.classList.add(style['div-content']);
    contentElement.id = 'display';
    
    displayElement.appendChild(contentElement);

    return displayElement;
}
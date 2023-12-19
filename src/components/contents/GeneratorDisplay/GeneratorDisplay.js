import style from './GeneratorDisplay.module.scss'

export function GeneratorDisplay(content) {
    const displayElement = document.createElement('div');
    displayElement.classList.add(style.div);

    const contentElement = document.createElement('p');
    contentElement.textContent = content;
    contentElement.classList.add(style['div-content']);

    displayElement.appendChild(contentElement);

    return displayElement;
}
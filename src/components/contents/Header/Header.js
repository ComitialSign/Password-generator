import style from './Header.module.scss';

export function Header(title) {
    const header = document.createElement('header');
    header.classList.add(style.header);

    const titleElement = document.createElement('h1');
    titleElement.textContent = title;
    titleElement.classList.add(style['header-title']);

    header.appendChild(titleElement);

    return header;
}
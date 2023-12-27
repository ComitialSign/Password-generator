export function Button(content, className, onclick) {
    const fragment = document.createDocumentFragment();

    const buttonElement = document.createElement('button');
    buttonElement.textContent = content;
    buttonElement.className = className;
    buttonElement.onclick = onclick;
    
    fragment.appendChild(buttonElement);

    return fragment;
}
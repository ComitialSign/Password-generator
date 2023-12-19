export function Button(content, style, onclick) {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = content;
    buttonElement.classList.add(style);
    buttonElement.onclick = onclick;
    
    return buttonElement;
}
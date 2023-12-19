import { Header } from "../contents/Header/Header";
import { GeneratorContent } from "../contents/GeneratorContent/GeneratorContent";

export function MainPage() {
    const fragment = document.createDocumentFragment();
    
    const headerElement = Header('Made by: Gabriel Palmeira');
    fragment.appendChild(headerElement);

    const generatorContentElement = GeneratorContent();
    fragment.appendChild(generatorContentElement);

    return fragment;
}
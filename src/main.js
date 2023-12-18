import './style.scss'
import {Header} from './components/contents/Header/Header';

document.querySelector('#app').innerHTML = `
  <div>
  ${Header('Bolo').outerHTML}
  </div>
`


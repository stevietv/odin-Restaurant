import { AddNavigation } from './navigation';
import { Element } from './helpers/helpers'
import './styles.css';
import { Logo } from './images/images';

let logoContainer = document.getElementsByClassName('logoContainer');

let logoElement = Element('img', ['logo']);
logoElement.src = Logo;
logoContainer[0].appendChild(logoElement);

AddNavigation();
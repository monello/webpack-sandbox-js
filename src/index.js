import _ from 'lodash';
import './style.css';
import Icon from './avatar.jpg';
import Data from './data.xml';
import Notes from './data.csv';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log("XML Data:", Data);
    console.log("CSV Data:", Notes);

    return element;
}

document.body.appendChild(component());

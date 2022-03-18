import * as _ from 'lodash';
import printMe from './print';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack', 'typescript'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn)
    return element;
}

document.body.appendChild(component());

const app = () => {
    const appTarget = document.getElementById('app')! as HTMLDivElement;
    const element = document.createElement('p');
    element.innerText = 'App injected here';
    appTarget.appendChild(element);
}

app();
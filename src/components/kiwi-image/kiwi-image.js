import kiwi from './kiwi.png'
import './kiwi-image.css'
class KiwiImage {
    render (){
        const img = document.createElement('img');
        img.src = kiwi;
        img.alt = 'kiwi';
        img.classList.add('kiwi-image');

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img);
    }
}

export default KiwiImage;
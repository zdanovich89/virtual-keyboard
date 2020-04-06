import {keysInformation} from './keys_information.js';

let keys = document.createElement('div');

export function createKey() {    
    keys.classList.add('keyboard__keys');  
    keysInformation.forEach(item => {
        let key = document.createElement('button');
        key.classList.add('keyboard__key');
        if (item.size === "wide") {
            key.classList.add('keyboard__key_wide')
        }
        if (item.size === "space") {
            key.classList.add('keyboard__key_space')
        }
        key.textContent = item.ru;
        keys.append(key);              
    })
    return keys;
}

function getVirtualKeyboardValue() {
    keys.addEventListener("mousedown", function(e) {
        if (e.target.tagName === "BUTTON") {
            return e.target.textContent;
        }   
    })
}




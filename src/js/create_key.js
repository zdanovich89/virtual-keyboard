import {keysInformation} from './keys_information.js';

export function createKey() {
    let keys = document.createElement('div');
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
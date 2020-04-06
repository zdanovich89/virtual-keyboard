import {keysInformation} from './keys_information.js';


let wrapperTextarea = document.createElement('div');
let textArea = document.createElement('textarea');
let keyboard = document.createElement('div'); 
let keys = document.createElement('div');

function createKeyboard() {
    wrapperTextarea.classList.add('wrapper-textarea');  
    textArea.classList.add('textarea');  
    keyboard.classList.add('keyboard');      
    keyboard.append(createKey());
    wrapperTextarea.append(textArea);
    document.body.append(wrapperTextarea, keyboard);                
} 

function createKey() {       
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

 
keys.addEventListener("mousedown", function(e) {
    if (e.target.tagName === "BUTTON") {
        if (e.target.textContent === 'Backspace') {
            textArea.value = textArea.value.slice(0, -1);
        }
        else if (e.target.textContent === 'Enter') {
            textArea.value += "\n";
        }
        else if (e.target.textContent === 'Tab') {
            textArea.value += "    ";
        }
        else textArea.value += e.target.textContent;      
    }   
})

createKeyboard();



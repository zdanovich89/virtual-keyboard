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
        key.setAttribute('data', item.code)
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
        if (e.target.textContent === 'Ctrl' ||
        e.target.textContent === 'Win' ||
        e.target.textContent === 'Alt' ||               
        e.target.textContent === 'Shift' ||
        e.target.textContent === 'CapsLock'      
        ) {        
            textArea.value += '';           
        }
        else if (e.target.textContent === 'Backspace') {
            textArea.value = textArea.value.slice(0, -1);
        }
        else if (e.target.textContent === 'Enter') {
            textArea.value += "\n";
        }
        else if (e.target.textContent === 'Tab') {
            textArea.value += "    ";            
        }
        else textArea.value += e.target.textContent                            
    }   
})

window.addEventListener('keydown', function(e) {
    let arrKeys = document.querySelectorAll('.keyboard__key'); 
    arrKeys.forEach(item => {
        if (e.code === item.getAttribute('data')) {
            if (e.code === 'Backspace') {
                item.classList.add('wide_active');
                textArea.value = textArea.value.slice(0, -1);
            }
            else if (e.code === 'Enter') {
                item.classList.add('wide_active');
                textArea.value += "\n";
            }
            else if (e.code === 'Tab') {
                e.preventDefault();
                item.classList.add('wide_active');
                textArea.value += "    ";
            }
            else if (e.code === 'ArrowUp') {
                textArea.value += '▲';
            }
            else if (e.code === 'ArrowLeft') {
                textArea.value += '◄';
            }
            else if (e.code === 'ArrowDown') {
                textArea.value += '▼';
            }
            else if (e.code === 'ArrowRight') {
                textArea.value += '►';
            }
            else if (e.code === 'ControlLeft' ||
                e.code === 'MetaLeft' ||
                e.code === 'AltLeft' ||
                e.code === 'AltRight' ||
                e.code === 'ControlRight' ||
                e.code === 'ShiftLeft' ||
                e.code === 'ShiftRight'||
                e.code === 'CapsLock'
            ) {
                e.preventDefault();
                textArea.value += '';
            }
            else textArea.value += e.key; 
            item.classList.add('keyboard__key_active'); 
        } 
    })     
})

window.addEventListener('keyup', function(e) {
    let arrKeys = document.querySelectorAll('.keyboard__key'); 
    arrKeys.forEach(item => {
        item.classList.remove('keyboard__key_active','wide_active', 'space_active')
    })
})

createKeyboard();



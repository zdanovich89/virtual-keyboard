import {createKey} from './create_key.js';


export function createKeyboard() {
    let wrapperTextarea = document.createElement('div');
    let textArea = document.createElement('textarea');
    let keyboard = document.createElement('div'); 
    wrapperTextarea.classList.add('wrapper-textarea');  
    textArea.classList.add('textarea');  
    keyboard.classList.add('keyboard');       
    keyboard.append(createKey());
    wrapperTextarea.append(textArea);
    document.body.append(wrapperTextarea, keyboard);                
} 

createKeyboard();

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_keys_information_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/keys_information.js */ \"./src/js/keys_information.js\");\n/* harmony import */ var _js_create_keyboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/create_keyboard.js */ \"./src/js/create_keyboard.js\");\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/create_key.js":
/*!******************************!*\
  !*** ./src/js/create_key.js ***!
  \******************************/
/*! exports provided: createKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createKey\", function() { return createKey; });\n/* harmony import */ var _keys_information_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys_information.js */ \"./src/js/keys_information.js\");\n\r\n\r\nfunction createKey() {\r\n    let keys = document.createElement('div');\r\n    keys.classList.add('keyboard__keys');  \r\n    _keys_information_js__WEBPACK_IMPORTED_MODULE_0__[\"keysInformation\"].forEach(item => {\r\n        let key = document.createElement('button');\r\n        key.classList.add('keyboard__key');\r\n        if (item.size === \"wide\") {\r\n            key.classList.add('keyboard__key_wide')\r\n        }\r\n        if (item.size === \"space\") {\r\n            key.classList.add('keyboard__key_space')\r\n        }\r\n        key.textContent = item.ru;\r\n        keys.append(key);              \r\n    })\r\n    return keys;\r\n\r\n}\n\n//# sourceURL=webpack:///./src/js/create_key.js?");

/***/ }),

/***/ "./src/js/create_keyboard.js":
/*!***********************************!*\
  !*** ./src/js/create_keyboard.js ***!
  \***********************************/
/*! exports provided: createKeyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createKeyboard\", function() { return createKeyboard; });\n/* harmony import */ var _create_key_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_key.js */ \"./src/js/create_key.js\");\n\r\n\r\n\r\nfunction createKeyboard() {\r\n    let wrapperTextarea = document.createElement('div');\r\n    let textArea = document.createElement('textarea');\r\n    let keyboard = document.createElement('div'); \r\n    wrapperTextarea.classList.add('wrapper-textarea');  \r\n    textArea.classList.add('textarea');  \r\n    keyboard.classList.add('keyboard');       \r\n    keyboard.append(Object(_create_key_js__WEBPACK_IMPORTED_MODULE_0__[\"createKey\"])());\r\n    wrapperTextarea.append(textArea);\r\n    document.body.append(wrapperTextarea, keyboard);                \r\n} \r\n\r\ncreateKeyboard();\r\n\n\n//# sourceURL=webpack:///./src/js/create_keyboard.js?");

/***/ }),

/***/ "./src/js/keys_information.js":
/*!************************************!*\
  !*** ./src/js/keys_information.js ***!
  \************************************/
/*! exports provided: keysInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"keysInformation\", function() { return keysInformation; });\nconst keysInformation = [\r\n    { code: 'Backquote', en: '`', ru: 'ё', size: 'normal'},\r\n    { code: 'Digit1', en: '1', ru: '1', size: 'normal'},\r\n    { code: 'Digit2', en: '2', ru: '2', size: 'normal'},\r\n    { code: 'Digit3', en: '3', ru: '3', size: 'normal'},\r\n    { code: 'Digit4', en: '4', ru: '4', size: 'normal'},\r\n    { code: 'Digit5', en: '5', ru: '5', size: 'normal'},\r\n    { code: 'Digit6', en: '6', ru: '6', size: 'normal'},\r\n    { code: 'Digit7', en: '7', ru: '7', size: 'normal'},\r\n    { code: 'Digit8', en: '8', ru: '8', size: 'normal'},\r\n    { code: 'Digit9', en: '9', ru: '9', size: 'normal'},\r\n    { code: 'Digit0', en: '0', ru: '0', size: 'normal'},\r\n    { code: 'Minus', en: '-', ru: '-', size: 'normal'},\r\n    { code: 'Equal', en: '=', ru: '=', size: 'normal'},\r\n    { code: 'Backspace', en: 'Backspace', ru: 'Backspace', size: 'wide'},\r\n    { code: 'Tab', en: 'Tab', ru: 'Tab', size: 'wide'},\r\n    { code: 'KeyQ', en: '`q', ru: 'й', size: 'normal'},\r\n    { code: 'KeyW', en: 'w', ru: 'ц', size: 'normal'},\r\n    { code: 'KeyE', en: 'e', ru: 'у', size: 'normal'},\r\n    { code: 'KeyR', en: 'r', ru: 'к', size: 'normal'},\r\n    { code: 'KeyT', en: 't', ru: 'е', size: 'normal'},\r\n    { code: 'KeyY', en: 'y', ru: 'н', size: 'normal'},\r\n    { code: 'KeyU', en: 'u', ru: 'г', size: 'normal'},\r\n    { code: 'KeyI', en: 'i', ru: 'ш', size: 'normal'},\r\n    { code: 'KeyO', en: 'o', ru: 'щ', size: 'normal'},\r\n    { code: 'KeyP', en: 'p', ru: 'з', size: 'normal'},\r\n    { code: 'BracketLeft', en: '[', ru: 'х', size: 'normal'},\r\n    { code: 'BracketRight', en: ']', ru: 'ъ', size: 'normal'},\r\n    { code: 'Backslash', en: '\\\\', ru: '\\\\', size: 'normal'},\r\n    { code: 'CapsLock', en: 'CapsLock', ru: 'CapsLock', size: 'wide'},\r\n    { code: 'KeyA', en: 'a', ru: 'ф', size: 'normal'},\r\n    { code: 'KeyS', en: 's', ru: 'ы', size: 'normal'},\r\n    { code: 'KeyD', en: 'd', ru: 'в', size: 'normal'},\r\n    { code: 'KeyF', en: 'f', ru: 'а', size: 'normal'},\r\n    { code: 'KeyG', en: 'g', ru: 'п', size: 'normal'},\r\n    { code: 'KeyH', en: 'h', ru: 'р', size: 'normal'},\r\n    { code: 'KeyJ', en: 'j', ru: 'о', size: 'normal'},\r\n    { code: 'KeyK', en: 'k', ru: 'л', size: 'normal'},\r\n    { code: 'KeyL', en: 'l', ru: 'д', size: 'normal'},\r\n    { code: 'Semicolon', en: ';', ru: 'ж', size: 'normal'},\r\n    { code: 'Quote', en: '\\'', ru: 'э', size: 'normal'},\r\n    { code: 'Enter', en: 'Enter', ru: 'Enter', size: 'wide'},\r\n    { code: 'ShiftLeft', en: 'Shift', ru: 'Shift', size: 'wide'},\r\n    { code: 'KeyZ', en: 'z', ru: 'я', size: 'normal'},\r\n    { code: 'KeyX', en: 'x', ru: 'ч', size: 'normal'},\r\n    { code: 'KeyC', en: 'c', ru: 'с', size: 'normal'},\r\n    { code: 'KeyV', en: 'v', ru: 'м', size: 'normal'},\r\n    { code: 'KeyB', en: 'b', ru: 'и', size: 'normal'},\r\n    { code: 'KeyN', en: 'n', ru: 'т', size: 'normal'},\r\n    { code: 'KeyM', en: 'm', ru: 'ь', size: 'normal'},\r\n    { code: 'Comma', en: ',', ru: 'б', size: 'normal'},\r\n    { code: 'Period', en: '.', ru: 'ю', size: 'normal'},\r\n    { code: 'Slash', en: '/', ru: '.', size: 'normal'},    \r\n    { code: 'ArrowUp', en: '▲', ru: '▲', size: 'normal'},\r\n    { code: 'ShiftRight', en: 'Shift', ru: 'Shift', size: 'wide'},\r\n    { code: 'ControlLeft', en: 'Ctrl', ru: 'Ctrl', size: 'normal'},\r\n    { code: 'MetaLeft', en: 'Win', ru: 'Win', size: 'normal'},\r\n    { code: 'AltLeft', en: 'Alt', ru: 'Alt', size: 'normal'},\r\n    { code: 'Space', en: ' ', ru: ' ', size: 'space'},\r\n    { code: 'AltRight', en: 'Alt', ru: 'Alt', size: 'normal'},     \r\n    { code: 'ArrowLeft', en: '◄', ru: '◄', size: 'normal'},\r\n    { code: 'ArrowDown', en: '▼', ru: '▼', size: 'normal'},\r\n    { code: 'ArrowRight', en: '►', ru: '►', size: 'normal'},\r\n    { code: 'ControlRight', en: 'Ctrl', ru: 'Ctrl', size: 'normal'},\r\n]\r\n\n\n//# sourceURL=webpack:///./src/js/keys_information.js?");

/***/ })

/******/ });
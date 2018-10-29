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
/******/ 	return __webpack_require__(__webpack_require__.s = "./game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./asteroid.js":
/*!*********************!*\
  !*** ./asteroid.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = () => {\n};\n\n\n//# sourceURL=webpack:///./asteroid.js?");

/***/ }),

/***/ "./bullet.js":
/*!*******************!*\
  !*** ./bullet.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = () => {\n};\n\n\n//# sourceURL=webpack:///./bullet.js?");

/***/ }),

/***/ "./game.js":
/*!*****************!*\
  !*** ./game.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n  window.asteroid = __webpack_require__(/*! ./asteroid.js */ \"./asteroid.js\");\n  window.bullet = __webpack_require__(/*! ./bullet.js */ \"./bullet.js\");\n  window.game_view = __webpack_require__(/*! ./game_view.js */ \"./game_view.js\");\n  window.moving_object = __webpack_require__(/*! ./moving_object.js */ \"./moving_object.js\");\n  window.ship = __webpack_require__(/*! ./ship.js */ \"./ship.js\");\n  window.utils = __webpack_require__(/*! ./utils.js */ \"./utils.js\");\n\n  window.game_view();\n\n\n//# sourceURL=webpack:///./game.js?");

/***/ }),

/***/ "./game_view.js":
/*!**********************!*\
  !*** ./game_view.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = () => {\n\n  function fillRectangle(){\n    const game_viewEl = document.getElementById('game-canvas');\n    const ctx = game_viewEl.getContext(\"2d\");\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0,0,800,500);\n  }\n\n  // function draw_game(ctx){\n  //\n  // }\n\n  document.addEventListener(\"DOMContentLoaded\", fillRectangle);\n};\n\n\n//# sourceURL=webpack:///./game_view.js?");

/***/ }),

/***/ "./moving_object.js":
/*!**************************!*\
  !*** ./moving_object.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = () => {\n\n  class MovingObject {\n    constructor (options) {\n      this.position = options[position];\n      this.velocity = options[velocity];\n      this.radius = options[radius];\n      this.color = options[color];\n    }\n  }\n\n};\n\n\n//# sourceURL=webpack:///./moving_object.js?");

/***/ }),

/***/ "./ship.js":
/*!*****************!*\
  !*** ./ship.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = () => {\n};\n\n\n//# sourceURL=webpack:///./ship.js?");

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = () => {\n};\n\n\n//# sourceURL=webpack:///./utils.js?");

/***/ })

/******/ });
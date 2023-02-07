/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_overworld_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/overworld.js */ \"./src/scripts/overworld.js\");\n\nwindow.onload = function () {\n  const overworld = new _scripts_overworld_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    element: document.querySelector(\".game-container\")\n  });\n  overworld.init();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBOEM7QUFFOUNDLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHLFlBQVc7RUFDdkIsTUFBTUMsU0FBUyxHQUFHLElBQUlILDZEQUFTLENBQUM7SUFDNUJJLE9BQU8sRUFBRUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsaUJBQWlCO0VBQ3JELENBQUMsQ0FBQztFQUNGSCxTQUFTLENBQUNJLElBQUksRUFBRTtBQUNwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXl0aGljLW1vdW50YWluLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE92ZXJ3b3JsZCBmcm9tICcuL3NjcmlwdHMvb3ZlcndvcmxkLmpzJ1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgb3ZlcndvcmxkID0gbmV3IE92ZXJ3b3JsZCh7XG4gICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jb250YWluZXJcIilcbiAgICB9KVxuICAgIG92ZXJ3b3JsZC5pbml0KClcbn0iXSwibmFtZXMiOlsiT3ZlcndvcmxkIiwid2luZG93Iiwib25sb2FkIiwib3ZlcndvcmxkIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImluaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/battle-screen.js":
/*!**************************************!*\
  !*** ./src/scripts/battle-screen.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BattleScreen; }\n/* harmony export */ });\nclass BattleScreen {\n  constructor(gameContainer, canvas, context, audio) {\n    this.gameContainer = gameContainer;\n    this.canvas = canvas;\n    this.context = context;\n    this.audio = audio;\n\n    // create battle screen art\n    this.battleScreenArt = new Image();\n    this.battleScreenArt.src = \"../assets/battle-screen-art/twilight-pond.png\";\n\n    // change audio\n    this.audio.src = \"../music/xDeviruchi - And The Journey Begins .wav\";\n  }\n  init() {\n    this.battleScreenArt.onload = () => {\n      this.context.drawImage(this.battleScreenArt, 0, 0, this.canvas.width, this.canvas.height);\n    };\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iYXR0bGUtc2NyZWVuLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNQSxZQUFZLENBQUM7RUFDOUJDLFdBQVcsQ0FBQ0MsYUFBYSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFO0lBQy9DLElBQUksQ0FBQ0gsYUFBYSxHQUFHQSxhQUFhO0lBQ2xDLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLOztJQUVsQjtJQUNBLElBQUksQ0FBQ0MsZUFBZSxHQUFHLElBQUlDLEtBQUssRUFBRTtJQUNsQyxJQUFJLENBQUNELGVBQWUsQ0FBQ0UsR0FBRyxHQUFHLCtDQUErQzs7SUFFMUU7SUFDQSxJQUFJLENBQUNILEtBQUssQ0FBQ0csR0FBRyxHQUFHLG1EQUFtRDtFQUN4RTtFQUVBQyxJQUFJLEdBQUc7SUFDSCxJQUFJLENBQUNILGVBQWUsQ0FBQ0ksTUFBTSxHQUFHLE1BQU07TUFDaEMsSUFBSSxDQUFDTixPQUFPLENBQUNPLFNBQVMsQ0FBQyxJQUFJLENBQUNMLGVBQWUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQ0gsTUFBTSxDQUFDUyxLQUFLLEVBQUUsSUFBSSxDQUFDVCxNQUFNLENBQUNVLE1BQU0sQ0FBQztJQUM3RixDQUFDO0VBQ0w7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL215dGhpYy1tb3VudGFpbi8uL3NyYy9zY3JpcHRzL2JhdHRsZS1zY3JlZW4uanM/ZjJjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXR0bGVTY3JlZW4ge1xuICAgIGNvbnN0cnVjdG9yKGdhbWVDb250YWluZXIsIGNhbnZhcywgY29udGV4dCwgYXVkaW8pIHtcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyID0gZ2FtZUNvbnRhaW5lclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XG4gICAgICAgIHRoaXMuYXVkaW8gPSBhdWRpb1xuXG4gICAgICAgIC8vIGNyZWF0ZSBiYXR0bGUgc2NyZWVuIGFydFxuICAgICAgICB0aGlzLmJhdHRsZVNjcmVlbkFydCA9IG5ldyBJbWFnZSgpXG4gICAgICAgIHRoaXMuYmF0dGxlU2NyZWVuQXJ0LnNyYyA9IFwiLi4vYXNzZXRzL2JhdHRsZS1zY3JlZW4tYXJ0L3R3aWxpZ2h0LXBvbmQucG5nXCI7XG5cbiAgICAgICAgLy8gY2hhbmdlIGF1ZGlvXG4gICAgICAgIHRoaXMuYXVkaW8uc3JjID0gXCIuLi9tdXNpYy94RGV2aXJ1Y2hpIC0gQW5kIFRoZSBKb3VybmV5IEJlZ2lucyAud2F2XCJcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhdHRsZVNjcmVlbkFydC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuYmF0dGxlU2NyZWVuQXJ0LCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KVxuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJCYXR0bGVTY3JlZW4iLCJjb25zdHJ1Y3RvciIsImdhbWVDb250YWluZXIiLCJjYW52YXMiLCJjb250ZXh0IiwiYXVkaW8iLCJiYXR0bGVTY3JlZW5BcnQiLCJJbWFnZSIsInNyYyIsImluaXQiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/battle-screen.js\n");

/***/ }),

/***/ "./src/scripts/overworld.js":
/*!**********************************!*\
  !*** ./src/scripts/overworld.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Overworld; }\n/* harmony export */ });\n/* harmony import */ var _start_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-screen */ \"./src/scripts/start-screen.js\");\n/* harmony import */ var _battle_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battle-screen */ \"./src/scripts/battle-screen.js\");\n\n\nclass Overworld {\n  constructor(config) {\n    this.element = config.element;\n    this.canvas = this.element.querySelector(\".game-canvas\");\n    this.canvas.width = this.element.offsetWidth;\n    this.canvas.height = this.element.offsetHeight;\n    this.context = this.canvas.getContext('2d');\n    this.currentScreen = null;\n\n    // create audio\n    this.audio = new Audio();\n    this.audio.type = \"this.audio/wav\";\n    this.audio.loop = true;\n    this.audio.muted = true;\n    this.audio.volume = 0.3;\n    if (this.audio) {\n      console.log(\"audio exists\");\n    }\n  }\n  init() {\n    const button = document.getElementById(\"mute-button\");\n    button.addEventListener(\"click\", function () {\n      this.audio.muted = !this.audio.muted;\n      if (this.audio.muted) {\n        button.innerHTML = `<img src=\"assets/overworld/mute_icon.png\" alt=\"muted\">`;\n      } else {\n        this.audio.play();\n        button.innerHTML = `<img src=\"assets/overworld/unmute_icon.png\" alt=\"unmuted\">`;\n      }\n    });\n    this.currentScreen = new _start_screen__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.element, this.canvas, this.context, this.audio);\n    // this.currentScreen = new BattleScreen(this.element, this.canvas, this.context, this.audio)\n\n    this.currentScreen.init();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9vdmVyd29ybGQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdDO0FBQ0U7QUFFM0IsTUFBTUUsU0FBUyxDQUFDO0VBQzNCQyxXQUFXLENBQUNDLE1BQU0sRUFBRTtJQUNoQixJQUFJLENBQUNDLE9BQU8sR0FBR0QsTUFBTSxDQUFDQyxPQUFPO0lBQzdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ0QsT0FBTyxDQUFDRSxhQUFhLENBQUMsY0FBYyxDQUFDO0lBQ3hELElBQUksQ0FBQ0QsTUFBTSxDQUFDRSxLQUFLLEdBQUcsSUFBSSxDQUFDSCxPQUFPLENBQUNJLFdBQVc7SUFDNUMsSUFBSSxDQUFDSCxNQUFNLENBQUNJLE1BQU0sR0FBRyxJQUFJLENBQUNMLE9BQU8sQ0FBQ00sWUFBWTtJQUM5QyxJQUFJLENBQUNDLE9BQU8sR0FBRyxJQUFJLENBQUNOLE1BQU0sQ0FBQ08sVUFBVSxDQUFDLElBQUksQ0FBQztJQUMzQyxJQUFJLENBQUNDLGFBQWEsR0FBRyxJQUFJOztJQUV6QjtJQUNBLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUlDLEtBQUssRUFBRTtJQUN4QixJQUFJLENBQUNELEtBQUssQ0FBQ0UsSUFBSSxHQUFHLGdCQUFnQjtJQUNsQyxJQUFJLENBQUNGLEtBQUssQ0FBQ0csSUFBSSxHQUFHLElBQUk7SUFDdEIsSUFBSSxDQUFDSCxLQUFLLENBQUNJLEtBQUssR0FBRyxJQUFJO0lBQ3ZCLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxNQUFNLEdBQUcsR0FBRztJQUN2QixJQUFJLElBQUksQ0FBQ0wsS0FBSyxFQUFFO01BQUNNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUFBO0VBQ2hEO0VBRUFDLElBQUksR0FBRztJQUNILE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDO0lBQ3JERixNQUFNLENBQUNHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFXO01BQ3hDLElBQUksQ0FBQ1osS0FBSyxDQUFDSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUNKLEtBQUssQ0FBQ0ksS0FBSztNQUNwQyxJQUFJLElBQUksQ0FBQ0osS0FBSyxDQUFDSSxLQUFLLEVBQUU7UUFDbEJLLE1BQU0sQ0FBQ0ksU0FBUyxHQUFJLHdEQUF1RDtNQUMvRSxDQUFDLE1BQU07UUFDSCxJQUFJLENBQUNiLEtBQUssQ0FBQ2MsSUFBSSxFQUFFO1FBQ2pCTCxNQUFNLENBQUNJLFNBQVMsR0FBSSw0REFBMkQ7TUFDbkY7SUFDSixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNkLGFBQWEsR0FBRyxJQUFJZCxxREFBVyxDQUFDLElBQUksQ0FBQ0ssT0FBTyxFQUFFLElBQUksQ0FBQ0MsTUFBTSxFQUFFLElBQUksQ0FBQ00sT0FBTyxFQUFFLElBQUksQ0FBQ0csS0FBSyxDQUFDO0lBQ3pGOztJQUVBLElBQUksQ0FBQ0QsYUFBYSxDQUFDUyxJQUFJLEVBQUU7RUFDN0I7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL215dGhpYy1tb3VudGFpbi8uL3NyYy9zY3JpcHRzL292ZXJ3b3JsZC5qcz80YmRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdGFydFNjcmVlbiBmcm9tIFwiLi9zdGFydC1zY3JlZW5cIlxuaW1wb3J0IEJhdHRsZVNjcmVlbiBmcm9tIFwiLi9iYXR0bGUtc2NyZWVuXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcndvcmxkIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gY29uZmlnLmVsZW1lbnRcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWNhbnZhc1wiKVxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdGhpcy5jdXJyZW50U2NyZWVuID0gbnVsbFxuXG4gICAgICAgIC8vIGNyZWF0ZSBhdWRpb1xuICAgICAgICB0aGlzLmF1ZGlvID0gbmV3IEF1ZGlvKClcbiAgICAgICAgdGhpcy5hdWRpby50eXBlID0gXCJ0aGlzLmF1ZGlvL3dhdlwiXG4gICAgICAgIHRoaXMuYXVkaW8ubG9vcCA9IHRydWVcbiAgICAgICAgdGhpcy5hdWRpby5tdXRlZCA9IHRydWVcbiAgICAgICAgdGhpcy5hdWRpby52b2x1bWUgPSAwLjNcbiAgICAgICAgaWYgKHRoaXMuYXVkaW8pIHtjb25zb2xlLmxvZyhcImF1ZGlvIGV4aXN0c1wiKX1cbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm11dGUtYnV0dG9uXCIpXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvLm11dGVkID0gIXRoaXMuYXVkaW8ubXV0ZWRcbiAgICAgICAgICAgIGlmICh0aGlzLmF1ZGlvLm11dGVkKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cImFzc2V0cy9vdmVyd29ybGQvbXV0ZV9pY29uLnBuZ1wiIGFsdD1cIm11dGVkXCI+YFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvLnBsYXkoKVxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCJhc3NldHMvb3ZlcndvcmxkL3VubXV0ZV9pY29uLnBuZ1wiIGFsdD1cInVubXV0ZWRcIj5gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5jdXJyZW50U2NyZWVuID0gbmV3IFN0YXJ0U2NyZWVuKHRoaXMuZWxlbWVudCwgdGhpcy5jYW52YXMsIHRoaXMuY29udGV4dCwgdGhpcy5hdWRpbylcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50U2NyZWVuID0gbmV3IEJhdHRsZVNjcmVlbih0aGlzLmVsZW1lbnQsIHRoaXMuY2FudmFzLCB0aGlzLmNvbnRleHQsIHRoaXMuYXVkaW8pXG5cbiAgICAgICAgdGhpcy5jdXJyZW50U2NyZWVuLmluaXQoKVxuICAgIH1cbn0iXSwibmFtZXMiOlsiU3RhcnRTY3JlZW4iLCJCYXR0bGVTY3JlZW4iLCJPdmVyd29ybGQiLCJjb25zdHJ1Y3RvciIsImNvbmZpZyIsImVsZW1lbnQiLCJjYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiY3VycmVudFNjcmVlbiIsImF1ZGlvIiwiQXVkaW8iLCJ0eXBlIiwibG9vcCIsIm11dGVkIiwidm9sdW1lIiwiY29uc29sZSIsImxvZyIsImluaXQiLCJidXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlubmVySFRNTCIsInBsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/overworld.js\n");

/***/ }),

/***/ "./src/scripts/start-screen.js":
/*!*************************************!*\
  !*** ./src/scripts/start-screen.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ StartScreen; }\n/* harmony export */ });\nclass StartScreen {\n  constructor(gameContainer, canvas, context, audio) {\n    this.gameContainer = gameContainer;\n    this.canvas = canvas;\n    this.context = context;\n    this.audio = audio;\n\n    // create start screen art and start button\n    this.startScreenArt = new Image();\n    this.startButton = new Image();\n    this.startScreenArt.src = \"../assets/start-screen/Start Screen.png\";\n    this.startButton.src = \"../assets/start-screen/Start Button.png\";\n\n    // change audio\n    this.audio.src = \"../music/xDeviruchi - Title Theme .wav\";\n  }\n  init() {\n    this.startScreenArt.onload = () => {\n      this.context.drawImage(this.startScreenArt, 0, 0, this.canvas.width, this.canvas.height);\n      this.gameContainer.appendChild(this.startButton);\n    };\n    this.startButton.addEventListener(\"click\", () => {\n      console.log(\"start button clicked\");\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zdGFydC1zY3JlZW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLFdBQVcsQ0FBQztFQUM3QkMsV0FBVyxDQUFDQyxhQUFhLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUU7SUFDL0MsSUFBSSxDQUFDSCxhQUFhLEdBQUdBLGFBQWE7SUFDbEMsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7O0lBRWxCO0lBQ0EsSUFBSSxDQUFDQyxjQUFjLEdBQUcsSUFBSUMsS0FBSyxFQUFFO0lBQ2pDLElBQUksQ0FBQ0MsV0FBVyxHQUFHLElBQUlELEtBQUssRUFBRTtJQUM5QixJQUFJLENBQUNELGNBQWMsQ0FBQ0csR0FBRyxHQUFHLHlDQUF5QztJQUNuRSxJQUFJLENBQUNELFdBQVcsQ0FBQ0MsR0FBRyxHQUFHLHlDQUF5Qzs7SUFFaEU7SUFDQSxJQUFJLENBQUNKLEtBQUssQ0FBQ0ksR0FBRyxHQUFHLHdDQUF3QztFQUM3RDtFQUVBQyxJQUFJLEdBQUc7SUFDSCxJQUFJLENBQUNKLGNBQWMsQ0FBQ0ssTUFBTSxHQUFHLE1BQU07TUFDL0IsSUFBSSxDQUFDUCxPQUFPLENBQUNRLFNBQVMsQ0FBQyxJQUFJLENBQUNOLGNBQWMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQ0gsTUFBTSxDQUFDVSxLQUFLLEVBQUUsSUFBSSxDQUFDVixNQUFNLENBQUNXLE1BQU0sQ0FBQztNQUN4RixJQUFJLENBQUNaLGFBQWEsQ0FBQ2EsV0FBVyxDQUFDLElBQUksQ0FBQ1AsV0FBVyxDQUFDO0lBQ3BELENBQUM7SUFFRCxJQUFJLENBQUNBLFdBQVcsQ0FBQ1EsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07TUFDN0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0lBQ3ZDLENBQUMsQ0FBQztFQUNOO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXRoaWMtbW91bnRhaW4vLi9zcmMvc2NyaXB0cy9zdGFydC1zY3JlZW4uanM/ZWRlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydFNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoZ2FtZUNvbnRhaW5lciwgY2FudmFzLCBjb250ZXh0LCBhdWRpbykge1xuICAgICAgICB0aGlzLmdhbWVDb250YWluZXIgPSBnYW1lQ29udGFpbmVyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHRcbiAgICAgICAgdGhpcy5hdWRpbyA9IGF1ZGlvXG5cbiAgICAgICAgLy8gY3JlYXRlIHN0YXJ0IHNjcmVlbiBhcnQgYW5kIHN0YXJ0IGJ1dHRvblxuICAgICAgICB0aGlzLnN0YXJ0U2NyZWVuQXJ0ID0gbmV3IEltYWdlKClcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbiA9IG5ldyBJbWFnZSgpXG4gICAgICAgIHRoaXMuc3RhcnRTY3JlZW5BcnQuc3JjID0gXCIuLi9hc3NldHMvc3RhcnQtc2NyZWVuL1N0YXJ0IFNjcmVlbi5wbmdcIlxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLnNyYyA9IFwiLi4vYXNzZXRzL3N0YXJ0LXNjcmVlbi9TdGFydCBCdXR0b24ucG5nXCJcblxuICAgICAgICAvLyBjaGFuZ2UgYXVkaW9cbiAgICAgICAgdGhpcy5hdWRpby5zcmMgPSBcIi4uL211c2ljL3hEZXZpcnVjaGkgLSBUaXRsZSBUaGVtZSAud2F2XCJcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnN0YXJ0U2NyZWVuQXJ0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5zdGFydFNjcmVlbkFydCwgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnN0YXJ0QnV0dG9uKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFydCBidXR0b24gY2xpY2tlZFwiKVxuICAgICAgICB9KVxuICAgIH1cbn0iXSwibmFtZXMiOlsiU3RhcnRTY3JlZW4iLCJjb25zdHJ1Y3RvciIsImdhbWVDb250YWluZXIiLCJjYW52YXMiLCJjb250ZXh0IiwiYXVkaW8iLCJzdGFydFNjcmVlbkFydCIsIkltYWdlIiwic3RhcnRCdXR0b24iLCJzcmMiLCJpbml0Iiwib25sb2FkIiwiZHJhd0ltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/start-screen.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXRoaWMtbW91bnRhaW4vLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;
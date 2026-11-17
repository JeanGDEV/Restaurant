/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ about)\n/* harmony export */ });\nfunction about(){\r\n    const content = document.querySelector(\"#content\")\r\n    content.textContent = \"\"\r\n    // Elements\r\n    const story = document.createElement(\"section\")\r\n    const storyInner = document.createElement(\"div\")\r\n\r\n    const innerSpan = document.createElement(\"span\")\r\n    const innerTitle = document.createElement(\"h2\")\r\n    const innerLead = document.createElement(\"p\")\r\n    const innerDescription = document.createElement(\"p\")\r\n\r\n    // Adding text contents\r\n\r\n    innerSpan.textContent = \"Our Journey\"\r\n    innerTitle.textContent = \"Cooking with intention\"\r\n    innerLead.textContent = \"We began in 2010 with a simple idea: to respect the product and time.\"\r\n    innerDescription.textContent = \"Every morning, we select ingredients from local producers...\"\r\n\r\n    innerSpan.classList.add(\"about-story__eyebrow\")\r\n    innerTitle.classList.add(\"about-story__title\")\r\n    innerLead.classList.add(\"about-story__lead\")\r\n\r\n    storyInner.append(innerSpan, innerTitle, innerLead, innerDescription)\r\n    storyInner.classList.add(\"about-story__inner\")\r\n\r\n    story.append(storyInner)\r\n    story.classList.add(\"about-story\")\r\n\r\n    content.append(story)\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUmVzdGF1cmFudC8uL3NyYy9hYm91dC5qcz9iM2YyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0KCl7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXHJcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIlxyXG4gICAgLy8gRWxlbWVudHNcclxuICAgIGNvbnN0IHN0b3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIilcclxuICAgIGNvbnN0IHN0b3J5SW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcblxyXG4gICAgY29uc3QgaW5uZXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcclxuICAgIGNvbnN0IGlubmVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcclxuICAgIGNvbnN0IGlubmVyTGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICBjb25zdCBpbm5lckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuXHJcbiAgICAvLyBBZGRpbmcgdGV4dCBjb250ZW50c1xyXG5cclxuICAgIGlubmVyU3Bhbi50ZXh0Q29udGVudCA9IFwiT3VyIEpvdXJuZXlcIlxyXG4gICAgaW5uZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiQ29va2luZyB3aXRoIGludGVudGlvblwiXHJcbiAgICBpbm5lckxlYWQudGV4dENvbnRlbnQgPSBcIldlIGJlZ2FuIGluIDIwMTAgd2l0aCBhIHNpbXBsZSBpZGVhOiB0byByZXNwZWN0IHRoZSBwcm9kdWN0IGFuZCB0aW1lLlwiXHJcbiAgICBpbm5lckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJFdmVyeSBtb3JuaW5nLCB3ZSBzZWxlY3QgaW5ncmVkaWVudHMgZnJvbSBsb2NhbCBwcm9kdWNlcnMuLi5cIlxyXG5cclxuICAgIGlubmVyU3Bhbi5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtc3RvcnlfX2V5ZWJyb3dcIilcclxuICAgIGlubmVyVGl0bGUuY2xhc3NMaXN0LmFkZChcImFib3V0LXN0b3J5X190aXRsZVwiKVxyXG4gICAgaW5uZXJMZWFkLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1zdG9yeV9fbGVhZFwiKVxyXG5cclxuICAgIHN0b3J5SW5uZXIuYXBwZW5kKGlubmVyU3BhbiwgaW5uZXJUaXRsZSwgaW5uZXJMZWFkLCBpbm5lckRlc2NyaXB0aW9uKVxyXG4gICAgc3RvcnlJbm5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtc3RvcnlfX2lubmVyXCIpXHJcblxyXG4gICAgc3RvcnkuYXBwZW5kKHN0b3J5SW5uZXIpXHJcbiAgICBzdG9yeS5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtc3RvcnlcIilcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZChzdG9yeSlcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/about.js\n\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\nfunction home(){\r\n    // Elements\r\n    const content = document.querySelector(\"#content\")\r\n    content.textContent = \" \"\r\n    const homeHeroContent = document.createElement(\"div\")\r\n    const homeHeroTagLine = document.createElement(\"p\")\r\n    const homeHeroTitle = document.createElement(\"h1\")\r\n    const homeHeroSubtitle = document.createElement(\"p\")\r\n\r\n    // Text content to Elements\r\n    homeHeroTagLine.textContent = \"Barry's rest · Since 2010\"\r\n    homeHeroTitle.textContent = \"Flavors that tell stories\"\r\n    homeHeroSubtitle.textContent = \"Fresh ingredients, honest recipes\"\r\n\r\n    // Adding classes\r\n    homeHeroContent.classList.add(\"home-hero__content\")\r\n    homeHeroTagLine.classList.add(\"home-hero__tagline\")\r\n    homeHeroTitle.classList.add(\"home-hero__title\")\r\n    homeHeroSubtitle.classList.add(\"home-hero__subtitle\")\r\n\r\n    // Appeding Children Elements\r\n\r\n    homeHeroContent.append(homeHeroTagLine, homeHeroTitle, homeHeroSubtitle)\r\n\r\n    content.append(homeHeroContent)\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcz80ZDgwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKXtcclxuICAgIC8vIEVsZW1lbnRzXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXHJcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCIgXCJcclxuICAgIGNvbnN0IGhvbWVIZXJvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGNvbnN0IGhvbWVIZXJvVGFnTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICBjb25zdCBob21lSGVyb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXHJcbiAgICBjb25zdCBob21lSGVyb1N1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuXHJcbiAgICAvLyBUZXh0IGNvbnRlbnQgdG8gRWxlbWVudHNcclxuICAgIGhvbWVIZXJvVGFnTGluZS50ZXh0Q29udGVudCA9IFwiQmFycnkncyByZXN0IMK3IFNpbmNlIDIwMTBcIlxyXG4gICAgaG9tZUhlcm9UaXRsZS50ZXh0Q29udGVudCA9IFwiRmxhdm9ycyB0aGF0IHRlbGwgc3Rvcmllc1wiXHJcbiAgICBob21lSGVyb1N1YnRpdGxlLnRleHRDb250ZW50ID0gXCJGcmVzaCBpbmdyZWRpZW50cywgaG9uZXN0IHJlY2lwZXNcIlxyXG5cclxuICAgIC8vIEFkZGluZyBjbGFzc2VzXHJcbiAgICBob21lSGVyb0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhvbWUtaGVyb19fY29udGVudFwiKVxyXG4gICAgaG9tZUhlcm9UYWdMaW5lLmNsYXNzTGlzdC5hZGQoXCJob21lLWhlcm9fX3RhZ2xpbmVcIilcclxuICAgIGhvbWVIZXJvVGl0bGUuY2xhc3NMaXN0LmFkZChcImhvbWUtaGVyb19fdGl0bGVcIilcclxuICAgIGhvbWVIZXJvU3VidGl0bGUuY2xhc3NMaXN0LmFkZChcImhvbWUtaGVyb19fc3VidGl0bGVcIilcclxuXHJcbiAgICAvLyBBcHBlZGluZyBDaGlsZHJlbiBFbGVtZW50c1xyXG5cclxuICAgIGhvbWVIZXJvQ29udGVudC5hcHBlbmQoaG9tZUhlcm9UYWdMaW5lLCBob21lSGVyb1RpdGxlLCBob21lSGVyb1N1YnRpdGxlKVxyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kKGhvbWVIZXJvQ29udGVudClcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/home.js\n\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\nconst homeBtn = document.querySelector(\".homeBtn\")\r\nconst menuBtn = document.querySelector(\".menuBtn\")\r\nconst aboutBtn = document.querySelector(\".aboutBtn\")\r\n\r\nhomeBtn.addEventListener(\"click\", () => (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\r\nmenuBtn.addEventListener(\"click\", () => (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])())\r\naboutBtn.addEventListener(\"click\", () => (0,_about_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUErQjtBQUNGO0FBQ0E7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxvREFBSTtBQUM1Qyx3Q0FBd0Msb0RBQUk7QUFDNUMseUNBQXlDLHFEQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcz9lNzYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhYm91dCBmcm9tIFwiLi9hYm91dC5qc1wiO1xyXG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9ob21lLmpzXCI7XHJcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnUuanNcIjtcclxuXHJcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVCdG5cIilcclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudUJ0blwiKVxyXG5jb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRCdG5cIilcclxuXHJcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGhvbWUoKSlcclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbWVudSgpKVxyXG5hYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYWJvdXQoKSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nconst foods = [\r\n    {name: \"Arepa\", price: 18},\r\n    {name: \"Spaghetti\", price: 12},\r\n    {name: \"Sandwich with Cheese\", price: 5}\r\n]\r\nconst foodLength = foods.length\r\n\r\nfunction menu(){\r\n    // Elements\r\n    const content = document.querySelector(\"#content\")\r\n    content.textContent = \" \"\r\n    const editorial = document.createElement(\"section\")\r\n\r\n    // Editorial Header\r\n    const editorialHeader = document.createElement(\"header\")\r\n    const menuTitle = document.createElement(\"h2\")\r\n    const menuDate = document.createElement(\"p\")\r\n\r\n    // Items Container\r\n    const container = document.createElement(\"div\")\r\n\r\n    menuTitle.textContent = \"Menu\"\r\n    menuDate.textContent = \"Everyday · 12:00 – 23:00\"\r\n    editorialHeader.append(menuTitle, menuDate)\r\n    editorialHeader.classList.add(\"menu-editorial__header\")\r\n\r\n    // Adding elements with their own name and price\r\n    for(let i = 0; i < foodLength; i++){\r\n        const menuItem = document.createElement(\"article\")\r\n        const itemTitle = document.createElement(\"h3\")\r\n        const itemPrice = document.createElement(\"span\")\r\n        itemTitle.textContent = foods[i].name\r\n        itemPrice.textContent = foods[i].price\r\n        itemPrice.classList.add(\"menu-item__price\")\r\n        menuItem.append(itemTitle, itemPrice)\r\n        menuItem.classList.add(\"menu-item\")\r\n        container.append(menuItem)\r\n    }\r\n    container.classList.add(\"items-container\")\r\n\r\n    editorial.classList.add(\"menu-editorial\")\r\n    editorial.append(editorialHeader, container)\r\n\r\n    content.append(editorial)\r\n\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQSxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDZCQUE2QjtBQUNsQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUmVzdGF1cmFudC8uL3NyYy9tZW51LmpzPzA2OGQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9vZHMgPSBbXHJcbiAgICB7bmFtZTogXCJBcmVwYVwiLCBwcmljZTogMTh9LFxyXG4gICAge25hbWU6IFwiU3BhZ2hldHRpXCIsIHByaWNlOiAxMn0sXHJcbiAgICB7bmFtZTogXCJTYW5kd2ljaCB3aXRoIENoZWVzZVwiLCBwcmljZTogNX1cclxuXVxyXG5jb25zdCBmb29kTGVuZ3RoID0gZm9vZHMubGVuZ3RoXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCl7XHJcbiAgICAvLyBFbGVtZW50c1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKVxyXG4gICAgY29udGVudC50ZXh0Q29udGVudCA9IFwiIFwiXHJcbiAgICBjb25zdCBlZGl0b3JpYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKVxyXG5cclxuICAgIC8vIEVkaXRvcmlhbCBIZWFkZXJcclxuICAgIGNvbnN0IGVkaXRvcmlhbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIilcclxuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxyXG4gICAgY29uc3QgbWVudURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG5cclxuICAgIC8vIEl0ZW1zIENvbnRhaW5lclxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG5cclxuICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IFwiTWVudVwiXHJcbiAgICBtZW51RGF0ZS50ZXh0Q29udGVudCA9IFwiRXZlcnlkYXkgwrcgMTI6MDAg4oCTIDIzOjAwXCJcclxuICAgIGVkaXRvcmlhbEhlYWRlci5hcHBlbmQobWVudVRpdGxlLCBtZW51RGF0ZSlcclxuICAgIGVkaXRvcmlhbEhlYWRlci5jbGFzc0xpc3QuYWRkKFwibWVudS1lZGl0b3JpYWxfX2hlYWRlclwiKVxyXG5cclxuICAgIC8vIEFkZGluZyBlbGVtZW50cyB3aXRoIHRoZWlyIG93biBuYW1lIGFuZCBwcmljZVxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGZvb2RMZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKVxyXG4gICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxyXG4gICAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXHJcbiAgICAgICAgaXRlbVRpdGxlLnRleHRDb250ZW50ID0gZm9vZHNbaV0ubmFtZVxyXG4gICAgICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGZvb2RzW2ldLnByaWNlXHJcbiAgICAgICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1fX3ByaWNlXCIpXHJcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kKGl0ZW1UaXRsZSwgaXRlbVByaWNlKVxyXG4gICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIilcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKG1lbnVJdGVtKVxyXG4gICAgfVxyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpdGVtcy1jb250YWluZXJcIilcclxuXHJcbiAgICBlZGl0b3JpYWwuY2xhc3NMaXN0LmFkZChcIm1lbnUtZWRpdG9yaWFsXCIpXHJcbiAgICBlZGl0b3JpYWwuYXBwZW5kKGVkaXRvcmlhbEhlYWRlciwgY29udGFpbmVyKVxyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kKGVkaXRvcmlhbClcclxuXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
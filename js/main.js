/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/menu */ \"./src/js/module/menu.js\");\n/* harmony import */ var _module_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/slide */ \"./src/js/module/slide.js\");\n/* harmony import */ var _module_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/range */ \"./src/js/module/range.js\");\n/* harmony import */ var _module_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/form */ \"./src/js/module/form.js\");\n\r\n\r\n\r\n\r\n(0,_module_menu__WEBPACK_IMPORTED_MODULE_0__.menu)();\r\n(0,_module_slide__WEBPACK_IMPORTED_MODULE_1__.slide)();\r\n(0,_module_range__WEBPACK_IMPORTED_MODULE_2__.range)();\r\n(0,_module_form__WEBPACK_IMPORTED_MODULE_3__.form)();\r\n\r\n\r\n\n\n//# sourceURL=webpack://my-project-gulp/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/form.js":
/*!*******************************!*\
  !*** ./src/js/module/form.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"form\": () => (/* binding */ form)\n/* harmony export */ });\nfunction form() {\r\n  const form = document.forms[\"form\"];\r\n  const btn = form.elements['button'];\r\n  const inputArr = Array.from(form);\r\n  const validInputArr = [];\r\n\r\n  inputArr.forEach((el) => {\r\n    if(el.hasAttribute('pattern')) {\r\n      el.setAttribute(\"is-valid\", \"0\"); // del?\r\n      validInputArr.push(el);\r\n    }\r\n  })\r\n  console.log(validInputArr);\r\n  form.addEventListener('input', inputHandler);\r\n  btn.addEventListener('click', btnHandler);\r\n\r\n  function inputHandler({target}) {\r\n    if(target.hasAttribute('pattern')) {\r\n      inputCheck(target);\r\n    }\r\n  }\r\n\r\n  function inputCheck(el) {\r\n    const inputValue = el.value;\r\n    const inputReg = el.getAttribute(\"pattern\");\r\n    const reg = new RegExp(inputReg);\r\n    \r\n    if(reg.test(inputValue)) {\r\n      el.style.border = \"2px solid #03C482\";\r\n      el.setAttribute(\"is-valid\", '1'); // del?\r\n    } else {\r\n      el.style.border = \"2px solid #f44336\"\r\n      el.setAttribute(\"is-valid\", '0'); // del?\r\n    }\r\n  }\r\n  console.log(btn);\r\n  function btnHandler(e) {\r\n    const isAllValid = [];\r\n    validInputArr.forEach((el) => {\r\n      isAllValid.push(el.getAttribute(\"is-valid\"));\r\n    });\r\n    const isValid = isAllValid.reduce((acc, current) => {\r\n      return acc && current;\r\n    });\r\n    //\r\n    // if(!Boolean(Number(isValid))) {\r\n    //   e.preventDefault();\r\n    // }\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://my-project-gulp/./src/js/module/form.js?");

/***/ }),

/***/ "./src/js/module/menu.js":
/*!*******************************!*\
  !*** ./src/js/module/menu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\r\n  const btn = document.querySelector(\".header__btn-area\");\r\n  const burger = document.querySelector(\".header__btn\");\r\n  const menu = document.querySelector(\".header__menu\");\r\n  const header = document.querySelector(\".header\");\r\n\r\n  btn.addEventListener(\"click\", function getListen() {\r\n    burger.classList.toggle(\"show\");\r\n    btn.classList.toggle(\"show\");\r\n    menu.classList.toggle(\"show\");\r\n    header.classList.toggle(\"show\");\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://my-project-gulp/./src/js/module/menu.js?");

/***/ }),

/***/ "./src/js/module/range.js":
/*!********************************!*\
  !*** ./src/js/module/range.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"range\": () => (/* binding */ range)\n/* harmony export */ });\nfunction range() {\r\n  const range1 = document.getElementById(\"blur\");\r\n  const range2 = document.getElementById(\"hue\");\r\n  const range3 = document.getElementById(\"saturate\");\r\n  const range4 = document.getElementById(\"invert\");\r\n\r\n  if (range1 && range2 && range3 && range4) {\r\n    range1.addEventListener(\"input\", filterBlur);\r\n    range2.addEventListener(\"input\", filterHueR);\r\n    range3.addEventListener(\"input\", filterSaturate);\r\n    range4.addEventListener(\"input\", filterInvert);\r\n  }\r\n  // range2.addEventListener(\"input\", filterSaturate);\r\n  // range3.addEventListener(\"input\", filterInvert);\r\n}\r\n\r\nfunction filterBlur() {\r\n  let range = document.getElementById(\"blur\");\r\n  let output = document.getElementById(\"output-blur\");\r\n  const img = document.querySelector(\".catalog__func-img\");\r\n  let valueRange = range.value;\r\n  output.innerHTML = valueRange;\r\n  img.style = `filter: blur(${valueRange / 10}px);`;\r\n}\r\n\r\nfunction filterHueR() {\r\n  let range = document.getElementById(\"hue\");\r\n  let output = document.getElementById(\"output-hue\");\r\n  const img = document.querySelector(\".catalog__func-img\");\r\n  let valueRange = range.value;\r\n  output.innerHTML = valueRange;\r\n  img.style = `filter: hue-rotate(${valueRange * 3.6}deg);`;\r\n}\r\n\r\nfunction filterSaturate() {\r\n  let range = document.getElementById(\"saturate\");\r\n  let output = document.getElementById(\"output-saturate\");\r\n  const img = document.querySelector(\".catalog__func-img\");\r\n  let valueRange = range.value;\r\n  output.innerHTML = valueRange;\r\n  img.style = `filter: saturate(${valueRange * 10}%);`;\r\n}\r\n\r\nfunction filterInvert() {\r\n  let range = document.getElementById(\"invert\");\r\n  let output = document.getElementById(\"output-invert\");\r\n  const img = document.querySelector(\".catalog__func-img\");\r\n  let valueRange = range.value;\r\n  output.innerHTML = valueRange;\r\n  img.style = `filter: invert(${valueRange}%);`;\r\n}\r\n// function filterSaturate() {\r\n//   let range = document.getElementById(\"saturate\"); //rng - это Input\r\n//   let output = document.getElementById(\"output-saturate\"); // p - абзац\r\n//   const img = document.querySelector(\".catalog__func-img\");\r\n//   let valueRange = range.value;\r\n//   output.innerHTML = valueRange / 10;\r\n//   img.style = `filter: saturate(${valueRange}%);`;\r\n// }\r\n// function filterInvert() {\r\n//   let range = document.getElementById(\"invert\"); //rng - это Input\r\n//   let output = document.getElementById(\"output-invert\"); // p - абзац\r\n//   const img = document.querySelector(\".catalog__func-img\");\r\n//   let valueRange = range.value;\r\n//   output.innerHTML = valueRange;\r\n//   img.style = `filter: invert(${valueRange}%);`;\r\n// }\r\n\r\n// function filterSepia() {\r\n//   let range = document.getElementById(\"sepia\"); //rng - это Input\r\n//   let output = document.getElementById(\"output-sepia\"); // p - абзац\r\n//   const img = document.querySelector(\".catalog__func-img\");\r\n//   let valueRange = range.value;\r\n//   output.innerHTML = valueRange;\r\n// }\r\n\n\n//# sourceURL=webpack://my-project-gulp/./src/js/module/range.js?");

/***/ }),

/***/ "./src/js/module/slide.js":
/*!********************************!*\
  !*** ./src/js/module/slide.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slide\": () => (/* binding */ slide)\n/* harmony export */ });\n function slide() {\r\n  class ItcSlider {\r\n  static CLASS_CONTROL = \"slider__control\";\r\n  static CLASS_CONTROL_HIDE = \"slider__control_hide\";\r\n  static CLASS_ITEM_ACTIVE = \"slider__item_active\";\r\n  static CLASS_INDICATOR_ACTIVE = \"active\";\r\n  static SEL_WRAPPER = \".slider__wrapper\";\r\n  static SEL_ITEM = \".slider__item\";\r\n  static SEL_ITEMS = \".slider__items\";\r\n  static SEL_PREV = '.slider__control[data-slide=\"prev\"]';\r\n  static SEL_NEXT = '.slider__control[data-slide=\"next\"]';\r\n  static SEL_INDICATOR = \".slider__indicators>li\";\r\n  static TRANSITION_OFF = \"slider_disable-transition\";\r\n\r\n  static contains = [];\r\n\r\n  static createInstances() {\r\n    document.querySelectorAll('[data-slider=\"itc-slider\"]').forEach((el) => {\r\n      if (this.contains.find((item) => item.el === el)) {\r\n        return;\r\n      }\r\n      const dataset = el.dataset;\r\n      const params = {};\r\n      Object.keys(dataset).forEach((key) => {\r\n        if (key === \"slider\") {\r\n          return;\r\n        }\r\n        let value = dataset[key];\r\n        value = value === \"true\" ? true : value;\r\n        value = value === \"false\" ? false : value;\r\n        value = Number.isNaN(Number(value)) ? Number(value) : value;\r\n        params[key] = value;\r\n      });\r\n      this.contains.push({ el, slider: new ItcSlider(el, params) });\r\n      el.dataset.sliderId = this.contains.length;\r\n      el.querySelectorAll(\".slider__control\").forEach((btn) => {\r\n        btn.dataset.sliderTarget = this.contains.length;\r\n      });\r\n    });\r\n  }\r\n\r\n  constructor(selector, config) {\r\n    this._el =\r\n      typeof selector === \"string\"\r\n        ? document.querySelector(selector)\r\n        : selector;\r\n    this._elWrapper = this._el.querySelector(ItcSlider.SEL_WRAPPER);\r\n    this._elItems = this._el.querySelector(ItcSlider.SEL_ITEMS);\r\n    this._elsItem = this._el.querySelectorAll(ItcSlider.SEL_ITEM);\r\n    this._elsIndicator = this._el.querySelectorAll(ItcSlider.SEL_INDICATOR);\r\n    this._btnPrev = this._el.querySelector(ItcSlider.SEL_PREV);\r\n    this._btnNext = this._el.querySelector(ItcSlider.SEL_NEXT);\r\n\r\n    this._exOrderMin = 0;\r\n    this._exOrderMax = 0;\r\n    this._exItemMin = null;\r\n    this._exItemMax = null;\r\n    this._exTranslateMin = 0;\r\n    this._exTranslateMax = 0;\r\n\r\n    this._direction = \"next\";\r\n\r\n    this._intervalId = null;\r\n\r\n    this._isSwiping = false;\r\n    this._swipeX = 0;\r\n\r\n    this._config = {\r\n      loop: true,\r\n      autoplay: false,\r\n      interval: 5000,\r\n      refresh: true,\r\n      swipe: true,\r\n      ...config,\r\n    };\r\n\r\n    this._setInitialValues();\r\n    this._addEventListener();\r\n  }\r\n\r\n  _addEventListener() {\r\n    this._el.addEventListener(\"click\", (e) => {\r\n      this._autoplay(\"stop\");\r\n      if (e.target.classList.contains(ItcSlider.CLASS_CONTROL)) {\r\n        e.preventDefault();\r\n        this._direction = e.target.dataset.slide;\r\n        this._move();\r\n      } else if (e.target.dataset.slideTo) {\r\n        const index = parseInt(e.target.dataset.slideTo, 10);\r\n        this._moveTo(index);\r\n      }\r\n      this._config.loop ? this._autoplay() : null;\r\n    });\r\n    this._el.addEventListener(\"mouseenter\", () => {\r\n      this._autoplay(\"stop\");\r\n    });\r\n    this._el.addEventListener(\"mouseleave\", () => {\r\n      this._autoplay();\r\n    });\r\n    if (this._config.refresh) {\r\n      window.addEventListener(\"resize\", () => {\r\n        window.requestAnimationFrame(this._reset.bind(this));\r\n      });\r\n    }\r\n    if (this._config.loop) {\r\n      this._elItems.addEventListener(\"itcslider-start\", () => {\r\n        if (this._isBalancing) {\r\n          return;\r\n        }\r\n        this._isBalancing = true;\r\n        window.requestAnimationFrame(this._balanceItems.bind(this));\r\n      });\r\n      this._elItems.addEventListener(\"transitionend\", () => {\r\n        this._isBalancing = false;\r\n      });\r\n    }\r\n    const onSwipeStart = (e) => {\r\n      this._autoplay(\"stop\");\r\n      const event = e.type.search(\"touch\") === 0 ? e.touches[0] : e;\r\n      this._swipeX = event.clientX;\r\n      this._isSwiping = true;\r\n    };\r\n    const onSwipeEnd = (e) => {\r\n      if (!this._isSwiping) {\r\n        return;\r\n      }\r\n      const event = e.type.search(\"touch\") === 0 ? e.changedTouches[0] : e;\r\n      const diffPos = this._swipeX - event.clientX;\r\n      if (diffPos > 50) {\r\n        this._direction = \"next\";\r\n        this._move();\r\n      } else if (diffPos < -50) {\r\n        this._direction = \"prev\";\r\n        this._move();\r\n      }\r\n      this._isSwiping = false;\r\n      if (this._config.loop) {\r\n        this._autoplay();\r\n      }\r\n    };\r\n    if (this._config.swipe) {\r\n      this._el.addEventListener(\"touchstart\", onSwipeStart);\r\n      this._el.addEventListener(\"mousedown\", onSwipeStart);\r\n      document.addEventListener(\"touchend\", onSwipeEnd);\r\n      document.addEventListener(\"mouseup\", onSwipeEnd);\r\n    }\r\n    this._el.addEventListener(\"dragstart\", (e) => {\r\n      e.preventDefault();\r\n    });\r\n    document.addEventListener(\"visibilitychange\", () => {\r\n      if (document.visibilityState === \"hidden\") {\r\n        this._autoplay(\"stop\");\r\n      } else if (document.visibilityState === \"visible\" && this._config.loop) {\r\n        this._autoplay();\r\n      }\r\n    });\r\n  }\r\n\r\n  _autoplay(action) {\r\n    if (!this._config.autoplay) {\r\n      return;\r\n    }\r\n    if (action === \"stop\") {\r\n      clearInterval(this._intervalId);\r\n      this._intervalId = null;\r\n      return;\r\n    }\r\n    if (this._intervalId === null) {\r\n      this._intervalId = setInterval(() => {\r\n        this._direction = \"next\";\r\n        this._move();\r\n      }, this._config.interval);\r\n    }\r\n  }\r\n\r\n  _balanceItems() {\r\n    if (!this._isBalancing) {\r\n      return;\r\n    }\r\n    const wrapperRect = this._elWrapper.getBoundingClientRect();\r\n    const targetWidth = wrapperRect.width / this._countActiveItems / 2;\r\n    const countItems = this._elsItem.length;\r\n    if (this._direction === \"next\") {\r\n      const exItemRectRight = this._exItemMin.getBoundingClientRect().right;\r\n      if (exItemRectRight < wrapperRect.left - targetWidth) {\r\n        this._exItemMin.dataset.order = this._exOrderMin + countItems;\r\n        const translate = this._exTranslateMin + countItems * this._widthItem;\r\n        this._exItemMin.dataset.translate = translate;\r\n        this._exItemMin.style.transform = `translateX(${translate}px)`;\r\n        this._updateExProperties();\r\n      }\r\n    } else {\r\n      const exItemRectLeft = this._exItemMax.getBoundingClientRect().left;\r\n      if (exItemRectLeft > wrapperRect.right + targetWidth) {\r\n        this._exItemMax.dataset.order = this._exOrderMax - countItems;\r\n        const translate = this._exTranslateMax - countItems * this._widthItem;\r\n        this._exItemMax.dataset.translate = translate;\r\n        this._exItemMax.style.transform = `translateX(${translate}px)`;\r\n        this._updateExProperties();\r\n      }\r\n    }\r\n    window.requestAnimationFrame(this._balanceItems.bind(this));\r\n  }\r\n\r\n  _changeActiveItems() {\r\n    this._stateItems.forEach((item, index) => {\r\n      if (item) {\r\n        this._elsItem[index].classList.add(ItcSlider.CLASS_ITEM_ACTIVE);\r\n      } else {\r\n        this._elsItem[index].classList.remove(ItcSlider.CLASS_ITEM_ACTIVE);\r\n      }\r\n      if (this._elsIndicator.length && item) {\r\n        this._elsIndicator[index].classList.add(\r\n          ItcSlider.CLASS_INDICATOR_ACTIVE\r\n        );\r\n      } else if (this._elsIndicator.length && !item) {\r\n        this._elsIndicator[index].classList.remove(\r\n          ItcSlider.CLASS_INDICATOR_ACTIVE\r\n        );\r\n      }\r\n    });\r\n  }\r\n\r\n  _move() {\r\n    const widthItem =\r\n      this._direction === \"next\" ? -this._widthItem : this._widthItem;\r\n    const transform = this._transform + widthItem;\r\n    if (!this._config.loop) {\r\n      const limit =\r\n        this._widthItem * (this._elsItem.length - this._countActiveItems);\r\n      if (transform < -limit || transform > 0) {\r\n        return;\r\n      }\r\n      if (this._btnPrev) {\r\n        this._btnPrev.classList.remove(ItcSlider.CLASS_CONTROL_HIDE);\r\n        this._btnNext.classList.remove(ItcSlider.CLASS_CONTROL_HIDE);\r\n      }\r\n      if (this._btnPrev && transform === -limit) {\r\n        this._btnNext.classList.add(ItcSlider.CLASS_CONTROL_HIDE);\r\n      } else if (this._btnPrev && transform === 0) {\r\n        this._btnPrev.classList.add(ItcSlider.CLASS_CONTROL_HIDE);\r\n      }\r\n    }\r\n    if (this._direction === \"next\") {\r\n      this._stateItems = [\r\n        ...this._stateItems.slice(-1),\r\n        ...this._stateItems.slice(0, -1),\r\n      ];\r\n    } else {\r\n      this._stateItems = [\r\n        ...this._stateItems.slice(1),\r\n        ...this._stateItems.slice(0, 1),\r\n      ];\r\n    }\r\n    this._changeActiveItems();\r\n    this._transform = transform;\r\n    this._elItems.style.transform = `translateX(${transform}px)`;\r\n    this._elItems.dispatchEvent(\r\n      new CustomEvent(\"itcslider-start\", {\r\n        bubbles: true,\r\n      })\r\n    );\r\n  }\r\n\r\n  _moveTo(index) {\r\n    const delta = this._stateItems.reduce((acc, current, currentIndex) => {\r\n      const diff = current ? index - currentIndex : acc;\r\n      return Math.abs(diff) < Math.abs(acc) ? diff : acc;\r\n    }, this._stateItems.length);\r\n    if (delta !== 0) {\r\n      this._direction = delta > 0 ? \"next\" : \"prev\";\r\n      for (let i = 0; i < Math.abs(delta); i++) {\r\n        this._move();\r\n      }\r\n    }\r\n  }\r\n\r\n  _setInitialValues() {\r\n    this._transform = 0;\r\n    this._stateItems = [];\r\n    this._isBalancing = false;\r\n    this._widthItem = this._elsItem[0].getBoundingClientRect().width;\r\n    this._widthWrapper = this._elWrapper.getBoundingClientRect().width;\r\n    this._countActiveItems = Math.round(this._widthWrapper / this._widthItem);\r\n    this._elsItem.forEach((el, index) => {\r\n      el.dataset.index = index;\r\n      el.dataset.order = index;\r\n      el.dataset.translate = 0;\r\n      el.style.transform = \"\";\r\n      this._stateItems.push(index < this._countActiveItems ? 1 : 0);\r\n    });\r\n    if (this._config.loop) {\r\n      const lastIndex = this._elsItem.length - 1;\r\n      const translate = -(lastIndex + 1) * this._widthItem;\r\n      this._elsItem[lastIndex].dataset.order = -1;\r\n      this._elsItem[lastIndex].dataset.translate = translate;\r\n      this._elsItem[lastIndex].style.transform = `translateX(${translate}px)`;\r\n      this._updateExProperties();\r\n    } else if (this._btnPrev) {\r\n      this._btnPrev.classList.add(ItcSlider.CLASS_CONTROL_HIDE);\r\n    }\r\n    this._changeActiveItems();\r\n    this._autoplay();\r\n  }\r\n\r\n  _reset() {\r\n    const widthItem = this._elsItem[0].getBoundingClientRect().width;\r\n    const widthWrapper = this._elWrapper.getBoundingClientRect().width;\r\n    const countActiveEls = Math.round(widthWrapper / widthItem);\r\n    if (\r\n      widthItem === this._widthItem &&\r\n      countActiveEls === this._countActiveItems\r\n    ) {\r\n      return;\r\n    }\r\n    this._autoplay(\"stop\");\r\n    this._elItems.classList.add(ItcSlider.TRANSITION_OFF);\r\n    this._elItems.style.transform = \"translateX(0)\";\r\n    this._setInitialValues();\r\n    window.requestAnimationFrame(() => {\r\n      this._elItems.classList.remove(ItcSlider.TRANSITION_OFF);\r\n    });\r\n  }\r\n\r\n  _updateExProperties() {\r\n    const els = Object.values(this._elsItem).map((el) => el);\r\n    const orders = els.map((item) => Number(item.dataset.order));\r\n    this._exOrderMin = Math.min(...orders);\r\n    this._exOrderMax = Math.max(...orders);\r\n    const min = orders.indexOf(this._exOrderMin);\r\n    const max = orders.indexOf(this._exOrderMax);\r\n    this._exItemMin = els[min];\r\n    this._exItemMax = els[max];\r\n    this._exTranslateMin = Number(this._exItemMin.dataset.translate);\r\n    this._exTranslateMax = Number(this._exItemMax.dataset.translate);\r\n  }\r\n\r\n  next() {\r\n    this._direction = \"next\";\r\n    this._move();\r\n  }\r\n  prev() {\r\n    this._direction = \"prev\";\r\n    this._move();\r\n  }\r\n  moveTo(index) {\r\n    this._moveTo(index);\r\n  }\r\n  reset() {\r\n    this._reset();\r\n  }\r\n}\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  ItcSlider.createInstances();\r\n});\r\n} \r\n\n\n//# sourceURL=webpack://my-project-gulp/./src/js/module/slide.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	__webpack_require__("./src/js/module/form.js");
/******/ 	__webpack_require__("./src/js/module/menu.js");
/******/ 	__webpack_require__("./src/js/module/range.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/module/slide.js");
/******/ 	
/******/ })()
;
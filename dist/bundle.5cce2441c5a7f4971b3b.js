var PerdanaDnD;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/multiple-board/styles.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/multiple-board/styles.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.m-pg-board-container {
    position: relative;
    background-color: #fff;
    border-radius :8px;
    user-select: none; /* Prevent text selection */
    -webkit-user-select: none; /* For Safari */
    -ms-user-select: none; /* For older versions of IE */
    display: flex;
  }
  .m-pg-board {
    position: relative;
    background-color: #D3D3D3;
    border-radius :8px;
    display: flex;
    flex-direction: column;
    transition: ease-in-out 0.2s;
  }
  
  .m-pg-board > .m-pg-card {
    border-radius: 4px;
    padding: 8px;
    background-color: #fff;
    width: calc(100% - 64px);
    height: 90px;
    cursor: pointer;
    position: absolute;
    transition: all 0.5s linear;
    z-index: 9;
  }
  .m-pg-board > .m-pg-card.m-pg-card-active {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    z-index: 99;
    transform: scale(1.05);
    cursor: grabbing; 
  }
  .m-pg-card-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0;
    padding: 0;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .scaleX {
    transform: scaleX(1.2);
  }`, "",{"version":3,"sources":["webpack://./src/multiple-board/styles.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB,EAAE,2BAA2B;IAC9C,yBAAyB,EAAE,eAAe;IAC1C,qBAAqB,EAAE,6BAA6B;IACpD,aAAa;EACf;EACA;IACE,kBAAkB;IAClB,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,4BAA4B;EAC9B;;EAEA;IACE,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,wBAAwB;IACxB,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,2BAA2B;IAC3B,UAAU;EACZ;EACA;IACE,4EAA4E;IAC5E,WAAW;IACX,sBAAsB;IACtB,gBAAgB;EAClB;EACA;IACE,mBAAmB;IACnB,gBAAgB;IAChB,SAAS;IACT,UAAU;EACZ;EACA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;EACf;EACA;IACE,sBAAsB;EACxB","sourcesContent":[".m-pg-board-container {\n    position: relative;\n    background-color: #fff;\n    border-radius :8px;\n    user-select: none; /* Prevent text selection */\n    -webkit-user-select: none; /* For Safari */\n    -ms-user-select: none; /* For older versions of IE */\n    display: flex;\n  }\n  .m-pg-board {\n    position: relative;\n    background-color: #D3D3D3;\n    border-radius :8px;\n    display: flex;\n    flex-direction: column;\n    transition: ease-in-out 0.2s;\n  }\n  \n  .m-pg-board > .m-pg-card {\n    border-radius: 4px;\n    padding: 8px;\n    background-color: #fff;\n    width: calc(100% - 64px);\n    height: 90px;\n    cursor: pointer;\n    position: absolute;\n    transition: all 0.5s linear;\n    z-index: 9;\n  }\n  .m-pg-board > .m-pg-card.m-pg-card-active {\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n    z-index: 99;\n    transform: scale(1.05);\n    cursor: grabbing; \n  }\n  .m-pg-card-title {\n    font-size: 1.125rem;\n    font-weight: 600;\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n  }\n  .scaleX {\n    transform: scaleX(1.2);\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/single-board/styles.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/single-board/styles.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pg-board-container {
    position: relative;
    background-color: #D3D3D3;
    border-radius :8px;
    user-select: none; /* Prevent text selection */
    -webkit-user-select: none; /* For Safari */
    -ms-user-select: none; /* For older versions of IE */
  }
  .pg-board-container > .pg-card {
    border-radius: 4px;
    padding: 8px;
    background-color: #fff;
    width: calc(100% - 64px);
    height: 90px;
    cursor: pointer;
    position: absolute;
    transition: all 0.1s linear;

  }
  .pg-board-container > .pg-card.pg-card-active {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    z-index: 99;
    transform: scale(1.05);
  }
  .pg-card-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0;
    padding: 0;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }`, "",{"version":3,"sources":["webpack://./src/single-board/styles.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,kBAAkB;IAClB,iBAAiB,EAAE,2BAA2B;IAC9C,yBAAyB,EAAE,eAAe;IAC1C,qBAAqB,EAAE,6BAA6B;EACtD;EACA;IACE,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,wBAAwB;IACxB,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,2BAA2B;;EAE7B;EACA;IACE,4EAA4E;IAC5E,WAAW;IACX,sBAAsB;EACxB;EACA;IACE,mBAAmB;IACnB,gBAAgB;IAChB,SAAS;IACT,UAAU;EACZ;EACA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;EACf","sourcesContent":[".pg-board-container {\n    position: relative;\n    background-color: #D3D3D3;\n    border-radius :8px;\n    user-select: none; /* Prevent text selection */\n    -webkit-user-select: none; /* For Safari */\n    -ms-user-select: none; /* For older versions of IE */\n  }\n  .pg-board-container > .pg-card {\n    border-radius: 4px;\n    padding: 8px;\n    background-color: #fff;\n    width: calc(100% - 64px);\n    height: 90px;\n    cursor: pointer;\n    position: absolute;\n    transition: all 0.1s linear;\n\n  }\n  .pg-board-container > .pg-card.pg-card-active {\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n    z-index: 99;\n    transform: scale(1.05);\n  }\n  .pg-card-title {\n    font-size: 1.125rem;\n    font-weight: 600;\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/multiple-board/styles.css":
/*!***************************************!*\
  !*** ./src/multiple-board/styles.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/multiple-board/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/single-board/styles.css":
/*!*************************************!*\
  !*** ./src/single-board/styles.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/single-board/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/multiple-board/action.js":
/*!**************************************!*\
  !*** ./src/multiple-board/action.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initListener: () => (/* binding */ initListener)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/multiple-board/index.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element */ "./src/multiple-board/element.js");


function initListener() {
  document.querySelectorAll(".m-pg-board").forEach((be, bi) => {
    be.childNodes.forEach((ce, ci) => {
      ce.addEventListener("mousedown", () => onCardDrag(ce));
    });
  });
  _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.container.addEventListener("mousemove", onCardMove);
  _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.container.addEventListener("mouseup", onCardDrop);
}

function onCardDrag(ce) {
  _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.isDraging = true;
  const [boardIndex, cardIndex] = ce.dataset.index.split("-");
  _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.startBoardIndex = parseInt(boardIndex);
  _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.startCardIndex = parseInt(cardIndex);

  if (_index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.onDragStartFn)
    _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.onDragStartFn(boardIndex, cardIndex);

  _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.cardActiveElement = ce;
  if (_index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.cardActiveElement)
    _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.cardActiveElement.classList.add("m-pg-card-active");

  const top = ce.clientY - _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.baseTop;
  _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.lastY = top;
  _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.lastX = ce.clientX;
}

function onCardMove(e) {
  if (
    !_index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.cardActiveElement ||
    !_index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.isDraging
  )
    return;
  const top = e.clientY - _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.baseTop;
  if (
    _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.isDraging &&
    _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.cardActiveElement
  ) {
    if (_index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.lastY == 0) {
      cards.forEach((c) => {
        c.classList.add("no-copy");
      });
    }
    const Y =
      parseInt(
        _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.cardActiveElement.style.top.replace("px", "")
      ) +
      top -
      _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.lastY;
    const X =
      e.clientX -
      _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.elements[_index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.startBoardIndex]
        .rect.x -
      _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.elements[_index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.startBoardIndex]
        .rect.width /
        2;
    _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.cardActiveElement.style.top = `${Y}px`;
    _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.cardActiveElement.style.left = `${X}px`;
    _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.lastX = e.clientX;
    _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.lastY = top;
  }
}

function onCardDrop() {
  _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.isDraging = false;
  if (_index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.cardActiveElement) {
    const { x, y, width, height } =
      _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.cardActiveElement.getBoundingClientRect();

    const { endBoardIndex, endCardIndex } = findEndIndex({ x, y, width });

    if (endBoardIndex < 0) {
      dropCardToTheOriginalPlace();
    }
    // drop card in the same board
    else if (endBoardIndex == _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.startBoardIndex) {
      dropCardInTheSameBoard(endBoardIndex, endCardIndex, height);
    } else if (endBoardIndex != _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.startBoardIndex) {
      // move card with animation
      moveCardToAnotherBoard(endBoardIndex, endCardIndex, height);
      // end move card with animation
      restructureData(endBoardIndex, endCardIndex + 1);
    }

    //relayout element
    setTimeout(() => {
      _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.elements.forEach((b, index) => {
        _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.elements[index]["rect"] = [];
        _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.elements[index]["cardsRect"] = [];
      });
      document.querySelectorAll(".m-pg-board").forEach((e) => e.remove());
      (0,_element__WEBPACK_IMPORTED_MODULE_1__.createBoards)(_index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.data);
      (0,_element__WEBPACK_IMPORTED_MODULE_1__.setBoundingRect)();
      initListener();
    }, 100);
    //end relayout element
    if (_index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.onDragEndFn)
      _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.onDragEndFn(
        _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.startCardIndex,
        _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.startBoardIndex,
        endCardIndex + 1,
        endBoardIndex,
        _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.data
      );
    resetActiveVariable();
  }
  _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.lastY = 0;
  _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.lastX = 0;
}
function moveCardToAnotherBoard(endBoardIndex, endCardIndex, height) {
  const cardsLength =
    _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.elements[endBoardIndex].cards.length;
  for (
    let index = 0;
    index < _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.elements[endBoardIndex].cards.length;
    index++
  ) {
    if (cardsLength - 1 - index == endCardIndex) {
      break;
    }

    const card =
      _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.elements[endBoardIndex].cards[
        cardsLength - 1 - index
      ];
    const cardRect =
      _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.elements[endBoardIndex].cardsRect[
        cardsLength - 1 - index
      ];
    document.getElementById(card.id).style.top = `${
      cardRect.top + height + _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.boarderStyles.gap / 2
    }px`;
  }

  for (
    let index = _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.startCardIndex + 1;
    index <
    _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.elements[_index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.startBoardIndex]
      .cards.length;
    index++
  ) {
    const card =
      _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.elements[_index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.startBoardIndex]
        .cards[index];
    const cardRect =
      _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.elements[_index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.startBoardIndex]
        .cardsRect[index - 1];
    document.getElementById(card.id).style.top = `${cardRect.top}px`;
  }
}
function findEndIndex({ x, y, width }) {
  let endBoardIndex = -1;
  let endCardIndex = _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.startCardIndex;

  for (
    let bIndex = 0;
    bIndex < _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.elements.length;
    bIndex++
  ) {
    const board = _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.elements[bIndex];
    if (x >= board.rect.x && x + width <= board.rect.x + board.rect.width) {
      endBoardIndex = bIndex;
      for (let cIndex = 0; cIndex < board.cardsRect.length; cIndex++) {
        const cRect = board.cardsRect[cIndex];
        if (y > cRect.y) {
          endCardIndex = cIndex;
        }
      }
      break;
    }
  }

  return {
    endBoardIndex,
    endCardIndex,
  };
}
function placeTheCard(card, top, left) {
  if (top) card.style.top = `${top}px`;
  if (left) card.style.left = `${left}px`;
}

function dropCardToTheOriginalPlace() {
  const { elements, startBoardIndex, startCardIndex, cardActiveElement } =
    _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData;
  placeTheCard(
    cardActiveElement,
    elements[startBoardIndex].cardsRect[startCardIndex].top,
    elements[startBoardIndex].cardsRect[startCardIndex].left
  );
}

function dropCardInTheSameBoard(endBoardIndex, endCardIndex, height) {
  const { startCardIndex, elements, boarderStyles, cardActiveElement } =
    _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData;
  const cardsLength = elements[endBoardIndex].cards.length;

  if (endCardIndex + 1 == startCardIndex) return;

  if (endCardIndex + 1 > startCardIndex) {
    for (let index = startCardIndex; index < endCardIndex; index++) {
      // swap lower to higher card
      placeTheCard(
        document.getElementById(elements[endBoardIndex].cards[index + 1].id),
        elements[endBoardIndex].cardsRect[index].top - boarderStyles.gap / 2
      );
    }
    // swap the active card to the destination
    placeTheCard(
      document.getElementById(cardActiveElement.id),
      elements[endBoardIndex].cardsRect[endCardIndex].top -
        boarderStyles.gap / 2
    );

    restructureData(endBoardIndex, endCardIndex);
  } else if (endCardIndex + 1 < startCardIndex) {
    console.log("kedua");
    for (let index = cardsLength - 2; index > endCardIndex; index--) {
      // swap higher to lower card
      placeTheCard(
        document.getElementById(elements[endBoardIndex].cards[index].id),
        elements[endBoardIndex].cardsRect[index].top +
          height +
          boarderStyles.gap / 2
      );
    }
    // swap the active card to the destination
    placeTheCard(
      document.getElementById(cardActiveElement.id),
      elements[endBoardIndex].cardsRect[endCardIndex].top +
        height +
        boarderStyles.gap / 2
    );
    restructureData(endBoardIndex, endCardIndex + 1);
  }
}

function restructureData(endBoardIndex, endCardIndex) {
  // restructure data
  const dataMove = _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.data[
    _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.startBoardIndex
  ].data.splice(_index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.startCardIndex, 1);
  const cardElMove = _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.elements[
    _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.startBoardIndex
  ].cards.splice(_index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.startCardIndex, 1);
  _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.data[endBoardIndex].data.splice(
    endCardIndex,
    0,
    dataMove[0]
  );
  _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.elements[endBoardIndex].cards.splice(
    endCardIndex,
    0,
    cardElMove[0]
  );
  // end restructure data
}

function resetActiveVariable() {
  _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.cardActiveElement.classList.remove("m-pg-card-active");
  _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.startCardIndex = -1;
  _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.startBoardIndex = -1;
  _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.cardActiveElement = undefined;
}



/***/ }),

/***/ "./src/multiple-board/element.js":
/*!***************************************!*\
  !*** ./src/multiple-board/element.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBoards: () => (/* binding */ createBoards),
/* harmony export */   createContainer: () => (/* binding */ createContainer),
/* harmony export */   setBoundingRect: () => (/* binding */ setBoundingRect)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/multiple-board/index.js");


function createContainer({ id, width, height, padding, gap }) {
  _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.container = document.getElementById(id);
  if (!_index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.container)
    throw new Error(`Element with ${id} is not available!`);
  _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.container.classList.add(
    _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.containerClassName
  );
  _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.container.style.width = width;
  _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.container.style.height = height;
  _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.container.style.gap = `${gap}px`;
  if (padding) _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.container.style.padding = `${padding}px`;
}

function createElement(tag, id, className) {
  const newEl = document.createElement(tag);
  if (id) newEl.id = id;
  if (className) newEl.classList.add(className);
  return newEl;
}

function createCard({ id, title, description, index, gap }) {
  const cardEl = createElement(
    "div",
    `${id}-board-item-container`,
    "m-pg-card"
  );
  const top = index * 106 + (index + 1) * gap;
  cardEl.style.top = `${top}px`;
  
  const titleEl = createElement("h6", `${id}-title`, "m-pg-card-title");
  titleEl.innerHTML = title;

  const descriptionEl = createElement(
    "p",
    `${id}-title`,
    "m-pg-board-description"
  );
  descriptionEl.innerHTML = description;

  cardEl.append(titleEl);
  cardEl.append(descriptionEl);

  return cardEl;
}

function createBoards(multipleData) {
  const isFirstRender = _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.elements.length == 0;
  multipleData.forEach((bdata, bIndex) => {
    const board = createElement(
      "div",
      `${bdata.id}-board`,
      _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.boardClassName
    );
    if (_index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.boarderStyles.width)
      board.style.width = _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.boarderStyles.width;
    if (_index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.boarderStyles.height)
      board.style.height = _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.boarderStyles.height;
    if (_index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.boarderStyles.gap)
      board.style.gap = `${_index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.boarderStyles.gap}px`;
    if (_index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.boarderStyles.padding)
      board.style.padding = `${_index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.boarderStyles.padding}px`;
    const cards = [];
    bdata.data.forEach((cdata, index) => {
      const card = createCard({
        ...cdata,
        gap: _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.boarderStyles.gap,
        index,
      });
      board.append(card);
      card.setAttribute("data-index", `${bIndex}-${index}`);
      cards.push(card);
    });
    _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.container.append(board);
    board.setAttribute("data-index", `${bIndex}`);
    if (isFirstRender) {
      _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.elements.push({
        id: bdata.id,
        el: board,
        cards: cards,
      });
    }
  });
}

function setBoundingRect() {
  const { gap, height, padding } = _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData.boarderStyles;
  let { elements, baseTop } = _index__WEBPACK_IMPORTED_MODULE_0__.PerdanaDnDMultipleData;

  document.querySelectorAll(".m-pg-board").forEach((be, bi) => {
    elements[bi]["rect"] = be.getBoundingClientRect();
    const curEl = document.getElementById(elements[bi].el.id);
    be.childNodes.forEach((ce, ci) => {
      if (!elements[bi].cardsRect) {
        elements[bi].cardsRect = [];
        elements[bi].cardsRect.push(ce.getBoundingClientRect());
      } else {
        elements[bi].cardsRect.push(ce.getBoundingClientRect());
      }
    });

    if (be.childNodes.length == 0) return;

    const { y: lastCardY, height: lastCardHeight } =
      elements[bi].cardsRect[elements[bi].cardsRect.length - 1];
    if (
      elements[bi].rect.height < lastCardY + lastCardHeight &&
      be.childNodes.length > 0
    ) {
      const cardLength = elements[bi].cardsRect.length;
      const totalHeight =
        lastCardHeight * cardLength + (cardLength - 1) * gap + padding / 2;
      curEl.style.height = `${totalHeight}px`;
    } else {
      document.getElementById(elements[bi].el.id).style.height = `${height}`;
    }
  });
  baseTop = elements[0].rect.y + padding / 2;
}




/***/ }),

/***/ "./src/multiple-board/index.js":
/*!*************************************!*\
  !*** ./src/multiple-board/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerdanaDnDMultipleData: () => (/* binding */ PerdanaDnDMultipleData),
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/multiple-board/styles.css");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element */ "./src/multiple-board/element.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./src/multiple-board/action.js");




const PerdanaDnDMultipleData = {
  data: undefined,
  container: undefined,
  containerClassName: "m-pg-board-container",
  boardClassName: "m-pg-board",
  elements: [],
  isDraging: false,
  cardActiveElement: undefined,
  startBoardIndex: -1,
  startCardIndex: -1,
  baseTop: 0,
  onDragStartFn: undefined,
  onDragEndFn: undefined,
  boarderStyles: undefined,
  cardStyle: undefined,
  lastY: 0,
  lastX: 0,
};

function init({
  id,
  gap,
  width,
  height,
  padding,
  multipleData,
  onDragStart,
  onDragEnd,
  boarderStyles,
}) {
  PerdanaDnDMultipleData.onDragStartFn = onDragStart;
  PerdanaDnDMultipleData.onDragEndFn = onDragEnd;
  PerdanaDnDMultipleData.data = multipleData;
  PerdanaDnDMultipleData.boarderStyles = boarderStyles;

  (0,_element__WEBPACK_IMPORTED_MODULE_1__.createContainer)({ id, width, height, padding, gap });
  (0,_element__WEBPACK_IMPORTED_MODULE_1__.createBoards)(multipleData);
  (0,_element__WEBPACK_IMPORTED_MODULE_1__.setBoundingRect)();
  (0,_action__WEBPACK_IMPORTED_MODULE_2__.initListener)();
}




/***/ }),

/***/ "./src/single-board/index.js":
/*!***********************************!*\
  !*** ./src/single-board/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/single-board/styles.css");

var CONTAINER_EL = undefined;
const containerClassName = "pg-board-container";
var cardsBounding = [];
var cards = [];
var isDrag = false;
var cardActive = undefined;
var cardActiveIndex = -1;
var baseTop = 0;
var cardGap = 0;
var onDragStartFn = undefined;
var onDragEndFn = undefined;
var list = [];

function createContainer({ id, width, height, padding }) {
  CONTAINER_EL = document.getElementById(id);
  if (!CONTAINER_EL) throw new Error(`Element with ${id} is not available!`);
  CONTAINER_EL.classList.add(containerClassName);
  CONTAINER_EL.style.width = width;
  CONTAINER_EL.style.height = height;
  if (padding) CONTAINER_EL.style.padding = `${padding}px`;
}

function createElement(tag, id, className) {
  const newEl = document.createElement(tag);
  if (id) newEl.id = id;
  if (className) newEl.classList.add(className);
  return newEl;
}

function createCard({ id, title, description, index, gap }) {
  const cardEl = createElement("div", `${id}-board-item-container`, "pg-card");
  const top = index * 106 + (index + 1) * gap;
  cardEl.style.top = `${top}px`;

  const titleEl = createElement("h6", `${id}-title`, "pg-card-title");
  titleEl.innerHTML = title;

  const descriptionEl = createElement(
    "p",
    `${id}-title`,
    "pg-board-description"
  );
  descriptionEl.innerHTML = description;

  cardEl.append(titleEl);
  cardEl.append(descriptionEl);

  return cardEl;
}

/**
 * Initializes a draggable container with cards.
 *
 * @param {Object} config - Configuration object.
 * @param {string} config.id - The ID of the container element.
 * @param {number} config.gap - The gap (in pixels) between cards in the container.
 * @param {string} config.width - The CSS width style applied to the container element.
 * @param {string} config.height - The CSS height style applied to the container element.
 * @param {number} config.padding - The padding (in pixels) applied to the container element.
 * @param {Array<Object>} config.data - The list of card data objects used for drag-and-drop elements.
 * @param {string} config.data[].id - The unique ID of the card.
 * @param {string} config.data[].title - The title of the card.
 * @param {string} config.data[].description - The description of the card.
 * @param {Function} config.onDragStart - Callback triggered when a card starts being dragged.
 * @param {Function} config.onDragEnd - Callback triggered when a card ends being dragged.
 *
 * @callback onDragStart
 * @param {number} cardIndex - The index of the card that is being dragged.
 *
 * @callback onDragEnd
 * @param {number} startIndex - The initial index of the card being dragged.
 * @param {number} endIndex - The final index of the card after dropping.
 * @param {Array<Object>} updatedData - The updated list of card data.
 */
function init({
  id,
  gap,
  width,
  height,
  padding,
  data,
  onDragStart,
  onDragEnd,
}) {
  cardGap = gap;
  onDragStartFn = onDragStart;
  onDragEndFn = onDragEnd;
  list = data;
  createContainer({ id, width, height, padding });
  data.forEach((item, index) => {
    const cardEL = createCard({ ...item, index, gap });
    cardEL.setAttribute("data-index", index);
    CONTAINER_EL.append(cardEL);
    cards.push(cardEL);
  });
  setBouding();
  initFunc();
}

function initFunc() {
  var lastY = 0;
  cards.forEach((ce, ci) => {
    ce.addEventListener("mousedown", () => {
      cardActiveIndex = parseInt(ce.dataset.index);
      if (onDragStartFn) onDragStartFn(cardActiveIndex);
      cardActive = ce;
    });
  });

  CONTAINER_EL.addEventListener("mousedown", (e) => {
    // const baseTop = cardsBounding[0].y
    isDrag = true;
    const top = e.clientY - baseTop;
    lastY = top;
    if (cardActive) cardActive.classList.add("pg-card-active");
    setTimeout(() => {
      if (cardActive) cardActive.classList.add("pg-card-active");
    }, 10);
  });

  CONTAINER_EL.addEventListener("mousemove", (e) => {
    // const baseTop = cardsBounding[0].y
    const top = e.clientY - baseTop;
    if (isDrag && cardActive) {
      if (lastY == 0) {
        cards.forEach((c) => {
          c.classList.add("no-copy");
        });
      }
      const Y = parseInt(cardActive.style.top.replace("px", "")) + top - lastY;
      cardActive.style.top = `${Y}px`;
      lastY = top;
    }
  });

  CONTAINER_EL.addEventListener("mouseup", (e) => {
    isDrag = false;
    if (cardActive) {
      if (lastY + baseTop > cardsBounding[cardActiveIndex].y) {
        const indexMoveCards = [];
        cardsBounding.forEach((ce, ci) => {
          if (
            cardActive.getBoundingClientRect().y > ce.y &&
            ci > cardActiveIndex
          ) {
            indexMoveCards.push(ci);
          }
        });
        const cardTemp = cards[cardActiveIndex];
        for (const index of indexMoveCards) {
          cards[index].style.top = `${
            cardsBounding[index - 1].y - baseTop + cardGap
          }px`;
          cards[index - 1] = cards[index];
          cards[index].setAttribute(
            "data-index",
            parseInt(cards[index].dataset.index) - 1
          );
        }
        if (indexMoveCards.length > 0) {
          const idx = indexMoveCards[indexMoveCards.length - 1];
          cards[idx] = cardTemp;
          cardActive.style.top = `${
            cardsBounding[idx].y - baseTop + cardGap
          }px`;
          cardActive.setAttribute("data-index", idx);
        }
        reOrderData(
          cardActiveIndex,
          indexMoveCards[indexMoveCards.length - 1],
          list
        );
        if (onDragEndFn)
          onDragEndFn(
            cardActiveIndex,
            indexMoveCards[indexMoveCards.length - 1],
            list
          );
      } else if (lastY + baseTop < cardsBounding[cardActiveIndex].y) {
        const indexMoveCards = [];
        cardsBounding.forEach((ce, ci) => {
          if (
            cardActive.getBoundingClientRect().y +
              cardActive.getBoundingClientRect().height <
              ce.y + ce.height &&
            ci < cardActiveIndex
          ) {
            indexMoveCards.push(ci);
          }
        });

        const cardTemp = cards[cardActiveIndex];
        for (const index of indexMoveCards.reverse()) {
          cards[index].style.top = `${
            cardsBounding[index + 1].y - baseTop + cardGap
          }px`;
          cards[index + 1] = cards[index];
          cards[index].setAttribute(
            "data-index",
            parseInt(cards[index].dataset.index) + 1
          );
        }
        if (indexMoveCards.length > 0) {
          const idx = cardActiveIndex - indexMoveCards.length;
          cards[idx] = cardTemp;
          cardActive.style.top = `${
            cardsBounding[idx].y - baseTop + cardGap
          }px`;
          cardActive.setAttribute("data-index", idx);
        }

        reOrderData(
          cardActiveIndex,
          cardActiveIndex - indexMoveCards.length,
          list
        );
        if (onDragEndFn)
          onDragEndFn(
            cardActiveIndex,
            cardActiveIndex - indexMoveCards.length,
            list
          );
      }
      cardActive.classList.remove("pg-card-active");
      cardActiveIndex = -1;
      cardActive = undefined;
    }
    lastY = 0;
  });
}
function reOrderData(startIndex, endIndex, data) {
  if (startIndex > endIndex) {
    const temp = data[endIndex];
    data[endIndex] = data[startIndex];
    for (let index = startIndex; index > endIndex; index--) {
      if (index == endIndex + 1) {
        data[index] = temp;
        continue;
      }
      data[index] = data[index - 1];
    }
  }
  if (startIndex < endIndex) {
    const temp = data[endIndex];
    data[endIndex] = data[startIndex];
    if (endIndex - startIndex < 2) {
      data[startIndex] = temp;
      return;
    }
    for (let i = startIndex + 1; i <= endIndex; i++) {
      if (i == endIndex) {
        data[i - 1] = temp;
        continue;
      }

      data[i - 1] = data[i];
    }
  }
}

function setBouding() {
  setTimeout(() => {
    cards.forEach((e) => {
      cardsBounding.push(e.getBoundingClientRect());
    });
    baseTop = cardsBounding[0].y;
  }, 10);
}

// init({
//   id: "container",
//   width: "300px",
//   height: "600px",
//   padding: 20,
//   gap: 12,
//   onDragStart:(cardIndex) => {
//     console.log("onDragStart: ",cardIndex)
//   },
//   onDragEnd:(startIndex, endIndex, data) => {
//     console.log("onDragStart: ", {startIndex, endIndex, data})
//   },
//   data:  [
//         {
//           id: "item-1",
//           title: "Item 1",
//           description: "Board 1 Item 1",
//         },
//         {
//           id: "item-2",
//           title: "Item 2",
//           description: "Board 1 Item 2",
//         },
//         {
//           id: "item-3",
//           title: "Item 3",
//           description: "Board 1 Item 3",
//         },
//         {
//           id: "item-4",
//           title: "Item 4",
//           description: "Board 1 Item 4",
//         },
//         {
//           id: "item-5",
//           title: "Item 5",
//           description: "Board 1 Item 5",
//         }
//       ]
// })



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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   multiple: () => (/* reexport module object */ _multiple_board_index__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   single: () => (/* reexport module object */ _single_board_index__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _single_board_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-board/index */ "./src/single-board/index.js");
/* harmony import */ var _multiple_board_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multiple-board/index */ "./src/multiple-board/index.js");




})();

PerdanaDnD = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=bundle.5cce2441c5a7f4971b3b.js.map
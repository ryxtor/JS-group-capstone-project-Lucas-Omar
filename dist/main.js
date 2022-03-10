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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato&family=Poppins&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n  display: flex;\\r\\n  position: fixed;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  background-color: rgb(138, 72, 214);\\r\\n  border-bottom: 2px solid #000;\\r\\n  box-shadow: 1px 2px 10px;\\r\\n}\\r\\n\\r\\n.navbar img {\\r\\n  margin: 6px 6px 6px 20px;\\r\\n}\\r\\n\\r\\n.navbar ul {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.navbar ul li {\\r\\n  margin-right: 4rem;\\r\\n  font-family: Poppins, sans-serif;\\r\\n  cursor: pointer;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  position: relative;\\r\\n  height: 60px;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  border-top: 2px solid #000;\\r\\n  background-color: rgb(138, 72, 214);\\r\\n  box-shadow: 0 -2px 10px;\\r\\n}\\r\\n\\r\\n.footer p {\\r\\n  margin-left: 3rem;\\r\\n  font-family: Poppins, sans-serif;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n  padding-top: 100px;\\r\\n  background-color: rgb(160, 71, 201);\\r\\n}\\r\\n\\r\\n.card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin: 1rem 1rem;\\r\\n  border: 1px solid #000;\\r\\n  border-radius: 0 0 1rem 1rem;\\r\\n  box-shadow: 1px 6px 12px;\\r\\n  background: linear-gradient(120deg, rgba(128, 76, 245, 1) 30%, rgba(225, 109, 255, 1) 100%);\\r\\n}\\r\\n\\r\\n.card h3 {\\r\\n  width: 130px;\\r\\n  height: 87px;\\r\\n  font-family: Poppins, sans-serif;\\r\\n  margin-bottom: 0;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.card input,\\r\\nform button {\\r\\n  align-self: center;\\r\\n  background-color: rgb(131, 44, 202);\\r\\n  color: #fff;\\r\\n  width: 6rem;\\r\\n  height: 2rem;\\r\\n  font-family: Poppins, sans-serif;\\r\\n  cursor: pointer;\\r\\n  margin-bottom: 1rem;\\r\\n  border-radius: 16px;\\r\\n  transition: background-color 0.2s;\\r\\n}\\r\\n\\r\\n.card input:hover,\\r\\nform button:hover {\\r\\n  background-color: rgb(179, 74, 228);\\r\\n}\\r\\n\\r\\n.card div {\\r\\n  display: flex;\\r\\n  align-items: baseline;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.bg-modal {\\r\\n  background-color: rgba(193, 199, 208, 0.8);\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  display: none;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  backdrop-filter: blur(2px);\\r\\n}\\r\\n\\r\\n.pop-up {\\r\\n  height: 90vh;\\r\\n  width: 60%;\\r\\n  margin: 5vh auto;\\r\\n  background: linear-gradient(120deg, rgba(128, 76, 245, 1) 30%, rgba(225, 109, 255, 1) 100%);\\r\\n  position: relative;\\r\\n  z-index: 1;\\r\\n  border-radius: 5px;\\r\\n  box-shadow: 0 0 20px #000;\\r\\n}\\r\\n\\r\\nspan {\\r\\n  border-radius: 3em;\\r\\n  margin-left: 95%;\\r\\n  background: #212121;\\r\\n  color: #fff;\\r\\n  font-size: 1.25em;\\r\\n  padding: 0.7em 0.7em;\\r\\n  cursor: pointer;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.pop-up-text {\\r\\n  box-sizing: border-box;\\r\\n  padding: 20px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.pop-up-text h1 {\\r\\n  font-size: 2em;\\r\\n  font-weight: bold;\\r\\n  margin-bottom: 20px;\\r\\n  color: #212121;\\r\\n}\\r\\n\\r\\n.pop-up-text p {\\r\\n  font-size: 1em;\\r\\n  margin-bottom: 1em;\\r\\n}\\r\\n\\r\\n.pop-up-text a {\\r\\n  color: #ff3d3d;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.pop-up-text img {\\r\\n  max-height: 295px;\\r\\n  width: auto;\\r\\n  text-align: center;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  display: flex;\\r\\n  gap: 20px;\\r\\n  flex-wrap: wrap;\\r\\n  height: max-content;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.comment ul {\\r\\n  list-style: none;\\r\\n  width: 40%;\\r\\n  padding: 0;\\r\\n  border: 2px solid #000;\\r\\n  margin: 0;\\r\\n  border-radius: 12px;\\r\\n  height: 80%;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.comment ul li {\\r\\n  padding: 12px;\\r\\n  font-family: Lato, sans-serif;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.comment ul li:nth-child(even) {\\r\\n  background-color: rgb(194, 150, 214);\\r\\n}\\r\\n\\r\\n.img-details {\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.details {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin-left: 3rem;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.details h1 {\\r\\n  font-family: Poppins, sans-serif;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.details p {\\r\\n  font-family: Lato, sans-serif;\\r\\n  font-size: 20px;\\r\\n  margin: 8px 0;\\r\\n}\\r\\n\\r\\n.pop-up h3 {\\r\\n  color: #fff;\\r\\n  font-family: Poppins, sans-serif;\\r\\n}\\r\\n\\r\\n.username {\\r\\n  background: transparent;\\r\\n  width: 100%;\\r\\n  height: 24px;\\r\\n  border: 2px solid #000;\\r\\n  border-radius: 12px 12px 0 0;\\r\\n  padding: 12px;\\r\\n  font-family: Lato, sans-serif;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.username::placeholder {\\r\\n  color: lightgrey;\\r\\n  font-family: Lato, sans-serif;\\r\\n}\\r\\n\\r\\n.commentBody {\\r\\n  background: transparent;\\r\\n  border: 2px solid #000;\\r\\n  width: 100%;\\r\\n  border-radius: 0 0 12px 12px;\\r\\n  padding: 12px;\\r\\n  font-family: Lato, sans-serif;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.commentBody::placeholder {\\r\\n  color: lightgray;\\r\\n  font-family: Lato, sans-serif;\\r\\n}\\r\\n\\r\\n.comment ul::-webkit-scrollbar {\\r\\n  width: 0;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb {\\r\\n  background-color: rgb(0, 0, 0);\\r\\n}\\r\\n\\r\\n.card div p {\\r\\n  font-family: Lato, sans-serif;\\r\\n}\\r\\n\\r\\ni {\\r\\n  color: rgb(146, 90, 153);\\r\\n  text-shadow: 1px 1px 2px #000;\\r\\n  cursor: pointer;\\r\\n  transition: color 0.5s;\\r\\n}\\r\\n\\r\\ni:hover {\\r\\n  color: rgb(144, 0, 209);\\r\\n}\\r\\n\\r\\n.heart {\\r\\n  color: rgb(144, 0, 209);\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 1062px) {\\r\\n  .img-details img {\\r\\n    width: 80%;\\r\\n    height: auto;\\r\\n  }\\r\\n\\r\\n  .img-details {\\r\\n    justify-content: center;\\r\\n  }\\r\\n\\r\\n  .details {\\r\\n    margin: 0;\\r\\n  }\\r\\n\\r\\n  .details p {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .comment ul li {\\r\\n    font-size: 12px;\\r\\n    padding: 8px;\\r\\n  }\\r\\n\\r\\n  .comment ul {\\r\\n    height: auto;\\r\\n    width: 90%;\\r\\n  }\\r\\n\\r\\n  form {\\r\\n    width: 90%;\\r\\n  }\\r\\n\\r\\n  .comment {\\r\\n    justify-content: center;\\r\\n  }\\r\\n\\r\\n  .pop-up {\\r\\n    overflow-y: scroll;\\r\\n    overflow-x: hidden;\\r\\n    width: 80%;\\r\\n  }\\r\\n\\r\\n  .username,\\r\\n  .commentBody {\\r\\n    width: 90%;\\r\\n  }\\r\\n\\r\\n  .pop-up::-webkit-scrollbar {\\r\\n    width: 0;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayShows_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayShows.js */ \"./src/modules/displayShows.js\");\n/* harmony import */ var _modules_getLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getLikes.js */ \"./src/modules/getLikes.js\");\n\n\n\n\n(0,_modules_getLikes_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)().then(() => {\n  (0,_modules_displayShows_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://webpack-template/./src/index.js?");

/***/ }),

/***/ "./src/modules/addLikes.js":
/*!*********************************!*\
  !*** ./src/modules/addLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLikes.js */ \"./src/modules/getLikes.js\");\n\n\nconst addLike = async (likeId) => {\n  await fetch(_getLikes_js__WEBPACK_IMPORTED_MODULE_0__.invAPI, {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json',\n    },\n    body: JSON.stringify(likeId),\n  });\n  await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();\n\n  let likesCount = 0;\n  _getLikes_js__WEBPACK_IMPORTED_MODULE_0__.like.forEach((item) => {\n    if (likeId.item_id === item.item_id) {\n      likesCount = item.likes;\n    }\n  });\n\n  const heart = document.getElementById(`likes-${likeId.item_id}`);\n  heart.textContent = `${likesCount}`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);\n\n//# sourceURL=webpack://webpack-template/./src/modules/addLikes.js?");

/***/ }),

/***/ "./src/modules/countCards.js":
/*!***********************************!*\
  !*** ./src/modules/countCards.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countCards\": () => (/* binding */ countCards),\n/* harmony export */   \"displayCardCounter\": () => (/* binding */ displayCardCounter)\n/* harmony export */ });\nconst countCards = () => {\n  const container = document.getElementById('container');\n  const cards = container.querySelectorAll('.card');\n  return cards.length;\n};\n\nconst displayCardCounter = () => {\n  const cards = countCards();\n  const counter = document.getElementById('shows');\n  counter.textContent = `Tv Shows (${cards})`;\n};\n\n//# sourceURL=webpack://webpack-template/./src/modules/countCards.js?");

/***/ }),

/***/ "./src/modules/displayPopUp.js":
/*!*************************************!*\
  !*** ./src/modules/displayPopUp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showPopUP)\n/* harmony export */ });\n/* harmony import */ var _preparePopUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preparePopUp.js */ \"./src/modules/preparePopUp.js\");\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComments.js */ \"./src/modules/getComments.js\");\n\r\n\r\n\r\nfunction showPopUP(e) {\r\n  (0,_preparePopUp_js__WEBPACK_IMPORTED_MODULE_0__.loadShow)(e.target.id)\r\n    .then((data) => {\r\n      (0,_preparePopUp_js__WEBPACK_IMPORTED_MODULE_0__.preparePopUp)(data);\r\n      _preparePopUp_js__WEBPACK_IMPORTED_MODULE_0__.bgModal.style.display = 'block';\r\n      document.querySelector('html').style.overflow = 'hidden';\r\n      document.querySelectorAll('form').forEach((commentForm) => {\r\n        commentForm.addEventListener('submit', (event) => {\r\n          event.preventDefault();\r\n          const username = commentForm.querySelector('.username').value;\r\n          const comment = commentForm.querySelector('.commentBody').value;\r\n          const itemId = commentForm.id;\r\n          (0,_getComments_js__WEBPACK_IMPORTED_MODULE_1__.postComment)(itemId, username, comment);\r\n          commentForm.querySelector('.username').value = '';\r\n          commentForm.querySelector('.commentBody').value = '';\r\n          (0,_preparePopUp_js__WEBPACK_IMPORTED_MODULE_0__.displayComments)(itemId, false, username, comment);\r\n        });\r\n      });\r\n    })\r\n    .then(() => {\r\n      const bgModal = document.querySelector('.bg-modal');\r\n      const close = document.querySelector('.close');\r\n      close.addEventListener('click', () => {\r\n        bgModal.style.display = 'none';\r\n        document.querySelector('html').style.overflow = 'auto';\r\n      });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://webpack-template/./src/modules/displayPopUp.js?");

/***/ }),

/***/ "./src/modules/displayShows.js":
/*!*************************************!*\
  !*** ./src/modules/displayShows.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tvshowAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tvshowAPI.js */ \"./src/modules/tvshowAPI.js\");\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLikes.js */ \"./src/modules/getLikes.js\");\n/* harmony import */ var _addLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addLikes.js */ \"./src/modules/addLikes.js\");\n/* harmony import */ var _countCards_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countCards.js */ \"./src/modules/countCards.js\");\n/* harmony import */ var _displayPopUp_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayPopUp.js */ \"./src/modules/displayPopUp.js\");\n\n\n\n\n\n\nconst container = document.getElementById('container');\n\nconst displayShows = () => {\n  (0,_tvshowAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n    data.forEach((show) => {\n    // Create card\n      const card = document.createElement('div');\n      card.classList = 'card';\n      // Create title\n      const title = document.createElement('h3');\n      const textTitle = document.createTextNode(show.name);\n      // Create image\n      const image = document.createElement('img');\n      image.setAttribute('src', show.image.medium);\n      image.setAttribute('alt', show.name);\n      image.setAttribute('width', '210');\n      image.setAttribute('heigth', '295');\n      // Create comment button\n      const comment = document.createElement('input');\n      comment.setAttribute('type', 'button');\n      comment.setAttribute('value', 'Comments');\n      comment.id = `${show.id}`;\n      comment.classList.add('comment-button');\n      comment.addEventListener('click', _displayPopUp_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n      // Create likes icon\n      const likes = document.createElement('i');\n      likes.classList.add('fa-solid', 'fa-heart', 'fa-xl');\n      // Create numbers of likes\n      const nOfLikes = document.createElement('p');\n      nOfLikes.id = `likes-${show.id}`;\n      nOfLikes.textContent = '0';\n      _getLikes_js__WEBPACK_IMPORTED_MODULE_1__.like.forEach((item) => {\n        if (show.id === item.item_id) {\n          nOfLikes.textContent = item.likes;\n        }\n      });\n      // Like button\n      likes.addEventListener('click', async () => {\n        const likeId = {\n          item_id: show.id,\n        };\n        await (0,_addLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(likeId);\n        likes.classList.add('heart');\n      });\n      // Create a container for title and likes\n      const titleContainer = document.createElement('div');\n      // Append everything\n      title.appendChild(textTitle);\n      titleContainer.appendChild(title);\n      titleContainer.appendChild(nOfLikes);\n      titleContainer.appendChild(likes);\n      card.appendChild(image);\n      card.appendChild(titleContainer);\n      card.appendChild(comment);\n      container.appendChild(card);\n    });\n    (0,_countCards_js__WEBPACK_IMPORTED_MODULE_3__.displayCardCounter)();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayShows);\n\n//# sourceURL=webpack://webpack-template/./src/modules/displayShows.js?");

/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\nconst getCommentsAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vi4g7NV2Fb946BDtrkSF/comments?item_id=';\nconst postCommentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vi4g7NV2Fb946BDtrkSF/comments';\n\nconst getComments = async (id) => {\n  const response = await fetch(getCommentsAPI + id);\n  const responseJson = await response.json();\n  return responseJson;\n};\n\nconst postComment = async (id, username, comment) => {\n  await fetch(postCommentApi, {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: id,\n      username,\n      comment,\n    }),\n  });\n};\n\n\n\n//# sourceURL=webpack://webpack-template/./src/modules/getComments.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"invAPI\": () => (/* binding */ invAPI),\n/* harmony export */   \"like\": () => (/* binding */ like),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes)\n/* harmony export */ });\nconst invAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nGXJb8jNMlAqNOxXKCnW/likes';\n\nconst like = [];\n\nconst getLikes = async () => {\n  const response = await fetch(invAPI);\n  const data = await response.json();\n  data.forEach((item) => {\n    like.push(\n      {\n        item_id: item.item_id,\n        likes: item.likes,\n      },\n    );\n  });\n  return like;\n};\n\n\n//# sourceURL=webpack://webpack-template/./src/modules/getLikes.js?");

/***/ }),

/***/ "./src/modules/preparePopUp.js":
/*!*************************************!*\
  !*** ./src/modules/preparePopUp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bgModal\": () => (/* binding */ bgModal),\n/* harmony export */   \"preparePopUp\": () => (/* binding */ preparePopUp),\n/* harmony export */   \"loadShow\": () => (/* binding */ loadShow),\n/* harmony export */   \"displayComments\": () => (/* binding */ displayComments)\n/* harmony export */ });\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComments.js */ \"./src/modules/getComments.js\");\n\n\nconst bgModal = document.querySelector('.bg-modal');\n\nconst displayComments = (id, callApi = true, username = '', comment = '') => {\n  const ul = document.querySelector(`[data-id=\"${id}\"]`);\n  const h3 = document.querySelector(`[data-item-id=\"${id}\"]`);\n  if (callApi) {\n    (0,_getComments_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id).then((data) => {\n      data.forEach((comment) => {\n        ul.innerHTML += `<li>${comment.username}: ${comment.comment}</li>`;\n        h3.innerText = `Comments (${ul.childElementCount})`;\n      });\n    });\n  } else {\n    ul.innerHTML += `<li>${username}: ${comment}</li>`;\n    h3.innerText = `Comments (${ul.childElementCount})`;\n  }\n};\n\nconst preparePopUp = (show) => {\n  bgModal.innerHTML = `\n    <div class=\"pop-up\">\n    <div class=\"pop-up-text\">\n    <span class=\"close\">&times;</span>\n        <div class=\"img-details\">\n        <img src=\"${show.image.medium}\"/>\n        <div class=\"details\">\n        <h1>${show.name}</h1>\n        <p class=\"genre\">Genre: ${show.genres.join(', ')}</p>\n        <p>Language: ${show.language}</p>\n        <p>Date of release: ${show.premiered}</p>\n        <p>Rating: ${show.rating.average}</p>\n        </div>\n        </div>\n        <h3 data-item-id=\"${show.id}\">Comments (0)</h3>\n        <div class=\"comment\">\n          <ul data-id=\"${show.id}\"></ul>\n          <form id=\"${show.id}\">\n            <input type=\"text\" class='username' placeholder=\"Username\">\n            <br>\n            <textarea name=\"comment\" id=\"\" cols=\"30\" rows=\"10\" class='commentBody' placeholder=\"Add your comment\"></textarea>\n            <br>\n            <button type=\"submit\">Comment</button>\n          </form>\n        </div>\n      </div>\n    </div>\n      `;\n  displayComments(show.id);\n};\n\nconst loadShow = async (id) => {\n  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);\n  const showsData = await response.json();\n  return showsData;\n};\n\n\n\n\n//# sourceURL=webpack://webpack-template/./src/modules/preparePopUp.js?");

/***/ }),

/***/ "./src/modules/tvshowAPI.js":
/*!**********************************!*\
  !*** ./src/modules/tvshowAPI.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showsAPI = 'https://api.tvmaze.com/shows';\n\nconst getShows = async () => {\n  const response = await fetch(showsAPI);\n  const showsData = await response.json();\n  return showsData;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShows);\n\n//# sourceURL=webpack://webpack-template/./src/modules/tvshowAPI.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
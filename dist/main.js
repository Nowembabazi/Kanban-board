/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&family=Open+Sans:wght@300;400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\nhtml,\nbody,\n* {\n  margin: 0.00001px;\n  padding: 0.000001px;\n}\n\n.body-y-scroll {\n  overflow-y: hidden;\n}\n\n.card-text {\n  height: 80px;\n  overflow-y: hidden;\n}\n\n.card-text::after {\n  content: \"...Read more\";\n  color: blue;\n  text-decoration: underline;\n}\n\n.shorten-text {\n  width: 80%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  position: relative;\n}\n\n/* mobile-first */\n\n.popup {\n  display: none;\n}\n\n.popup2 {\n  display: block;\n  width: 100%;\n  height: 100vh;\n  top: 0.00000111px;\n  z-index: 100;\n  overflow-y: scroll;\n  position: fixed;\n  padding: 15%;\n  background-color: burlywood;\n}\n\n.upperpopup {\n  display: flex;\n  gap: 2rem;\n}\n\n.close {\n  color: #111;\n  font-weight: bolder;\n  font-size: 30px;\n}\n\n.middlepop_simple_titles {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding-top: 0.5rem;\n}\n\n.detail {\n  display: flex;\n  gap: 0.5rem;\n  font-family: \"Lobster Two\", cursive;\n  font-weight: 400;\n}\n\n.detail_p {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  padding-bottom: 0.5rem;\n}\n\n.middlepopup_middle_detail {\n  display: flex;\n  flex-wrap: wrap;\n  border: 1px solid #111;\n  border-radius: 8px;\n  padding: 0.5rem;\n  height: 150px;\n  overflow: scroll;\n}\n\n.detail2 {\n  font-family: \"Lobster Two\", cursive;\n  font-weight: 700;\n}\n\n.popup_comment_section {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n  height: 50px;\n  gap: 1rem;\n}\n\n.detail3 {\n  font-weight: 700;\n  padding-top: 0.5rem;\n  text-align: center;\n}\n\n.date_comment {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.popup_form {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.detail4 {\n  font-weight: 700;\n  text-align: center;\n}\n\n#username {\n  padding: 1rem;\n  outline: none;\n  font-size: larger;\n  border-radius: 8px;\n}\n\n#username::placeholder {\n  color: gray;\n  font-size: larger;\n}\n\n#insight {\n  padding: 1rem;\n  outline: none;\n  height: 150px;\n  font-size: larger;\n  border-radius: 8px;\n}\n\n#insight::placeholder {\n  font-size: larger;\n}\n\n.button1 {\n  border-radius: 12px;\n  padding: 1rem;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 700;\n  font-size: x-large;\n  transition: background-color 0.5s ease;\n  cursor: pointer;\n}\n\n.button1:hover {\n  background-color: rgba(128, 128, 128, 0.856);\n  color: #fff;\n}\n\n/* desktop  */\n\n@media only screen and (min-width: 768px) {\n  .popup,\n  .popup2 {\n    padding: 5%;\n  }\n\n  .image_u {\n    width: 50%;\n  }\n\n  .upperpopup {\n    justify-content: flex-end;\n    padding: 1rem;\n  }\n\n  .middlepop_simple_titles {\n    flex-direction: row;\n    justify-content: space-between;\n    padding-bottom: 2rem;\n  }\n\n  .detail3,\n  .detail4 {\n    display: flex;\n    justify-content: center;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;;;EAGE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,0BAA0B;AAC5B;;AAEA;EACE,UAAU;EACV,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,mCAAmC;EACnC,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;EACpC,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,mCAAmC;EACnC,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,aAAa;EACb,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;EAClB,sCAAsC;EACtC,eAAe;AACjB;;AAEA;EACE,4CAA4C;EAC5C,WAAW;AACb;;AAEA,aAAa;;AAEb;EACE;;IAEE,WAAW;EACb;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,yBAAyB;IACzB,aAAa;EACf;;EAEA;IACE,mBAAmB;IACnB,8BAA8B;IAC9B,oBAAoB;EACtB;;EAEA;;IAEE,aAAa;IACb,uBAAuB;EACzB;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&family=Open+Sans:wght@300;400;500;600;700&display=swap\");\n\n* {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\nhtml,\nbody,\n* {\n  margin: 0.00001px;\n  padding: 0.000001px;\n}\n\n.body-y-scroll {\n  overflow-y: hidden;\n}\n\n.card-text {\n  height: 80px;\n  overflow-y: hidden;\n}\n\n.card-text::after {\n  content: \"...Read more\";\n  color: blue;\n  text-decoration: underline;\n}\n\n.shorten-text {\n  width: 80%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  position: relative;\n}\n\n/* mobile-first */\n\n.popup {\n  display: none;\n}\n\n.popup2 {\n  display: block;\n  width: 100%;\n  height: 100vh;\n  top: 0.00000111px;\n  z-index: 100;\n  overflow-y: scroll;\n  position: fixed;\n  padding: 15%;\n  background-color: burlywood;\n}\n\n.upperpopup {\n  display: flex;\n  gap: 2rem;\n}\n\n.close {\n  color: #111;\n  font-weight: bolder;\n  font-size: 30px;\n}\n\n.middlepop_simple_titles {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding-top: 0.5rem;\n}\n\n.detail {\n  display: flex;\n  gap: 0.5rem;\n  font-family: \"Lobster Two\", cursive;\n  font-weight: 400;\n}\n\n.detail_p {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  padding-bottom: 0.5rem;\n}\n\n.middlepopup_middle_detail {\n  display: flex;\n  flex-wrap: wrap;\n  border: 1px solid #111;\n  border-radius: 8px;\n  padding: 0.5rem;\n  height: 150px;\n  overflow: scroll;\n}\n\n.detail2 {\n  font-family: \"Lobster Two\", cursive;\n  font-weight: 700;\n}\n\n.popup_comment_section {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n  height: 50px;\n  gap: 1rem;\n}\n\n.detail3 {\n  font-weight: 700;\n  padding-top: 0.5rem;\n  text-align: center;\n}\n\n.date_comment {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.popup_form {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.detail4 {\n  font-weight: 700;\n  text-align: center;\n}\n\n#username {\n  padding: 1rem;\n  outline: none;\n  font-size: larger;\n  border-radius: 8px;\n}\n\n#username::placeholder {\n  color: gray;\n  font-size: larger;\n}\n\n#insight {\n  padding: 1rem;\n  outline: none;\n  height: 150px;\n  font-size: larger;\n  border-radius: 8px;\n}\n\n#insight::placeholder {\n  font-size: larger;\n}\n\n.button1 {\n  border-radius: 12px;\n  padding: 1rem;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 700;\n  font-size: x-large;\n  transition: background-color 0.5s ease;\n  cursor: pointer;\n}\n\n.button1:hover {\n  background-color: rgba(128, 128, 128, 0.856);\n  color: #fff;\n}\n\n/* desktop  */\n\n@media only screen and (min-width: 768px) {\n  .popup,\n  .popup2 {\n    padding: 5%;\n  }\n\n  .image_u {\n    width: 50%;\n  }\n\n  .upperpopup {\n    justify-content: flex-end;\n    padding: 1rem;\n  }\n\n  .middlepop_simple_titles {\n    flex-direction: row;\n    justify-content: space-between;\n    padding-bottom: 2rem;\n  }\n\n  .detail3,\n  .detail4 {\n    display: flex;\n    justify-content: center;\n  }\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const comments = (comm, data) => {
  comm.innerHTML = '';
  if (data.error) {
    data = [];
  }
  data.map((datd) => {
    const dateComment1 = document.createElement('div');
    dateComment1.setAttribute('class', 'date_comment');
    const b1 = document.createElement('b');
    b1.setAttribute('class', 'detail_p');
    b1.innerText = `${datd.creation_date}`;
    const p5 = document.createElement('p');
    p5.setAttribute('class', 'detail_p');
    p5.innerText = `${datd.username}: ${datd.comment}`;
    dateComment1.appendChild(b1);
    dateComment1.appendChild(p5);
    comm.appendChild(dateComment1);

    return null;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comments);

/***/ }),

/***/ "./src/modules/counterComment.js":
/*!***************************************!*\
  !*** ./src/modules/counterComment.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const counter = (h35, ansd) => {
  const sp = ansd.length ? ansd.length : 0;
  const span1 = document.createElement('span');
  span1.setAttribute('id', 'spanh');
  span1.innerText = `Comments (${sp})`;
h35.appendChild(span1);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);

/***/ }),

/***/ "./src/modules/fetchLikes.js":
/*!***********************************!*\
  !*** ./src/modules/fetchLikes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLike": () => (/* binding */ addLike),
/* harmony export */   "getLikes": () => (/* binding */ getLikes)
/* harmony export */ });
const appId = 'Wyu5tsnxyP8SUDrhnO7g';
const URL_API = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;

// Add a like
const addLike = async (idItem) => {
  await fetch(URL_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: idItem,
    }),
  });
};

// Get likes
const getLikes = async () => {
  const response = await fetch(URL_API);
  const result = await response.json();
  return result;
};



/***/ }),

/***/ "./src/modules/fetchMeals.js":
/*!***********************************!*\
  !*** ./src/modules/fetchMeals.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "URL_API": () => (/* binding */ URL_API),
/* harmony export */   "getFoodList": () => (/* binding */ getFoodList)
/* harmony export */ });
const URL_API = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';

const getFoodList = async (URL_API) => {
  const response = await fetch(URL_API);
  const json = await response.json();
  const mealList = json.meals.slice(0, 18);

  return mealList;
};



/***/ }),

/***/ "./src/modules/mealsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/mealsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mealsCounter = (meals) => meals.length;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealsCounter);

/***/ }),

/***/ "./src/modules/mealsList.js":
/*!**********************************!*\
  !*** ./src/modules/mealsList.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetchMeals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchMeals.js */ "./src/modules/fetchMeals.js");

// Using getFoodList function //
const getdata = async () => {
  // create an empty array
  const datas = [];
  // awit api data
  const foodList = await (0,_fetchMeals_js__WEBPACK_IMPORTED_MODULE_0__.getFoodList)(_fetchMeals_js__WEBPACK_IMPORTED_MODULE_0__.URL_API);
  // loop to get individual data and populate important data to our array
  foodList.forEach((ata) => {
    const newarr = {
      id: ata.idMeal,
      name: ata.strMeal,
      image: ata.strMealThumb,
      category: ata.strCategory,
      origin: ata.strArea,
      cookinginstruction: ata.strInstructions,
    };
    datas.push(newarr);
  });
  return datas;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getdata);

/***/ }),

/***/ "./src/modules/populateComment.js":
/*!****************************************!*\
  !*** ./src/modules/populateComment.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mealsList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mealsList.js */ "./src/modules/mealsList.js");
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.js */ "./src/modules/comments.js");
/* harmony import */ var _counterComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counterComment.js */ "./src/modules/counterComment.js");




const thebody = document.getElementById('body');

const getinstruction = async (id) => {
  const df = await (0,_mealsList_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const x = df.splice(0);
  const filtered = x.filter((b) => parseInt(b.id, 10) === id);
  return filtered[0].cookinginstruction;
};

const loadData = async (id) => {
  const fetcs = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/N317ounBUtSwOefLVAgO/comments?item_id=${id}`,
  );
  const dataz = fetcs.json();
  return dataz.then((data) => data);
};

const populateComment = async (id, name, category, images, origin, shs) => {
  const s = await loadData(id);

  const instr = await getinstruction(id);
  const popup = document.createElement('div');
  popup.setAttribute('class', 'popup');
  popup.setAttribute('id', 'popup');

  const upperpopup = document.createElement('div');
  upperpopup.setAttribute('class', 'upperpopup');

  const upperpopupFigure = document.createElement('figure');
  upperpopupFigure.setAttribute('class', 'upperpopup_figure');

  const image = document.createElement('img');
  image.setAttribute('src', `${images}`);
  image.setAttribute('id', 'legendimage');
  image.setAttribute('class', 'image_u');
  image.setAttribute('alt', 'image');
  image.setAttribute('width', '250');

  upperpopupFigure.appendChild(image);

  const closeicon = document.createElement('a');
  closeicon.setAttribute('href', '#');
  closeicon.setAttribute('class', 'close_container');
  closeicon.setAttribute('id', 'close');

  const closesvg = document.createElement('i');
  closesvg.setAttribute('class', 'lni lni-close close');

  closeicon.appendChild(closesvg);

  upperpopup.appendChild(upperpopupFigure);
  upperpopup.appendChild(closeicon);

  const middlepopup = document.createElement('div');
  middlepopup.setAttribute('class', 'middlepopup');

  const middlepopSimpleTitles = document.createElement('div');
  middlepopSimpleTitles.setAttribute('class', 'middlepop_simple_titles');

  const h31 = document.createElement('h3');
  h31.setAttribute('class', 'detail');
  h31.innerText = 'Name: ';

  const p1 = document.createElement('p');
  p1.setAttribute('class', 'detail_p');
  p1.innerText = `${name}`;
  h31.appendChild(p1);

  const h32 = document.createElement('h3');
  h32.setAttribute('class', 'detail');
  h32.innerText = 'Category: ';

  const p2 = document.createElement('p');
  p2.setAttribute('class', 'detail_p');
  p2.innerText = `${category}`;
  h32.appendChild(p2);

  const h33 = document.createElement('h3');
  h33.setAttribute('class', 'detail');
  h33.innerText = 'Origin: ';

  const p3 = document.createElement('p');
  p3.setAttribute('class', 'detail_p');
  p3.innerText = `${origin}`;
  h33.appendChild(p3);

  middlepopSimpleTitles.appendChild(h31);
  middlepopSimpleTitles.appendChild(h32);
  middlepopSimpleTitles.appendChild(h33);

  const middlepopupMiddleDetail = document.createElement('article');
  const h34 = document.createElement('h3');
  h34.setAttribute('class', 'detail2');
  h34.innerText = 'Instruction';

  const p4 = document.createElement('p');
  p4.setAttribute('class', 'detail_p');
  p4.innerText = `${instr}`;

  middlepopupMiddleDetail.appendChild(h34);
  middlepopupMiddleDetail.appendChild(p4);
  middlepopup.appendChild(middlepopSimpleTitles);
  middlepopup.appendChild(middlepopupMiddleDetail);

  const popupCommentSection = document.createElement('article');
  const h35 = document.createElement('h3');
  h35.setAttribute('class', 'detail detail3');
  h35.innerText = '';
  (0,_counterComment_js__WEBPACK_IMPORTED_MODULE_2__["default"])(h35, s);
  popupCommentSection.appendChild(h35);

  const commentHoder = document.createElement('div');
  commentHoder.setAttribute('class', 'comment_holder');
  popupCommentSection.appendChild(commentHoder);
  (0,_comments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(commentHoder, s);

  const popupForm = document.createElement('form');
  popupForm.setAttribute('class', 'popup_form');
  popupForm.setAttribute('id', 'form');
  const h36 = document.createElement('h3');
  h36.setAttribute('class', 'detail detail4');
  h36.innerText = 'Add a Comment';
  const username = document.createElement('input');
  username.setAttribute('name', 'username');
  username.setAttribute('class', 'detail_p');
  username.setAttribute('id', 'username');
  username.setAttribute('minlength', '5');
  username.setAttribute('placeholder', 'Your name');
  username.setAttribute('required', true);
  username.setAttribute('type', 'text');
  const insight = document.createElement('input');
  insight.setAttribute('name', 'insight');
  insight.setAttribute('class', 'detail_p');
  insight.setAttribute('value', ' ');
  insight.setAttribute('id', 'insight');
  insight.setAttribute('minlength', '1');
  insight.setAttribute('placeholder', 'Your name');
  insight.setAttribute('required', true);
  insight.setAttribute('type', 'text');
  const formbutton = document.createElement('button');
  formbutton.setAttribute('type', 'submit');
  formbutton.setAttribute('class', 'button1');
  formbutton.setAttribute('id', 'comment');
  formbutton.innerText = 'Comment';

  popupForm.appendChild(h36);
  popupForm.appendChild(username);
  popupForm.appendChild(insight);
  popupForm.appendChild(formbutton);

  popup.appendChild(upperpopup);
  popup.appendChild(middlepopup);
  popup.appendChild(popupCommentSection);
  popup.appendChild(popupForm);

  thebody.appendChild(popup);

  closeicon.addEventListener('click', (e) => {
    e.preventDefault();
    const thepopup = document.getElementById('popup');
    thepopup.classList.remove('popup2');
    thebody.innerHTML = '';
    document.body.classList.remove('body-y-scroll');
  });

  const formsd = document.getElementById('form');
  formsd.addEventListener('submit', async (event) => {
    event.preventDefault();

    const thefetch = await fetch(shs, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: formsd.username.value,
        comment: formsd.insight.value,
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    const mystatus = thefetch.status;
    if (mystatus === 201) {
      commentHoder.innerHTML = '';
      h35.innerHTML = '';
      document.getElementById('form').reset();
      const p = await loadData(id);
      (0,_comments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(commentHoder, p);
      (0,_counterComment_js__WEBPACK_IMPORTED_MODULE_2__["default"])(h35, p);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateComment);

/***/ }),

/***/ "./src/modules/showLike.js":
/*!*********************************!*\
  !*** ./src/modules/showLike.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetchLikes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchLikes */ "./src/modules/fetchLikes.js");


const showlike = async (txtLike) => {
  const mealId = txtLike.getAttribute('data-id');
  const likesList = await (0,_fetchLikes__WEBPACK_IMPORTED_MODULE_0__.getLikes)();
  const numberLikes = likesList.filter((likeObj) => likeObj.item_id === mealId);
  if (numberLikes.length > 0) {
    txtLike.textContent = `${numberLikes[0].likes} Likes`;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showlike);

/***/ }),

/***/ "./src/modules/showMeals.js":
/*!**********************************!*\
  !*** ./src/modules/showMeals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mealsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mealsList */ "./src/modules/mealsList.js");


const showMeals = async (container) => {
  // Get meals list
  const meals = await (0,_mealsList__WEBPACK_IMPORTED_MODULE_0__["default"])();

  // Populate meals to the screen
  meals.forEach((meal) => {
    const mealTemplate = `
      <li class="col-12 col-sm-6 col-lg-4 p-3">
        <div class="meal-card | card m-0">
          <img
            src="${meal.image}"
            class="card-img-top"
            alt="${meal.name} image"
          />
          <div class="card-body">
            <div class="card-details d-flex justify-content-between pb-3">
              <div class="w-50">
                <h5 class="card-title shorten-text">${meal.name}</h5>
                <span class="card-likes-txt d-block" data-id="${meal.id}">0 Likes</span>
              </div>
              <div>
                <button class="card-likes d-flex btn btn-danger" data-id="${meal.id}">
                  💛
                </button>
              </div>
            </div>
            <button href="#" data-id="${meal.id}" onclick="handleCommentClick([${meal.id}, '${meal.name}', '${meal.category}', '${meal.image}', '${meal.origin}'])" class="btn btn-dark d-block w-100">comments</button>
          </div>
        </div>
      </li>
    `;

    container.innerHTML += mealTemplate;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMeals);

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_showMeals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showMeals */ "./src/modules/showMeals.js");
/* harmony import */ var _modules_fetchLikes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/fetchLikes */ "./src/modules/fetchLikes.js");
/* harmony import */ var _modules_showLike__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/showLike */ "./src/modules/showLike.js");
/* harmony import */ var _modules_mealsCounter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/mealsCounter */ "./src/modules/mealsCounter.js");
/* harmony import */ var _modules_populateComment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/populateComment.js */ "./src/modules/populateComment.js");







// Constants
const urls = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/N317ounBUtSwOefLVAgO/comments';
const mealsListContainer = document.querySelector('.f-list');

// Populate the meals cards items
document.addEventListener('DOMContentLoaded', async () => {
  await (0,_modules_showMeals__WEBPACK_IMPORTED_MODULE_1__["default"])(mealsListContainer);
  // Selecet meals items
  const meals = document.getElementsByClassName('meal-card');
  const counterContentText = document.querySelector('.meals-counts');
  counterContentText.textContent = (0,_modules_mealsCounter__WEBPACK_IMPORTED_MODULE_4__["default"])([...meals]);
  // Select all likes element
  const textLikes = document.getElementsByClassName('card-likes-txt');
  [...textLikes].forEach(async (textLike) => {
    await (0,_modules_showLike__WEBPACK_IMPORTED_MODULE_3__["default"])(textLike);
  });
});

// Post Likes
window.addEventListener('click', async (e) => {
  // Select the like button
  const likeBtn = e.target;
  if (likeBtn.classList.contains('card-likes')) {
    // Update numbers of likes on the API
    const mealId = likeBtn.getAttribute('data-id');
    await (0,_modules_fetchLikes__WEBPACK_IMPORTED_MODULE_2__.addLike)(mealId);
    // Update numbers of likes on the screen
    const txtlike = likeBtn.parentElement.previousElementSibling.lastChild.previousSibling;
    await (0,_modules_showLike__WEBPACK_IMPORTED_MODULE_3__["default"])(txtlike);
  }
});

const handleCommentClick = async (meals) => {
  const [id, name, category, image, origin] = meals;
  await (0,_modules_populateComment_js__WEBPACK_IMPORTED_MODULE_5__["default"])(id, name, category, image, origin, urls);
  const thepopup = document.getElementById('popup');
  document.body.classList.add('body-y-scroll');
  thepopup.classList.add('popup2');
};

window.handleCommentClick = handleCommentClick;
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLFVBQVUsNkRBQVE7QUFDbEIsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDREQUFPO0FBQ2pCO0FBQ0E7QUFDQSxVQUFVLDZEQUFRO0FBQ2xCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsUUFBUSx1RUFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQyIsInNvdXJjZXMiOlsid2VicGFjazovL2thbmJhbi1ib2FyZC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9zcmMvbW9kdWxlcy9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9zcmMvbW9kdWxlcy9jb3VudGVyQ29tbWVudC5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9zcmMvbW9kdWxlcy9mZXRjaExpa2VzLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL3NyYy9tb2R1bGVzL2ZldGNoTWVhbHMuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vc3JjL21vZHVsZXMvbWVhbHNDb3VudGVyLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL3NyYy9tb2R1bGVzL21lYWxzTGlzdC5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9zcmMvbW9kdWxlcy9wb3B1bGF0ZUNvbW1lbnQuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vc3JjL21vZHVsZXMvc2hvd0xpa2UuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vc3JjL21vZHVsZXMvc2hvd01lYWxzLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlcitUd286d2dodEA0MDA7NzAwJmZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5odG1sLFxcbmJvZHksXFxuKiB7XFxuICBtYXJnaW46IDAuMDAwMDFweDtcXG4gIHBhZGRpbmc6IDAuMDAwMDAxcHg7XFxufVxcblxcbi5ib2R5LXktc2Nyb2xsIHtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLmNhcmQtdGV4dCB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi5jYXJkLXRleHQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIuLi5SZWFkIG1vcmVcXFwiO1xcbiAgY29sb3I6IGJsdWU7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnNob3J0ZW4tdGV4dCB7XFxuICB3aWR0aDogODAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogbW9iaWxlLWZpcnN0ICovXFxuXFxuLnBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wb3B1cDIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB0b3A6IDAuMDAwMDAxMTFweDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHBhZGRpbmc6IDE1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcXG59XFxuXFxuLnVwcGVycG9wdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjMTExO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLm1pZGRsZXBvcF9zaW1wbGVfdGl0bGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG5cXG4uZGV0YWlsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9ic3RlciBUd29cXFwiLCBjdXJzaXZlO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmRldGFpbF9wIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ubWlkZGxlcG9wdXBfbWlkZGxlX2RldGFpbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzExMTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4uZGV0YWlsMiB7XFxuICBmb250LWZhbWlseTogXFxcIkxvYnN0ZXIgVHdvXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5wb3B1cF9jb21tZW50X3NlY3Rpb24ge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZGV0YWlsMyB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRhdGVfY29tbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5wb3B1cF9mb3JtIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmRldGFpbDQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3VzZXJuYW1lIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiN1c2VybmFtZTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IGdyYXk7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuI2luc2lnaHQge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiNpbnNpZ2h0OjpwbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuLmJ1dHRvbjEge1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idXR0b24xOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC44NTYpO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi8qIGRlc2t0b3AgICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnBvcHVwLFxcbiAgLnBvcHVwMiB7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgfVxcblxcbiAgLmltYWdlX3Uge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcblxcbiAgLnVwcGVycG9wdXAge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgfVxcblxcbiAgLm1pZGRsZXBvcF9zaW1wbGVfdGl0bGVzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gIH1cXG5cXG4gIC5kZXRhaWwzLFxcbiAgLmRldGFpbDQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7OztFQUdFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLG1DQUFtQztFQUNuQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsV0FBVztBQUNiOztBQUVBLGFBQWE7O0FBRWI7RUFDRTs7SUFFRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixvQkFBb0I7RUFDdEI7O0VBRUE7O0lBRUUsYUFBYTtJQUNiLHVCQUF1QjtFQUN6QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlcitUd286d2dodEA0MDA7NzAwJmZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5odG1sLFxcbmJvZHksXFxuKiB7XFxuICBtYXJnaW46IDAuMDAwMDFweDtcXG4gIHBhZGRpbmc6IDAuMDAwMDAxcHg7XFxufVxcblxcbi5ib2R5LXktc2Nyb2xsIHtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLmNhcmQtdGV4dCB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi5jYXJkLXRleHQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIuLi5SZWFkIG1vcmVcXFwiO1xcbiAgY29sb3I6IGJsdWU7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnNob3J0ZW4tdGV4dCB7XFxuICB3aWR0aDogODAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogbW9iaWxlLWZpcnN0ICovXFxuXFxuLnBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wb3B1cDIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB0b3A6IDAuMDAwMDAxMTFweDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHBhZGRpbmc6IDE1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcXG59XFxuXFxuLnVwcGVycG9wdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjMTExO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLm1pZGRsZXBvcF9zaW1wbGVfdGl0bGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG5cXG4uZGV0YWlsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9ic3RlciBUd29cXFwiLCBjdXJzaXZlO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmRldGFpbF9wIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ubWlkZGxlcG9wdXBfbWlkZGxlX2RldGFpbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzExMTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4uZGV0YWlsMiB7XFxuICBmb250LWZhbWlseTogXFxcIkxvYnN0ZXIgVHdvXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5wb3B1cF9jb21tZW50X3NlY3Rpb24ge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZGV0YWlsMyB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRhdGVfY29tbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5wb3B1cF9mb3JtIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmRldGFpbDQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3VzZXJuYW1lIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiN1c2VybmFtZTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IGdyYXk7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuI2luc2lnaHQge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiNpbnNpZ2h0OjpwbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuLmJ1dHRvbjEge1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idXR0b24xOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC44NTYpO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi8qIGRlc2t0b3AgICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnBvcHVwLFxcbiAgLnBvcHVwMiB7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgfVxcblxcbiAgLmltYWdlX3Uge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcblxcbiAgLnVwcGVycG9wdXAge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgfVxcblxcbiAgLm1pZGRsZXBvcF9zaW1wbGVfdGl0bGVzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gIH1cXG5cXG4gIC5kZXRhaWwzLFxcbiAgLmRldGFpbDQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb21tZW50cyA9IChjb21tLCBkYXRhKSA9PiB7XG4gIGNvbW0uaW5uZXJIVE1MID0gJyc7XG4gIGlmIChkYXRhLmVycm9yKSB7XG4gICAgZGF0YSA9IFtdO1xuICB9XG4gIGRhdGEubWFwKChkYXRkKSA9PiB7XG4gICAgY29uc3QgZGF0ZUNvbW1lbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZUNvbW1lbnQxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGF0ZV9jb21tZW50Jyk7XG4gICAgY29uc3QgYjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdiJyk7XG4gICAgYjEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWxfcCcpO1xuICAgIGIxLmlubmVyVGV4dCA9IGAke2RhdGQuY3JlYXRpb25fZGF0ZX1gO1xuICAgIGNvbnN0IHA1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHA1LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsX3AnKTtcbiAgICBwNS5pbm5lclRleHQgPSBgJHtkYXRkLnVzZXJuYW1lfTogJHtkYXRkLmNvbW1lbnR9YDtcbiAgICBkYXRlQ29tbWVudDEuYXBwZW5kQ2hpbGQoYjEpO1xuICAgIGRhdGVDb21tZW50MS5hcHBlbmRDaGlsZChwNSk7XG4gICAgY29tbS5hcHBlbmRDaGlsZChkYXRlQ29tbWVudDEpO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWVudHM7IiwiY29uc3QgY291bnRlciA9IChoMzUsIGFuc2QpID0+IHtcbiAgY29uc3Qgc3AgPSBhbnNkLmxlbmd0aCA/IGFuc2QubGVuZ3RoIDogMDtcbiAgY29uc3Qgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4xLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3BhbmgnKTtcbiAgc3BhbjEuaW5uZXJUZXh0ID0gYENvbW1lbnRzICgke3NwfSlgO1xuaDM1LmFwcGVuZENoaWxkKHNwYW4xKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXI7IiwiY29uc3QgYXBwSWQgPSAnV3l1NXRzbnh5UDhTVURyaG5PN2cnO1xuY29uc3QgVVJMX0FQSSA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwcElkfS9saWtlcy9gO1xuXG4vLyBBZGQgYSBsaWtlXG5jb25zdCBhZGRMaWtlID0gYXN5bmMgKGlkSXRlbSkgPT4ge1xuICBhd2FpdCBmZXRjaChVUkxfQVBJLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaWRJdGVtLFxuICAgIH0pLFxuICB9KTtcbn07XG5cbi8vIEdldCBsaWtlc1xuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMX0FQSSk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCB7IGFkZExpa2UsIGdldExpa2VzIH07IiwiY29uc3QgVVJMX0FQSSA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvc2VhcmNoLnBocD9mPWInO1xuXG5jb25zdCBnZXRGb29kTGlzdCA9IGFzeW5jIChVUkxfQVBJKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMX0FQSSk7XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IG1lYWxMaXN0ID0ganNvbi5tZWFscy5zbGljZSgwLCAxOCk7XG5cbiAgcmV0dXJuIG1lYWxMaXN0O1xufTtcblxuZXhwb3J0IHsgVVJMX0FQSSwgZ2V0Rm9vZExpc3QgfTsiLCJjb25zdCBtZWFsc0NvdW50ZXIgPSAobWVhbHMpID0+IG1lYWxzLmxlbmd0aDtcblxuZXhwb3J0IGRlZmF1bHQgbWVhbHNDb3VudGVyOyIsImltcG9ydCB7IFVSTF9BUEksIGdldEZvb2RMaXN0IH0gZnJvbSAnLi9mZXRjaE1lYWxzLmpzJztcbi8vIFVzaW5nIGdldEZvb2RMaXN0IGZ1bmN0aW9uIC8vXG5jb25zdCBnZXRkYXRhID0gYXN5bmMgKCkgPT4ge1xuICAvLyBjcmVhdGUgYW4gZW1wdHkgYXJyYXlcbiAgY29uc3QgZGF0YXMgPSBbXTtcbiAgLy8gYXdpdCBhcGkgZGF0YVxuICBjb25zdCBmb29kTGlzdCA9IGF3YWl0IGdldEZvb2RMaXN0KFVSTF9BUEkpO1xuICAvLyBsb29wIHRvIGdldCBpbmRpdmlkdWFsIGRhdGEgYW5kIHBvcHVsYXRlIGltcG9ydGFudCBkYXRhIHRvIG91ciBhcnJheVxuICBmb29kTGlzdC5mb3JFYWNoKChhdGEpID0+IHtcbiAgICBjb25zdCBuZXdhcnIgPSB7XG4gICAgICBpZDogYXRhLmlkTWVhbCxcbiAgICAgIG5hbWU6IGF0YS5zdHJNZWFsLFxuICAgICAgaW1hZ2U6IGF0YS5zdHJNZWFsVGh1bWIsXG4gICAgICBjYXRlZ29yeTogYXRhLnN0ckNhdGVnb3J5LFxuICAgICAgb3JpZ2luOiBhdGEuc3RyQXJlYSxcbiAgICAgIGNvb2tpbmdpbnN0cnVjdGlvbjogYXRhLnN0ckluc3RydWN0aW9ucyxcbiAgICB9O1xuICAgIGRhdGFzLnB1c2gobmV3YXJyKTtcbiAgfSk7XG4gIHJldHVybiBkYXRhcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldGRhdGE7IiwiaW1wb3J0IGdldGRhdGEgZnJvbSAnLi9tZWFsc0xpc3QuanMnO1xuaW1wb3J0IGNvbW1lbnRzIGZyb20gJy4vY29tbWVudHMuanMnO1xuaW1wb3J0IGNvdW50ZXIgZnJvbSAnLi9jb3VudGVyQ29tbWVudC5qcyc7XG5cbmNvbnN0IHRoZWJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpO1xuXG5jb25zdCBnZXRpbnN0cnVjdGlvbiA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBkZiA9IGF3YWl0IGdldGRhdGEoKTtcbiAgY29uc3QgeCA9IGRmLnNwbGljZSgwKTtcbiAgY29uc3QgZmlsdGVyZWQgPSB4LmZpbHRlcigoYikgPT4gcGFyc2VJbnQoYi5pZCwgMTApID09PSBpZCk7XG4gIHJldHVybiBmaWx0ZXJlZFswXS5jb29raW5naW5zdHJ1Y3Rpb247XG59O1xuXG5jb25zdCBsb2FkRGF0YSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBmZXRjcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9OMzE3b3VuQlV0U3dPZWZMVkFnTy9jb21tZW50cz9pdGVtX2lkPSR7aWR9YCxcbiAgKTtcbiAgY29uc3QgZGF0YXogPSBmZXRjcy5qc29uKCk7XG4gIHJldHVybiBkYXRhei50aGVuKChkYXRhKSA9PiBkYXRhKTtcbn07XG5cbmNvbnN0IHBvcHVsYXRlQ29tbWVudCA9IGFzeW5jIChpZCwgbmFtZSwgY2F0ZWdvcnksIGltYWdlcywgb3JpZ2luLCBzaHMpID0+IHtcbiAgY29uc3QgcyA9IGF3YWl0IGxvYWREYXRhKGlkKTtcblxuICBjb25zdCBpbnN0ciA9IGF3YWl0IGdldGluc3RydWN0aW9uKGlkKTtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9wdXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwb3B1cCcpO1xuICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BvcHVwJyk7XG5cbiAgY29uc3QgdXBwZXJwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB1cHBlcnBvcHVwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndXBwZXJwb3B1cCcpO1xuXG4gIGNvbnN0IHVwcGVycG9wdXBGaWd1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWd1cmUnKTtcbiAgdXBwZXJwb3B1cEZpZ3VyZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3VwcGVycG9wdXBfZmlndXJlJyk7XG5cbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtpbWFnZXN9YCk7XG4gIGltYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbGVnZW5kaW1hZ2UnKTtcbiAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbWFnZV91Jyk7XG4gIGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2ltYWdlJyk7XG4gIGltYWdlLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMjUwJyk7XG5cbiAgdXBwZXJwb3B1cEZpZ3VyZS5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgY29uc3QgY2xvc2VpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjbG9zZWljb24uc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbiAgY2xvc2VpY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2xvc2VfY29udGFpbmVyJyk7XG4gIGNsb3NlaWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlJyk7XG5cbiAgY29uc3QgY2xvc2VzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGNsb3Nlc3ZnLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbG5pIGxuaS1jbG9zZSBjbG9zZScpO1xuXG4gIGNsb3NlaWNvbi5hcHBlbmRDaGlsZChjbG9zZXN2Zyk7XG5cbiAgdXBwZXJwb3B1cC5hcHBlbmRDaGlsZCh1cHBlcnBvcHVwRmlndXJlKTtcbiAgdXBwZXJwb3B1cC5hcHBlbmRDaGlsZChjbG9zZWljb24pO1xuXG4gIGNvbnN0IG1pZGRsZXBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1pZGRsZXBvcHVwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWlkZGxlcG9wdXAnKTtcblxuICBjb25zdCBtaWRkbGVwb3BTaW1wbGVUaXRsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWlkZGxlcG9wU2ltcGxlVGl0bGVzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWlkZGxlcG9wX3NpbXBsZV90aXRsZXMnKTtcblxuICBjb25zdCBoMzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoMzEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWwnKTtcbiAgaDMxLmlubmVyVGV4dCA9ICdOYW1lOiAnO1xuXG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbF9wJyk7XG4gIHAxLmlubmVyVGV4dCA9IGAke25hbWV9YDtcbiAgaDMxLmFwcGVuZENoaWxkKHAxKTtcblxuICBjb25zdCBoMzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoMzIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWwnKTtcbiAgaDMyLmlubmVyVGV4dCA9ICdDYXRlZ29yeTogJztcblxuICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWxfcCcpO1xuICBwMi5pbm5lclRleHQgPSBgJHtjYXRlZ29yeX1gO1xuICBoMzIuYXBwZW5kQ2hpbGQocDIpO1xuXG4gIGNvbnN0IGgzMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGgzMy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbCcpO1xuICBoMzMuaW5uZXJUZXh0ID0gJ09yaWdpbjogJztcblxuICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWxfcCcpO1xuICBwMy5pbm5lclRleHQgPSBgJHtvcmlnaW59YDtcbiAgaDMzLmFwcGVuZENoaWxkKHAzKTtcblxuICBtaWRkbGVwb3BTaW1wbGVUaXRsZXMuYXBwZW5kQ2hpbGQoaDMxKTtcbiAgbWlkZGxlcG9wU2ltcGxlVGl0bGVzLmFwcGVuZENoaWxkKGgzMik7XG4gIG1pZGRsZXBvcFNpbXBsZVRpdGxlcy5hcHBlbmRDaGlsZChoMzMpO1xuXG4gIGNvbnN0IG1pZGRsZXBvcHVwTWlkZGxlRGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICBjb25zdCBoMzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoMzQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWwyJyk7XG4gIGgzNC5pbm5lclRleHQgPSAnSW5zdHJ1Y3Rpb24nO1xuXG4gIGNvbnN0IHA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwNC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbF9wJyk7XG4gIHA0LmlubmVyVGV4dCA9IGAke2luc3RyfWA7XG5cbiAgbWlkZGxlcG9wdXBNaWRkbGVEZXRhaWwuYXBwZW5kQ2hpbGQoaDM0KTtcbiAgbWlkZGxlcG9wdXBNaWRkbGVEZXRhaWwuYXBwZW5kQ2hpbGQocDQpO1xuICBtaWRkbGVwb3B1cC5hcHBlbmRDaGlsZChtaWRkbGVwb3BTaW1wbGVUaXRsZXMpO1xuICBtaWRkbGVwb3B1cC5hcHBlbmRDaGlsZChtaWRkbGVwb3B1cE1pZGRsZURldGFpbCk7XG5cbiAgY29uc3QgcG9wdXBDb21tZW50U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgY29uc3QgaDM1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaDM1LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsIGRldGFpbDMnKTtcbiAgaDM1LmlubmVyVGV4dCA9ICcnO1xuICBjb3VudGVyKGgzNSwgcyk7XG4gIHBvcHVwQ29tbWVudFNlY3Rpb24uYXBwZW5kQ2hpbGQoaDM1KTtcblxuICBjb25zdCBjb21tZW50SG9kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tbWVudEhvZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29tbWVudF9ob2xkZXInKTtcbiAgcG9wdXBDb21tZW50U2VjdGlvbi5hcHBlbmRDaGlsZChjb21tZW50SG9kZXIpO1xuICBjb21tZW50cyhjb21tZW50SG9kZXIsIHMpO1xuXG4gIGNvbnN0IHBvcHVwRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgcG9wdXBGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9wdXBfZm9ybScpO1xuICBwb3B1cEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtJyk7XG4gIGNvbnN0IGgzNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGgzNi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbCBkZXRhaWw0Jyk7XG4gIGgzNi5pbm5lclRleHQgPSAnQWRkIGEgQ29tbWVudCc7XG4gIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdXNlcm5hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3VzZXJuYW1lJyk7XG4gIHVzZXJuYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsX3AnKTtcbiAgdXNlcm5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICd1c2VybmFtZScpO1xuICB1c2VybmFtZS5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICc1Jyk7XG4gIHVzZXJuYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBuYW1lJyk7XG4gIHVzZXJuYW1lLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcbiAgdXNlcm5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgY29uc3QgaW5zaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGluc2lnaHQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2luc2lnaHQnKTtcbiAgaW5zaWdodC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbF9wJyk7XG4gIGluc2lnaHQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcgJyk7XG4gIGluc2lnaHQuc2V0QXR0cmlidXRlKCdpZCcsICdpbnNpZ2h0Jyk7XG4gIGluc2lnaHQuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAnMScpO1xuICBpbnNpZ2h0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBuYW1lJyk7XG4gIGluc2lnaHQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xuICBpbnNpZ2h0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGNvbnN0IGZvcm1idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZm9ybWJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIGZvcm1idXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdidXR0b24xJyk7XG4gIGZvcm1idXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjb21tZW50Jyk7XG4gIGZvcm1idXR0b24uaW5uZXJUZXh0ID0gJ0NvbW1lbnQnO1xuXG4gIHBvcHVwRm9ybS5hcHBlbmRDaGlsZChoMzYpO1xuICBwb3B1cEZvcm0uYXBwZW5kQ2hpbGQodXNlcm5hbWUpO1xuICBwb3B1cEZvcm0uYXBwZW5kQ2hpbGQoaW5zaWdodCk7XG4gIHBvcHVwRm9ybS5hcHBlbmRDaGlsZChmb3JtYnV0dG9uKTtcblxuICBwb3B1cC5hcHBlbmRDaGlsZCh1cHBlcnBvcHVwKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQobWlkZGxlcG9wdXApO1xuICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cENvbW1lbnRTZWN0aW9uKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBGb3JtKTtcblxuICB0aGVib2R5LmFwcGVuZENoaWxkKHBvcHVwKTtcblxuICBjbG9zZWljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aGVwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpO1xuICAgIHRoZXBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwMicpO1xuICAgIHRoZWJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdib2R5LXktc2Nyb2xsJyk7XG4gIH0pO1xuXG4gIGNvbnN0IGZvcm1zZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XG4gIGZvcm1zZC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdGhlZmV0Y2ggPSBhd2FpdCBmZXRjaChzaHMsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpdGVtX2lkOiBpZCxcbiAgICAgICAgdXNlcm5hbWU6IGZvcm1zZC51c2VybmFtZS52YWx1ZSxcbiAgICAgICAgY29tbWVudDogZm9ybXNkLmluc2lnaHQudmFsdWUsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgbXlzdGF0dXMgPSB0aGVmZXRjaC5zdGF0dXM7XG4gICAgaWYgKG15c3RhdHVzID09PSAyMDEpIHtcbiAgICAgIGNvbW1lbnRIb2Rlci5pbm5lckhUTUwgPSAnJztcbiAgICAgIGgzNS5pbm5lckhUTUwgPSAnJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJykucmVzZXQoKTtcbiAgICAgIGNvbnN0IHAgPSBhd2FpdCBsb2FkRGF0YShpZCk7XG4gICAgICBjb21tZW50cyhjb21tZW50SG9kZXIsIHApO1xuICAgICAgY291bnRlcihoMzUsIHApO1xuICAgIH1cbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgcG9wdWxhdGVDb21tZW50OyIsImltcG9ydCB7IGdldExpa2VzIH0gZnJvbSAnLi9mZXRjaExpa2VzJztcblxuY29uc3Qgc2hvd2xpa2UgPSBhc3luYyAodHh0TGlrZSkgPT4ge1xuICBjb25zdCBtZWFsSWQgPSB0eHRMaWtlLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICBjb25zdCBsaWtlc0xpc3QgPSBhd2FpdCBnZXRMaWtlcygpO1xuICBjb25zdCBudW1iZXJMaWtlcyA9IGxpa2VzTGlzdC5maWx0ZXIoKGxpa2VPYmopID0+IGxpa2VPYmouaXRlbV9pZCA9PT0gbWVhbElkKTtcbiAgaWYgKG51bWJlckxpa2VzLmxlbmd0aCA+IDApIHtcbiAgICB0eHRMaWtlLnRleHRDb250ZW50ID0gYCR7bnVtYmVyTGlrZXNbMF0ubGlrZXN9IExpa2VzYDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd2xpa2U7IiwiaW1wb3J0IGdldGRhdGEgZnJvbSAnLi9tZWFsc0xpc3QnO1xuXG5jb25zdCBzaG93TWVhbHMgPSBhc3luYyAoY29udGFpbmVyKSA9PiB7XG4gIC8vIEdldCBtZWFscyBsaXN0XG4gIGNvbnN0IG1lYWxzID0gYXdhaXQgZ2V0ZGF0YSgpO1xuXG4gIC8vIFBvcHVsYXRlIG1lYWxzIHRvIHRoZSBzY3JlZW5cbiAgbWVhbHMuZm9yRWFjaCgobWVhbCkgPT4ge1xuICAgIGNvbnN0IG1lYWxUZW1wbGF0ZSA9IGBcbiAgICAgIDxsaSBjbGFzcz1cImNvbC0xMiBjb2wtc20tNiBjb2wtbGctNCBwLTNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY2FyZCB8IGNhcmQgbS0wXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiJHttZWFsLmltYWdlfVwiXG4gICAgICAgICAgICBjbGFzcz1cImNhcmQtaW1nLXRvcFwiXG4gICAgICAgICAgICBhbHQ9XCIke21lYWwubmFtZX0gaW1hZ2VcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZGV0YWlscyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gcGItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy01MFwiPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGUgc2hvcnRlbi10ZXh0XCI+JHttZWFsLm5hbWV9PC9oNT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmQtbGlrZXMtdHh0IGQtYmxvY2tcIiBkYXRhLWlkPVwiJHttZWFsLmlkfVwiPjAgTGlrZXM8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYXJkLWxpa2VzIGQtZmxleCBidG4gYnRuLWRhbmdlclwiIGRhdGEtaWQ9XCIke21lYWwuaWR9XCI+XG4gICAgICAgICAgICAgICAgICDwn5KbXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGhyZWY9XCIjXCIgZGF0YS1pZD1cIiR7bWVhbC5pZH1cIiBvbmNsaWNrPVwiaGFuZGxlQ29tbWVudENsaWNrKFske21lYWwuaWR9LCAnJHttZWFsLm5hbWV9JywgJyR7bWVhbC5jYXRlZ29yeX0nLCAnJHttZWFsLmltYWdlfScsICcke21lYWwub3JpZ2lufSddKVwiIGNsYXNzPVwiYnRuIGJ0bi1kYXJrIGQtYmxvY2sgdy0xMDBcIj5jb21tZW50czwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgYDtcblxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgKz0gbWVhbFRlbXBsYXRlO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dNZWFsczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBzaG93TWVhbHMgZnJvbSAnLi9tb2R1bGVzL3Nob3dNZWFscyc7XG5pbXBvcnQgeyBhZGRMaWtlIH0gZnJvbSAnLi9tb2R1bGVzL2ZldGNoTGlrZXMnO1xuaW1wb3J0IHNob3dsaWtlIGZyb20gJy4vbW9kdWxlcy9zaG93TGlrZSc7XG5pbXBvcnQgbWVhbHNDb3VudGVyIGZyb20gJy4vbW9kdWxlcy9tZWFsc0NvdW50ZXInO1xuaW1wb3J0IHBvcHVsYXRlQ29tbWVudCBmcm9tICcuL21vZHVsZXMvcG9wdWxhdGVDb21tZW50LmpzJztcblxuLy8gQ29uc3RhbnRzXG5jb25zdCB1cmxzID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL04zMTdvdW5CVXRTd09lZkxWQWdPL2NvbW1lbnRzJztcbmNvbnN0IG1lYWxzTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mLWxpc3QnKTtcblxuLy8gUG9wdWxhdGUgdGhlIG1lYWxzIGNhcmRzIGl0ZW1zXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBzaG93TWVhbHMobWVhbHNMaXN0Q29udGFpbmVyKTtcbiAgLy8gU2VsZWNldCBtZWFscyBpdGVtc1xuICBjb25zdCBtZWFscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lYWwtY2FyZCcpO1xuICBjb25zdCBjb3VudGVyQ29udGVudFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbHMtY291bnRzJyk7XG4gIGNvdW50ZXJDb250ZW50VGV4dC50ZXh0Q29udGVudCA9IG1lYWxzQ291bnRlcihbLi4ubWVhbHNdKTtcbiAgLy8gU2VsZWN0IGFsbCBsaWtlcyBlbGVtZW50XG4gIGNvbnN0IHRleHRMaWtlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQtbGlrZXMtdHh0Jyk7XG4gIFsuLi50ZXh0TGlrZXNdLmZvckVhY2goYXN5bmMgKHRleHRMaWtlKSA9PiB7XG4gICAgYXdhaXQgc2hvd2xpa2UodGV4dExpa2UpO1xuICB9KTtcbn0pO1xuXG4vLyBQb3N0IExpa2VzXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAvLyBTZWxlY3QgdGhlIGxpa2UgYnV0dG9uXG4gIGNvbnN0IGxpa2VCdG4gPSBlLnRhcmdldDtcbiAgaWYgKGxpa2VCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkLWxpa2VzJykpIHtcbiAgICAvLyBVcGRhdGUgbnVtYmVycyBvZiBsaWtlcyBvbiB0aGUgQVBJXG4gICAgY29uc3QgbWVhbElkID0gbGlrZUJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICBhd2FpdCBhZGRMaWtlKG1lYWxJZCk7XG4gICAgLy8gVXBkYXRlIG51bWJlcnMgb2YgbGlrZXMgb24gdGhlIHNjcmVlblxuICAgIGNvbnN0IHR4dGxpa2UgPSBsaWtlQnRuLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5sYXN0Q2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgIGF3YWl0IHNob3dsaWtlKHR4dGxpa2UpO1xuICB9XG59KTtcblxuY29uc3QgaGFuZGxlQ29tbWVudENsaWNrID0gYXN5bmMgKG1lYWxzKSA9PiB7XG4gIGNvbnN0IFtpZCwgbmFtZSwgY2F0ZWdvcnksIGltYWdlLCBvcmlnaW5dID0gbWVhbHM7XG4gIGF3YWl0IHBvcHVsYXRlQ29tbWVudChpZCwgbmFtZSwgY2F0ZWdvcnksIGltYWdlLCBvcmlnaW4sIHVybHMpO1xuICBjb25zdCB0aGVwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHkteS1zY3JvbGwnKTtcbiAgdGhlcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXAyJyk7XG59O1xuXG53aW5kb3cuaGFuZGxlQ29tbWVudENsaWNrID0gaGFuZGxlQ29tbWVudENsaWNrOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
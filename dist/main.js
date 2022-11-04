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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\nhtml,\nbody,\n* {\n  margin: 0.00001px;\n  padding: 0.000001px;\n}\n\n.body-y-scroll {\n  overflow-y: hidden;\n}\n\n.card-text {\n  height: 80px;\n  overflow-y: hidden;\n}\n\n.card-text::after {\n  content: \"...Read more\";\n  color: blue;\n  text-decoration: underline;\n}\n\n.shorten-text {\n  width: 80%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  position: relative;\n}\n\n/* mobile-first */\n\n.popup {\n  display: none;\n}\n\n.popup2 {\n  display: block;\n  width: 100%;\n  height: 100vh;\n  top: 0.00000111px;\n  z-index: 100;\n  overflow-y: scroll;\n  position: fixed;\n  padding: 15%;\n  background-color: burlywood;\n}\n\n.upperpopup {\n  display: flex;\n  gap: 2rem;\n}\n\n.close {\n  color: #111;\n  font-weight: bolder;\n  font-size: 30px;\n}\n\n.middlepop_simple_titles {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding-top: 0.5rem;\n}\n\n.detail {\n  display: flex;\n  gap: 0.5rem;\n  font-family: \"Lobster Two\", cursive;\n  font-weight: 400;\n}\n\n.detail_p {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  padding-bottom: 0.5rem;\n}\n\n.middlepopup_middle_detail {\n  display: flex;\n  flex-wrap: wrap;\n  border: 1px solid #111;\n  border-radius: 8px;\n  padding: 0.5rem;\n  height: 150px;\n  overflow: scroll;\n}\n\n.detail2 {\n  font-family: \"Lobster Two\", cursive;\n  font-weight: 700;\n}\n\n.popup_comment_section {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n  height: 50px;\n  gap: 1rem;\n}\n\n.detail3 {\n  font-weight: 700;\n  padding-top: 0.5rem;\n  text-align: center;\n}\n\n.date_comment {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.popup_form {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.detail4 {\n  font-weight: 700;\n  text-align: center;\n}\n\n#username {\n  padding: 1rem;\n  outline: none;\n  font-size: larger;\n  border-radius: 8px;\n}\n\n#username::placeholder {\n  color: gray;\n  font-size: larger;\n}\n\n#insight {\n  padding: 1rem;\n  outline: none;\n  height: 150px;\n  font-size: larger;\n  border-radius: 8px;\n}\n\n#insight::placeholder {\n  font-size: larger;\n}\n\n.button1 {\n  border-radius: 12px;\n  padding: 1rem;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 700;\n  font-size: x-large;\n  transition: background-color 0.5s ease;\n  cursor: pointer;\n}\n\n.button1:hover {\n  background-color: rgba(128, 128, 128, 0.856);\n  color: #fff;\n}\n\n/* desktop  */\n\n@media only screen and (min-width: 768px) {\n  .popup,\n  .popup2 {\n    padding: 5%;\n  }\n\n  .image_u {\n    width: 50%;\n  }\n\n  .upperpopup {\n    justify-content: flex-end;\n    padding: 1rem;\n  }\n\n  .middlepop_simple_titles {\n    flex-direction: row;\n    justify-content: space-between;\n    padding-bottom: 2rem;\n  }\n\n  .detail3,\n  .detail4 {\n    display: flex;\n    justify-content: center;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;;;EAGE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,0BAA0B;AAC5B;;AAEA;EACE,UAAU;EACV,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,mCAAmC;EACnC,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;EACpC,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,mCAAmC;EACnC,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,aAAa;EACb,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;EAClB,sCAAsC;EACtC,eAAe;AACjB;;AAEA;EACE,4CAA4C;EAC5C,WAAW;AACb;;AAEA,aAAa;;AAEb;EACE;;IAEE,WAAW;EACb;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,yBAAyB;IACzB,aAAa;EACf;;EAEA;IACE,mBAAmB;IACnB,8BAA8B;IAC9B,oBAAoB;EACtB;;EAEA;;IAEE,aAAa;IACb,uBAAuB;EACzB;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&family=Open+Sans:wght@300;400;500;600;700&display=swap\");\n\n* {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\nhtml,\nbody,\n* {\n  margin: 0.00001px;\n  padding: 0.000001px;\n}\n\n.body-y-scroll {\n  overflow-y: hidden;\n}\n\n.card-text {\n  height: 80px;\n  overflow-y: hidden;\n}\n\n.card-text::after {\n  content: \"...Read more\";\n  color: blue;\n  text-decoration: underline;\n}\n\n.shorten-text {\n  width: 80%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  position: relative;\n}\n\n/* mobile-first */\n\n.popup {\n  display: none;\n}\n\n.popup2 {\n  display: block;\n  width: 100%;\n  height: 100vh;\n  top: 0.00000111px;\n  z-index: 100;\n  overflow-y: scroll;\n  position: fixed;\n  padding: 15%;\n  background-color: burlywood;\n}\n\n.upperpopup {\n  display: flex;\n  gap: 2rem;\n}\n\n.close {\n  color: #111;\n  font-weight: bolder;\n  font-size: 30px;\n}\n\n.middlepop_simple_titles {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding-top: 0.5rem;\n}\n\n.detail {\n  display: flex;\n  gap: 0.5rem;\n  font-family: \"Lobster Two\", cursive;\n  font-weight: 400;\n}\n\n.detail_p {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  padding-bottom: 0.5rem;\n}\n\n.middlepopup_middle_detail {\n  display: flex;\n  flex-wrap: wrap;\n  border: 1px solid #111;\n  border-radius: 8px;\n  padding: 0.5rem;\n  height: 150px;\n  overflow: scroll;\n}\n\n.detail2 {\n  font-family: \"Lobster Two\", cursive;\n  font-weight: 700;\n}\n\n.popup_comment_section {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n  height: 50px;\n  gap: 1rem;\n}\n\n.detail3 {\n  font-weight: 700;\n  padding-top: 0.5rem;\n  text-align: center;\n}\n\n.date_comment {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.popup_form {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.detail4 {\n  font-weight: 700;\n  text-align: center;\n}\n\n#username {\n  padding: 1rem;\n  outline: none;\n  font-size: larger;\n  border-radius: 8px;\n}\n\n#username::placeholder {\n  color: gray;\n  font-size: larger;\n}\n\n#insight {\n  padding: 1rem;\n  outline: none;\n  height: 150px;\n  font-size: larger;\n  border-radius: 8px;\n}\n\n#insight::placeholder {\n  font-size: larger;\n}\n\n.button1 {\n  border-radius: 12px;\n  padding: 1rem;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 700;\n  font-size: x-large;\n  transition: background-color 0.5s ease;\n  cursor: pointer;\n}\n\n.button1:hover {\n  background-color: rgba(128, 128, 128, 0.856);\n  color: #fff;\n}\n\n/* desktop  */\n\n@media only screen and (min-width: 768px) {\n  .popup,\n  .popup2 {\n    padding: 5%;\n  }\n\n  .image_u {\n    width: 50%;\n  }\n\n  .upperpopup {\n    justify-content: flex-end;\n    padding: 1rem;\n  }\n\n  .middlepop_simple_titles {\n    flex-direction: row;\n    justify-content: space-between;\n    padding-bottom: 2rem;\n  }\n\n  .detail3,\n  .detail4 {\n    display: flex;\n    justify-content: center;\n  }\n}"],"sourceRoot":""}]);
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

/***/ "./src/modules/addData.js":
/*!********************************!*\
  !*** ./src/modules/addData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _listItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listItems.js */ "./src/modules/listItems.js");

// Using getFoodList function //
const getdata = async () => {
  // create an empty array
  const datas = [];
  // awit api data
  const foodList = await (0,_listItems_js__WEBPACK_IMPORTED_MODULE_0__.getFoodList)(_listItems_js__WEBPACK_IMPORTED_MODULE_0__.URL_API);
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

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
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

/***/ "./src/modules/listItems.js":
/*!**********************************!*\
  !*** ./src/modules/listItems.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "URL_API": () => (/* binding */ URL_API),
/* harmony export */   "getFoodList": () => (/* binding */ getFoodList)
/* harmony export */ });
const URL_API = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';

// Lookup full meal details by id
// https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
// =================================================
// List all meals by first letter
// https://www.themealdb.com/api/json/v1/1/search.php?f=b

const getFoodList = async (URL_API) => {
  const response = await fetch(URL_API);
  const json = await response.json();
  const mealList = json.meals.slice(0, 27);

  return mealList;
};



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
/* harmony import */ var _addData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addData.js */ "./src/modules/addData.js");
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.js */ "./src/modules/comments.js");
/* harmony import */ var _counterComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counterComment.js */ "./src/modules/counterComment.js");




const thebody = document.getElementById('body');

const getinstruction = async (id) => {
  const df = await (0,_addData_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const x = df.splice(0);
  const filtered = x.filter((b) => parseInt(b.id, 10) === id);
  return filtered[0].cookinginstruction;
};

const loadData = async (id) => {
  const fetcs = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/N317ounBUtSwOefLVAgO/comments?item_id=${id}`);
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

/***/ "./src/modules/showMeals.js":
/*!**********************************!*\
  !*** ./src/modules/showMeals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addData.js */ "./src/modules/addData.js");


const showMeals = async (container, pageIndex) => {
  // Get meals list
  const meals = await (0,_addData_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  // Slice only 9 meals elements
  const limitMeals = meals.slice(pageIndex, pageIndex + 9);
  // Populate meals to the screen
  limitMeals.forEach((meal) => {
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
              <h5 class="card-title shorten-text">${meal.name}</h5>
              <div>
                <button class="card-likes d-flex btn btn-danger" data-id="${meal.id}">
                  💛
                </button>
                <span class="card-likes-txt d-block me-2" data-id="${meal.id}">0 Likes</span>
              </div>
            </div>
            <a href="#" data-id="${meal.id}" onclick="handleCommentClick([${meal.id}, '${meal.name}', '${meal.category}', '${meal.image}', '${meal.origin}'])" class="btn btn-dark d-block">comments</a>
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
/* harmony import */ var _modules_populateComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/populateComment.js */ "./src/modules/populateComment.js");
/* harmony import */ var _modules_likes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/likes */ "./src/modules/likes.js");





// Constants
const urls = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/N317ounBUtSwOefLVAgO/comments';
const mealsListContainer = document.querySelector('.f-list');
const mealsNav = document.querySelector('.control');

// Populate the meals cards items
document.addEventListener('DOMContentLoaded', async () => {
  await (0,_modules_showMeals__WEBPACK_IMPORTED_MODULE_1__["default"])(mealsListContainer, 0);
});

// Populate according to the meals-nav
mealsNav.addEventListener('click', (e) => {
  e.preventDefault();
  // Get the clicked nav link index data.
  const navIndex = e.target.getAttribute('data-index');
  // Empty the list meals container from the previous cards
  mealsListContainer.innerHTML = '';
  // Generate new 9 items
  (0,_modules_showMeals__WEBPACK_IMPORTED_MODULE_1__["default"])(mealsListContainer, navIndex);
});

// Post Likes
window.addEventListener('click', async (e) => {
  // Select the like button
  const likeBtn = e.target;
  if (likeBtn.classList.contains('card-likes')) {
    // Get the meal ID
    const mealId = likeBtn.getAttribute('data-id');
    (0,_modules_likes__WEBPACK_IMPORTED_MODULE_3__.addLike)(mealId);
  }
});

const handleCommentClick = async (meals) => {
  const [id, name, category, image, origin] = meals;
  await (0,_modules_populateComment_js__WEBPACK_IMPORTED_MODULE_2__["default"])(id, name, category, image, origin, urls);
  const thepopup = document.getElementById('popup');
  document.body.classList.add('body-y-scroll');
  thepopup.classList.add('popup2');
};

// event.preventDefault();
window.handleCommentClick = handleCommentClick;
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL3NyYy9tb2R1bGVzL2FkZERhdGEuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vc3JjL21vZHVsZXMvY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vc3JjL21vZHVsZXMvY291bnRlckNvbW1lbnQuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vc3JjL21vZHVsZXMvbGlrZXMuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vc3JjL21vZHVsZXMvbGlzdEl0ZW1zLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL3NyYy9tb2R1bGVzL3BvcHVsYXRlQ29tbWVudC5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9zcmMvbW9kdWxlcy9zaG93TWVhbHMuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2thbmJhbi1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2thbmJhbi1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2thbmJhbi1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyK1R3bzp3Z2h0QDQwMDs3MDAmZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmh0bWwsXFxuYm9keSxcXG4qIHtcXG4gIG1hcmdpbjogMC4wMDAwMXB4O1xcbiAgcGFkZGluZzogMC4wMDAwMDFweDtcXG59XFxuXFxuLmJvZHkteS1zY3JvbGwge1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4uY2FyZC10ZXh0IHtcXG4gIGhlaWdodDogODBweDtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLmNhcmQtdGV4dDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIi4uLlJlYWQgbW9yZVxcXCI7XFxuICBjb2xvcjogYmx1ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uc2hvcnRlbi10ZXh0IHtcXG4gIHdpZHRoOiA4MCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBtb2JpbGUtZmlyc3QgKi9cXG5cXG4ucG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnBvcHVwMiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHRvcDogMC4wMDAwMDExMXB4O1xcbiAgei1pbmRleDogMTAwO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcGFkZGluZzogMTUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xcbn1cXG5cXG4udXBwZXJwb3B1cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICMxMTE7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4ubWlkZGxlcG9wX3NpbXBsZV90aXRsZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxufVxcblxcbi5kZXRhaWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb2JzdGVyIFR3b1xcXCIsIGN1cnNpdmU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uZGV0YWlsX3Age1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5taWRkbGVwb3B1cF9taWRkbGVfZGV0YWlsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTExO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5kZXRhaWwyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9ic3RlciBUd29cXFwiLCBjdXJzaXZlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnBvcHVwX2NvbW1lbnRfc2VjdGlvbiB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5kZXRhaWwzIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGF0ZV9jb21tZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnBvcHVwX2Zvcm0ge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZGV0YWlsNCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdXNlcm5hbWUge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI3VzZXJuYW1lOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogZ3JheTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG4jaW5zaWdodCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI2luc2lnaHQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG4uYnV0dG9uMSB7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ1dHRvbjE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjg1Nik7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLyogZGVza3RvcCAgKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAucG9wdXAsXFxuICAucG9wdXAyIHtcXG4gICAgcGFkZGluZzogNSU7XFxuICB9XFxuXFxuICAuaW1hZ2VfdSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuXFxuICAudXBwZXJwb3B1cCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuXFxuICAubWlkZGxlcG9wX3NpbXBsZV90aXRsZXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgfVxcblxcbiAgLmRldGFpbDMsXFxuICAuZGV0YWlsNCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7O0VBR0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxXQUFXO0FBQ2I7O0FBRUEsYUFBYTs7QUFFYjtFQUNFOztJQUVFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG9CQUFvQjtFQUN0Qjs7RUFFQTs7SUFFRSxhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyK1R3bzp3Z2h0QDQwMDs3MDAmZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmh0bWwsXFxuYm9keSxcXG4qIHtcXG4gIG1hcmdpbjogMC4wMDAwMXB4O1xcbiAgcGFkZGluZzogMC4wMDAwMDFweDtcXG59XFxuXFxuLmJvZHkteS1zY3JvbGwge1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4uY2FyZC10ZXh0IHtcXG4gIGhlaWdodDogODBweDtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLmNhcmQtdGV4dDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIi4uLlJlYWQgbW9yZVxcXCI7XFxuICBjb2xvcjogYmx1ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uc2hvcnRlbi10ZXh0IHtcXG4gIHdpZHRoOiA4MCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBtb2JpbGUtZmlyc3QgKi9cXG5cXG4ucG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnBvcHVwMiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHRvcDogMC4wMDAwMDExMXB4O1xcbiAgei1pbmRleDogMTAwO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcGFkZGluZzogMTUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xcbn1cXG5cXG4udXBwZXJwb3B1cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICMxMTE7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4ubWlkZGxlcG9wX3NpbXBsZV90aXRsZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxufVxcblxcbi5kZXRhaWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb2JzdGVyIFR3b1xcXCIsIGN1cnNpdmU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uZGV0YWlsX3Age1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5taWRkbGVwb3B1cF9taWRkbGVfZGV0YWlsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTExO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5kZXRhaWwyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9ic3RlciBUd29cXFwiLCBjdXJzaXZlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnBvcHVwX2NvbW1lbnRfc2VjdGlvbiB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5kZXRhaWwzIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGF0ZV9jb21tZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnBvcHVwX2Zvcm0ge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZGV0YWlsNCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdXNlcm5hbWUge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI3VzZXJuYW1lOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogZ3JheTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG4jaW5zaWdodCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI2luc2lnaHQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG4uYnV0dG9uMSB7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ1dHRvbjE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjg1Nik7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLyogZGVza3RvcCAgKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAucG9wdXAsXFxuICAucG9wdXAyIHtcXG4gICAgcGFkZGluZzogNSU7XFxuICB9XFxuXFxuICAuaW1hZ2VfdSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuXFxuICAudXBwZXJwb3B1cCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuXFxuICAubWlkZGxlcG9wX3NpbXBsZV90aXRsZXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgfVxcblxcbiAgLmRldGFpbDMsXFxuICAuZGV0YWlsNCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFVSTF9BUEksIGdldEZvb2RMaXN0IH0gZnJvbSAnLi9saXN0SXRlbXMuanMnO1xuLy8gVXNpbmcgZ2V0Rm9vZExpc3QgZnVuY3Rpb24gLy9cbmNvbnN0IGdldGRhdGEgPSBhc3luYyAoKSA9PiB7XG4gIC8vIGNyZWF0ZSBhbiBlbXB0eSBhcnJheVxuICBjb25zdCBkYXRhcyA9IFtdO1xuICAvLyBhd2l0IGFwaSBkYXRhXG4gIGNvbnN0IGZvb2RMaXN0ID0gYXdhaXQgZ2V0Rm9vZExpc3QoVVJMX0FQSSk7XG4gIC8vIGxvb3AgdG8gZ2V0IGluZGl2aWR1YWwgZGF0YSBhbmQgcG9wdWxhdGUgaW1wb3J0YW50IGRhdGEgdG8gb3VyIGFycmF5XG4gIGZvb2RMaXN0LmZvckVhY2goKGF0YSkgPT4ge1xuICAgIGNvbnN0IG5ld2FyciA9IHtcbiAgICAgIGlkOiBhdGEuaWRNZWFsLFxuICAgICAgbmFtZTogYXRhLnN0ck1lYWwsXG4gICAgICBpbWFnZTogYXRhLnN0ck1lYWxUaHVtYixcbiAgICAgIGNhdGVnb3J5OiBhdGEuc3RyQ2F0ZWdvcnksXG4gICAgICBvcmlnaW46IGF0YS5zdHJBcmVhLFxuICAgICAgY29va2luZ2luc3RydWN0aW9uOiBhdGEuc3RySW5zdHJ1Y3Rpb25zLFxuICAgIH07XG4gICAgZGF0YXMucHVzaChuZXdhcnIpO1xuICB9KTtcbiAgcmV0dXJuIGRhdGFzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0ZGF0YTsiLCJjb25zdCBjb21tZW50cyA9IChjb21tLCBkYXRhKSA9PiB7XG4gIGNvbW0uaW5uZXJIVE1MID0gJyc7XG4gIGlmIChkYXRhLmVycm9yKSB7XG4gICAgZGF0YSA9IFtdO1xuICB9XG4gIGRhdGEubWFwKChkYXRkKSA9PiB7XG4gICAgY29uc3QgZGF0ZUNvbW1lbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZUNvbW1lbnQxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGF0ZV9jb21tZW50Jyk7XG4gICAgY29uc3QgYjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdiJyk7XG4gICAgYjEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWxfcCcpO1xuICAgIGIxLmlubmVyVGV4dCA9IGAke2RhdGQuY3JlYXRpb25fZGF0ZX1gO1xuICAgIGNvbnN0IHA1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHA1LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsX3AnKTtcbiAgICBwNS5pbm5lclRleHQgPSBgJHtkYXRkLnVzZXJuYW1lfTogJHtkYXRkLmNvbW1lbnR9YDtcbiAgICBkYXRlQ29tbWVudDEuYXBwZW5kQ2hpbGQoYjEpO1xuICAgIGRhdGVDb21tZW50MS5hcHBlbmRDaGlsZChwNSk7XG4gICAgY29tbS5hcHBlbmRDaGlsZChkYXRlQ29tbWVudDEpO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWVudHM7IiwiY29uc3QgY291bnRlciA9IChoMzUsIGFuc2QpID0+IHtcbiAgY29uc3Qgc3AgPSBhbnNkLmxlbmd0aCA/IGFuc2QubGVuZ3RoIDogMDtcbiAgY29uc3Qgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4xLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3BhbmgnKTtcbiAgc3BhbjEuaW5uZXJUZXh0ID0gYENvbW1lbnRzICgke3NwfSlgO1xuICBoMzUuYXBwZW5kQ2hpbGQoc3BhbjEpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY291bnRlcjsiLCJjb25zdCBhcHBJZCA9ICdXeXU1dHNueHlQOFNVRHJobk83Zyc7XG5jb25zdCBVUkxfQVBJID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7YXBwSWR9L2xpa2VzL2A7XG5cbi8vIEFkZCBhIGxpa2VcbmNvbnN0IGFkZExpa2UgPSBhc3luYyAoaWRJdGVtKSA9PiB7XG4gIGF3YWl0IGZldGNoKFVSTF9BUEksIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpZEl0ZW0sXG4gICAgfSksXG4gIH0pO1xufTtcblxuLy8gR2V0IGxpa2VzXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkxfQVBJKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHsgYWRkTGlrZSwgZ2V0TGlrZXMgfTsiLCJjb25zdCBVUkxfQVBJID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9zZWFyY2gucGhwP2Y9Yic7XG5cbi8vIExvb2t1cCBmdWxsIG1lYWwgZGV0YWlscyBieSBpZFxuLy8gaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2xvb2t1cC5waHA/aT01Mjc3MlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTGlzdCBhbGwgbWVhbHMgYnkgZmlyc3QgbGV0dGVyXG4vLyBodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvc2VhcmNoLnBocD9mPWJcblxuY29uc3QgZ2V0Rm9vZExpc3QgPSBhc3luYyAoVVJMX0FQSSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTF9BUEkpO1xuICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBtZWFsTGlzdCA9IGpzb24ubWVhbHMuc2xpY2UoMCwgMjcpO1xuXG4gIHJldHVybiBtZWFsTGlzdDtcbn07XG5cbmV4cG9ydCB7IFVSTF9BUEksIGdldEZvb2RMaXN0IH07IiwiaW1wb3J0IGdldGRhdGEgZnJvbSAnLi9hZGREYXRhLmpzJztcbmltcG9ydCBjb21tZW50cyBmcm9tICcuL2NvbW1lbnRzLmpzJztcbmltcG9ydCBjb3VudGVyIGZyb20gJy4vY291bnRlckNvbW1lbnQuanMnO1xuXG5jb25zdCB0aGVib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKTtcblxuY29uc3QgZ2V0aW5zdHJ1Y3Rpb24gPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgZGYgPSBhd2FpdCBnZXRkYXRhKCk7XG4gIGNvbnN0IHggPSBkZi5zcGxpY2UoMCk7XG4gIGNvbnN0IGZpbHRlcmVkID0geC5maWx0ZXIoKGIpID0+IHBhcnNlSW50KGIuaWQsIDEwKSA9PT0gaWQpO1xuICByZXR1cm4gZmlsdGVyZWRbMF0uY29va2luZ2luc3RydWN0aW9uO1xufTtcblxuY29uc3QgbG9hZERhdGEgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgZmV0Y3MgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvTjMxN291bkJVdFN3T2VmTFZBZ08vY29tbWVudHM/aXRlbV9pZD0ke2lkfWApO1xuICBjb25zdCBkYXRheiA9IGZldGNzLmpzb24oKTtcbiAgcmV0dXJuIGRhdGF6LnRoZW4oKGRhdGEpID0+IGRhdGEpO1xufTtcblxuY29uc3QgcG9wdWxhdGVDb21tZW50ID0gYXN5bmMgKGlkLCBuYW1lLCBjYXRlZ29yeSwgaW1hZ2VzLCBvcmlnaW4sIHNocykgPT4ge1xuICBjb25zdCBzID0gYXdhaXQgbG9hZERhdGEoaWQpO1xuXG4gIGNvbnN0IGluc3RyID0gYXdhaXQgZ2V0aW5zdHJ1Y3Rpb24oaWQpO1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BvcHVwJyk7XG4gIHBvcHVwLnNldEF0dHJpYnV0ZSgnaWQnLCAncG9wdXAnKTtcblxuICBjb25zdCB1cHBlcnBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHVwcGVycG9wdXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd1cHBlcnBvcHVwJyk7XG5cbiAgY29uc3QgdXBwZXJwb3B1cEZpZ3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ3VyZScpO1xuICB1cHBlcnBvcHVwRmlndXJlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndXBwZXJwb3B1cF9maWd1cmUnKTtcblxuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAke2ltYWdlc31gKTtcbiAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdsZWdlbmRpbWFnZScpO1xuICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ltYWdlX3UnKTtcbiAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCAnaW1hZ2UnKTtcbiAgaW1hZ2Uuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcyNTAnKTtcblxuICB1cHBlcnBvcHVwRmlndXJlLmFwcGVuZENoaWxkKGltYWdlKTtcblxuICBjb25zdCBjbG9zZWljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNsb3NlaWNvbi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycpO1xuICBjbG9zZWljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjbG9zZV9jb250YWluZXInKTtcbiAgY2xvc2VpY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2UnKTtcblxuICBjb25zdCBjbG9zZXN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgY2xvc2Vzdmcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsbmkgbG5pLWNsb3NlIGNsb3NlJyk7XG5cbiAgY2xvc2VpY29uLmFwcGVuZENoaWxkKGNsb3Nlc3ZnKTtcblxuICB1cHBlcnBvcHVwLmFwcGVuZENoaWxkKHVwcGVycG9wdXBGaWd1cmUpO1xuICB1cHBlcnBvcHVwLmFwcGVuZENoaWxkKGNsb3NlaWNvbik7XG5cbiAgY29uc3QgbWlkZGxlcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWlkZGxlcG9wdXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtaWRkbGVwb3B1cCcpO1xuXG4gIGNvbnN0IG1pZGRsZXBvcFNpbXBsZVRpdGxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtaWRkbGVwb3BTaW1wbGVUaXRsZXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtaWRkbGVwb3Bfc2ltcGxlX3RpdGxlcycpO1xuXG4gIGNvbnN0IGgzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGgzMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbCcpO1xuICBoMzEuaW5uZXJUZXh0ID0gJ05hbWU6ICc7XG5cbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsX3AnKTtcbiAgcDEuaW5uZXJUZXh0ID0gYCR7bmFtZX1gO1xuICBoMzEuYXBwZW5kQ2hpbGQocDEpO1xuXG4gIGNvbnN0IGgzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGgzMi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbCcpO1xuICBoMzIuaW5uZXJUZXh0ID0gJ0NhdGVnb3J5OiAnO1xuXG4gIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbF9wJyk7XG4gIHAyLmlubmVyVGV4dCA9IGAke2NhdGVnb3J5fWA7XG4gIGgzMi5hcHBlbmRDaGlsZChwMik7XG5cbiAgY29uc3QgaDMzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaDMzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsJyk7XG4gIGgzMy5pbm5lclRleHQgPSAnT3JpZ2luOiAnO1xuXG4gIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbF9wJyk7XG4gIHAzLmlubmVyVGV4dCA9IGAke29yaWdpbn1gO1xuICBoMzMuYXBwZW5kQ2hpbGQocDMpO1xuXG4gIG1pZGRsZXBvcFNpbXBsZVRpdGxlcy5hcHBlbmRDaGlsZChoMzEpO1xuICBtaWRkbGVwb3BTaW1wbGVUaXRsZXMuYXBwZW5kQ2hpbGQoaDMyKTtcbiAgbWlkZGxlcG9wU2ltcGxlVGl0bGVzLmFwcGVuZENoaWxkKGgzMyk7XG5cbiAgY29uc3QgbWlkZGxlcG9wdXBNaWRkbGVEZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gIGNvbnN0IGgzNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGgzNC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbDInKTtcbiAgaDM0LmlubmVyVGV4dCA9ICdJbnN0cnVjdGlvbic7XG5cbiAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHA0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsX3AnKTtcbiAgcDQuaW5uZXJUZXh0ID0gYCR7aW5zdHJ9YDtcblxuICBtaWRkbGVwb3B1cE1pZGRsZURldGFpbC5hcHBlbmRDaGlsZChoMzQpO1xuICBtaWRkbGVwb3B1cE1pZGRsZURldGFpbC5hcHBlbmRDaGlsZChwNCk7XG4gIG1pZGRsZXBvcHVwLmFwcGVuZENoaWxkKG1pZGRsZXBvcFNpbXBsZVRpdGxlcyk7XG4gIG1pZGRsZXBvcHVwLmFwcGVuZENoaWxkKG1pZGRsZXBvcHVwTWlkZGxlRGV0YWlsKTtcblxuICBjb25zdCBwb3B1cENvbW1lbnRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICBjb25zdCBoMzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoMzUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWwgZGV0YWlsMycpO1xuICBoMzUuaW5uZXJUZXh0ID0gJyc7XG4gIGNvdW50ZXIoaDM1LCBzKTtcbiAgcG9wdXBDb21tZW50U2VjdGlvbi5hcHBlbmRDaGlsZChoMzUpO1xuXG4gIGNvbnN0IGNvbW1lbnRIb2RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb21tZW50SG9kZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb21tZW50X2hvbGRlcicpO1xuICBwb3B1cENvbW1lbnRTZWN0aW9uLmFwcGVuZENoaWxkKGNvbW1lbnRIb2Rlcik7XG4gIGNvbW1lbnRzKGNvbW1lbnRIb2Rlciwgcyk7XG5cbiAgY29uc3QgcG9wdXBGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBwb3B1cEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwb3B1cF9mb3JtJyk7XG4gIHBvcHVwRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm0nKTtcbiAgY29uc3QgaDM2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaDM2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsIGRldGFpbDQnKTtcbiAgaDM2LmlubmVyVGV4dCA9ICdBZGQgYSBDb21tZW50JztcbiAgY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB1c2VybmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndXNlcm5hbWUnKTtcbiAgdXNlcm5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWxfcCcpO1xuICB1c2VybmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VzZXJuYW1lJyk7XG4gIHVzZXJuYW1lLnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgJzUnKTtcbiAgdXNlcm5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIG5hbWUnKTtcbiAgdXNlcm5hbWUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xuICB1c2VybmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBjb25zdCBpbnNpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5zaWdodC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnaW5zaWdodCcpO1xuICBpbnNpZ2h0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsX3AnKTtcbiAgaW5zaWdodC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJyAnKTtcbiAgaW5zaWdodC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luc2lnaHQnKTtcbiAgaW5zaWdodC5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICcxJyk7XG4gIGluc2lnaHQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIG5hbWUnKTtcbiAgaW5zaWdodC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdHJ1ZSk7XG4gIGluc2lnaHQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgY29uc3QgZm9ybWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBmb3JtYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgZm9ybWJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbjEnKTtcbiAgZm9ybWJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbW1lbnQnKTtcbiAgZm9ybWJ1dHRvbi5pbm5lclRleHQgPSAnQ29tbWVudCc7XG5cbiAgcG9wdXBGb3JtLmFwcGVuZENoaWxkKGgzNik7XG4gIHBvcHVwRm9ybS5hcHBlbmRDaGlsZCh1c2VybmFtZSk7XG4gIHBvcHVwRm9ybS5hcHBlbmRDaGlsZChpbnNpZ2h0KTtcbiAgcG9wdXBGb3JtLmFwcGVuZENoaWxkKGZvcm1idXR0b24pO1xuXG4gIHBvcHVwLmFwcGVuZENoaWxkKHVwcGVycG9wdXApO1xuICBwb3B1cC5hcHBlbmRDaGlsZChtaWRkbGVwb3B1cCk7XG4gIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwQ29tbWVudFNlY3Rpb24pO1xuICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cEZvcm0pO1xuXG4gIHRoZWJvZHkuYXBwZW5kQ2hpbGQocG9wdXApO1xuXG4gIGNsb3NlaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRoZXBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwJyk7XG4gICAgdGhlcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXAyJyk7XG4gICAgdGhlYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2JvZHkteS1zY3JvbGwnKTtcbiAgfSk7XG5cbiAgY29uc3QgZm9ybXNkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcbiAgZm9ybXNkLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB0aGVmZXRjaCA9IGF3YWl0IGZldGNoKHNocywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGl0ZW1faWQ6IGlkLFxuICAgICAgICB1c2VybmFtZTogZm9ybXNkLnVzZXJuYW1lLnZhbHVlLFxuICAgICAgICBjb21tZW50OiBmb3Jtc2QuaW5zaWdodC52YWx1ZSxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zdCBteXN0YXR1cyA9IHRoZWZldGNoLnN0YXR1cztcbiAgICBpZiAobXlzdGF0dXMgPT09IDIwMSkge1xuICAgICAgY29tbWVudEhvZGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgaDM1LmlubmVySFRNTCA9ICcnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKS5yZXNldCgpO1xuICAgICAgY29uc3QgcCA9IGF3YWl0IGxvYWREYXRhKGlkKTtcbiAgICAgIGNvbW1lbnRzKGNvbW1lbnRIb2RlciwgcCk7XG4gICAgICBjb3VudGVyKGgzNSwgcCk7XG4gICAgfVxuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBwb3B1bGF0ZUNvbW1lbnQ7IiwiaW1wb3J0IGdldGRhdGEgZnJvbSAnLi9hZGREYXRhLmpzJztcblxuY29uc3Qgc2hvd01lYWxzID0gYXN5bmMgKGNvbnRhaW5lciwgcGFnZUluZGV4KSA9PiB7XG4gIC8vIEdldCBtZWFscyBsaXN0XG4gIGNvbnN0IG1lYWxzID0gYXdhaXQgZ2V0ZGF0YSgpO1xuICAvLyBTbGljZSBvbmx5IDkgbWVhbHMgZWxlbWVudHNcbiAgY29uc3QgbGltaXRNZWFscyA9IG1lYWxzLnNsaWNlKHBhZ2VJbmRleCwgcGFnZUluZGV4ICsgOSk7XG4gIC8vIFBvcHVsYXRlIG1lYWxzIHRvIHRoZSBzY3JlZW5cbiAgbGltaXRNZWFscy5mb3JFYWNoKChtZWFsKSA9PiB7XG4gICAgY29uc3QgbWVhbFRlbXBsYXRlID0gYFxuICAgICAgPGxpIGNsYXNzPVwiY29sLTEyIGNvbC1zbS02IGNvbC1sZy00IHAtM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jYXJkIHwgY2FyZCBtLTBcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIke21lYWwuaW1hZ2V9XCJcbiAgICAgICAgICAgIGNsYXNzPVwiY2FyZC1pbWctdG9wXCJcbiAgICAgICAgICAgIGFsdD1cIiR7bWVhbC5uYW1lfSBpbWFnZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1kZXRhaWxzIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBwYi0zXCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGUgc2hvcnRlbi10ZXh0XCI+JHttZWFsLm5hbWV9PC9oNT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FyZC1saWtlcyBkLWZsZXggYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLWlkPVwiJHttZWFsLmlkfVwiPlxuICAgICAgICAgICAgICAgICAg8J+Sm1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZC1saWtlcy10eHQgZC1ibG9jayBtZS0yXCIgZGF0YS1pZD1cIiR7bWVhbC5pZH1cIj4wIExpa2VzPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWlkPVwiJHttZWFsLmlkfVwiIG9uY2xpY2s9XCJoYW5kbGVDb21tZW50Q2xpY2soWyR7bWVhbC5pZH0sICcke21lYWwubmFtZX0nLCAnJHttZWFsLmNhdGVnb3J5fScsICcke21lYWwuaW1hZ2V9JywgJyR7bWVhbC5vcmlnaW59J10pXCIgY2xhc3M9XCJidG4gYnRuLWRhcmsgZC1ibG9ja1wiPmNvbW1lbnRzPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgYDtcblxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgKz0gbWVhbFRlbXBsYXRlO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dNZWFsczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBzaG93TWVhbHMgZnJvbSAnLi9tb2R1bGVzL3Nob3dNZWFscyc7XG5pbXBvcnQgcG9wdWxhdGVDb21tZW50IGZyb20gJy4vbW9kdWxlcy9wb3B1bGF0ZUNvbW1lbnQuanMnO1xuaW1wb3J0IHsgYWRkTGlrZSB9IGZyb20gJy4vbW9kdWxlcy9saWtlcyc7XG5cbi8vIENvbnN0YW50c1xuY29uc3QgdXJscyA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9OMzE3b3VuQlV0U3dPZWZMVkFnTy9jb21tZW50cyc7XG5jb25zdCBtZWFsc0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZi1saXN0Jyk7XG5jb25zdCBtZWFsc05hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sJyk7XG5cbi8vIFBvcHVsYXRlIHRoZSBtZWFscyBjYXJkcyBpdGVtc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jICgpID0+IHtcbiAgYXdhaXQgc2hvd01lYWxzKG1lYWxzTGlzdENvbnRhaW5lciwgMCk7XG59KTtcblxuLy8gUG9wdWxhdGUgYWNjb3JkaW5nIHRvIHRoZSBtZWFscy1uYXZcbm1lYWxzTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyBHZXQgdGhlIGNsaWNrZWQgbmF2IGxpbmsgaW5kZXggZGF0YS5cbiAgY29uc3QgbmF2SW5kZXggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcbiAgLy8gRW1wdHkgdGhlIGxpc3QgbWVhbHMgY29udGFpbmVyIGZyb20gdGhlIHByZXZpb3VzIGNhcmRzXG4gIG1lYWxzTGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgLy8gR2VuZXJhdGUgbmV3IDkgaXRlbXNcbiAgc2hvd01lYWxzKG1lYWxzTGlzdENvbnRhaW5lciwgbmF2SW5kZXgpO1xufSk7XG5cbi8vIFBvc3QgTGlrZXNcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gIC8vIFNlbGVjdCB0aGUgbGlrZSBidXR0b25cbiAgY29uc3QgbGlrZUJ0biA9IGUudGFyZ2V0O1xuICBpZiAobGlrZUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmQtbGlrZXMnKSkge1xuICAgIC8vIEdldCB0aGUgbWVhbCBJRFxuICAgIGNvbnN0IG1lYWxJZCA9IGxpa2VCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgYWRkTGlrZShtZWFsSWQpO1xuICB9XG59KTtcblxuY29uc3QgaGFuZGxlQ29tbWVudENsaWNrID0gYXN5bmMgKG1lYWxzKSA9PiB7XG4gIGNvbnN0IFtpZCwgbmFtZSwgY2F0ZWdvcnksIGltYWdlLCBvcmlnaW5dID0gbWVhbHM7XG4gIGF3YWl0IHBvcHVsYXRlQ29tbWVudChpZCwgbmFtZSwgY2F0ZWdvcnksIGltYWdlLCBvcmlnaW4sIHVybHMpO1xuICBjb25zdCB0aGVwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHkteS1zY3JvbGwnKTtcbiAgdGhlcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXAyJyk7XG59O1xuXG4vLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xud2luZG93LmhhbmRsZUNvbW1lbnRDbGljayA9IGhhbmRsZUNvbW1lbnRDbGljazsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
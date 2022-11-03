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
    txtLike.innerHTML = `${numberLikes[0].likes} Likes`;
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
              <h5 class="card-title shorten-text">${meal.name}</h5>
              <div>
                <button class="card-likes d-flex btn btn-danger" data-id="${meal.id}">
                  💛
                </button>
                <span class="card-likes-txt d-block me-2" data-id="${meal.id}">0 Likes</span>
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
/* harmony import */ var _modules_populateComment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/populateComment.js */ "./src/modules/populateComment.js");






// Constants
const urls = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/N317ounBUtSwOefLVAgO/comments';
const mealsListContainer = document.querySelector('.f-list');

// Populate the meals cards items
document.addEventListener('DOMContentLoaded', async () => {
  await (0,_modules_showMeals__WEBPACK_IMPORTED_MODULE_1__["default"])(mealsListContainer);
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
    const txtlike = likeBtn.nextElementSibling;
    await (0,_modules_showLike__WEBPACK_IMPORTED_MODULE_3__["default"])(txtlike);
  }
});

const handleCommentClick = async (meals) => {
  const [id, name, category, image, origin] = meals;
  await (0,_modules_populateComment_js__WEBPACK_IMPORTED_MODULE_4__["default"])(id, name, category, image, origin, urls);
  const thepopup = document.getElementById('popup');
  document.body.classList.add('body-y-scroll');
  thepopup.classList.add('popup2');
};

// event.preventDefault();
window.handleCommentClick = handleCommentClick;
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLDREQUFPO0FBQ2pCO0FBQ0E7QUFDQSxVQUFVLDZEQUFRO0FBQ2xCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsUUFBUSx1RUFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL3NyYy9tb2R1bGVzL2NvdW50ZXJDb21tZW50LmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL3NyYy9tb2R1bGVzL2ZldGNoTGlrZXMuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vc3JjL21vZHVsZXMvZmV0Y2hNZWFscy5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9zcmMvbW9kdWxlcy9tZWFsc0xpc3QuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vc3JjL21vZHVsZXMvcG9wdWxhdGVDb21tZW50LmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL3NyYy9tb2R1bGVzL3Nob3dMaWtlLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL3NyYy9tb2R1bGVzL3Nob3dNZWFscy5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2thbmJhbi1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXIrVHdvOndnaHRANDAwOzcwMCZmYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5LFxcbioge1xcbiAgbWFyZ2luOiAwLjAwMDAxcHg7XFxuICBwYWRkaW5nOiAwLjAwMDAwMXB4O1xcbn1cXG5cXG4uYm9keS15LXNjcm9sbCB7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi5jYXJkLXRleHQge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4uY2FyZC10ZXh0OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiLi4uUmVhZCBtb3JlXFxcIjtcXG4gIGNvbG9yOiBibHVlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5zaG9ydGVuLXRleHQge1xcbiAgd2lkdGg6IDgwJTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIG1vYmlsZS1maXJzdCAqL1xcblxcbi5wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucG9wdXAyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdG9wOiAwLjAwMDAwMTExcHg7XFxuICB6LWluZGV4OiAxMDA7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBwYWRkaW5nOiAxNSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XFxufVxcblxcbi51cHBlcnBvcHVwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5jbG9zZSB7XFxuICBjb2xvcjogIzExMTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5taWRkbGVwb3Bfc2ltcGxlX3RpdGxlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG59XFxuXFxuLmRldGFpbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxuICBmb250LWZhbWlseTogXFxcIkxvYnN0ZXIgVHdvXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5kZXRhaWxfcCB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLm1pZGRsZXBvcHVwX21pZGRsZV9kZXRhaWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMTE7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLmRldGFpbDIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb2JzdGVyIFR3b1xcXCIsIGN1cnNpdmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ucG9wdXBfY29tbWVudF9zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmRldGFpbDMge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kYXRlX2NvbW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ucG9wdXBfZm9ybSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5kZXRhaWw0IHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN1c2VybmFtZSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jdXNlcm5hbWU6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiBncmF5O1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbiNpbnNpZ2h0IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jaW5zaWdodDo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi5idXR0b24xIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnV0dG9uMTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuODU2KTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4vKiBkZXNrdG9wICAqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5wb3B1cCxcXG4gIC5wb3B1cDIge1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gIH1cXG5cXG4gIC5pbWFnZV91IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC51cHBlcnBvcHVwIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG5cXG4gIC5taWRkbGVwb3Bfc2ltcGxlX3RpdGxlcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICB9XFxuXFxuICAuZGV0YWlsMyxcXG4gIC5kZXRhaWw0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBOzs7RUFHRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQ0FBbUM7RUFDbkMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLFdBQVc7QUFDYjs7QUFFQSxhQUFhOztBQUViO0VBQ0U7O0lBRUUsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsb0JBQW9CO0VBQ3RCOztFQUVBOztJQUVFLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXIrVHdvOndnaHRANDAwOzcwMCZmYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5LFxcbioge1xcbiAgbWFyZ2luOiAwLjAwMDAxcHg7XFxuICBwYWRkaW5nOiAwLjAwMDAwMXB4O1xcbn1cXG5cXG4uYm9keS15LXNjcm9sbCB7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi5jYXJkLXRleHQge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4uY2FyZC10ZXh0OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiLi4uUmVhZCBtb3JlXFxcIjtcXG4gIGNvbG9yOiBibHVlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5zaG9ydGVuLXRleHQge1xcbiAgd2lkdGg6IDgwJTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIG1vYmlsZS1maXJzdCAqL1xcblxcbi5wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucG9wdXAyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdG9wOiAwLjAwMDAwMTExcHg7XFxuICB6LWluZGV4OiAxMDA7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBwYWRkaW5nOiAxNSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XFxufVxcblxcbi51cHBlcnBvcHVwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5jbG9zZSB7XFxuICBjb2xvcjogIzExMTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5taWRkbGVwb3Bfc2ltcGxlX3RpdGxlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG59XFxuXFxuLmRldGFpbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxuICBmb250LWZhbWlseTogXFxcIkxvYnN0ZXIgVHdvXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5kZXRhaWxfcCB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLm1pZGRsZXBvcHVwX21pZGRsZV9kZXRhaWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMTE7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLmRldGFpbDIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb2JzdGVyIFR3b1xcXCIsIGN1cnNpdmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ucG9wdXBfY29tbWVudF9zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmRldGFpbDMge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kYXRlX2NvbW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ucG9wdXBfZm9ybSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5kZXRhaWw0IHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN1c2VybmFtZSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jdXNlcm5hbWU6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiBncmF5O1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbiNpbnNpZ2h0IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jaW5zaWdodDo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi5idXR0b24xIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnV0dG9uMTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuODU2KTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4vKiBkZXNrdG9wICAqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5wb3B1cCxcXG4gIC5wb3B1cDIge1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gIH1cXG5cXG4gIC5pbWFnZV91IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC51cHBlcnBvcHVwIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG5cXG4gIC5taWRkbGVwb3Bfc2ltcGxlX3RpdGxlcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICB9XFxuXFxuICAuZGV0YWlsMyxcXG4gIC5kZXRhaWw0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29tbWVudHMgPSAoY29tbSwgZGF0YSkgPT4ge1xuICBjb21tLmlubmVySFRNTCA9ICcnO1xuICBpZiAoZGF0YS5lcnJvcikge1xuICAgIGRhdGEgPSBbXTtcbiAgfVxuICBkYXRhLm1hcCgoZGF0ZCkgPT4ge1xuICAgIGNvbnN0IGRhdGVDb21tZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGVDb21tZW50MS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RhdGVfY29tbWVudCcpO1xuICAgIGNvbnN0IGIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYicpO1xuICAgIGIxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsX3AnKTtcbiAgICBiMS5pbm5lclRleHQgPSBgJHtkYXRkLmNyZWF0aW9uX2RhdGV9YDtcbiAgICBjb25zdCBwNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwNS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbF9wJyk7XG4gICAgcDUuaW5uZXJUZXh0ID0gYCR7ZGF0ZC51c2VybmFtZX06ICR7ZGF0ZC5jb21tZW50fWA7XG4gICAgZGF0ZUNvbW1lbnQxLmFwcGVuZENoaWxkKGIxKTtcbiAgICBkYXRlQ29tbWVudDEuYXBwZW5kQ2hpbGQocDUpO1xuICAgIGNvbW0uYXBwZW5kQ2hpbGQoZGF0ZUNvbW1lbnQxKTtcblxuICAgIHJldHVybiBudWxsO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnRzOyIsImNvbnN0IGNvdW50ZXIgPSAoaDM1LCBhbnNkKSA9PiB7XG4gIGNvbnN0IHNwID0gYW5zZC5sZW5ndGggPyBhbnNkLmxlbmd0aCA6IDA7XG4gIGNvbnN0IHNwYW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NwYW5oJyk7XG4gIHNwYW4xLmlubmVyVGV4dCA9IGBDb21tZW50cyAoJHtzcH0pYDtcbiAgaDM1LmFwcGVuZENoaWxkKHNwYW4xKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXI7IiwiY29uc3QgYXBwSWQgPSAnV3l1NXRzbnh5UDhTVURyaG5PN2cnO1xuY29uc3QgVVJMX0FQSSA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwcElkfS9saWtlcy9gO1xuXG4vLyBBZGQgYSBsaWtlXG5jb25zdCBhZGRMaWtlID0gYXN5bmMgKGlkSXRlbSkgPT4ge1xuICBhd2FpdCBmZXRjaChVUkxfQVBJLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaWRJdGVtLFxuICAgIH0pLFxuICB9KTtcbn07XG5cbi8vIEdldCBsaWtlc1xuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMX0FQSSk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCB7IGFkZExpa2UsIGdldExpa2VzIH07IiwiY29uc3QgVVJMX0FQSSA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvc2VhcmNoLnBocD9mPWInO1xuXG5jb25zdCBnZXRGb29kTGlzdCA9IGFzeW5jIChVUkxfQVBJKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMX0FQSSk7XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IG1lYWxMaXN0ID0ganNvbi5tZWFscy5zbGljZSgwLCAxOCk7XG5cbiAgcmV0dXJuIG1lYWxMaXN0O1xufTtcblxuZXhwb3J0IHsgVVJMX0FQSSwgZ2V0Rm9vZExpc3QgfTsiLCJpbXBvcnQgeyBVUkxfQVBJLCBnZXRGb29kTGlzdCB9IGZyb20gJy4vZmV0Y2hNZWFscy5qcyc7XG4vLyBVc2luZyBnZXRGb29kTGlzdCBmdW5jdGlvbiAvL1xuY29uc3QgZ2V0ZGF0YSA9IGFzeW5jICgpID0+IHtcbiAgLy8gY3JlYXRlIGFuIGVtcHR5IGFycmF5XG4gIGNvbnN0IGRhdGFzID0gW107XG4gIC8vIGF3aXQgYXBpIGRhdGFcbiAgY29uc3QgZm9vZExpc3QgPSBhd2FpdCBnZXRGb29kTGlzdChVUkxfQVBJKTtcbiAgLy8gbG9vcCB0byBnZXQgaW5kaXZpZHVhbCBkYXRhIGFuZCBwb3B1bGF0ZSBpbXBvcnRhbnQgZGF0YSB0byBvdXIgYXJyYXlcbiAgZm9vZExpc3QuZm9yRWFjaCgoYXRhKSA9PiB7XG4gICAgY29uc3QgbmV3YXJyID0ge1xuICAgICAgaWQ6IGF0YS5pZE1lYWwsXG4gICAgICBuYW1lOiBhdGEuc3RyTWVhbCxcbiAgICAgIGltYWdlOiBhdGEuc3RyTWVhbFRodW1iLFxuICAgICAgY2F0ZWdvcnk6IGF0YS5zdHJDYXRlZ29yeSxcbiAgICAgIG9yaWdpbjogYXRhLnN0ckFyZWEsXG4gICAgICBjb29raW5naW5zdHJ1Y3Rpb246IGF0YS5zdHJJbnN0cnVjdGlvbnMsXG4gICAgfTtcbiAgICBkYXRhcy5wdXNoKG5ld2Fycik7XG4gIH0pO1xuICByZXR1cm4gZGF0YXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRkYXRhOyIsImltcG9ydCBnZXRkYXRhIGZyb20gJy4vbWVhbHNMaXN0LmpzJztcbmltcG9ydCBjb21tZW50cyBmcm9tICcuL2NvbW1lbnRzLmpzJztcbmltcG9ydCBjb3VudGVyIGZyb20gJy4vY291bnRlckNvbW1lbnQuanMnO1xuXG5jb25zdCB0aGVib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKTtcblxuY29uc3QgZ2V0aW5zdHJ1Y3Rpb24gPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgZGYgPSBhd2FpdCBnZXRkYXRhKCk7XG4gIGNvbnN0IHggPSBkZi5zcGxpY2UoMCk7XG4gIGNvbnN0IGZpbHRlcmVkID0geC5maWx0ZXIoKGIpID0+IHBhcnNlSW50KGIuaWQsIDEwKSA9PT0gaWQpO1xuICByZXR1cm4gZmlsdGVyZWRbMF0uY29va2luZ2luc3RydWN0aW9uO1xufTtcblxuY29uc3QgbG9hZERhdGEgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgZmV0Y3MgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvTjMxN291bkJVdFN3T2VmTFZBZ08vY29tbWVudHM/aXRlbV9pZD0ke2lkfWAsXG4gICk7XG4gIGNvbnN0IGRhdGF6ID0gZmV0Y3MuanNvbigpO1xuICByZXR1cm4gZGF0YXoudGhlbigoZGF0YSkgPT4gZGF0YSk7XG59O1xuXG5jb25zdCBwb3B1bGF0ZUNvbW1lbnQgPSBhc3luYyAoaWQsIG5hbWUsIGNhdGVnb3J5LCBpbWFnZXMsIG9yaWdpbiwgc2hzKSA9PiB7XG4gIGNvbnN0IHMgPSBhd2FpdCBsb2FkRGF0YShpZCk7XG5cbiAgY29uc3QgaW5zdHIgPSBhd2FpdCBnZXRpbnN0cnVjdGlvbihpZCk7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBvcHVwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9wdXAnKTtcbiAgcG9wdXAuc2V0QXR0cmlidXRlKCdpZCcsICdwb3B1cCcpO1xuXG4gIGNvbnN0IHVwcGVycG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdXBwZXJwb3B1cC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3VwcGVycG9wdXAnKTtcblxuICBjb25zdCB1cHBlcnBvcHVwRmlndXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmlndXJlJyk7XG4gIHVwcGVycG9wdXBGaWd1cmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd1cHBlcnBvcHVwX2ZpZ3VyZScpO1xuXG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7aW1hZ2VzfWApO1xuICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xlZ2VuZGltYWdlJyk7XG4gIGltYWdlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW1hZ2VfdScpO1xuICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdpbWFnZScpO1xuICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzI1MCcpO1xuXG4gIHVwcGVycG9wdXBGaWd1cmUuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gIGNvbnN0IGNsb3NlaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY2xvc2VpY29uLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyk7XG4gIGNsb3NlaWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nsb3NlX2NvbnRhaW5lcicpO1xuICBjbG9zZWljb24uc2V0QXR0cmlidXRlKCdpZCcsICdjbG9zZScpO1xuXG4gIGNvbnN0IGNsb3Nlc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjbG9zZXN2Zy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xuaSBsbmktY2xvc2UgY2xvc2UnKTtcblxuICBjbG9zZWljb24uYXBwZW5kQ2hpbGQoY2xvc2VzdmcpO1xuXG4gIHVwcGVycG9wdXAuYXBwZW5kQ2hpbGQodXBwZXJwb3B1cEZpZ3VyZSk7XG4gIHVwcGVycG9wdXAuYXBwZW5kQ2hpbGQoY2xvc2VpY29uKTtcblxuICBjb25zdCBtaWRkbGVwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtaWRkbGVwb3B1cC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21pZGRsZXBvcHVwJyk7XG5cbiAgY29uc3QgbWlkZGxlcG9wU2ltcGxlVGl0bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1pZGRsZXBvcFNpbXBsZVRpdGxlcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21pZGRsZXBvcF9zaW1wbGVfdGl0bGVzJyk7XG5cbiAgY29uc3QgaDMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaDMxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsJyk7XG4gIGgzMS5pbm5lclRleHQgPSAnTmFtZTogJztcblxuICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWxfcCcpO1xuICBwMS5pbm5lclRleHQgPSBgJHtuYW1lfWA7XG4gIGgzMS5hcHBlbmRDaGlsZChwMSk7XG5cbiAgY29uc3QgaDMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaDMyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsJyk7XG4gIGgzMi5pbm5lclRleHQgPSAnQ2F0ZWdvcnk6ICc7XG5cbiAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsX3AnKTtcbiAgcDIuaW5uZXJUZXh0ID0gYCR7Y2F0ZWdvcnl9YDtcbiAgaDMyLmFwcGVuZENoaWxkKHAyKTtcblxuICBjb25zdCBoMzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoMzMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWwnKTtcbiAgaDMzLmlubmVyVGV4dCA9ICdPcmlnaW46ICc7XG5cbiAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsX3AnKTtcbiAgcDMuaW5uZXJUZXh0ID0gYCR7b3JpZ2lufWA7XG4gIGgzMy5hcHBlbmRDaGlsZChwMyk7XG5cbiAgbWlkZGxlcG9wU2ltcGxlVGl0bGVzLmFwcGVuZENoaWxkKGgzMSk7XG4gIG1pZGRsZXBvcFNpbXBsZVRpdGxlcy5hcHBlbmRDaGlsZChoMzIpO1xuICBtaWRkbGVwb3BTaW1wbGVUaXRsZXMuYXBwZW5kQ2hpbGQoaDMzKTtcblxuICBjb25zdCBtaWRkbGVwb3B1cE1pZGRsZURldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgY29uc3QgaDM0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaDM0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsMicpO1xuICBoMzQuaW5uZXJUZXh0ID0gJ0luc3RydWN0aW9uJztcblxuICBjb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWxfcCcpO1xuICBwNC5pbm5lclRleHQgPSBgJHtpbnN0cn1gO1xuXG4gIG1pZGRsZXBvcHVwTWlkZGxlRGV0YWlsLmFwcGVuZENoaWxkKGgzNCk7XG4gIG1pZGRsZXBvcHVwTWlkZGxlRGV0YWlsLmFwcGVuZENoaWxkKHA0KTtcbiAgbWlkZGxlcG9wdXAuYXBwZW5kQ2hpbGQobWlkZGxlcG9wU2ltcGxlVGl0bGVzKTtcbiAgbWlkZGxlcG9wdXAuYXBwZW5kQ2hpbGQobWlkZGxlcG9wdXBNaWRkbGVEZXRhaWwpO1xuXG4gIGNvbnN0IHBvcHVwQ29tbWVudFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gIGNvbnN0IGgzNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGgzNS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbCBkZXRhaWwzJyk7XG4gIGgzNS5pbm5lclRleHQgPSAnJztcbiAgY291bnRlcihoMzUsIHMpO1xuICBwb3B1cENvbW1lbnRTZWN0aW9uLmFwcGVuZENoaWxkKGgzNSk7XG5cbiAgY29uc3QgY29tbWVudEhvZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbW1lbnRIb2Rlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbW1lbnRfaG9sZGVyJyk7XG4gIHBvcHVwQ29tbWVudFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29tbWVudEhvZGVyKTtcbiAgY29tbWVudHMoY29tbWVudEhvZGVyLCBzKTtcblxuICBjb25zdCBwb3B1cEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIHBvcHVwRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BvcHVwX2Zvcm0nKTtcbiAgcG9wdXBGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybScpO1xuICBjb25zdCBoMzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoMzYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWwgZGV0YWlsNCcpO1xuICBoMzYuaW5uZXJUZXh0ID0gJ0FkZCBhIENvbW1lbnQnO1xuICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHVzZXJuYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICd1c2VybmFtZScpO1xuICB1c2VybmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbF9wJyk7XG4gIHVzZXJuYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAndXNlcm5hbWUnKTtcbiAgdXNlcm5hbWUuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAnNScpO1xuICB1c2VybmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgbmFtZScpO1xuICB1c2VybmFtZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdHJ1ZSk7XG4gIHVzZXJuYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGNvbnN0IGluc2lnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnNpZ2h0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdpbnNpZ2h0Jyk7XG4gIGluc2lnaHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWxfcCcpO1xuICBpbnNpZ2h0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnICcpO1xuICBpbnNpZ2h0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5zaWdodCcpO1xuICBpbnNpZ2h0LnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgJzEnKTtcbiAgaW5zaWdodC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgbmFtZScpO1xuICBpbnNpZ2h0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcbiAgaW5zaWdodC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBjb25zdCBmb3JtYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGZvcm1idXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBmb3JtYnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnV0dG9uMScpO1xuICBmb3JtYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tbWVudCcpO1xuICBmb3JtYnV0dG9uLmlubmVyVGV4dCA9ICdDb21tZW50JztcblxuICBwb3B1cEZvcm0uYXBwZW5kQ2hpbGQoaDM2KTtcbiAgcG9wdXBGb3JtLmFwcGVuZENoaWxkKHVzZXJuYW1lKTtcbiAgcG9wdXBGb3JtLmFwcGVuZENoaWxkKGluc2lnaHQpO1xuICBwb3B1cEZvcm0uYXBwZW5kQ2hpbGQoZm9ybWJ1dHRvbik7XG5cbiAgcG9wdXAuYXBwZW5kQ2hpbGQodXBwZXJwb3B1cCk7XG4gIHBvcHVwLmFwcGVuZENoaWxkKG1pZGRsZXBvcHVwKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBDb21tZW50U2VjdGlvbik7XG4gIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwRm9ybSk7XG5cbiAgdGhlYm9keS5hcHBlbmRDaGlsZChwb3B1cCk7XG5cbiAgY2xvc2VpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGhlcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAnKTtcbiAgICB0aGVwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cDInKTtcbiAgICB0aGVib2R5LmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYm9keS15LXNjcm9sbCcpO1xuICB9KTtcblxuICBjb25zdCBmb3Jtc2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuICBmb3Jtc2QuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHRoZWZldGNoID0gYXdhaXQgZmV0Y2goc2hzLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogaWQsXG4gICAgICAgIHVzZXJuYW1lOiBmb3Jtc2QudXNlcm5hbWUudmFsdWUsXG4gICAgICAgIGNvbW1lbnQ6IGZvcm1zZC5pbnNpZ2h0LnZhbHVlLFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IG15c3RhdHVzID0gdGhlZmV0Y2guc3RhdHVzO1xuICAgIGlmIChteXN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICBjb21tZW50SG9kZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICBoMzUuaW5uZXJIVE1MID0gJyc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpLnJlc2V0KCk7XG4gICAgICBjb25zdCBwID0gYXdhaXQgbG9hZERhdGEoaWQpO1xuICAgICAgY29tbWVudHMoY29tbWVudEhvZGVyLCBwKTtcbiAgICAgIGNvdW50ZXIoaDM1LCBwKTtcbiAgICB9XG4gIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHBvcHVsYXRlQ29tbWVudDsiLCJpbXBvcnQgeyBnZXRMaWtlcyB9IGZyb20gJy4vZmV0Y2hMaWtlcyc7XG5cbmNvbnN0IHNob3dsaWtlID0gYXN5bmMgKHR4dExpa2UpID0+IHtcbiAgY29uc3QgbWVhbElkID0gdHh0TGlrZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgY29uc3QgbGlrZXNMaXN0ID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgY29uc3QgbnVtYmVyTGlrZXMgPSBsaWtlc0xpc3QuZmlsdGVyKChsaWtlT2JqKSA9PiBsaWtlT2JqLml0ZW1faWQgPT09IG1lYWxJZCk7XG4gIGlmIChudW1iZXJMaWtlcy5sZW5ndGggPiAwKSB7XG4gICAgdHh0TGlrZS5pbm5lckhUTUwgPSBgJHtudW1iZXJMaWtlc1swXS5saWtlc30gTGlrZXNgO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93bGlrZTsiLCJpbXBvcnQgZ2V0ZGF0YSBmcm9tICcuL21lYWxzTGlzdCc7XG5cbmNvbnN0IHNob3dNZWFscyA9IGFzeW5jIChjb250YWluZXIpID0+IHtcbiAgLy8gR2V0IG1lYWxzIGxpc3RcbiAgY29uc3QgbWVhbHMgPSBhd2FpdCBnZXRkYXRhKCk7XG5cbiAgLy8gUG9wdWxhdGUgbWVhbHMgdG8gdGhlIHNjcmVlblxuICBtZWFscy5mb3JFYWNoKChtZWFsKSA9PiB7XG4gICAgY29uc3QgbWVhbFRlbXBsYXRlID0gYFxuICAgICAgPGxpIGNsYXNzPVwiY29sLTEyIGNvbC1zbS02IGNvbC1sZy00IHAtM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jYXJkIHwgY2FyZCBtLTBcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIke21lYWwuaW1hZ2V9XCJcbiAgICAgICAgICAgIGNsYXNzPVwiY2FyZC1pbWctdG9wXCJcbiAgICAgICAgICAgIGFsdD1cIiR7bWVhbC5uYW1lfSBpbWFnZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1kZXRhaWxzIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBwYi0zXCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGUgc2hvcnRlbi10ZXh0XCI+JHttZWFsLm5hbWV9PC9oNT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FyZC1saWtlcyBkLWZsZXggYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLWlkPVwiJHttZWFsLmlkfVwiPlxuICAgICAgICAgICAgICAgICAg8J+Sm1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZC1saWtlcy10eHQgZC1ibG9jayBtZS0yXCIgZGF0YS1pZD1cIiR7bWVhbC5pZH1cIj4wIExpa2VzPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBocmVmPVwiI1wiIGRhdGEtaWQ9XCIke21lYWwuaWR9XCIgb25jbGljaz1cImhhbmRsZUNvbW1lbnRDbGljayhbJHttZWFsLmlkfSwgJyR7bWVhbC5uYW1lfScsICcke21lYWwuY2F0ZWdvcnl9JywgJyR7bWVhbC5pbWFnZX0nLCAnJHttZWFsLm9yaWdpbn0nXSlcIiBjbGFzcz1cImJ0biBidG4tZGFyayBkLWJsb2NrIHctMTAwXCI+Y29tbWVudHM8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xpPlxuICAgIGA7XG5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MICs9IG1lYWxUZW1wbGF0ZTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93TWVhbHM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgc2hvd01lYWxzIGZyb20gJy4vbW9kdWxlcy9zaG93TWVhbHMnO1xuaW1wb3J0IHsgYWRkTGlrZSB9IGZyb20gJy4vbW9kdWxlcy9mZXRjaExpa2VzJztcbmltcG9ydCBzaG93bGlrZSBmcm9tICcuL21vZHVsZXMvc2hvd0xpa2UnO1xuaW1wb3J0IHBvcHVsYXRlQ29tbWVudCBmcm9tICcuL21vZHVsZXMvcG9wdWxhdGVDb21tZW50LmpzJztcblxuLy8gQ29uc3RhbnRzXG5jb25zdCB1cmxzID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL04zMTdvdW5CVXRTd09lZkxWQWdPL2NvbW1lbnRzJztcbmNvbnN0IG1lYWxzTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mLWxpc3QnKTtcblxuLy8gUG9wdWxhdGUgdGhlIG1lYWxzIGNhcmRzIGl0ZW1zXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBzaG93TWVhbHMobWVhbHNMaXN0Q29udGFpbmVyKTtcbiAgLy8gU2VsZWN0IGFsbCBsaWtlcyBlbGVtZW50XG4gIGNvbnN0IHRleHRMaWtlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQtbGlrZXMtdHh0Jyk7XG4gIFsuLi50ZXh0TGlrZXNdLmZvckVhY2goYXN5bmMgKHRleHRMaWtlKSA9PiB7XG4gICAgYXdhaXQgc2hvd2xpa2UodGV4dExpa2UpO1xuICB9KTtcbn0pO1xuXG4vLyBQb3N0IExpa2VzXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAvLyBTZWxlY3QgdGhlIGxpa2UgYnV0dG9uXG4gIGNvbnN0IGxpa2VCdG4gPSBlLnRhcmdldDtcbiAgaWYgKGxpa2VCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkLWxpa2VzJykpIHtcbiAgICAvLyBVcGRhdGUgbnVtYmVycyBvZiBsaWtlcyBvbiB0aGUgQVBJXG4gICAgY29uc3QgbWVhbElkID0gbGlrZUJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICBhd2FpdCBhZGRMaWtlKG1lYWxJZCk7XG4gICAgLy8gVXBkYXRlIG51bWJlcnMgb2YgbGlrZXMgb24gdGhlIHNjcmVlblxuICAgIGNvbnN0IHR4dGxpa2UgPSBsaWtlQnRuLm5leHRFbGVtZW50U2libGluZztcbiAgICBhd2FpdCBzaG93bGlrZSh0eHRsaWtlKTtcbiAgfVxufSk7XG5cbmNvbnN0IGhhbmRsZUNvbW1lbnRDbGljayA9IGFzeW5jIChtZWFscykgPT4ge1xuICBjb25zdCBbaWQsIG5hbWUsIGNhdGVnb3J5LCBpbWFnZSwgb3JpZ2luXSA9IG1lYWxzO1xuICBhd2FpdCBwb3B1bGF0ZUNvbW1lbnQoaWQsIG5hbWUsIGNhdGVnb3J5LCBpbWFnZSwgb3JpZ2luLCB1cmxzKTtcbiAgY29uc3QgdGhlcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAnKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5LXktc2Nyb2xsJyk7XG4gIHRoZXBvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwMicpO1xufTtcblxuLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbndpbmRvdy5oYW5kbGVDb21tZW50Q2xpY2sgPSBoYW5kbGVDb21tZW50Q2xpY2s7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
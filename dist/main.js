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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\nhtml,\nbody,\n* {\n  margin: 0.00001px;\n  padding: 0.000001px;\n}\n\n.body-y-scroll {\n  overflow-y: hidden;\n}\n\n.card-text {\n  height: 80px;\n  overflow-y: hidden;\n}\n\n.card-text::after {\n  content: \"...Read more\";\n  color: blue;\n  text-decoration: underline;\n}\n\n.shorten-text {\n  width: 80%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  position: relative;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.header {\n  background-color: brown;\n  width: 100%;\n  height: 5rem;\n}\n\n.header-container {\n  display: flex;\n  justify-content: space-around;\n}\n\n.contain-name {\n  display: flex;\n  gap: 10px;\n  margin: 30px 10px;\n}\n\n.contain-name h4 {\n  color: #fff;\n  font-family: serif;\n  font-weight: 500;\n  font-size: 1.5rem;\n}\n\n.contain-name i {\n  color: #008000;\n  font-size: 2rem;\n}\n\nform {\n  display: flex;\n  gap: 10px;\n  margin: 30px 10px;\n}\n\n.inputFood {\n  padding: 8px;\n  border-radius: 8px;\n  border: none;\n}\n\n.food-btn {\n  background-color: rgb(223, 137, 137);\n  color: #fff;\n  border: 2px dotted #008000;\n  width: 100%;\n  border-radius: 8px;\n  padding: 0 15px;\n}\n\n/* mobile-first */\n.popup {\n  display: none;\n}\n\n.popup2 {\n  display: block;\n  width: 100%;\n  height: 100vh;\n  top: 0.00000111px;\n  z-index: 100;\n  overflow-y: scroll;\n  position: fixed;\n  padding: 15%;\n  background-color: burlywood;\n}\n\n.upperpopup {\n  display: flex;\n  gap: 2rem;\n}\n\n.close {\n  color: #111;\n  font-weight: bolder;\n  font-size: 30px;\n}\n\n.middlepop_simple_titles {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding-top: 0.5rem;\n}\n\n.detail {\n  display: flex;\n  gap: 0.5rem;\n  font-family: 'Lobster Two', cursive;\n  font-weight: 400;\n}\n\n.detail_p {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 400;\n  padding-bottom: 0.5rem;\n}\n\n.middlepopup_middle_detail {\n  display: flex;\n  flex-wrap: wrap;\n  border: 1px solid #111;\n  border-radius: 8px;\n  padding: 0.5rem;\n  height: 150px;\n  overflow: scroll;\n}\n\n.detail2 {\n  font-family: 'Lobster Two', cursive;\n  font-weight: 700;\n}\n\n.popup_comment_section {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n  height: 50px;\n  gap: 1rem;\n}\n\n.detail3 {\n  font-weight: 700;\n  padding-top: 0.5rem;\n  text-align: center;\n}\n\n.date_comment {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.popup_form {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.detail4 {\n  font-weight: 700;\n  text-align: center;\n}\n\n#username {\n  padding: 1rem;\n  outline: none;\n  font-size: larger;\n  border-radius: 8px;\n}\n\n#username::placeholder {\n  color: gray;\n  font-size: larger;\n}\n\n#insight {\n  padding: 1rem;\n  outline: none;\n  height: 150px;\n  font-size: larger;\n  border-radius: 8px;\n}\n\n#insight::placeholder {\n  font-size: larger;\n}\n\n.button1 {\n  border-radius: 12px;\n  padding: 1rem;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n  font-size: x-large;\n  transition: background-color 0.5s ease;\n}\n\n.button1:hover {\n  background-color: rgba(128, 128, 128, 0.856);\n  color: #fff;\n}\n\n/* desktop  */\n\n@media only screen and (min-width: 768px) {\n  .popup,\n  .popup2 {\n    padding: 5%;\n  }\n\n  .image_u {\n    width: 50%;\n  }\n\n  .upperpopup {\n    justify-content: flex-end;\n    padding: 1rem;\n  }\n\n  .middlepop_simple_titles {\n    flex-direction: row;\n    justify-content: space-between;\n    padding-bottom: 2rem;\n  }\n\n  .detail3,\n  .detail4 {\n    display: flex;\n    justify-content: center;\n  }\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;;;EAGE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,0BAA0B;AAC5B;;AAEA;EACE,UAAU;EACV,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,oCAAoC;EACpC,WAAW;EACX,0BAA0B;EAC1B,WAAW;EACX,kBAAkB;EAClB,eAAe;AACjB;;AAEA,iBAAiB;AACjB;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,mCAAmC;EACnC,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;EACpC,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,mCAAmC;EACnC,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,aAAa;EACb,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;EAClB,sCAAsC;AACxC;;AAEA;EACE,4CAA4C;EAC5C,WAAW;AACb;;AAEA,aAAa;;AAEb;EACE;;IAEE,WAAW;EACb;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,yBAAyB;IACzB,aAAa;EACf;;EAEA;IACE,mBAAmB;IACnB,8BAA8B;IAC9B,oBAAoB;EACtB;;EAEA;;IAEE,aAAa;IACb,uBAAuB;EACzB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&family=Open+Sans:wght@300;400;500;600;700&display=swap');\n\n* {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\nhtml,\nbody,\n* {\n  margin: 0.00001px;\n  padding: 0.000001px;\n}\n\n.body-y-scroll {\n  overflow-y: hidden;\n}\n\n.card-text {\n  height: 80px;\n  overflow-y: hidden;\n}\n\n.card-text::after {\n  content: \"...Read more\";\n  color: blue;\n  text-decoration: underline;\n}\n\n.shorten-text {\n  width: 80%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  position: relative;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.header {\n  background-color: brown;\n  width: 100%;\n  height: 5rem;\n}\n\n.header-container {\n  display: flex;\n  justify-content: space-around;\n}\n\n.contain-name {\n  display: flex;\n  gap: 10px;\n  margin: 30px 10px;\n}\n\n.contain-name h4 {\n  color: #fff;\n  font-family: serif;\n  font-weight: 500;\n  font-size: 1.5rem;\n}\n\n.contain-name i {\n  color: #008000;\n  font-size: 2rem;\n}\n\nform {\n  display: flex;\n  gap: 10px;\n  margin: 30px 10px;\n}\n\n.inputFood {\n  padding: 8px;\n  border-radius: 8px;\n  border: none;\n}\n\n.food-btn {\n  background-color: rgb(223, 137, 137);\n  color: #fff;\n  border: 2px dotted #008000;\n  width: 100%;\n  border-radius: 8px;\n  padding: 0 15px;\n}\n\n/* mobile-first */\n.popup {\n  display: none;\n}\n\n.popup2 {\n  display: block;\n  width: 100%;\n  height: 100vh;\n  top: 0.00000111px;\n  z-index: 100;\n  overflow-y: scroll;\n  position: fixed;\n  padding: 15%;\n  background-color: burlywood;\n}\n\n.upperpopup {\n  display: flex;\n  gap: 2rem;\n}\n\n.close {\n  color: #111;\n  font-weight: bolder;\n  font-size: 30px;\n}\n\n.middlepop_simple_titles {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding-top: 0.5rem;\n}\n\n.detail {\n  display: flex;\n  gap: 0.5rem;\n  font-family: 'Lobster Two', cursive;\n  font-weight: 400;\n}\n\n.detail_p {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 400;\n  padding-bottom: 0.5rem;\n}\n\n.middlepopup_middle_detail {\n  display: flex;\n  flex-wrap: wrap;\n  border: 1px solid #111;\n  border-radius: 8px;\n  padding: 0.5rem;\n  height: 150px;\n  overflow: scroll;\n}\n\n.detail2 {\n  font-family: 'Lobster Two', cursive;\n  font-weight: 700;\n}\n\n.popup_comment_section {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n  height: 50px;\n  gap: 1rem;\n}\n\n.detail3 {\n  font-weight: 700;\n  padding-top: 0.5rem;\n  text-align: center;\n}\n\n.date_comment {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.popup_form {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.detail4 {\n  font-weight: 700;\n  text-align: center;\n}\n\n#username {\n  padding: 1rem;\n  outline: none;\n  font-size: larger;\n  border-radius: 8px;\n}\n\n#username::placeholder {\n  color: gray;\n  font-size: larger;\n}\n\n#insight {\n  padding: 1rem;\n  outline: none;\n  height: 150px;\n  font-size: larger;\n  border-radius: 8px;\n}\n\n#insight::placeholder {\n  font-size: larger;\n}\n\n.button1 {\n  border-radius: 12px;\n  padding: 1rem;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n  font-size: x-large;\n  transition: background-color 0.5s ease;\n}\n\n.button1:hover {\n  background-color: rgba(128, 128, 128, 0.856);\n  color: #fff;\n}\n\n/* desktop  */\n\n@media only screen and (min-width: 768px) {\n  .popup,\n  .popup2 {\n    padding: 5%;\n  }\n\n  .image_u {\n    width: 50%;\n  }\n\n  .upperpopup {\n    justify-content: flex-end;\n    padding: 1rem;\n  }\n\n  .middlepop_simple_titles {\n    flex-direction: row;\n    justify-content: space-between;\n    padding-bottom: 2rem;\n  }\n\n  .detail3,\n  .detail4 {\n    display: flex;\n    justify-content: center;\n  }\n}\n\n"],"sourceRoot":""}]);
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
              <div class="card-likes d-flex">
                <span class="d-block">5 likes</span>
                <span>❤️</span>
              </div>
            </div>
            <a href="#" data-id="${meal.id}" onclick="handleCommentClick([${meal.id}, '${meal.name}', '${meal.category}', '${meal.image}', '${meal.origin}'])" class="btn btn-primary d-block">comments</a>
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
/* harmony import */ var _modules_showMeals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showMeals.js */ "./src/modules/showMeals.js");
/* harmony import */ var _modules_populateComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/populateComment.js */ "./src/modules/populateComment.js");




const urls = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/N317ounBUtSwOefLVAgO/comments';

// Constants
const mealsListContainer = document.querySelector('.f-list');
const mealsNav = document.querySelector('.control');

// Populate the meals cards items
document.addEventListener('DOMContentLoaded', (0,_modules_showMeals_js__WEBPACK_IMPORTED_MODULE_1__["default"])(mealsListContainer, 0));

// Populate according to the meals-nav
mealsNav.addEventListener('click', (e) => {
  e.preventDefault();
  // Get the clicked nav link index data.
  const navIndex = e.target.getAttribute('data-index');
  // Empty the list meals container from the previous cards
  mealsListContainer.innerHTML = '';
  // Generate new 9 items
  (0,_modules_showMeals_js__WEBPACK_IMPORTED_MODULE_1__["default"])(mealsListContainer, navIndex);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWTtBQUMxSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7VUNuQ3hCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUMwQjtBQUNZOztBQUUzRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsaUVBQVM7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlFQUFTO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsUUFBUSx1RUFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL3NyYy9tb2R1bGVzL2FkZERhdGEuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vc3JjL21vZHVsZXMvY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vc3JjL21vZHVsZXMvY291bnRlckNvbW1lbnQuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vc3JjL21vZHVsZXMvbGlzdEl0ZW1zLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL3NyYy9tb2R1bGVzL3BvcHVsYXRlQ29tbWVudC5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9zcmMvbW9kdWxlcy9zaG93TWVhbHMuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2thbmJhbi1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2thbmJhbi1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2thbmJhbi1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyK1R3bzp3Z2h0QDQwMDs3MDAmZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmh0bWwsXFxuYm9keSxcXG4qIHtcXG4gIG1hcmdpbjogMC4wMDAwMXB4O1xcbiAgcGFkZGluZzogMC4wMDAwMDFweDtcXG59XFxuXFxuLmJvZHkteS1zY3JvbGwge1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4uY2FyZC10ZXh0IHtcXG4gIGhlaWdodDogODBweDtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLmNhcmQtdGV4dDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIi4uLlJlYWQgbW9yZVxcXCI7XFxuICBjb2xvcjogYmx1ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uc2hvcnRlbi10ZXh0IHtcXG4gIHdpZHRoOiA4MCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDVyZW07XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmNvbnRhaW4tbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luOiAzMHB4IDEwcHg7XFxufVxcblxcbi5jb250YWluLW5hbWUgaDQge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogc2VyaWY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jb250YWluLW5hbWUgaSB7XFxuICBjb2xvcjogIzAwODAwMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luOiAzMHB4IDEwcHg7XFxufVxcblxcbi5pbnB1dEZvb2Qge1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZm9vZC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMTM3LCAxMzcpO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDJweCBkb3R0ZWQgIzAwODAwMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbn1cXG5cXG4vKiBtb2JpbGUtZmlyc3QgKi9cXG4ucG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnBvcHVwMiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHRvcDogMC4wMDAwMDExMXB4O1xcbiAgei1pbmRleDogMTAwO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcGFkZGluZzogMTUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xcbn1cXG5cXG4udXBwZXJwb3B1cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICMxMTE7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4ubWlkZGxlcG9wX3NpbXBsZV90aXRsZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxufVxcblxcbi5kZXRhaWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdMb2JzdGVyIFR3bycsIGN1cnNpdmU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uZGV0YWlsX3Age1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5taWRkbGVwb3B1cF9taWRkbGVfZGV0YWlsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTExO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5kZXRhaWwyIHtcXG4gIGZvbnQtZmFtaWx5OiAnTG9ic3RlciBUd28nLCBjdXJzaXZlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnBvcHVwX2NvbW1lbnRfc2VjdGlvbiB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5kZXRhaWwzIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGF0ZV9jb21tZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnBvcHVwX2Zvcm0ge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZGV0YWlsNCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdXNlcm5hbWUge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI3VzZXJuYW1lOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogZ3JheTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG4jaW5zaWdodCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI2luc2lnaHQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG4uYnV0dG9uMSB7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcXG59XFxuXFxuLmJ1dHRvbjE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjg1Nik7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLyogZGVza3RvcCAgKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAucG9wdXAsXFxuICAucG9wdXAyIHtcXG4gICAgcGFkZGluZzogNSU7XFxuICB9XFxuXFxuICAuaW1hZ2VfdSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuXFxuICAudXBwZXJwb3B1cCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuXFxuICAubWlkZGxlcG9wX3NpbXBsZV90aXRsZXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgfVxcblxcbiAgLmRldGFpbDMsXFxuICAuZGV0YWlsNCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7O0VBR0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsV0FBVztBQUNiOztBQUVBLGFBQWE7O0FBRWI7RUFDRTs7SUFFRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixvQkFBb0I7RUFDdEI7O0VBRUE7O0lBRUUsYUFBYTtJQUNiLHVCQUF1QjtFQUN6QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlcitUd286d2dodEA0MDA7NzAwJmZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5odG1sLFxcbmJvZHksXFxuKiB7XFxuICBtYXJnaW46IDAuMDAwMDFweDtcXG4gIHBhZGRpbmc6IDAuMDAwMDAxcHg7XFxufVxcblxcbi5ib2R5LXktc2Nyb2xsIHtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLmNhcmQtdGV4dCB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi5jYXJkLXRleHQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIuLi5SZWFkIG1vcmVcXFwiO1xcbiAgY29sb3I6IGJsdWU7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnNob3J0ZW4tdGV4dCB7XFxuICB3aWR0aDogODAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5jb250YWluLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbjogMzBweCAxMHB4O1xcbn1cXG5cXG4uY29udGFpbi1uYW1lIGg0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY29udGFpbi1uYW1lIGkge1xcbiAgY29sb3I6ICMwMDgwMDA7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbjogMzBweCAxMHB4O1xcbn1cXG5cXG4uaW5wdXRGb29kIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmZvb2QtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDEzNywgMTM3KTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAycHggZG90dGVkICMwMDgwMDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG59XFxuXFxuLyogbW9iaWxlLWZpcnN0ICovXFxuLnBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wb3B1cDIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB0b3A6IDAuMDAwMDAxMTFweDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHBhZGRpbmc6IDE1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcXG59XFxuXFxuLnVwcGVycG9wdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjMTExO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLm1pZGRsZXBvcF9zaW1wbGVfdGl0bGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG5cXG4uZGV0YWlsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnTG9ic3RlciBUd28nLCBjdXJzaXZlO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmRldGFpbF9wIHtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ubWlkZGxlcG9wdXBfbWlkZGxlX2RldGFpbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzExMTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4uZGV0YWlsMiB7XFxuICBmb250LWZhbWlseTogJ0xvYnN0ZXIgVHdvJywgY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5wb3B1cF9jb21tZW50X3NlY3Rpb24ge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZGV0YWlsMyB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRhdGVfY29tbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5wb3B1cF9mb3JtIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmRldGFpbDQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3VzZXJuYW1lIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiN1c2VybmFtZTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IGdyYXk7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuI2luc2lnaHQge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiNpbnNpZ2h0OjpwbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuLmJ1dHRvbjEge1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2U7XFxufVxcblxcbi5idXR0b24xOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC44NTYpO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi8qIGRlc2t0b3AgICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnBvcHVwLFxcbiAgLnBvcHVwMiB7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgfVxcblxcbiAgLmltYWdlX3Uge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcblxcbiAgLnVwcGVycG9wdXAge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgfVxcblxcbiAgLm1pZGRsZXBvcF9zaW1wbGVfdGl0bGVzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gIH1cXG5cXG4gIC5kZXRhaWwzLFxcbiAgLmRldGFpbDQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBVUkxfQVBJLCBnZXRGb29kTGlzdCB9IGZyb20gJy4vbGlzdEl0ZW1zLmpzJztcbi8vIFVzaW5nIGdldEZvb2RMaXN0IGZ1bmN0aW9uIC8vXG5jb25zdCBnZXRkYXRhID0gYXN5bmMgKCkgPT4ge1xuICAvLyBjcmVhdGUgYW4gZW1wdHkgYXJyYXlcbiAgY29uc3QgZGF0YXMgPSBbXTtcbiAgLy8gYXdpdCBhcGkgZGF0YVxuICBjb25zdCBmb29kTGlzdCA9IGF3YWl0IGdldEZvb2RMaXN0KFVSTF9BUEkpO1xuICAvLyBsb29wIHRvIGdldCBpbmRpdmlkdWFsIGRhdGEgYW5kIHBvcHVsYXRlIGltcG9ydGFudCBkYXRhIHRvIG91ciBhcnJheVxuICBmb29kTGlzdC5mb3JFYWNoKChhdGEpID0+IHtcbiAgICBjb25zdCBuZXdhcnIgPSB7XG4gICAgICBpZDogYXRhLmlkTWVhbCxcbiAgICAgIG5hbWU6IGF0YS5zdHJNZWFsLFxuICAgICAgaW1hZ2U6IGF0YS5zdHJNZWFsVGh1bWIsXG4gICAgICBjYXRlZ29yeTogYXRhLnN0ckNhdGVnb3J5LFxuICAgICAgb3JpZ2luOiBhdGEuc3RyQXJlYSxcbiAgICAgIGNvb2tpbmdpbnN0cnVjdGlvbjogYXRhLnN0ckluc3RydWN0aW9ucyxcbiAgICB9O1xuICAgIGRhdGFzLnB1c2gobmV3YXJyKTtcbiAgfSk7XG4gIHJldHVybiBkYXRhcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldGRhdGE7IiwiY29uc3QgY29tbWVudHMgPSAoY29tbSwgZGF0YSkgPT4ge1xuICBjb21tLmlubmVySFRNTCA9ICcnO1xuICBpZiAoZGF0YS5lcnJvcikge1xuICAgIGRhdGEgPSBbXTtcbiAgfVxuICBkYXRhLm1hcCgoZGF0ZCkgPT4ge1xuICAgIGNvbnN0IGRhdGVDb21tZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGVDb21tZW50MS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RhdGVfY29tbWVudCcpO1xuICAgIGNvbnN0IGIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYicpO1xuICAgIGIxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsX3AnKTtcbiAgICBiMS5pbm5lclRleHQgPSBgJHtkYXRkLmNyZWF0aW9uX2RhdGV9YDtcbiAgICBjb25zdCBwNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwNS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbF9wJyk7XG4gICAgcDUuaW5uZXJUZXh0ID0gYCR7ZGF0ZC51c2VybmFtZX06ICR7ZGF0ZC5jb21tZW50fWA7XG4gICAgZGF0ZUNvbW1lbnQxLmFwcGVuZENoaWxkKGIxKTtcbiAgICBkYXRlQ29tbWVudDEuYXBwZW5kQ2hpbGQocDUpO1xuICAgIGNvbW0uYXBwZW5kQ2hpbGQoZGF0ZUNvbW1lbnQxKTtcbiAgXG4gICAgcmV0dXJuIG51bGw7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWVudHM7IiwiY29uc3QgY291bnRlciA9IChoMzUsIGFuc2QpID0+IHtcbiAgICBjb25zdCBzcCA9IGFuc2QubGVuZ3RoID8gYW5zZC5sZW5ndGggOiAwO1xuICAgIGNvbnN0IHNwYW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4xLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3BhbmgnKTtcbiAgICBzcGFuMS5pbm5lclRleHQgPSBgQ29tbWVudHMgKCR7c3B9KWA7XG4gICAgaDM1LmFwcGVuZENoaWxkKHNwYW4xKTtcbiAgfTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGNvdW50ZXI7IiwiY29uc3QgVVJMX0FQSSA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvc2VhcmNoLnBocD9mPWInO1xuXG4vLyBMb29rdXAgZnVsbCBtZWFsIGRldGFpbHMgYnkgaWRcbi8vIGh0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9NTI3NzJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExpc3QgYWxsIG1lYWxzIGJ5IGZpcnN0IGxldHRlclxuLy8gaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL3NlYXJjaC5waHA/Zj1iXG5cbmNvbnN0IGdldEZvb2RMaXN0ID0gYXN5bmMgKFVSTF9BUEkpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkxfQVBJKTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgbWVhbExpc3QgPSBqc29uLm1lYWxzLnNsaWNlKDAsIDI3KTtcblxuICByZXR1cm4gbWVhbExpc3Q7XG59O1xuXG5leHBvcnQgeyBVUkxfQVBJLCBnZXRGb29kTGlzdCB9OyIsImltcG9ydCBnZXRkYXRhIGZyb20gJy4vYWRkRGF0YS5qcyc7XG5pbXBvcnQgY29tbWVudHMgZnJvbSAnLi9jb21tZW50cy5qcyc7XG5pbXBvcnQgY291bnRlciBmcm9tICcuL2NvdW50ZXJDb21tZW50LmpzJztcblxuY29uc3QgdGhlYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5Jyk7XG5cbmNvbnN0IGdldGluc3RydWN0aW9uID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IGRmID0gYXdhaXQgZ2V0ZGF0YSgpO1xuICBjb25zdCB4ID0gZGYuc3BsaWNlKDApO1xuICBjb25zdCBmaWx0ZXJlZCA9IHguZmlsdGVyKChiKSA9PiBwYXJzZUludChiLmlkLCAxMCkgPT09IGlkKTtcbiAgcmV0dXJuIGZpbHRlcmVkWzBdLmNvb2tpbmdpbnN0cnVjdGlvbjtcbn07XG5cbmNvbnN0IGxvYWREYXRhID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IGZldGNzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL04zMTdvdW5CVXRTd09lZkxWQWdPL2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gKTtcbiAgY29uc3QgZGF0YXogPSBmZXRjcy5qc29uKCk7XG4gIHJldHVybiBkYXRhei50aGVuKChkYXRhKSA9PiBkYXRhKTtcbn07XG5cbmNvbnN0IHBvcHVsYXRlQ29tbWVudCA9IGFzeW5jIChpZCwgbmFtZSwgY2F0ZWdvcnksIGltYWdlcywgb3JpZ2luLCBzaHMpID0+IHtcbiAgY29uc3QgcyA9IGF3YWl0IGxvYWREYXRhKGlkKTtcblxuICBjb25zdCBpbnN0ciA9IGF3YWl0IGdldGluc3RydWN0aW9uKGlkKTtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9wdXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwb3B1cCcpO1xuICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BvcHVwJyk7XG5cbiAgY29uc3QgdXBwZXJwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB1cHBlcnBvcHVwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndXBwZXJwb3B1cCcpO1xuXG4gIGNvbnN0IHVwcGVycG9wdXBGaWd1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWd1cmUnKTtcbiAgdXBwZXJwb3B1cEZpZ3VyZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3VwcGVycG9wdXBfZmlndXJlJyk7XG5cbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtpbWFnZXN9YCk7XG4gIGltYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbGVnZW5kaW1hZ2UnKTtcbiAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbWFnZV91Jyk7XG4gIGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2ltYWdlJyk7XG4gIGltYWdlLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMjUwJyk7XG5cbiAgdXBwZXJwb3B1cEZpZ3VyZS5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgY29uc3QgY2xvc2VpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjbG9zZWljb24uc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbiAgY2xvc2VpY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2xvc2VfY29udGFpbmVyJyk7XG4gIGNsb3NlaWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlJyk7XG5cbiAgY29uc3QgY2xvc2VzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGNsb3Nlc3ZnLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbG5pIGxuaS1jbG9zZSBjbG9zZScpO1xuXG4gIGNsb3NlaWNvbi5hcHBlbmRDaGlsZChjbG9zZXN2Zyk7XG5cbiAgdXBwZXJwb3B1cC5hcHBlbmRDaGlsZCh1cHBlcnBvcHVwRmlndXJlKTtcbiAgdXBwZXJwb3B1cC5hcHBlbmRDaGlsZChjbG9zZWljb24pO1xuXG4gIGNvbnN0IG1pZGRsZXBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1pZGRsZXBvcHVwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWlkZGxlcG9wdXAnKTtcblxuICBjb25zdCBtaWRkbGVwb3BTaW1wbGVUaXRsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWlkZGxlcG9wU2ltcGxlVGl0bGVzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWlkZGxlcG9wX3NpbXBsZV90aXRsZXMnKTtcblxuICBjb25zdCBoMzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoMzEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWwnKTtcbiAgaDMxLmlubmVyVGV4dCA9ICdOYW1lOiAnO1xuXG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbF9wJyk7XG4gIHAxLmlubmVyVGV4dCA9IGAke25hbWV9YDtcbiAgaDMxLmFwcGVuZENoaWxkKHAxKTtcblxuICBjb25zdCBoMzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoMzIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWwnKTtcbiAgaDMyLmlubmVyVGV4dCA9ICdDYXRlZ29yeTogJztcblxuICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWxfcCcpO1xuICBwMi5pbm5lclRleHQgPSBgJHtjYXRlZ29yeX1gO1xuICBoMzIuYXBwZW5kQ2hpbGQocDIpO1xuXG4gIGNvbnN0IGgzMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGgzMy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbCcpO1xuICBoMzMuaW5uZXJUZXh0ID0gJ09yaWdpbjogJztcblxuICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWxfcCcpO1xuICBwMy5pbm5lclRleHQgPSBgJHtvcmlnaW59YDtcbiAgaDMzLmFwcGVuZENoaWxkKHAzKTtcblxuICBtaWRkbGVwb3BTaW1wbGVUaXRsZXMuYXBwZW5kQ2hpbGQoaDMxKTtcbiAgbWlkZGxlcG9wU2ltcGxlVGl0bGVzLmFwcGVuZENoaWxkKGgzMik7XG4gIG1pZGRsZXBvcFNpbXBsZVRpdGxlcy5hcHBlbmRDaGlsZChoMzMpO1xuXG4gIGNvbnN0IG1pZGRsZXBvcHVwTWlkZGxlRGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICBjb25zdCBoMzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoMzQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWwyJyk7XG4gIGgzNC5pbm5lclRleHQgPSAnSW5zdHJ1Y3Rpb24nO1xuXG4gIGNvbnN0IHA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwNC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbF9wJyk7XG4gIHA0LmlubmVyVGV4dCA9IGAke2luc3RyfWA7XG5cbiAgbWlkZGxlcG9wdXBNaWRkbGVEZXRhaWwuYXBwZW5kQ2hpbGQoaDM0KTtcbiAgbWlkZGxlcG9wdXBNaWRkbGVEZXRhaWwuYXBwZW5kQ2hpbGQocDQpO1xuICBtaWRkbGVwb3B1cC5hcHBlbmRDaGlsZChtaWRkbGVwb3BTaW1wbGVUaXRsZXMpO1xuICBtaWRkbGVwb3B1cC5hcHBlbmRDaGlsZChtaWRkbGVwb3B1cE1pZGRsZURldGFpbCk7XG5cbiAgY29uc3QgcG9wdXBDb21tZW50U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgY29uc3QgaDM1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaDM1LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsIGRldGFpbDMnKTtcbiAgaDM1LmlubmVyVGV4dCA9ICcnO1xuICBjb3VudGVyKGgzNSwgcyk7XG4gIHBvcHVwQ29tbWVudFNlY3Rpb24uYXBwZW5kQ2hpbGQoaDM1KTtcblxuICBjb25zdCBjb21tZW50SG9kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tbWVudEhvZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29tbWVudF9ob2xkZXInKTtcbiAgcG9wdXBDb21tZW50U2VjdGlvbi5hcHBlbmRDaGlsZChjb21tZW50SG9kZXIpO1xuICBjb21tZW50cyhjb21tZW50SG9kZXIsIHMpO1xuXG4gIGNvbnN0IHBvcHVwRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgcG9wdXBGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9wdXBfZm9ybScpO1xuICBwb3B1cEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtJyk7XG4gIGNvbnN0IGgzNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGgzNi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbCBkZXRhaWw0Jyk7XG4gIGgzNi5pbm5lclRleHQgPSAnQWRkIGEgQ29tbWVudCc7XG4gIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdXNlcm5hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3VzZXJuYW1lJyk7XG4gIHVzZXJuYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsX3AnKTtcbiAgdXNlcm5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICd1c2VybmFtZScpO1xuICB1c2VybmFtZS5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICc1Jyk7XG4gIHVzZXJuYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBuYW1lJyk7XG4gIHVzZXJuYW1lLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcbiAgdXNlcm5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgY29uc3QgaW5zaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGluc2lnaHQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2luc2lnaHQnKTtcbiAgaW5zaWdodC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbF9wJyk7XG4gIGluc2lnaHQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcgJyk7XG4gIGluc2lnaHQuc2V0QXR0cmlidXRlKCdpZCcsICdpbnNpZ2h0Jyk7XG4gIGluc2lnaHQuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAnMScpO1xuICBpbnNpZ2h0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBuYW1lJyk7XG4gIGluc2lnaHQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xuICBpbnNpZ2h0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGNvbnN0IGZvcm1idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZm9ybWJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIGZvcm1idXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdidXR0b24xJyk7XG4gIGZvcm1idXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjb21tZW50Jyk7XG4gIGZvcm1idXR0b24uaW5uZXJUZXh0ID0gJ0NvbW1lbnQnO1xuXG4gIHBvcHVwRm9ybS5hcHBlbmRDaGlsZChoMzYpO1xuICBwb3B1cEZvcm0uYXBwZW5kQ2hpbGQodXNlcm5hbWUpO1xuICBwb3B1cEZvcm0uYXBwZW5kQ2hpbGQoaW5zaWdodCk7XG4gIHBvcHVwRm9ybS5hcHBlbmRDaGlsZChmb3JtYnV0dG9uKTtcblxuICBwb3B1cC5hcHBlbmRDaGlsZCh1cHBlcnBvcHVwKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQobWlkZGxlcG9wdXApO1xuICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cENvbW1lbnRTZWN0aW9uKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBGb3JtKTtcblxuICB0aGVib2R5LmFwcGVuZENoaWxkKHBvcHVwKTtcblxuICBjbG9zZWljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aGVwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpO1xuICAgIHRoZXBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwMicpO1xuICAgIHRoZWJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdib2R5LXktc2Nyb2xsJyk7XG4gIH0pO1xuXG4gIGNvbnN0IGZvcm1zZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XG4gIGZvcm1zZC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdGhlZmV0Y2ggPSBhd2FpdCBmZXRjaChzaHMsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpdGVtX2lkOiBpZCxcbiAgICAgICAgdXNlcm5hbWU6IGZvcm1zZC51c2VybmFtZS52YWx1ZSxcbiAgICAgICAgY29tbWVudDogZm9ybXNkLmluc2lnaHQudmFsdWUsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgbXlzdGF0dXMgPSB0aGVmZXRjaC5zdGF0dXM7XG4gICAgaWYgKG15c3RhdHVzID09PSAyMDEpIHtcbiAgICAgIGNvbW1lbnRIb2Rlci5pbm5lckhUTUwgPSAnJztcbiAgICAgIGgzNS5pbm5lckhUTUwgPSAnJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJykucmVzZXQoKTtcbiAgICAgIGNvbnN0IHAgPSBhd2FpdCBsb2FkRGF0YShpZCk7XG4gICAgICBjb21tZW50cyhjb21tZW50SG9kZXIsIHApO1xuICAgICAgY291bnRlcihoMzUsIHApO1xuICAgIH1cbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgcG9wdWxhdGVDb21tZW50OyIsImltcG9ydCBnZXRkYXRhIGZyb20gJy4vYWRkRGF0YS5qcyc7XG5cbmNvbnN0IHNob3dNZWFscyA9IGFzeW5jIChjb250YWluZXIsIHBhZ2VJbmRleCkgPT4ge1xuICAvLyBHZXQgbWVhbHMgbGlzdFxuICBjb25zdCBtZWFscyA9IGF3YWl0IGdldGRhdGEoKTtcbiAgLy8gU2xpY2Ugb25seSA5IG1lYWxzIGVsZW1lbnRzXG4gIGNvbnN0IGxpbWl0TWVhbHMgPSBtZWFscy5zbGljZShwYWdlSW5kZXgsIHBhZ2VJbmRleCArIDkpO1xuICAvLyBQb3B1bGF0ZSBtZWFscyB0byB0aGUgc2NyZWVuXG4gIGxpbWl0TWVhbHMuZm9yRWFjaCgobWVhbCkgPT4ge1xuICAgIGNvbnN0IG1lYWxUZW1wbGF0ZSA9IGBcbiAgICAgIDxsaSBjbGFzcz1cImNvbC0xMiBjb2wtc20tNiBjb2wtbGctNCBwLTNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY2FyZCB8IGNhcmQgbS0wXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiJHttZWFsLmltYWdlfVwiXG4gICAgICAgICAgICBjbGFzcz1cImNhcmQtaW1nLXRvcFwiXG4gICAgICAgICAgICBhbHQ9XCIke21lYWwubmFtZX0gaW1hZ2VcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZGV0YWlscyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gcGItM1wiPlxuICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlIHNob3J0ZW4tdGV4dFwiPiR7bWVhbC5uYW1lfTwvaDU+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxpa2VzIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZC1ibG9ja1wiPjUgbGlrZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+4p2k77iPPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWlkPVwiJHttZWFsLmlkfVwiIG9uY2xpY2s9XCJoYW5kbGVDb21tZW50Q2xpY2soWyR7bWVhbC5pZH0sICcke21lYWwubmFtZX0nLCAnJHttZWFsLmNhdGVnb3J5fScsICcke21lYWwuaW1hZ2V9JywgJyR7bWVhbC5vcmlnaW59J10pXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZC1ibG9ja1wiPmNvbW1lbnRzPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgYDtcblxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgKz0gbWVhbFRlbXBsYXRlO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dNZWFsczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBzaG93TWVhbHMgZnJvbSAnLi9tb2R1bGVzL3Nob3dNZWFscy5qcyc7XG5pbXBvcnQgcG9wdWxhdGVDb21tZW50IGZyb20gJy4vbW9kdWxlcy9wb3B1bGF0ZUNvbW1lbnQuanMnO1xuXG5jb25zdCB1cmxzID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL04zMTdvdW5CVXRTd09lZkxWQWdPL2NvbW1lbnRzJztcblxuLy8gQ29uc3RhbnRzXG5jb25zdCBtZWFsc0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZi1saXN0Jyk7XG5jb25zdCBtZWFsc05hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sJyk7XG5cbi8vIFBvcHVsYXRlIHRoZSBtZWFscyBjYXJkcyBpdGVtc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHNob3dNZWFscyhtZWFsc0xpc3RDb250YWluZXIsIDApKTtcblxuLy8gUG9wdWxhdGUgYWNjb3JkaW5nIHRvIHRoZSBtZWFscy1uYXZcbm1lYWxzTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyBHZXQgdGhlIGNsaWNrZWQgbmF2IGxpbmsgaW5kZXggZGF0YS5cbiAgY29uc3QgbmF2SW5kZXggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcbiAgLy8gRW1wdHkgdGhlIGxpc3QgbWVhbHMgY29udGFpbmVyIGZyb20gdGhlIHByZXZpb3VzIGNhcmRzXG4gIG1lYWxzTGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgLy8gR2VuZXJhdGUgbmV3IDkgaXRlbXNcbiAgc2hvd01lYWxzKG1lYWxzTGlzdENvbnRhaW5lciwgbmF2SW5kZXgpO1xufSk7XG5cbmNvbnN0IGhhbmRsZUNvbW1lbnRDbGljayA9IGFzeW5jIChtZWFscykgPT4ge1xuICBjb25zdCBbaWQsIG5hbWUsIGNhdGVnb3J5LCBpbWFnZSwgb3JpZ2luXSA9IG1lYWxzO1xuICBhd2FpdCBwb3B1bGF0ZUNvbW1lbnQoaWQsIG5hbWUsIGNhdGVnb3J5LCBpbWFnZSwgb3JpZ2luLCB1cmxzKTtcbiAgY29uc3QgdGhlcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAnKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5LXktc2Nyb2xsJyk7XG4gIHRoZXBvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwMicpO1xufTtcblxuLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbndpbmRvdy5oYW5kbGVDb21tZW50Q2xpY2sgPSBoYW5kbGVDb21tZW50Q2xpY2s7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
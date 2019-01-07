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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/BaseFields.js":
/*!**************************************!*\
  !*** ./src/components/BaseFields.js ***!
  \**************************************/
/*! exports provided: BaseFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BaseFields\", function() { return BaseFields; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\n\n\nconst BaseFields = shape => {\n  const foamFields = _constants__WEBPACK_IMPORTED_MODULE_0__[\"FIELDS\"][shape].fields.map(field => {\n    const wrapper = $('<div />', {\n      class: 'form-group col-sm-12 col-md-6 base-field-wrapper',\n    });\n    const label = $('<label></label>').text(field.name);\n    const attributes = {\n      class: `form-control ${_constants__WEBPACK_IMPORTED_MODULE_0__[\"HTMLContainers\"].baseFields.field(false)}`,\n      placeholder: _constants__WEBPACK_IMPORTED_MODULE_0__[\"INPUT_PLACEHOLDER\"],\n    };\n\n    if (field.dimension) {\n      attributes['data-dimension'] = field.dimension;\n    }\n\n    if (field.weight) {\n      attributes['data-weight'] = field.weight;\n    }\n\n    const input = $('<input />', attributes);\n\n    input.on('keyup', _utils__WEBPACK_IMPORTED_MODULE_1__[\"validateInputValue\"]);\n\n    wrapper.append(label, input);\n\n    return wrapper;\n  });\n\n  $(_constants__WEBPACK_IMPORTED_MODULE_0__[\"HTMLContainers\"].baseFields.container)\n    .html('')\n    .append(foamFields);\n};\n\n\n//# sourceURL=webpack:///./src/components/BaseFields.js?");

/***/ }),

/***/ "./src/components/Carousel.js":
/*!************************************!*\
  !*** ./src/components/Carousel.js ***!
  \************************************/
/*! exports provided: Carousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Carousel\", function() { return Carousel; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\n\n\nconst formValues = {};\n\nconst getImgSrc = shape => `${_constants__WEBPACK_IMPORTED_MODULE_0__[\"IMAGE_FOLDER_PATH\"]}/${_constants__WEBPACK_IMPORTED_MODULE_0__[\"IMAGE_PATHS\"][shape]}`;\n\nconst Carousel = () => {\n  const $container = $(_constants__WEBPACK_IMPORTED_MODULE_0__[\"HTMLContainers\"].carousel.content);\n  const content = _constants__WEBPACK_IMPORTED_MODULE_0__[\"ORDER\"].map((shape, i) => {\n    const wrapper = $('<div />', {\n      class: `item ${i === 0 ? 'active' : ''}`,\n      'data-index': i,\n      'data-shape': shape,\n    });\n    const img = $('<img />', {\n      src: getImgSrc(shape),\n      alt: _constants__WEBPACK_IMPORTED_MODULE_0__[\"SHAPE_NAMES\"][shape],\n    });\n\n    wrapper.append(img);\n\n    return wrapper;\n  });\n\n  $container.append(content);\n\n  $container.slick({\n    infinite: true,\n    centerMode: true,\n    prevArrow: $(_constants__WEBPACK_IMPORTED_MODULE_0__[\"HTMLContainers\"].carousel.prevArrow),\n    nextArrow: $(_constants__WEBPACK_IMPORTED_MODULE_0__[\"HTMLContainers\"].carousel.nextArrow),\n    mobileFirst: true,\n    responsive: [\n      {\n        breakpoint: 1024,\n        settings: {\n          slidesToShow: 3,\n          slidesToScroll: 1,\n        },\n      },\n      {\n        breakpoint: 480,\n        settings: {\n          slidesToShow: 1,\n          slidesToScroll: 1,\n        },\n      },\n    ],\n  });\n\n  $container.on('beforeChange', (a, b, currentSlide, nextSlide) => {\n    formValues[currentSlide] = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getFormValues\"])();\n\n    $(_constants__WEBPACK_IMPORTED_MODULE_0__[\"HTMLContainers\"].foamShape)\n      .prop('selectedIndex', nextSlide)\n      .trigger('change');\n  });\n\n  $container.on('afterChange', (a, b, currentSlide) => {\n    const slideValues = formValues[currentSlide];\n\n    if (!slideValues) return;\n\n    Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"setFormValues\"])(slideValues);\n  });\n};\n\n\n//# sourceURL=webpack:///./src/components/Carousel.js?");

/***/ }),

/***/ "./src/components/Error.js":
/*!*********************************!*\
  !*** ./src/components/Error.js ***!
  \*********************************/
/*! exports provided: Error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Error\", function() { return Error; });\nconst Error = () => {\n  const span = $('<span />', {\n    class: 'help-block',\n  });\n\n  span.text(\n    'Number must be in decimal form, i.e. 12.25 (is equal to 12 and 1/4 inches)',\n  );\n\n  return span;\n};\n\n\n//# sourceURL=webpack:///./src/components/Error.js?");

/***/ }),

/***/ "./src/components/FoamShape.js":
/*!*************************************!*\
  !*** ./src/components/FoamShape.js ***!
  \*************************************/
/*! exports provided: FoamShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FoamShape\", function() { return FoamShape; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n/* harmony import */ var _BaseFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseFields */ \"./src/components/BaseFields.js\");\n\n\n\n\nconst FoamShape = () => {\n  const options = _constants__WEBPACK_IMPORTED_MODULE_0__[\"ORDER\"].map((shape, index) =>\n    $('<option></option>', {\n      value: shape,\n      'data-index': index,\n    }).text(_constants__WEBPACK_IMPORTED_MODULE_0__[\"SHAPE_NAMES\"][shape]),\n  );\n\n  $(_constants__WEBPACK_IMPORTED_MODULE_0__[\"HTMLContainers\"].foamShape)\n    .append(options)\n    .on('change', function handler() {\n      const $this = $(this);\n      const foamShape = $this.val();\n      const index = $this.find(':selected').data('index');\n\n      Object(_BaseFields__WEBPACK_IMPORTED_MODULE_2__[\"BaseFields\"])(foamShape);\n\n      Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"resetLayers\"])();\n      [2, 3].forEach(layer => Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"toggleLayerToggler\"])(layer));\n\n      $(_constants__WEBPACK_IMPORTED_MODULE_0__[\"HTMLContainers\"].carousel.content).slick('slickGoTo', index, true);\n      [1, 2, 3].forEach(layer => {\n        $(_constants__WEBPACK_IMPORTED_MODULE_0__[\"HTMLContainers\"].layerFields.thickness(layer)).val('');\n        $(_constants__WEBPACK_IMPORTED_MODULE_0__[\"HTMLContainers\"].layerFields.foamType(layer)).prop('selectedIndex', 0);\n      });\n\n      $(_constants__WEBPACK_IMPORTED_MODULE_0__[\"HTMLContainers\"].layerFields.thickness(1))\n        .parent('.thickness-wrapper')\n        .find('label')\n        .text(_constants__WEBPACK_IMPORTED_MODULE_0__[\"FIELDS\"][foamShape].thicknessName);\n    })\n    .trigger('change');\n};\n\n\n//# sourceURL=webpack:///./src/components/FoamShape.js?");

/***/ }),

/***/ "./src/components/LayerFields.js":
/*!***************************************!*\
  !*** ./src/components/LayerFields.js ***!
  \***************************************/
/*! exports provided: LayerFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayerFields\", function() { return LayerFields; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\n\n\nconst Thickness = layer => {\n  const wrapper = $('<div />', {\n    class: 'form-group col-sm-12 col-md-6 thickness-wrapper',\n  });\n  const label = $('<label></label>').text('Thickness');\n  const input = $('<input />', {\n    id: _constants__WEBPACK_IMPORTED_MODULE_0__[\"HTMLContainers\"].layerFields.thickness(layer, false),\n    class: 'form-control',\n    placeholder: _constants__WEBPACK_IMPORTED_MODULE_0__[\"INPUT_PLACEHOLDER\"],\n  }).on('keyup', _utils__WEBPACK_IMPORTED_MODULE_1__[\"validateInputValue\"]);\n\n  wrapper.append(label, input);\n\n  return wrapper;\n};\n\nconst LearnMore = () => {\n  const link = $('<a />', { class: 'modal-togggle' });\n  const image = $('<img />', { src: 'svg/information.svg' });\n  const text = 'Learn more about foam types';\n\n  link.append(image, text);\n\n  return link;\n};\n\nconst FoamType = layer => {\n  const materialTypes = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getMaterials\"])();\n  const wrapper = $('<div />', {\n    class: 'form-group col-sm-12 col-md-6',\n  });\n  const label = $('<label />').text('Foam Type');\n  const select = $('<select />', {\n    id: _constants__WEBPACK_IMPORTED_MODULE_0__[\"HTMLContainers\"].layerFields.foamType(layer, false),\n    class: 'form-control',\n  }).on('change', _utils__WEBPACK_IMPORTED_MODULE_1__[\"calculatePrice\"]);\n  const options = materialTypes.map(({ price, description }) =>\n    $('<option />', {\n      val: price,\n    }).text(description),\n  );\n  const emptyOption = $('<option selected disabled />').text('Select');\n\n  select.prop('selectedIndex', 0).append(emptyOption, options);\n  wrapper.append(label, select);\n\n  if (layer === 1) {\n    wrapper.append(LearnMore());\n  }\n\n  return wrapper;\n};\n\nconst LayerFields = () => {\n  [1, 2, 3].forEach(layer => {\n    const thickness = Thickness(layer);\n    const foamType = FoamType(layer);\n\n    $(_constants__WEBPACK_IMPORTED_MODULE_0__[\"HTMLContainers\"].layerFields.container(layer))\n      .html('')\n      .append(thickness, foamType);\n  });\n};\n\n\n//# sourceURL=webpack:///./src/components/LayerFields.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: ORDER, IMAGE_PATHS, SHAPE_NAMES, FIELDS, HTMLContainers, IMAGE_FOLDER_PATH, DECIMAL_REG_EXP, INPUT_PLACEHOLDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ORDER\", function() { return ORDER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IMAGE_PATHS\", function() { return IMAGE_PATHS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SHAPE_NAMES\", function() { return SHAPE_NAMES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FIELDS\", function() { return FIELDS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTMLContainers\", function() { return HTMLContainers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IMAGE_FOLDER_PATH\", function() { return IMAGE_FOLDER_PATH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DECIMAL_REG_EXP\", function() { return DECIMAL_REG_EXP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INPUT_PLACEHOLDER\", function() { return INPUT_PLACEHOLDER; });\nconst RECTANGLE = 'RECTANGLE';\nconst TRIANGLE = 'TRIANGLE';\nconst TRAPEZIUM = 'TRAPEZIUM';\nconst CHAIR = 'CHAIR';\nconst CLIPPED = 'CLIPPED';\nconst L_SHAPED = 'L_SHAPED';\nconst T_SHAPED = 'T_SHAPED';\nconst V_SHAPED = 'V_SHAPED';\nconst CIRCULAR = 'CIRCULAR';\n\nconst ORDER = [\n  RECTANGLE,\n  TRIANGLE,\n  TRAPEZIUM,\n  CHAIR,\n  CLIPPED,\n  L_SHAPED,\n  T_SHAPED,\n  V_SHAPED,\n  CIRCULAR,\n];\n\nconst IMAGE_PATHS = {\n  RECTANGLE: 'custom-square-rectangle-foam.jpg',\n  TRIANGLE: 'wedge-custom-cushion.jpg',\n  TRAPEZIUM: 'trapezoid-custom-foam-cushion.jpg',\n  CHAIR: 'chair_cushion_custom_foam.jpg',\n  CLIPPED: 'clipped-bolster-custom-foam-cushion.jpg',\n  L_SHAPED: 'l-custom-foam-cushion.jpg',\n  T_SHAPED: 't-shape-custom-cushion.jpg',\n  V_SHAPED: 'split-v-berth-custom-foam-cushion.jpg',\n  CIRCULAR: 'circular-cushion-or-bed.jpg',\n};\n\nconst SHAPE_NAMES = {\n  RECTANGLE: 'Rectangle or Square Cushion',\n  TRIANGLE: 'Triangle or *Wedge Cushion',\n  TRAPEZIUM: 'V-Berth / Trapezoid Cushion',\n  CHAIR: 'Chair Cushion',\n  CLIPPED: 'Clipped Bolster Cushion',\n  L_SHAPED: 'L Shaped Cushion',\n  T_SHAPED: 'T Shaped Cushion',\n  V_SHAPED: 'Split V-Berth Cushion',\n  CIRCULAR: 'Circular Cushion or Mattress',\n};\n\nconst FIELDS = {\n  RECTANGLE: {\n    fields: [\n      { name: '(1) Length', dimension: 'x' },\n      { name: '(2) Width', dimension: 'y' },\n    ],\n    thicknessName: 'Thickness',\n  },\n  TRIANGLE: {\n    fields: [\n      { name: '(2) Length', dimension: 'x' },\n      { name: '(3) Width', dimension: 'y' },\n    ],\n    thicknessName: '(1) Thickness',\n  },\n  TRAPEZIUM: {\n    fields: [\n      { name: '(1) Top' },\n      { name: '(3) Length', dimension: 'x' },\n      { name: '(4) Bottom', dimension: 'y' },\n    ],\n    thicknessName: '(2) Thickness',\n  },\n  CHAIR: {\n    fields: [\n      { name: '(1) Length to radius', dimension: 'x' },\n      { name: '(2) Base Length', dimension: 'y' },\n      { name: '(4) Radius', dimension: 'x' },\n    ],\n    thicknessName: '(3) Thickness',\n  },\n  CLIPPED: {\n    fields: [\n      { name: '(1) Top' },\n      { name: '(3) Length', dimension: 'x' },\n      { name: '(4) Bottom', dimension: 'y' },\n      { name: '(5) Side' },\n    ],\n    thicknessName: '(2) Thickness',\n  },\n  L_SHAPED: {\n    fields: [\n      { name: '(1) Top' },\n      { name: '(3) Length', dimension: 'x' },\n      { name: '(4) Center' },\n      { name: '(5) Ear Height' },\n      { name: '(6) Bottom', dimension: 'y' },\n    ],\n    thicknessName: '(2) Thickness',\n  },\n  T_SHAPED: {\n    fields: [\n      { name: '(1) Top', dimension: 'x' },\n      { name: '(3) Ear length', dimension: 'y' },\n      { name: '(4) Ear depth' },\n      { name: '(5) Center Length', dimension: 'y' },\n      { name: '(6) Bottom' },\n    ],\n    thicknessName: '(2) Thickness',\n  },\n  V_SHAPED: {\n    fields: [\n      { name: '(1) Back / Top' },\n      { name: '(3) Length', dimension: 'x' },\n      { name: '(4) Front / Bottom', dimension: 'y' },\n    ],\n    thicknessName: '(2) Thickness',\n  },\n  CIRCULAR: {\n    fields: [{ name: '(2) Diameter', dimension: 'x', weight: 2 }],\n    thicknessName: '(1) Thickness',\n  },\n};\n\nconst HTMLContainers = {\n  materials: {\n    container: '#material-types',\n    price: 'material-price',\n    description: 'material-description',\n  },\n  carousel: {\n    content: '#carousel-content',\n    prevArrow: '#slider-prev',\n    nextArrow: '#slider-next',\n  },\n  foamShape: '#foam-shape',\n  baseFields: {\n    container: '#base-fields',\n    field: (isSelector = true) => `${isSelector ? '.' : ''}base-field`,\n  },\n  layerFields: {\n    container: (layer, isSelector = true) =>\n      `${isSelector ? '#' : ''}layer-${layer}-fields`,\n    toggleContainer: (layer, isSelector = true) =>\n      `${isSelector ? '#' : ''}layer-${layer}-toggle-container`,\n    toggle: (layer, isSelector = true) =>\n      `${isSelector ? '#' : ''}layer-${layer}-toggle`,\n    thickness: (layer, isSelector = true) =>\n      `${isSelector ? '#' : ''}layer-${layer}-thickness`,\n    foamType: (layer, isSelector = true) =>\n      `${isSelector ? '#' : ''}layer-${layer}-foam-type`,\n  },\n  cart: '#cart',\n  minimumPriceNote: '#minimum-price-note',\n  price: '#price',\n  _price: '[data-drupal-selector=\"edit-unit-price-0-amount-number\"]',\n  _description: '[data-drupal-selector=\"description\"]',\n};\n\nconst IMAGE_FOLDER_PATH = 'images';\n\nconst DECIMAL_REG_EXP = /^\\d*(\\.\\d*)?\\d$/;\n\nconst INPUT_PLACEHOLDER = 'How many inches?';\n\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Carousel */ \"./src/components/Carousel.js\");\n/* harmony import */ var _components_FoamShape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/FoamShape */ \"./src/components/FoamShape.js\");\n/* harmony import */ var _components_LayerFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/LayerFields */ \"./src/components/LayerFields.js\");\n\n\n\n\n// eslint-disable-next-line\n$ = jQuery;\n\nObject(_components_Carousel__WEBPACK_IMPORTED_MODULE_0__[\"Carousel\"])();\nObject(_components_FoamShape__WEBPACK_IMPORTED_MODULE_1__[\"FoamShape\"])();\nObject(_components_LayerFields__WEBPACK_IMPORTED_MODULE_2__[\"LayerFields\"])();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: toggleLayers, resetLayers, getMaterials, calculatePrice, validateInputValue, toggleLayerToggler, getFormValues, setFormValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleLayers\", function() { return toggleLayers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetLayers\", function() { return resetLayers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMaterials\", function() { return getMaterials; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculatePrice\", function() { return calculatePrice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateInputValue\", function() { return validateInputValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleLayerToggler\", function() { return toggleLayerToggler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFormValues\", function() { return getFormValues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setFormValues\", function() { return setFormValues; });\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Error */ \"./src/components/Error.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n\nlet hasLayer2 = false;\nlet hasLayer3Toggle = false;\nlet hasLayer3 = false;\n\nconst toggleLayers = () => {\n  $(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].layerFields.container(2)).toggleClass('hidden', !hasLayer2);\n  $(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].layerFields.toggleContainer(3)).toggleClass(\n    'hidden',\n    !hasLayer3Toggle,\n  );\n  $(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].layerFields.container(3)).toggleClass('hidden', !hasLayer3);\n};\n\nconst resetLayers = () => {\n  hasLayer2 = false;\n  hasLayer3Toggle = false;\n  hasLayer3 = false;\n\n  toggleLayers();\n};\n\nconst getMaterials = () => [\n  ...$(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].materials.container)\n    .find('div')\n    .map(function handler() {\n      const $materialType = $(this);\n      const price = $materialType.data(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].materials.price);\n      const description = $materialType.data(\n        _constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].materials.description,\n      );\n\n      return {\n        price,\n        description,\n      };\n    }),\n];\n\nconst setDescription = (layer1Price, layer2Price, layer3Price) => {\n  let description = '';\n  const totalThickness = [1, 2, 3].reduce((total, layer) => {\n    const layerThickness = $(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].layerFields.thickness(layer)).val();\n\n    if (!layerThickness) {\n      return total;\n    }\n\n    return total + parseFloat(layerThickness);\n  }, 0);\n  const baseDimensions = [\n    ...$(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].baseFields.field()).map((_, field) => {\n      const $field = $(field);\n      const label = $field\n        .parent('.base-field-wrapper')\n        .find('label')\n        .text();\n      const value = $field.val();\n\n      return {\n        label,\n        value,\n      };\n    }),\n  ];\n  const getLayerDimensions = layer => {\n    const thickness = $(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].layerFields.thickness(layer)).val();\n    const $foamType = $(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].layerFields.foamType(layer));\n\n    if (!thickness || $foamType.prop('selectedIndex') === 0) return null;\n\n    return {\n      thickness,\n      foamType: $foamType.find(':selected').text(),\n    };\n  };\n\n  description += `Total thickness: ${totalThickness}, dimensions: ${baseDimensions\n    .map(({ label, value }) => `${label}: ${value}`)\n    .join(', ')}`;\n\n  const layer1Dimensions = getLayerDimensions(1);\n  if (layer1Dimensions) {\n    description += `\\nBase layer: ${layer1Dimensions.thickness}\" layer of ${\n      layer1Dimensions.foamType\n    } ($${(layer1Price / 144).toFixed(2)})`;\n  }\n\n  const layer2Dimensions = getLayerDimensions(2);\n  if (hasLayer2 && layer2Dimensions) {\n    description += `\\nSecond layer: ${layer2Dimensions.thickness}\" layer of ${\n      layer2Dimensions.foamType\n    } ($${(layer2Price / 144 + 5).toFixed(2)})`;\n  }\n\n  const layer3Dimensions = getLayerDimensions(3);\n  if (hasLayer3 && layer3Dimensions) {\n    description += `\\nThird layer: ${layer3Dimensions.thickness}\" layer of ${\n      layer3Dimensions.foamType\n    } ($${(layer3Price / 144 + 5).toFixed(2)})`;\n  }\n\n  // eslint-disable-next-line\n  $(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"]._description).val(description);\n};\n\nconst getBaseValues = () =>\n  [...$(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].baseFields.field())].reduce((baseValues, field) => {\n    const $field = $(field);\n    const val = $field.val();\n    const dimension = $field.data('dimension');\n    const weight = $field.data('weight') || 1;\n\n    if (dimension === 'x') {\n      // eslint-disable-next-line\n      baseValues[0] = (baseValues[0] || 0) + Math.pow(val, Number(weight));\n    }\n\n    if (dimension === 'y') {\n      // eslint-disable-next-line\n      baseValues[1] = (baseValues[1] || 0) + Math.pow(val, Number(weight));\n    }\n\n    return baseValues;\n  }, []);\n\nconst makeGetLayerPrice = baseValues => layer => {\n  const layerValues = [\n    $(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].layerFields.thickness(layer)).val(),\n    $(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].layerFields.foamType(layer)).val(),\n  ];\n  return [...baseValues, ...layerValues].reduce((price, val) => price * val, 1);\n};\n\nconst calculatePrice = () => {\n  const baseValues = getBaseValues();\n  const getLayerPrice = makeGetLayerPrice(baseValues);\n\n  const layer1Price = getLayerPrice(1);\n  const layer2Price = hasLayer2 ? getLayerPrice(2) : 0;\n  const layer3Price = hasLayer3 ? getLayerPrice(3) : 0;\n\n  let totalPrice = (layer1Price + layer2Price + layer3Price) / 144 || 0;\n\n  if (hasLayer2 && layer2Price) totalPrice += 5;\n  if (hasLayer3 && layer3Price) totalPrice += 5;\n\n  $(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].cart).toggleClass('cart-not-available', totalPrice < 5);\n  $(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].price).text(`$ ${totalPrice.toFixed(2)}`);\n  $(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].minimumPriceNote).hide();\n\n  if (totalPrice < 5) {\n    $(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].minimumPriceNote).show();\n  }\n\n  // eslint-disable-next-line\n  $(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"]._price).val(totalPrice.toFixed(2));\n\n  setDescription(layer1Price, layer2Price, layer3Price);\n};\n\nconst validateInputValue = function handler() {\n  const $this = $(this);\n  const val = $this.val().toString();\n  const isValid = _constants__WEBPACK_IMPORTED_MODULE_1__[\"DECIMAL_REG_EXP\"].test(val);\n\n  if (!isValid && val !== '') {\n    $this.parent().append(Object(_components_Error__WEBPACK_IMPORTED_MODULE_0__[\"Error\"])());\n    return;\n  }\n\n  $this\n    .parent()\n    .find('.help-block')\n    .remove();\n\n  calculatePrice();\n};\n\nconst resetLayerFields = layers =>\n  layers.forEach(layer => {\n    $(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].layerFields.thickness(layer)).val('');\n    $(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].layerFields.foamType(layer)).prop('selectedIndex', 0);\n  });\n\nconst toggleLayerToggler = layer => {\n  let condition;\n\n  switch (layer) {\n    case 2:\n      condition = hasLayer2;\n      break;\n\n    case 3:\n      condition = hasLayer3;\n      break;\n\n    default:\n      condition = false;\n  }\n\n  $(`${_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].layerFields.toggle(layer)}-plus`).toggleClass(\n    'hidden',\n    condition,\n  );\n  $(`${_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].layerFields.toggle(layer)}-minus`).toggleClass(\n    'hidden',\n    !condition,\n  );\n};\n\nconst getLayerValues = layer => ({\n  thickness: $(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].layerFields.thickness(layer)).val(),\n  foamType: $(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].layerFields.foamType(layer)).val(),\n});\n\nconst makeSetLayerValues = formValues => layer => {\n  const { thickness, foamType } = formValues[`layer${layer}`];\n\n  if (thickness) {\n    $(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].layerFields.thickness(layer)).val(thickness);\n  }\n\n  if (foamType) {\n    $(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].layerFields.foamType(layer)).val(foamType);\n  }\n};\n\nconst getFormValues = () => {\n  const formValues = {\n    base: [\n      ...$(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].baseFields.field()).map((_, field) => $(field).val()),\n    ],\n    layer1: getLayerValues(1),\n  };\n\n  if (hasLayer2) {\n    formValues.layer2 = getLayerValues(2);\n  }\n\n  if (hasLayer3) {\n    formValues.layer3 = getLayerValues(3);\n  }\n\n  return formValues;\n};\n\nconst setFormValues = formValues => {\n  const setLayerValues = makeSetLayerValues(formValues);\n\n  $(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].baseFields.field()).each(function handler(index) {\n    $(this).val(formValues.base[index]);\n  });\n\n  setLayerValues(1);\n\n  if (formValues.layer2) {\n    setLayerValues(2);\n    hasLayer2 = true;\n  }\n\n  if (formValues.layer3) {\n    setLayerValues(3);\n    hasLayer3Toggle = true;\n    hasLayer3 = true;\n  }\n\n  toggleLayers();\n  [2, 3].forEach(layer => toggleLayerToggler(layer));\n  calculatePrice();\n};\n\n$(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].layerFields.toggle(2)).click(() => {\n  hasLayer2 = !hasLayer2;\n  hasLayer3Toggle = hasLayer2;\n\n  if (!hasLayer2) {\n    hasLayer3 = false;\n\n    resetLayerFields([2, 3]);\n    toggleLayerToggler(3);\n  }\n\n  toggleLayerToggler(2);\n  toggleLayers();\n  calculatePrice();\n});\n\n$(_constants__WEBPACK_IMPORTED_MODULE_1__[\"HTMLContainers\"].layerFields.toggle(3)).click(() => {\n  hasLayer3 = !hasLayer3;\n\n  if (!hasLayer3) {\n    resetLayerFields([3]);\n  }\n\n  toggleLayerToggler(3);\n\n  toggleLayers();\n  calculatePrice();\n});\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });
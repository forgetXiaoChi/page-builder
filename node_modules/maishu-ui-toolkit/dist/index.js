/*!
 * 
 *  maishu-ui-toolkit v1.9.0
 *  git+https://github.com/ansiboy/ui-toolkit.git
 *  
 *  Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 *  Licensed under the MIT License.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("less"));
	else if(typeof define === 'function' && define.amd)
		define(["less"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("less")) : factory(root["less"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_less__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./out/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/maishu-toolkit/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/maishu-toolkit/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
 * ~
 *  maishu-toolkit v1.4.13
 *  https://github.com/ansiboy/toolkit
 *  
 *  Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 *  Licensed under the MIT License.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(typeof window === 'undefined' ? global : window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./out/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./out/assign-deep.js":
/*!****************************!*\
  !*** ./out/assign-deep.js ***!
  \****************************/
/*! exports provided: objectAssignDeep, objectAssignDeepInto, withOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectAssignDeep", function() { return objectAssignDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectAssignDeepInto", function() { return objectAssignDeepInto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withOptions", function() { return withOptions; });

/*
 * OBJECT ASSIGN DEEP
 * Allows deep cloning of plain objects that contain primitives, nested plain objects, or nested plain arrays.
 */
/*
 * A unified way of returning a string that describes the type of the given variable.
 */
function getTypeOf(input) {
    if (input === null) {
        return 'null';
    }
    else if (typeof input === 'undefined') {
        return 'undefined';
    }
    else if (typeof input === 'object') {
        return (Array.isArray(input) ? 'array' : 'object');
    }
    return typeof input;
}
/*
 * Branching logic which calls the correct function to clone the given value base on its type.
 */
function cloneValue(value) {
    // The value is an object so lets clone it.
    if (getTypeOf(value) === 'object') {
        return quickCloneObject(value);
    }
    // The value is an array so lets clone it.
    else if (getTypeOf(value) === 'array') {
        return quickCloneArray(value);
    }
    // Any other value can just be copied.
    return value;
}
/*
 * Enumerates the given array and returns a new array, with each of its values cloned (i.e. references broken).
 */
function quickCloneArray(input) {
    return input.map(cloneValue);
}
/*
 * Enumerates the properties of the given object (ignoring the prototype chain) and returns a new object, with each of
 * its values cloned (i.e. references broken).
 */
function quickCloneObject(input) {
    const output = {};
    for (const key in input) {
        if (!input.hasOwnProperty(key)) {
            continue;
        }
        output[key] = cloneValue(input[key]);
    }
    return output;
}
/*
 * Does the actual deep merging.
 */
function executeDeepMerge(target, _objects = [], _options = {}) {
    const options = {
        arrayBehaviour: _options.arrayBehaviour || 'replace',
    };
    // Ensure we have actual objects for each.
    const objects = _objects.map(object => object || {});
    const output = target || {};
    // Enumerate the objects and their keys.
    for (let oindex = 0; oindex < objects.length; oindex++) {
        const object = objects[oindex];
        const keys = Object.keys(object);
        for (let kindex = 0; kindex < keys.length; kindex++) {
            const key = keys[kindex];
            const value = object[key];
            const type = getTypeOf(value);
            const existingValueType = getTypeOf(output[key]);
            if (type === 'object') {
                if (existingValueType !== 'undefined') {
                    const existingValue = (existingValueType === 'object' ? output[key] : {});
                    output[key] = executeDeepMerge({}, [existingValue, quickCloneObject(value)], options);
                }
                else {
                    output[key] = quickCloneObject(value);
                }
            }
            else if (type === 'array') {
                if (existingValueType === 'array') {
                    const newValue = quickCloneArray(value);
                    output[key] = (options.arrayBehaviour === 'merge' ? output[key].concat(newValue) : newValue);
                }
                else {
                    output[key] = quickCloneArray(value);
                }
            }
            else {
                output[key] = value;
            }
        }
    }
    return output;
}
/*
 * Merge all the supplied objects into the target object, breaking all references, including those of nested objects
 * and arrays, and even objects nested inside arrays. The first parameter is not mutated unlike Object.assign().
 * Properties in later objects will always overwrite.
 */
function objectAssignDeep(target, ...objects) {
    return executeDeepMerge(target, objects);
}
;
/*
 * Same as objectAssignDeep() except it doesn't mutate the target object and returns an entirely new object.
 */
function objectAssignDeepInto(...objects) {
    return executeDeepMerge({}, objects);
}
;
/*
 * Allows an options object to be passed in to customise the behaviour of the function.
 */
let withOptions = function objectAssignDeepInto(target, objects, options) {
    return executeDeepMerge(target, objects, options);
};


/***/ }),

/***/ "./out/callback.js":
/*!*************************!*\
  !*** ./out/callback.js ***!
  \*************************/
/*! exports provided: Callback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Callback", function() { return Callback; });
class Callback {
    constructor() {
        this.funcs = new Array();
    }
    add(func) {
        this.funcs.push(func);
    }
    remove(func) {
        this.funcs = this.funcs.filter(o => o != func);
    }
    fire(args) {
        this.funcs.forEach(o => o(args));
    }
    static create() {
        return new Callback();
    }
}


/***/ }),

/***/ "./out/data.js":
/*!*********************!*\
  !*** ./out/data.js ***!
  \*********************/
/*! exports provided: DataSource, DataSourceSelectArguments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceSelectArguments", function() { return DataSourceSelectArguments; });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./out/errors.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback */ "./out/callback.js");


let errors = Object.assign(_errors__WEBPACK_IMPORTED_MODULE_0__["errors"], {
    dataSourceCanntInsert() {
        return new Error("DataSource can not insert.");
    },
    dataSourceCanntDelete() {
        return new Error("DataSource can not delete.");
    },
    dataSourceCanntUpdate() {
        return new Error("DataSource can not update.");
    },
    primaryKeyNull(key) {
        let msg = `Primary key named '${key}' value is null.`;
        return new Error(msg);
    },
    queryResultTypeError() {
        let msg = `Query result type error.`;
        return new Error(msg);
    }
});
class DataSource {
    constructor(args) {
        this.inserting = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"](); //callbacks1<DataSource<T>, T, number>();
        this.inserted = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"]();
        this.deleting = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"](); //callbacks<DataSource<T>, T>();
        this.deleted = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"](); //callbacks<DataSource<T>, T>();
        this.updating = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"]();
        this.updated = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"]();
        this.selecting = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"]();
        this.selected = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"](); //callbacks<DataSource<T>, DataSourceSelectResult<T>>();
        this.error = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"](); //callbacks<this, DataSourceError>();
        this.args = args;
        this.primaryKeys = args.primaryKeys || [];
    }
    ; //callbacks<DataSource<T>, DataSourceSelectArguments>();
    get canDelete() {
        return this.args.delete != null && this.primaryKeys.length > 0;
    }
    get canInsert() {
        return this.args.insert != null && this.primaryKeys.length > 0;
    }
    get canUpdate() {
        return this.args.update != null && this.primaryKeys.length > 0;
    }
    executeInsert(item, args) {
        return this.args.insert(item, args);
    }
    executeDelete(item, args) {
        return this.args.delete(item, args);
    }
    executeUpdate(item, args) {
        return this.args.update(item, args);
    }
    executeSelect(args) {
        args = args || {};
        return this.args.select(args);
    }
    insert(item, args, index) {
        if (!this.canInsert)
            throw errors.dataSourceCanntInsert();
        if (!item)
            throw errors.argumentNull("item");
        if (typeof args == 'number') {
            index = args;
            args = null;
        }
        this.inserting.fire({ sender: this, dataItem: item, index });
        return this.executeInsert(item, args).then((data) => {
            Object.assign(item, data);
            this.inserted.fire({ sender: this, dataItem: item, index });
            return data;
        }).catch(exc => {
            this.processError(exc, 'insert');
            throw exc;
        });
    }
    delete(item, args) {
        if (!this.canDelete)
            throw errors.dataSourceCanntDelete();
        if (!item)
            throw errors.argumentNull("item");
        this.checkPrimaryKeys(item);
        this.deleting.fire({ sender: this, dataItem: item });
        return this.executeDelete(item, args).then((data) => {
            this.deleted.fire({ sender: this, dataItem: item });
            return data;
        }).catch(exc => {
            this.processError(exc, 'delete');
            throw exc;
        });
    }
    update(item, args) {
        if (!this.canUpdate)
            throw errors.dataSourceCanntUpdate();
        if (!item)
            throw errors.argumentNull("item");
        this.checkPrimaryKeys(item);
        this.updating.fire({ sender: this, dataItem: item });
        return this.executeUpdate(item, args).then((data) => {
            Object.assign(item, data);
            this.updated.fire({ sender: this, dataItem: item });
            return data;
        }).catch((exc) => {
            this.processError(exc, 'update');
            throw exc;
        });
    }
    isSameItem(theItem, otherItem) {
        if (theItem == null)
            throw errors.argumentNull('theItem');
        if (otherItem == null)
            throw errors.argumentNull('otherItem');
        if (this.primaryKeys.length == 0)
            return theItem == otherItem;
        this.checkPrimaryKeys(theItem);
        this.checkPrimaryKeys(otherItem);
        for (let pk of this.primaryKeys) {
            if (theItem[pk] != otherItem[pk])
                return false;
        }
        return true;
    }
    checkPrimaryKeys(item) {
        for (let key in item) {
            if (item[key] == null && this.primaryKeys.indexOf(key) >= 0)
                throw errors.primaryKeyNull(key);
        }
    }
    select(args) {
        args = args || {};
        // fireCallback(this.selecting, this, args);
        this.selecting.fire({ sender: this, selectArguments: args });
        return this.executeSelect(args).then((data) => {
            let dataItems;
            let totalRowCount;
            if (Array.isArray(data)) {
                dataItems = data;
                totalRowCount = data.length;
            }
            else if (data.dataItems !== undefined && data.totalRowCount !== undefined) {
                dataItems = data.dataItems;
                totalRowCount = data.totalRowCount;
            }
            else {
                throw errors.queryResultTypeError();
            }
            this.selected.fire({ sender: this, selectResult: { totalRowCount, dataItems }, selectArguments: args });
            return { totalRowCount, dataItems };
        }).catch(exc => {
            this.processError(exc, 'select');
            throw exc;
        });
    }
    processError(exc, method) {
        exc.method = method;
        this.error.fire({ sender: this, error: exc });
        if (!exc.handled)
            throw exc;
    }
}
class DataSourceSelectArguments {
    constructor() {
        this.startRowIndex = 0;
        this.maximumRows = 2147483647;
    }
}


/***/ }),

/***/ "./out/deep-equal.js":
/*!***************************!*\
  !*** ./out/deep-equal.js ***!
  \***************************/
/*! exports provided: deepEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepEqual", function() { return deepEqual; });
function deepEqual(x, y) {
    if (x === y) {
        return true;
    }
    if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
        if (Object.keys(x).length != Object.keys(y).length)
            return false;
        for (var prop in x) {
            if (y.hasOwnProperty(prop)) {
                if (!deepEqual(x[prop], y[prop]))
                    return false;
            }
            else
                return false;
        }
        return true;
    }
    return false;
}


/***/ }),

/***/ "./out/errors.js":
/*!***********************!*\
  !*** ./out/errors.js ***!
  \***********************/
/*! exports provided: Errors, errors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return Errors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return errors; });
class Errors {
    argumentNull(argumentName) {
        let error = new Error(`Argument ${argumentName} cannt be null or emtpy.`);
        let name = "argumentNull";
        error.name = name;
        return error;
    }
    routeDataFieldNull(fieldName) {
        let msg = `The ${fieldName} field of route data cannt be null.`;
        let error = new Error(msg);
        let name = "routeDataFieldNull";
        error.name = name;
        return error;
    }
    argumentFieldNull(fieldName, argumentName) {
        let msg = `The ${fieldName} field of ${argumentName} cannt be null.`;
        let error = new Error(msg);
        let name = "argumentFieldNull";
        error.name = name;
        return error;
    }
    argumentTypeIncorrect(argumentName, expectedType) {
        let msg = `Argument ${argumentName} type error, expected type is ${expectedType}.`;
        let error = new Error(msg);
        let name = "argumentTypeIncorrect";
        error.name = name;
        return error;
    }
}
let errors = new Errors();


/***/ }),

/***/ "./out/format-date.js":
/*!****************************!*\
  !*** ./out/format-date.js ***!
  \****************************/
/*! exports provided: formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
function formatDate(date, showHourMinutes) {
    if (typeof date == "string")
        return date;
    let d = date;
    if (showHourMinutes)
        return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()} ${d.getHours() + 1}:${d.getMinutes()}`;
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}


/***/ }),

/***/ "./out/guid.js":
/*!*********************!*\
  !*** ./out/guid.js ***!
  \*********************/
/*! exports provided: guid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return guid; });
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}


/***/ }),

/***/ "./out/html.js":
/*!*********************!*\
  !*** ./out/html.js ***!
  \*********************/
/*! exports provided: HTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML", function() { return HTML; });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./out/errors.js");

class HTML {
    static addClassName(element, addonClassName) {
        if (element == null)
            throw _errors__WEBPACK_IMPORTED_MODULE_0__["errors"].argumentNull('element');
        if (!addonClassName)
            throw _errors__WEBPACK_IMPORTED_MODULE_0__["errors"].argumentNull('addonClassName');
        let sourceClassName;
        if (typeof element == 'string')
            sourceClassName = element;
        else
            sourceClassName = element.className;
        sourceClassName = sourceClassName || '';
        console.assert(addonClassName != null);
        if (sourceClassName.indexOf(addonClassName) >= 0)
            return sourceClassName;
        let className = `${sourceClassName} ${addonClassName}`;
        if (typeof element != 'string')
            element.className = className;
        return className;
    }
    static removeClassName(element, targetClassName) {
        let sourceClassName;
        if (typeof element == 'string')
            sourceClassName = element;
        else
            sourceClassName = element.className || '';
        if (sourceClassName.indexOf(targetClassName) < 0)
            return sourceClassName;
        sourceClassName = sourceClassName || '';
        sourceClassName = sourceClassName.replace(new RegExp(targetClassName, 'g'), '');
        sourceClassName = sourceClassName.trim();
        if (typeof element != 'string')
            element.className = sourceClassName;
        return sourceClassName;
    }
}


/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! exports provided: guid, pathContact, Errors, errors, Callback, DataSource, DataSourceSelectArguments, parseUrl, deepEqual, objectAssignDeep, formatDate, HTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _guid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guid */ "./out/guid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return _guid__WEBPACK_IMPORTED_MODULE_0__["guid"]; });

/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path */ "./out/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pathContact", function() { return _path__WEBPACK_IMPORTED_MODULE_1__["pathContact"]; });

/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ "./out/errors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return _errors__WEBPACK_IMPORTED_MODULE_2__["Errors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return _errors__WEBPACK_IMPORTED_MODULE_2__["errors"]; });

/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./callback */ "./out/callback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Callback", function() { return _callback__WEBPACK_IMPORTED_MODULE_3__["Callback"]; });

/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./out/data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return _data__WEBPACK_IMPORTED_MODULE_4__["DataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSourceSelectArguments", function() { return _data__WEBPACK_IMPORTED_MODULE_4__["DataSourceSelectArguments"]; });

/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./url */ "./out/url.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return _url__WEBPACK_IMPORTED_MODULE_5__["parseUrl"]; });

/* harmony import */ var _deep_equal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deep-equal */ "./out/deep-equal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepEqual", function() { return _deep_equal__WEBPACK_IMPORTED_MODULE_6__["deepEqual"]; });

/* harmony import */ var _assign_deep__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assign-deep */ "./out/assign-deep.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectAssignDeep", function() { return _assign_deep__WEBPACK_IMPORTED_MODULE_7__["objectAssignDeep"]; });

/* harmony import */ var _format_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./format-date */ "./out/format-date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return _format_date__WEBPACK_IMPORTED_MODULE_8__["formatDate"]; });

/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./html */ "./out/html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML", function() { return _html__WEBPACK_IMPORTED_MODULE_9__["HTML"]; });













/***/ }),

/***/ "./out/path.js":
/*!*********************!*\
  !*** ./out/path.js ***!
  \*********************/
/*! exports provided: pathContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathContact", function() { return pathContact; });
/** 连接多个路径 */
function pathContact(...paths) {
    paths = paths || [];
    if (paths.length == 0)
        return "";
    if (paths.length == 1) {
        return paths[0];
    }
    let str = paths.join("/");
    // 将一个或多个的 / 或者 变为一个 /，例如：/shop/test// 转换为 /shop/test/
    // 或者 D:\shop\test\  转换为 D:/shop/test/
    str = str.replace(/(\/+|\\+)/g, '/');
    //======================================================
    // fixed 把 http:// https:// 变为 http:/ https:/ 的 BUG
    str = str.replace("http:/", "http://");
    str = str.replace("https:/", "https://");
    //======================================================
    return str;
}


/***/ }),

/***/ "./out/url.js":
/*!********************!*\
  !*** ./out/url.js ***!
  \********************/
/*! exports provided: parseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return parseUrl; });
function parseUrl(url) {
    let i = url.indexOf("?");
    if (i < 0)
        return {};
    let query = url.substr(i + 1);
    return pareeUrlQuery(query);
}
function pareeUrlQuery(query) {
    let match, pl = /\+/g, // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g, decode = function (s) {
        return decodeURIComponent(s.replace(pl, " "));
    };
    let urlParams = {};
    while (match = search.exec(query))
        urlParams[decode(match[1])] = decode(match[2]);
    return urlParams;
}


/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./out/buttonOnClick.js":
/*!******************************!*\
  !*** ./out/buttonOnClick.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonOnClick = void 0;
const dialog_1 = __webpack_require__(/*! ./dialog */ "./out/dialog.js");
function buttonOnClick(arg1, arg2, arg3) {
    let element;
    let callback;
    let args;
    if (typeof (arg1) == 'function') {
        callback = arg1;
        args = arg2;
    }
    else if (typeof (arg2) == 'function') {
        element = arg1;
        callback = arg2;
        args = arg3;
    }
    else {
        throw new Error("Arguments error");
    }
    args = args || {};
    let execute = (event) => __awaiter(this, void 0, void 0, function* () {
        let button = event.currentTarget;
        button.setAttribute('disabled', '');
        try {
            yield callback(event);
            if (args.toast) {
                dialog_1.toast(args.toast);
            }
        }
        catch (exc) {
            console.error(exc);
            throw exc;
        }
        finally {
            button.removeAttribute('disabled');
        }
    });
    let result = function (event) {
        event.stopPropagation();
        event.cancelBubble = true;
        if (!args.confirm) {
            execute(event);
            return;
        }
        let text = typeof args.confirm == 'string' ?
            args.confirm :
            args.confirm();
        dialog_1.confirm({ message: text, confirm: (event) => execute(event) });
    };
    if (element)
        element.onclick = result;
    return result;
}
exports.buttonOnClick = buttonOnClick;


/***/ }),

/***/ "./out/dialog.js":
/*!***********************!*\
  !*** ./out/dialog.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.showPanel = exports.toast = exports.showToastMessage = exports.confirm = exports.alert = exports.hideDialog = exports.showDialog = exports.dialogConfig = void 0;
const errors_1 = __webpack_require__(/*! ./errors */ "./out/errors.js");
function dialogContainer() {
    return exports.dialogConfig.dialogContainer || document.body;
}
exports.dialogConfig = {
    dialogContainer: null
};
function addClassName(element, className) {
    console.assert(className != null, 'class is null');
    let c1 = (element.className || '').split(/\s+/);
    let c2 = className.split(/\s+/);
    var itemsToAdd = c2.filter(o => c1.indexOf(o) < 0);
    c1.push(...itemsToAdd);
    element.className = c1.join(' ');
}
function removeClassName(element, className) {
    console.assert(className != null, 'class is null');
    let c1 = (element.className || '').split(/\s+/);
    let c2 = className.split(/\s+/);
    var itemsRemain = c1.filter(o => c2.indexOf(o) < 0);
    element.className = itemsRemain.join(' ');
}
let dialogElements = new Array();
let dialogCallbacks = new Array();
/** 弹窗
 * @param element bootstrap 的 modal 元素
 */
function showDialog(element, callback) {
    removeClassName(element, 'out');
    element.style.display = 'block';
    setTimeout(() => {
        addClassName(element, 'modal fade in');
    }, 100);
    let dialogIndex = dialogElements.indexOf(element);
    if (dialogIndex < 0) {
        dialogElements.push(element);
        dialogIndex = dialogElements.length - 1;
        let closeButtons = element.querySelectorAll('[data-dismiss="modal"]') || [];
        for (let i = 0; i < closeButtons.length; i++) {
            closeButtons[i].onclick = () => hideDialog(element);
        }
        let allButtons = element.querySelectorAll('button');
        for (let i = 0; i < allButtons.length; i++) {
            allButtons.item(i).addEventListener('click', function (event) {
                let callback = dialogCallbacks[dialogIndex];
                if (callback) {
                    callback(event.currentTarget);
                }
            });
        }
    }
    dialogCallbacks[dialogIndex] = callback;
    element.tabIndex = 1;
    var firstField = element.querySelector('input:not([type]),input:not([readonly])[type="text"],input:not([readonly])[type="password"]');
    if (firstField) {
        firstField.focus();
    }
    else {
        element.focus();
    }
    element.addEventListener('keydown', on_keydown);
}
exports.showDialog = showDialog;
function hideDialog(element) {
    removeClassName(element, 'in');
    addClassName(element, 'modal fade out');
    element.removeEventListener('keydown', on_keydown);
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            element.style.removeProperty('display');
            reslove({});
        }, 1000);
    });
}
exports.hideDialog = hideDialog;
function on_keydown(event) {
    const KEY_CODE_ESC = 27;
    if (event.keyCode == KEY_CODE_ESC) {
        let dialogElement = findDialogElement(event.target);
        console.assert(dialogElement != null);
        if (dialogElement.getAttribute('data-keyboard') == 'false')
            return;
        hideDialog(dialogElement);
    }
}
function findDialogElement(e) {
    while (e) {
        let names = e.className.split(' ').filter(o => o);
        if (names.indexOf('modal') >= 0)
            return e;
        e = e.parentElement;
    }
}
function alert(args) {
    const elementId = "AA0321E3-B2E4-4971-99D8-BF2FF66748F2";
    let element = document.getElementById(elementId);
    if (element == null) {
        element = document.createElement('div');
        element.id = elementId;
        dialogContainer().appendChild(element);
        element.innerHTML = `
            <div class="modal-dialog">
                
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn close" data-dismiss="modal">
                            <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                        </button>
                        <h4 class="modal-title"></h4>
                    </div>
                    <div class="modal-body">
                        <h5></h5>
                    </div>
                    <div class="modal-footer">
                        <button name="ok" type="button" class="btn btn-primary">
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    if (typeof args == 'string') {
        args = { title: '&nbsp;', message: args };
    }
    showDialog(element);
    let titleElement = element.querySelector('.modal-title');
    titleElement.innerHTML = args.title;
    let bodyElement = element.querySelector('.modal-body');
    bodyElement.innerHTML = args.message;
    let modalFooter = element.querySelector('.modal-footer');
    let okButton = modalFooter.querySelector('[name="ok"]');
    okButton.innerHTML = args.confirmText || "确定";
    okButton.onclick = () => hideDialog(element);
}
exports.alert = alert;
function confirm(args) {
    let title;
    let message;
    let execute = args.confirm;
    let cancel = args.cancle || (() => Promise.resolve());
    let container = args.container || document.body;
    let confirmText = args.confirmText || '确定';
    let cancelText = args.cancelText || '取消';
    if (typeof args == 'string') {
        message = args;
    }
    else {
        title = args.title;
        message = args.message;
    }
    const elementId = "C3139D58-75F7-47B2-AEC4-76C3658848A0";
    let confirmDialogElment = document.getElementById(elementId);
    if (confirmDialogElment == null) {
        confirmDialogElment = document.createElement('div');
        confirmDialogElment.id = elementId;
        confirmDialogElment.className = 'modal fade';
        confirmDialogElment.style.marginTop = '20px';
        console.assert(dialogContainer != null, 'dialog container is null');
        confirmDialogElment.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                    </button>
                    <h4 class="modal-title">确认</h4>
                </div>
                <div class="modal-body form-horizontal">
                   
                </div>
                <div class="modal-footer">
                    <button name="cancel" type="button" class="btn btn-default">
           
                    </button>
                    <button name="ok" type="button" class="btn btn-primary">
        
                    </button>
                </div>
            </div>
        </div>
    `;
        dialogContainer().appendChild(confirmDialogElment);
    }
    let cancelElement = confirmDialogElment.querySelector('[name="cancel"]');
    cancelElement.innerHTML = cancelText;
    let okElement = confirmDialogElment.querySelector('[name="ok"]');
    okElement.innerHTML = confirmText;
    let modalHeader = confirmDialogElment.querySelector('.modal-header');
    let modalBody = confirmDialogElment.querySelector('.modal-body');
    let modalFooter = confirmDialogElment.querySelector('.modal-footer');
    modalBody.innerHTML = `<h5>${message}</h5>`;
    if (title) {
        modalHeader.querySelector('h4').innerHTML = title;
    }
    let cancelButton = modalFooter.querySelector('[name="cancel"]');
    let okButton = modalFooter.querySelector('[name="ok"]');
    let closeButton = modalHeader.querySelector('.close');
    closeButton.onclick = cancelButton.onclick = function () {
        cancel()
            .then(() => hideDialog(confirmDialogElment))
            .then(() => {
            confirmDialogElment.remove();
        });
    };
    okButton.onclick = function (event) {
        execute(event)
            .then(() => hideDialog(confirmDialogElment))
            .then(() => {
            confirmDialogElment.remove();
        })
            .catch(() => hideDialog(confirmDialogElment));
    };
    showDialog(confirmDialogElment);
}
exports.confirm = confirm;
exports.showToastMessage = toast;
function toast(obj) {
    if (obj == null)
        throw errors_1.errors.argumentNull('obj');
    let msg;
    let title;
    if (typeof obj == 'object') {
        if (obj.tagName == null) {
            let options = obj;
            msg = options.message;
            title = options.title;
        }
        else {
            msg = obj;
        }
    }
    else {
        msg = obj;
    }
    let dialogContainer = exports.dialogConfig.dialogContainer || document.body;
    let toastDialogElement = document.createElement('div');
    toastDialogElement.className = 'modal fade in';
    toastDialogElement.style.marginTop = '20px';
    console.assert(dialogContainer != null, 'dialog container is null.');
    dialogContainer.appendChild(toastDialogElement);
    let header = title ? `<div class="modal-header">
                                    <h4 class="modal-title">${title}</h4>
                               </div>` : '';
    toastDialogElement.innerHTML = `
                        <div class="modal-dialog">
                            <div class="modal-content">
                                ${header}
                                <div class="modal-body form-horizontal">
                                </div>
                            </div>
                        </div>
                    `;
    let modalBody = toastDialogElement.querySelector('.modal-body');
    console.assert(modalBody != null);
    if (typeof msg == 'string') {
        modalBody.innerHTML = `<h5>${msg}</h5>`;
    }
    else if (typeof msg == 'function') {
        modalBody.innerHTML = `<h5>${msg()}</h5>`;
    }
    else
        modalBody.appendChild(msg);
    // let dialog = new Dialog(toastDialogElement);
    // dialog.show();
    showDialog(toastDialogElement);
    setTimeout(() => {
        hideDialog(toastDialogElement).then(() => {
            toastDialogElement.remove();
        });
    }, 500);
}
exports.toast = toast;
exports.showPanel = (function () {
    let panel = document.createElement('div');
    panel.className = 'mobile-page panel';
    panel.style.display = 'none';
    document.body.appendChild(panel);
    panel.innerHTML = `
            <div class="modal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
    
                        </div>
                        <div class="modal-body">
    
                        </div>
                        <div class="modal-footer">
    
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop in">
            </div>
        `;
    let modal = panel.querySelector('.modal');
    let backdrop = panel.querySelector('.modal-backdrop');
    let header = panel.querySelector('.modal-header');
    let footer = panel.querySelector('.modal-footer');
    let body = panel.querySelector(".modal-body");
    let modalDialog = panel.querySelector(".modal-dialog");
    let isIOS = navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0;
    //=====================================================================
    // 点击非窗口区域，关窗口。并禁用上级元素的 touch 操作。
    // let panel = this.panel; //this.refs['panel'] as HTMLElement;
    // let modalDialog = this.modalDialog; //this.refs['modalDialog'] as HTMLElement;
    panel.addEventListener('touchstart', (event) => {
        let dialogRect = modalDialog.getBoundingClientRect();
        for (let i = 0; i < event.touches.length; i++) {
            let { clientX } = event.touches[i];
            if (clientX < dialogRect.left) {
                hide();
                return;
            }
        }
    });
    if (isIOS) {
        panel.addEventListener('touchstart', (event) => {
            let tagName = event.target.tagName;
            if (tagName == 'BUTTON' || tagName == 'INPUT' || tagName == 'A') {
                return;
            }
            event.stopPropagation();
            event.preventDefault();
        });
    }
    function hide() {
        modal.style.removeProperty('transform');
        backdrop.style.opacity = '0';
        window.setTimeout(() => {
            panel.style.display = 'none';
        }, 500);
    }
    return function showPanel(args) {
        args = args || {};
        panel.style.display = 'block';
        modal.style.display = 'block';
        setTimeout(() => {
            modal.style.transform = 'translateX(0)';
            backdrop.style.opacity = '0.5';
        }, 50);
        let setBodyHeight = () => {
            let headerHeight = header.getBoundingClientRect().height;
            let footerHeight = footer.getBoundingClientRect().height;
            let bodyHeight = window.innerHeight - headerHeight - footerHeight;
            body.style.height = `${bodyHeight}px`;
        };
        window.addEventListener('resize', () => setBodyHeight());
        setBodyHeight();
        if (args.header)
            args.header(header);
        if (args.body)
            args.body(body);
        if (args.footer)
            args.footer(footer);
        return {
            hide: () => hide()
        };
    };
})();


/***/ }),

/***/ "./out/errors.js":
/*!***********************!*\
  !*** ./out/errors.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = void 0;
const maishu_toolkit_1 = __webpack_require__(/*! maishu-toolkit */ "./node_modules/maishu-toolkit/dist/index.js");
exports.errors = new maishu_toolkit_1.Errors();


/***/ }),

/***/ "./out/image.js":
/*!**********************!*\
  !*** ./out/image.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fileToBase64 = exports.imageFileToBase64 = exports.renderImage = exports.generateImageBase64 = exports.loadImageConfig = void 0;
const errors_1 = __webpack_require__(/*! ./errors */ "./out/errors.js");
exports.loadImageConfig = {
    /** 图片显示的文字 */
    imageDisaplyText: '',
};
let config = exports.loadImageConfig;
let draws = {
    text: (imageText, options) => {
        return (ctx, canvasWidth, canvasHeight) => {
            // let fontSize1 = Math.floor(canvasHeight / 3 * 0.8);
            let fontSize = Math.floor((canvasWidth / imageText.length) * 0.6);
            let bgColor = 'whitesmoke';
            let textColor = '#999';
            // let fontSize = Math.min(fontSize1, fontSize2);
            options = Object.assign({
                fontSize,
                bgColor,
                textColor
            }, options);
            ctx.fillStyle = options.bgColor; //'whitesmoke';
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            // 设置字体
            ctx.font = `Bold ${options.fontSize}px Arial`;
            // 设置对齐方式
            ctx.textAlign = "left";
            // 设置填充颜色
            ctx.fillStyle = options.textColor; //"#999";
            let textWidth = fontSize * imageText.length;
            let startX = Math.floor((canvasWidth - textWidth) * 0.5);
            let startY = Math.floor((canvasHeight - options.fontSize) * 0.3);
            // 设置字体内容，以及在画布上的位置
            ctx.fillText(imageText, startX, Math.floor(canvasHeight * 0.6));
        };
    }
};
function generateImageBase64(width, height, obj, options) {
    var canvas = document.createElement('canvas');
    canvas.width = width; //img_width;
    canvas.height = height; //img_height;
    var ctx = canvas.getContext('2d');
    let draw = typeof obj == 'string' ? draws.text(obj, options) : obj;
    draw(ctx, width, height);
    return canvas.toDataURL();
}
exports.generateImageBase64 = generateImageBase64;
const PREVIEW_IMAGE_DEFAULT_WIDTH = 200;
const PREVIEW_IMAGE_DEFAULT_HEIGHT = 200;
/**
 * 在 IMG 元素上渲染图片
 * @param element 要渲染的 IMG 元素
 * @param options 渲染选项，默认将 IMG 元素的 SRC 属性渲染出来
 */
function renderImage(element, options) {
    options = options || {};
    if (!element)
        throw errors_1.errors.argumentNull('element');
    let imageUrl = element.src || '';
    if (imageUrl.indexOf('data:image/png;base64') == 0 || element['rendered']) {
        return;
    }
    element.setAttribute("image-url", imageUrl);
    //====================================================
    // 通过 URL 设置图片大小
    if (imageUrl && !options.imageSize) {
        var match = imageUrl.match(/_\d+_\d+/);
        if (match && match.length > 0) {
            var arr = match[0].split('_');
            if (arr.length >= 2) {
                var width = new Number(arr[1]).valueOf();
                var height = new Number(arr[2]).valueOf();
                options.imageSize = { width, height };
            }
        }
    }
    //====================================================
    options.imageSize = options.imageSize || { width: PREVIEW_IMAGE_DEFAULT_WIDTH, height: PREVIEW_IMAGE_DEFAULT_HEIGHT };
    //====================================================
    if (!options.imageText) {
        options.imageText = element.title || '';
        ;
    }
    let s = options.imageSize;
    //设置默认的图片
    var src_replace = generateImageBase64(s.width, s.height, draws.text(options.imageText || config.imageDisaplyText)); //getPreviewImage(imageText || config.imageDisaplyText, img_width, img_height);
    element.setAttribute('src', src_replace);
    return new Promise((resolve, reject) => {
        if (options.loadImage) {
            options.loadImage()
                .then(base64 => base64 ? Promise.resolve(base64) : Promise.reject({}))
                .catch(() => {
                let base64 = generateImageBase64(s.width, s.height, draws.text('加载图片失败', { fontSize: 24 }));
                return Promise.resolve(base64);
            })
                .then((base64) => {
                element.src = base64;
                element['rendered'] = true;
            });
        }
        else {
            var image = new Image();
            image.onload = function () {
                element.src = this.src;
                element['rendered'] = true;
                resolve(element.src);
            };
            image.src = imageUrl;
        }
    });
}
exports.renderImage = renderImage;
function imageFileToBase64(imageFile, size) {
    if (!imageFile)
        throw errors_1.errors.argumentNull('imageFile');
    return new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.readAsArrayBuffer(imageFile);
        reader.onload = (ev) => {
            var blob = new Blob([event.target['result']]);
            window['URL'] = window['URL'] || window['webkitURL'];
            var blobURL = window['URL'].createObjectURL(blob);
            var image = new Image();
            image.src = blobURL;
            image.onload = () => {
                var canvas = document.createElement('canvas');
                size = size || {};
                let width = size.width != null && size.width < image.width ? size.width : image.width;
                let height = size.height != null && size.height < image.height ? size.height : image.height;
                if (width != null && height == null) {
                    height = width / image.width * image.height;
                }
                else if (width == null && height != null) {
                    width = height / image.height * image.width;
                }
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(image, 0, 0, width, height);
                let data = canvas.toDataURL("image/jpeg", 0.5);
                resolve({ base64: data, width, height });
            };
        };
    });
}
exports.imageFileToBase64 = imageFileToBase64;
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = function () {
            resolve(reader.result.toString());
        };
        reader.onerror = function () {
            reject(reader.error);
        };
        reader.readAsDataURL(file);
    });
}
exports.fileToBase64 = fileToBase64;


/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Less = exports.fileToBase64 = exports.imageFileToBase64 = exports.loadImageConfig = exports.renderImage = exports.generateImageBase64 = exports.dialogConfig = exports.confirm = exports.alert = exports.toast = exports.hideDialog = exports.showDialog = exports.buttonOnClick = void 0;
var buttonOnClick_1 = __webpack_require__(/*! ./buttonOnClick */ "./out/buttonOnClick.js");
Object.defineProperty(exports, "buttonOnClick", { enumerable: true, get: function () { return buttonOnClick_1.buttonOnClick; } });
var dialog_1 = __webpack_require__(/*! ./dialog */ "./out/dialog.js");
Object.defineProperty(exports, "showDialog", { enumerable: true, get: function () { return dialog_1.showDialog; } });
Object.defineProperty(exports, "hideDialog", { enumerable: true, get: function () { return dialog_1.hideDialog; } });
Object.defineProperty(exports, "toast", { enumerable: true, get: function () { return dialog_1.toast; } });
Object.defineProperty(exports, "alert", { enumerable: true, get: function () { return dialog_1.alert; } });
Object.defineProperty(exports, "confirm", { enumerable: true, get: function () { return dialog_1.confirm; } });
Object.defineProperty(exports, "dialogConfig", { enumerable: true, get: function () { return dialog_1.dialogConfig; } });
var image_1 = __webpack_require__(/*! ./image */ "./out/image.js");
Object.defineProperty(exports, "generateImageBase64", { enumerable: true, get: function () { return image_1.generateImageBase64; } });
Object.defineProperty(exports, "renderImage", { enumerable: true, get: function () { return image_1.renderImage; } });
Object.defineProperty(exports, "loadImageConfig", { enumerable: true, get: function () { return image_1.loadImageConfig; } });
Object.defineProperty(exports, "imageFileToBase64", { enumerable: true, get: function () { return image_1.imageFileToBase64; } });
Object.defineProperty(exports, "fileToBase64", { enumerable: true, get: function () { return image_1.fileToBase64; } });
var less_1 = __webpack_require__(/*! ./less */ "./out/less.js");
Object.defineProperty(exports, "Less", { enumerable: true, get: function () { return less_1.Less; } });


/***/ }),

/***/ "./out/less.js":
/*!*********************!*\
  !*** ./out/less.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Less = void 0;
const less = __webpack_require__(/*! less */ "less");
const errors_1 = __webpack_require__(/*! ./errors */ "./out/errors.js");
class Less {
    static pathname(url) {
        let el = document.createElement('a');
        el.href = url;
        return el.pathname;
    }
    static load(url, options) {
        return __awaiter(this, void 0, void 0, function* () {
            options = options || {};
            let { wrapperClassName, name } = options;
            if (!options.baseUrl) {
                let { protocol, host } = location;
                let pathname = Less.pathname(url);
                console.assert(pathname[0] == "/");
                options.baseUrl = `${protocol}//${host}${pathname}`;
            }
            let res = yield fetch(url);
            let text = yield res.text();
            if (wrapperClassName) {
                text = `.${wrapperClassName} {${text}}`;
            }
            Less.renderByText(text, options);
        });
    }
    static renderByRequireJS(moduleName, options) {
        return __awaiter(this, void 0, void 0, function* () {
            options = options || {};
            let req;
            if (options.contextName) {
                req = requirejs({ context: options.contextName });
            }
            else {
                req = requirejs;
            }
            req([`text!${moduleName}`], function (str) {
                console.assert(str);
                Less.renderByText(str, options);
            });
        });
    }
    static renderByText(lessText, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!lessText)
                throw errors_1.errors.argumentNull("lessText");
            if (typeof lessText != "string")
                throw errors_1.errors.argumentTypeIncorrect("lessText", "string");
            options = options || {};
            if (options.baseUrl) {
                let extractUrlParts = less.FileManager.prototype.extractUrlParts;
                less.FileManager.prototype.extractUrlParts = function (url) {
                    return extractUrlParts.apply(less, [url, options.baseUrl]);
                };
            }
            less.render(lessText, function (e, result) {
                if (e) {
                    console.error(e);
                    return;
                }
                let styleElement = null;
                let name = options.name;
                if (name) {
                    console.assert(document.head != null);
                    let head = document.head;
                    styleElement = head.querySelector(`style[data-name="${name}"]`);
                }
                if (styleElement == null) {
                    styleElement = document.createElement('style');
                    document.head.appendChild(styleElement);
                    if (name)
                        styleElement.setAttribute("data-name", name);
                }
                styleElement.innerText = result.css;
            });
        });
    }
    static parse(lessText) {
        return new Promise((resolve, reject) => {
            less.render(lessText, function (e, result) {
                if (e) {
                    reject(e);
                    return;
                }
                resolve(result.css);
            });
        });
    }
}
exports.Less = Less;


/***/ }),

/***/ "less":
/*!***********************!*\
  !*** external "less" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_less__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map
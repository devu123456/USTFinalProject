(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg\">\n    <br><br><br>\n<div class=\"container border border-secondary shadow-lg p-3 mb-5 bg-white rounded\" \nstyle=\"width:850px;max-width:850px;background-image: linear-gradient(to right,white, white);\"> \n    <link\n            href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n            rel=\"stylesheet\">\n    \n    \n            <div class=\"container\">\n                    <a routerLink=\"/view\"><img src=\"assets/back.jpg\" style=\"width:30px;\"/></a> \n                    <h3 class=\"d-flex justify-content-center\">ADD/EDIT VENDOR DETAILS</h3>\n                    <hr>\n                    <section id=\"cover\">\n                <div class=\"form-group row\">\n                 <div class=\"col-10\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"alphabet only\" pattern=\"/^[A-Za-z]+$/\" hidden>\n                 </div>\n                  </div>\n              <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-2 col-form-label\">VENDOR NAME *</label>\n                     <div class=\"col-10\">\n                        <input class=\"form-control\" type=\"text\" placeholder=\"alphabet only\"\n                         pattern=\"/^[A-Za-z]+$/\" [(ngModel)]=\"vendorDetail.vName\" name=\"vName\" autocomplete=\"off\" required>\n                      </div>\n             </div>\n                                \n             <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-2 col-form-label\">VENDOR ADDRESS *</label>\n                  <div class=\"col-10\">\n                     <input class=\"form-control\" type=\"text\" placeholder=\"alphabet only\"\n                   [(ngModel)]=\"vendorDetail.vAddress\" pattern=\"/^[A-Za-z]+$/\" name=\"vAddress\" autocomplete=\"off\" required>\n                  </div>\n             </div>\n             <div class=\"form-group row\">\n                 <label for=\"example-text-input\" class=\"col-2 col-form-label\">LOCATION *</label>\n                 <div class=\"col-10\">\n                 <select class=\"form-control\" [(ngModel)]=\"vendorDetail.vLocation\" name=\"vLocation\" required>                                                  \n                    <option>Trivandrum</option>\n                    <option>Chennai</option>\n                    <option>Bangalore</option>\n                 </select>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                        <label for=\"example-text-input\" class=\"col-2 col-form-label\">SERVICE *</label>\n                        <div class=\"col-10\">\n                            <input class=\"form-control\" [(ngModel)]=\"vendorDetail.vService\" name=\"vService\" type=\"text\" autocomplete=\"off\" id=\"\">\n                        </div>\n                    </div>\n                    \n                    <div class=\"form-group row\">\n                        <label for=\"example-datetime-local-input\" class=\"col-2 col-form-label\">PINCODE *</label>\n                        <div class=\"col-10\">\n                            <input class=\"form-control\" [(ngModel)]=\"vendorDetail.pincode\" type=\"text\" name=\"pincode\"  id=\"\" required>\n                        </div>\n                    </div><br/>\n\n                    <label style=\"margin-right:500px; font-weight: 150px; color:#26734d\"\n                     class=\"d-flex justify-content-center\">CONTACT PERSON DETAILS</label>\n                    <hr>\n\n                    <div class=\"form-group row\">\n                        <label for=\"example-text-input\" class=\"col-2 col-form-label\">NAME *</label>\n                        <div class=\"col-10\">\n                                <input class=\"form-control\" [(ngModel)]=\"vendorDetail.cName\" name=\"cName\" autocomplete=\"off\" required>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"example-text-input\" class=\"col-2 col-form-label\">DEPARTMENT </label>\n                        <div class=\"col-10\">\n                                <input class=\"form-control\" [(ngModel)]=\"vendorDetail.department\"  name=\"department\" autocomplete=\"off\" required>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"example-email-input\" class=\"col-2 col-form-label\">EMAIL *</label>\n                        <div class=\"col-10\">\n                            <input class=\"form-control\" [(ngModel)]=\"vendorDetail.email\" name=\"email\" type=\"email\" autocomplete=\"off\" id=\"\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"example-tel-input\" class=\"col-2 col-form-label\">PHONE *</label>\n                        <div class=\"col-10\">\n                            <input class=\"form-control\" type=\"tel\" name=\"phone\" [(ngModel)]=\"vendorDetail.phone\" id=\"\" pattern =\"^[0-9]*$\" required>\n                        </div>\n                    </div>\n        \n                    <a routerLink=\"/view\" style=\"margin-left:300px\" (click)=\"add()\" type=\"button\" class=\"btn btn-primary\">SAVE</a>\n                    </section>\n                    </div>\n                    </div>\n                    <br><br>\n                            \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" >\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\n<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" ></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" ></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\"></script>\n\n\n<section id=\"nav-bar\">\n    <nav class=\"navbar navbar-expand-sm navbar-light bg-light\">\n            <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/logo.jpg\"></a>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" \n            aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-icon\"></span>\n            </button>  \n          </nav>\n</section>\n\n<div class=\"bg\"><br><br>\n    <div class=\"login-box\">\n        \n        <h2 style=\"margin-left: 350px;\">Login</h2>\n        <form class=\"container\" style=\"margin-left: 350px;\" autocomplete=\"off\" (submit)=\"loginUser($event)\">\n        <div class=\"textbox\">\n          <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n            <input type= \"text\" name=\"username\" required=\"\" placeholder=\"username\" required>\n        </div>\n        <div class=\"textbox\">\n            <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n                <input type= \"password\" name=\"\" required=\"\"placeholder=\"password\"  required>\n                \n        </div>\n          <div class=\"input\">\n            <input type=\"submit\"  class=\"button\" value=\"LOGIN\">\n            <br/>\n           \n          </div>\n          <div >\n            \n          </div>\n     </form>  \n    </div>\n\n<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n</div> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg\">\n    <br><br><br>\n<div class=\"container border border-secondary shadow-lg p-3 mb-5 bg-white rounded\" style=\"width:880px;max-width:870px;background-image: linear-gradient(to right,white, white);\"> \n<link rel=\"stylesheet\"\n    href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\">\n    <a routerLink=\"\"><img src=\"assets/logout.png\" style=\"width:30px;\"/></a> \n    <a routerLink=\"/add\" class=\"btn btn-info\" style=\"float:right;\">ADD VENDOR</a>\n    <h4 style=\"margin-left:100px;font-size:20px\">VENDOR'S LIST</h4>\n\n<br/>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<div class=\"container input-group md-form form-sm form-1 pl-0\" style=\"width:400px;\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text cyan lighten-2\" id=\"basic-text1\"><i class=\"fa fa-search\"\n          aria-hidden=\"true\"></i></span>\n    </div>\n    <input class=\"form-control my-0 py-1\" type=\"text\" placeholder=\"Search by name/service...\"  [(ngModel)]=\"searchString\" (ngModelChange)=\"search(searchString)\"aria-label=\"Search\">\n   <button (click)=\"search(searchString)\" class=\"btn-outline-info\">Search</button>\n  </div>\n\n<br/>\n<div class=\"container\">\n    <br>\n    <table class=\"table-bordered table-hover\" style=\"margin-left:-10px; width:750px;margin-bottom:40px; text-align:center;\">\n        <thead class=\"thead-light\">\n            <tr>\n                <th>Vendor Id</th>\n                <th>Vendor Name</th>\n                <th>Location</th>\n                <th>Service</th>\n                <th>Contact Person</th>\n                <th>Phone Number</th>\n                <th>Edit/Disable</th>\n            </tr>\n        </thead>\n        <tbody class=\"table-striped table-hover\">\n            <tr *ngFor=\"let detail of details | paginate: { itemsPerPage: 10, currentPage: p }; let i = index\">\n                    <td>{{detail.vId}}</td>\n                    <td>{{detail.vName}}</td>\n                    <td>{{detail.vLocation}}</td>\n                    <td>{{detail.vService}}</td>\n                    <td>{{detail.cName}}</td>\n                    <td>{{detail.phone}}</td>\n                    <td><a routerLink=\"/add\"(click) = \"edit(detail.vId)\"><img src=\"assets/edit.jpg\" style=\"width:25px;\"/></a>&nbsp;&nbsp;\n                      <a mwlConfirmationPopover\n                      [popoverTitle]=\"popoverTitle\"\n                      [popoverMessage]=\"popoverMessage\"\n                      placement=\"left\"\n                      (confirm)=\"disable(detail.vId)\"\n                      (cancel)=\"cancelClicked=true\"> \n                      <img src=\"assets/disable.jpg\" style=\"width:25px;\"/>\n                    </a>\n                    </td>\n            </tr> \n        </tbody>\n    </table>\n</div>\n<div style=\"margin-left: 250px;\">\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n  </div>\n</div>\n<br><br><br>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/add/add.component.scss":
/*!****************************************!*\
  !*** ./src/app/add/add.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body,\nhtml {\n  height: 100%;\n}\n\n.bg {\n  /* The image used */\n  background-image: url(\"https://wallpaperplay.com/walls/full/d/f/1/100151.jpg\");\n  /* Full height */\n  height: 100 vh;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.card {\n  background: url(\"https://media3.giphy.com/media/3ov9k1Eg38tFJH1tbq/giphy.gif\");\n  height: 100 vh;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border: none;\n  opacity: 0.4;\n}\n\n.btn {\n  margin-left: 380px;\n  background-color: #00b32d;\n  width: 150px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: white;\n}\n\n.button:hover {\n  color: #26734d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXI5L0FuZ3VsYXI4L1VTVFByb2ovc3JjL2FwcC9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFlBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBRUEsOEVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0FGOztBREdBO0VBQ0ksOEVBQUE7RUFDQSxjQUFBO0VBQ0Esc0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2FkZC9hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LFxyXG5odG1sIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5iZyB7XHJcbiAgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvYWJzdHJhY3QtbWVkaWNhbC13YWxscGFwZXItdGVtcGxhdGUtZGVzaWduXzUzODc2LTYxODAyLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOnVybChcImh0dHBzOi8vd2FsbHBhcGVycGxheS5jb20vd2FsbHMvZnVsbC9kL2YvMS8xMDAxNTEuanBnXCIpO1xyXG4gIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgaGVpZ2h0OiAxMDAgdmg7XHJcbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kOnVybChcImh0dHBzOi8vbWVkaWEzLmdpcGh5LmNvbS9tZWRpYS8zb3Y5azFFZzM4dEZKSDF0YnEvZ2lwaHkuZ2lmXCIpO1xyXG4gICAgaGVpZ2h0OiAxMDAgdmg7XHJcbiAgICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvcGFjaXR5Oi40O1xyXG59XHJcblxyXG4uYnRue1xyXG4gIG1hcmdpbi1sZWZ0OiAzODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMzJkO1xyXG4gIHdpZHRoOjE1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlcntcclxuICBjb2xvcjogIzI2NzM0ZDtcclxufVxyXG4iLCJib2R5LFxuaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJnIHtcbiAgLyogVGhlIGltYWdlIHVzZWQgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93YWxscGFwZXJwbGF5LmNvbS93YWxscy9mdWxsL2QvZi8xLzEwMDE1MS5qcGdcIik7XG4gIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIGhlaWdodDogMTAwIHZoO1xuICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vbWVkaWEzLmdpcGh5LmNvbS9tZWRpYS8zb3Y5azFFZzM4dEZKSDF0YnEvZ2lwaHkuZ2lmXCIpO1xuICBoZWlnaHQ6IDEwMCB2aDtcbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyOiBub25lO1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5idG4ge1xuICBtYXJnaW4tbGVmdDogMzgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGIzMmQ7XG4gIHdpZHRoOiAxNTBweDtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBjb2xvcjogIzI2NzM0ZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _vendorcontactDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vendorcontactDetails */ "./src/app/vendorcontactDetails.ts");
/* harmony import */ var _main_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main-service.service */ "./src/app/main-service.service.ts");




let AddComponent = class AddComponent {
    constructor(_mainservice) {
        this._mainservice = _mainservice;
        this.vendorDetail = new _vendorcontactDetails__WEBPACK_IMPORTED_MODULE_2__["VendorContactDetails"]();
    }
    ngOnInit() {
        this.getVendorById();
    }
    reset() {
        this.vendorDetail.vName = null;
        this.vendorDetail.vAddress = null;
        this.vendorDetail.vLocation = null;
        this.vendorDetail.pincode = null;
        this.vendorDetail.email = null;
        this.vendorDetail.department = null;
        this.vendorDetail.phone = null;
        this.vendorDetail.cName = null;
        this.vendorDetail.vService = null;
    }
    add() {
        console.log(this.vendorDetail);
        this._mainservice.add(this.vendorDetail).subscribe((response) => {
            console.log(response);
            this.reset();
        }, (error) => {
            console.log(error);
        });
    }
    getVendorById() {
        this._mainservice.getVendorDetailsById().subscribe((Data) => {
            this.vendorDetail = Data,
                console.log(Data);
        }, (error) => {
            console.log(error);
        });
    }
};
AddComponent.ctorParameters = () => [
    { type: _main_service_service__WEBPACK_IMPORTED_MODULE_3__["MainServiceService"] }
];
AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add.component.scss */ "./src/app/add/add.component.scss")).default]
    })
], AddComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");






const routes = [
    { path: 'view', component: _view_view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"] },
    { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"] },
    { path: "", component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'final-project';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-confirmation-popover */ "./node_modules/angular-confirmation-popover/fesm2015/angular-confirmation-popover.js");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _view_view_component__WEBPACK_IMPORTED_MODULE_10__["ViewComponent"],
            _add_add_component__WEBPACK_IMPORTED_MODULE_11__["AddComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
            angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_13__["ConfirmationPopoverModule"].forRoot({
                confirmButtonType: 'danger'
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body,\nhtml {\n  height: 100%;\n}\n\n.bg {\n  /* The image used */\n  background-image: url(\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBAQEBEQDw8PDg8PDw8QEA8PFRAOFREWFhUVFRUYHSggGBolHRUVITEhJSkrLy4uFx8zODMtNygtLisBCgoKDg0OGhAQGyslHyUtLS0tLi0tLS8rLSstKy0tLS0tLS0tLS0tLS0tLS0tKy0rLS0tLS0tKy0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgMEBQAGB//EAEQQAAEDAgMEBwQHBQYHAAAAAAEAAgMEERIhMQVBUWEGEyJxgZGhMlLB0RQjQlNicrEzQ4KS4QdUc6LC0hU0Y2ST8PH/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKBEAAgICAgIBBAIDAQAAAAAAAAECEQMSITFBUTIEFGFxIpGxwdET/9oADAMBAAIRAxEAPwD2QRCATBfFowCmCVMqQBCZAIhUhhTBBEK0AUyARCpAMEQgiFaGMEQgEwVIAhEIBMFSGEIhBMFaAIRCCZUgCEQgEwVIYQigiFQBRQCKpAEIrkQqQzgiuRVpAcjZcEypIAWRsjZFOgBZdZGyNlVACy6yNlydAePCYIIhfMoyGCKATBWgCEQgEwVIYQmCUJgrQBCYIBEKkAUwQRCpDGCKARCtAMEQgEwVIYQiEAmCpAEIhAJgrQwhMEAiqQBRCARCoAohAm2ZyCrvmLsm5DjvPyVATSTNbqc+Gp8lCasn2W+Lj8AjFTKw2IKkxclbrJT7o7h81wMvvf5Wq6Go4VSY9SmJpRqGnwIUrKwfaaW8/aCsYUrogdypMKZIxwIuCCOIzTWVPqC03YbH0PeFYgmxZEYXcOPcrQ7JbI2RXWV0MFl1k1l1k6A8YmCUJ2NJNgCSdAM7r5dGJK9jAxpDiXm+JtrYeGaQIEWyORGRHNNa2uSt8+BnBMEEU0AwRQCKtAMmCVMFSAITBKEwVoYQmCARCpAFMEAiFaGMEUAmVIAohBMFSGEIoBMrQHIk2FyuUDjiPIaJ3QAN3nPTcFYZHZBjUz5A3XXcBqlY0iQBB8rW6nPgMz5KsXud+EcB81JFCAq2GP15Pst8XG3oF3aP2rflA+KcBcnbAj6ri538xQNOOfmVMAiW2NjuT5EVTTBRyUvBzgdxDiLK7ZAhFsKMgyVEZylLhuxBrr+JF1PDtmQftI2u5tJb6G6uPZdV3QjerWVonlF2m2lG/fhPB/Z9dFcsvPvpUzC9osHOA4AkLSOb2OzICsUbXF7cBs6+R4KuFLBKWEOGoXz0GlJNmZYrqV8bu3mXZ34lJNO59i43wtDRuyCNVVulN3blCFrOS2el0MZFBMpQBCYJQmCpAEJglCYK0BNduACxx3NzfKyQIBTTMDbYXYrgE8jwWnL5KECIQTBCEFMlCZWhhCYJQmCpAEJggEQrQxgigFxNlQCSu3eaZgUbUXO3DxKzbAZ8u4a8eCVke8oZDVVpq4DIKopy6BySNAEBHrQsf6XdMKlbLHQtzXEgThwWS2oU7JkVQ1I0LJmNvoq8E1jfXkrMNnEXyTXLKFXWTytAOWiVJqnQCEJXNUlkCEhFchDCpnNSEJCo84EwShT1PVjDgJIwjFiys7fZeMlaszECu7NMQcetFxbLvWb1pPsjxOQ8lq02wjIzE957hkPT4rp+nxzlO4q69jSJaCKF2PE4CxNgTmAsqapaHEND3AHIgfNSikDCQE4aFU2nFRqmhlUVB+7d5hOKg72P8MJ+KSt2lDB+1ka0kXDc3OI5NGZWY/pQz93DM/mcLAfUn0RHDKXSJckjYbVN3nD+YFvrorDSvNO6RvOtLl/ij/Yoxt1oN+pmiO8swPHiLi/ktPt8i8f4FvE95RSxiMhw7SoHXxWLs7pBDIQwva15yGIFmI8LO3+a2k5zk0otVRd2FMEqYKEAQmShMrQxgiEAiFSAYIhAIhWhjBRSu3KQmwJ4KkZfVEuhNkxduRLg0XKjB3rN2hWWBURi5MTlSBX1/NZn0kkrOnqS4qWEL0oYlFHK5ts1myswA3d1mLMWGHBbW/G6LZVmmoDUayvjAYY8fsDrC4ZdZvDTwTcbHsa7JVYjm5rx79ti9m4nngwXt3nRFm0Kg6RtaObif0AWcoe2WpM9zFMrkUi8JFtGob7UYI4tcb+RHxXs9kbTgMF3HC8DQ5FZrBs+Gaxn7NXCQLkZFcsqPb4ks3LWwtvWnFJdumu9RNauldGqkpdDWXWRBRRF2BGQlIUxCQhNoDyYudPMqRlPvOZUwCK8lRSMjmtV2HaDmtwhUwkmlaxpc9wa1ouXONgB3rWEpRf8WFkznXN95Xn9pbWfI4w0psAbSTjOx3tj5/i8uIWoq5Ks4IsUcByc83a6UcB7rfU8tFoUlE2JoAAFgt4QUeZd+v8ApLZlUmxWt7Tu045uc43JPEk6q82laNytOUTitdmzOiIxDgo3QtO5SkpSqQijU7OY8WLQfBT7GMkEjW9YXQ3zjf2gB+EnNvhlyUxSOVX7Bccnp56yF7sMThiAuW6G3HmEAvIVcRuJIzhkYbtcNQfiOS3dibVFQ03GGVlhIz9HN/Cf6LPNC3uujWM7dM0wmUtQWdnACMu1fio42FxAAuTuWbjTpcmhwTBCykkkxWyAsAMt6aAARCUJgqQytXy2aBxPoFWjlBaBh7QcSXXOY4WVXaVReQjc3s+WvrdOxhYGuJacTcQsb2HPgVbi9TJy5HraiwDRv17l5ratVc4QtjaznYet6rAwMDcQucR3uPosOlnp2smkqMWPD9RbQO5rqwYdezDI23RDG0NGJ3kr9dW0opAWPLqkmzY2guc48ABmTyWds7Y09bZ7iaemOjyO3IP+m06D8R8AV7DZWxoKUHqYw0kduV3ae4fiec7ctFrLIl+QgjxMWxa2YF7mspYgLl9Q7CQ3jgFyPGy9LEGTUQpSzFbLrsHVl442uSB4+SlqZDUusMoGnIfeOH2jy4Dx7rkbQ0WCwlnl0jSMdTOo9hRRgAN05lXW0UY+z6lS413WLCmyiP6GzhbxKgn2Ux4sb+it9aiJE9WBiUmw5o5gY3tkj91xLXX4DcfEhey2jtSOGC7gWOAAzGQNve0WU1+/gtRkgcOII0PBdOPM6qQ4/wAejJ2b0ljkyJFicvgt6CcHfe+h4/1WBXdFqeXtNaYH+/DZovzZ7J8r81mupqyj/wC5hGrmXxNHEs1HhdZPFG7h/QLJJfI9yF2FYWxekMcwAxC+6+WfA8Ct1sgKpR9m0ZKS4PMBJPOyMXe5rBxcQ39VE7ZM7vameBwbhZ6gXQi6OMBxO7TuLiXHzK8/7fX5P+iKZTl22D2YI3Su94gsYPE5nwHio4tlyTOD6l2Kxu1gFmN7m/E3K346NjNAEzgi1H4oKK0cIYLAWSuU7lBIhEMrvURUrioyVoiGRlCydRTSALSKslnONlXlnA3rI2ntprDhb2n+6PjwWPLJNLqS0cG5eq6o4PZm5PwesjqmnK4VaRxikbPF7bNW6B7Dq09/yXl20JB1dfjcqwyskiycTIznqO47/FWsK8CcmfUqGpbM1j2nsvAI+PiDl3rWnpgxoc12fIr570M2q173wYvaBljGha4WDx45G3Ir2H0k6PNuB+yfl4rilFYnKLX6OvHPaNliOMuvbOwuUAlafVFZcFjKKtqRFG+R2jGk953DxNh4qQuAFybAC5JyAHNeF6S7e+kSMghN4GPBe/7140t+Eep7gtccHJilKkXg8nM5nf3qwZLMKqpKubCwngPVdGts5robavSJzoOodhDGi7ncuCTYPR/rS2oqm9nIw07hlbc+Qfo3z4CPYGzRM7r5bdVG7sA6SSjUni1vqe7Pel2kXuMcDDK/fbRvMnQeK0yZH8UEU5cs0HyBupssevr+tPUx+z+8I3j3fmnq9muawyVMhcTZrIYyWhzzoC7UjebW0Kl2fSNiaAAAd54rnk0kbaV2CKNwFgLDnkpBAd7vIKYusonzAKYqxnfRxxJ8Qj1DefmVCaocVwqhxWqiIm+jt5+ZR+jDcT6KNtSFPG8FVQCfRzuIPfkoJHzREudG/q9Q8DE23MjTxWi1bdO2zWjg0eacY8miVnnqTagO9akM4dopKvZUMuZYGu99nZd6ZHxWbJsyWLNh61nLJw8N/gnKAai7U6PxTkvb9TN96we0fxt0d+vNZRqK6D6swma2kjGueHN3Zj45repK2+RWg1yjdol4/XBE9QPU71A8rlyGhA9RPTyPVdxJ081g0SyOR6rPJOnqrBZ4pcKEyGV+q4m67qxwVjCkkyCpOyaKk5AC8f0h2u4Hqoj2zqfdbx71t7brcDXHUgZAbzuCp9HejBd9dUe084iP/dy7YOOKO0jNLZ/gxtmUJOYaSTmScyStmOkI1C9NNSCIB8bRhb7bbA3b73eFbYxkjb2aQeSzf1V80XoeQdTqCqo7hemrdngZt04LOliyW2PMpdGco0eWpw6mmjmaD9U8PNt7ftDxFx4r6qCHDcQRccwV4OqhBB7l6jotUY6WK+sYMJ/gOEemE+Kj6tWlIrC+Wi+YC32HFvLUeRUT5ph7h54T81cSuauSMjejze1qWeYWfIXN+7HZHkNfFYQoSx2lrFe4lYqFRADqF1Y8vgykik5Ze0ZMb2xA7xcjOxPLeQN3EhXdoVIiaTqQPXQLU6HbMws+kyAGWW5YSPZjO8cMWvdZb7ax2MlHZ0T0WyXPa0SXiha0BkLTZxaPeO79e5blPC2NoaxoY0bgLDv/AKp1k7RqusvG02jH7V/HiwHhx8uK5drOtJJEMsnXy4/3UdxH+I73/LkOaWqrWsGZAWe+vfK7qaRhkLcnO0Yz8ztB3a8lfouirSQ+qeah+uAXbE3w1d45clagu5E9mM/bLpXFtPHJM4ZHq2l1u8jIeKZuydoS59XHF/iSt/RmJe4hjaxoaxrWNGQa0BoA5AKRaKaXSK1PDjorXHWWmHc6Y/6EjujNe3MOp38mySA/5mAeq94EwVKbHqj5rUPqKf8A5mGSNunWZPZ/O0kDxWhs/aFyM8ivdEAgggEEWIOYI4FeF6RbHFLLG+EYYZn4erGkcutm8GkXNt1jusBaaZEo0epoo8RHDU9y17rE6N1ol+kYdIZ+oB4ljGlx/mc4fwrZR0aIdG6S6N07GQVVG1+fsv8AeHx4qpge3IgnmASCtJG6mUVICjI5VJJOCleCe5IW2XHkJZXLOKRwUxCQtXMySLChhUtl1lAUR4VQrpLArRkyCwtqS6rfBG5GeR0iLZtCJXmR+bWO7I4v4nuut8KtQQ4I2N32ufzHMqysc2Teb9eBwjSGWc36iTD+6kPY/C7e35f0WiFHUwCRpa7Q6Eag7iOaUJUVQz24gs00mIuaPa9po4jeP0UlDUkExSZPbl3jcRyKtyx6ObkRmFfMHaF3wzy9XHa67oztEQzvhcbNks9vJ2h+C366iE7SW9mQDMHf3/NfPulDJIbTNBDoHXe3f1Z9ryyPgV6WNxzwcTBpwkfVgUCvFdHOlzXMaHm4trfNesp6+OQdh4PK9j5LiyYZwfKN45EySVZ9STfC3Nx9FdndbIZk6BYG0JnzPNHSG8pt9JqM8NOw7r++dw1VYlbFIp0tL9Nquqbc08BvNJ779MIPmB/EeC96LAbgAO4ABZFGyChhbE0gAbyQC9/E8TyHIIOM8/st6pnvytI8Wxak/mt3LWctnx0hwWv7DtXajWt9otYThBAJfKfdjaM1Ug2TLU26+9PTj2adhtI8fjcPZ7hn3LWoNlxxHHnJMRYzSEOdbgNzRyACvpJpdFVfZHS07ImhkbWsYNGtFh/95qcJUUrKGRCUIqkMYIpUVaYDheX/ALRqvqqNr/tioj6v/EwvsvTL53/arV4paSnH2Q+oeOZOBn6SLbCtppCfQ/QGu+jgtdcskti3nF73qV9EjkDhdpBHEL5dsUWAXraGUjQkJ53UrM4y8Hp7rrrNiqHcSpxIeK5n9Ql4NUW8SGNQNKcLCX1U31wWkQPULgp3hRkLaaMyAhLZTlqGFYSiIhwoEKbAlc1ZOIypUaLz8jcczW7sVz3DMr0FXoVibMbile73RbxJ/oVrB6wlIxyK2ka6YJQiFxIsYJkoRCpDK1fR9YA5pwyM9l3H8LuX6KvS19jgkBY8ag/qOIWkElRTskFntDhu3Edx1C1jPwxNBYQcxqq+0tmx1DbPGdrB41HLmOSgdsx7f2UuXuyC/wDmHyQENTp9X34z8lrFpO4slptUz55tboFV0znPozHNFe4ixiJ7eTQ7skfxKhSwbULxG2mkxncXRADmTitbmvqrdmyv/aSho3iMEn+Y/JaNLSsjFmNtfU6l3eTqur7ySXhgsa8nh9m9D654BqqlsY+6ie52XN1h6HxXq6DYnVMETZOrjGeCFjY7neXOcXOcTxvdagTBYyzSn2UopEFNQxxm7GDFpjdd7yPzOuVaCUJlF2UMilCIVIYyISoqgGRCUIqkwGRShFVYxl8q/tCv/wATz/u0OH8t3/HEvql15Lp70ddUtZPAMU8ALSwayxE3sPxA3IG+55LbDPWRMujz2yX5BenpHrwmzayxsbgg2IIsQRqCNxXp6GuGWarLyYnp4Xq2xyx6eqHFXoqgLilA1izQaVIqjJgpRKo/8WzTYmc1IWrly7JIkGBdgXLlGqGAsUb2rlyylFAUa0dk9yyNjs7Dne+9x8Bl8CguXPkdY3+1/syl8jRCK5cuVDGTBcuVIAohcuVIYwRXLlaAYIhcuVIYyIXLlSAKYLlypAEIhFcqGELly5UAUVy5MAo3XLlQBXXRXJjMzamwaapOKWIF/wB40lj+Xabme43WHL0La0nqqmZvKSNsw7uzhXLlak0Kkzm9G6hulRG7vikb8SpmbHqh+9i/klXLlW34FqiyzZtSNZ4hnbKGR3+pWG7Nqf7xH/4D/vXLkbMdI//Z\");\n  /* Full height */\n  height: 100 vh;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n/*NAVIGATION BAR*/\n\n#nav-bar {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.navbar-brand img {\n  height: 60px;\n  padding-left: 30px;\n}\n\n.navbar {\n  background: #fff;\n}\n\n.navbar-toggler {\n  border: none !important;\n}\n\n.nav-link {\n  color: #555 !important;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n/*--------------------------LOGIN FORM--------------------*/\n\n.login-box {\n  width: 280px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: black;\n}\n\n.login-box h1 {\n  float: left;\n  font-size: 40px;\n  padding: 20px;\n  margin-bottom: 50px;\n}\n\n.textbox {\n  width: 100%;\n  overflow: hidden;\n  font-size: 20px;\n  padding: 8px 0;\n  margin: 8px 0;\n  border-bottom: 1px solid;\n  color: black;\n}\n\n.textbox i {\n  width: 26px;\n  float: left;\n  text-align: center;\n  color: black;\n}\n\n.textbox input {\n  border: none;\n  outline: none;\n  background: none;\n  font-size: 18px;\n  width: 80px;\n  float: left;\n  margin: 0 10px;\n  color: black;\n}\n\n.button {\n  width: 100%;\n  background: none;\n  border: 2px solid;\n  color: black;\n  padding: 5px;\n}\n\n::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: black;\n  opacity: 1;\n  /* Firefox */\n}\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: black;\n  opacity: 1;\n  /* Firefox */\n}\n\n::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: black;\n  opacity: 1;\n  /* Firefox */\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: black;\n  opacity: 1;\n  /* Firefox */\n}\n\n::message {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: red;\n  opacity: 1;\n  /* Firefox */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXI5L0FuZ3VsYXI4L1VTVFByb2ovc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsWUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFHRCxvMU5BQUE7RUFDQSxnQkFBQTtFQUNDLGNBQUE7RUFDQSxzQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0RGOztBRElBLGlCQUFBOztBQUNBO0VBRUksd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDRko7O0FES0E7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7QUNIQTs7QURLQTtFQUNJLGdCQUFBO0FDRko7O0FES0E7RUFFSSx1QkFBQTtBQ0hKOztBREtBO0VBRUksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNISjs7QURNQSwyREFBQTs7QUFFQTtFQUVFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDTEY7O0FET0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRE9BO0VBRUUsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FDTEY7O0FET0E7RUFFRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0xGOztBRFFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDTEY7O0FET0E7RUFFRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDTEY7O0FEU0E7RUFBZ0IseUNBQUE7RUFDZCxZQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7QUNKZDs7QURFQTtFQUFnQix5Q0FBQTtFQUNkLFlBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQ0pkOztBREVBO0VBQWdCLHlDQUFBO0VBQ2QsWUFBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FDSmQ7O0FERUE7RUFBZ0IseUNBQUE7RUFDZCxZQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7QUNKZDs7QURPQTtFQUFZLHlDQUFBO0VBQ1YsVUFBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FDRmQiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHksXHJcbmh0bWwge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmJnIHtcclxuICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUkRSb1dsMm5LVFo0c0hHTFEzWE1XWTA4cDg2a2JWT3hlaFF1dlVWMU95eVhqREZkZWFYd1wiKTtcclxuIC8vYmFja2dyb3VuZC1pbWFnZTp1cmwoXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFrR0J4QVNFQklRRHhBUEVBOFBEUThQRHc4UERROE5EdzBQRlJFV0ZoVVJGUlVZSFNnZ0dCb2xHeFVWSVRFaEpTa3JMaTR1Rng4ek9ETXROeWd0TGlzQkNnb0tEZzBPR2hBUUZ5MGRGUjB0S3kwdEt5MHRLeTB0TFMwdExTMHRLeTB0TFMwckxTMHRMUzB0S3kwdExTMHRMUzByTnlzdEt5MHRMUzByTFMwck4vL0FBQkVJQUtnQkt3TUJJZ0FDRVFFREVRSC94QUFiQUFBQ0F3RUJBUUFBQUFBQUFBQUFBQUFEQkFFQ0JRQUdCLy9FQURBUUFBSUNBUU1FQVFNQ0JBY0FBQUFBQUFBQkFnTVJCQ0V4QlJKQlVXRVRJcEZ4Z1JReW9iRUdGVUpTd2RIdy84UUFHZ0VBQXdFQkFRRUFBQUFBQUFBQUFBQUFBUUlEQUFRRkJ2L0VBQjhSQUFNQkFBTUJBUUVCQVFBQUFBQUFBQUFCQWhFREVpRXhRUk5SQlAvYUFBd0RBUUFDRVFNUkFEOEE4ekUwS29jQzBZR2pwSUhoT2p3TkdOUFNYZFkzQ3ZZdENyeVRkQndIVHAzNkN1bkE3VkRZNmRadXdXaEZWaHFhdC9ReFRUa2JWU1F5WXFnTlJYbGNBTlJUaGpOTm1OaU5VOGxsYXdOSk5DRU1GdnFlbCtROUZIa0hla3VTMDhoelZMU0EyV1BBQlJ5WGNzc1BYV2kwOGh6dGF6dFBYdnNlbTZQWE9QM0pjckR6SEprYUtQM0xDOG5zT24xU2pCNVhPRHBpOVBRLzR1SGEzL0ExVmxrZVZzVm5ySDZhL2NicnNXTjhDK3FpcFNTV0cvaEQ2ZXcwMHZHTFh4bktMMmYvQUFJUmpQaE5ySnV5YmpISGI0M2Z3STMyUldISGZIS05wTGs0bDkwODVyN0pMTUc4NGVRbW40ejhFOVh0VTV1U2oycmJZQm9iTm12S0JwNWp4Y2o5OENURTlZeG0xaWVxWU5GdjRDaFBZc3BDOFpGbkllR2M0MUpvckFYK29GZ3pyaGl2MFppeFBWenlGc25oR2ZaUGM2Skpjajh3aVJDUlh2SlVqVXlHSFdNckZrc2hJNXFaZ3FaV1IyVGt5TkRISWtuQlY1STBNZVdqVVBhZUJQMFM5Y1Q1cDJlbG94VGtiaWdGS0hZb1R1TW1XMDZEOW1kZ1ZhRzZIdUZXVVJhR253RWhTMkhnRlVDeVpYb2hlTlNYSkZxOURFa1VhR1ZDMUlLRWZZSy9TNUdWRXN5aXNsVUpveVhSaGhZMWhySWtRUTAzaHpkTVkxb2NSa25zOE5NOVRWMVNEUzJTOW5rcU1taFhJN09MbXc3UCtma3FGaVBWMDl1TXA3TitTOFlKUEtXNTUrclVQYjRIVjFSK2tkUzVFejBwNXB6MGQxdDZpdjEvQm13c2huTTNzQjF1cmxQbmhjR2RabGdya1JIbDV2ZkFQVTdJcVQ3ZU0rVEV0dWVjcDQvUTBOVkJtWGVpVHM4cm0xdlE5WFVzYlQzK1M5K29qSlpUWDV3ekpzRjVJSzVDWGQ1ZzdicVlyeUFmVWZhWXJLQU9VQ2syVGVtMXA3VkpiTVorc2x5MStUejBFMThmb013bDdPdUxRT3pOR3pVcDhBWk1IV2dyY1M2NUJHdEJTS3haTTVGR3dWWk5vTXBGbXhmSmRNaTZCaGZKWk1FaTZKVlFVZ3FaYklGVEt1d2pWRGlhaVRYRGZBV0VOeDdUVlI5SHlqczcwdEExVURsZGUyeGR3QzF4d0wyS3pKU0ZSZnNMNUtya0tvY1pvWTFCQ2RkZzdSTTZJclMwRVNpRGFHcHhCdUk3WWFrcENCRTRoRWl6UXlZamtTc2dCY1JxMTdnUWQvVG5xUWxDSDRWaU5USDlQTTZlS3kzRWtNMTA3Qlk2Y1owa29QbDRINjRROE5QOXowdU9OUjNSeEptVXRHMlcvd0F2K0RZY2t2U0Y3dGRYRmM1K0VWL21sOVkvOG9YMDgzMWpTcUMvVTh4cUdqYTY1MUJ6azl6eldwdE9LN1crSGsvOUxsMTRCdVlOU0tPVzV6WUZaeVlTeXNpSk01RlpvR0V4WWVKV01TNWViRmFPd1EyWGEyQXlaYitnalJlTEpCeEx0bS9vSmhETFFtVWNnZmR1SzdOZzJtUTJEVm14WkxJbFdiQ2NuRXhSRElWUTJERUlZR3FGc0xSbGtiMDU4bzJlaEl6V3RpWEVpQ0RwRzBzbG9EQlh0RFNnUmcybWFMd2dHcjJBUnN4K2dhRmlma3RGRHpnMG1YakFYalpndi9IUVM5djRPaWFYNnlxYS9SanR3QTFFdTJQeXhYVWRRYmYyckM5K1FMc2Izazhncm1uNGlkY2krSWlUSURLc3QyWUpMU1BVcld3anVhSzl4Vm90TllObWZBNjFiOWhLK29TWGtSd1Z3WG5ucGZvVmRJMGJlcFM5aUdvMXNuNUlrSzZobEh6MC9yRnU2ZjZLYW0xc3piOGo5d3RNVldjMUlSYVpkRjdRSmFhRXdLaU1sVWN5cW8yQm9TQ1JYa0ZYSEl3V21oY0pZR1VReVJEZ1AyRmFBTUhLWGdhZGJBWFFEM0ZhSWlXakVERmg0S1Q0VC9BdmNHRnNJanZRYU9pbmdWc2cwOTBKVmg2c1lyV1EzYUIwcjNYeVBZUkowUE02VnBXdzFUc3hXdGpVR2ZOVWRVamtNQnEwS1ZNWlZtREpuUkxDU2dBbHNXbGUrRURraG0xK0dwcC9BTTJBbExjWmxBRTYwWWsweXVXMXlYcmdYcnFDcUF5UXlrR29CcXEyeTBZaDZ5a3lPb0pqU2RPc05XeVpJdXBXRmVxd1U3U0pJWWxGQUpJSHdSb3BnakJiQmJ0R1RCZ0tVUUZzQnR4QTJvcG9ISWhiVUtXMG1qSVh2clpreVRreWJhMkI3RFJ0ckYzV1VtaVRrV1oyQWtvbFUycy9KWlVKZ1hUb0xrWHBieU8xMVpaU2FNa1hxcWJXZkExcGRNbTl5L1p0aEJxVmdxcUt6QzMwSnFWSHR3MG12V0RCMVZQbVBIbzJicFpGTGF0ak9nY3M2SWFIVFplV3VQNnMxSVYvK1JXbXZDRG8zWVdJT3hnRlBUcVhLR2E2c2gvcDRFYkxMajB3cmRIMlB1VDg4ZWkzYXpTMVVNcHI0TWpESTFXRTZqcU0xUUdhNndHblpvMXgyUENhS3hPbFlJdmd0Z3RGQTZsT29IQVR3VDJia1RHU0RnT1JSSXN6a2hraGNDVmwwZ2NBOEVWbERwRUpCSUlqQmVJNlE2UVdKZGxFeTVWRG9Fd01nN1FPYUZvVm9Ha1Rna21KcEJoR0FGa1Jsb0hKRGdhRkpRRjdvajBvZ0xJQkp1VE9uQUJPdCtqUW1nY283QlRKT1RLc2pnb251TzIxNUY1VWxFeWJrNzZtWDlxeC9kamVqbmxpTFdCblFjc3BOR1gwMW1WN2dVNU1pREthV1pleVFPTHlUT3QrTnpxbGlTVDhtN01WcjBaakV0Q0JlRWRpc25nWnNwMXdjcWlraUxFRHBuc0ViTTM0Vlh3WHNnSVMwcnl6U2xOQzByTnlGNFRxVXpQMDhqV3FsbEk4L1RhYXVpdXpsSGx1UmVOampKaklwM0Vkd3ZVcVhzbXlpWlNiT3lIcUt5V3lVd0VwN2g2RmxqS1RJWXBxOWo5TUV2QXBGalZjenE0NUx3a2pweFFOd0dlM0lPU0hxQm5JSkZsSXEwUVNid1FzMkNteVdjb2lONkFvZ2tTTzA3QVpNaVpGSkVuRkVZRXdVMEVtd1VwQjBWaTg0bEhFUEpBcEJKdEMwZ0Z5R2JCZVl4TmlqUXhwY0o1QnlSYUxDbUtodWN5YXR4WlNHYVdVVEdYb2FUd0IxTDI3bC9NdUNiV1JLRGFNMkZsZFAxWE8wc0orL1kzR1NmQmgyMEpTYTM1TDFUbEgrVi9zK0FkMktyZjZlaXE0T3N0UzhtUTlYWmpHY0ZQcVB5WjJVL3AvZzdaZnU4QWNzRlhMZERHU2JlZzNUSnZnNjVPTDhQOEFJVFRhbkJmcmN2dWpKZVVadjFTZDhmb2o4WjZTaldSZXoyWTBqeTlkNDNIV1NTMmJ3SjBLTGsvMDJiWkpjdkFocU5hbHRIY3o3TDIvSlJMSU9vdFh2dzBxN3NtaHByREJqSm9kMGQyLzZobWNacG8ybE1OVFBjVFVpOWRoVkk2RlhwdDFMWXJJRHA5UnNUT1owZVlXMVlVMU8yR0FUWVM2ejdmM0JRWnk4bjBtMzZFUllvbVdRbUFKSVpaRTRDa0VDeWpZV2FLWUd3QUNRTmhMQUVwQkpzNlRBU1pNNWdaeUNLMlVtd1V5OHBBYkpERTJDZklUdEt3WGt1d3BDa3hZZXFRc1hya09ncGpqaDVPcVFTUEJXRHhsdmdiQ21DT3ZTN3ZuRzR1Z3R6N3BOK3lrbGdSb2svb2V2ZU9Dc2EyTGQrTjB4aXJXNzRrdjNRckNtZzBhOEJWTkN0bXA5RlByQy9BNkpkV3QreVB2dTJFNklPVzRwcmRRNTJLSzRXMy9BR2FORDQrRHFxQVAxbWowL3A2bHkvd2J5Nk5VNDR5NHYvZG5QNVJqNlRVZG82OWJKOEM5VXZ3dkNsTDFHYjFEcDBxM2pacnhKY01VamxQRE5XeXh2a3p0ZnMwMEowSlhLVDhDUmFmSU9NOE1IWFlkZEx5SzRFTnlpOVNYejZEeFBQMDNibXBScmRzUy9LTitGWnRmcHBWV05ES3RNcitLajdLL3hqOEFid2YrbUQ5dHVYZ3ZDUm5WMkRkY3lMQXEwYlRMS1FDTWdpa2JDaVlkU083Z1NrYzVESWJTMDVBWE1tYkFUWmhHenJaaThtV25JQk5tSnRrV1NGcHpMV1NGcHpHU0p0blRzWUZ6SW5NWG5ZTWtUYkhWTWx6RktwNVJMWXlRZEduTXRVeFJTSitzL0RHd0dtNUNTN2QyTFgzTEdGKzRoVlpubC8xQ3gzSEg3NkVpZ05zZzA1WVJTTldSV2hSZkJTU2VlTmg5VllJZUJISU1GWXJZc1hrdHRnUGVLNURwNWJTVCs1dnl6Vm9zUE8wWFlrdldUMC9UOU4zWXg1UFJjajRhdlQ2OG5vdEhvNHNTMEdpY1Z3UHgxSFlGUWw5T25qbi9BRTdYOU1TamxIbHVwVnRKL0I3RmF4VFdHZWIvQU1UdU1JT1htWDJ4L1VTNFcrRzVrbXRSZzEyQnB6Mk0yaWVRcnN5eVRrNHh5RXhpdTBScmtHVEpPVEQ4YkEwSkdmR1FlRXlia0pvVnlHNnBHZFRJZGhJVHFQSTlCbDhpc0poSXlOaFZNTjNFOXdKTTVzUFVPbG5NSE5rTXF3NEJzcE1CYUdrQnNEMUVZcFl4V3hqZGdwYWdxU1RGcHlBU1lXeUlDYUdTSnN2VGJoN2pFM3NJWUx3bTF3TmdORDVJY2dmMURzc2JBYVdjMnR4blRhNWY2dnloS1VRVWc0RGNONk1sSjhyQVg2cVJtZE9ubllkZUJzR1ZFenZ5RGNza25NVnlEU0ZMQkd3T2IzSlRFYUQyUG5uZWVrNkIxcU1jUm50amJQZzQ0OUxEcFBvV2g2bENVRmhyZ3BmUExPT0Z6V1dWTnlBVmpUMlo0ei9FM1dmcTI5c1htRmYyckhFbjVaeHdoUGtmbUNXajFISytCcFNPT0owaUlTRXhtdVp4eE9rQWJpOWlZeUlPSnRCSEtKRGNKSEhDWU5JZUVnMFpuSEd3b2dpbVE1RW5HR0tPUlZ5T09OZ0FVMkNtempoa0l4ZXhpMDJjY0VteGFiQVRPT0dSTmxNRVlPT0h3UUpHQlpvZzRPQU83U2s2empnNEFhMHRQYXZsL3dCaHJCeHd6UmtUR0pMaWNjREFsTEliZm9BeWNjSlNBei8vMlE9PVwiKTtcclxuIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBa0dCeElRRUJBUUVCRVFEdzhQRGc4UER3OFFFQThQRlJBT0ZSRVdGaFVWRlJVWUhTZ2dHQm9sSFJVVklURWhKU2tyTHk0dUZ4OHpPRE10TnlndExpc0JDZ29LRGcwT0doQVFHeXNsSHlVdExTMHRMaTB0TFM4ckxTc3RLeTB0TFMwdExTMHRMUzB0TFMwdExTMHRLeTByTFMwdExTMHRLeTB0TFMwdExTMHRMZi9BQUJFSUFLZ0JMQU1CSWdBQ0VRRURFUUgveEFBYkFBQUNBd0VCQVFBQUFBQUFBQUFBQUFBQkFnTUVCUUFHQi8vRUFFUVFBQUVEQWdNRUJ3UUhCUVlIQUFBQUFBRUFBZ01FRVJJaE1RVkJVV0VHRXlKeGdaR2hNbExCMFJRalFsTmljckV6UTRLUzRRZFVjNkxDMGhVMFkyU1Q4UEgveEFBYUFRQURBUUVCQVFBQUFBQUFBQUFBQUFBQUFRSURCQVVHLzhRQUtCRUFBZ0lDQWdJQkJBSURBUUFBQUFBQUFBRUNFUU1TSVRGQlVUSUVGR0Z4SXBHeHdkRVQvOW9BREFNQkFBSVJBeEVBUHdEMlFSQ0FUQmZGb3dDbUNWTXFRQkNaQUloVWhoVEJCRUswQVV5QVJDcEFNRVFnaUZhR01FUWdFd1ZJQWhFSUJNRlNHRUloQk1GYUFJUkNDWlVnQ0VRZ0V3VklZUWlnaUZRQlJRQ0twQUVJcmtRcVF6Z2l1UlZwQWNqWmNFeXBJQVdSc2paRk9nQlpkWkd5TmxWQUN5NnlObHlkQWVQQ1lJSWhmTW95R0NLQVRCV2dDRVFnRXdWSVlRbUNVSmdyUUJDWUlCRUtrQVV3UVJDcERHQ0tBUkN0QU1FUWdFd1ZJWVFpRUFtQ3BBRUloQUpnclF3aE1FQWlxUUJSQ0FSQ29Bb2hBbTJaeUNydm1Mc201RGp2UHlWQVRTVE5icWMrR3A4bENhc24yVytMajhBakZUS3cySUtreGNsYnJKVDdvN2g4MXdNdnZmNVdxNkdvNFZTWTlTbUpwUnFHbndJVXJLd2ZhYVc4L2FDc1lVcm9nZHlwTUtaSXh3SXVDQ09JelRXVlBxQzAzWWJIMFBlRllnbXhaRVlYY09QY3JRN0piSTJSWFdWME1GbDFrMWwxazZBOFltQ1VKMk5KTmdDU2RBTTdyNWRHSks5akF4cERpWG0rSnRyWWVHYVFJRVd5T1JHUkhOTmEydVN0OCtCbkJNRUVVMEF3UlFDS3RBTW1DVk1GU0FJVEJLRXdWb1lRbUNBUkNwQUZNRUFpRmFHTUVVQW1WSUFvaEJNRlNHRUlvQk1yUUhJazJGeXVVRGppUElhSjNRQU4zblBUY0ZZWkhaQmpVejVBM1hYY0JxbFkwaVFCQjhyVzZuUGdNejVLc1h1ZCtFY0I4MUpGQ0FxMkdQMTVQc3Q4WEczb0YzYVAycmZsQStLY0JjbmJBajZyaTUzOHhRTk9PZm1WTUFpVzJOanVUNUVWVFRCUnlVdkJ6Z2R4RGlMSzdaQWhGc0tNZ3lWRVp5bExodXhCcnIrSkYxUER0bVFmdEkydTV0SmI2RzZ1UFpkVjNRamVyV1ZvbmxGMm0ybEcvZmhQQi9aOWRGY3N2UHZwVXpDOW9zSE9BNEFrTFNPYjJPeklDc1ViWEY3Y0JzNitSNEt1RkxCS1dFT0dvWHowR2xKTm1aWXJxVjhidTNtWFozNGxKTk81OWk0M3d0RFJ1eUNOVlZ1bE4zYmxDRnJPUzJlbDBNWkZCTXBRQkNZSlFtQ3BBRUpnbENZSzBCTmR1QUN4eDNOemZLeVFJQlRUTURiWVhZcmdFOGp3V25MNUtFQ0lRVEJDRUZNbENaV2hoQ1lKUW1DcEFFSmdnRVFyUXhnaWdGeE5sUUNTdTNlYVpnVWJVWE8zRHhLemJBWjh1NGE4ZUNWa2U4b1pEVlZwcTRESUtvcHk2QnlTTkFFQkhyUXNmNlhkTUtsYkxIUXR6WEVnVGh3V1Myb1U3SmtWUTFJMExKbU52b3E4RTFqZlhrck1ObkVYeVRYTEtGWFdUeXRBT1dpVkpxblFDRUpYTlVsa0NFaEZjaERDcG5OU0VKQ284NEV3U2hUMVBWakRnSkl3akZpeXM3ZlplTWxhc3pFQ3U3Tk1RY2V0RnhiTHZXYjFwUHNqeE9ROGxxMDJ3akl6RTk1N2hrUFQ0cnArbnh6bE80cTY5alNKYUNLRjJQRTRDeE5nVG1Bc3FhcGFIRU5EM0FISWdmTlNpa0RDUUU0YUZVMm5GUnFtaGxVVkIrN2Q1aE9LZzcyUDhNSitLU3QybERCKzFrYTBrWERjM09JNU5HWldZL3BRejkzRE0vbWNMQWZVbjBSSERLWFNKY2tqWWJWTjNuRCtZRnZyb3JEU3ZOTzZSdk90TGwvaWovWW94dDFvTitwbWlPOHN3UEhpTGkva3RQdDhpOGY0RnZFOTVSU3hpTWh3N1NvSFh4V0xzN3BCRElRd3ZhMTV5R0lGbUk4TE8zK2EyazV6azBvdFZSZDJGTUVxWUtFQVFtU2hNclF4Z2lFQWlGU0FZSWhBSWhXaGpCUlN1M0tRbXdKNEtrWmZWRXVoTmt4ZHVSTGcwWEtqQjNyTjJoV1dCVVJpNU1UbFNCWDEvTlpuMGtrck9ucVM0cVdFTDBvWWxGSEs1dHMxbXlzd0EzZDFtTE1XR0hCYlcvRzZMWlZtbW9EVWF5dmpBWVk4ZnNEckM0WmRadkRUd1RjYkhzYTdKVllqbTVyeDc5dGk5bTRubmd3WHQzblJGbTBLZzZSdGFPYmlmMEFXY29lMldwTTl6Rk1ya1VpOEpGdEdvYjdVWUk0dGNiK1JIeFhzOWtiVGdNRjNIQzhEUTVGWnJCcytHYXhuN05YQ1FMa1pGY3NxUGI0a3MzTFd3dHZXbkZKZHVtdTlSTmF1bGRHcWtwZERXWFdSQlJSRjJCR1FsSVV4Q1FoTm9EeVl1ZFBNcVJsUHZPWlV3Q0s4bFJTTWptdFYySGFEbXR3aFV3a21sYXhwYzl3YTFvdVhPTmdCM3JXRXBSZjhXRmt6blhOOTVYbjlwYldmSTR3MHBzQWJTVGpPeDN0ajUvaTh1SVdvcTVLczRJc1VjQnljODNhNlVjQjdyZlU4dEZvVWxFMkpvQUFGZ3Q0UVVlWmQrdjhBcExabFVteFd0N1R1MDQ1dWM0M0pQRWs2cTgybGFOeXRPVVRpdGRtek9pSXhEZ28zUXRPNVNrcFNxUWlqVTdPWThXTFFmQlQ3R01rRWpXOVlYUTN6amYyZ0IrRW5OdmhseVV4U09WWDdCY2NucDU2eUY3c01UaGlBdVc2RzNIbUVBdklWY1J1Skl6aGtZYnRjTlFmaU9TM2RpYlZGUTAzR0dWbGhJejlITi9DZjZMUE5DM3V1aldNN2RNMHdtVXRRV2RuQUNNdTFmaW80MkZ4QUF1VHVXYmpUcGNtaHdUQkN5a2treFd5QXNBTXQ2YUFBUkNVSmdxUXl0WHkyYUJ4UG9GV2psQmFCaDdRY1NYWE9ZNFdWWGFWUmVRamMzcytXdnJkT3hoWUd1SmFjVGNRc2IySFBnVmJpOVRKeTVIcmFpd0RSdjE3bDVyYXRWYzRRdGphem5ZZXQ2ckF3TURjUXVjUjN1UG9zT2xucDJzbWtxTVdQRDlSYlFPNXJxd1lkZXpESTIzUkRHME5HSjNrcjlkVzBvcEFXUExxa216WTJndWM0OEFCbVR5V2RzN1kwOWJaN2lhZW1PanlPM0lQK20wNkQ4UjhBVjdEWld4b0tVSHFZdzBrZHVWM2FlNGZpZWM3Y3RGckxJbCtRZ2p4TVd4YTJZRjdtc3BZZ0xsOVE3Q1EzamdGeVBHeTlMRUdUVVFwU3pGYkxyc0hWbDQ0MnVTQjQrU2xxWkRVdXNNb0duSWZlT0gyank0RHg3cmtiUTBXQ3dsbmwwalNNZFRPbzloUlJnQU4wNWxYVzBVWSt6NmxTNDEzV0xDbXlpUDZHemhieEtnbjJVeDRzYitpdDlhaUpFOVdCaVVtdzVvNWdZM3RrajkxeExYWDREY2ZFaGV5Mmp0U09HQzdnV09BQXpHUU52ZTBXVTErL2d0UmtnY09JSTBQQmRPUE02cVE0L3dBZWpKMmIwbGpreUpGaWN2Z3Q2Q2NIZmUraDQvMVdCWGRGcWVYdE5hWUgrL0Rab3Z6WjdKOHI4MW11cHF5ai93QzVoR3JtWHhOSEVzMUhoZFpQRkc3aC9RTEpKZkk5eUYyRllXeGVrTWN3QXhDKzYrV2ZBOEN0MXNnS3BSOW0wWktTNFBNQkpQT3lNWGU1ckJ4Y1EzOVZFN1pNN3ZhbWVCd2JoWjZnWFFpNk9NQnhPN1R1TGlYSHpLOC83Zlg1UCtpS1pUbDIyRDJZSTNTdTk0Z3NZUEU1bndIaW80dGx5VE9ENmwyS3h1MWdGbU43bS9FM0szNDZOak5BRXpnaTFING9LSzBjSVlMQVdTdVU3bEJJaEVNcnZVUlVyaW95Vm9pR1JsQ3lkUlRTQUxTS3Nsbk9ObFhsbkEzckkybnRwckRoYjJuKzZQandXUExKTkxxUzBjRzVlcTZvNFBabTVQd2VzanFtbks0VmFSeGlrYlBGN2JOVzZCN0RxMDkveVhsMjBKQjFkZmpjcXd5c2tpeWNUSXpucU80Ny9GV3NLOENjbWZVcUdwYk0xajJuc3ZBSStQaURsM3JXbnBneG9jMTJmSXI1NzBNMnExNzN3WXZhQmxqR2hhNFdEeDQ1RzNJcjJIMGs2UE51Qit5Zmw0cmlsRlluS0xYNk92SFBhTmxpT011dmJPd3VVQWxhZlZGWmNGaktLdHFSRkcrUjJqR2s5NTNEeE5oNHFRdUFGeWJBQzVKeUFITmVGNlM3ZStrU01naE40R1BCZS83MTQwdCtFZXA3Z3RjY0hKaWxLa1hnOG5NNW5mM3F3WkxNS3FwS3ViQ3duZ1BWZEd0czVyb2JhdlNKem9Pb2RoREdpN25jdUNUWVBSL3JTMm9xbTluSXcwN2hsYmMrUWZvM3o0Q1BZR3pSTTdyNWJkVkc3c0E2U1NqVW5pMXZxZTdQZWwya1h1TWNEREsvZmJSdk1uUWVLMHlaSDhVRVU1Y3MwSHlCdXBzc2V2cit0UFV4K3orOEkzajNmbW5xOW11YXd5Vk1oY1RacklZeVdoenpvQzdVamViVzBLbDJmU05pYUFBQWQ1NHJuazBrYmFWMkNLTndGZ0xEbmtwQkFkN3ZJS1l1c29uekFLWXF4bmZSeHhKOFFqMURlZm1WQ2FvY1Z3cWh4V3FpSW0ranQ1K1pSK2pEY1Q2S050U0ZQRzhGVlFDZlJ6dUlQZmtvSkh6UkV1ZEcvcTlROERFMjNNalR4V2kxYmRPMnpXamcwZWFjWThtaVZubnFUYWdPOWFrTTRkb3BLdlpVTXVaWUd1OTluWmQ2Wkh4V2JKc3lXTE5oNjFuTEp3OE4vZ25LQWFpN1U2UHhUa3ZiOVROOTZ3ZTBmeHQwZCt2TlpScUs2RDZzd21hMmtqR3VlSE4zWmo0NXJlcEsyK1JXZzF5amRvbDQvWEJFOVFQVTcxQThybHlHaEE5UlBUeVBWZHhKMDgxZzBTeU9SNnJQSk9ucXJCWjRwY0tFeUdWK3E0bTY3cXh3VmpDa2t5Q3BPeWFLazVBQzhmMGgydTRIcW9qMnpxZmRieDcxdDdicmNEWEhVZ1pBYnp1Q3A5SGVqQmQ5ZFVlMDg0aVAvZHk3WU9PS08wak5MWi9neHRtVUpPWWFTVG1TY3lTdG1Pa0kxQzlOTlNDSUI4YlJoYjdiYkEzYjczZUZiWXhramIyYVFlU3pmMVY4MFhvZVFkVHFDcW83aGVtcmRuZ1p0MDRMT2xpeVcyUE1wZEdjbzBlV3B3Nm1tam1hRDlVOFBOdDdmdER4Rng0cjZxQ0hEY1FSY2N3VjRPcWhCQjdsNmpvdFVZNldLK3NZTUovZ09FZW1FK0tqNnRXbElyQytXaStZQzMySEZ2TFVlUlVUNXBoN2g1NFQ4MWNTdWF1U01qZWp6ZTFxV2VZV2ZJWE4rN0haSGtOZkZZUW9TeDJsckZlNGxZcUZSQURxRjFZOHZneWtpazVaZTBaTWIyeEE3eGNqT3hQTGVRTjNFaFhkb1ZJaWFUcVFQWFFMVTZIYk13cytreUFHV1c1WVNQWmpPOGNNV3ZkWmI3YXgyTWxIWjBUMFd5WFBhMFNYaWhhMEJrTFRaeGFQZU83OWU1YmxQQzJOb2F4b1kwYmdMRHYvQUtwMWs3UnF1c3ZHMDJqSDdWL0hpd0hoeDh1SzVkck90SkpFTXNuWHk0LzNVZHhIK0k3My9Ma09hV3FyV3NHWkFXZSt2Zks3cWFSaGtMY25PMFl6OHp0QjNhOGxmb3VpclNRK3FlYWgrdUFYYkUzdzFkNDVjbGFndTVFOW1NL2JMcFhGdFBISk00WkhxMmwxdThqSWVLWnV5ZG9TNTlYSEYvaVN0L1JtSmU0aGpheG9heHJXTkdRYTBCb0E1QUtSYUthWFNLMVBEam9yWEhXV21IYzZZLzZFanVqTmUzTU9wMzhteVNBLzVtQWVxOTRFd1ZLYkhxajVyVVBxS2Y4QTVtR1NOdW5XWlBaL08wa0R4V2hzL2FGeU04aXZkRUFnZ2dFRVdJT1lJNEZlRjZSYkhGTExHK0VZWVpuNGVyR2tjdXRtOEdrWE50MWp1c0JhYVpFbzBlcG9vOFJIRFU5eTE3ckU2TjFvbCtrWWRJWitvQjRsakdseC9tYzRmd3JaUjBhSWRHNlM2TjA3R1FWVkcxK2ZzdjhBZUh4NHFwZ2UzSWdubUFTQ3RKRzZtVVZJQ2pJNVZKSk9DbGVDZTVJVzJYSGtKWlhMT0tSd1V4Q1F0WE15U0xDaGhVdGwxbEFVUjRWUXJwTEFyUmt5Q3d0cVM2cmZCRzVHZVIwaUxadENKWG1SK2JXTzdJNHY0bnV1dDhLdFFRNEkyTjMydWZ6SE1xeXNjMlRlYjllQndqU0dXYzM2aVREKzZrUFkvQzdlMzVmMFdpRkhVd0NScGE3UTZFYWc3aU9hVUpVVlF6MjRnczAwbUl1YVBhOXBvNGplUDBVbERVa0V4U1pQYmwzamNSeUt0eXg2T2JrUm1GZk1IYUYzd3p5OVhIYTY3b3p0RVF6dmhjYk5rczl2SjJoK0MzNjZpRTdTVzltUURNSGYzL05mUHVsREpJYlROQkRvSFhlM2YxWjlyeXlQZ1Y2V054endjVEJwd2tmVmdVQ3ZGZEhPbHpYTWFIbTR0cmZOZXNwNitPUWRoNFBLOWo1TGl5WVp3ZktONDVFeVNWWjlTVGZDM054OUZkbmRiSVprNkJZRzBKbnpQTkhTRzhwdDlKcU04Tk93N3IrK2R3MVZZbGJGSXAwdEw5TnF1cWJjMDhCdk5KNzc5TUlQbUIvRWVDOTZMQWJnQU80QUJaRkd5Q2hoYkUwZ0FieVFDOS9FOFR5SElJT004L3N0NnBudnl0SThXeGFrL210M0xXY3RueDBod1d2N0R0WGFqV3Q5b3RZVGhCQUpmS2ZkamFNMVVnMlRMVTI2KzlQVGoyYWRodEk4ZmpjUFo3aG4zTFdvTmx4eEhIbkpNUll6U0VPZGJnTnpSeUFDdnBKcGRGVmZaSFMwN0ltaGtiV3NZTkd0RmgvOTVxY0pVVXJLR1JDVUlxa01ZSXBVVmFZRGhlWC9BTFJxdnFxTnIvdGlvajZ2L0V3dnN2VEw1My9hclY0cGFTbkgyUStvZU9aT0JuNlNMYkN0cHBDZlEvUUd1K2pndGRjc2t0aTNuRjczcVY5RWprRGhkcEJIRUw1ZHNVV0FYcmFHVWpRa0o1M1VyTTR5OEhwN3Jyck5pcUhjU3B4SWVLNW45UWw0TlVXOFNHTlFOS2NMQ1gxVTMxd1drUVBVTGdwM2hSa0xhYU15QWhMWlRscUdGWVNpSWh3b0VLYkFsYzFaT0l5cFVhTHo4amNjelc3c1Z6M0RNcjBGWG9WaWJNYmlsZTczUmJ4Si9vVnJCNndsSXh5SzJrYTZZSlFpRnhJc1lKa29SQ3BESzFmUjlZQTVwd3lNOWwzSDhMdVg2S3ZTMTlqZ2tCWThhZy9xT0lXa0VsUlRza0ZudERodTNFZHgxQzFqUHd4TkJZUWN4cXErMHRteDFEYlBHZHJCNDFITG1PU2dkc3g3ZjJVdVh1eUMvd0RtSHlRRU5UcDlYMzR6OGxyRnBPNHNscHRVejU1dGJvRlYwem5Qb3pITkZlNGl4aUo3ZVRRN3NrZnhLaFN3YlVMeEcybWt4bmNYUkFEbVRpdGJtdnFyZG15di9hU2hvM2lNRW4rWS9KYU5MU3NqRm1OdGZVNmwzZVRxdXI3eVNYaGdzYThuaDltOUQ2NTRCcXFsc1krNmllNTJYTjFoNkh4WHE2RFluVk1FVFpPcmpHZUNGalk3bmVYT2NYT2NUeHZkYWdUQll5elNuMlVvcEVGTlF4eG03R0RGcGpkZDd5UHpPdVZhQ1VKbEYyVU1pbENJVklZeUlTb3FnR1JDVUlxa3dHUlNoRlZZeGw4cS90Q3Yvd0FUei91ME9IOHQzL0hFdnFsMTVMcDcwZGRVdFpQQU1VOEFMU3dheXhFM3NQeEEzSUcrNTVMYkRQV1JNdWp6MnlYNUJlbnBIcndtemF5eHNiZ2cySUlzUVJxQ054WHA2R3VHV2FyTHlZbnA0WHEyeHl4NmVxSEZYb3FnTGlsQTFpelFhVklxakpncFJLby84V3pUWW1jMUlXcmx5N0pJa0dCZGdYTGxHcUdBc1ViMnJseXlsRkFVYTBkazl5eU5qczdEbmUrOXg4Qmw4Q2d1WFBrZFkzKzEvc3lsOGpSQ0s1Y3VWREdUQmN1VklBb2hjdVZJWXdSWExsYUFZSWhjdVZJWXlJWExsU0FLWUxseXBBRUloRmNxR0VMbHk1VUFVVnk1TUFvM1hMbFFCWFhSWEpqTXphbXdhYXBPS1dJRi93QjQwbGorWGFibWU0M1dITDBMYTBucXFtWnZLU05zdzd1emhYTGxhazBLa3ptOUc2aHVsUkc3dmlrYjhTcG1iSHFoKzlpL2tsWExsVzM0RnFpeXpadFNOWjRobmJLR1IzK3BXRzdOcWY3eEgvNEQvdlhMa2JNZEkvL1pcIik7IFxyXG4gLyogRnVsbCBoZWlnaHQgKi9cclxuICBoZWlnaHQ6IDEwMCB2aDtcclxuICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4vKk5BVklHQVRJT04gQkFSKi9cclxuI25hdi1iYXJcclxue1xyXG4gICAgcG9zaXRpb246c3RpY2t5O1xyXG4gICAgdG9wOjA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCBpbWdcclxue1xyXG5oZWlnaHQ6NjBweDtcclxucGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcbi5uYXZiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxufVxyXG4ubmF2YmFyLXRvZ2dsZXJcclxue1xyXG4gICAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcclxufVxyXG4ubmF2LWxpbmtcclxue1xyXG4gICAgY29sb3I6IzU1NSFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTE9HSU4gRk9STS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5sb2dpbi1ib3hcclxue1xyXG4gIHdpZHRoOiAyODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICBjb2xvcjpibGFjaztcclxufVxyXG4ubG9naW4tYm94IGgxe1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi50ZXh0Ym94XHJcbntcclxuICB3aWR0aDoxMDAlO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZzogOHB4IDA7XHJcbiAgbWFyZ2luOjhweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICBjb2xvcjpibGFjaztcclxufVxyXG4udGV4dGJveCBpXHJcbntcclxuICB3aWR0aDoyNnB4O1xyXG4gIGZsb2F0OmxlZnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4udGV4dGJveCBpbnB1dHtcclxuICBib3JkZXI6bm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHdpZHRoOjgwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgY29sb3I6YmxhY2s7XHJcbn1cclxuLmJ1dHRvblxyXG57XHJcbiAgd2lkdGg6MTAwJTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjoycHggc29saWQ7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgcGFkZGluZzogNXB4O1xyXG5cclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxufVxyXG5cclxuOjptZXNzYWdlIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXHJcbiAgY29sb3I6cmVkO1xyXG4gIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxufVxyXG4iLCJib2R5LFxuaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJnIHtcbiAgLyogVGhlIGltYWdlIHVzZWQgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBa0dCeElRRUJBUUVCRVFEdzhQRGc4UER3OFFFQThQRlJBT0ZSRVdGaFVWRlJVWUhTZ2dHQm9sSFJVVklURWhKU2tyTHk0dUZ4OHpPRE10TnlndExpc0JDZ29LRGcwT0doQVFHeXNsSHlVdExTMHRMaTB0TFM4ckxTc3RLeTB0TFMwdExTMHRMUzB0TFMwdExTMHRLeTByTFMwdExTMHRLeTB0TFMwdExTMHRMZi9BQUJFSUFLZ0JMQU1CSWdBQ0VRRURFUUgveEFBYkFBQUNBd0VCQVFBQUFBQUFBQUFBQUFBQkFnTUVCUUFHQi8vRUFFUVFBQUVEQWdNRUJ3UUhCUVlIQUFBQUFBRUFBZ01FRVJJaE1RVkJVV0VHRXlKeGdaR2hNbExCMFJRalFsTmljckV6UTRLUzRRZFVjNkxDMGhVMFkyU1Q4UEgveEFBYUFRQURBUUVCQVFBQUFBQUFBQUFBQUFBQUFRSURCQVVHLzhRQUtCRUFBZ0lDQWdJQkJBSURBUUFBQUFBQUFBRUNFUU1TSVRGQlVUSUVGR0Z4SXBHeHdkRVQvOW9BREFNQkFBSVJBeEVBUHdEMlFSQ0FUQmZGb3dDbUNWTXFRQkNaQUloVWhoVEJCRUswQVV5QVJDcEFNRVFnaUZhR01FUWdFd1ZJQWhFSUJNRlNHRUloQk1GYUFJUkNDWlVnQ0VRZ0V3VklZUWlnaUZRQlJRQ0twQUVJcmtRcVF6Z2l1UlZwQWNqWmNFeXBJQVdSc2paRk9nQlpkWkd5TmxWQUN5NnlObHlkQWVQQ1lJSWhmTW95R0NLQVRCV2dDRVFnRXdWSVlRbUNVSmdyUUJDWUlCRUtrQVV3UVJDcERHQ0tBUkN0QU1FUWdFd1ZJWVFpRUFtQ3BBRUloQUpnclF3aE1FQWlxUUJSQ0FSQ29Bb2hBbTJaeUNydm1Mc201RGp2UHlWQVRTVE5icWMrR3A4bENhc24yVytMajhBakZUS3cySUtreGNsYnJKVDdvN2g4MXdNdnZmNVdxNkdvNFZTWTlTbUpwUnFHbndJVXJLd2ZhYVc4L2FDc1lVcm9nZHlwTUtaSXh3SXVDQ09JelRXVlBxQzAzWWJIMFBlRllnbXhaRVlYY09QY3JRN0piSTJSWFdWME1GbDFrMWwxazZBOFltQ1VKMk5KTmdDU2RBTTdyNWRHSks5akF4cERpWG0rSnRyWWVHYVFJRVd5T1JHUkhOTmEydVN0OCtCbkJNRUVVMEF3UlFDS3RBTW1DVk1GU0FJVEJLRXdWb1lRbUNBUkNwQUZNRUFpRmFHTUVVQW1WSUFvaEJNRlNHRUlvQk1yUUhJazJGeXVVRGppUElhSjNRQU4zblBUY0ZZWkhaQmpVejVBM1hYY0JxbFkwaVFCQjhyVzZuUGdNejVLc1h1ZCtFY0I4MUpGQ0FxMkdQMTVQc3Q4WEczb0YzYVAycmZsQStLY0JjbmJBajZyaTUzOHhRTk9PZm1WTUFpVzJOanVUNUVWVFRCUnlVdkJ6Z2R4RGlMSzdaQWhGc0tNZ3lWRVp5bExodXhCcnIrSkYxUER0bVFmdEkydTV0SmI2RzZ1UFpkVjNRamVyV1ZvbmxGMm0ybEcvZmhQQi9aOWRGY3N2UHZwVXpDOW9zSE9BNEFrTFNPYjJPeklDc1ViWEY3Y0JzNitSNEt1RkxCS1dFT0dvWHowR2xKTm1aWXJxVjhidTNtWFozNGxKTk81OWk0M3d0RFJ1eUNOVlZ1bE4zYmxDRnJPUzJlbDBNWkZCTXBRQkNZSlFtQ3BBRUpnbENZSzBCTmR1QUN4eDNOemZLeVFJQlRUTURiWVhZcmdFOGp3V25MNUtFQ0lRVEJDRUZNbENaV2hoQ1lKUW1DcEFFSmdnRVFyUXhnaWdGeE5sUUNTdTNlYVpnVWJVWE8zRHhLemJBWjh1NGE4ZUNWa2U4b1pEVlZwcTRESUtvcHk2QnlTTkFFQkhyUXNmNlhkTUtsYkxIUXR6WEVnVGh3V1Myb1U3SmtWUTFJMExKbU52b3E4RTFqZlhrck1ObkVYeVRYTEtGWFdUeXRBT1dpVkpxblFDRUpYTlVsa0NFaEZjaERDcG5OU0VKQ284NEV3U2hUMVBWakRnSkl3akZpeXM3ZlplTWxhc3pFQ3U3Tk1RY2V0RnhiTHZXYjFwUHNqeE9ROGxxMDJ3akl6RTk1N2hrUFQ0cnArbnh6bE80cTY5alNKYUNLRjJQRTRDeE5nVG1Bc3FhcGFIRU5EM0FISWdmTlNpa0RDUUU0YUZVMm5GUnFtaGxVVkIrN2Q1aE9LZzcyUDhNSitLU3QybERCKzFrYTBrWERjM09JNU5HWldZL3BRejkzRE0vbWNMQWZVbjBSSERLWFNKY2tqWWJWTjNuRCtZRnZyb3JEU3ZOTzZSdk90TGwvaWovWW94dDFvTitwbWlPOHN3UEhpTGkva3RQdDhpOGY0RnZFOTVSU3hpTWh3N1NvSFh4V0xzN3BCRElRd3ZhMTV5R0lGbUk4TE8zK2EyazV6azBvdFZSZDJGTUVxWUtFQVFtU2hNclF4Z2lFQWlGU0FZSWhBSWhXaGpCUlN1M0tRbXdKNEtrWmZWRXVoTmt4ZHVSTGcwWEtqQjNyTjJoV1dCVVJpNU1UbFNCWDEvTlpuMGtrck9ucVM0cVdFTDBvWWxGSEs1dHMxbXlzd0EzZDFtTE1XR0hCYlcvRzZMWlZtbW9EVWF5dmpBWVk4ZnNEckM0WmRadkRUd1RjYkhzYTdKVllqbTVyeDc5dGk5bTRubmd3WHQzblJGbTBLZzZSdGFPYmlmMEFXY29lMldwTTl6Rk1ya1VpOEpGdEdvYjdVWUk0dGNiK1JIeFhzOWtiVGdNRjNIQzhEUTVGWnJCcytHYXhuN05YQ1FMa1pGY3NxUGI0a3MzTFd3dHZXbkZKZHVtdTlSTmF1bGRHcWtwZERXWFdSQlJSRjJCR1FsSVV4Q1FoTm9EeVl1ZFBNcVJsUHZPWlV3Q0s4bFJTTWptdFYySGFEbXR3aFV3a21sYXhwYzl3YTFvdVhPTmdCM3JXRXBSZjhXRmt6blhOOTVYbjlwYldmSTR3MHBzQWJTVGpPeDN0ajUvaTh1SVdvcTVLczRJc1VjQnljODNhNlVjQjdyZlU4dEZvVWxFMkpvQUFGZ3Q0UVVlWmQrdjhBcExabFVteFd0N1R1MDQ1dWM0M0pQRWs2cTgybGFOeXRPVVRpdGRtek9pSXhEZ28zUXRPNVNrcFNxUWlqVTdPWThXTFFmQlQ3R01rRWpXOVlYUTN6amYyZ0IrRW5OdmhseVV4U09WWDdCY2NucDU2eUY3c01UaGlBdVc2RzNIbUVBdklWY1J1Skl6aGtZYnRjTlFmaU9TM2RpYlZGUTAzR0dWbGhJejlITi9DZjZMUE5DM3V1aldNN2RNMHdtVXRRV2RuQUNNdTFmaW80MkZ4QUF1VHVXYmpUcGNtaHdUQkN5a2treFd5QXNBTXQ2YUFBUkNVSmdxUXl0WHkyYUJ4UG9GV2psQmFCaDdRY1NYWE9ZNFdWWGFWUmVRamMzcytXdnJkT3hoWUd1SmFjVGNRc2IySFBnVmJpOVRKeTVIcmFpd0RSdjE3bDVyYXRWYzRRdGphem5ZZXQ2ckF3TURjUXVjUjN1UG9zT2xucDJzbWtxTVdQRDlSYlFPNXJxd1lkZXpESTIzUkRHME5HSjNrcjlkVzBvcEFXUExxa216WTJndWM0OEFCbVR5V2RzN1kwOWJaN2lhZW1PanlPM0lQK20wNkQ4UjhBVjdEWld4b0tVSHFZdzBrZHVWM2FlNGZpZWM3Y3RGckxJbCtRZ2p4TVd4YTJZRjdtc3BZZ0xsOVE3Q1EzamdGeVBHeTlMRUdUVVFwU3pGYkxyc0hWbDQ0MnVTQjQrU2xxWkRVdXNNb0duSWZlT0gyank0RHg3cmtiUTBXQ3dsbmwwalNNZFRPbzloUlJnQU4wNWxYVzBVWSt6NmxTNDEzV0xDbXlpUDZHemhieEtnbjJVeDRzYitpdDlhaUpFOVdCaVVtdzVvNWdZM3RrajkxeExYWDREY2ZFaGV5Mmp0U09HQzdnV09BQXpHUU52ZTBXVTErL2d0UmtnY09JSTBQQmRPUE02cVE0L3dBZWpKMmIwbGpreUpGaWN2Z3Q2Q2NIZmUraDQvMVdCWGRGcWVYdE5hWUgrL0Rab3Z6WjdKOHI4MW11cHF5ai93QzVoR3JtWHhOSEVzMUhoZFpQRkc3aC9RTEpKZkk5eUYyRllXeGVrTWN3QXhDKzYrV2ZBOEN0MXNnS3BSOW0wWktTNFBNQkpQT3lNWGU1ckJ4Y1EzOVZFN1pNN3ZhbWVCd2JoWjZnWFFpNk9NQnhPN1R1TGlYSHpLOC83Zlg1UCtpS1pUbDIyRDJZSTNTdTk0Z3NZUEU1bndIaW80dGx5VE9ENmwyS3h1MWdGbU43bS9FM0szNDZOak5BRXpnaTFING9LSzBjSVlMQVdTdVU3bEJJaEVNcnZVUlVyaW95Vm9pR1JsQ3lkUlRTQUxTS3Nsbk9ObFhsbkEzckkybnRwckRoYjJuKzZQandXUExKTkxxUzBjRzVlcTZvNFBabTVQd2VzanFtbks0VmFSeGlrYlBGN2JOVzZCN0RxMDkveVhsMjBKQjFkZmpjcXd5c2tpeWNUSXpucU80Ny9GV3NLOENjbWZVcUdwYk0xajJuc3ZBSStQaURsM3JXbnBneG9jMTJmSXI1NzBNMnExNzN3WXZhQmxqR2hhNFdEeDQ1RzNJcjJIMGs2UE51Qit5Zmw0cmlsRlluS0xYNk92SFBhTmxpT011dmJPd3VVQWxhZlZGWmNGaktLdHFSRkcrUjJqR2s5NTNEeE5oNHFRdUFGeWJBQzVKeUFITmVGNlM3ZStrU01naE40R1BCZS83MTQwdCtFZXA3Z3RjY0hKaWxLa1hnOG5NNW5mM3F3WkxNS3FwS3ViQ3duZ1BWZEd0czVyb2JhdlNKem9Pb2RoREdpN25jdUNUWVBSL3JTMm9xbTluSXcwN2hsYmMrUWZvM3o0Q1BZR3pSTTdyNWJkVkc3c0E2U1NqVW5pMXZxZTdQZWwya1h1TWNEREsvZmJSdk1uUWVLMHlaSDhVRVU1Y3MwSHlCdXBzc2V2cit0UFV4K3orOEkzajNmbW5xOW11YXd5Vk1oY1RacklZeVdoenpvQzdVamViVzBLbDJmU05pYUFBQWQ1NHJuazBrYmFWMkNLTndGZ0xEbmtwQkFkN3ZJS1l1c29uekFLWXF4bmZSeHhKOFFqMURlZm1WQ2FvY1Z3cWh4V3FpSW0ranQ1K1pSK2pEY1Q2S050U0ZQRzhGVlFDZlJ6dUlQZmtvSkh6UkV1ZEcvcTlROERFMjNNalR4V2kxYmRPMnpXamcwZWFjWThtaVZubnFUYWdPOWFrTTRkb3BLdlpVTXVaWUd1OTluWmQ2Wkh4V2JKc3lXTE5oNjFuTEp3OE4vZ25LQWFpN1U2UHhUa3ZiOVROOTZ3ZTBmeHQwZCt2TlpScUs2RDZzd21hMmtqR3VlSE4zWmo0NXJlcEsyK1JXZzF5amRvbDQvWEJFOVFQVTcxQThybHlHaEE5UlBUeVBWZHhKMDgxZzBTeU9SNnJQSk9ucXJCWjRwY0tFeUdWK3E0bTY3cXh3VmpDa2t5Q3BPeWFLazVBQzhmMGgydTRIcW9qMnpxZmRieDcxdDdicmNEWEhVZ1pBYnp1Q3A5SGVqQmQ5ZFVlMDg0aVAvZHk3WU9PS08wak5MWi9neHRtVUpPWWFTVG1TY3lTdG1Pa0kxQzlOTlNDSUI4YlJoYjdiYkEzYjczZUZiWXhramIyYVFlU3pmMVY4MFhvZVFkVHFDcW83aGVtcmRuZ1p0MDRMT2xpeVcyUE1wZEdjbzBlV3B3Nm1tam1hRDlVOFBOdDdmdER4Rng0cjZxQ0hEY1FSY2N3VjRPcWhCQjdsNmpvdFVZNldLK3NZTUovZ09FZW1FK0tqNnRXbElyQytXaStZQzMySEZ2TFVlUlVUNXBoN2g1NFQ4MWNTdWF1U01qZWp6ZTFxV2VZV2ZJWE4rN0haSGtOZkZZUW9TeDJsckZlNGxZcUZSQURxRjFZOHZneWtpazVaZTBaTWIyeEE3eGNqT3hQTGVRTjNFaFhkb1ZJaWFUcVFQWFFMVTZIYk13cytreUFHV1c1WVNQWmpPOGNNV3ZkWmI3YXgyTWxIWjBUMFd5WFBhMFNYaWhhMEJrTFRaeGFQZU83OWU1YmxQQzJOb2F4b1kwYmdMRHYvQUtwMWs3UnF1c3ZHMDJqSDdWL0hpd0hoeDh1SzVkck90SkpFTXNuWHk0LzNVZHhIK0k3My9Ma09hV3FyV3NHWkFXZSt2Zks3cWFSaGtMY25PMFl6OHp0QjNhOGxmb3VpclNRK3FlYWgrdUFYYkUzdzFkNDVjbGFndTVFOW1NL2JMcFhGdFBISk00WkhxMmwxdThqSWVLWnV5ZG9TNTlYSEYvaVN0L1JtSmU0aGpheG9heHJXTkdRYTBCb0E1QUtSYUthWFNLMVBEam9yWEhXV21IYzZZLzZFanVqTmUzTU9wMzhteVNBLzVtQWVxOTRFd1ZLYkhxajVyVVBxS2Y4QTVtR1NOdW5XWlBaL08wa0R4V2hzL2FGeU04aXZkRUFnZ2dFRVdJT1lJNEZlRjZSYkhGTExHK0VZWVpuNGVyR2tjdXRtOEdrWE50MWp1c0JhYVpFbzBlcG9vOFJIRFU5eTE3ckU2TjFvbCtrWWRJWitvQjRsakdseC9tYzRmd3JaUjBhSWRHNlM2TjA3R1FWVkcxK2ZzdjhBZUh4NHFwZ2UzSWdubUFTQ3RKRzZtVVZJQ2pJNVZKSk9DbGVDZTVJVzJYSGtKWlhMT0tSd1V4Q1F0WE15U0xDaGhVdGwxbEFVUjRWUXJwTEFyUmt5Q3d0cVM2cmZCRzVHZVIwaUxadENKWG1SK2JXTzdJNHY0bnV1dDhLdFFRNEkyTjMydWZ6SE1xeXNjMlRlYjllQndqU0dXYzM2aVREKzZrUFkvQzdlMzVmMFdpRkhVd0NScGE3UTZFYWc3aU9hVUpVVlF6MjRnczAwbUl1YVBhOXBvNGplUDBVbERVa0V4U1pQYmwzamNSeUt0eXg2T2JrUm1GZk1IYUYzd3p5OVhIYTY3b3p0RVF6dmhjYk5rczl2SjJoK0MzNjZpRTdTVzltUURNSGYzL05mUHVsREpJYlROQkRvSFhlM2YxWjlyeXlQZ1Y2V054endjVEJwd2tmVmdVQ3ZGZEhPbHpYTWFIbTR0cmZOZXNwNitPUWRoNFBLOWo1TGl5WVp3ZktONDVFeVNWWjlTVGZDM054OUZkbmRiSVprNkJZRzBKbnpQTkhTRzhwdDlKcU04Tk93N3IrK2R3MVZZbGJGSXAwdEw5TnF1cWJjMDhCdk5KNzc5TUlQbUIvRWVDOTZMQWJnQU80QUJaRkd5Q2hoYkUwZ0FieVFDOS9FOFR5SElJT004L3N0NnBudnl0SThXeGFrL210M0xXY3RueDBod1d2N0R0WGFqV3Q5b3RZVGhCQUpmS2ZkamFNMVVnMlRMVTI2KzlQVGoyYWRodEk4ZmpjUFo3aG4zTFdvTmx4eEhIbkpNUll6U0VPZGJnTnpSeUFDdnBKcGRGVmZaSFMwN0ltaGtiV3NZTkd0RmgvOTVxY0pVVXJLR1JDVUlxa01ZSXBVVmFZRGhlWC9BTFJxdnFxTnIvdGlvajZ2L0V3dnN2VEw1My9hclY0cGFTbkgyUStvZU9aT0JuNlNMYkN0cHBDZlEvUUd1K2pndGRjc2t0aTNuRjczcVY5RWprRGhkcEJIRUw1ZHNVV0FYcmFHVWpRa0o1M1VyTTR5OEhwN3Jyck5pcUhjU3B4SWVLNW45UWw0TlVXOFNHTlFOS2NMQ1gxVTMxd1drUVBVTGdwM2hSa0xhYU15QWhMWlRscUdGWVNpSWh3b0VLYkFsYzFaT0l5cFVhTHo4amNjelc3c1Z6M0RNcjBGWG9WaWJNYmlsZTczUmJ4Si9vVnJCNndsSXh5SzJrYTZZSlFpRnhJc1lKa29SQ3BESzFmUjlZQTVwd3lNOWwzSDhMdVg2S3ZTMTlqZ2tCWThhZy9xT0lXa0VsUlRza0ZudERodTNFZHgxQzFqUHd4TkJZUWN4cXErMHRteDFEYlBHZHJCNDFITG1PU2dkc3g3ZjJVdVh1eUMvd0RtSHlRRU5UcDlYMzR6OGxyRnBPNHNscHRVejU1dGJvRlYwem5Qb3pITkZlNGl4aUo3ZVRRN3NrZnhLaFN3YlVMeEcybWt4bmNYUkFEbVRpdGJtdnFyZG15di9hU2hvM2lNRW4rWS9KYU5MU3NqRm1OdGZVNmwzZVRxdXI3eVNYaGdzYThuaDltOUQ2NTRCcXFsc1krNmllNTJYTjFoNkh4WHE2RFluVk1FVFpPcmpHZUNGalk3bmVYT2NYT2NUeHZkYWdUQll5elNuMlVvcEVGTlF4eG03R0RGcGpkZDd5UHpPdVZhQ1VKbEYyVU1pbENJVklZeUlTb3FnR1JDVUlxa3dHUlNoRlZZeGw4cS90Q3Yvd0FUei91ME9IOHQzL0hFdnFsMTVMcDcwZGRVdFpQQU1VOEFMU3dheXhFM3NQeEEzSUcrNTVMYkRQV1JNdWp6MnlYNUJlbnBIcndtemF5eHNiZ2cySUlzUVJxQ054WHA2R3VHV2FyTHlZbnA0WHEyeHl4NmVxSEZYb3FnTGlsQTFpelFhVklxakpncFJLby84V3pUWW1jMUlXcmx5N0pJa0dCZGdYTGxHcUdBc1ViMnJseXlsRkFVYTBkazl5eU5qczdEbmUrOXg4Qmw4Q2d1WFBrZFkzKzEvc3lsOGpSQ0s1Y3VWREdUQmN1VklBb2hjdVZJWXdSWExsYUFZSWhjdVZJWXlJWExsU0FLWUxseXBBRUloRmNxR0VMbHk1VUFVVnk1TUFvM1hMbFFCWFhSWEpqTXphbXdhYXBPS1dJRi93QjQwbGorWGFibWU0M1dITDBMYTBucXFtWnZLU05zdzd1emhYTGxhazBLa3ptOUc2aHVsUkc3dmlrYjhTcG1iSHFoKzlpL2tsWExsVzM0RnFpeXpadFNOWjRobmJLR1IzK3BXRzdOcWY3eEgvNEQvdlhMa2JNZEkvL1pcIik7XG4gIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIGhlaWdodDogMTAwIHZoO1xuICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4vKk5BVklHQVRJT04gQkFSKi9cbiNuYXYtYmFyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLm5hdmJhci1icmFuZCBpbWcge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLm5hdmJhciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5uYXZiYXItdG9nZ2xlciB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubmF2LWxpbmsge1xuICBjb2xvcjogIzU1NSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1MT0dJTiBGT1JNLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmxvZ2luLWJveCB7XG4gIHdpZHRoOiAyODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubG9naW4tYm94IGgxIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnRleHRib3gge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50ZXh0Ym94IGkge1xuICB3aWR0aDogMjZweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udGV4dGJveCBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogODBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogNXB4O1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXG4gIGNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMTtcbiAgLyogRmlyZWZveCAqL1xufVxuXG46Om1lc3NhZ2Uge1xuICAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgY29sb3I6IHJlZDtcbiAgb3BhY2l0eTogMTtcbiAgLyogRmlyZWZveCAqL1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _main_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-service.service */ "./src/app/main-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(_service, router) {
        this._service = _service;
        this.router = router;
    }
    ngOnInit() {
    }
    loginUser(event) {
        event.preventDefault();
        console.log(event);
        var username = event.target.elements[0].value;
        var password = event.target.elements[1].value;
        this._service.verifyUser(username, password)
            .subscribe((userData) => {
            this.b = userData;
            if (this.b = true) {
                this.router.navigate(['view']);
            }
            else {
                this.message = "sorry username or password is invalid";
            }
        }, (error) => {
            console.log(error);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _main_service_service__WEBPACK_IMPORTED_MODULE_2__["MainServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/main-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/main-service.service.ts ***!
  \*****************************************/
/*! exports provided: MainServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainServiceService", function() { return MainServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let MainServiceService = class MainServiceService {
    constructor(_httpService, router) {
        this._httpService = _httpService;
        this.router = router;
        this.APIUrl = "http://localhost:8080/USTMACHINETEST/api";
    }
    //verify login
    verifyUser(username, password) {
        return this._httpService.get(this.APIUrl + '/login' + '/' + username + '/' + password);
    }
    //get all vendor details
    getVendorDetails() {
        return this._httpService.get(this.APIUrl + '/vendordetail/null');
    }
    //get vendor details by id
    getVendorDetailsById() {
        return this._httpService.get(this.APIUrl + '/vendorbyid/' + this.vId);
    }
    //search 
    search(searchString) {
        return this._httpService.get(this.APIUrl + '/vendordetail/' + searchString);
    }
    //add details
    add(vendorContactDetails) {
        let body = JSON.stringify(vendorContactDetails);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        let options = { headers: headers };
        if (vendorContactDetails.vId) {
            return this._httpService.put(this.APIUrl + '/vendordetails', body, options);
        }
        else {
            return this._httpService.post(this.APIUrl + '/vendordetails', body, options);
        }
    }
    edit(vId) {
        this.vId = vId;
    }
    //disable 
    disable(vendordetail, vId) {
        let body = JSON.stringify(vendordetail);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        let options = { headers: headers };
        return this._httpService.put(this.APIUrl + '/disablevendors/' + vId, body, options);
    }
};
MainServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MainServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MainServiceService);



/***/ }),

/***/ "./src/app/vendorcontactDetails.ts":
/*!*****************************************!*\
  !*** ./src/app/vendorcontactDetails.ts ***!
  \*****************************************/
/*! exports provided: VendorContactDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorContactDetails", function() { return VendorContactDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class VendorContactDetails {
}


/***/ }),

/***/ "./src/app/view/view.component.scss":
/*!******************************************!*\
  !*** ./src/app/view/view.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body,\nhtml {\n  height: 100%;\n}\n\n.bg {\n  /* The image used */\n  background-image: url(\"https://wallpaperplay.com/walls/full/d/f/1/100151.jpg\");\n  /* Full height */\n  height: 100 vh;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.table-hover tbody tr:hover td, .table-hover tbody tr :hover th {\n  background-color: #d9f2e6;\n}\n\nth, td {\n  padding: 15px;\n}\n\nth {\n  background-color: #00b345;\n  color: white;\n}\n\ntable {\n  width: 100%;\n}\n\nth {\n  height: 50px;\n}\n\ntd {\n  height: 20px;\n}\n\n.btn {\n  margin-left: 380px;\n  background-color: #00b345;\n  width: 140px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: white;\n}\n\n.button:hover {\n  color: #26734d;\n}\n\n.btn-outline {\n  color: #194d33;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXI5L0FuZ3VsYXI4L1VTVFByb2ovc3JjL2FwcC92aWV3L3ZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXcvdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUVBLDhFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3L3ZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LFxyXG5odG1sIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5iZyB7XHJcbiAgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvYWJzdHJhY3QtbWVkaWNhbC13YWxscGFwZXItdGVtcGxhdGUtZGVzaWduXzUzODc2LTYxODAyLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOnVybChcImh0dHBzOi8vd2FsbHBhcGVycGxheS5jb20vd2FsbHMvZnVsbC9kL2YvMS8xMDAxNTEuanBnXCIpO1xyXG4gIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgaGVpZ2h0OiAxMDAgdmg7XHJcbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnRhYmxlLWhvdmVyIHRib2R5IHRyOmhvdmVyIHRkLCAudGFibGUtaG92ZXIgdGJvZHkgdHIgOmhvdmVyIHRoe1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2Q5ZjJlNjtcclxufVxyXG5cclxudGgsdGR7XHJcbiAgcGFkZGluZzoxNXB4O1xyXG59XHJcblxyXG50aHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMzQ1O1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG50YWJsZXtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG50aHtcclxuICBoZWlnaHQ6NTBweDtcclxufVxyXG5cclxudGR7XHJcbiAgaGVpZ2h0OjIwcHg7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgbWFyZ2luLWxlZnQ6IDM4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGIzNDU7XHJcbiAgd2lkdGg6MTQwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVye1xyXG4gIGNvbG9yOiAjMjY3MzRkO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmV7XHJcbiAgY29sb3I6ICMxOTRkMzM7XHJcbn0iLCJib2R5LFxuaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJnIHtcbiAgLyogVGhlIGltYWdlIHVzZWQgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93YWxscGFwZXJwbGF5LmNvbS93YWxscy9mdWxsL2QvZi8xLzEwMDE1MS5qcGdcIik7XG4gIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIGhlaWdodDogMTAwIHZoO1xuICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4udGFibGUtaG92ZXIgdGJvZHkgdHI6aG92ZXIgdGQsIC50YWJsZS1ob3ZlciB0Ym9keSB0ciA6aG92ZXIgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlmMmU2O1xufVxuXG50aCwgdGQge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGIzNDU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgge1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbnRkIHtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDM4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMzQ1O1xuICB3aWR0aDogMTQwcHg7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICMyNjczNGQ7XG59XG5cbi5idG4tb3V0bGluZSB7XG4gIGNvbG9yOiAjMTk0ZDMzO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _main_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-service.service */ "./src/app/main-service.service.ts");
/* harmony import */ var _vendorcontactDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vendorcontactDetails */ "./src/app/vendorcontactDetails.ts");




let ViewComponent = class ViewComponent {
    constructor(_mainservice) {
        this._mainservice = _mainservice;
        this.popoverMessage = "Do you want to disable?";
        this.vendorContactDetail = new _vendorcontactDetails__WEBPACK_IMPORTED_MODULE_3__["VendorContactDetails"]();
    }
    ngOnInit() {
        this.getVendorDetails();
    }
    //method for getting vendor+ its contact details
    getVendorDetails() {
        this._mainservice.getVendorDetails().subscribe((Data) => {
            this.details = Data,
                console.log(Data);
        }, (error) => {
            console.log(error);
        });
    }
    //search the details
    search(searchString) {
        if (searchString != null) {
            this._mainservice.search(searchString).subscribe((Data) => {
                this.details = Data,
                    console.log(Data);
            }, (error) => {
                console.log(error);
            });
        }
        else {
            this.getVendorDetails();
        }
    }
    //disable the details
    disable(vId) {
        this._mainservice.disable(this.vendorContactDetail, vId).subscribe((response) => {
            console.log(response);
            this.getVendorDetails();
        }, (error) => {
            console.log(error);
        });
    }
    edit(vId) {
        this._mainservice.edit(vId);
    }
};
ViewComponent.ctorParameters = () => [
    { type: _main_service_service__WEBPACK_IMPORTED_MODULE_2__["MainServiceService"] }
];
ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view.component.scss */ "./src/app/view/view.component.scss")).default]
    })
], ViewComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/user9/Angular8/USTProj/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
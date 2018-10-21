(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "menu", component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"] },
    { path: "gallery", component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__["GalleryComponent"] },
    { path: "**", component: _error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".certificate-image{\n    display: inline-block;\n    margin: 0 5px;\n    border: 5px solid #494d4e;\n    border-radius: 17%;\n    width: 100px;\n    height: 100px;\n    -o-object-fit: unset;\n       object-fit: unset;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"headerOne\">\n        <div class=\"header\">\n                <div class=\"header-inner container flex flex-column flex-row-m flex-space-between-m\">\n\n                        \n                          <a (click)=\"_homeService.internalRoute('','home');\"><div class=\"companyLogo\"></div></a>\n                        <input type=\"checkbox\" id=\"navigation-toggle-checkbox\" name=\"navigation-toggle-checkbox\" class=\"navigation-toggle-checkbox sr\">\n                        <label for=\"navigation-toggle-checkbox\" class=\"navigation-toggle-label\" onclick=\"\">\n                                <span class=\"navigation-toggle-label-inner\">\n                                        <span class=\"sr\">Navigation</span>\n                                </span>\n                        </label>\n                        <div class=\"navigation\">\n                                <ul class=\"navigation-menu\">\n                                        <!-- <li class=\"navigation-item\"><a routerLink=\"\" fragment=\"about\">About</a></li> -->\n                                        \n                                        <li class=\"navigation-item cursor-pointer\"><a (click)=\"_homeService.internalRoute('','about');\">About</a></li>\n                                        <li class=\"navigation-item cursor-pointer\"><a (click)=\"_homeService.internalRoute('','services');\">Our Services</a></li>\n                                        <li class=\"navigation-item cursor-pointer\"><a (click)=\"_homeService.internalRoute('','reservations');\">Reservations</a></li>\n                                        <li class=\"navigation-item cursor-pointer\"><a (click)=\"_homeService.internalRoute('','reviews');\">Reviews</a></li>\n                                        <li class=\"navigation-item cursor-pointer\"><a routerLink=\"/menu\">Menu</a></li>\n                                        <li class=\"navigation-item cursor-pointer\"><a routerLink=\"/gallery\">Gallery</a></li>\n                                </ul>\n\n                        </div>\n                </div>\n        </div>\n</div>\n<router-outlet></router-outlet>\n<div class=\"footer\">\n        <div class=\"footer-inner container\">\n          <div class=\"row-m\">\n            <!-- <div class=\"footer-column col-4-l\">\n              <h3 class=\"footer-heading\">About us</h3>\n              <p>\n                We customize each event through remarkable design and delectable cuisine.By making\n          better choices consistently, and supporting local businesses, we bring more than just taste and\n          presentation to the plate, we ensure a future rich in culinary excellence.\n              </p>\n            </div> -->\n            <div class=\"footer-column col-4-l\">\n              <h3 class=\"footer-heading\">Opening Hours</h3>\n              <p>\n                <strong>Mon-Thu:</strong> 7.00am - 8.00pm <br>\n                <strong>Fri-Sun:</strong> 7.00am - 10.00pm\n              </p>\n              <ul class=\"payment-types icon-list-inline\">\n                <li><span class=\"payment payment-mastercard\"><span class=\"sr\">Mastercard</span></span></li>\n                <li><span class=\"payment payment-visa\"><span class=\"sr\">Visa</span></span></li>\n                <li><span class=\"payment payment-american-express\"><span class=\"sr\">American Express</span></span></li>\n                <li><span class=\"payment payment-paypal\"><span class=\"sr\">PayPal</span></span></li>\n              </ul>\n            </div>\n\n            <div class=\"footer-column col-4-l\">\n              <h3 class=\"footer-heading\">Accreditation</h3>\n              <img class=\"img-fluid certificate-image feature-image-1\" src=\"../assets/Images/certificate_2.png\" alt=\"Wheat\">\n              <img class=\"img-fluid certificate-image feature-image-1\" style=\"width: 150px;\" src=\"../assets/Images/certificate_1.png\" alt=\"Wheat\">\n            </div>\n      \n            <div class=\"footer-column col-4-l\">\n              <h3 class=\"footer-heading\">Our Location</h3>\n              <p>\n                Opp DCC, Bakery Junction, Nandavanam Road, Thiruvananthapuram, Kerala 695001 <br>\n                Ph: 0471232 0327 Mob: 9847151999 <br>\n                Email: varnamcaterers@gmail.com <br>\n              </p>\n              <ul class=\"footer-social-list icon-list-inline\">\n                <li class=\"navigation-item-social\"><a class=\"social social-twitter\" href=\"https://getbase.org/templates/restaurant-template/#\"><span\n                      class=\"sr\">Twitter</span></a></li>\n                <li class=\"navigation-item-social\"><a class=\"social social-facebook\" href=\"https://getbase.org/templates/restaurant-template/#\"><span\n                      class=\"sr\">Facebook</span></a></li>\n                <li class=\"navigation-item-social\"><a class=\"social social-google-plus\" href=\"https://getbase.org/templates/restaurant-template/#\"><span\n                      class=\"sr\">Google Plus</span></a></li>\n                <li class=\"navigation-item-social\"><a class=\"social social-youtube\" href=\"https://getbase.org/templates/restaurant-template/#\"><span\n                      class=\"sr\">YouTube</span></a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _home_home_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home-service.service */ "./src/app/home/home-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(commonService, _homeService) {
        this.commonService = commonService;
        this._homeService = _homeService;
        this.title = 'varnam';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_service_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _home_home_service_service__WEBPACK_IMPORTED_MODULE_2__["HomeServiceService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_collapsible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-collapsible */ "./node_modules/angular2-collapsible/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__["GalleryComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular2_collapsible__WEBPACK_IMPORTED_MODULE_4__["CollapsibleModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_12__["SlideshowModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  error works!\n</p>\n"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font: 14px/1 'Open Sans', sans-serif;\n  color: #555;\n  background: #e5e5e5;\n}\n\n.gallery {\n  width: 90vw;\n  margin: 0 auto;\n  padding: 5px;\n  background: #fff;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\n}\n\n.gallery > div {\n  position: relative;\n  float: left;\n  padding: 5px;\n}\n\n.gallery > div > img {\n  display: block;\n  width: 28.67vw;\n  transition: .1s transform;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0); /* hack */\n}\n\n.gallery > div:hover {\n  z-index: 1;\n}\n\n.gallery > div:hover > img {\n  -webkit-transform: scale(1.3,1.3);\n          transform: scale(1.3,1.3);\n  transition: .3s transform;\n}\n\n.cf:before, .cf:after {\n  display: table;\n  content: \"\";\n  line-height: 0;\n}\n\n.cf:after {\n  clear: both;\n}\n\nh1 {\n  margin: 40px 0;\n  font-size: 30px;\n  font-weight: 300;\n  text-align: center;\n}\n\n@media only screen and (max-width:1000px){\n    .gallery > div > img {\n        width: 28.6vw;\n    }\n    .gallery {\n        width: 91vw;\n    }\n}\n\n@media only screen and (max-width:768px){\n    .gallery > div > img {\n        width: 28.5vw;\n    }\n    .gallery {\n        width: 92vw;\n    }\n}\n\n@media only screen and (max-width:645px){\n    \n    .gallery {\n        width: 93vw;\n    }\n}\n\n@media only screen and (max-width:555px){\n    \n    .gallery {\n        width: 63vw;\n    }\n}\n\n@media only screen and (max-width:555px){\n    \n    .gallery {\n        width: 63vw;\n    }\n    .gallery > div > img {\n        width: 58vw;\n    }\n}   \n\n\n\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"setBaseBottom content-block\">\n    <br>\n    <h2 class=\"heading\">Our Gallery</h2>\n  \n<div class=\"gallery cf \">\n    <div>\n      <img  src=\"../../assets/Images/Appam.jpg\" alt=\"Food\">\n    </div>\n    <div>\n      <img  src=\"../../assets/Images/Appam.jpg\" alt=\"Food\">\n    </div>\n    <div>\n      <img  src=\"../../assets/Images/Appam.jpg\" alt=\"Food\">\n    </div>\n    <div>\n        <img  src=\"../../assets/Images/Appam.jpg\" alt=\"Food\">\n      </div>\n      <div>\n        <img  src=\"../../assets/Images/Appam.jpg\" alt=\"Food\">\n      </div>\n      <div>\n        <img  src=\"../../assets/Images/Appam.jpg\" alt=\"Food\">\n      </div>\n    \n  </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/home/home-service.service.ts":
/*!**********************************************!*\
  !*** ./src/app/home/home-service.service.ts ***!
  \**********************************************/
/*! exports provided: HomeServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeServiceService", function() { return HomeServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeServiceService = /** @class */ (function () {
    function HomeServiceService(_Router) {
        this._Router = _Router;
    }
    HomeServiceService.prototype.internalRoute = function (routerLink, idElement) {
        var _this = this;
        this._Router.navigateByUrl('/DummyComponent', { skipLocationChange: true }).then(function () {
            return _this._Router.navigate([routerLink], { fragment: idElement });
        });
    };
    HomeServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeServiceService);
    return HomeServiceService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about{\n    text-align: center;\n}\n.reservation-allignment{\n    width: 80%;\n    padding-left: 233px;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"headercontentavoid\">\n  <!-- <div #home id=\"home\" class=\"cder\">\n    <div class=\"setBaseBottom\">\n      <div class=\"banner-inner container\">\n        <h1 class=\"banner-lead\">\n          <span class=\"banner-lead-1\">Celebrations with Varnam</span>\n          <span class=\"banner-lead-2\">Experience excellent and quality catering</span>\n        </h1>\n        <div class=\"banner-buttons\">\n          <a routerLink=\"/menu\" class=\"button button-secondary\">See our menu</a>\n        </div>\n      </div>\n    </div>\n  </div> -->\n  <div #home id=\"home\" class=\"\" style=\"position: relative;\">\n    <slideshow #slideshow [imageUrls]=\"imageUrlArray\" [height]=\"'100vh'\" [arrowSize]=\"'40px'\" [showArrows]=\"true\" [autoPlay]=\"true\"\n      [stopAutoPlayOnSlide]=\"false\" [backgroundSize]=\"'cover'\" [backgroundPosition]=\"'center center'\" [showDots]=true [dotColor]=\"'#fff'\"\n      [showCaptions]=true [captionColor]=\"'#fff'\" [captionBackground]=\"'#847a5dbd'\" [disableSwiping]=false>\n     \n    </slideshow>\n    <div *ngIf=\"slideshow.slideIndex==0\" class=\"setBaseBottom\" style=\"position: absolute;top:0;left: 140px;\">\n      <div class=\"banner-inner container\">\n        <h1 class=\"banner-lead\">\n          <span class=\"banner-lead-1\">Celebrations with Varnam</span>\n          <span class=\"banner-lead-2\">Experience excellent and quality catering</span>\n        </h1>\n        <div class=\"banner-buttons\">\n          <a routerLink=\"/menu\" class=\"button button-secondary\">See our menu</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- about -->\n  <div #about id=\"about\" class=\"content-block about-block \" style=\"visibility: visible;\">\n    <br><br>\n    <div class=\"setBaseBottom about-block-inner container\">\n      <div class=\"row-m text-center\">\n        <div class=\"about-block-content col-6-l\">\n          <h2 class=\"heading\">About </h2>\n          <p class=\"about\">\n            Varnam caterers is name famous for providing the best outdoor catering services in Trivandrum and through\n            out kerala. Varnam Catering Services welcomes the opportunity to serve you. We pride ourselves on offering\n            an outstanding array of food and beverage selections designed to meet a variety of needs. We are dedicated\n            in providing you with the highest quality of catering services, from a simple coffee break to extravagant\n            receptions and dinners. Our catering staff strives to develop and produce customized menu events. We invite\n            you to contact our experts to assist you in planning your next event. We have been in the industry for past\n            20 years.<br><br>\n            Our organization is engaged in rendering Wedding Catering Services for the clients. For wedding of all\n            religious communities, we offer these catering services. We have exotic and scrumptious menus, which\n            delights the mood of the food lovers. For creating a lip-smacking feast, guests can choose the appetizers,\n            entrees and desserts. Varnam catering services are rendered by our experienced chefs.<br><br>\n            Our organization is ISO 22000 certified and also incorporates HACCP principles and is compatible with ISO\n            9001: 2008 certification quality management systems, making it the ideal basis for implementing a\n            comprehensive, cost effective food safety management system.\n\n          </p>\n        </div>\n        <div class=\"about-block-img col-6-l none-m block-l\">\n          <img class=\"img-fluid\" src=\"../../assets/Images/dish.png\" alt=\"Dish of food\">\n          <img class=\"img-fluid about-chef hand\" src=\"../../assets/Images/handshake1.png\" alt=\"Chef\">\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Our Services -->\n  <div #services id=\"services\" class=\"content-block ingredients-block\" style=\"visibility: visible;\">\n    <br>\n    <div class=\"ingredients-block-inner container\">\n      <div class=\"setBaseBottom row-m flex-center-m\">\n        <div class=\"col-8-m\">\n          <div class=\"feature-box text-center\">\n            <h2 class=\"heading-secondary\">Our Services</h2>\n            <div class=\"feature-box-content\">\n              <p>\n                If you've been to our restaurants, you've seen - and tasted - what keeps our customers\n                coming back for more. <br>\n                Varnam proudly offers catering services for your personal or business needs. Our\n                catering services range from the most elegant affair to a business luncheon or a picnic\n                at the park. We will meet your event needs by exploring options and ideas with you. You\n                will find Varnam catering staff to be professional, pleasant and quick to meet your\n                needs.\n              </p>\n              <div class=\"feature-image-group flex-m flex-center-m\">\n                <figure>\n                  <img class=\"img-fluid feature-image feature-image-1\" src=\"../../assets/Images/marriage.jpg\" alt=\"Wheat\">\n                  <figcaption>Marriage</figcaption>\n                </figure>\n                <figure>\n                  <img class=\"img-fluid feature-image feature-image-1\" src=\"../../assets/Images/baptism.jpg\" alt=\"Wheat\">\n                  <figcaption>Baptism</figcaption>\n                </figure>\n                <figure>\n                  <img class=\"img-fluid feature-image feature-image-1\" src=\"../../assets/Images/product-lunch-inner.jpg\"\n                    alt=\"Wheat\">\n                  <figcaption>Product Launch</figcaption>\n                </figure>\n                <figure>\n                  <img class=\"img-fluid feature-image feature-image-1\" src=\"../../assets/Images/innaguration.png\" alt=\"Wheat\">\n                  <figcaption>Innagurations</figcaption>\n                </figure>\n                <figure>\n                  <img class=\"img-fluid feature-image feature-image-1\" src=\"../../assets/Images/marriage.jpeg\" alt=\"Wheat\">\n                  <figcaption>Betrothal</figcaption>\n                </figure>\n                <figure>\n                  <img class=\"img-fluid feature-image feature-image-1\" src=\"../../assets/Images/party.jpg\" alt=\"Wheat\">\n                  <figcaption>Event Management</figcaption>\n                </figure>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n  </div>\n\n  <!-- reservations -->\n  <div #reservations id=\"reservations\" class=\"content-block reservations-block \" style=\"visibility: visible;height: 108vh\">\n    <br><br>\n    <div class=\"reservations-block-inner container\">\n      <div class=\"setBaseBottom row-m\">\n        <div class=\"reservation-block-form reservation-allignment\">\n          <div class=\"text-center\">\n            <h2 class=\"heading\">Just the right food</h2>\n            <p>\n              If you've been to one of our restaurants, you've seen - and tasted - what keeps our\n              customers coming back for more. Perfect materials and freshly baked food\n            </p>\n          </div>\n          <div class=\"reservations-form\">\n            <fieldset class=\"reservations-form-wrap\">\n              <legend class=\"sr\">Contact Us</legend>\n              <div class=\"row-m\">\n                <div class=\"col-6-m pad-top-10 pad-bottom-10\">\n                  <label class=\"block strong\">Name</label>\n                  <input class=\"field\" [(ngModel)]=\"userData.data.name\" type=\"text\" placeholder=\"your name *\">\n                </div>\n                <div class=\"col-6-m pad-top-10 pad-bottom-10\">\n                  <label class=\"block strong\">Email</label>\n                  <input name=\"email\" class=\"field\" id=\"email\" [(ngModel)]=\"userData.data.email\" type=\"email\" placeholder=\"your email *\">\n                </div>\n              </div>\n              <div class=\"row-m\">\n                <div class=\"col-6-m pad-top-10 pad-bottom-10\">\n                  <label class=\"block strong\">Date</label>\n                  <input name=\"date-of-booking\" class=\"field\" [(ngModel)]=\"userData.data.date\" id=\"date\" type=\"text\" placeholder=\"date *\">\n                </div>\n                <div class=\"col-6-m pad-top-10 pad-bottom-10\">\n                  <label class=\"block strong\">Function</label>\n                  <span class=\"select\">\n                    <select class=\"field\" name=\"party-size\" [(ngModel)]=\"userData.data.function\" id=\"party-size\">\n                      <option value=\"\" disabled selected>Select your option</option>\n                      <option value=\"Wedding\">Wedding</option>\n                      <option value=\"Baptism\">Baptism</option>\n                      <option value=\"Product Launch\">Product Launch</option>\n                      <option value=\"Betrothal\">Betrothal</option>\n                      <option value=\"Event Management\">Event Management</option>\n                      <option value=\"Innagurations\">Innagurations</option>\n                      <option value=\"Birthday Party\">Birthday Party</option>\n                    </select>\n                  </span>\n                </div>\n              </div>\n              <div class=\"row-m\">\n              <div class=\"col-6-m pad-top-10 pad-bottom-10\">\n                  <label class=\"block strong\">Phone no:</label>\n                  <input name=\"phone\" class=\"field\" id=\"phone\" [(ngModel)]=\"userData.data.phone\" type=\"phone\" placeholder=\"your phone *\">\n                </div>\n                <div class=\"col-6-m pad-top-10 pad-bottom-10\">\n                    <label class=\"block strong\">Place</label>\n                    <input name=\"place\" class=\"field\" id=\"place\" [(ngModel)]=\"userData.data.place\" type=\"place\" placeholder=\"your place *\">\n                  </div>\n                </div>\n              <div class=\"text-center\">\n                <input type=\"submit\" (click)=\"goToMenu();\" class=\"button reservations-submit\" value=\"See Menu!\">\n              </div>\n              \n            </fieldset>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br><br>\n  </div>\n\n\n  <!-- reviews -->\n  <div #reviews id=\"reviews\" class=\"content-block reviews-block\" style=\"visibility: visible;\">\n    <div class=\"setBaseBottom reviews-block-inner container\">\n      <div class=\"row-m flex-center-m\" style=\"padding-bottom: 100px;\">\n        <div class=\"col-8-m feature-box text-center\">\n          <h2 class=\"heading-secondary\">Guest Reviews</h2>\n          <blockquote class=\"pad-10\">\n            <p>\n              This place is a definite go for the foodies. Each and everything we tried was perfect.\n              The must haves here are - Caesar Salad, Hash Browns, Macroni Alfredo, Chicken Ham Sandwich,\n              Grilled Lamb Burger, Classic Grill Chicken and Supreme Sizzler.The ambiance is nice, very\n              cozy. The staff is really courteous and we even met the chef and thanked him :)\n            </p>\n            <cite>\n              Atulya Kumar\n            </cite>\n          </blockquote>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var setimmediate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
/* harmony import */ var setimmediate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(setimmediate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-service.service */ "./src/app/home/home-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_menu_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu/menu-service.service */ "./src/app/menu/menu-service.service.ts");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/common.service */ "./src/app/service/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(_CommonService, _homeService, _Router, _ActivatedRoute, element, _menuService) {
        this._CommonService = _CommonService;
        this._homeService = _homeService;
        this._Router = _Router;
        this._ActivatedRoute = _ActivatedRoute;
        this.element = element;
        this._menuService = _menuService;
        this.userData = {
            "data": {
            // "name": "",
            // "email": "",
            // "date": "",
            // "function": "",
            // "phone": "",
            // "place": ""
            },
        };
        this.imageUrlArray = [
            { url: "../../assets/Images/slider/02.jpg", caption: "First Image" },
            { url: "../../assets/Images/slider/01.jpg", caption: "second Image" },
            { url: "../../assets/Images/slider/03.jpg", caption: "third Image" },
            { url: "../../assets/Images/slider/04.jpg", caption: "fourth Image" },
            { url: "../../assets/Images/slider/05.jpg", caption: "fifth Image" },
            { url: "../../assets/Images/slider/06.jpg", caption: "sixth Image" },
        ];
        _Router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                var tree = _Router.parseUrl(_Router.url);
                if (tree.fragment) {
                    var element_1 = document.querySelector("#" + tree.fragment);
                    if (element_1) {
                        element_1.scrollIntoView();
                    }
                }
            }
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.goToMenu = function () {
        this._menuService.userDetails.data = this.userData.data;
        this._Router.navigate(['/menu']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _home_service_service__WEBPACK_IMPORTED_MODULE_2__["HomeServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _menu_menu_service_service__WEBPACK_IMPORTED_MODULE_4__["MenuServiceService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu-service.service.ts":
/*!**********************************************!*\
  !*** ./src/app/menu/menu-service.service.ts ***!
  \**********************************************/
/*! exports provided: MenuServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuServiceService", function() { return MenuServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuServiceService = /** @class */ (function () {
    function MenuServiceService() {
        this.userDetails = {};
        this.userDetails = {
            "data": {
                "name": "",
                "email": "",
                "date": "",
                "function": "",
                "phone": "",
                "place": ""
            },
            order: {
                WELCOMEDRINK: [],
                SALADS: [],
                SOUPS: [],
                STARTERS: [],
                FIRSTCOURSE: [],
                BIRIYANI: [],
                NOODLES: [],
                RICE: [],
                CHICKEN: [],
                MUTTON: [],
                BEEF: [],
                FISH: [],
                EGG: [],
                VEGETABLE: []
            }
        };
    }
    MenuServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MenuServiceService);
    return MenuServiceService;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".accordianCollapsList {\n  border: none;\n  margin: 0px;\n  display: inline!important;\n}\n\n.collapsed {\n  overflow-y: scroll;\n  height: auto;\n  max-height: 400px;\n}\n\n.single-accordian {\n  margin-bottom: 10px;\n  float: left;\n  width: 100%;\n  border: 1px solid #e8e8e8;\n  border-radius: 3px;\n  box-shadow: 0px 0px 15px -7px;\n}\n\n#accordion {\n  width: 100%;\n}\n\n.waves-effect {\n  display: block;\n  cursor: pointer;\n  min-height: 5rem;\n  line-height: 5rem;\n  padding: 0 35px;\n  background-color: #fff;\n  border: none;\n  border-radius: 3px;\n  color: #5c6bc0;\n  font-weight: 600;\n  font-size: 15px;\n  text-transform: uppercase;\n}\n\n.accordion-content {\n  padding: 1px 0px 0px 0px;\n}\n\n.ac-recommendation-status {\n  padding: 0px;\n}\n\n.displayNone.ac-employees-unsorted li {\n  display: none !important;\n}\n\n.textHover {\n  cursor: pointer;\n}\n\n.labelChange {\n  font-family: \"Yeseva One\", cursive;\n  margin: 0 0 .5em;\n  font-weight: 400;\n  display: block;\n  -webkit-margin-before: 1.67em;\n  margin-block-start: 0px;\n  -webkit-margin-after: 1.67em;\n  margin-block-end: 0em;\n  -webkit-margin-after: 0.67em;\n          margin-block-end: 0.67em;\n  it-margin-start: 0px;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n  margin-inline-end: 0px;\n  font-size: 16px;\n  line-height: 22px;\n  color: #c90;\n}\n\n.accordion-toggle {\n  padding: 1em 1em 1em 1em;\n  margin: 0 auto;\n  cursor: pointer;\n  font-size: 15px;\n  font-family: Droid Sans, sans-serif;\n  font-weight: 600;\n  color: #5c6bc0;\n}\n\n.rotateArrow {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n\n.glyphicon-menu-right {\n  float: left !important;\n  top: 16px !important;\n  margin-right: 15px;\n}\n\n.removeDot {\n  list-style: none;\n}\n\n/* checkbox */\n\n.option-input,.option-input-cross {\n  -webkit-appearance: none;\n  -moz-appearance: none!important;\n  -ms-appearance: none!important;\n  -o-appearance: none!important;\n  appearance: none!important;\n  position: relative!important;\n  top: -32px;\n  right: 32px;\n  height: 23px;\n  width: 23px;\n  transition: all 0.15s ease-out 0s;\n  background: #cbd1d8;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  outline: none!important;\n  position: absolute;\n  margin: 0px;\n  opacity: 1;\n  /*z-index: 1000;\n*/\n}\n\n.option-input:hover{\n  background: #839fc2;\n}\n\n.option-input-cross:hover{\n  background: red;\n}\n\n.option-input:checked,.option-input-cross:checked {\n  /* background: #09cc72; */\n  background: #c90;\n  border: none!important;\n  opacity: 1;\n}\n\n.option-input::before {\n  height: 23px;\n  width: 23px;\n  position: absolute;\n  content: '✔';\n  display: inline-block;\n  font-size: 16px;\n  text-align: center;\n  line-height: 25px;\n}\n\n.option-input-cross::before {\n  height: 23px;\n  width: 23px;\n  position: absolute;\n  content: '✘';\n  display: inline-block;\n  font-size: 16px;\n  text-align: center;\n  line-height: 25px;\n}\n\n.collapseSeperate {\n  width: 50%;\n  padding: 0px 0px 2% 5px;\n  border: red;\n  margin-top: 13px;\n  float: left;\n}\n\n.option-input:checked::before {\n  height: 23px;\n  width: 23px;\n  position: absolute;\n  content: '✔';\n  display: inline-block;\n  font-size: 16px;\n  text-align: center;\n  line-height: 25px;\n}\n\n.option-input-cross:checked::before {\n  height: 23px;\n  width: 23px;\n  position: absolute;\n  content: '✘';\n  display: inline-block;\n  font-size: 16px;\n  text-align: center;\n  line-height: 25px;\n}\n\n.option-input:checked::after,.option-input-cross:checked::after {\n  -webkit-animation: click-wave 0.65s;\n  animation: click-wave 0.65s;\n  background: #40e0d0;\n  content: '';\n  display: block;\n  position: relative;\n  z-index: 100;\n}\n\n.option-input.checkbox,.option-input-cross.checkbox {\n  border-radius: 50%;\n}\n\n.option-input.checkbox::after,.option-input-cross.checkbox::after {\n  border-radius: 50%;\n}\n\n/* checkbox */\n\n.maindiv {\n  width: 100%;\n}\n\n.reservations-form {\n  width: -webkit-fill-available;\n  float: left;\n  padding-left: 23px;\n  padding-bottom: 7%;\n}"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"setBaseBottom food-menu-block-inner container\">\n    <br>\n    <h2 class=\"heading\">Our Menu</h2>\n\n    \n  \n  <div class=\"maindiv\">\n  <div class=\"collapseSeperate\">\n  <collapsible-list [type]=\"'accordion'\" style=\"border: none;\">\n    <collapsible-list-item class=\"single-accordian\" *ngFor=\"let header of objectKeys(allDataContent);\">\n      <collapsible-header class=\"waves-effect\">\n        {{header}}\n      </collapsible-header>\n        <collapsible-body class=\"single-accordion\">\n        <div class=\"accordion-content default\">\n          <div class=\"ac-recommendation-status\">\n            <ul class=\"ac-employees-unsorted\" *ngIf=\"allDataContent\">\n              <li class=\"removeDot\" *ngFor=\"let item of allDataContent[header];let index=index\">   \n                <label class=\"textHover labelChange\" for=\"{{item}}\">{{item}}</label>\n                <input type=\"checkbox\" id=\"{{item}}\" [checked]=\"_menuService.userDetails.order[header].indexOf(item) >= 0\" (change)=\"orderItem(header,item,true);\" class=\"option-input checkbox\"/>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </collapsible-body>\n    </collapsible-list-item>\n  </collapsible-list>\n</div>\n<div class=\"collapseSeperate\">\n  <collapsible-list [type]=\"'accordion'\" style=\"border: none;\" *ngFor=\"let header of objectKeys(_menuService.userDetails.order);\">\n    <collapsible-list-item class=\"single-accordian\" *ngIf=\"_menuService.userDetails.order[header].length>0\">\n      <collapsible-header class=\"waves-effect\" *ngIf=\"_menuService.userDetails.order[header].length>0\">\n        {{header}}\n      </collapsible-header>\n      <collapsible-body class=\"single-accordion\" *ngIf=\"_menuService.userDetails.order[header].length>0\">\n        <div class=\"accordion-content default\">\n          <div class=\"ac-recommendation-status\">\n            <ul class=\"ac-employees-unsorted\" >\n              <li class=\"removeDot\" *ngFor=\"let item of _menuService.userDetails.order[header];let index=index\">   \n                  <label class=\"textHover labelChange\" for=\"{{item}}+index\">{{item}}</label>\n                  <input type=\"checkbox\" id=\"{{item}}+index\" (change)=\"orderItem(header,item,false);\" class=\"option-input-cross checkbox\"/>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </collapsible-body>\n    </collapsible-list-item>\n  </collapsible-list>\n</div>\n</div>\n\n<div class=\"reservations-form\">\n    <fieldset class=\"reservations-form-wrap\">\n<div class=\"row-m\">\n    <div class=\"col-6-m pad-top-10 pad-bottom-10\">\n      <label class=\"block strong\" for=\"name\">Name</label>\n      <input name=\"full-name\" class=\"field\" [(ngModel)]=\"_menuService.userDetails.data.name\" id=\"name\" type=\"text\" placeholder=\"your name *\">\n    </div>\n    <div class=\"col-6-m pad-top-10 pad-bottom-10\">\n      <label class=\"block strong\" for=\"email\">Email</label>\n      <input name=\"email\" class=\"field\" id=\"email\" [(ngModel)]=\"_menuService.userDetails.data.email\" type=\"email\" placeholder=\"your email *\">\n    </div>\n  </div>\n  <div class=\"row-m\">\n    <div class=\"col-6-m pad-top-10 pad-bottom-10\">\n      <label class=\"block strong\" for=\"date\">Date</label>\n      <input name=\"date-of-booking\" class=\"field\" id=\"date\" [(ngModel)]=\"_menuService.userDetails.data.date\" type=\"text\" placeholder=\"date *\">\n    </div>\n    <div class=\"col-6-m pad-top-10 pad-bottom-10\">\n      <label class=\"block strong\" for=\"party-size\">Function</label>\n      <span class=\"select\">\n        <select class=\"field\" name=\"party-size\" [(ngModel)]=\"_menuService.userDetails.data.function\" id=\"party-size\">\n          <option value=\"\" disabled selected>Select your option</option>\n          <option value=\"Wedding\">Wedding</option>\n          <option value=\"Baptism\">Baptism</option>\n          <option value=\"Product Launch\">Product Launch</option>\n          <option value=\"Betrothal\">Betrothal</option>\n          <option value=\"Event Management\">Event Management</option>\n          <option value=\"Innagurations\">Innagurations</option>\n          <option value=\"Birthday Party\">Birthday Party</option>\n        </select>\n      </span>\n    </div>\n  </div>\n  <div class=\"row-m\">\n  <div class=\"col-6-m pad-top-10 pad-bottom-10\">\n      <label class=\"block strong\" for=\"email\">Phone no:</label>\n      <input name=\"phone\" class=\"field\" [(ngModel)]=\"_menuService.userDetails.data.phone\" id=\"phone\" type=\"phone\" placeholder=\"your phone *\">\n    </div>\n    <div class=\"col-6-m pad-top-10 pad-bottom-10\">\n        <label class=\"block strong\" for=\"email\">Place</label>\n        <input name=\"place\" class=\"field\" id=\"place\" type=\"place\" [(ngModel)]=\"_menuService.userDetails.data.place\" placeholder=\"your place *\">\n      </div>\n    </div>\n    <div class=\"text-center\">\n        <input type=\"submit\" class=\"button reservations-submit\" (click)=\"submitOrder();\" value=\"Book now!\">\n      </div>\n    </fieldset>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _menu_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-service.service */ "./src/app/menu/menu-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var content = __webpack_require__(/*! ../../app/menulist.json */ "./src/app/menulist.json");
var MenuComponent = /** @class */ (function () {
    function MenuComponent(_commonService, _menuService) {
        this._commonService = _commonService;
        this._menuService = _menuService;
        this.objectKeys = Object["keys"];
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.allDataContent = JSON.parse(JSON.stringify(content));
        window.scrollTo(0, 0);
    };
    MenuComponent.prototype.submitOrder = function () {
        console.log(JSON.stringify(this._menuService.userDetails));
    };
    MenuComponent.prototype.orderItem = function (header, item, isOrdered) {
        if (isOrdered) {
            if (this._menuService.userDetails.order[header].indexOf(item) >= 0) {
                this._menuService.userDetails.order[header].splice(this._menuService.userDetails.order[header].indexOf(item), 1);
            }
            else {
                this._menuService.userDetails.order[header].push(item);
            }
        }
        else {
            this._menuService.userDetails.order[header].splice(this._menuService.userDetails.order[header].indexOf(item), 1);
        }
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_service_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _menu_service_service__WEBPACK_IMPORTED_MODULE_2__["MenuServiceService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/menulist.json":
/*!*******************************!*\
  !*** ./src/app/menulist.json ***!
  \*******************************/
/*! exports provided: WELCOMEDRINK, SALADS, SOUPS, STARTERS, FIRSTCOURSE, BIRIYANI, NOODLES, RICE, CHICKEN, MUTTON, BEEF, FISH, EGG, VEGETABLE, default */
/***/ (function(module) {

module.exports = {"WELCOMEDRINK":["Aerated Soft Drinks","Cold Coffee","Milkshakes","Tender Coconut","Buttermilk","Flavoured Lassi","Iced Tea","Strawberry","Kiwi Fruit Juice","Rose Milk","Herbal Sharbat","Pineapple Punch","Mix Fruit Punch","Mango Punch","Orange Punch","Fresh Veg. Juice","Mango","Pineapple","Grape Juice","Ball Grapes Smoothie","Mint Lime","Ginger Lime","Fresh Lime"],"SALADS":["Curd rice","Green mango salad","Mango salad","Spicy Kerala Salad","Russian salad","Hawaiian salad","Chinese kimchi","Beats with onion salad","Rice with veg salad","Tuna salad","Pasta with chicken/beef/fish salad","Pasta with veg salad","Variety of chaats- Chana chaat, Aloo Chaat, Fruit chaat","Cabbage with pineapple","Fresh veg salad with dip","Green Salad"],"SOUPS":["Nadan Mutton clear soup","Varnam special seafood soup","Cream of Chicken/Veg","Cream of Tomato","French onion soup","Veg Clear Soup","Chicken noodles soup","Hot and sour (Veg/Non veg)","Sweet corn (Veg/Non Veg)","Sweet corn chicken souap","Chicken soup"],"STARTERS":["Paneer /Veg tikka","Chicken/Fish tikka","Spring roll(Veg/Non-veg)","Meat/veg balls","Nuggets –chicken/veg/fish/beef","Golden fried prawns","Fish finger","Gobi 65/ Paneer 65","Chicken 65","Chicken Lollypop","Cutlet(chick/beef/prawns/fish/veg/mutton)"],"FIRSTCOURSE":["Masala dosa","Chicken/beef/prawns/veg noodles","Erachi puttu","Romali roti with veg kolhapuri","Naan/Roti with butter chicken.","Kallappam with chicken/beef mappas","Dosa with chutney/sambar","Puttu with nadan kadala curry","Kappa with Chutney/ Fish curry","Chana with bhatura","Orattty with mutton chaps","Pathiri with Nadan kozhi curry","Idiyappam with beef curry","Coin Paratha with Prawns Masala","Chapati with Mutton Kuruma","Appam mutton stew","Dinner roll with fish molly"],"BIRIYANI":["Mutton Biriyani","Prawns Biriyani","Beef Biriyani","Kalam Biriyani","Hyderabadi Biriyani","Malabar Dum Biriyani","Navratna Biriyani","Veg biriyani","Chicken biriyani"],"NOODLES":["Chinese chopsey","American chopsey","Thai Beef Noodles","Hakka noodles(chicken/beef/prawns)","Seafood Noodles(Kanava /prawns/fish/squid)","Singapore noodles(chicken/beef/egg/prawns)","Szechwan Noodles(chicken/beef/egg/prawns)","Beef Noodles","Egg Noodles","Chicken Noodles","Mixed noodles(chicken/prawns/beef/egg)","Veg noodles"],"RICE":["Tamarind rice","Lemon rice","Curd rice","Tomato rice","Szechwan fried rice","Egg fried rice","Prawns fried rice","Fish fried rice","Mixed fried rice","Chicken fried rice","Chinese Veg fried rice","Jheera rice","Ghee rice","Kashmiri pulao","Gobi pulao","Peas pulao","Mushroom pulav","Veg. Pulav","Chamba rice","Ponni rice","Basmati rice","Plain rice"],"CHICKEN":["Chicken Shashlik","Chicken Kabab","Chicken 65","Tandoori Chicken","Chicken tikka","Goan Chicken curry","Schezwan Chicken","Dragon Chicken","Hot and sour Chicken","Pepper Chicken","Garlic Chicken","Ginger Chicken","Chicken Manchurian","Kadai Chicken","Chilli Chicken gravy","Chilli Chicken dry","Butter Chicken","Chicken Chettinad","Nilgiri chicken","Chicken liver roast","Chicken liver fry","Chicken Thoran","Chicken Pollichathu","Chicken pepper fry","Chicken 65","Nadan chicken fry","Chicken fry","Chicken Malabari","Chicken brown stew","Chicken varutharacha ttu","Chicken pepper masala","Chicken Chaps","Chicken Mappas","Chicken Ullathu","Chicken Roast","Chicken Perattu","Chicken masala","Nadan chicken curry","Chicken curry"],"MUTTON":["Mutton mughalai","Kashmiri Mutton Masala","Mutton Rogan Josh","Mutton ullathu","Malabar mutton curry","Mutton Mappas","Mutton Pepper Fry","Mutton Chaps","Mutton Roast","Mutton Masala","Mutton stew","Nadan Mutton Curry"],"BEEF":["Crispy fried beef","Beef with vegetables(dry)","Ginger beef","Beef Dry fry","Beef chilly","Beef Mughalai","Kashmiri Beef Masala","Beef Rogan josh","Beef Ullathu","Beef Mutton curry","Beef Mappas","Beef pepper fry","Beef Chaps","Beef Roast","Beef Masala","Beef Stew","Nadan Beef Curry","Nadan Beef curry"],"FISH":["Golden fried prawns","Grilled prawns","Prawns fry","Kanava fry","Para fry","Chippi fry","Mathi fry","Netholi fry","Choora fry","Ayala fry","Avoli fry","Neymeen fry","Karimeen fry","Crab Roast","Kanava Thoran","Fish Thala curry","Fish Peera","Netholi peera","Mathi peera","Schezwan Fish","Fish Ginger","Fish garlic","Fish chilly","Mathi / Choora chutty curry","Fish Pollichathu(karimeen/nemmeen/ayala)","Mango fish curry","Fish mappas(karimeen/nemmeen)","Prawns Mappas","Prawns Theeyal","Fish Molly","Prawns roast","Fish roast","Prawns Masala","Fish masala","Travancore fish curry","Fish vattichathu","Fish curry","Fish curry"],"EGG":["Boiled egg","Omelette","Bullseye","Fried egg","Scrambled egg","Egg Bhurji","Egg pepper Masala","Egg chilly","Egg curry","Egg masala","Egg roast"],"VEGETABLE":["Potato kootu curry","Boiled vegetables","Veg Kolhapuri","Dal Makhani","Dal Tadka","Dal Fry","Bhindi Masala","Mushroom Masala","Green Peas Masala","Palak Paneer","Aloo Mutter","Aloo Gobi","Aloo Jeera","Mixed Veg Curry","Kadai Veg","Chilly Paneer","Chilly Gobi","Gobi Manjurian","Paneer Mutter Masala","Paneer Butter Masala","Veg Masala","Veg stew","Vegetable Kuruma"]};

/***/ }),

/***/ "./src/app/service/common.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/common.service.ts ***!
  \*******************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var content = __webpack_require__(/*! ../../app/menulist.json */ "./src/app/menulist.json");
var CommonService = /** @class */ (function () {
    function CommonService(http) {
        this.http = http;
    }
    CommonService.prototype.getData = function () {
        // make the call, but return the whole Observable object
        return content;
        // .pipe(map(data=>console.log("fjdfjdhfj")));
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommonService);
    return CommonService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cct-support/Abhi/Techmakers/qwerty/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
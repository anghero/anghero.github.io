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

/***/ "./src/app/about-us-page/about-us-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/about-us-page/about-us-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about-us-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/about-us-page/about-us-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/about-us-page/about-us-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzLXBhZ2UvYWJvdXQtdXMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/about-us-page/about-us-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/about-us-page/about-us-page.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutUsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageComponent", function() { return AboutUsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsPageComponent = /** @class */ (function () {
    function AboutUsPageComponent() {
    }
    AboutUsPageComponent.prototype.ngOnInit = function () {
    };
    AboutUsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us-page',
            template: __webpack_require__(/*! ./about-us-page.component.html */ "./src/app/about-us-page/about-us-page.component.html"),
            styles: [__webpack_require__(/*! ./about-us-page.component.scss */ "./src/app/about-us-page/about-us-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsPageComponent);
    return AboutUsPageComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'travel';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _common_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/material.module */ "./src/app/common/material.module.ts");
/* harmony import */ var _common_routes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/routes.module */ "./src/app/common/routes.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _landing_page_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landing-page/header/header.component */ "./src/app/landing-page/header/header.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _landing_page_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landing-page/about-us/about-us.component */ "./src/app/landing-page/about-us/about-us.component.ts");
/* harmony import */ var _landing_page_search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./landing-page/search/search.component */ "./src/app/landing-page/search/search.component.ts");
/* harmony import */ var _landing_page_table_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./landing-page/table/table.component */ "./src/app/landing-page/table/table.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _landing_page_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./landing-page/gallery/gallery.component */ "./src/app/landing-page/gallery/gallery.component.ts");
/* harmony import */ var _landing_page_gallery_gallery_dialog_gallery_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./landing-page/gallery/gallery-dialog/gallery-dialog.component */ "./src/app/landing-page/gallery/gallery-dialog/gallery-dialog.component.ts");
/* harmony import */ var _landing_page_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./landing-page/contact-form/contact-form.component */ "./src/app/landing-page/contact-form/contact-form.component.ts");
/* harmony import */ var _landing_page_map_map_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./landing-page/map/map.component */ "./src/app/landing-page/map/map.component.ts");
/* harmony import */ var _about_us_page_about_us_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./about-us-page/about-us-page.component */ "./src/app/about-us-page/about-us-page.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_8__["LandingPageComponent"],
                _landing_page_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
                _landing_page_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__["AboutUsComponent"],
                _about_us_page_about_us_page_component__WEBPACK_IMPORTED_MODULE_19__["AboutUsPageComponent"],
                _landing_page_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"],
                _landing_page_table_table_component__WEBPACK_IMPORTED_MODULE_13__["TableComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _landing_page_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_15__["GalleryComponent"],
                _landing_page_gallery_gallery_dialog_gallery_dialog_component__WEBPACK_IMPORTED_MODULE_16__["GalleryDialogComponent"],
                _landing_page_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_17__["ContactFormComponent"],
                _landing_page_map_map_component__WEBPACK_IMPORTED_MODULE_18__["MapComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _common_routes_module__WEBPACK_IMPORTED_MODULE_6__["RoutesModule"],
                _common_routes_module__WEBPACK_IMPORTED_MODULE_6__["RoutesModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _common_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
            ],
            entryComponents: [_landing_page_gallery_gallery_dialog_gallery_dialog_component__WEBPACK_IMPORTED_MODULE_16__["GalleryDialogComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/animation.ts":
/*!*************************************!*\
  !*** ./src/app/common/animation.ts ***!
  \*************************************/
/*! exports provided: fadeIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeIn', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500)
    ]),
]);


/***/ }),

/***/ "./src/app/common/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/common/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");








var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            ],
            exports: [
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/common/routes.module.ts":
/*!*****************************************!*\
  !*** ./src/app/common/routes.module.ts ***!
  \*****************************************/
/*! exports provided: RoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesModule", function() { return RoutesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _about_us_page_about_us_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../about-us-page/about-us-page.component */ "./src/app/about-us-page/about-us-page.component.ts");





var appRoutes = [
    {
        path: '',
        component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"]
    },
    {
        path: 'about-us',
        component: _about_us_page_about_us_page_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsPageComponent"]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var RoutesModule = /** @class */ (function () {
    function RoutesModule() {
    }
    RoutesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], RoutesModule);
    return RoutesModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div>\n    <a href=\"/\">\n      <mat-icon>location_on</mat-icon>\n      Around the World\n    </a>\n  </div>\n  <div>\n    <h6>site map</h6>\n    <a href=\"#\" *ngFor=\"let item of map; let i = index\">\n      {{ item.name }}\n    </a>\n  </div>\n  <div>\n    <h6>address</h6>\n    <p *ngFor=\"let item of adress\">{{ item.name }}</p>\n  </div>\n  <div>\n    <h6>socials</h6>\n    <a href=\"#\" *ngFor=\"let item of socials\">{{ item.icon }}</a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  background-color: #000;\n  display: flex;\n  flex-flow: row wrap;\n  padding: 50px; }\n  footer h6 {\n    color: #fff;\n    font-size: 16px;\n    font-weight: 400;\n    margin: 2px 0 15px 0;\n    text-transform: capitalize; }\n  footer p {\n    color: #fff;\n    margin: 10px 0; }\n  footer div:first-child {\n    padding-right: 5%; }\n  footer div:first-child mat-icon {\n      transition: color 0.6s;\n      padding-right: 5px; }\n  footer div:first-child a {\n      display: flex;\n      flex-flow: row nowrap;\n      align-items: center;\n      text-decoration: none;\n      color: #fff;\n      transition: color 0.6s; }\n  footer div:first-child a:hover {\n        color: #7FC7ED; }\n  footer div:first-child a:hover mat-icon {\n          color: #E76D6D; }\n  footer div:nth-child(2) {\n    display: flex;\n    flex-flow: column;\n    padding: 0 10%; }\n  footer div:nth-child(2) a {\n      text-decoration: none;\n      color: #fff;\n      margin: 5px 0;\n      transition: color 0.5s; }\n  footer div:nth-child(2) a:hover {\n        color: #83CDAC; }\n  footer div:nth-child(3) {\n    padding: 0 10%; }\n  footer div:last-child {\n    display: flex;\n    flex-flow: column;\n    padding-left: 5%; }\n  footer div:last-child a {\n      text-decoration: none;\n      color: #fff;\n      margin: 5px 0;\n      transition: color 0.5s;\n      text-transform: capitalize; }\n  footer div:last-child a:nth-child(2):hover {\n        color: #f57ad1; }\n  footer div:last-child a:nth-child(3):hover {\n        color: #7adbf5; }\n  footer div:last-child a:nth-child(4):hover {\n        color: #418ced; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0U6XFxGb3hcXFJlcG9zXFxnaXRcXGFyb3VuZHRoZXdvcmxkLmdpdGh1Yi5pby9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhLEVBQUE7RUFKZjtJQU1JLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFxQjtJQUNyQiwwQkFBMEIsRUFBQTtFQVY5QjtJQWFJLFdBQVc7SUFDWCxjQUFjLEVBQUE7RUFkbEI7SUFrQk0saUJBQWlCLEVBQUE7RUFsQnZCO01Bb0JRLHNCQUFzQjtNQUN0QixrQkFBa0IsRUFBQTtFQXJCMUI7TUF3QlEsYUFBYTtNQUNiLHFCQUFxQjtNQUNyQixtQkFBbUI7TUFDbkIscUJBQXFCO01BQ3JCLFdBQVc7TUFDWCxzQkFBc0IsRUFBQTtFQTdCOUI7UUErQlUsY0FBYyxFQUFBO0VBL0J4QjtVQWlDWSxjQUFjLEVBQUE7RUFqQzFCO0lBdUNNLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsY0FBYyxFQUFBO0VBekNwQjtNQTJDUSxxQkFBcUI7TUFDckIsV0FBVztNQUNYLGFBQWE7TUFDYixzQkFBc0IsRUFBQTtFQTlDOUI7UUFnRFUsY0FBYyxFQUFBO0VBaER4QjtJQXFETSxjQUFjLEVBQUE7RUFyRHBCO0lBd0RNLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7RUExRHRCO01BNERRLHFCQUFxQjtNQUNyQixXQUFXO01BQ1gsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QiwwQkFBMEIsRUFBQTtFQWhFbEM7UUFtRVksY0FBYyxFQUFBO0VBbkUxQjtRQXdFWSxjQUFjLEVBQUE7RUF4RTFCO1FBNkVZLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBoNntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbjogMnB4IDAgMTVweCAwIDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxuICBwe1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbiAgZGl2e1xyXG4gICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgICAgIG1hdC1pY29ue1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNnM7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIGF7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC42cztcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgY29sb3I6ICM3RkM3RUQ7XHJcbiAgICAgICAgICBtYXQtaWNvbntcclxuICAgICAgICAgICAgY29sb3I6ICNFNzZENkQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZCgyKXtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgIHBhZGRpbmc6IDAgMTAlO1xyXG4gICAgICBhe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXM7XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgIGNvbG9yOiAjODNDREFDO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpudGgtY2hpbGQoMyl7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTAlO1xyXG4gICAgfVxyXG4gICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgICAgYXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICY6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICNmNTdhZDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bnRoLWNoaWxkKDMpe1xyXG4gICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICM3YWRiZjU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bnRoLWNoaWxkKDQpe1xyXG4gICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICM0MThjZWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.map = [
            {
                name: 'Home'
            },
            {
                name: 'Link 1'
            },
            {
                name: 'Link 2'
            },
            {
                name: 'Link 3'
            }
        ];
        this.adress = [
            {
                name: '228 Park Ave S New York, NY 10003-1502 US'
            },
            {
                name: 'nidken250@gmail.com'
            },
            {
                name: 'tel: +1 (987)-45-62-57'
            },
        ];
        this.socials = [
            {
                icon: 'instagram'
            },
            {
                icon: 'twitter'
            },
            {
                icon: 'facebook'
            },
        ];
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/about-us/about-us.component.html":
/*!***************************************************************!*\
  !*** ./src/app/landing-page/about-us/about-us.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div>\n    <h3>We know what you want!</h3>\n    <h4>Why us?</h4>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, beatae.</p>\n  </div>\n  <div>\n    <mat-card *ngFor=\"let item of advantages; let i = index\">\n      <mat-icon>{{ item.icon }}</mat-icon>\n      <h4>{{ item.header }}</h4>\n      <p>{{ item.text }}</p>\n    </mat-card>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/landing-page/about-us/about-us.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/landing-page/about-us/about-us.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  background-color: #F2F2F2;\n  padding: 25px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center; }\n  section div:first-child {\n    width: 66%; }\n  section div:first-child h3 {\n      font-weight: 400;\n      margin: 0;\n      text-transform: uppercase;\n      color: #828282;\n      font-size: 12px;\n      text-align: center; }\n  section div:first-child h4 {\n      margin: 0;\n      text-align: center;\n      text-transform: uppercase;\n      font-weight: 300;\n      font-size: 32px;\n      padding: 10px 0; }\n  section div:first-child p {\n      color: #828282;\n      line-height: 1.5;\n      font-size: 18;\n      margin: 0;\n      text-align: center; }\n  section div:last-child {\n    width: 100%;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n    margin: 40px 0; }\n  section div:last-child mat-card {\n      width: 25%;\n      margin: 0 1%; }\n  section div:last-child mat-card mat-icon {\n        color: #828282; }\n  section div:last-child mat-card p {\n        color: #828282; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2Fib3V0LXVzL0U6XFxGb3hcXFJlcG9zXFxnaXRcXGFyb3VuZHRoZXdvcmxkLmdpdGh1Yi5pby9zcmNcXGFwcFxcbGFuZGluZy1wYWdlXFxhYm91dC11c1xcYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7RUFMekI7SUFRTSxVQUFVLEVBQUE7RUFSaEI7TUFVUSxnQkFBZ0I7TUFDaEIsU0FBUztNQUNULHlCQUF5QjtNQUN6QixjQUFjO01BQ2QsZUFBZTtNQUNmLGtCQUFrQixFQUFBO0VBZjFCO01Ba0JRLFNBQVM7TUFDVCxrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsZUFBZSxFQUFBO0VBdkJ2QjtNQTBCUSxjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYixTQUFTO01BQ1Qsa0JBQWtCLEVBQUE7RUE5QjFCO0lBa0NNLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjLEVBQUE7RUF0Q3BCO01Bd0NRLFVBQVU7TUFDVixZQUFZLEVBQUE7RUF6Q3BCO1FBMkNVLGNBQWMsRUFBQTtFQTNDeEI7UUE4Q1UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpdntcclxuICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgIHdpZHRoOiA2NiU7XHJcbiAgICAgIGgze1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBoNHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICB9XHJcbiAgICAgIHB7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICBmb250LXNpemU6IDE4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDQwcHggMDtcclxuICAgICAgbWF0LWNhcmR7XHJcbiAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICBtYXJnaW46IDAgMSU7XHJcbiAgICAgICAgbWF0LWljb257XHJcbiAgICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/landing-page/about-us/about-us.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/landing-page/about-us/about-us.component.ts ***!
  \*************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
        this.advantages = [
            {
                icon: 'flight_takeoff',
                header: 'Lorem ipsum',
                text: 'Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit. '
            },
            {
                icon: 'explore',
                header: 'Lorem ipsum',
                text: 'Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit. '
            },
            {
                icon: 'query_builder',
                header: 'Lorem ipsum',
                text: 'Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit. '
            }
        ];
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/landing-page/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/landing-page/about-us/about-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/contact-form/contact-form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/landing-page/contact-form/contact-form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <h3>Contact Form</h3>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmitForm()\">\n    <div>\n      <mat-form-field >\n        <input color=\"primary\" formControlName=\"name\" matInput placeholder=\"name\">\n        <mat-error *ngIf=\"form.get('name').touched && form.get('name').invalid\">This field is required</mat-error>\n      </mat-form-field>\n    </div>\n    <div>\n      <mat-form-field >\n        <input formControlName=\"email\" matInput placeholder=\"email\">\n        <mat-error *ngIf=\"form.get('email').touched && form.get('email').invalid\">Invalid email</mat-error>\n      </mat-form-field>\n    </div>\n    <div>\n      <mat-form-field >\n        <textarea formControlName=\"message\" matInput placeholder=\"Your message\"></textarea>\n        <mat-error *ngIf=\"form.get('message').touched && form.get('message').invalid\">This field is required</mat-error>\n      </mat-form-field>\n    </div>\n    <div>\n      <button mat-flat-button type=\"submit\">Send</button>\n    </div>\n    <p *ngIf=\"submited\" [@fadeIn]>Form was sent!</p>\n  </form>\n</section>\n"

/***/ }),

/***/ "./src/app/landing-page/contact-form/contact-form.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/landing-page/contact-form/contact-form.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  padding: 0 5% 2% 5%;\n  background-image: url(/assets/contact/form.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: 450px; }\n  section h3 {\n    text-transform: uppercase;\n    font-size: 26px;\n    text-align: center;\n    font-weight: 300;\n    color: #fff;\n    padding: 20px 0;\n    margin: 0; }\n  section form {\n    display: flex;\n    flex-flow: column;\n    align-items: center; }\n  section form p {\n      color: #fff; }\n  section form button {\n      margin-top: 10px;\n      background-color: #83CDAC; }\n  section form input {\n      color: #fff; }\n  section form textarea {\n      color: #fff; }\n  section form /deep/ .mat-form-field-appearance-legacy .mat-form-field-underline {\n      background-color: rgba(255, 255, 255, 0.5); }\n  section form /deep/ .mat-form-field-appearance-legacy .mat-form-field-label {\n      color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2NvbnRhY3QtZm9ybS9FOlxcRm94XFxSZXBvc1xcZ2l0XFxhcm91bmR0aGV3b3JsZC5naXRodWIuaW8vc3JjXFxhcHBcXGxhbmRpbmctcGFnZVxcY29udGFjdC1mb3JtXFxjb250YWN0LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsK0NBQStDO0VBQy9DLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsaUJBQWlCLEVBQUE7RUFMbkI7SUFPSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7SUFDZixTQUFTLEVBQUE7RUFiYjtJQWdCSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQixFQUFBO0VBbEJ2QjtNQW9CTSxXQUFXLEVBQUE7RUFwQmpCO01BdUJNLGdCQUFnQjtNQUNoQix5QkFBeUIsRUFBQTtFQXhCL0I7TUEyQk0sV0FBVyxFQUFBO0VBM0JqQjtNQThCTSxXQUFXLEVBQUE7RUE5QmpCO01BaUNNLDBDQUEwQyxFQUFBO0VBakNoRDtNQW9DTSxZQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xyXG4gIHBhZGRpbmc6IDAgNSUgMiUgNSU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvY29udGFjdC9mb3JtLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xyXG4gIGgze1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgZm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwe1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIGJ1dHRvbntcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzgzQ0RBQztcclxuICAgIH1cclxuICAgIGlucHV0e1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIHRleHRhcmVhe1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC9kZWVwLyAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgfVxyXG4gICAgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/landing-page/contact-form/contact-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/landing-page/contact-form/contact-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_common_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/animation */ "./src/app/common/animation.ts");




var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent() {
        this.submited = false;
    }
    ContactFormComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    ContactFormComponent.prototype.onSubmitForm = function () {
        if (this.form.status === 'VALID') {
            this.submited = true;
            this.form.reset();
        }
        console.log("submit", this.form);
    };
    ContactFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-form',
            template: __webpack_require__(/*! ./contact-form.component.html */ "./src/app/landing-page/contact-form/contact-form.component.html"),
            animations: [src_app_common_animation__WEBPACK_IMPORTED_MODULE_3__["fadeIn"]],
            styles: [__webpack_require__(/*! ./contact-form.component.scss */ "./src/app/landing-page/contact-form/contact-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactFormComponent);
    return ContactFormComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/gallery/gallery-dialog/gallery-dialog.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/landing-page/gallery/gallery-dialog/gallery-dialog.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <button mat-icon-button mat-dialog-close><mat-icon>close</mat-icon></button>\r\n</div>\r\n<h3>{{ data.img.name}}</h3>\r\n<img [src]=\"data.img.src\" alt=\"\">\r\n"

/***/ }),

/***/ "./src/app/landing-page/gallery/gallery-dialog/gallery-dialog.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/landing-page/gallery/gallery-dialog/gallery-dialog.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  text-align: right; }\n\nh3 {\n  text-align: center;\n  font-size: 26px;\n  font-weight: 300;\n  text-transform: uppercase;\n  margin: 0;\n  padding-bottom: 15px; }\n\nimg {\n  width: 1000px;\n  height: auto;\n  border-radius: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2dhbGxlcnkvZ2FsbGVyeS1kaWFsb2cvRTpcXEZveFxcUmVwb3NcXGdpdFxcYXJvdW5kdGhld29ybGQuZ2l0aHViLmlvL3NyY1xcYXBwXFxsYW5kaW5nLXBhZ2VcXGdhbGxlcnlcXGdhbGxlcnktZGlhbG9nXFxnYWxsZXJ5LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1Qsb0JBQW9CLEVBQUE7O0FBRXRCO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9nYWxsZXJ5L2dhbGxlcnktZGlhbG9nL2dhbGxlcnktZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbmgze1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5pbWd7XHJcbiAgd2lkdGg6IDEwMDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/landing-page/gallery/gallery-dialog/gallery-dialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/landing-page/gallery/gallery-dialog/gallery-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GalleryDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryDialogComponent", function() { return GalleryDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var GalleryDialogComponent = /** @class */ (function () {
    function GalleryDialogComponent(data) {
        this.data = data;
    }
    GalleryDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery-dialog',
            template: __webpack_require__(/*! ./gallery-dialog.component.html */ "./src/app/landing-page/gallery/gallery-dialog/gallery-dialog.component.html"),
            styles: [__webpack_require__(/*! ./gallery-dialog.component.scss */ "./src/app/landing-page/gallery/gallery-dialog/gallery-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], GalleryDialogComponent);
    return GalleryDialogComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/gallery/gallery.component.html":
/*!*************************************************************!*\
  !*** ./src/app/landing-page/gallery/gallery.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <h3>Gallery</h3>\n  <div class=\"gallery\">\n    <div *ngFor=\"let item of gallery; let i = index\">\n      <img [src]=\"item.src\" alt=\"gallery\" (click)=\"openImgDialog(i)\">\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/landing-page/gallery/gallery.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/landing-page/gallery/gallery.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  background-color: #F2F2F2;\n  padding: 2% 0; }\n  section h3 {\n    text-align: center;\n    font-weight: 300;\n    font-size: 32px;\n    text-transform: uppercase;\n    margin: 0;\n    padding-bottom: 1%; }\n  section .gallery {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center; }\n  section .gallery div {\n      max-height: 300px;\n      width: 27%;\n      margin: 1%;\n      overflow: hidden; }\n  section .gallery div img {\n        width: 100%;\n        height: 100%;\n        cursor: pointer;\n        transition: -webkit-transform 0.4s;\n        transition: transform 0.4s;\n        transition: transform 0.4s, -webkit-transform 0.4s; }\n  section .gallery div img:hover {\n          -webkit-transform: scale(1.05);\n                  transform: scale(1.05); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2dhbGxlcnkvRTpcXEZveFxcUmVwb3NcXGdpdFxcYXJvdW5kdGhld29ybGQuZ2l0aHViLmlvL3NyY1xcYXBwXFxsYW5kaW5nLXBhZ2VcXGdhbGxlcnlcXGdhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYSxFQUFBO0VBRmY7SUFJSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsU0FBUztJQUNULGtCQUFrQixFQUFBO0VBVHRCO0lBWU0sYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBQTtFQWQ3QjtNQWdCUSxpQkFBaUI7TUFDakIsVUFBVTtNQUNWLFVBQVU7TUFDVixnQkFBZ0IsRUFBQTtFQW5CeEI7UUFxQlUsV0FBVztRQUNYLFlBQVk7UUFDWixlQUFlO1FBQ2Ysa0NBQTBCO1FBQTFCLDBCQUEwQjtRQUExQixrREFBMEIsRUFBQTtFQXhCcEM7VUEwQlksOEJBQXNCO2tCQUF0QixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XHJcbiAgcGFkZGluZzogMiUgMDtcclxuICBoM3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDElOyBcclxuICB9XHJcbiAgLmdhbGxlcnl7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDI3JTtcclxuICAgICAgICBtYXJnaW46IDElO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cztcclxuICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/landing-page/gallery/gallery.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/landing-page/gallery/gallery.component.ts ***!
  \***********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _gallery_dialog_gallery_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery-dialog/gallery-dialog.component */ "./src/app/landing-page/gallery/gallery-dialog/gallery-dialog.component.ts");




var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(dialog) {
        this.dialog = dialog;
        this.gallery = [
            {
                src: '/assets/gallery/canada.jpg',
                name: 'Canada'
            },
            {
                src: '/assets/gallery/france.jpg',
                name: 'France'
            },
            {
                src: '/assets/gallery/netherlands.jpeg',
                name: 'Netherlands'
            },
            {
                src: '/assets/gallery/rome.jpg',
                name: 'Rome'
            },
            {
                src: '/assets/gallery/spain.jpg',
                name: 'Spain'
            },
            {
                src: '/assets/gallery/switzerland.jpg',
                name: 'Switzerland'
            },
        ];
    }
    GalleryComponent.prototype.openImgDialog = function (index) {
        this.dialog.open(_gallery_dialog_gallery_dialog_component__WEBPACK_IMPORTED_MODULE_3__["GalleryDialogComponent"], { data: { img: this.gallery[index] } });
    };
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/landing-page/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/landing-page/gallery/gallery.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/header/header.component.html":
/*!***********************************************************!*\
  !*** ./src/app/landing-page/header/header.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div>\n    <h1>\n      <span>\n        Travel Around the World\n      </span>\n    </h1>\n    <h3>\n      <span>\n        without any borders\n      </span>\n    </h3>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/landing-page/header/header.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/landing-page/header/header.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background-image: url(/assets/header/header.jpg);\n  background-size: cover;\n  height: 100vh;\n  margin-top: -38px;\n  padding: 0 10%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center; }\n  header h1, header h3 {\n    margin: 15px 0;\n    text-align: right; }\n  header h3 {\n    font-size: 24px; }\n  header span {\n    width: 100%;\n    background-color: #121212;\n    color: #fff;\n    padding: 5px 10px; }\n  header div:first-child {\n    width: 100%;\n    padding-bottom: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2hlYWRlci9FOlxcRm94XFxSZXBvc1xcZ2l0XFxhcm91bmR0aGV3b3JsZC5naXRodWIuaW8vc3JjXFxhcHBcXGxhbmRpbmctcGFnZVxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnREFBZ0Q7RUFDaEQsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7RUFSckI7SUFVSSxjQUFjO0lBQ2QsaUJBQWlCLEVBQUE7RUFYckI7SUFjSSxlQUFlLEVBQUE7RUFkbkI7SUFpQkksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsaUJBQWlCLEVBQUE7RUFwQnJCO0lBd0JNLFdBQVc7SUFDWCxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2hlYWRlci9oZWFkZXIuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luLXRvcDogLTM4cHg7XHJcbiAgcGFkZGluZzogMCAxMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaDEsIGgze1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgaDN7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG4gIHNwYW57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIH1cclxuICBkaXZ7XHJcbiAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/landing-page/header/header.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/landing-page/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/landing-page/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-about-us></app-about-us>\r\n<app-search></app-search>\r\n<app-table></app-table>\r\n<app-gallery></app-gallery>\r\n<app-contact-form></app-contact-form>\r\n<app-map></app-map>\r\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.scss */ "./src/app/landing-page/landing-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/map/map.component.html":
/*!*****************************************************!*\
  !*** ./src/app/landing-page/map/map.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <iframe src=\"https://yandex.ru/map-widget/v1/-/CBVEUGebpD\" width=\"100%\" height=\"400\" frameborder=\"0\" allowfullscreen=\"true\"></iframe>\n</section>\n"

/***/ }),

/***/ "./src/app/landing-page/map/map.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/landing-page/map/map.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/landing-page/map/map.component.ts":
/*!***************************************************!*\
  !*** ./src/app/landing-page/map/map.component.ts ***!
  \***************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/landing-page/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/landing-page/map/map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/search/search.component.html":
/*!***********************************************************!*\
  !*** ./src/app/landing-page/search/search.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div>\n    <img src=\"/assets/search/map.png\" alt=\"Find your way\" height=\"100%\">\n  </div>\n  <div>\n    <div><mat-icon>location_on</mat-icon><h3>Find your place</h3></div>\n    <div>\n      <mat-form-field>\n        <mat-select placeholder=\"Select country\" [(ngModel)]=\"ticketCost\" name=\"country\">\n          <mat-option *ngFor=\"let item of country\" [value]=\"item.cost\">\n            {{item.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <p>Ticket cost: {{ticketCost | currency}}</p>\n      <button mat-raised-button>Buy ticket</button>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/landing-page/search/search.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/landing-page/search/search.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  display: flex;\n  flex-flow: row nowrap;\n  background-color: #FFFFFF; }\n  section div:first-child {\n    width: 400px;\n    padding-right: 5px; }\n  section div:last-child {\n    width: 100%;\n    padding: 15px 10% 15px 0; }\n  section div:last-child div:first-child {\n      display: flex;\n      flex-flow: row nowrap;\n      align-items: center;\n      padding-bottom: 15px; }\n  section div:last-child div:first-child h3 {\n        font-weight: 300;\n        font-size: 26px;\n        color: #000;\n        margin: 0;\n        padding: 0 5px;\n        text-transform: uppercase; }\n  section div:last-child div:first-child mat-icon {\n        color: #000; }\n  section div:last-child div:last-child {\n      display: flex;\n      flex-flow: column;\n      justify-content: center;\n      align-items: center; }\n  section div:last-child div:last-child button {\n        background-color: #83CDAC; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL3NlYXJjaC9FOlxcRm94XFxSZXBvc1xcZ2l0XFxhcm91bmR0aGV3b3JsZC5naXRodWIuaW8vc3JjXFxhcHBcXGxhbmRpbmctcGFnZVxcc2VhcmNoXFxzZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHlCQUF5QixFQUFBO0VBSDNCO0lBTU0sWUFBWTtJQUNaLGtCQUFrQixFQUFBO0VBUHhCO0lBVU0sV0FBVztJQUNYLHdCQUF3QixFQUFBO0VBWDlCO01BY1UsYUFBYTtNQUNiLHFCQUFxQjtNQUNyQixtQkFBbUI7TUFDbkIsb0JBQW9CLEVBQUE7RUFqQjlCO1FBbUJZLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsV0FBVztRQUNYLFNBQVM7UUFDVCxjQUFjO1FBQ2QseUJBQXlCLEVBQUE7RUF4QnJDO1FBMkJZLFdBQVcsRUFBQTtFQTNCdkI7TUErQlUsYUFBYTtNQUNiLGlCQUFpQjtNQUNqQix1QkFBdUI7TUFDdkIsbUJBQW1CLEVBQUE7RUFsQzdCO1FBb0NZLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgZGl2e1xyXG4gICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDEwJSAxNXB4IDA7XHJcbiAgICAgIGRpdntcclxuICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbWF0LWljb257XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4M0NEQUM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/landing-page/search/search.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/search/search.component.ts ***!
  \*********************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.country = [
            {
                name: 'Spain',
                cost: '850'
            },
            {
                name: 'France',
                cost: '900'
            },
            {
                name: 'Canada',
                cost: '1200'
            },
            {
                name: 'Netherlands',
                cost: '1150'
            }
        ];
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/landing-page/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/landing-page/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/table/table.component.html":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/table/table.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <h3>Next flight</h3>\n  <div class=\"table-columns table-header\">\n    <div>\n      Destination\n    </div>\n    <div>\n      Date\n    </div>\n    <div>\n      Time\n    </div>\n    <div>\n      Cost\n    </div>\n    <div>\n\n    </div>\n  </div>\n  <div class=\"table-columns table-data\" *ngFor=\"let item of schedule\">\n    <div>\n      {{ item.destination }}\n    </div>\n    <div>\n      {{ item.date }}\n    </div>\n    <div>\n      {{ item.time }}\n    </div>\n    <div>\n      {{ item.cost | currency}}\n    </div>\n    <div>\n      <button mat-raised-button>Buy ticket</button>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/landing-page/table/table.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/table/table.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  padding: 0 20%; }\n  section h3 {\n    font-weight: 300;\n    text-align: center;\n    font-size: 26px;\n    text-transform: uppercase; }\n  section .table-header {\n    border-bottom: 1px solid #8d8d8d; }\n  section .table-columns {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: center;\n    padding: 1.7% 0;\n    margin: 1% 0; }\n  section .table-columns div:first-child {\n      width: 20%;\n      display: flex;\n      align-items: center; }\n  section .table-columns div:nth-child(2) {\n      width: 20%;\n      display: flex;\n      align-items: center; }\n  section .table-columns div:nth-child(3) {\n      width: 20%;\n      display: flex;\n      align-items: center; }\n  section .table-columns div:nth-child(4) {\n      width: 20%;\n      display: flex;\n      align-items: center; }\n  section .table-columns div:nth-child(5) {\n      width: 10%; }\n  section .table-data {\n    border: 1px solid #eceff1;\n    border-radius: 4px;\n    box-shadow: 10px 10px 14px -4px rgba(0, 0, 0, 0);\n    transition: box-shadow 0.4s, border 0.3s, background-color 0.4s, -webkit-transform 0.4s;\n    transition: transform 0.4s, box-shadow 0.4s, border 0.3s, background-color 0.4s;\n    transition: transform 0.4s, box-shadow 0.4s, border 0.3s, background-color 0.4s, -webkit-transform 0.4s;\n    background-color: #fff; }\n  section .table-data:hover {\n      -webkit-transform: scale(1.02);\n              transform: scale(1.02);\n      transition: box-shadow 0.6s, border 0.4s, background-color 0.4s, -webkit-transform 0.6s;\n      transition: transform 0.6s, box-shadow 0.6s, border 0.4s, background-color 0.4s;\n      transition: transform 0.6s, box-shadow 0.6s, border 0.4s, background-color 0.4s, -webkit-transform 0.6s;\n      box-shadow: 10px 10px 14px -4px rgba(0, 0, 0, 0.65);\n      border: 1px solid #fff0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL3RhYmxlL0U6XFxGb3hcXFJlcG9zXFxnaXRcXGFyb3VuZHRoZXdvcmxkLmdpdGh1Yi5pby9zcmNcXGFwcFxcbGFuZGluZy1wYWdlXFx0YWJsZVxcdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixjQUFjLEVBQUE7RUFKaEI7SUFNSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUIsRUFBQTtFQVQ3QjtJQVlJLGdDQUFnQyxFQUFBO0VBWnBDO0lBZUksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFlBQVksRUFBQTtFQW5CaEI7TUFzQlEsVUFBVTtNQUNWLGFBQWE7TUFDYixtQkFBbUIsRUFBQTtFQXhCM0I7TUEyQlEsVUFBVTtNQUNWLGFBQWE7TUFDYixtQkFBbUIsRUFBQTtFQTdCM0I7TUFnQ1EsVUFBVTtNQUNWLGFBQWE7TUFDYixtQkFBbUIsRUFBQTtFQWxDM0I7TUFxQ1EsVUFBVTtNQUNWLGFBQWE7TUFDYixtQkFBbUIsRUFBQTtFQXZDM0I7TUEwQ1EsVUFBVSxFQUFBO0VBMUNsQjtJQStDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdEQUE2QztJQUM3Qyx1RkFBK0U7SUFBL0UsK0VBQStFO0lBQS9FLHVHQUErRTtJQUMvRSxzQkFBc0IsRUFBQTtFQW5EMUI7TUFzRE0sOEJBQXNCO2NBQXRCLHNCQUFzQjtNQUN0Qix1RkFBK0U7TUFBL0UsK0VBQStFO01BQS9FLHVHQUErRTtNQUMvRSxtREFBZ0Q7TUFDaEQsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLXBhZ2UvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAyMCU7XHJcbiAgaDN7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgLnRhYmxlLWhlYWRlcntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOGQ4ZDhkO1xyXG4gIH1cclxuICAudGFibGUtY29sdW1uc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEuNyUgMDtcclxuICAgIG1hcmdpbjogMSUgMDtcclxuICAgIGRpdntcclxuICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAmOm50aC1jaGlsZCgyKXtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAmOm50aC1jaGlsZCgzKXtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAmOm50aC1jaGlsZCg0KXtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAmOm50aC1jaGlsZCg1KXtcclxuICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50YWJsZS1kYXRhe1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VjZWZmMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxNHB4IC00cHggcmdiYSgwLDAsMCwwKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzLCBib3gtc2hhZG93IDAuNHMsIGJvcmRlciAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNHM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0E2RDVFRjtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMsIGJveC1zaGFkb3cgMC42cywgYm9yZGVyIDAuNHMsIGJhY2tncm91bmQtY29sb3IgMC40cztcclxuICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE0cHggLTRweCByZ2JhKDAsMCwwLDAuNjUpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/landing-page/table/table.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/landing-page/table/table.component.ts ***!
  \*******************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.schedule = [
            {
                destination: 'France',
                date: '07.06.2019',
                time: '20:00 MSK',
                cost: '900'
            },
            {
                destination: 'Spain',
                date: '06.07.2019',
                time: '23:00 MSK',
                cost: '850'
            },
            {
                destination: 'Canada',
                date: '07.06.2019',
                time: '09:00 MSK',
                cost: '1200'
            },
            {
                destination: 'Netherlands',
                date: '09.09.2019',
                time: '06:50 MSK',
                cost: '1150'
            }
        ];
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/landing-page/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/landing-page/table/table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div>\n    <a href=\"/\">\n      <mat-icon>location_on</mat-icon>\n      Around the World\n    </a>\n  </div>\n  <div>\n    <a *ngFor=\"let item of links; let i = index\" [routerLink]=\"item.router\">\n      {{ item.name }}\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  height: 38px; }\n  nav div:first-child {\n    width: 10%;\n    height: 100%;\n    padding: 0 10px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center; }\n  nav div:first-child a {\n      display: flex;\n      flex-flow: row nowrap;\n      align-items: center;\n      text-decoration: none;\n      color: #121212;\n      transition: color 0.6s; }\n  nav div:first-child a mat-icon {\n        padding: 0 2px; }\n  nav div:first-child a:hover {\n        color: #fff; }\n  nav div:last-child {\n    width: 90%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    flex-flow: row nowrap;\n    justify-content: center;\n    padding-right: 10%; }\n  nav div:last-child a {\n      text-decoration: none;\n      margin: 0 15px;\n      color: #121212;\n      transition: color 0.4s;\n      font-size: 18px;\n      font-weight: 500; }\n  nav div:last-child a:hover {\n        color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9FOlxcRm94XFxSZXBvc1xcZ2l0XFxhcm91bmR0aGV3b3JsZC5naXRodWIuaW8vc3JjXFxhcHBcXG5hdmlnYXRpb25cXG5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7RUFKZDtJQU9NLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CLEVBQUE7RUFaekI7TUFjUSxhQUFhO01BQ2IscUJBQXFCO01BQ3JCLG1CQUFtQjtNQUNuQixxQkFBcUI7TUFDckIsY0FBYztNQUNkLHNCQUFzQixFQUFBO0VBbkI5QjtRQXFCVSxjQUFjLEVBQUE7RUFyQnhCO1FBd0JVLFdBQVcsRUFBQTtFQXhCckI7SUE2Qk0sVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsa0JBQWtCLEVBQUE7RUFuQ3hCO01BcUNRLHFCQUFxQjtNQUNyQixjQUFjO01BQ2QsY0FBYztNQUNkLHNCQUFzQjtNQUN0QixlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7RUExQ3hCO1FBNENVLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMzhweDtcclxuICBkaXZ7XHJcbiAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICB3aWR0aDogMTAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBhe1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjMTIxMjEyOztcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjZzO1xyXG4gICAgICAgIG1hdC1pY29ue1xyXG4gICAgICAgICAgcGFkZGluZzogMCAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbiAgICAgIGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMTIxMjEyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNHM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.links = [
            {
                name: 'Home',
                router: ''
            },
            {
                name: 'Link 1'
            },
            {
                name: 'Link 2'
            },
            {
                name: 'About Us',
                router: '/about-us'
            }
        ];
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Fox\Repos\git\aroundtheworld.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
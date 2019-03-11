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
        this.title = 'amazing-angular-landing';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app',
            template: "<router-outlet></router-outlet>",
            styles: [""]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/index/index.component */ "./src/app/pages/index/index.component.ts");
/* harmony import */ var _layout_big_hero_big_hero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/big-hero/big-hero.component */ "./src/app/layout/big-hero/big-hero.component.ts");
/* harmony import */ var _layout_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/button/button.component */ "./src/app/layout/button/button.component.ts");
/* harmony import */ var _layout_textstyles_white_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/textstyles/white.directive */ "./src/app/layout/textstyles/white.directive.ts");
/* harmony import */ var _layout_textstyles_black_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/textstyles/black.directive */ "./src/app/layout/textstyles/black.directive.ts");
/* harmony import */ var _layout_textstyles_grey_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/textstyles/grey.directive */ "./src/app/layout/textstyles/grey.directive.ts");
/* harmony import */ var _layout_textstyles_italic_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/textstyles/italic.directive */ "./src/app/layout/textstyles/italic.directive.ts");
/* harmony import */ var _layout_legend_legend_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/legend/legend.component */ "./src/app/layout/legend/legend.component.ts");
/* harmony import */ var _layout_headline_headline_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/headline/headline.component */ "./src/app/layout/headline/headline.component.ts");
/* harmony import */ var _layout_subtitle_subtitle_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/subtitle/subtitle.component */ "./src/app/layout/subtitle/subtitle.component.ts");
/* harmony import */ var _layout_container_container_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/container/container.component */ "./src/app/layout/container/container.component.ts");
/* harmony import */ var _layout_content_section_content_section_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layout/content-section/content-section.component */ "./src/app/layout/content-section/content-section.component.ts");
/* harmony import */ var _layout_cards_cards_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layout/cards/cards.component */ "./src/app/layout/cards/cards.component.ts");
/* harmony import */ var _layout_card_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layout/card/card.component */ "./src/app/layout/card/card.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _layout_textstyles_without_space_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./layout/textstyles/without-space.directive */ "./src/app/layout/textstyles/without-space.directive.ts");
/* harmony import */ var _layout_client_client_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./layout/client/client.component */ "./src/app/layout/client/client.component.ts");
/* harmony import */ var _layout_clients_clients_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./layout/clients/clients.component */ "./src/app/layout/clients/clients.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./layout/menu/menu.component */ "./src/app/layout/menu/menu.component.ts");
/* harmony import */ var _layout_logo_logo_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./layout/logo/logo.component */ "./src/app/layout/logo/logo.component.ts");
/* harmony import */ var _layout_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./layout/menu-item/menu-item.component */ "./src/app/layout/menu-item/menu-item.component.ts");




























var routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"] },
    { path: '**', component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
                _pages_index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"],
                _layout_big_hero_big_hero_component__WEBPACK_IMPORTED_MODULE_7__["BigHeroComponent"],
                _layout_button_button_component__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"],
                _layout_textstyles_white_directive__WEBPACK_IMPORTED_MODULE_9__["WhiteDirective"],
                _layout_textstyles_black_directive__WEBPACK_IMPORTED_MODULE_10__["BlackDirective"],
                _layout_textstyles_grey_directive__WEBPACK_IMPORTED_MODULE_11__["GreyDirective"],
                _layout_textstyles_italic_directive__WEBPACK_IMPORTED_MODULE_12__["ItalicDirective"],
                _layout_legend_legend_component__WEBPACK_IMPORTED_MODULE_13__["LegendComponent"],
                _layout_headline_headline_component__WEBPACK_IMPORTED_MODULE_14__["HeadlineComponent"],
                _layout_subtitle_subtitle_component__WEBPACK_IMPORTED_MODULE_15__["SubtitleComponent"],
                _layout_container_container_component__WEBPACK_IMPORTED_MODULE_16__["ContainerComponent"],
                _layout_content_section_content_section_component__WEBPACK_IMPORTED_MODULE_17__["ContentSectionComponent"],
                _layout_cards_cards_component__WEBPACK_IMPORTED_MODULE_18__["CardsComponent"],
                _layout_card_card_component__WEBPACK_IMPORTED_MODULE_19__["CardComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
                _layout_textstyles_without_space_directive__WEBPACK_IMPORTED_MODULE_21__["WithoutSpaceDirective"],
                _layout_client_client_component__WEBPACK_IMPORTED_MODULE_22__["ClientComponent"],
                _layout_clients_clients_component__WEBPACK_IMPORTED_MODULE_23__["ClientsComponent"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"],
                _layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_25__["MenuComponent"],
                _layout_logo_logo_component__WEBPACK_IMPORTED_MODULE_26__["LogoComponent"],
                _layout_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_27__["MenuItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { enableTracing: true })
            ],
            providers: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layout/big-hero/big-hero.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/big-hero/big-hero.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"big-hero-div\">\r\n  <container>\r\n    <ng-content></ng-content>\r\n  </container>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/big-hero/big-hero.component.less":
/*!*********************************************************!*\
  !*** ./src/app/layout/big-hero/big-hero.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background: url(/assets/images/office.jpg) no-repeat 50%;\n  background-size: cover;\n  width: 100%;\n  height: 90vh;\n  display: block;\n}\n:host .big-hero-div {\n  width: 100%;\n  height: 90vh;\n  background-image: linear-gradient(133deg, rgba(26, 2, 42, 0.75), rgba(130, 0, 42, 0.6));\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2JpZy1oZXJvL0Q6L1Byb2plY3RzL2FtYXppbmctYW5ndWxhci1sYW5kaW5nL3NyYy9hcHAvbGF5b3V0L2JpZy1oZXJvL2JpZy1oZXJvLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvYmlnLWhlcm8vYmlnLWhlcm8uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3REFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0Y7QUROQTtFQU9JLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUZBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvYmlnLWhlcm8vYmlnLWhlcm8uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9vZmZpY2UuanBnKSBuby1yZXBlYXQgNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLmJpZy1oZXJvLWRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzNkZWcsIHJnYmEoMjYsMiw0MiwuNzUpLCByZ2JhKDEzMCwwLDQyLC42KSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn0iLCI6aG9zdCB7XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9vZmZpY2UuanBnKSBuby1yZXBlYXQgNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IC5iaWctaGVyby1kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTMzZGVnLCByZ2JhKDI2LCAyLCA0MiwgMC43NSksIHJnYmEoMTMwLCAwLCA0MiwgMC42KSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/big-hero/big-hero.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/big-hero/big-hero.component.ts ***!
  \*******************************************************/
/*! exports provided: BigHeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigHeroComponent", function() { return BigHeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BigHeroComponent = /** @class */ (function () {
    function BigHeroComponent() {
    }
    BigHeroComponent.prototype.ngOnInit = function () {
    };
    BigHeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'big-hero',
            template: __webpack_require__(/*! ./big-hero.component.html */ "./src/app/layout/big-hero/big-hero.component.html"),
            styles: [__webpack_require__(/*! ./big-hero.component.less */ "./src/app/layout/big-hero/big-hero.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BigHeroComponent);
    return BigHeroComponent;
}());



/***/ }),

/***/ "./src/app/layout/button/button.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/button/button.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span (mouseenter)=\"mouseenter() \"  (mouseleave)=\"mouseleave()\">\n  <ng-content></ng-content>\n</span>"

/***/ }),

/***/ "./src/app/layout/button/button.component.less":
/*!*****************************************************!*\
  !*** ./src/app/layout/button/button.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  line-height: 56px;\n  display: inline-block;\n}\n:host > span {\n  display: inline-block;\n  line-height: 56px;\n  text-transform: uppercase;\n  font-family: Montserrat, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\n  font-weight: 700;\n  font-size: 16px;\n  padding-right: 35px;\n  padding-left: 35px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2J1dHRvbi9EOi9Qcm9qZWN0cy9hbWF6aW5nLWFuZ3VsYXItbGFuZGluZy9zcmMvYXBwL2xheW91dC9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUNDRjtBREhBO0VBSUkscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgPiBzcGFuIHsgIFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogNTZweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICB9XG59IiwiOmhvc3Qge1xuICBsaW5lLWhlaWdodDogNTZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuOmhvc3QgPiBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogNTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/button/button.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/button/button.component.ts ***!
  \***************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonComponent = /** @class */ (function () {
    function ButtonComponent(el) {
        this.el = el;
        this.color = 'white';
        this.inverted_color = 'black';
    }
    ButtonComponent.prototype.ngOnInit = function () {
        this.el.nativeElement.style.border = "1px solid " + this.color;
        this.mouseleave();
    };
    ButtonComponent.prototype.mouseenter = function () {
        this.el.nativeElement.style.backgroundColor = this.color;
        this.el.nativeElement.style.color = this.inverted_color;
    };
    ButtonComponent.prototype.mouseleave = function () {
        this.el.nativeElement.style.backgroundColor = 'transparent';
        this.el.nativeElement.style.color = this.color;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "inverted_color", void 0);
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'btn',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/layout/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.less */ "./src/app/layout/button/button.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/layout/card/card.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/card/card.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"card-image\">\n    <img *ngIf=\"image\" src=\"{{image}}\" width=\"100%\">\n  </div>\n  <div class=\"card-info\">\n    <subtitle without_space>\n      {{subtitle}}\n    </subtitle>\n    <legend without_space>\n      {{legend}}\n    </legend>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/card/card.component.less":
/*!*************************************************!*\
  !*** ./src/app/layout/card/card.component.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  display: block;\n}\n:host > div {\n  border-radius: 0 0 2px 2px;\n  margin-bottom: 70px;\n  text-align: left;\n  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.05), 0 2px 7px 0 rgba(72, 22, 65, 0.05);\n  transition: box-shadow 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;\n  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n  background-color: white;\n}\n:host > div:hover {\n  -webkit-transform: translateY(-12px);\n          transform: translateY(-12px);\n  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05), 0 10px 20px 0 rgba(72, 22, 65, 0.05);\n}\n:host > div .card-info {\n  padding: 20px;\n}\n:host > div .card-image {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NhcmQvRDovUHJvamVjdHMvYW1hemluZy1hbmd1bGFyLWxhbmRpbmcvc3JjL2FwcC9sYXlvdXQvY2FyZC9jYXJkLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvY2FyZC9jYXJkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUNDRjtBREhBO0VBSUksMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsK0VBQUE7RUFDQSwyRUFBQTtFQUFBLG1FQUFBO0VBQUEsdUdBQUE7RUFDQSx1QkFBQTtBQ0NKO0FEQUk7RUFDRSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsbUZBQUE7QUNFTjtBRGZBO0VBZ0JNLGFBQUE7QUNFTjtBRGxCQTtFQW1CTSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VOIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NhcmQvY2FyZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICA+IGRpdiB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDJweCAycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDdweCAwIHJnYmEoMCwwLDAsLjA1KSwgMCAycHggN3B4IDAgcmdiYSg3MiwyMiw2NSwuMDUpO1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjJzIGVhc2UtaW4tb3V0LHRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpO1xuICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggMCByZ2JhKDAsMCwwLC4wNSksIDAgMTBweCAyMHB4IDAgcmdiYSg3MiwyMiw2NSwuMDUpO1xuICAgIH1cbiAgICAuY2FyZC1pbmZvIHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICAgIC5jYXJkLWltYWdlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICB9XG59IiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCA+IGRpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAycHggMnB4O1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3gtc2hhZG93OiAwIDJweCA3cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDJweCA3cHggMCByZ2JhKDcyLCAyMiwgNjUsIDAuMDUpO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0ID4gZGl2OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMnB4KTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDEwcHggMjBweCAwIHJnYmEoNzIsIDIyLCA2NSwgMC4wNSk7XG59XG46aG9zdCA+IGRpdiAuY2FyZC1pbmZvIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbjpob3N0ID4gZGl2IC5jYXJkLWltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/card/card.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/card/card.component.ts ***!
  \***********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.subtitle = '';
        this.legend = '';
        this.image = '';
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "subtitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "legend", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "image", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/layout/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.less */ "./src/app/layout/card/card.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/layout/cards/cards.component.html":
/*!***************************************************!*\
  !*** ./src/app/layout/cards/cards.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/layout/cards/cards.component.less":
/*!***************************************************!*\
  !*** ./src/app/layout/cards/cards.component.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n}\n:host > a {\n  width: 30%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NhcmRzL0Q6L1Byb2plY3RzL2FtYXppbmctYW5ndWxhci1sYW5kaW5nL3NyYy9hcHAvbGF5b3V0L2NhcmRzL2NhcmRzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvY2FyZHMvY2FyZHMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNDSjtBRExBO0VBTVEsVUFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NhcmRzL2NhcmRzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgPiBhIHtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICB9XG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuOmhvc3QgPiBhIHtcbiAgd2lkdGg6IDMwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/cards/cards.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/cards/cards.component.ts ***!
  \*************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    CardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cards',
            template: __webpack_require__(/*! ./cards.component.html */ "./src/app/layout/cards/cards.component.html"),
            styles: [__webpack_require__(/*! ./cards.component.less */ "./src/app/layout/cards/cards.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/layout/client/client.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/client/client.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"{{image}}\">"

/***/ }),

/***/ "./src/app/layout/client/client.component.less":
/*!*****************************************************!*\
  !*** ./src/app/layout/client/client.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  box-sizing: border-box;\n  height: 140px;\n}\n@media all and (min-width: 769px) {\n  :host {\n    width: 25%;\n  }\n}\n:host img {\n  max-width: 140px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NsaWVudC9EOi9Qcm9qZWN0cy9hbWF6aW5nLWFuZ3VsYXItbGFuZGluZy9zcmMvYXBwL2xheW91dC9jbGllbnQvY2xpZW50LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvY2xpZW50L2NsaWVudC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBSUEsYUFBQTtBQ0ZGO0FEREU7RUFBQTtJQUNFLFVBQUE7RUNJRjtBQUNGO0FEWkE7RUFXSSxnQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NsaWVudC9jbGllbnQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNTAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOjc2OXB4KSB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuICBoZWlnaHQ6IDE0MHB4O1xuICBpbWcge1xuICAgIG1heC13aWR0aDogMTQwcHg7XG4gIH1cbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNTAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDE0MHB4O1xufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgOmhvc3Qge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbn1cbjpob3N0IGltZyB7XG4gIG1heC13aWR0aDogMTQwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/client/client.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/client/client.component.ts ***!
  \***************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClientComponent = /** @class */ (function () {
    function ClientComponent() {
        this.image = '';
    }
    ClientComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ClientComponent.prototype, "image", void 0);
    ClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/layout/client/client.component.html"),
            styles: [__webpack_require__(/*! ./client.component.less */ "./src/app/layout/client/client.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/layout/clients/clients.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/clients/clients.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/layout/clients/clients.component.less":
/*!*******************************************************!*\
  !*** ./src/app/layout/clients/clients.component.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NsaWVudHMvRDovUHJvamVjdHMvYW1hemluZy1hbmd1bGFyLWxhbmRpbmcvc3JjL2FwcC9sYXlvdXQvY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/clients/clients.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/clients/clients.component.ts ***!
  \*****************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClientsComponent = /** @class */ (function () {
    function ClientsComponent() {
    }
    ClientsComponent.prototype.ngOnInit = function () {
    };
    ClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/layout/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.less */ "./src/app/layout/clients/clients.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/layout/container/container.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/container/container.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/layout/container/container.component.less":
/*!***********************************************************!*\
  !*** ./src/app/layout/container/container.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  max-width: 1244px;\n  margin: 0 auto;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbnRhaW5lci9EOi9Qcm9qZWN0cy9hbWF6aW5nLWFuZ3VsYXItbGFuZGluZy9zcmMvYXBwL2xheW91dC9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEyNDRweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEyNDRweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/container/container.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/container/container.component.ts ***!
  \*********************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
    }
    ContainerComponent.prototype.ngOnInit = function () {
    };
    ContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'container',
            template: __webpack_require__(/*! ./container.component.html */ "./src/app/layout/container/container.component.html"),
            styles: [__webpack_require__(/*! ./container.component.less */ "./src/app/layout/container/container.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/layout/content-section/content-section.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/content-section/content-section.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <container>\n    <ng-content></ng-content>\n  </container>\n</div>"

/***/ }),

/***/ "./src/app/layout/content-section/content-section.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/layout/content-section/content-section.component.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: bottom;\n}\n:host > div {\n  padding: 100px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbnRlbnQtc2VjdGlvbi9EOi9Qcm9qZWN0cy9hbWF6aW5nLWFuZ3VsYXItbGFuZGluZy9zcmMvYXBwL2xheW91dC9jb250ZW50LXNlY3Rpb24vY29udGVudC1zZWN0aW9uLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvY29udGVudC1zZWN0aW9uL2NvbnRlbnQtc2VjdGlvbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNDRjtBRExBO0VBTUksZ0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb250ZW50LXNlY3Rpb24vY29udGVudC1zZWN0aW9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICA+IGRpdiB7XG4gICAgcGFkZGluZzogMTAwcHggMDtcbiAgfVxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbn1cbjpob3N0ID4gZGl2IHtcbiAgcGFkZGluZzogMTAwcHggMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/content-section/content-section.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/content-section/content-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContentSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSectionComponent", function() { return ContentSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentSectionComponent = /** @class */ (function () {
    function ContentSectionComponent(el) {
        this.el = el;
    }
    ContentSectionComponent.prototype.ngOnInit = function () {
        console.log('image', this.image);
        if (this.image != '')
            this.el.nativeElement.style.backgroundImage = "url(" + this.image + ")";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ContentSectionComponent.prototype, "image", void 0);
    ContentSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'content-section',
            template: __webpack_require__(/*! ./content-section.component.html */ "./src/app/layout/content-section/content-section.component.html"),
            styles: [__webpack_require__(/*! ./content-section.component.less */ "./src/app/layout/content-section/content-section.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ContentSectionComponent);
    return ContentSectionComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<container>\n  <ng-content></ng-content>\n</container>"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.less":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding-top: 50px;\n  padding-bottom: 50px;\n  background-color: #333;\n  color: white;\n  display: block;\n}\n:host ::ng-deep container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9EOi9Qcm9qZWN0cy9hbWF6aW5nLWFuZ3VsYXItbGFuZGluZy9zcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0Y7QUROQTtFQU9JLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICA6Om5nLWRlZXAgY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG59IiwiOmhvc3Qge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCA6Om5nLWRlZXAgY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.less */ "./src/app/layout/footer/footer.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" {{ flying ? 'flying' : 'not-flying' }} \">\n  <container>\n    <ng-content></ng-content>\n  </container>\n</div>"

/***/ }),

/***/ "./src/app/layout/header/header.component.less":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  box-sizing: border-box;\n  z-index: 100;\n  color: hsla(0, 0%, 100%, 0.4);\n}\n:host ::ng-deep menu-item:hover {\n  color: white;\n}\n:host .flying {\n  background-color: white;\n  border-bottom: 1px solid hsla(0, 0%, 76.9%, 0.5);\n  color: #454545;\n}\n:host .flying ::ng-deep menu-item:hover {\n  color: black;\n  color: #000;\n}\n:host container {\n  height: 60px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n:host menu > menu-item {\n  opacity: 0.5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9EOi9Qcm9qZWN0cy9hbWF6aW5nLWFuZ3VsYXItbGFuZGluZy9zcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ0NGO0FEUkE7RUFTSSxZQUFBO0FDRUo7QURYQTtFQWFJLHVCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxjQUFBO0FDQ0o7QURoQkE7RUFpQk0sWUFBQTtFQUNBLFdBQUE7QUNFTjtBRHBCQTtFQXVCSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNBSjtBRDFCQTtFQThCSSxZQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgei1pbmRleDogMTAwO1xuICBjb2xvcjogaHNsYSgwLDAlLDEwMCUsLjQpO1xuICA6Om5nLWRlZXAgbWVudS1pdGVtOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuZmx5aW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsYSgwLDAlLDc2LjklLC41KTtcbiAgICBjb2xvcjogIzQ1NDU0NTtcbiAgICA6Om5nLWRlZXAgbWVudS1pdGVtOmhvdmVyIHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbiAgfVxuXG4gIGNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICBtZW51ID4gbWVudS1pdGVtIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgXG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB6LWluZGV4OiAxMDA7XG4gIGNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjQpO1xufVxuOmhvc3QgOjpuZy1kZWVwIG1lbnUtaXRlbTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0IC5mbHlpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhzbGEoMCwgMCUsIDc2LjklLCAwLjUpO1xuICBjb2xvcjogIzQ1NDU0NTtcbn1cbjpob3N0IC5mbHlpbmcgOjpuZy1kZWVwIG1lbnUtaXRlbTpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgY29sb3I6ICMwMDA7XG59XG46aG9zdCBjb250YWluZXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IG1lbnUgPiBtZW51LWl0ZW0ge1xuICBvcGFjaXR5OiAwLjU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(el) {
        this.el = el;
        this.flying = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.doSomething = function (event) {
        if (window.pageYOffset > 80) {
            this.flying = true;
        }
        else {
            this.flying = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HeaderComponent.prototype, "doSomething", null);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.less */ "./src/app/layout/header/header.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/headline/headline.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/headline/headline.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  <ng-content></ng-content>\n</h1>"

/***/ }),

/***/ "./src/app/layout/headline/headline.component.less":
/*!*********************************************************!*\
  !*** ./src/app/layout/headline/headline.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n:host h1 {\n  font-family: Montserrat, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\n  letter-spacing: 0;\n  text-transform: none;\n  line-height: 1.33;\n  font-weight: 700;\n  font-size: 32px;\n}\n@media all and (min-width: 769px) {\n  :host h1 {\n    font-size: 40px;\n  }\n}\n@media all and (min-width: 1024px) {\n  :host h1 {\n    font-size: 50px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRsaW5lL0Q6L1Byb2plY3RzL2FtYXppbmctYW5ndWxhci1sYW5kaW5nL3NyYy9hcHAvbGF5b3V0L2hlYWRsaW5lL2hlYWRsaW5lLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvaGVhZGxpbmUvaGVhZGxpbmUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FESkE7RUFLSSw2RUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0VKO0FEREk7RUFBQTtJQUNFLGVBQUE7RUNJSjtBQUNGO0FESEk7RUFBQTtJQUNFLGVBQUE7RUNNSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRsaW5lL2hlYWRsaW5lLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LEhlbHZldGljYSBOZXVlLEhlbHZldGljYSxSb2JvdG8sQXJpYWwsc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBsaW5lLWhlaWdodDogMS4zMztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgIH1cbiAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICB9XG4gIH1cbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuOmhvc3QgaDEge1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsaW5lLWhlaWdodDogMS4zMztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgOmhvc3QgaDEge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIDpob3N0IGgxIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/headline/headline.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/headline/headline.component.ts ***!
  \*******************************************************/
/*! exports provided: HeadlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadlineComponent", function() { return HeadlineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeadlineComponent = /** @class */ (function () {
    function HeadlineComponent() {
    }
    HeadlineComponent.prototype.ngOnInit = function () {
    };
    HeadlineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'headline',
            template: __webpack_require__(/*! ./headline.component.html */ "./src/app/layout/headline/headline.component.html"),
            styles: [__webpack_require__(/*! ./headline.component.less */ "./src/app/layout/headline/headline.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeadlineComponent);
    return HeadlineComponent;
}());



/***/ }),

/***/ "./src/app/layout/legend/legend.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/legend/legend.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n  <ng-content></ng-content>\n</h2>"

/***/ }),

/***/ "./src/app/layout/legend/legend.component.less":
/*!*****************************************************!*\
  !*** ./src/app/layout/legend/legend.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n:host h2 {\n  font-family: \"Droid Serif\", Palatino Linotype, Book Antiqua, Palatino, FreeSerif, serif;\n  font-size: 18px;\n  font-weight: 400;\n  text-transform: none;\n  line-height: 1.75;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xlZ2VuZC9EOi9Qcm9qZWN0cy9hbWF6aW5nLWFuZ3VsYXItbGFuZGluZy9zcmMvYXBwL2xheW91dC9sZWdlbmQvbGVnZW5kLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvbGVnZW5kL2xlZ2VuZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURKQTtFQUtJLHVGQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2xlZ2VuZC9sZWdlbmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiRHJvaWQgU2VyaWZcIixQYWxhdGlubyBMaW5vdHlwZSxCb29rIEFudGlxdWEsUGFsYXRpbm8sRnJlZVNlcmlmLHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICB9XG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbjpob3N0IGgyIHtcbiAgZm9udC1mYW1pbHk6IFwiRHJvaWQgU2VyaWZcIiwgUGFsYXRpbm8gTGlub3R5cGUsIEJvb2sgQW50aXF1YSwgUGFsYXRpbm8sIEZyZWVTZXJpZiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/legend/legend.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/legend/legend.component.ts ***!
  \***************************************************/
/*! exports provided: LegendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegendComponent", function() { return LegendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LegendComponent = /** @class */ (function () {
    function LegendComponent() {
    }
    LegendComponent.prototype.ngOnInit = function () {
    };
    LegendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'legend',
            template: __webpack_require__(/*! ./legend.component.html */ "./src/app/layout/legend/legend.component.html"),
            styles: [__webpack_require__(/*! ./legend.component.less */ "./src/app/layout/legend/legend.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LegendComponent);
    return LegendComponent;
}());



/***/ }),

/***/ "./src/app/layout/logo/logo.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/logo/logo.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <img src=\"/assets/images/logo.png\" width=\"80\"> -->\r\n<subtitle>Your logo goes here</subtitle>"

/***/ }),

/***/ "./src/app/layout/logo/logo.component.less":
/*!*************************************************!*\
  !*** ./src/app/layout/logo/logo.component.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n:host img {\n  flex-grow: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xvZ28vRDovUHJvamVjdHMvYW1hemluZy1hbmd1bGFyLWxhbmRpbmcvc3JjL2FwcC9sYXlvdXQvbG9nby9sb2dvLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvbG9nby9sb2dvLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREpBO0VBS0ksWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2xvZ28vbG9nby5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGltZyB7XG4gICAgZmxleC1ncm93OiAwO1xuICB9XG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IGltZyB7XG4gIGZsZXgtZ3JvdzogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/logo/logo.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/logo/logo.component.ts ***!
  \***********************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'logo',
            template: __webpack_require__(/*! ./logo.component.html */ "./src/app/layout/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.less */ "./src/app/layout/logo/logo.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/layout/menu-item/menu-item.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/menu-item/menu-item.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"{{go_to}}\">\r\n  <ng-content></ng-content>\r\n</a>"

/***/ }),

/***/ "./src/app/layout/menu-item/menu-item.component.less":
/*!***********************************************************!*\
  !*** ./src/app/layout/menu-item/menu-item.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  font-family: Montserrat, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\n  font-size: 13px;\n  align-items: center;\n  margin: 0px 20px;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n:host a {\n  color: inherit;\n  text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21lbnUtaXRlbS9EOi9Qcm9qZWN0cy9hbWF6aW5nLWFuZ3VsYXItbGFuZGluZy9zcmMvYXBwL2xheW91dC9tZW51LWl0ZW0vbWVudS1pdGVtLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvbWVudS1pdGVtL21lbnUtaXRlbS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw2RUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0NGO0FEUkE7RUFTSSxjQUFBO0VBQ0EscUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tZW51LWl0ZW0vbWVudS1pdGVtLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxIZWx2ZXRpY2EgTmV1ZSxIZWx2ZXRpY2EsUm9ib3RvLEFyaWFsLHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHggMjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDBweCAyMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuOmhvc3QgYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/menu-item/menu-item.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/menu-item/menu-item.component.ts ***!
  \*********************************************************/
/*! exports provided: MenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function() { return MenuItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuItemComponent = /** @class */ (function () {
    function MenuItemComponent() {
        this.go_to = '';
    }
    MenuItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MenuItemComponent.prototype, "go_to", void 0);
    MenuItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'menu-item',
            template: __webpack_require__(/*! ./menu-item.component.html */ "./src/app/layout/menu-item/menu-item.component.html"),
            styles: [__webpack_require__(/*! ./menu-item.component.less */ "./src/app/layout/menu-item/menu-item.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuItemComponent);
    return MenuItemComponent;
}());



/***/ }),

/***/ "./src/app/layout/menu/menu.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/menu/menu.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<menu-item>Menu</menu-item>\r\n<menu-item>Menu</menu-item>\r\n<menu-item>Menu</menu-item>\r\n<menu-item>Menu</menu-item>\r\n<menu-item>Menu</menu-item>"

/***/ }),

/***/ "./src/app/layout/menu/menu.component.less":
/*!*************************************************!*\
  !*** ./src/app/layout/menu/menu.component.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: row;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21lbnUvRDovUHJvamVjdHMvYW1hemluZy1hbmd1bGFyLWxhbmRpbmcvc3JjL2FwcC9sYXlvdXQvbWVudS9tZW51LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvbWVudS9tZW51LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbWVudS9tZW51LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/menu/menu.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/layout/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.less */ "./src/app/layout/menu/menu.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/layout/subtitle/subtitle.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/subtitle/subtitle.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\n  <ng-content></ng-content>\n</h3>"

/***/ }),

/***/ "./src/app/layout/subtitle/subtitle.component.less":
/*!*********************************************************!*\
  !*** ./src/app/layout/subtitle/subtitle.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n:host h3 {\n  font-family: Montserrat, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\n  font-weight: 700;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  display: block;\n  font-size: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3N1YnRpdGxlL0Q6L1Byb2plY3RzL2FtYXppbmctYW5ndWxhci1sYW5kaW5nL3NyYy9hcHAvbGF5b3V0L3N1YnRpdGxlL3N1YnRpdGxlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvc3VidGl0bGUvc3VidGl0bGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FESkE7RUFLSSw2RUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc3VidGl0bGUvc3VidGl0bGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBoMyB7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLFJvYm90byxBcmlhbCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbjpob3N0IGgzIHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/subtitle/subtitle.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/subtitle/subtitle.component.ts ***!
  \*******************************************************/
/*! exports provided: SubtitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtitleComponent", function() { return SubtitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SubtitleComponent = /** @class */ (function () {
    function SubtitleComponent() {
    }
    SubtitleComponent.prototype.ngOnInit = function () {
    };
    SubtitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'subtitle',
            template: __webpack_require__(/*! ./subtitle.component.html */ "./src/app/layout/subtitle/subtitle.component.html"),
            styles: [__webpack_require__(/*! ./subtitle.component.less */ "./src/app/layout/subtitle/subtitle.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubtitleComponent);
    return SubtitleComponent;
}());



/***/ }),

/***/ "./src/app/layout/textstyles/black.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/textstyles/black.directive.ts ***!
  \******************************************************/
/*! exports provided: BlackDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlackDirective", function() { return BlackDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlackDirective = /** @class */ (function () {
    function BlackDirective(el) {
        this.el = el;
        this.el.nativeElement.style.color = '#4c3d54';
    }
    BlackDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[black]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], BlackDirective);
    return BlackDirective;
}());



/***/ }),

/***/ "./src/app/layout/textstyles/grey.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/textstyles/grey.directive.ts ***!
  \*****************************************************/
/*! exports provided: GreyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreyDirective", function() { return GreyDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GreyDirective = /** @class */ (function () {
    function GreyDirective(el) {
        this.el = el;
        this.el.nativeElement.style.color = 'grey';
    }
    GreyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[grey]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], GreyDirective);
    return GreyDirective;
}());



/***/ }),

/***/ "./src/app/layout/textstyles/italic.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/textstyles/italic.directive.ts ***!
  \*******************************************************/
/*! exports provided: ItalicDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItalicDirective", function() { return ItalicDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ItalicDirective = /** @class */ (function () {
    function ItalicDirective(el) {
        this.el = el;
        this.el.nativeElement.style.fontStyle = 'italic';
    }
    ItalicDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[italic]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ItalicDirective);
    return ItalicDirective;
}());



/***/ }),

/***/ "./src/app/layout/textstyles/white.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/textstyles/white.directive.ts ***!
  \******************************************************/
/*! exports provided: WhiteDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteDirective", function() { return WhiteDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WhiteDirective = /** @class */ (function () {
    function WhiteDirective(el) {
        this.el = el;
        this.el.nativeElement.style.color = 'white';
    }
    WhiteDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[white]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], WhiteDirective);
    return WhiteDirective;
}());



/***/ }),

/***/ "./src/app/layout/textstyles/without-space.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/textstyles/without-space.directive.ts ***!
  \**************************************************************/
/*! exports provided: WithoutSpaceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithoutSpaceDirective", function() { return WithoutSpaceDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WithoutSpaceDirective = /** @class */ (function () {
    function WithoutSpaceDirective(el) {
        this.el = el;
        this.el.nativeElement.style.marginTop = '0px';
        this.el.nativeElement.style.marginBottom = '0px';
    }
    WithoutSpaceDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[without_space]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], WithoutSpaceDirective);
    return WithoutSpaceDirective;
}());



/***/ }),

/***/ "./src/app/pages/index/index.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'index',
            template: "\n    <header>\n      <logo></logo>\n      <menu></menu>\n    </header>\n\n    <big-hero>\n      <headline white>We\u2019re an App Design & Development Team</headline>\n      <legend grey italic>Experts in mobile & web technologies. We create beautiful, functional mobile apps and websites.</legend>\n      <btn>Click me</btn>\n    </big-hero>\n\n    <content-section>\n      <headline black>Trusted by clients across 8 countries</headline>\n      <clients>\n        <client image=\"/assets/images/client.png\"></client>\n        <client image=\"/assets/images/client.png\"></client>\n        <client image=\"/assets/images/client.png\"></client>\n        <client image=\"/assets/images/client.png\"></client>\n        <client image=\"/assets/images/client.png\"></client>\n        <client image=\"/assets/images/client.png\"></client>\n        <client image=\"/assets/images/client.png\"></client>\n        <client image=\"/assets/images/client.png\"></client>\n        <client image=\"/assets/images/client.png\"></client>\n        <client image=\"/assets/images/client.png\"></client>\n        <client image=\"/assets/images/client.png\"></client>\n        <client image=\"/assets/images/client.png\"></client>\n      </clients>\n    </content-section>\n\n    <content-section [image]=\"'./assets/images/content-section2.jpg'\">\n      <headline white>Let\u2019s Build A Better Product Together</headline>\n      <legend white italic>Our team of experienced designers and engineers have partnered with several startups and businesses. For over 10 years, we\u2019ve shipped software and continuously evolved our skills to meet the needs of our partners. From open-source to licensed enterprise tools, we stay sharp.</legend>\n      <btn>Click me</btn>\n      <subtitle white>Our students come from the smartest companies</subtitle>\n    </content-section>\n\n    <content-section>\n      <headline black>Let\u2019s Build A Better Product Together</headline>\n      <legend black italic>Our team of experienced designers and engineers have partnered with several startups and businesses. For over 10 years, we\u2019ve shipped software and continuously evolved our skills to meet the needs of our partners. From open-source to licensed enterprise tools, we stay sharp.</legend>\n      <br/>\n      <br/>\n      <br/>\n      <cards>\n        <a><card image=\"/assets/images/card.jpg\" legend=\"Brazil\" subtitle=\"Brasil\"></card></a>\n        <a><card image=\"/assets/images/card.jpg\" legend=\"Brazil\" subtitle=\"Brasil\"></card></a>\n        <a><card image=\"/assets/images/card.jpg\" legend=\"Brazil\" subtitle=\"Brasil\"></card></a>\n        <a><card image=\"/assets/images/card.jpg\" legend=\"Brazil\" subtitle=\"Brasil\"></card></a>\n        <a><card image=\"/assets/images/card.jpg\" legend=\"Brazil\" subtitle=\"Brasil\"></card></a>\n        <a><card image=\"/assets/images/card.jpg\" legend=\"Brazil\" subtitle=\"Brasil\"></card></a>\n      </cards>\n      <btn color='#e73536' inverted_color='#fff'>See other projects</btn>\n    </content-section>\n\n    <footer>\n      <logo></logo>\n      <subtitle>Oliver Longhi 2019</subtitle>\n    </footer>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'not-found',
            template: "\n    <p>\n      not-found works!\n    </p>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
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

module.exports = __webpack_require__(/*! D:\Projects\amazing-angular-landing\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
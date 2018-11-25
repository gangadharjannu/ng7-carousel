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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-carousel autoplay=\"true\" interval=\"5000\" disable-mobile-pagination=\"true\">\n  <div #carouselItem class=\"carousel-item\">\n    <img src=\"../assets/carousel/home1.jpg\" alt=\"home1\" />\n  </div>\n  <div #carouselItem class=\"carousel-item\">\n    <img src=\"../assets/carousel/home2.jpg\" alt=\"home2\" />\n  </div>\n  <div #carouselItem class=\"carousel-item\">\n    <img src=\"../assets/carousel/home3.jpg\" alt=\"home3\" />\n  </div>\n  <div #carouselItem class=\"carousel-item\">\n    <img src=\"../assets/carousel/home4.jpg\" alt=\"home4\" />\n  </div>\n</app-carousel>\nThis is another content\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng7-carousel';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel\">\n  <div class=\"carousel-content\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"carousel-arrow-left\">\n    <a class=\"arrow left\" (click)=\"prevItem()\"></a>\n  </div>\n  <div class=\"carousel-arrow-right\">\n    <a class=\"arrow right\" (click)=\"nextItem()\"></a>\n  </div>\n  <div class=\"carrousel-pagination-content\">\n    <a *ngFor=\"let item of paginationItems\" [class.active]=\"item.active\" (click)=\"moveItem(item.idx)\"></a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/carousel/carousel.component.scss":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel {\n  width: 100%;\n  height: 500px;\n  max-width: 1000px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding: 5px;\n  position: relative;\n  box-sizing: border-box;\n  margin: 0 auto;\n  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2); }\n  .carousel .carousel-content {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    overflow: hidden;\n    background: white; }\n  :host ::ng-deep .carousel-item {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  opacity: 0; }\n  :host ::ng-deep .carousel-item img {\n    width: 100%;\n    height: 100%; }\n  .carousel-arrow-left,\n.carousel-arrow-right {\n  height: 50px;\n  width: 50px;\n  position: absolute;\n  z-index: 9999;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n  .carousel-arrow-left {\n  left: 0; }\n  .carousel-arrow-right {\n  right: 0; }\n  .carousel-arrow-left:hover,\n.carousel-arrow-right:hover {\n  background: rgba(0, 0, 0, 0.5);\n  cursor: pointer; }\n  a.arrow {\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  height: 10px;\n  width: 10px;\n  display: inline-block;\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n  a.arrow.left {\n    transform: rotate(135deg);\n    -webkit-transform: rotate(135deg); }\n  a.arrow.right {\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg); }\n  .carrousel-pagination-content {\n  position: absolute;\n  bottom: 0;\n  z-index: 9999;\n  height: 50px;\n  width: 100%;\n  text-align: center;\n  line-height: 50px; }\n  .carrousel-pagination-content a {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    margin: 5px;\n    cursor: pointer;\n    background: white; }\n  .carrousel-pagination-content a:hover, .carrousel-pagination-content a.active {\n      background: rgba(0, 0, 0, 0.2); }\n  :host ::ng-deep .moveRightCurrent {\n  -webkit-animation-name: moveRightCurrent;\n          animation-name: moveRightCurrent;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n  :host ::ng-deep .moveRightPrev {\n  -webkit-animation-name: moveRightPrev;\n          animation-name: moveRightPrev;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n  :host ::ng-deep .moveLeftCurrent {\n  -webkit-animation-name: moveLeftCurrent;\n          animation-name: moveLeftCurrent;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n  :host ::ng-deep .moveLeftNext {\n  -webkit-animation-name: moveLeftNext;\n          animation-name: moveLeftNext;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n  @-webkit-keyframes moveLeftCurrent {\n  from {\n    margin-left: 0;\n    opacity: 1; }\n  to {\n    margin-left: -100%;\n    opacity: 1; } }\n  @keyframes moveLeftCurrent {\n  from {\n    margin-left: 0;\n    opacity: 1; }\n  to {\n    margin-left: -100%;\n    opacity: 1; } }\n  @-webkit-keyframes moveLeftNext {\n  from {\n    margin-left: 100%;\n    opacity: 1; }\n  to {\n    margin-left: 0%;\n    opacity: 1; } }\n  @keyframes moveLeftNext {\n  from {\n    margin-left: 100%;\n    opacity: 1; }\n  to {\n    margin-left: 0%;\n    opacity: 1; } }\n  @-webkit-keyframes moveRightCurrent {\n  from {\n    margin-left: 0;\n    opacity: 1; }\n  to {\n    margin-left: 100%;\n    opacity: 1; } }\n  @keyframes moveRightCurrent {\n  from {\n    margin-left: 0;\n    opacity: 1; }\n  to {\n    margin-left: 100%;\n    opacity: 1; } }\n  @-webkit-keyframes moveRightPrev {\n  from {\n    margin-left: -100%;\n    opacity: 1; }\n  to {\n    margin-left: 0%;\n    opacity: 1; } }\n  @keyframes moveRightPrev {\n  from {\n    margin-left: -100%;\n    opacity: 1; }\n  to {\n    margin-left: 0%;\n    opacity: 1; } }\n  @media only screen and (max-width: 767px) {\n  .carousel {\n    height: 300px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ydW4vbWVkaWEveXZzL0Rldi9GL290aGVycy9FeGVyY2lzZXMvYW5ndWxhci9uZzctY2Fyb3VzZWwvc3JjL2FwcC9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLFlBQVc7RUFDWCxjQUFhO0VBQ2Isa0JBQWlCO0VBQ2pCLDBCQUFpQjtLQUFqQix1QkFBaUI7TUFBakIsc0JBQWlCO1VBQWpCLGtCQUFpQjtFQUNqQixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QixlQUFjO0VBQ2QsMkNBWnNDLEVBb0J2QztFQWpCRDtJQVdJLFlBQVc7SUFDWCxhQUFZO0lBQ1osbUJBQWtCO0lBQ2xCLGlCQUFnQjtJQUNoQixrQkFqQnNCLEVBa0J2QjtFQUdIO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsV0FBVSxFQUtYO0VBVEQ7SUFNSSxZQUFXO0lBQ1gsYUFBWSxFQUNiO0VBR0g7O0VBRUUsYUFBWTtFQUNaLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLFNBQVE7RUFDUixvQ0FBMkI7VUFBM0IsNEJBQTJCLEVBQzVCO0VBQ0Q7RUFDRSxRQUFPLEVBQ1I7RUFDRDtFQUNFLFNBQVEsRUFDVDtFQUNEOztFQUVFLCtCQW5EcUM7RUFvRHJDLGdCQUFlLEVBQ2hCO0VBQ0Q7RUFDRSxvQkFyRHdCO0VBc0R4QiwwQkFBeUI7RUFDekIsYUFBWTtFQUNaLFlBQVc7RUFDWCxzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixRQUFPO0VBQ1AsU0FBUTtFQUNSLE9BQU07RUFDTixVQUFTLEVBU1Y7RUFwQkQ7SUFhSSwwQkFBeUI7SUFDekIsa0NBQWlDLEVBQ2xDO0VBZkg7SUFpQkksMEJBQXlCO0lBQ3pCLGtDQUFpQyxFQUNsQztFQUdIO0VBQ0UsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxjQUFhO0VBQ2IsYUFBWTtFQUNaLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsa0JBQWlCLEVBY2xCO0VBckJEO0lBU0ksc0JBQXFCO0lBQ3JCLFlBQVc7SUFDWCxhQUFZO0lBQ1osbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxnQkFBZTtJQUNmLGtCQXpGc0IsRUE4RnZCO0VBcEJIO01Ba0JNLCtCQTdGa0MsRUE4Rm5DO0VBSUw7RUFDRSx5Q0FBZ0M7VUFBaEMsaUNBQWdDO0VBQ2hDLGlDQUF3QjtVQUF4Qix5QkFBd0I7RUFDeEIsMENBQWlDO1VBQWpDLGtDQUFpQztFQUNqQyxzQ0FBNkI7VUFBN0IsOEJBQTZCLEVBQzlCO0VBQ0Q7RUFDRSxzQ0FBNkI7VUFBN0IsOEJBQTZCO0VBQzdCLGlDQUF3QjtVQUF4Qix5QkFBd0I7RUFDeEIsMENBQWlDO1VBQWpDLGtDQUFpQztFQUNqQyxzQ0FBNkI7VUFBN0IsOEJBQTZCLEVBQzlCO0VBRUQ7RUFDRSx3Q0FBK0I7VUFBL0IsZ0NBQStCO0VBQy9CLGlDQUF3QjtVQUF4Qix5QkFBd0I7RUFDeEIsMENBQWlDO1VBQWpDLGtDQUFpQztFQUNqQyxzQ0FBNkI7VUFBN0IsOEJBQTZCLEVBQzlCO0VBQ0Q7RUFDRSxxQ0FBNEI7VUFBNUIsNkJBQTRCO0VBQzVCLGlDQUF3QjtVQUF4Qix5QkFBd0I7RUFDeEIsMENBQWlDO1VBQWpDLGtDQUFpQztFQUNqQyxzQ0FBNkI7VUFBN0IsOEJBQTZCLEVBQzlCO0VBQ0Q7RUFDRTtJQUNFLGVBQWM7SUFDZCxXQUFVLEVBQUE7RUFFWjtJQUNFLG1CQUFrQjtJQUNsQixXQUFVLEVBQUEsRUFBQTtFQVBkO0VBQ0U7SUFDRSxlQUFjO0lBQ2QsV0FBVSxFQUFBO0VBRVo7SUFDRSxtQkFBa0I7SUFDbEIsV0FBVSxFQUFBLEVBQUE7RUFHZDtFQUNFO0lBQ0Usa0JBQWlCO0lBQ2pCLFdBQVUsRUFBQTtFQUVaO0lBQ0UsZ0JBQWU7SUFDZixXQUFVLEVBQUEsRUFBQTtFQVBkO0VBQ0U7SUFDRSxrQkFBaUI7SUFDakIsV0FBVSxFQUFBO0VBRVo7SUFDRSxnQkFBZTtJQUNmLFdBQVUsRUFBQSxFQUFBO0VBSWQ7RUFDRTtJQUNFLGVBQWM7SUFDZCxXQUFVLEVBQUE7RUFFWjtJQUNFLGtCQUFpQjtJQUNqQixXQUFVLEVBQUEsRUFBQTtFQVBkO0VBQ0U7SUFDRSxlQUFjO0lBQ2QsV0FBVSxFQUFBO0VBRVo7SUFDRSxrQkFBaUI7SUFDakIsV0FBVSxFQUFBLEVBQUE7RUFHZDtFQUNFO0lBQ0UsbUJBQWtCO0lBQ2xCLFdBQVUsRUFBQTtFQUVaO0lBQ0UsZ0JBQWU7SUFDZixXQUFVLEVBQUEsRUFBQTtFQVBkO0VBQ0U7SUFDRSxtQkFBa0I7SUFDbEIsV0FBVSxFQUFBO0VBRVo7SUFDRSxnQkFBZTtJQUNmLFdBQVUsRUFBQSxFQUFBO0VBSWQ7RUFDRTtJQUNFLGNBQWEsRUFDZCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbmF2aWdhdGlvbi1kYXJrLWJhY2tncm91bmQ6IHJnYmEoYmxhY2ssIDAuNSk7XG4kbmF2aWdhdGlvbi1saWdodC1iYWNrZ3JvdW5kOiByZ2JhKGJsYWNrLCAwLjIpO1xuJHdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cbi5jYXJvdXNlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHBhZGRpbmc6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggJG5hdmlnYXRpb24tbGlnaHQtYmFja2dyb3VuZDtcbiAgLmNhcm91c2VsLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIH1cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jYXJvdXNlbC1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuXG4uY2Fyb3VzZWwtYXJyb3ctbGVmdCxcbi5jYXJvdXNlbC1hcnJvdy1yaWdodCB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5jYXJvdXNlbC1hcnJvdy1sZWZ0IHtcbiAgbGVmdDogMDtcbn1cbi5jYXJvdXNlbC1hcnJvdy1yaWdodCB7XG4gIHJpZ2h0OiAwO1xufVxuLmNhcm91c2VsLWFycm93LWxlZnQ6aG92ZXIsXG4uY2Fyb3VzZWwtYXJyb3ctcmlnaHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAkbmF2aWdhdGlvbi1kYXJrLWJhY2tncm91bmQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmEuYXJyb3cge1xuICBib3JkZXI6IHNvbGlkICR3aGl0ZTtcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICAmLmxlZnQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICB9XG4gICYucmlnaHQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG59XG5cbi5jYXJyb3VzZWwtcGFnaW5hdGlvbi1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgJjpob3ZlcixcbiAgICAmLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAkbmF2aWdhdGlvbi1saWdodC1iYWNrZ3JvdW5kO1xuICAgIH1cbiAgfVxufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1vdmVSaWdodEN1cnJlbnQge1xuICBhbmltYXRpb24tbmFtZTogbW92ZVJpZ2h0Q3VycmVudDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb3ZlUmlnaHRQcmV2IHtcbiAgYW5pbWF0aW9uLW5hbWU6IG1vdmVSaWdodFByZXY7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tb3ZlTGVmdEN1cnJlbnQge1xuICBhbmltYXRpb24tbmFtZTogbW92ZUxlZnRDdXJyZW50O1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vdmVMZWZ0TmV4dCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBtb3ZlTGVmdE5leHQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cbkBrZXlmcmFtZXMgbW92ZUxlZnRDdXJyZW50IHtcbiAgZnJvbSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZUxlZnROZXh0IHtcbiAgZnJvbSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBtb3ZlUmlnaHRDdXJyZW50IHtcbiAgZnJvbSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBtb3ZlUmlnaHRQcmV2IHtcbiAgZnJvbSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNhcm91c2VsIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: Div, Dot, CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Div", function() { return Div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dot", function() { return Dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
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

var Div = /** @class */ (function () {
    function Div() {
    }
    Div = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'div'
        })
    ], Div);
    return Div;
}());

var Dot = /** @class */ (function () {
    function Dot() {
    }
    Dot = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'a'
        })
    ], Dot);
    return Dot;
}());

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.autoplay = true;
        this.interval = 5000;
        this.disableMobilePagination = true;
        // carousel
        this.itemIdx = 0;
        this.items = [];
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent.prototype.ngAfterContentInit = function () {
        this.initGallery();
    };
    CarouselComponent.prototype.nextItem = function () {
        this.move(this.itemIdx + 1);
    };
    CarouselComponent.prototype.prevItem = function () {
        this.move(this.itemIdx - 1);
    };
    CarouselComponent.prototype.moveItem = function (idx) {
        if (this.disableMobilePagination && this.mobilecheck()) {
            return;
        }
        this.move(idx);
    };
    CarouselComponent.prototype.initGallery = function () {
        var _this = this;
        this.itemIdx = 0;
        this.items = this.carouselItems.map(function (item) { return item.nativeElement; });
        this.items[this.itemIdx].style.opacity = 1;
        this.paginationItems = Array(this.items.length).slice().fill(null)
            .map(function (x, idx) {
            return {
                idx: idx,
                active: idx === _this.itemIdx ? true : false
            };
        });
        if (this.autoplay) {
            this.autoplayCarousel();
        }
    };
    CarouselComponent.prototype.move = function (n) {
        var carouselCurrentItem;
        var carouselNextItem;
        var i;
        var current, next;
        if (n > this.itemIdx) {
            if (n >= this.items.length) {
                n = 0;
            }
            carouselCurrentItem = 'moveLeftCurrent';
            carouselNextItem = 'moveLeftNext';
        }
        else if (n < this.itemIdx) {
            if (n < 0) {
                n = this.items.length - 1;
            }
            carouselCurrentItem = 'moveRightCurrent';
            carouselNextItem = 'moveRightPrev';
        }
        if (n != this.itemIdx) {
            next = this.items[n];
            current = this.items[this.itemIdx];
            for (i = 0; i < this.items.length; i++) {
                this.items[i].className = 'carousel-item';
                this.items[i].style.opacity = 0;
                this.paginationItems[i].active = false;
            }
            current.classList.add(carouselCurrentItem);
            next.classList.add(carouselNextItem);
            this.paginationItems[n].active = true;
            this.itemIdx = n;
        }
    };
    CarouselComponent.prototype.autoplayCarousel = function () {
        // this.timer = this.requestInterval(() => {
        //   this.move(this.itemIdx + 1);
        // }, 5000);
        var _this = this;
        this.timer = window.setInterval(function () {
            window.requestAnimationFrame(_this.move.bind(_this, _this.itemIdx + 1));
        }, this.interval);
    };
    CarouselComponent.prototype.requestInterval = function (callback, delay) {
        var dateNow = Date.now, requestAnimation = window.requestAnimationFrame, start = dateNow(), stop, intervalFunc = function () {
            dateNow() - start < delay || ((start += delay), callback());
            stop || requestAnimation(intervalFunc);
        };
        requestAnimation(intervalFunc);
        return {
            clear: function () {
                stop = 1;
            }
        };
    };
    CarouselComponent.prototype.mobilecheck = function () {
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                check = true;
        })(navigator.userAgent || navigator.vendor || window['opera']);
        return check;
    };
    CarouselComponent.prototype.ngOnDestroy = function () {
        // this.timer.clear();
        window.clearInterval(this.timer);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('autoplay'),
        __metadata("design:type", Boolean)
    ], CarouselComponent.prototype, "autoplay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('interval'),
        __metadata("design:type", Number)
    ], CarouselComponent.prototype, "interval", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('disableMobilePagination'),
        __metadata("design:type", Boolean)
    ], CarouselComponent.prototype, "disableMobilePagination", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])('carouselItem'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CarouselComponent.prototype, "carouselItems", void 0);
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.scss */ "./src/app/carousel/carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
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

module.exports = __webpack_require__(/*! /run/media/yvs/Dev/F/others/Exercises/angular/ng7-carousel/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\projet-steinmetz-baptiste\front\src\main.ts */"zUnb");


/***/ }),

/***/ "7LLL":
/*!**********************************************!*\
  !*** ./src/shared/actions/product-action.ts ***!
  \**********************************************/
/*! exports provided: AddProduct, DelProduct, BuyProduct, ShowProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProduct", function() { return AddProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelProduct", function() { return DelProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyProduct", function() { return BuyProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowProduct", function() { return ShowProduct; });
class AddProduct {
    constructor(payload) {
        this.payload = payload;
    }
}
AddProduct.type = '[Product] Add';
class DelProduct {
    constructor(payload) {
        this.payload = payload;
    }
}
DelProduct.type = '[Product] Del';
class BuyProduct {
    constructor(payload) {
        this.payload = payload;
    }
}
BuyProduct.type = '[Product] Buy';
class ShowProduct {
    constructor(payload) {
        this.payload = payload;
    }
}
ShowProduct.type = '[Product] Show';


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _shared_states_user_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/states/user-state */ "AwXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class HomeComponent {
    constructor(store) {
        this.store = store;
        this.logged = false;
    }
    ngOnInit() {
        this.nbProducts$ = this.store.select(state => state.listProducts.products.length);
        this.store.select(_shared_states_user_state__WEBPACK_IMPORTED_MODULE_0__["UserState"].getUser).subscribe((data) => {
            if (JSON.stringify(data) !== JSON.stringify({})) {
                this.logged = true;
            }
            if (!data)
                this.logged = false;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 1, consts: [["id", "homepage"], [1, "homepage-routes"], ["routerLink", "/account", 1, "btn-routes"], [1, "fa", "fa-caret-right"], ["routerLink", "/products", 1, "btn-routes"], ["routerLink", "/cart", 1, "btn-routes"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Store ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.logged ? "Go to account" : "Log-in / Sign-in");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  font-family: Arial;\n}\n[_nghost-%COMP%]   #homepage[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   #homepage[_ngcontent-%COMP%]   .homepage-routes[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   #homepage[_ngcontent-%COMP%]   .homepage-routes[_ngcontent-%COMP%]   a.btn-routes[_ngcontent-%COMP%] {\n  width: 15em;\n  text-decoration: none;\n  color: white;\n  background-color: #23758E;\n  padding: 8px;\n  border: 0;\n  margin: 5px;\n  cursor: pointer;\n  opacity: 0.9;\n  border-radius: 3px;\n  transition: 0.3s all ease-in;\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   #homepage[_ngcontent-%COMP%]   .homepage-routes[_ngcontent-%COMP%]   a.btn-routes[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNJLFlBQUE7QUFDUjtBQUFRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFWjtBQURZO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBRUEsWUFBQTtFQUNBLHlCQ2RBO0VEZUEsWUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBRWhCO0FBRGdCO0VBRUksVUFBQTtBQUVwQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi9jb2xvcnMuc2Nzcyc7XHJcbjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgI2hvbWVwYWdlIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLmhvbWVwYWdlLXJvdXRlcyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGEuYnRuLXJvdXRlcyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTVlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmx1ZS1kO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiRwcmltYXJ5LXBpbms6ICNkODFiNjA7XHJcbiRwcmltYXJ5LXBpbmstbDojZmY1YzhkO1xyXG4kcHJpbWFyeS1waW5rLWQ6I2EwMDAzNztcclxuJHByaW1hcnktYmx1ZTojMzFiYmQ2O1xyXG4kcHJpbWFyeS1ibHVlLWQ6IzIzNzU4RTtcclxuJHByaW1hcnktdGV4dDojMjEyMTIxO1xyXG4kcHJpbWFyeS1jb2xvci1sOiNCM0U1RkM7XHJcbiRwcmltYXJ5LWJ0bjojMThmN2Y3O1xyXG4kcHJpbWFyeS1idG4taG92ZXI6IzRkZDNlZTtcclxuJHN1Ym1pdC1idG46IzE4ZjdmNztcclxuJHN1Ym1pdC1idG4taG92ZXI6IzRkZDNlZTtcclxuJHNlY29uZGFyeS10ZXh0OiM3NTc1NzU7XHJcbiRib2R5OiNjNmRiZjA7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "AwXK":
/*!*****************************************!*\
  !*** ./src/shared/states/user-state.ts ***!
  \*****************************************/
/*! exports provided: UserState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserState", function() { return UserState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _actions_user_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../actions/user-action */ "jQhb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/User */ "xNjB");

// add actions : login => store username to display it
// adduser and store it



let UserState = class UserState {
    static getUser(state) {
        return state.user;
        // return state.products.find(x => x.id === id);
    }
    // @Selector()
    // static getNbProducts(state: ProductStateModel): number {
    //   return state.products.length;
    // }
    add({ getState, patchState }, { payload }) {
        const state = getState();
        patchState({
            user: payload
        });
    }
    log({ getState, patchState }, { payload }) {
        const state = getState();
        patchState({
            user: payload
        });
    }
    del({ getState, patchState }, { payload }) {
        const state = getState();
        patchState({
            user: null
        });
    }
    logoff({ getState, patchState }, { payload }) {
        const state = getState();
        patchState({
            user: null
        });
    }
    show({ getState, patchState }, { payload }) {
        // const state = getState();
        // patchState({
        //   product: payload,
        // });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["AddUser"])
], UserState.prototype, "add", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["ConnectUser"])
], UserState.prototype, "log", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["DelUser"])
], UserState.prototype, "del", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["LogOffUser"])
], UserState.prototype, "logoff", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["ShowUser"])
], UserState.prototype, "show", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()
], UserState, "getUser", null);
UserState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'userContent',
        defaults: {
            user: new _models_User__WEBPACK_IMPORTED_MODULE_3__["User"](),
        }
    })
], UserState);



/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    api: 'https://back-projet-steinmetz-baptiste.herokuapp.com',
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../environments/environment */ "AytR");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor() {
        // constructor() {
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["id", "main"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  font-family: Arial;\n  overflow-x: hidden;\n  font-family: Arial;\n}\n\n#app[_ngcontent-%COMP%] {\n  background: #c6dbf0;\n}\n\n#main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkNFRTtBREZOOztBQUdBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQUFKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL2NvbG9ycy5zY3NzXCI7XHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG59XHJcblxyXG4jYXBwIHtcclxuICAgIGJhY2tncm91bmQ6ICRib2R5O1xyXG59XHJcblxyXG4jbWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iLCIkcHJpbWFyeS1waW5rOiAjZDgxYjYwO1xyXG4kcHJpbWFyeS1waW5rLWw6I2ZmNWM4ZDtcclxuJHByaW1hcnktcGluay1kOiNhMDAwMzc7XHJcbiRwcmltYXJ5LWJsdWU6IzMxYmJkNjtcclxuJHByaW1hcnktYmx1ZS1kOiMyMzc1OEU7XHJcbiRwcmltYXJ5LXRleHQ6IzIxMjEyMTtcclxuJHByaW1hcnktY29sb3ItbDojQjNFNUZDO1xyXG4kcHJpbWFyeS1idG46IzE4ZjdmNztcclxuJHByaW1hcnktYnRuLWhvdmVyOiM0ZGQzZWU7XHJcbiRzdWJtaXQtYnRuOiMxOGY3Zjc7XHJcbiRzdWJtaXQtYnRuLWhvdmVyOiM0ZGQzZWU7XHJcbiRzZWNvbmRhcnktdGV4dDojNzU3NTc1O1xyXG4kYm9keTojYzZkYmYwOyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "VMwI":
/*!********************************************!*\
  !*** ./src/shared/states/product-state.ts ***!
  \********************************************/
/*! exports provided: ProductState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductState", function() { return ProductState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _actions_product_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../actions/product-action */ "7LLL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");



let ProductState = class ProductState {
    static getProduct(id) {
        // return state.products.find(x => x.id === id);
    }
    static getNbProducts(state) {
        return state.products.length;
    }
    static getFullPriceProducts(state) {
        let price = 0;
        state.products.forEach(product => {
            price += product.price;
        });
        let rounding = price.toFixed(2);
        price = Number(rounding);
        return price;
    }
    add({ getState, patchState }, { payload }) {
        const state = getState();
        // if(!state.products.find((product)=> product.id === payload.id)){
        // ProductState.getFullPriceProducts(state);
        patchState({
            // créer un nouveau tableau
            // l'opérateur ... permet de consituer une liste d'élement du tableau
            products: [...state.products, payload],
        });
        // }
    }
    del({ getState, patchState }, { payload }) {
        const state = getState();
        const index = state.products.indexOf(payload);
        state.products.splice(index, 1);
        patchState({});
    }
    buy({ getState, patchState }, { payload }) {
        const state = getState();
        patchState({
            products: []
        });
    }
    show({ getState, patchState }, { payload }) {
        const state = getState();
        patchState({
            product: payload,
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_product_action__WEBPACK_IMPORTED_MODULE_1__["AddProduct"])
], ProductState.prototype, "add", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_product_action__WEBPACK_IMPORTED_MODULE_1__["DelProduct"])
], ProductState.prototype, "del", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_product_action__WEBPACK_IMPORTED_MODULE_1__["BuyProduct"])
], ProductState.prototype, "buy", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_product_action__WEBPACK_IMPORTED_MODULE_1__["ShowProduct"])
], ProductState.prototype, "show", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()
], ProductState, "getProduct", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()
], ProductState, "getNbProducts", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()
], ProductState, "getFullPriceProducts", null);
ProductState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'listProducts',
        defaults: {
            products: [],
            product: null,
        }
    })
], ProductState);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _shared_states_user_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/states/user-state */ "AwXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_states_product_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/states/product-state */ "VMwI");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "9vUh");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["NoopAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forRoot([
                _shared_states_product_state__WEBPACK_IMPORTED_MODULE_3__["ProductState"],
                _shared_states_user_state__WEBPACK_IMPORTED_MODULE_0__["UserState"]
            ]),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["NoopAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["ɵk"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["NoopAnimationsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"],
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forRoot([
                        _shared_states_product_state__WEBPACK_IMPORTED_MODULE_3__["ProductState"],
                        _shared_states_user_state__WEBPACK_IMPORTED_MODULE_0__["UserState"]
                    ]),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _shared_states_user_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/states/user-state */ "AwXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function () { return ["active", "non-active"]; };
class HeaderComponent {
    constructor(store) {
        this.store = store;
        this.loggedUser$ = null;
    }
    ngOnInit() {
        this.nbProducts$ = this.store.select(state => state.listProducts.products.length);
        this.store.select(_shared_states_user_state__WEBPACK_IMPORTED_MODULE_0__["UserState"].getUser).subscribe((data) => {
            if (data)
                this.loggedUser$ = data.login;
            else
                this.loggedUser$ = '';
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 23, vars: 6, consts: [[1, "header-navigation"], ["routerLinkActive", "active"], ["routerLink", "home"], ["routerLink", "account"], ["routerLink", "products"], [3, "routerLinkActive"], ["routerLink", "cart"], [1, "header-shopping-cart"], [1, "loggedUser"], ["aria-hidden", "true", 1, "fa", "fa-shopping-cart"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.loggedUser$);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 3, ctx.nbProducts$));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["nav[_ngcontent-%COMP%] {\n  background-color: #23758E;\n  min-height: 40px;\n  display: flex;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.44);\n  align-items: center;\n  padding-left: 35px;\n  color: white;\n  font-family: Arial;\n  justify-content: space-between;\n}\nnav[_ngcontent-%COMP%]   .header-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nnav[_ngcontent-%COMP%]   .header-navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\nnav[_ngcontent-%COMP%]   .header-navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px;\n  padding-left: 10px;\n}\nnav[_ngcontent-%COMP%]   .header-navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nnav[_ngcontent-%COMP%]   .header-navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\nnav[_ngcontent-%COMP%]   .header-shopping-cart[_ngcontent-%COMP%] {\n  margin-right: 25px;\n  display: flex;\n  align-items: center;\n}\nnav[_ngcontent-%COMP%]   .header-shopping-cart[_ngcontent-%COMP%]   .loggedUser[_ngcontent-%COMP%] {\n  margin-right: 25px;\n}\nnav[_ngcontent-%COMP%]   .header-shopping-cart[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 50px;\n  display: flex;\n  justify-content: space-around;\n  text-decoration: none;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHlCQ0VZO0VERFosZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFBSjtBQUNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFBUTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBRVo7QUFEWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUdoQjtBQUZnQjtFQUNJLGlCQUFBO0FBSXBCO0FBRmdCO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FBSXBCO0FBQ0k7RUFDSSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBQUFSO0FBQ1E7RUFDSSxrQkFBQTtBQUNaO0FBRVE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBQVoiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi9jb2xvcnMuc2Nzcyc7XHJcbm5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1ibHVlLWQ7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQ0KTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAuaGVhZGVyLW5hdmlnYXRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhlYWRlci1zaG9wcGluZy1jYXJ0IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgLy8gLy8gZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLmxvZ2dlZFVzZXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIC8vIC8vIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJHByaW1hcnktcGluazogI2Q4MWI2MDtcclxuJHByaW1hcnktcGluay1sOiNmZjVjOGQ7XHJcbiRwcmltYXJ5LXBpbmstZDojYTAwMDM3O1xyXG4kcHJpbWFyeS1ibHVlOiMzMWJiZDY7XHJcbiRwcmltYXJ5LWJsdWUtZDojMjM3NThFO1xyXG4kcHJpbWFyeS10ZXh0OiMyMTIxMjE7XHJcbiRwcmltYXJ5LWNvbG9yLWw6I0IzRTVGQztcclxuJHByaW1hcnktYnRuOiMxOGY3Zjc7XHJcbiRwcmltYXJ5LWJ0bi1ob3ZlcjojNGRkM2VlO1xyXG4kc3VibWl0LWJ0bjojMThmN2Y3O1xyXG4kc3VibWl0LWJ0bi1ob3ZlcjojNGRkM2VlO1xyXG4kc2Vjb25kYXJ5LXRleHQ6Izc1NzU3NTtcclxuJGJvZHk6I2M2ZGJmMDsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "jQhb":
/*!*******************************************!*\
  !*** ./src/shared/actions/user-action.ts ***!
  \*******************************************/
/*! exports provided: AddUser, ConnectUser, ShowUser, DelUser, LogOffUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUser", function() { return AddUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectUser", function() { return ConnectUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowUser", function() { return ShowUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelUser", function() { return DelUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogOffUser", function() { return LogOffUser; });
class AddUser {
    constructor(payload) {
        this.payload = payload;
    }
}
AddUser.type = '[User] Add';
class ConnectUser {
    constructor(payload) {
        this.payload = payload;
    }
}
ConnectUser.type = '[User] Log';
class ShowUser {
    constructor(payload) {
        this.payload = payload;
    }
}
ShowUser.type = '[User] Show';
class DelUser {
    constructor(payload) {
        this.payload = payload;
    }
}
DelUser.type = '[User] Del';
class LogOffUser {
    constructor(payload) {
        this.payload = payload;
    }
}
LogOffUser.type = '[User] LogOff';


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");





const appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'account', loadChildren: () => Promise.all(/*! import() | user-account-user-account-module */[__webpack_require__.e("default~catalog-catalog-module~user-account-user-account-module"), __webpack_require__.e("user-account-user-account-module")]).then(__webpack_require__.bind(null, /*! ./user-account/user-account.module */ "MCpj")).then(m => m.UserAccountModule) },
    { path: 'products', loadChildren: () => Promise.all(/*! import() | catalog-catalog-module */[__webpack_require__.e("default~catalog-catalog-module~user-account-user-account-module"), __webpack_require__.e("default~catalog-catalog-module~shopping-cart-shopping-cart-module"), __webpack_require__.e("catalog-catalog-module")]).then(__webpack_require__.bind(null, /*! ./catalog/catalog.module */ "6J3s")).then(m => m.CatalogModule) },
    { path: 'products/:id', loadChildren: () => __webpack_require__.e(/*! import() | product-detail-product-detail-module */ "product-detail-product-detail-module").then(__webpack_require__.bind(null, /*! ./product-detail/product-detail.module */ "6hUG")).then(m => m.ProductDetailModule) },
    { path: 'cart', loadChildren: () => Promise.all(/*! import() | shopping-cart-shopping-cart-module */[__webpack_require__.e("default~catalog-catalog-module~shopping-cart-shopping-cart-module"), __webpack_require__.e("shopping-cart-shopping-cart-module")]).then(__webpack_require__.bind(null, /*! ./shopping-cart/shopping-cart.module */ "d32p")).then(m => m.ShoppingCartModule) },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { relativeLinkResolution: 'legacy' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xNjB":
/*!***********************************!*\
  !*** ./src/shared/models/User.ts ***!
  \***********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor() {
        // this.firstname = firstname;
        // this.lastname = lastname;
        // this.address = address;
        // this.zipcode = zipcode;
        // this.city = city;
        // this.gender = gender;
        // this.mail = mail;
        // this.password = password;
        // this.login = login;
        // this.country = country;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
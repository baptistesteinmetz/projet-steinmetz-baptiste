(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\wamp64\www\projet-steinmetz-baptiste\front\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "7LLL":
    /*!**********************************************!*\
      !*** ./src/shared/actions/product-action.ts ***!
      \**********************************************/

    /*! exports provided: AddProduct, DelProduct, BuyProduct, ShowProduct */

    /***/
    function LLL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddProduct", function () {
        return AddProduct;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DelProduct", function () {
        return DelProduct;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuyProduct", function () {
        return BuyProduct;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowProduct", function () {
        return ShowProduct;
      });

      var AddProduct = function AddProduct(payload) {
        _classCallCheck(this, AddProduct);

        this.payload = payload;
      };

      AddProduct.type = '[Product] Add';

      var DelProduct = function DelProduct(payload) {
        _classCallCheck(this, DelProduct);

        this.payload = payload;
      };

      DelProduct.type = '[Product] Del';

      var BuyProduct = function BuyProduct(payload) {
        _classCallCheck(this, BuyProduct);

        this.payload = payload;
      };

      BuyProduct.type = '[Product] Buy';

      var ShowProduct = function ShowProduct(payload) {
        _classCallCheck(this, ShowProduct);

        this.payload = payload;
      };

      ShowProduct.type = '[Product] Show';
      /***/
    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _shared_states_user_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../shared/states/user-state */
      "AwXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngxs/store */
      "AcyG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(store) {
          _classCallCheck(this, HomeComponent);

          this.store = store;
          this.logged = false;
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.nbProducts$ = this.store.select(function (state) {
              return state.listProducts.products.length;
            });
            this.store.select(_shared_states_user_state__WEBPACK_IMPORTED_MODULE_0__["UserState"].getUser).subscribe(function (data) {
              if (JSON.stringify(data) !== JSON.stringify({})) {
                _this.logged = true;
              }

              if (!data) _this.logged = false;
            });
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 11,
        vars: 1,
        consts: [["id", "homepage"], [1, "homepage-routes"], ["routerLink", "/account", 1, "btn-routes"], [1, "fa", "fa-caret-right"], ["routerLink", "/products", 1, "btn-routes"], ["routerLink", "/cart", 1, "btn-routes"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.logged ? "Go to account" : "Log-in / Sign-in");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  font-family: Arial;\n}\n[_nghost-%COMP%]   #homepage[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   #homepage[_ngcontent-%COMP%]   .homepage-routes[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   #homepage[_ngcontent-%COMP%]   .homepage-routes[_ngcontent-%COMP%]   a.btn-routes[_ngcontent-%COMP%] {\n  width: 15em;\n  text-decoration: none;\n  color: white;\n  background-color: #23758E;\n  padding: 8px;\n  border: 0;\n  margin: 5px;\n  cursor: pointer;\n  opacity: 0.9;\n  border-radius: 3px;\n  transition: 0.3s all ease-in;\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   #homepage[_ngcontent-%COMP%]   .homepage-routes[_ngcontent-%COMP%]   a.btn-routes[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNJLFlBQUE7QUFDUjtBQUFRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFWjtBQURZO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBRUEsWUFBQTtFQUNBLHlCQ2RBO0VEZUEsWUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBRWhCO0FBRGdCO0VBRUksVUFBQTtBQUVwQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi9jb2xvcnMuc2Nzcyc7XHJcbjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgI2hvbWVwYWdlIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLmhvbWVwYWdlLXJvdXRlcyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGEuYnRuLXJvdXRlcyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTVlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmx1ZS1kO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiRwcmltYXJ5LXBpbms6ICNkODFiNjA7XHJcbiRwcmltYXJ5LXBpbmstbDojZmY1YzhkO1xyXG4kcHJpbWFyeS1waW5rLWQ6I2EwMDAzNztcclxuJHByaW1hcnktYmx1ZTojMzFiYmQ2O1xyXG4kcHJpbWFyeS1ibHVlLWQ6IzIzNzU4RTtcclxuJHByaW1hcnktdGV4dDojMjEyMTIxO1xyXG4kcHJpbWFyeS1jb2xvci1sOiNCM0U1RkM7XHJcbiRwcmltYXJ5LWJ0bjojMThmN2Y3O1xyXG4kcHJpbWFyeS1idG4taG92ZXI6IzRkZDNlZTtcclxuJHN1Ym1pdC1idG46IzE4ZjdmNztcclxuJHN1Ym1pdC1idG4taG92ZXI6IzRkZDNlZTtcclxuJHNlY29uZGFyeS10ZXh0OiM3NTc1NzU7XHJcbiRib2R5OiNjNmRiZjA7Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
          }]
        }], function () {
          return [{
            type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AwXK":
    /*!*****************************************!*\
      !*** ./src/shared/states/user-state.ts ***!
      \*****************************************/

    /*! exports provided: UserState */

    /***/
    function AwXK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserState", function () {
        return UserState;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _actions_user_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../actions/user-action */
      "jQhb");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngxs/store */
      "AcyG");
      /* harmony import */


      var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models/User */
      "xNjB"); // add actions : login => store username to display it
      // adduser and store it


      var UserState = /*#__PURE__*/function () {
        function UserState() {
          _classCallCheck(this, UserState);
        }

        _createClass(UserState, [{
          key: "add",
          // @Selector()
          // static getNbProducts(state: ProductStateModel): number {
          //   return state.products.length;
          // }
          value: function add(_ref, _ref2) {
            var getState = _ref.getState,
                patchState = _ref.patchState;
            var payload = _ref2.payload;
            var state = getState();
            patchState({
              user: payload
            });
          }
        }, {
          key: "log",
          value: function log(_ref3, _ref4) {
            var getState = _ref3.getState,
                patchState = _ref3.patchState;
            var payload = _ref4.payload;
            var state = getState();
            patchState({
              user: payload
            });
          }
        }, {
          key: "del",
          value: function del(_ref5, _ref6) {
            var getState = _ref5.getState,
                patchState = _ref5.patchState;
            var payload = _ref6.payload;
            var state = getState();
            patchState({
              user: null
            });
          }
        }, {
          key: "logoff",
          value: function logoff(_ref7, _ref8) {
            var getState = _ref7.getState,
                patchState = _ref7.patchState;
            var payload = _ref8.payload;
            var state = getState();
            patchState({
              user: null
            });
          }
        }, {
          key: "show",
          value: function show(_ref9, _ref10) {// const state = getState();
            // patchState({
            //   product: payload,
            // });

            var getState = _ref9.getState,
                patchState = _ref9.patchState;
            var payload = _ref10.payload;
          }
        }], [{
          key: "getUser",
          value: function getUser(state) {
            return state.user; // return state.products.find(x => x.id === id);
          }
        }]);

        return UserState;
      }();

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["AddUser"])], UserState.prototype, "add", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["ConnectUser"])], UserState.prototype, "log", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["DelUser"])], UserState.prototype, "del", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["LogOffUser"])], UserState.prototype, "logoff", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["ShowUser"])], UserState.prototype, "show", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()], UserState, "getUser", null);
      UserState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'userContent',
        defaults: {
          user: new _models_User__WEBPACK_IMPORTED_MODULE_3__["User"]()
        }
      })], UserState);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        api: 'https://back-projet-steinmetz-baptiste.herokuapp.com'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../environments/environment */
      "AytR");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        // constructor() {
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        consts: [["id", "main"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  font-family: Arial;\n  overflow-x: hidden;\n  font-family: Arial;\n}\n\n#app[_ngcontent-%COMP%] {\n  background: #c6dbf0;\n}\n\n#main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkNFRTtBREZOOztBQUdBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQUFKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL2NvbG9ycy5zY3NzXCI7XHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG59XHJcblxyXG4jYXBwIHtcclxuICAgIGJhY2tncm91bmQ6ICRib2R5O1xyXG59XHJcblxyXG4jbWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iLCIkcHJpbWFyeS1waW5rOiAjZDgxYjYwO1xyXG4kcHJpbWFyeS1waW5rLWw6I2ZmNWM4ZDtcclxuJHByaW1hcnktcGluay1kOiNhMDAwMzc7XHJcbiRwcmltYXJ5LWJsdWU6IzMxYmJkNjtcclxuJHByaW1hcnktYmx1ZS1kOiMyMzc1OEU7XHJcbiRwcmltYXJ5LXRleHQ6IzIxMjEyMTtcclxuJHByaW1hcnktY29sb3ItbDojQjNFNUZDO1xyXG4kcHJpbWFyeS1idG46IzE4ZjdmNztcclxuJHByaW1hcnktYnRuLWhvdmVyOiM0ZGQzZWU7XHJcbiRzdWJtaXQtYnRuOiMxOGY3Zjc7XHJcbiRzdWJtaXQtYnRuLWhvdmVyOiM0ZGQzZWU7XHJcbiRzZWNvbmRhcnktdGV4dDojNzU3NTc1O1xyXG4kYm9keTojYzZkYmYwOyJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "VMwI":
    /*!********************************************!*\
      !*** ./src/shared/states/product-state.ts ***!
      \********************************************/

    /*! exports provided: ProductState */

    /***/
    function VMwI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductState", function () {
        return ProductState;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _actions_product_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../actions/product-action */
      "7LLL");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngxs/store */
      "AcyG");

      var ProductState = /*#__PURE__*/function () {
        function ProductState() {
          _classCallCheck(this, ProductState);
        }

        _createClass(ProductState, [{
          key: "add",
          value: function add(_ref11, _ref12) {
            var getState = _ref11.getState,
                patchState = _ref11.patchState;
            var payload = _ref12.payload;
            var state = getState(); // if(!state.products.find((product)=> product.id === payload.id)){
            // ProductState.getFullPriceProducts(state);

            patchState({
              // créer un nouveau tableau
              // l'opérateur ... permet de consituer une liste d'élement du tableau
              products: [].concat(_toConsumableArray(state.products), [payload])
            }); // }
          }
        }, {
          key: "del",
          value: function del(_ref13, _ref14) {
            var getState = _ref13.getState,
                patchState = _ref13.patchState;
            var payload = _ref14.payload;
            var state = getState();
            var index = state.products.indexOf(payload);
            state.products.splice(index, 1);
            patchState({});
          }
        }, {
          key: "buy",
          value: function buy(_ref15, _ref16) {
            var getState = _ref15.getState,
                patchState = _ref15.patchState;
            var payload = _ref16.payload;
            var state = getState();
            patchState({
              products: []
            });
          }
        }, {
          key: "show",
          value: function show(_ref17, _ref18) {
            var getState = _ref17.getState,
                patchState = _ref17.patchState;
            var payload = _ref18.payload;
            var state = getState();
            patchState({
              product: payload
            });
          }
        }], [{
          key: "getProduct",
          value: function getProduct(id) {// return state.products.find(x => x.id === id);
          }
        }, {
          key: "getNbProducts",
          value: function getNbProducts(state) {
            return state.products.length;
          }
        }, {
          key: "getFullPriceProducts",
          value: function getFullPriceProducts(state) {
            var price = 0;
            state.products.forEach(function (product) {
              price += product.price;
            });
            var rounding = price.toFixed(2);
            price = Number(rounding);
            return price;
          }
        }]);

        return ProductState;
      }();

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_product_action__WEBPACK_IMPORTED_MODULE_1__["AddProduct"])], ProductState.prototype, "add", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_product_action__WEBPACK_IMPORTED_MODULE_1__["DelProduct"])], ProductState.prototype, "del", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_product_action__WEBPACK_IMPORTED_MODULE_1__["BuyProduct"])], ProductState.prototype, "buy", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_product_action__WEBPACK_IMPORTED_MODULE_1__["ShowProduct"])], ProductState.prototype, "show", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()], ProductState, "getProduct", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()], ProductState, "getNbProducts", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()], ProductState, "getFullPriceProducts", null);
      ProductState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'listProducts',
        defaults: {
          products: [],
          product: null
        }
      })], ProductState);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _shared_states_user_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../shared/states/user-state */
      "AwXK");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _shared_states_product_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../shared/states/product-state */
      "VMwI");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngxs/store */
      "AcyG");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["NoopAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forRoot([_shared_states_product_state__WEBPACK_IMPORTED_MODULE_3__["ProductState"], _shared_states_user_state__WEBPACK_IMPORTED_MODULE_0__["UserState"]])], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]],
          imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["NoopAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["ɵk"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]],
            imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["NoopAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forRoot([_shared_states_product_state__WEBPACK_IMPORTED_MODULE_3__["ProductState"], _shared_states_user_state__WEBPACK_IMPORTED_MODULE_0__["UserState"]])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "fECr":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function fECr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _shared_states_user_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../shared/states/user-state */
      "AwXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngxs/store */
      "AcyG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0() {
        return ["active", "non-active"];
      };

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(store) {
          _classCallCheck(this, HeaderComponent);

          this.store = store;
          this.loggedUser$ = null;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.nbProducts$ = this.store.select(function (state) {
              return state.listProducts.products.length;
            });
            this.store.select(_shared_states_user_state__WEBPACK_IMPORTED_MODULE_0__["UserState"].getUser).subscribe(function (data) {
              if (data) _this2.loggedUser$ = data.login;else _this2.loggedUser$ = '';
            });
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 23,
        vars: 6,
        consts: [[1, "header-navigation"], ["routerLinkActive", "active"], ["routerLink", "home"], ["routerLink", "account"], ["routerLink", "products"], [3, "routerLinkActive"], ["routerLink", "cart"], [1, "header-shopping-cart"], [1, "loggedUser"], ["aria-hidden", "true", 1, "fa", "fa-shopping-cart"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.loggedUser$);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 3, ctx.nbProducts$));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
        styles: ["nav[_ngcontent-%COMP%] {\n  background-color: #23758E;\n  min-height: 40px;\n  display: flex;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.44);\n  align-items: center;\n  padding-left: 35px;\n  color: white;\n  font-family: Arial;\n  justify-content: space-between;\n}\nnav[_ngcontent-%COMP%]   .header-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nnav[_ngcontent-%COMP%]   .header-navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\nnav[_ngcontent-%COMP%]   .header-navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px;\n  padding-left: 10px;\n}\nnav[_ngcontent-%COMP%]   .header-navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nnav[_ngcontent-%COMP%]   .header-navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\nnav[_ngcontent-%COMP%]   .header-shopping-cart[_ngcontent-%COMP%] {\n  margin-right: 25px;\n  display: flex;\n  align-items: center;\n}\nnav[_ngcontent-%COMP%]   .header-shopping-cart[_ngcontent-%COMP%]   .loggedUser[_ngcontent-%COMP%] {\n  margin-right: 25px;\n}\nnav[_ngcontent-%COMP%]   .header-shopping-cart[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 50px;\n  display: flex;\n  justify-content: space-around;\n  text-decoration: none;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHlCQ0VZO0VERFosZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFBSjtBQUNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFBUTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBRVo7QUFEWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUdoQjtBQUZnQjtFQUNJLGlCQUFBO0FBSXBCO0FBRmdCO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FBSXBCO0FBQ0k7RUFDSSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBQUFSO0FBQ1E7RUFDSSxrQkFBQTtBQUNaO0FBRVE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBQVoiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi9jb2xvcnMuc2Nzcyc7XHJcbm5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1ibHVlLWQ7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQ0KTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAuaGVhZGVyLW5hdmlnYXRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhlYWRlci1zaG9wcGluZy1jYXJ0IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgLy8gLy8gZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLmxvZ2dlZFVzZXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIC8vIC8vIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJHByaW1hcnktcGluazogI2Q4MWI2MDtcclxuJHByaW1hcnktcGluay1sOiNmZjVjOGQ7XHJcbiRwcmltYXJ5LXBpbmstZDojYTAwMDM3O1xyXG4kcHJpbWFyeS1ibHVlOiMzMWJiZDY7XHJcbiRwcmltYXJ5LWJsdWUtZDojMjM3NThFO1xyXG4kcHJpbWFyeS10ZXh0OiMyMTIxMjE7XHJcbiRwcmltYXJ5LWNvbG9yLWw6I0IzRTVGQztcclxuJHByaW1hcnktYnRuOiMxOGY3Zjc7XHJcbiRwcmltYXJ5LWJ0bi1ob3ZlcjojNGRkM2VlO1xyXG4kc3VibWl0LWJ0bjojMThmN2Y3O1xyXG4kc3VibWl0LWJ0bi1ob3ZlcjojNGRkM2VlO1xyXG4kc2Vjb25kYXJ5LXRleHQ6Izc1NzU3NTtcclxuJGJvZHk6I2M2ZGJmMDsiXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [{
            type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "jQhb":
    /*!*******************************************!*\
      !*** ./src/shared/actions/user-action.ts ***!
      \*******************************************/

    /*! exports provided: AddUser, ConnectUser, ShowUser, DelUser, LogOffUser */

    /***/
    function jQhb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddUser", function () {
        return AddUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectUser", function () {
        return ConnectUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowUser", function () {
        return ShowUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DelUser", function () {
        return DelUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogOffUser", function () {
        return LogOffUser;
      });

      var AddUser = function AddUser(payload) {
        _classCallCheck(this, AddUser);

        this.payload = payload;
      };

      AddUser.type = '[User] Add';

      var ConnectUser = function ConnectUser(payload) {
        _classCallCheck(this, ConnectUser);

        this.payload = payload;
      };

      ConnectUser.type = '[User] Log';

      var ShowUser = function ShowUser(payload) {
        _classCallCheck(this, ShowUser);

        this.payload = payload;
      };

      ShowUser.type = '[User] Show';

      var DelUser = function DelUser(payload) {
        _classCallCheck(this, DelUser);

        this.payload = payload;
      };

      DelUser.type = '[User] Del';

      var LogOffUser = function LogOffUser(payload) {
        _classCallCheck(this, LogOffUser);

        this.payload = payload;
      };

      LogOffUser.type = '[User] LogOff';
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var appRoutes = [{
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
      }, {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
      }, {
        path: 'account',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | user-account-user-account-module */
          [__webpack_require__.e("default~catalog-catalog-module~user-account-user-account-module"), __webpack_require__.e("user-account-user-account-module")]).then(__webpack_require__.bind(null,
          /*! ./user-account/user-account.module */
          "MCpj")).then(function (m) {
            return m.UserAccountModule;
          });
        }
      }, {
        path: 'products',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | catalog-catalog-module */
          [__webpack_require__.e("default~catalog-catalog-module~user-account-user-account-module"), __webpack_require__.e("default~catalog-catalog-module~shopping-cart-shopping-cart-module"), __webpack_require__.e("catalog-catalog-module")]).then(__webpack_require__.bind(null,
          /*! ./catalog/catalog.module */
          "6J3s")).then(function (m) {
            return m.CatalogModule;
          });
        }
      }, {
        path: 'products/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | product-detail-product-detail-module */
          "product-detail-product-detail-module").then(__webpack_require__.bind(null,
          /*! ./product-detail/product-detail.module */
          "6hUG")).then(function (m) {
            return m.ProductDetailModule;
          });
        }
      }, {
        path: 'cart',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | shopping-cart-shopping-cart-module */
          [__webpack_require__.e("default~catalog-catalog-module~shopping-cart-shopping-cart-module"), __webpack_require__.e("shopping-cart-shopping-cart-module")]).then(__webpack_require__.bind(null,
          /*! ./shopping-cart/shopping-cart.module */
          "d32p")).then(function (m) {
            return m.ShoppingCartModule;
          });
        }
      }, {
        path: '**',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
              relativeLinkResolution: 'legacy'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "xNjB":
    /*!***********************************!*\
      !*** ./src/shared/models/User.ts ***!
      \***********************************/

    /*! exports provided: User */

    /***/
    function xNjB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var User = function User() {// this.firstname = firstname;
        // this.lastname = lastname;
        // this.address = address;
        // this.zipcode = zipcode;
        // this.city = city;
        // this.gender = gender;
        // this.mail = mail;
        // this.password = password;
        // this.login = login;
        // this.country = country;

        _classCallCheck(this, User);
      };
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
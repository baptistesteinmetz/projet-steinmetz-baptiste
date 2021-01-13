(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~catalog-catalog-module~shopping-cart-shopping-cart-module"], {
    /***/
    "C03f":
    /*!***************************************************************!*\
      !*** ./src/app/shopping-cart/shopping-cart-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: ShoppingCartRoutingModule */

    /***/
    function C03f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShoppingCartRoutingModule", function () {
        return ShoppingCartRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shopping_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shopping-cart.component */
      "evYj");

      var routes = [{
        path: '',
        component: _shopping_cart_component__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartComponent"]
      }, {
        path: 'products',
        component: _shopping_cart_component__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartComponent"]
      }];

      var ShoppingCartRoutingModule = function ShoppingCartRoutingModule() {
        _classCallCheck(this, ShoppingCartRoutingModule);
      };

      ShoppingCartRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ShoppingCartRoutingModule
      });
      ShoppingCartRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ShoppingCartRoutingModule_Factory(t) {
          return new (t || ShoppingCartRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShoppingCartRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingCartRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "d32p":
    /*!*******************************************************!*\
      !*** ./src/app/shopping-cart/shopping-cart.module.ts ***!
      \*******************************************************/

    /*! exports provided: ShoppingCartModule */

    /***/
    function d32p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShoppingCartModule", function () {
        return ShoppingCartModule;
      });
      /* harmony import */


      var _shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shopping-cart-routing.module */
      "C03f");
      /* harmony import */


      var _shopping_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shopping-cart.component */
      "evYj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var ShoppingCartModule = function ShoppingCartModule() {
        _classCallCheck(this, ShoppingCartModule);
      };

      ShoppingCartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: ShoppingCartModule
      });
      ShoppingCartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function ShoppingCartModule_Factory(t) {
          return new (t || ShoppingCartModule)();
        },
        providers: [],
        imports: [[// AppModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], // NgxsModule,
        // NgxsModule.forRoot([
        //   ProductState
        // ]),
        _shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ShoppingCartModule, {
          declarations: [_shopping_cart_component__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartComponent"]],
          imports: [// AppModule,
          _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], // NgxsModule,
          // NgxsModule.forRoot([
          //   ProductState
          // ]),
          _shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartRoutingModule"]],
          exports: [_shopping_cart_component__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ShoppingCartModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_shopping_cart_component__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartComponent"]],
            imports: [// AppModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], // NgxsModule,
            // NgxsModule.forRoot([
            //   ProductState
            // ]),
            _shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartRoutingModule"]],
            providers: [],
            exports: [_shopping_cart_component__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "evYj":
    /*!**********************************************************!*\
      !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
      \**********************************************************/

    /*! exports provided: ShoppingCartComponent */

    /***/
    function evYj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function () {
        return ShoppingCartComponent;
      });
      /* harmony import */


      var _shared_actions_product_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../shared/actions/product-action */
      "7LLL");
      /* harmony import */


      var _shared_states_product_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../shared/states/product-state */
      "VMwI");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _get_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../get-products.service */
      "garz");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngxs/store */
      "AcyG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ShoppingCartComponent_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Your cart is empty... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ShoppingCartComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShoppingCartComponent_div_28_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);

            var item_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r4.onClickRemove(item_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "../../assets/img/", item_r3.src, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r3.price, "\u20AC");
        }
      }

      function ShoppingCartComponent_div_30_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Purchasing items...");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ShoppingCartComponent_div_30_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Items purchased for ", ctx_r7.responseMessage, "\u20AC");
        }
      }

      function ShoppingCartComponent_div_30_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r8.responseMessage);
        }
      }

      function ShoppingCartComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShoppingCartComponent_div_30_div_1_Template, 4, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ShoppingCartComponent_div_30_div_2_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ShoppingCartComponent_div_30_div_3_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.bought && !ctx_r2.errorBuying);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.bought);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.errorBuying);
        }
      }

      var ShoppingCartComponent = /*#__PURE__*/function () {
        function ShoppingCartComponent(productService, router, _renderer, _elemRef, store) {
          _classCallCheck(this, ShoppingCartComponent);

          this.productService = productService;
          this.router = router;
          this._renderer = _renderer;
          this._elemRef = _elemRef;
          this.store = store; // @HostBinding('class.homeLogo') isHome:boolean = false;

          this.empty = true;
          this.buying = false;
          this.bought = false;
          this.errorBuying = false;
          this.responseMessage = null; // i want different styles depending on the route, since the shopping cart is shown on the store page (like amazon)

          if (this.router.url == '/cart') {
            this._renderer.setAttribute(this._elemRef.nativeElement, 'id', 'shopping-cart-page');
          }
        }

        _createClass(ShoppingCartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.listProduct$ = this.store.select(function (state) {
              return state.listProducts.products;
            }); // Solution 1

            this.nbProducts$ = this.store.select(_shared_states_product_state__WEBPACK_IMPORTED_MODULE_1__["ProductState"].getNbProducts);
            this.priceProducts$ = this.store.select(_shared_states_product_state__WEBPACK_IMPORTED_MODULE_1__["ProductState"].getFullPriceProducts);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "onClickRemove",
          value: function onClickRemove(product) {
            this.removeItem(product);
          }
        }, {
          key: "removeItem",
          value: function removeItem(product) {
            this.store.dispatch(new _shared_actions_product_action__WEBPACK_IMPORTED_MODULE_0__["DelProduct"](product));
          }
        }, {
          key: "buyProducts",
          value: function buyProducts(products) {
            var _this = this;

            products.subscribe(function (products) {
              return _this.products = products;
            });
            this.buying = true;
            this.productService.buyProducts(this.products).subscribe(function (response) {
              if (response.success) {
                _this.bought = true;

                _this.store.dispatch(new _shared_actions_product_action__WEBPACK_IMPORTED_MODULE_0__["BuyProduct"](products));
              } else {
                _this.errorBuying = true;
              }

              _this.responseMessage = response.data;
            });
            var timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(3000);
            timer$.subscribe(function (t) {
              _this.buying = false;
            });
          }
        }]);

        return ShoppingCartComponent;
      }();

      ShoppingCartComponent.ɵfac = function ShoppingCartComponent_Factory(t) {
        return new (t || ShoppingCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_get_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"]));
      };

      ShoppingCartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: ShoppingCartComponent,
        selectors: [["app-shopping-cart"]],
        decls: 31,
        vars: 22,
        consts: [[1, "cart-content"], [1, "cart-title"], ["aria-hidden", "true", 1, "fa", "fa-shopping-cart"], [1, "cart-list"], [4, "ngIf"], [1, "cart-product-list", "cart-container"], [1, "cart-page-recap"], [1, "cart-recap-info"], [3, "disabled", "click"], [1, "cart-product-list"], ["class", "cart-product", 4, "ngFor", "ngForOf"], ["class", "shopping-cart-buying", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-frown-o", "smiley-face"], [1, "cart-product"], [1, "cart-product-img"], [1, "product-img", 3, "src"], [1, "cart-product-info"], [1, "cart-product-actions"], [1, "btn-delete", 3, "click"], [1, "fa", "fa-trash"], [1, "shopping-cart-buying"], [1, "fa", "fa-spin", "fa-spinner"]],
        template: function ShoppingCartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Your Cart ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ShoppingCartComponent_span_6_Template, 3, 0, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Recap");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShoppingCartComponent_Template_button_click_24_listener() {
              return ctx.buyProducts(ctx.listProduct$);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Go to checkout");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, ShoppingCartComponent_div_28_Template, 11, 3, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, ShoppingCartComponent_div_30_Template, 4, 3, "div", 11);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 8, ctx.nbProducts$));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Total products : ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 10, ctx.nbProducts$), " | Price : ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 12, ctx.priceProducts$), "\u20AC");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total products : ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 14, ctx.nbProducts$), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total amount : ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 16, ctx.priceProducts$), "\u20AC ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 18, ctx.nbProducts$));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 20, ctx.listProduct$));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.buying);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%] {\n  font-family: Arial;\n  width: 100%;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 35px;\n  box-shadow: -25px 0px 45px -5px rgba(200, 204, 181, 0.59);\n  border-radius: 5px;\n  transition: 0.3s all ease-in-out;\n  background-color: white;\n  min-height: 200px;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]   h1.cart-title[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #8080808f;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]   .cart-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  margin-top: 15px;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]   .cart-list[_ngcontent-%COMP%]   .smiley-face[_ngcontent-%COMP%] {\n  color: #ffa726;\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .cart-product-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .cart-product-list[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 5px;\n}\n[_nghost-%COMP%]   .cart-product-list[_ngcontent-%COMP%]   .cart-page-recap[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   .cart-product-list[_ngcontent-%COMP%]   .cart-product[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 5px;\n  border-top: 1px dashed #bbabab;\n  padding-top: 10px;\n}\n[_nghost-%COMP%]   .cart-product-list[_ngcontent-%COMP%]   .cart-product[_ngcontent-%COMP%]   .cart-product-img[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  max-height: 100px;\n}\n[_nghost-%COMP%]   .cart-product-list[_ngcontent-%COMP%]   .cart-product[_ngcontent-%COMP%]   .cart-product-info[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  padding-left: 5px;\n  flex-direction: column;\n  justify-content: space-around;\n}\n[_nghost-%COMP%]   .cart-product-list[_ngcontent-%COMP%]   .cart-product[_ngcontent-%COMP%]   .cart-product-info[_ngcontent-%COMP%]   .cart-product-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n[_nghost-%COMP%]   .cart-product-list[_ngcontent-%COMP%]   .cart-product[_ngcontent-%COMP%]   .cart-product-info[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n}\n#shopping-cart-page[_nghost-%COMP%] {\n  width: 100%;\n}\n#shopping-cart-page[_nghost-%COMP%]   .cart-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n}\n#shopping-cart-page[_nghost-%COMP%]   .cart-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: none;\n}\n#shopping-cart-page[_nghost-%COMP%]   .cart-container[_ngcontent-%COMP%]   .cart-page-recap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n  padding: 10px;\n  box-shadow: -25px 0px 45px -5px rgba(200, 204, 181, 0.59);\n  height: 100%;\n  border-radius: 5px;\n}\n#shopping-cart-page[_nghost-%COMP%]   .cart-container[_ngcontent-%COMP%]   .cart-page-recap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding: 5px;\n  text-align: center;\n  border-bottom: 2px solid #b7acacc4;\n}\n#shopping-cart-page[_nghost-%COMP%]   .cart-container[_ngcontent-%COMP%]   .cart-page-recap[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n#shopping-cart-page[_nghost-%COMP%]   .cart-container[_ngcontent-%COMP%]   .cart-page-recap[_ngcontent-%COMP%]   .cart-recap-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n#shopping-cart-page[_nghost-%COMP%]   .cart-container[_ngcontent-%COMP%]   .cart-page-recap[_ngcontent-%COMP%]   .cart-recap-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  padding: 10px;\n  background: #e3e5e6;\n  margin-top: 40px;\n}\n#shopping-cart-page[_nghost-%COMP%]   .cart-product-info[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  padding: 20px;\n}\n#shopping-cart-page[_nghost-%COMP%]   .cart-product-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n#shopping-cart-page[_nghost-%COMP%]   .cart-product-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 200px;\n}\n#shopping-cart-page[_nghost-%COMP%]   .shopping-cart-buying[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 200px;\n  max-height: 100px !important;\n  min-height: 100px !important;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNob3BwaW5nLWNhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EseURBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUVSO0FBRFE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0NBQUE7QUFHWjtBQURRO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUdaO0FBRlk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFJaEI7QUFDSTtFQUNJLFdBQUE7QUFDUjtBQUFRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBRVo7QUFBUTtFQUNJLGFBQUE7QUFFWjtBQUFRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFFWjtBQUFnQjtFQUNJLGlCQUFBO0FBRXBCO0FBQ1k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUNoQjtBQUFnQjtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBRXBCO0FBQWdCO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDcEI7QUFNQTtFQUNJLFdBQUE7QUFISjtBQUlJO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0FBRlI7QUFHUTtFQUNJLGFBQUE7QUFEWjtBQUdRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx5REFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURaO0FBRVk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQUFoQjtBQUVZO0VBQ0ksV0FBQTtBQUFoQjtBQUVZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBQWhCO0FBQ2dCO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLGdCQUFBO0FBQXBCO0FBS0k7RUFDSSw4QkFBQTtFQUNBLGFBQUE7QUFIUjtBQUlRO0VBQ0ksaUJBQUE7QUFGWjtBQUtJO0VBQ0ksaUJBQUE7QUFIUjtBQWFJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0FBWFIiLCJmaWxlIjoic2hvcHBpbmctY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgJj5kaXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nOiAzNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IC0yNXB4IDBweCA0NXB4IC01cHggcmdiYSgyMDAsIDIwNCwgMTgxLCAwLjU5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgaDEuY2FydC10aXRsZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODA4MDgwOGY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJ0LWxpc3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgLnNtaWxleS1mYWNlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZhNzI2O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAvLyBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FydC1wcm9kdWN0LWxpc3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICY+cCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FydC1wYWdlLXJlY2FwIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcnQtcHJvZHVjdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgI2JiYWJhYjtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIC5jYXJ0LXByb2R1Y3QtaW1nIHtcclxuICAgICAgICAgICAgICAgIC5wcm9kdWN0LWltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNhcnQtcHJvZHVjdC1pbmZvIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgLmNhcnQtcHJvZHVjdC1hY3Rpb25zIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYnRuLWRlbGV0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdCNzaG9wcGluZy1jYXJ0LXBhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAuY2FydC1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FydC1wYWdlLXJlY2FwIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogLTI1cHggMHB4IDQ1cHggLTVweCByZ2JhKDIwMCwgMjA0LCAxODEsIDAuNTkpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiN2FjYWNjNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jYXJ0LXJlY2FwLWluZm8ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlM2U1ZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FydC1wcm9kdWN0LWluZm8ge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcnQtcHJvZHVjdC1pbWcgaW1nIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuICAgIC8vIGRpdiB7XHJcbiAgICAvLyAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XHJcbiAgICAvLyAgICAgcCB7XHJcbiAgICAvLyAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8vICAgICAgICAgLy8gZm9udC1zaXplOiA1NXB4O1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC5zaG9wcGluZy1jYXJ0LWJ1eWluZyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwcHghaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ShoppingCartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'app-shopping-cart',
            templateUrl: './shopping-cart.component.html',
            styleUrls: ['./shopping-cart.component.scss']
          }]
        }], function () {
          return [{
            type: _get_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "garz":
    /*!*****************************************!*\
      !*** ./src/app/get-products.service.ts ***!
      \*****************************************/

    /*! exports provided: ProductService */

    /***/
    function garz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductService", function () {
        return ProductService;
      });
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./api.service */
      "yTNM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ProductService = /*#__PURE__*/function (_api_service__WEBPACK) {
        _inherits(ProductService, _api_service__WEBPACK);

        var _super = _createSuper(ProductService);

        function ProductService(hClient) {
          var _this2;

          _classCallCheck(this, ProductService);

          _this2 = _super.call(this, hClient);
          _this2.hClient = hClient;
          _this2.filteredProducts$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
          return _this2;
        }

        _createClass(ProductService, [{
          key: "getProducts",
          value: function getProducts() {
            var _this3 = this;

            // return cached products
            if (this.products) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.products);
            } // fetch and cache products


            return this.hClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/product/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              _this3.products = data.data;

              _this3.filteredProducts$.next(_this3.products);
            }));
          }
        }, {
          key: "getSearchResults",
          value: function getSearchResults() {
            return this.filteredProducts$.asObservable();
          }
        }, {
          key: "searchProduct",
          value: function searchProduct(searchTerm) {
            var _this4 = this;

            return this.getProducts().pipe( // using tap to update the stream without changing any data
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (products) {
              products = products.filter(function (product) {
                if (!isNaN(parseFloat(searchTerm))) {
                  return product.price.toString().includes(searchTerm.toString());
                } else {
                  return product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
                }
              }); // updating the stream

              _this4.filteredProducts$.next(products);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
              return void 0;
            }));
          }
        }, {
          key: "getSingleProduct",
          value: function getSingleProduct(id) {
            var _this5 = this;

            return this.hClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/product/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              _this5.products = data[0];
            }));
          }
        }, {
          key: "priceFilter",
          value: function priceFilter(status) {
            var _this6 = this;

            return this.getProducts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (products) {
              products = products.sort(function (a, b) {
                switch (status) {
                  case 0:
                    return a.price < b.price ? -1 : 1;
                    break;

                  case 1:
                    return a.price > b.price ? -1 : 1;
                    break;
                }
              });

              _this6.filteredProducts$.next(products);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
              return void 0;
            }));
          }
        }, {
          key: "nameFilter",
          value: function nameFilter(status) {
            var _this7 = this;

            return this.getProducts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (products) {
              products = products.sort(function (a, b) {
                switch (status) {
                  case 0:
                    return a.name < b.name ? -1 : 1;
                    break;

                  case 1:
                    return a.name > b.name ? -1 : 1;
                    break;
                }
              });

              _this7.filteredProducts$.next(products);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
              return void 0;
            }));
          }
        }, {
          key: "buyProducts",
          value: function buyProducts(products) {
            var body = new URLSearchParams();
            var price = 0;
            products.forEach(function (product) {
              price += product.price;
            });
            body.set("price", price.toString());
            return this.hClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/product/buy', body.toString(), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              return data;
            }));
          }
        }]);

        return ProductService;
      }(_api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]);

      ProductService.ɵfac = function ProductService_Factory(t) {
        return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
      };

      ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ProductService,
        factory: ProductService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~catalog-catalog-module~shopping-cart-shopping-cart-module-es5.js.map
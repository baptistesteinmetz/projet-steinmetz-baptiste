(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-detail-product-detail-module"], {
    /***/
    "6hUG":
    /*!*********************************************************!*\
      !*** ./src/app/product-detail/product-detail.module.ts ***!
      \*********************************************************/

    /*! exports provided: ProductDetailModule */

    /***/
    function hUG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDetailModule", function () {
        return ProductDetailModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-detail-routing.module */
      "jdiR");
      /* harmony import */


      var _product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./product-detail.component */
      "vR3N");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var ProductDetailModule = function ProductDetailModule() {
        _classCallCheck(this, ProductDetailModule);
      };

      ProductDetailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: ProductDetailModule
      });
      ProductDetailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function ProductDetailModule_Factory(t) {
          return new (t || ProductDetailModule)();
        },
        providers: [],
        imports: [[// NgxsModule,
        // NgxsModule.forRoot([
        //   ProductState
        // ]),
        // RouterModule.forRoot(appRoutes),
        // AppModule
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProductDetailRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProductDetailModule, {
          declarations: [_product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"]],
          imports: [// NgxsModule,
          // NgxsModule.forRoot([
          //   ProductState
          // ]),
          // RouterModule.forRoot(appRoutes),
          // AppModule
          _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProductDetailRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ProductDetailModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            declarations: [_product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"]],
            imports: [// NgxsModule,
            // NgxsModule.forRoot([
            //   ProductState
            // ]),
            // RouterModule.forRoot(appRoutes),
            // AppModule
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProductDetailRoutingModule"]],
            providers: []
          }]
        }], null, null);
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
          var _this;

          _classCallCheck(this, ProductService);

          _this = _super.call(this, hClient);
          _this.hClient = hClient;
          _this.filteredProducts$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
          return _this;
        }

        _createClass(ProductService, [{
          key: "getProducts",
          value: function getProducts() {
            var _this2 = this;

            // return cached products
            if (this.products) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.products);
            } // fetch and cache products


            return this.hClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/product/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              _this2.products = data.data;

              _this2.filteredProducts$.next(_this2.products);
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
            var _this3 = this;

            return this.getProducts().pipe( // using tap to update the stream without changing any data
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (products) {
              products = products.filter(function (product) {
                if (!isNaN(parseFloat(searchTerm))) {
                  return product.price.toString().includes(searchTerm.toString());
                } else {
                  return product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
                }
              }); // updating the stream

              _this3.filteredProducts$.next(products);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
              return void 0;
            }));
          }
        }, {
          key: "getSingleProduct",
          value: function getSingleProduct(id) {
            var _this4 = this;

            return this.hClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + '/product/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              _this4.products = data[0];
            }));
          }
        }, {
          key: "priceFilter",
          value: function priceFilter(status) {
            var _this5 = this;

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

              _this5.filteredProducts$.next(products);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
              return void 0;
            }));
          }
        }, {
          key: "nameFilter",
          value: function nameFilter(status) {
            var _this6 = this;

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

              _this6.filteredProducts$.next(products);
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

    },

    /***/
    "jdiR":
    /*!*****************************************************************!*\
      !*** ./src/app/product-detail/product-detail-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ProductDetailRoutingModule */

    /***/
    function jdiR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDetailRoutingModule", function () {
        return ProductDetailRoutingModule;
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


      var _product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./product-detail.component */
      "vR3N");

      var routes = [{
        path: '',
        component: _product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"]
      }];

      var ProductDetailRoutingModule = function ProductDetailRoutingModule() {
        _classCallCheck(this, ProductDetailRoutingModule);
      };

      ProductDetailRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProductDetailRoutingModule
      });
      ProductDetailRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProductDetailRoutingModule_Factory(t) {
          return new (t || ProductDetailRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductDetailRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailRoutingModule, [{
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
    "vR3N":
    /*!************************************************************!*\
      !*** ./src/app/product-detail/product-detail.component.ts ***!
      \************************************************************/

    /*! exports provided: ProductDetailComponent */

    /***/
    function vR3N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function () {
        return ProductDetailComponent;
      });
      /* harmony import */


      var _shared_actions_product_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../shared/actions/product-action */
      "7LLL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _get_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../get-products.service */
      "garz");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngxs/store */
      "AcyG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProductDetailComponent_section_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Price: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Descrition: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Release date: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductDetailComponent_section_0_Template_button_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r1.onClickAdd(ctx_r1.singleProduct);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Add to cart ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Go to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstylePropInterpolate1"]("box-shadow", "-5px 0px 10px 2px ", ctx_r0.singleProduct == null ? null : ctx_r0.singleProduct.primary_color, "99");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "../assets/img/", ctx_r0.singleProduct == null ? null : ctx_r0.singleProduct.src, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.singleProduct == null ? null : ctx_r0.singleProduct.name, " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.singleProduct == null ? null : ctx_r0.singleProduct.platform);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.singleProduct == null ? null : ctx_r0.singleProduct.price, "\u20AC");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.singleProduct == null ? null : ctx_r0.singleProduct.description, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.singleProduct == null ? null : ctx_r0.singleProduct.release_date, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx_r0.singleProduct == null ? null : ctx_r0.singleProduct.secondary_color);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx_r0.singleProduct == null ? null : ctx_r0.singleProduct.primary_color);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx_r0.singleProduct == null ? null : ctx_r0.singleProduct.primary_color);
        }
      }

      var ProductDetailComponent = /*#__PURE__*/function () {
        function ProductDetailComponent(productService, route, router, store) {
          _classCallCheck(this, ProductDetailComponent);

          this.productService = productService;
          this.route = route;
          this.router = router;
          this.store = store;
          this.loaded = false;
        }

        _createClass(ProductDetailComponent, [{
          key: "onClickAdd",
          value: function onClickAdd(product) {
            this.addProduct(product);
          }
        }, {
          key: "addProduct",
          value: function addProduct(product) {
            this.store.dispatch(new _shared_actions_product_action__WEBPACK_IMPORTED_MODULE_0__["AddProduct"](product));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            var id = this.route.snapshot.params.id;
            this.product$ = this.productService.getSingleProduct(id);
            this.productService.getSingleProduct(id).subscribe(function (product) {
              _this7.loaded = true;
              _this7.singleProduct = product.data;
            });
          }
        }]);

        return ProductDetailComponent;
      }();

      ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) {
        return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_get_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]));
      };

      ProductDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProductDetailComponent,
        selectors: [["app-product-detail"]],
        decls: 1,
        vars: 1,
        consts: [["class", "detail-product", 3, "boxShadow", 4, "ngIf"], [1, "detail-product"], [1, "detail-img"], [1, "product-img", 3, "src"], [1, "detail-info"], [1, "detail-info-main"], [1, "info-price", "info"], [1, "info-dynamic"], [1, "info-desc", "info"], [1, "info-date", "info"], [1, "info-action"], [1, "product-buy-btn", "btn-product", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-cart-plus"], [1, "info-action-route"], ["routerLink", "/products", 1, "btn-product"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], ["routerLink", "/cart", 1, "btn-product"], ["aria-hidden", "true", 1, "fa", "fa-arrow-right"]],
        template: function ProductDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProductDetailComponent_section_0_Template, 37, 15, "section", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loaded);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  font-family: Arial;\n}\n[_nghost-%COMP%]   .detail-product[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n  padding: 20px;\n  margin: 20px;\n  border-radius: 2px;\n}\n[_nghost-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-img[_ngcontent-%COMP%] {\n  width: 30%;\n  padding: 5px;\n  border-radius: 5px;\n}\n[_nghost-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%] {\n  width: 70%;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n[_nghost-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n}\n[_nghost-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-dynamic[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font-weight: normal;\n}\n[_nghost-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-action[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n[_nghost-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  margin-right: 5px;\n}\n[_nghost-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 2px;\n}\n[_nghost-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .btn-product[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: black;\n  align-self: end;\n  padding: 8px;\n  border: 0;\n  cursor: pointer;\n  opacity: 0.9;\n  border-radius: 3px;\n  transition: 0.5s all ease-in-out;\n}\n[_nghost-%COMP%]   .detail-product[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .btn-product[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQURRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUdaO0FBRlk7RUFDSSxXQUFBO0FBSWhCO0FBRFE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBR1o7QUFGWTtFQUNJLGlCQUFBO0FBSWhCO0FBSGdCO0VBQ0ksbUJBQUE7QUFLcEI7QUFGWTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUloQjtBQUhnQjtFQUNJLGlCQUFBO0FBS3BCO0FBSGdCO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQUtwQjtBQUZZO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFJaEI7QUFGWTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUFJaEI7QUFIZ0I7RUFDSSxXQUFBO0FBS3BCO0FBRlk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUloQjtBQUhnQjtFQUNJLFVBQUE7QUFLcEIiLCJmaWxlIjoicHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIC5kZXRhaWwtcHJvZHVjdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAuZGV0YWlsLWltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRldGFpbC1pbmZvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAmIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmluZm8tZHluYW1pYyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5mby1hY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4tcHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-product-detail',
            templateUrl: './product-detail.component.html',
            styleUrls: ['./product-detail.component.scss']
          }]
        }], function () {
          return [{
            type: _get_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "yTNM":
    /*!********************************!*\
      !*** ./src/app/api.service.ts ***!
      \********************************/

    /*! exports provided: ApiService */

    /***/
    function yTNM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded'
            })
          };
        }

        _createClass(ApiService, [{
          key: "setJWT",
          value: function setJWT() {
            this.httpOptions.headers.append('Authorization', "Bearer ".concat(this.tokenParse));
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=product-detail-product-detail-module-es5.js.map
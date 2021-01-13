(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catalog-catalog-module"],{

/***/ "5+sH":
/*!****************************************************************!*\
  !*** ./src/app/catalog/product-list/product-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _shared_actions_product_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/actions/product-action */ "7LLL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _get_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../get-products.service */ "garz");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "AcyG");







function ProductListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
function ProductListComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseover", function ProductListComponent_div_5_div_1_Template_div_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r4.hover = true; })("mouseleave", function ProductListComponent_div_5_div_1_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r6.hover = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductListComponent_div_5_div_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r7.onClickAdd(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Add to cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", item_r3.primary_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r3.name, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r3.price, "\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "../../assets/img/", item_r3.src, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", item_r3.secondary_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c0, item_r3.idProduct));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", item_r3.secondary_color);
} }
const _c1 = function (a0) { return { "product-list-display": a0 }; };
function ProductListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProductListComponent_div_5_div_1_Template, 18, 13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, ctx_r1.loaded));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx_r1.products));
} }
class ProductListComponent {
    constructor(productService, store) {
        this.productService = productService;
        this.store = store;
        this.stateHide = 'inactive';
        this.loaded = true;
    }
    hideCart(event) {
        let switchState = this.stateHide;
        switchState == 'active' ? switchState = 'inactive' : switchState = 'active';
        let timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1);
        timer$.subscribe(t => {
            this.stateHide = switchState;
        });
    }
    onClickAdd(product) {
        this.addProduct(product);
    }
    addProduct(product) {
        this.store.dispatch(new _shared_actions_product_action__WEBPACK_IMPORTED_MODULE_1__["AddProduct"](product));
    }
    ngOnInit() {
        if (!this.products) {
            this.products = this.productService.getSearchResults();
        }
        else {
            this.products = this.productService.getProducts();
        }
    }
    ngOnDestroy() {
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_get_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["app-product-list"]], decls: 10, vars: 3, consts: [["id", "section-product-cart"], ["id", "section-product-list"], ["class", "product-loading", 4, "ngIf"], ["id", "product-list", 3, "ngClass", 4, "ngIf"], ["id", "section-cart-list"], [1, "product-list-shop"], [1, "hide-cart", 3, "click"], [1, "product-loading"], [1, "fa", "fa-spin", "fa-spinner"], ["id", "product-list", 3, "ngClass"], ["class", "product", 3, "mouseover", "mouseleave", 4, "ngFor", "ngForOf"], [1, "product", 3, "mouseover", "mouseleave"], [1, "product-header"], [1, "product-header-title"], [1, "product-price"], [1, "product-header-img"], [1, "product-img", 3, "src"], [1, "product-separator"], [1, "product-info"], [1, "product-sec-info"], [1, "product-action"], [1, "product-info-btn", "btn-product", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-info"], [1, "product-buy-btn", "btn-product", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-cart-plus"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-search-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "[products]=\"products |async\">\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ProductListComponent_div_4_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ProductListComponent_div_5_Template, 3, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductListComponent_Template_div_click_8_listener($event) { return ctx.hideCart($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "app-shopping-cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@hide", ctx.stateHide);
    } }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 20px;\n}\n\n#section-product-cart[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n}\n\n#section-product-list[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.product-loading[_ngcontent-%COMP%] {\n  margin: 50px 0;\n  height: 10em;\n  width: 80%;\n  display: flex;\n  justify-content: center;\n}\n\n.product-loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #4ca2b1;\n}\n\n#product-list[_ngcontent-%COMP%] {\n  display: flex;\n  transition: all 1s ease-in;\n  opacity: 0;\n  flex-wrap: wrap;\n}\n\n#section-cart-list[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.product-list-display[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n}\n\n.product[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-radius: 5px;\n  width: 350px;\n  min-width: 200px;\n  max-height: 450px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n.product[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.product[_ngcontent-%COMP%]   .product-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.product[_ngcontent-%COMP%]   .product-header[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  margin: 10px;\n}\n\n.product[_ngcontent-%COMP%]   .product-header-img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.product[_ngcontent-%COMP%]   .product-header-img[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: inherit;\n}\n\n.product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n}\n\n.product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-action[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-action[_ngcontent-%COMP%]   .btn-product[_ngcontent-%COMP%] {\n  color: black;\n  align-self: end;\n  padding: 8px;\n  margin: 5px;\n  border: 0;\n  cursor: pointer;\n  opacity: 0.9;\n  border-radius: 3px;\n  transition: 0.5s all ease-in-out;\n}\n\n.product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-action[_ngcontent-%COMP%]   .btn-product[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.product[_ngcontent-%COMP%]   .product-header-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-style: bold;\n  border-radius: 5px 5px 0px 0px;\n  margin-bottom: 5px;\n  height: 40px;\n  max-height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0px 3px 15px 0px rgba(173, 169, 163, 0.56);\n}\n\n.product[_ngcontent-%COMP%]   .product-separator[_ngcontent-%COMP%] {\n  width: 90%;\n  border-bottom: 1.5px solid gray;\n  margin: 10px;\n}\n\n.product[_ngcontent-%COMP%]   .product-sec-info[_ngcontent-%COMP%] {\n  padding: 0 10px 10px;\n}\n\n#section-cart-list[_ngcontent-%COMP%] {\n  display: flex;\n  transition: 0.5s all ease-in-out;\n}\n\n#section-cart-list[_ngcontent-%COMP%]   .product-list-shop[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n#section-cart-list[_ngcontent-%COMP%]   .hide-cart[_ngcontent-%COMP%] {\n  z-index: -10000;\n  margin: 0;\n  position: absolute;\n  top: 10em;\n  left: -20px;\n  cursor: pointer;\n  color: #b9adada8;\n  transition: 0.5s all ease-in-out;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: #b9b9c3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#section-cart-list[_ngcontent-%COMP%]   .hide-cart[_ngcontent-%COMP%]:hover {\n  color: #b5b5b5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFDSTtFQUNJLGNBQUE7QUFDUjs7QUFHQTtFQUNJLGFBQUE7RUFDQSwwQkFBQTtFQUVBLFVBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxVQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtBQURKOztBQUlBO0VBQ0kseUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxREFBQTtFQUNBLHdFQUFBO0FBREo7O0FBRUk7RUFDSSw0RUFBQTtBQUFSOztBQUVJO0VBQ0ksV0FBQTtBQUFSOztBQUNRO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBQ1o7O0FBRUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFBUjs7QUFDUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBQ1o7O0FBRUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0FBQVI7O0FBQ1E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFDWjs7QUFBWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBRWhCOztBQURnQjtFQUNJLFlBQUE7QUFHcEI7O0FBRUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0RBQUE7QUFBUjs7QUFFSTtFQUNJLFVBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUFBUjs7QUFFSTtFQUVJLG9CQUFBO0FBRFI7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsZ0NBQUE7QUFGSjs7QUFHSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBRFI7O0FBR0k7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRFI7O0FBRVE7RUFDSSxjQUFBO0FBQVoiLCJmaWxlIjoicHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi9jb2xvcnMuc2Nzcyc7XHJcbjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4jc2VjdGlvbi1wcm9kdWN0LWNhcnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuI3NlY3Rpb24tcHJvZHVjdC1saXN0IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWxvYWRpbmcge1xyXG4gICAgbWFyZ2luOiA1MHB4IDA7XHJcbiAgICBoZWlnaHQ6IDEwZW07XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICM0Y2EyYjE7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNwcm9kdWN0LWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluO1xyXG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuI3NlY3Rpb24tY2FydC1saXN0IHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWxpc3QtZGlzcGxheSB7XHJcbiAgICBvcGFjaXR5OiAxIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByb2R1Y3Qge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0LWhlYWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLnByb2R1Y3QtcHJpY2Uge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByb2R1Y3QtaGVhZGVyLWltZyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAucHJvZHVjdC1pbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdC1pbmZvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAucHJvZHVjdC1hY3Rpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIC5idG4tcHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByb2R1Y3QtaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggMHB4IHJnYmEoMTczLCAxNjksIDE2MywgMC41Nik7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdC1zZXBhcmF0b3Ige1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgZ3JheTtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdC1zZWMtaW5mbyB7XHJcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHggMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuI3NlY3Rpb24tY2FydC1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlLWluLW91dDtcclxuICAgIC5wcm9kdWN0LWxpc3Qtc2hvcCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmhpZGUtY2FydCB7XHJcbiAgICAgICAgei1pbmRleDogLTEwMDAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMGVtO1xyXG4gICAgICAgIGxlZnQ6IC0yMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogI2I5YWRhZGE4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2I5YjljMztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYjViNWI1O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('hide', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translateX(80%)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translateX(0%)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('800ms ease-in')),
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-product-list',
                templateUrl: './product-list.component.html',
                styleUrls: ['./product-list.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('hide', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transform: 'translateX(80%)'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transform: 'translateX(0%)'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('800ms ease-in')),
                    ])
                ]
            }]
    }], function () { return [{ type: _get_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();


/***/ }),

/***/ "6J3s":
/*!*******************************************!*\
  !*** ./src/app/catalog/catalog.module.ts ***!
  \*******************************************/
/*! exports provided: CatalogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogModule", function() { return CatalogModule; });
/* harmony import */ var _catalog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalog-routing.module */ "He+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shopping_cart_shopping_cart_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping-cart/shopping-cart.module */ "d32p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _get_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../get-products.service */ "garz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "Raet");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-list/product-list.component */ "5+sH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shopping-cart/shopping-cart.component */ "evYj");












class CatalogModule {
}
CatalogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CatalogModule });
CatalogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function CatalogModule_Factory(t) { return new (t || CatalogModule)(); }, providers: [_get_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]], imports: [[
            // AppModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _catalog_routing_module__WEBPACK_IMPORTED_MODULE_0__["CatalogRoutingModule"],
            _shopping_cart_shopping_cart_module__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CatalogModule, { declarations: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__["ProductListComponent"],
        _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__["SearchBarComponent"]], imports: [
        // AppModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _catalog_routing_module__WEBPACK_IMPORTED_MODULE_0__["CatalogRoutingModule"],
        _shopping_cart_shopping_cart_module__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CatalogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__["ProductListComponent"],
                    _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__["SearchBarComponent"],
                ],
                imports: [
                    // AppModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _catalog_routing_module__WEBPACK_IMPORTED_MODULE_0__["CatalogRoutingModule"],
                    _shopping_cart_shopping_cart_module__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartModule"],
                ],
                providers: [_get_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]],
                bootstrap: []
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetComponentScope"](_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__["ProductListComponent"], [_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__["SearchBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_9__["ShoppingCartComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"]]);


/***/ }),

/***/ "He+R":
/*!***************************************************!*\
  !*** ./src/app/catalog/catalog-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CatalogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogRoutingModule", function() { return CatalogRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list/product-list.component */ "5+sH");





const routes = [
    {
        path: '',
        component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"]
    }
];
class CatalogRoutingModule {
}
CatalogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CatalogRoutingModule });
CatalogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CatalogRoutingModule_Factory(t) { return new (t || CatalogRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CatalogRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Raet":
/*!************************************************************!*\
  !*** ./src/app/catalog/search-bar/search-bar.component.ts ***!
  \************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _get_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../get-products.service */ "garz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function () { return { standalone: true }; };
const _c1 = function (a0, a1, a2) { return { "fa-arrow-up": a0, "fa-arrow-down": a1, "": a2 }; };
const _c2 = function (a0, a1, a2) { return { "fa-sort-alpha-desc": a0, "fa-sort-alpha-asc": a1, "": a2 }; };
class SearchBarComponent {
    constructor(productService) {
        this.productService = productService;
    }
    ngOnInit() {
        // get products
        this.productService.getProducts().subscribe();
        this.searchInput = '';
        this.filterPriceStatus = 1;
    }
    onSearchProducts() {
        // on input change we search products and update the view
        this.productService.searchProduct(this.searchInput.toLowerCase()).subscribe();
    }
    onFilterPriceProducts() {
        // changing status and updating depending on price
        this.filterNameStatus = null;
        this.filterPriceStatus === 1 ? this.filterPriceStatus = 0 : this.filterPriceStatus = 1;
        this.productService.priceFilter(this.filterPriceStatus).subscribe();
    }
    onFilterNameProducts() {
        this.filterPriceStatus = null;
        // changing status and updating depending on name;
        this.filterNameStatus === 1 ? this.filterNameStatus = 0 : this.filterNameStatus = 1;
        this.productService.nameFilter(this.filterNameStatus).subscribe();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_get_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], inputs: { products: "products" }, decls: 11, vars: 13, consts: [[1, "form-search-bar"], ["id", "search-bar"], ["type", "text", "placeholder", "Search by Name, Price, Description...", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "btn-filter", "btn-price", 3, "click"], ["aria-hidden", "true", 1, "fa", 3, "ngClass"], [1, "btn-filter", "btn-name", 3, "click"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_2_listener($event) { return ctx.searchInput = $event; })("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_2_listener() { return ctx.onSearchProducts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchBarComponent_Template_button_click_3_listener() { return ctx.onFilterPriceProducts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sort by price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchBarComponent_Template_button_click_7_listener() { return ctx.onFilterNameProducts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Filter by name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchInput)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c1, ctx.filterPriceStatus === 1, ctx.filterPriceStatus === 0, !ctx.filterPriceStatus));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](9, _c2, ctx.filterNameStatus === 1, ctx.filterNameStatus === 0, !ctx.filterNameStatus));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".form-search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.form-search-bar[_ngcontent-%COMP%]   #search-bar[_ngcontent-%COMP%] {\n  width: 40%;\n  border: 2px solid #b9adad;\n  border-radius: 4px;\n  margin: 0.25rem;\n  min-width: 125px;\n  padding: 0.5rem;\n  transition: border-color 0.5s ease-out;\n}\n.form-search-bar[_ngcontent-%COMP%]   #search-bar[_ngcontent-%COMP%]:hover {\n  border: 2px solid #4d4848;\n}\n.form-search-bar[_ngcontent-%COMP%]   #search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.btn-filter[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: none;\n  position: relative;\n  background: #18f7f7;\n  border-radius: 5px;\n  margin: 5px;\n  height: 35px;\n  transition: all ease-out 1s;\n  width: 12em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.btn-filter[_ngcontent-%COMP%]:hover {\n  background: #4dd3ee;\n}\n.btn-filter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  color: #8781a2cf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUNJO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUFBUjtBQUNRO0VBQ0kseUJBQUE7QUFDWjtBQUNRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBQ1o7QUFJQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkNyQlM7RURzQlQsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREo7QUFFSTtFQUNJLG1CQzlCVztBRDhCbkI7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLGdCQUFBO0FBSFIiLCJmaWxlIjoic2VhcmNoLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vY29sb3JzLnNjc3MnO1xyXG4uZm9ybS1zZWFyY2gtYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgI3NlYXJjaC1iYXIge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2I5YWRhZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgLy8gLy8gZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbjogMC4yNXJlbTtcclxuICAgICAgICBtaW4td2lkdGg6IDEyNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC41cyBlYXNlLW91dDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzRkNDg0ODtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLWZpbHRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1idG47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLW91dCAxcztcclxuICAgIHdpZHRoOiAxMmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWJ0bi1ob3ZlcjtcclxuICAgIH1cclxuICAgIC5idG4tcHJpY2Uge31cclxuICAgIC5idG4tbmFtZSB7fVxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIC8vIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBjb2xvcjogIzg3ODFhMmNmO1xyXG4gICAgfVxyXG59IiwiJHByaW1hcnktcGluazogI2Q4MWI2MDtcclxuJHByaW1hcnktcGluay1sOiNmZjVjOGQ7XHJcbiRwcmltYXJ5LXBpbmstZDojYTAwMDM3O1xyXG4kcHJpbWFyeS1ibHVlOiMzMWJiZDY7XHJcbiRwcmltYXJ5LWJsdWUtZDojMjM3NThFO1xyXG4kcHJpbWFyeS10ZXh0OiMyMTIxMjE7XHJcbiRwcmltYXJ5LWNvbG9yLWw6I0IzRTVGQztcclxuJHByaW1hcnktYnRuOiMxOGY3Zjc7XHJcbiRwcmltYXJ5LWJ0bi1ob3ZlcjojNGRkM2VlO1xyXG4kc3VibWl0LWJ0bjojMThmN2Y3O1xyXG4kc3VibWl0LWJ0bi1ob3ZlcjojNGRkM2VlO1xyXG4kc2Vjb25kYXJ5LXRleHQ6Izc1NzU3NTtcclxuJGJvZHk6I2M2ZGJmMDsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-bar',
                templateUrl: './search-bar.component.html',
                styleUrls: ['./search-bar.component.scss']
            }]
    }], function () { return [{ type: _get_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }]; }, { products: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=catalog-catalog-module-es2015.js.map
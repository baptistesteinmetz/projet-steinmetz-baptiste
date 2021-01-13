(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-account-user-account-module"],{

/***/ "5cnw":
/*!*******************************************************!*\
  !*** ./src/app/user-account/recap/recap.component.ts ***!
  \*******************************************************/
/*! exports provided: PhonePipe, CodePipe, RecapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePipe", function() { return PhonePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodePipe", function() { return CodePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecapComponent", function() { return RecapComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_actions_user_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/actions/user-action */ "jQhb");
/* harmony import */ var _shared_states_user_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/states/user-state */ "AwXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/models/User */ "xNjB");
/* harmony import */ var src_app_customvalidators_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/customvalidators.validator */ "8Fl1");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../user.service */ "xdv0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _customdirectives_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../customdirectives.directive */ "DYnj");












function RecapComponent_div_0_div_5_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u2642 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_div_5_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u2640 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_div_5_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u26A7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_div_5_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "callcode");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx_r8.user.country), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, ctx_r8.user.phone), "");
} }
function RecapComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, RecapComponent_div_0_div_5_span_4_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, RecapComponent_div_0_div_5_span_5_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, RecapComponent_div_0_div_5_span_6_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, RecapComponent_div_0_div_5_p_15_Template, 4, 6, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r1.user.firstname, " ", ctx_r1.user.lastname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.user.gender == "Man");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.user.gender == "Woman");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.user.gender == "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.user.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.user.mail);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"]("", ctx_r1.user.address, ", ", ctx_r1.user.city, ", ", ctx_r1.user.zipcode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.user.phone);
} }
function RecapComponent_div_0_form_6_div_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_form_6_div_6_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Must be a valid name format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_form_6_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RecapComponent_div_0_form_6_div_6_span_1_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RecapComponent_div_0_form_6_div_6_span_2_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.f.lastname.errors && ctx_r9.f.lastname.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.f.lastname.errors.pattern);
} }
function RecapComponent_div_0_form_6_div_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_form_6_div_11_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Must be a valid name format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_form_6_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RecapComponent_div_0_form_6_div_11_span_1_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RecapComponent_div_0_form_6_div_11_span_2_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.f.firstname.errors && ctx_r10.f.firstname.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.f.firstname.errors.pattern);
} }
function RecapComponent_div_0_form_6_div_22_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_form_6_div_22_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Must be a valid name format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_form_6_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RecapComponent_div_0_form_6_div_22_span_1_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RecapComponent_div_0_form_6_div_22_span_2_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.f.firstname.errors && ctx_r11.f.firstname.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.f.firstname.errors.pattern);
} }
function RecapComponent_div_0_form_6_div_28_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_form_6_div_28_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Must be a valid city format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_form_6_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RecapComponent_div_0_form_6_div_28_span_1_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RecapComponent_div_0_form_6_div_28_span_2_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.f.city.errors && ctx_r12.f.city.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.f.city.errors.pattern);
} }
function RecapComponent_div_0_form_6_div_33_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_form_6_div_33_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Must be a valid zipcode format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_form_6_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RecapComponent_div_0_form_6_div_33_span_1_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RecapComponent_div_0_form_6_div_33_span_2_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.f.zipcode.errors && ctx_r13.f.zipcode.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.f.zipcode.errors.pattern);
} }
function RecapComponent_div_0_form_6_div_38_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_form_6_div_38_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Must be a valid address format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_form_6_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RecapComponent_div_0_form_6_div_38_span_1_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RecapComponent_div_0_form_6_div_38_span_2_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r14.f.address.errors && ctx_r14.f.address.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r14.f.address.errors.pattern);
} }
function RecapComponent_div_0_form_6_div_53_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_form_6_div_53_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Must be a valid phone format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_form_6_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RecapComponent_div_0_form_6_div_53_span_1_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RecapComponent_div_0_form_6_div_53_span_2_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r15.f.phone.errors && ctx_r15.f.phone.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r15.f.phone.errors.pattern);
} }
function RecapComponent_div_0_form_6_div_59_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_form_6_div_59_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Must be a valid login format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_form_6_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RecapComponent_div_0_form_6_div_59_span_1_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RecapComponent_div_0_form_6_div_59_span_2_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r16.f.login.errors && ctx_r16.f.login.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r16.f.login.errors.pattern);
} }
function RecapComponent_div_0_form_6_div_64_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_form_6_div_64_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Must be a valid mail format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_form_6_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RecapComponent_div_0_form_6_div_64_span_1_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RecapComponent_div_0_form_6_div_64_span_2_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.f.mail.errors && ctx_r17.f.mail.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.f.mail.errors.pattern);
} }
function RecapComponent_div_0_form_6_div_69_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_form_6_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RecapComponent_div_0_form_6_div_69_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r18.f.password.errors && ctx_r18.f.password.errors.required);
} }
function RecapComponent_div_0_form_6_div_74_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Confirmation password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_form_6_div_74_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Passwords should match");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_form_6_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RecapComponent_div_0_form_6_div_74_span_1_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RecapComponent_div_0_form_6_div_74_span_2_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r19.f.confirmPassword && ctx_r19.f.confirmPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r19.f.confirmPassword.errors.mustMatch);
} }
function RecapComponent_div_0_form_6_button_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r20.form.valid);
} }
function RecapComponent_div_0_form_6_button_78_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RecapComponent_div_0_form_6_button_78_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r45.return(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Return ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_form_6_i_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 50);
} }
function RecapComponent_div_0_form_6_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r23.errorMessage, "");
} }
function RecapComponent_div_0_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RecapComponent_div_0_form_6_Template_form_ngSubmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r47.modifyUser($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Lastname:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RecapComponent_div_0_form_6_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r49.user.lastname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, RecapComponent_div_0_form_6_div_6_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Firstname:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RecapComponent_div_0_form_6_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r50.user.firstname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, RecapComponent_div_0_form_6_div_11_Template, 3, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Gender:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RecapComponent_div_0_form_6_Template_select_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r51.user.gender = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "F");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, RecapComponent_div_0_form_6_div_22_Template, 3, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "City:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RecapComponent_div_0_form_6_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r52.user.city = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, RecapComponent_div_0_form_6_div_28_Template, 3, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Zipcode (5 char):");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RecapComponent_div_0_form_6_Template_input_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r53.user.zipcode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, RecapComponent_div_0_form_6_div_33_Template, 3, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RecapComponent_div_0_form_6_Template_input_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r54.user.address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, RecapComponent_div_0_form_6_div_38_Template, 3, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Phone number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RecapComponent_div_0_form_6_Template_select_ngModelChange_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r55.user.country = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "fr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "en");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "us");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "gr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RecapComponent_div_0_form_6_Template_input_ngModelChange_52_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r56.user.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, RecapComponent_div_0_form_6_div_53_Template, 3, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Login :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RecapComponent_div_0_form_6_Template_input_ngModelChange_58_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r57.user.login = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, RecapComponent_div_0_form_6_div_59_Template, 3, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Mail :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RecapComponent_div_0_form_6_Template_input_ngModelChange_63_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r58.user.mail = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, RecapComponent_div_0_form_6_div_64_Template, 3, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RecapComponent_div_0_form_6_Template_input_ngModelChange_68_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r59.user.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, RecapComponent_div_0_form_6_div_69_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Confirm password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](74, RecapComponent_div_0_form_6_div_74_Template, 3, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](77, RecapComponent_div_0_form_6_button_77_Template, 2, 1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](78, RecapComponent_div_0_form_6_button_78_Template, 2, 0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](79, RecapComponent_div_0_form_6_i_79_Template, 1, 0, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](80, RecapComponent_div_0_form_6_div_80_Template, 3, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.user.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ccErrorInput", !ctx_r2.isValidInput("lastname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.user.firstname);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isValidInput("firstname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.user.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isValidInput("firstname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.user.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isValidInput("city"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.user.zipcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isValidInput("zipcode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.user.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isValidInput("address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.user.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.user.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isValidInput("phone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.user.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isValidInput("login"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.user.mail);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isValidInput("mail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.user.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isValidInput("password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isValidInput("confirmPassword"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.waiting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.waiting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.waiting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.errorSignIn);
} }
function RecapComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RecapComponent_div_0_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r60.onLogOff(ctx_r60.user); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Log Off ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RecapComponent_div_0_div_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r61); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r62.onModifyAccount(ctx_r62.user); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Update Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RecapComponent_div_0_div_8_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r61); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r63.onClickDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Delete account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RecapComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RecapComponent_div_0_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r64.onDelete(ctx_r64.user); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Confirm delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { "user-boy": a0, "user-girl": a1, "user-other": a2 }; };
function RecapComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, RecapComponent_div_0_div_5_Template, 16, 11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, RecapComponent_div_0_form_6_Template, 81, 27, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, RecapComponent_div_0_div_8_Template, 7, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, RecapComponent_div_0_div_9_Template, 3, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](6, _c0, ctx_r0.user.gender == "Man", ctx_r0.user.gender == "Woman", ctx_r0.user.gender == "Other"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Welcome ", ctx_r0.user.firstname, ", here's your account information!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.formModify);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.formModify);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.clickModify);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.clickDelete);
} }
class PhonePipe {
    transform(rawNum) {
        rawNum = rawNum.charAt(0) !== 0 ? rawNum.substring(1) : '' + rawNum.substring(1);
        let newStr = '';
        let i = 0;
        for (; i < Math.floor(rawNum.length / 2) - 1; i++) {
            newStr = newStr + rawNum.substr(i * 2, 2) + '-';
        }
        return newStr + rawNum.substr(i * 2);
    }
}
PhonePipe.ɵfac = function PhonePipe_Factory(t) { return new (t || PhonePipe)(); };
PhonePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefinePipe"]({ name: "phone", type: PhonePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PhonePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Pipe"],
        args: [{
                name: 'phone'
            }]
    }], null, null); })();
class CodePipe {
    transform(country) {
        switch (country) {
            case 'fr':
                return '+33';
                break;
            case 'en':
                return '+44';
                break;
            case 'gr':
                return '+49';
                break;
            case 'us':
                return '+1';
                break;
        }
    }
}
CodePipe.ɵfac = function CodePipe_Factory(t) { return new (t || CodePipe)(); };
CodePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefinePipe"]({ name: "callcode", type: CodePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CodePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Pipe"],
        args: [{
                name: 'callcode'
            }]
    }], null, null); })();
class RecapComponent {
    constructor(store, userService, fb) {
        this.store = store;
        this.userService = userService;
        this.fb = fb;
        this.user = new _shared_models_User__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.formValidate = false;
        this.formModify = false;
        this.clickModify = false;
        this.clickDelete = false;
        this.errorSignIn = false;
        this.errorMessage = null;
    }
    ngOnInit() {
        if (this.formValidate) {
            this.store.select(_shared_states_user_state__WEBPACK_IMPORTED_MODULE_2__["UserState"].getUser).subscribe((data) => { this.user = data; });
        }
    }
    // @Input () userName: string;
    onDelete(user) {
        this.userService.deleteUser(user).subscribe((response) => {
            if (response.success) {
                this.store.dispatch(new _shared_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["DelUser"](user));
                this.formValidate = false;
            }
        });
    }
    onLogOff(user) {
        this.userService.logOffUser(user).subscribe((response) => {
            if (response.success) {
                this.store.dispatch(new _shared_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["LogOffUser"](user));
                this.formValidate = false;
            }
        });
    }
    onModifyAccount(user) {
        this.initForm();
        this.formModify = true;
        this.clickModify = true;
    }
    onClickDelete() {
        this.clickDelete = true;
        this.clickModify = true;
    }
    initForm() {
        this.form = this.fb.group({
            firstname: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[A-Za-z]+$')
                ]],
            lastname: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[A-Za-z]+$')
                ]],
            city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            zipcode: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[0-9]+$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                ]
            ],
            phone: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[0-9]+$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                ]],
            address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            login: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            mail: [null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')
                ]
            ],
            gender: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            country: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            confirmPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        }, {
            validator: Object(src_app_customvalidators_validator__WEBPACK_IMPORTED_MODULE_5__["ComparePassword"])('password', 'confirmPassword')
        });
    }
    get f() {
        return this.form.controls;
    }
    isValidInput(fieldName) {
        return this.form.controls[fieldName].invalid &&
            (this.form.controls[fieldName].dirty || this.form.controls[fieldName].touched);
    }
    modifyUser(event) {
        event.preventDefault();
        this.clickModify = true;
        this.user.firstname = this.form.value.firstname;
        if (this.form.valid) {
            this.userService.updateUser(this.user).subscribe((response) => {
                if (response.success) {
                    this.store.dispatch(new _shared_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["AddUser"](response.data));
                    this.formValidate = true;
                    this.formModify = false;
                    this.clickModify = false;
                }
                else {
                }
            });
        }
    }
    return() {
        this.formModify = false;
        this.clickModify = false;
    }
}
RecapComponent.ɵfac = function RecapComponent_Factory(t) { return new (t || RecapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
RecapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RecapComponent, selectors: [["app-recap"]], inputs: { formValidate: "formValidate", formModify: "formModify" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "user-card", 3, "ngClass"], [1, "user-card-header"], ["class", "user-card-info", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "user-card-ok"], ["class", "user-btn-cnt", 4, "ngIf"], [1, "user-card-info"], [1, "user-card-address"], [3, "formGroup", "ngSubmit"], [1, "c-input"], [1, "c-input-one"], ["for", "lastname"], ["formControlName", "lastname", "type", "text", "id", "lastname", "name", "lastname", 3, "ngModel", "ngModelChange"], [4, "ccErrorInput"], ["for", "firstname"], ["type", "text", "formControlName", "firstname", "id", "firstname", "name", "firstname", 3, "ngModel", "ngModelChange"], ["for", "gender"], ["formControlName", "gender", "id", "gender", "name", "gender", 3, "ngModel", "ngModelChange"], ["value", "Man", "selected", ""], ["value", "Woman"], ["value", "Other"], ["for", "name"], ["formControlName", "city", "type", "text", "id", "city", "name", "namcitye", 3, "ngModel", "ngModelChange"], ["formControlName", "zipcode", "type", "text", "id", "zip", "name", "zip", "minlength", "5", "maxlength", "5", "size", "5", 3, "ngModel", "ngModelChange"], ["for", "address"], ["formControlName", "address", "type", "text", "id", "address", "name", "address", 3, "ngModel", "ngModelChange"], ["for", "phone"], ["formControlName", "country", "id", "country", "name", "country", 3, "ngModel", "ngModelChange"], ["value", "fr", "selected", ""], ["value", "en"], ["value", "us"], ["value", "gr"], ["formControlName", "phone", "type", "text", "id", "phone", "name", "phone", "maxlength", "10", 3, "ngModel", "ngModelChange"], [1, "separator"], ["for", "mail"], ["formControlName", "login", "type", "text", "id", "login", "name", "login", 3, "ngModel", "ngModelChange"], ["formControlName", "mail", "type", "text", "id", "mail", "name", "mail", 3, "ngModel", "ngModelChange"], ["for", "pass"], ["formControlName", "password", "type", "password", "id", "password", "name", "password", 3, "ngModel", "ngModelChange"], ["for", "confirm-pass"], ["type", "password", "id", "confirm-pass", "name", "confirm-pass", "formControlName", "confirmPassword", "required", ""], [1, "c-input", "btn-container"], ["class", "user-btn-btn", "type", "submit", "value", "Modifier", 3, "disabled", 4, "ngIf"], ["class", "user-btn-btn", "value", "Modifier", 3, "click", 4, "ngIf"], ["class", "fa fa-spin fa-spinner", "aria-hidden", "true", 4, "ngIf"], ["class", "err-input", 4, "ngIf"], [1, "err-input"], ["type", "submit", "value", "Modifier", 1, "user-btn-btn", 3, "disabled"], ["value", "Modifier", 1, "user-btn-btn", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-spin", "fa-spinner"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-circle"], [1, "user-btn-cnt"], ["value", "Logoff", 1, "user-btn-btn", 3, "click"], ["value", "Supprimer", 1, "user-btn-btn", 3, "click"]], template: function RecapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, RecapComponent_div_0_Template, 10, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.formValidate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _customdirectives_directive__WEBPACK_IMPORTED_MODULE_9__["ErrorInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"]], pipes: [CodePipe, PhonePipe], styles: ["[_nghost-%COMP%] {\n  min-height: 500px;\n}\n\n.user-boy[_ngcontent-%COMP%]   .user-card-header[_ngcontent-%COMP%], .user-boy[_ngcontent-%COMP%]   .user-card-ok[_ngcontent-%COMP%] {\n  background-color: #8cde85;\n  color: black;\n}\n\n.user-girl[_ngcontent-%COMP%]   .user-card-header[_ngcontent-%COMP%], .user-girl[_ngcontent-%COMP%]   .user-card-ok[_ngcontent-%COMP%] {\n  background-color: #de85c4;\n}\n\n.user-other[_ngcontent-%COMP%]   .user-card-header[_ngcontent-%COMP%], .user-other[_ngcontent-%COMP%]   .user-card-ok[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);\n}\n\n.user-card[_ngcontent-%COMP%] {\n  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  background: #FFF;\n  border-radius: 25px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: Arial, Helvetica, sans-serif;\n  min-width: 500px;\n  min-height: 500px;\n}\n\n.user-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.user-card[_ngcontent-%COMP%]   .c-input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.user-card[_ngcontent-%COMP%]   .c-input-one[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n  margin: 5px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.user-card[_ngcontent-%COMP%]   .c-input-one[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n\n.user-card[_ngcontent-%COMP%]   .c-input-one[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 5px 0x;\n}\n\n.user-card[_ngcontent-%COMP%]   .user-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  color: white;\n  font-family: Arial;\n  height: 3em;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  border-radius: 20px 20px 0 0;\n  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.user-card[_ngcontent-%COMP%]   .user-card-header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.user-card[_ngcontent-%COMP%]   .user-card-address[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.user-card[_ngcontent-%COMP%]   .user-card-address[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.user-card[_ngcontent-%COMP%]   .user-card-ok[_ngcontent-%COMP%] {\n  border-radius: 0 0 20px 20px;\n  height: 2em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.user-card[_ngcontent-%COMP%]   .user-card-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.user-card[_ngcontent-%COMP%]   .user-card-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 5px;\n  text-align: center;\n}\n\n.user-btn-cnt[_ngcontent-%COMP%], .btn-container[_ngcontent-%COMP%] {\n  margin: 20px auto;\n  display: flex;\n  justify-content: space-around;\n}\n\n.user-btn-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: none;\n  position: relative;\n  background: #18f7f7;\n  border-radius: 5px;\n  margin: 5px;\n  height: 35px;\n  transition: all ease-out 1s;\n  width: 12em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWNhcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7O0VBRUkseUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7O0VBRUkseUJBQUE7QUFDSjs7QUFFQTs7RUFFSSw2RkFBQTtBQUNKOztBQUVBO0VBRUkscURBQUE7RUFDQSx3RUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUNJO0VBQ0ksNEVBQUE7QUFDUjs7QUFDSTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtBQUFSOztBQUVJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSx5Q0FBQTtBQURSOztBQUVRO0VBQ0ksbUJBQUE7QUFBWjs7QUFFUTtFQUNJLGNBQUE7QUFBWjs7QUFHSTtFQUVJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxREFBQTtBQUZSOztBQUdRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFEWjs7QUFJSTtFQUNJLGFBQUE7QUFGUjs7QUFHUTtFQUNJLGtCQUFBO0FBRFo7O0FBSUk7RUFDSSw0QkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxREFBQTtBQUhSOztBQUtJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFIUjs7QUFJUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUZaOztBQU9BOztFQUVJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBSko7O0FBT0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFKSiIsImZpbGUiOiJyZWNhcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4udXNlci1ib3kgLnVzZXItY2FyZC1oZWFkZXIsXHJcbi51c2VyLWJveSAudXNlci1jYXJkLW9rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4Y2RlODU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi51c2VyLWdpcmwgLnVzZXItY2FyZC1oZWFkZXIsXHJcbi51c2VyLWdpcmwgLnVzZXItY2FyZC1vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGU4NWM0O1xyXG59XHJcblxyXG4udXNlci1vdGhlciAudXNlci1jYXJkLWhlYWRlcixcclxuLnVzZXItb3RoZXIgLnVzZXItY2FyZC1vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJlZCwgb3JhbmdlLCB5ZWxsb3csIGdyZWVuLCBibHVlLCBpbmRpZ28sIHZpb2xldCk7XHJcbn1cclxuXHJcbi51c2VyLWNhcmQge1xyXG4gICAgLy8gcGFkZGluZzogMzBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgbWluLXdpZHRoOiA1MDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuICAgIH1cclxuICAgIC5jLWlucHV0IHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjYzY1MzhjO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuICAgIC5jLWlucHV0LW9uZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAvLyBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51c2VyLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICAvLyBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgICAgIGhlaWdodDogM2VtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudXNlci1jYXJkLWFkZHJlc3Mge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgZGl2IHAge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnVzZXItY2FyZC1vayB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZGU4NWM0O1xyXG4gICAgICAgIGhlaWdodDogMmVtO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XHJcbiAgICB9XHJcbiAgICAudXNlci1jYXJkLWluZm8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBkaXYgcCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnVzZXItYnRuLWNudCxcclxuLmJ0bi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi51c2VyLWJ0bi1idG4ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogIzE4ZjdmNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2Utb3V0IDFzO1xyXG4gICAgd2lkdGg6IDEyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](RecapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-recap',
                templateUrl: './recap.component.html',
                styleUrls: ['./recap.component.scss']
            }]
    }], function () { return [{ type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }]; }, { formValidate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], formModify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();


/***/ }),

/***/ "6fNX":
/*!*******************************************************************!*\
  !*** ./src/app/user-account/header-form/header-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: HeaderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFormComponent", function() { return HeaderFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderFormComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderFormComponent.ɵfac = function HeaderFormComponent_Factory(t) { return new (t || HeaderFormComponent)(); };
HeaderFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderFormComponent, selectors: [["app-header-form"]], decls: 3, vars: 0, consts: [["id", "header"]], template: function HeaderFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#header[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0 0;\n  background-color: #31bbd6;\n}\n#header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  text-align: center;\n  padding: 10px;\n  color: white;\n  font-family: Arial;\n  height: 3em;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXItZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDRCQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUNJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBQ1IiLCJmaWxlIjoiaGVhZGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi9jb2xvcnMuc2Nzc1wiO1xyXG4jaGVhZGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1ibHVlO1xyXG4gICAgaDIge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICAgICAgaGVpZ2h0OiAzZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-form',
                templateUrl: './header-form.component.html',
                styleUrls: ['./header-form.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "78ep":
/*!*******************************************************************!*\
  !*** ./src/app/user-account/footer-form/footer-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer-form"]], decls: 1, vars: 0, consts: [["id", "footer-bar"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["#footer-bar[_ngcontent-%COMP%] {\n  height: 3em;\n  border-radius: 0 0 10px 10px;\n  background-color: #31bbd6;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#footer-bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  text-align: center;\n  padding: 10px;\n  color: white;\n  font-family: Arial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXItZm9ybS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLDRCQUFBO0VBQ0EseUJDRFU7RURFVixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFKO0FBQ0k7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ1IiLCJmaWxlIjoiZm9vdGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uLy4uL2NvbG9ycy5zY3NzJztcclxuI2Zvb3Rlci1iYXIge1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmx1ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgfVxyXG59IiwiJHByaW1hcnktcGluazogI2Q4MWI2MDtcclxuJHByaW1hcnktcGluay1sOiNmZjVjOGQ7XHJcbiRwcmltYXJ5LXBpbmstZDojYTAwMDM3O1xyXG4kcHJpbWFyeS1ibHVlOiMzMWJiZDY7XHJcbiRwcmltYXJ5LWJsdWUtZDojMjM3NThFO1xyXG4kcHJpbWFyeS10ZXh0OiMyMTIxMjE7XHJcbiRwcmltYXJ5LWNvbG9yLWw6I0IzRTVGQztcclxuJHByaW1hcnktYnRuOiMxOGY3Zjc7XHJcbiRwcmltYXJ5LWJ0bi1ob3ZlcjojNGRkM2VlO1xyXG4kc3VibWl0LWJ0bjojMThmN2Y3O1xyXG4kc3VibWl0LWJ0bi1ob3ZlcjojNGRkM2VlO1xyXG4kc2Vjb25kYXJ5LXRleHQ6Izc1NzU3NTtcclxuJGJvZHk6I2M2ZGJmMDsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer-form',
                templateUrl: './footer-form.component.html',
                styleUrls: ['./footer-form.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "7jn9":
/*!*****************************************************!*\
  !*** ./src/app/user-account/form/form.component.ts ***!
  \*****************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _shared_states_user_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/states/user-state */ "AwXK");
/* harmony import */ var _shared_actions_user_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/actions/user-action */ "jQhb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _customvalidators_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../customvalidators.validator */ "8Fl1");
/* harmony import */ var _shared_models_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/models/User */ "xNjB");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../user.service */ "xdv0");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs/store */ "AcyG");











function FormComponent_div_1_div_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_div_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Must be a valid name format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FormComponent_div_1_div_8_span_1_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FormComponent_div_1_div_8_span_2_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.f.lastname.errors && ctx_r3.f.lastname.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.f.lastname.errors.pattern);
} }
function FormComponent_div_1_div_13_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_div_13_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Must be a valid name format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FormComponent_div_1_div_13_span_1_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FormComponent_div_1_div_13_span_2_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.f.firstname.errors && ctx_r4.f.firstname.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.f.firstname.errors.pattern);
} }
function FormComponent_div_1_div_24_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_div_24_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Must be a valid name format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FormComponent_div_1_div_24_span_1_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FormComponent_div_1_div_24_span_2_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.f.firstname.errors && ctx_r5.f.firstname.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.f.firstname.errors.pattern);
} }
function FormComponent_div_1_div_30_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_div_30_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Must be a valid city format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FormComponent_div_1_div_30_span_1_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FormComponent_div_1_div_30_span_2_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.f.city.errors && ctx_r6.f.city.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.f.city.errors.pattern);
} }
function FormComponent_div_1_div_35_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_div_35_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Must be a valid zipcode format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FormComponent_div_1_div_35_span_1_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FormComponent_div_1_div_35_span_2_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.f.zipcode.errors && ctx_r7.f.zipcode.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.f.zipcode.errors.pattern);
} }
function FormComponent_div_1_div_40_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_div_40_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Must be a valid address format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FormComponent_div_1_div_40_span_1_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FormComponent_div_1_div_40_span_2_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.f.address.errors && ctx_r8.f.address.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.f.address.errors.pattern);
} }
function FormComponent_div_1_div_55_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_div_55_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Must be a valid phone format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FormComponent_div_1_div_55_span_1_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FormComponent_div_1_div_55_span_2_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.f.phone.errors && ctx_r9.f.phone.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.f.phone.errors.pattern);
} }
function FormComponent_div_1_div_61_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_div_61_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Must be a valid login format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FormComponent_div_1_div_61_span_1_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FormComponent_div_1_div_61_span_2_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.f.login.errors && ctx_r10.f.login.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.f.login.errors.pattern);
} }
function FormComponent_div_1_div_66_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_div_66_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Must be a valid mail format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FormComponent_div_1_div_66_span_1_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FormComponent_div_1_div_66_span_2_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.f.mail.errors && ctx_r11.f.mail.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.f.mail.errors.pattern);
} }
function FormComponent_div_1_div_71_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FormComponent_div_1_div_71_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.f.password.errors && ctx_r12.f.password.errors.required);
} }
function FormComponent_div_1_div_76_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Confirmation password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_div_76_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Passwords should match");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FormComponent_div_1_div_76_span_1_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FormComponent_div_1_div_76_span_2_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r13.f.confirmPassword && ctx_r13.f.confirmPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.f.confirmPassword.errors.mustMatch);
} }
function FormComponent_div_1_button_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r14.form.valid);
} }
function FormComponent_div_1_i_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 45);
} }
function FormComponent_div_1_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r16.errorMessage, "");
} }
function FormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("formValidate", function FormComponent_div_1_Template_div_formValidate_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r38.formValidate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-header-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function FormComponent_div_1_Template_form_ngSubmit_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r40.onSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Lastname:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormComponent_div_1_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r41.user.lastname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, FormComponent_div_1_div_8_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Firstname:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormComponent_div_1_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r42.user.firstname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, FormComponent_div_1_div_13_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Gender:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormComponent_div_1_Template_select_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r43.user.gender = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "F");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, FormComponent_div_1_div_24_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "City:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormComponent_div_1_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r44.user.city = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, FormComponent_div_1_div_30_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Zipcode (5 char):");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormComponent_div_1_Template_input_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r45.user.zipcode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, FormComponent_div_1_div_35_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormComponent_div_1_Template_input_ngModelChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r46.user.address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, FormComponent_div_1_div_40_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Phone number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormComponent_div_1_Template_select_ngModelChange_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r47.user.country = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "fr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "en");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "us");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "gr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormComponent_div_1_Template_input_ngModelChange_54_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r48.user.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, FormComponent_div_1_div_55_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Login :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormComponent_div_1_Template_input_ngModelChange_60_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r49.user.login = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, FormComponent_div_1_div_61_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Mail :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormComponent_div_1_Template_input_ngModelChange_65_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r50.user.mail = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, FormComponent_div_1_div_66_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormComponent_div_1_Template_input_ngModelChange_70_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r51.user.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, FormComponent_div_1_div_71_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Confirm password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, FormComponent_div_1_div_76_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](79, FormComponent_div_1_button_79_Template, 2, 1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](80, FormComponent_div_1_i_80_Template, 1, 0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "app-footer-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](82, FormComponent_div_1_div_82_Template, 3, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.user.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ccErrorInput", !ctx_r0.isValidInput("lastname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.user.firstname);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isValidInput("firstname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.user.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isValidInput("firstname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.user.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isValidInput("city"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.user.zipcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isValidInput("zipcode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.user.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isValidInput("address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.user.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.user.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isValidInput("phone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.user.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isValidInput("login"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.user.mail);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isValidInput("mail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.user.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isValidInput("password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isValidInput("confirmPassword"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.waiting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.waiting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.errorSignIn);
} }
function FormComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FormComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-recap", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formValidate", ctx_r2.formValidate);
} }
class FormComponent {
    // @Input() userName: string = this.user.firstname;
    constructor(fb, userService, userstore) {
        this.fb = fb;
        this.userService = userService;
        this.userstore = userstore;
        this.user = new _shared_models_User__WEBPACK_IMPORTED_MODULE_6__["User"]();
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.formValidate = false;
        this.formModify = false;
        this.errorSignIn = false;
        this.errorMessage = null;
        this.waiting = false;
        this.userTab = [];
        this.logged = new _shared_models_User__WEBPACK_IMPORTED_MODULE_6__["User"]();
        // this.user.gender = 'Man';
        // this.user.country = 'fr';
        // this.user.firstname = 'Baptiste';
        // this.user.lastname = 'Steinmetz';
        // this.user.mail = 'baptiste@mail.mail';
        // this.user.phone = '0619735555';
        // this.user.login = 'baptiste67';
        // this.user.password = 'baptiste';
        // this.user.address = '1 rue saint léon';
        // this.user.zipcode = '67700';
        // this.user.city = 'saverne';
    }
    ngOnInit() {
        this.initForm();
        // don't want another route, the account should always lead to current user once he has submitted form
        this.userstore.select(_shared_states_user_state__WEBPACK_IMPORTED_MODULE_0__["UserState"].getUser).subscribe((data) => {
            if (JSON.stringify(data) !== JSON.stringify({})) {
                this.formValidate = true;
            }
            if (!data)
                this.formValidate = false;
        });
    }
    initForm() {
        this.form = this.fb.group({
            firstname: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[A-Za-z]+$')
                ]],
            lastname: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[A-Za-z]+$')
                ]],
            city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            zipcode: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ]
            ],
            phone: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ]],
            address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            login: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            mail: [null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')
                ]
            ],
            gender: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            country: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            confirmPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        }, {
            validator: Object(_customvalidators_validator__WEBPACK_IMPORTED_MODULE_5__["ComparePassword"])('password', 'confirmPassword')
        });
    }
    get f() {
        return this.form.controls;
    }
    isValidInput(fieldName) {
        return this.form.controls[fieldName].invalid &&
            (this.form.controls[fieldName].dirty || this.form.controls[fieldName].touched);
    }
    onSubmit(event) {
        event.preventDefault();
        this.waiting = true;
        this.user.firstname = this.form.value.firstname;
        if (this.form.valid) {
            this.userService.addUser(this.user).subscribe((response) => {
                if (response.success) {
                    this.userstore.dispatch(new _shared_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["AddUser"](response.data));
                    this.formValidate = true;
                    this.waiting = false;
                }
                else {
                    this.waiting = false;
                    this.errorSignIn = true;
                    this.errorMessage = response.data;
                }
            });
        }
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_8__["Store"])); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], hostAttrs: ["id", "component-form"], decls: 4, vars: 3, consts: [["id", "section-main"], ["id", "section-form", 3, "formValidate", 4, "ngIf"], ["id", "section-log-in", 4, "ngIf"], ["id", "section-recap", 4, "ngIf"], ["id", "section-form", 3, "formValidate"], [3, "formGroup", "ngSubmit"], [1, "c-input"], [1, "c-input-one"], ["for", "lastname"], ["formControlName", "lastname", "type", "text", "id", "lastname", "name", "lastname", 3, "ngModel", "ngModelChange"], [4, "ccErrorInput"], ["for", "firstname"], ["type", "text", "formControlName", "firstname", "id", "firstname", "name", "firstname", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["for", "gender"], ["formControlName", "gender", "id", "gender", "name", "gender", 3, "ngModel", "ngModelChange"], ["value", "Man", "selected", ""], ["value", "Woman"], ["value", "Other"], ["for", "name"], ["formControlName", "city", "type", "text", "id", "city", "name", "namcitye", 3, "ngModel", "ngModelChange"], ["formControlName", "zipcode", "type", "text", "id", "zip", "name", "zip", "minlength", "5", "maxlength", "5", "size", "5", 3, "ngModel", "ngModelChange"], ["for", "address"], ["formControlName", "address", "type", "text", "id", "address", "name", "address", 3, "ngModel", "ngModelChange"], ["for", "phone"], ["formControlName", "country", "id", "country", "name", "country", 3, "ngModel", "ngModelChange"], ["value", "fr", "selected", ""], ["value", "en"], ["value", "us"], ["value", "gr"], ["formControlName", "phone", "type", "text", "id", "phone", "name", "phone", "maxlength", "10", 3, "ngModel", "ngModelChange"], [1, "separator"], ["for", "mail"], ["formControlName", "login", "type", "text", "id", "login", "name", "login", 3, "ngModel", "ngModelChange"], ["formControlName", "mail", "type", "text", "id", "mail", "name", "mail", 3, "ngModel", "ngModelChange"], ["for", "pass"], ["formControlName", "password", "type", "password", "id", "password", "name", "password", 3, "ngModel", "ngModelChange"], ["for", "confirm-pass"], ["type", "password", "id", "confirm-pass", "name", "confirm-pass", "formControlName", "confirmPassword", "required", ""], [1, "c-input", "btn-container"], ["type", "submit", "class", "validate", "value", "Valider", 3, "disabled", 4, "ngIf"], ["class", "fa fa-spin fa-spinner", "aria-hidden", "true", 4, "ngIf"], ["class", "err-input", 4, "ngIf"], [1, "err-input"], ["type", "submit", "value", "Valider", 1, "validate", 3, "disabled"], ["aria-hidden", "true", 1, "fa", "fa-spin", "fa-spinner"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-circle"], ["id", "section-log-in"], ["id", "section-recap"], [3, "formValidate"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FormComponent_div_1_Template, 83, 26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FormComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, FormComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.formValidate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.formValidate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.formValidate);
    } }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n#section-main[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n#section-main[_ngcontent-%COMP%]   #section-form[_ngcontent-%COMP%] {\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  margin-top: 50px;\n  border-radius: 10px;\n  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  background: #FFF;\n  width: 500px;\n}\n\n#section-main[_ngcontent-%COMP%]   #section-form[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n#section-main[_ngcontent-%COMP%]   .err-input[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n}\n\n.c-input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.c-input-one[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n  margin: 5px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.c-input-one[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n\n.c-input-one[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 5px 0x;\n}\n\n.btn-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  margin: 20px;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBSUU7RUFDRSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEscURBQUE7RUFDQSx3RUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUhKOztBQUtJO0VBQ0UsNEVBQUE7QUFITjs7QUFpQkU7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFmSjs7QUFvQkE7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSx5Q0FDQTtBQXBCRjs7QUFxQkU7RUFDRSxtQkFBQTtBQW5CSjs7QUFxQkU7RUFDRSxjQUFBO0FBbkJKOztBQXVCQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBcEJGIiwiZmlsZSI6ImZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFzZS1jb2xvcjogI2M2NTM4YztcclxuJGJvcmRlci1kYXJrOiByZ2JhKCRiYXNlLWNvbG9yLCAwLjg4KTtcclxuXHJcbjpob3N0IHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI3NlY3Rpb24tbWFpbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAjc2VjdGlvbi1mb3JtIHtcclxuICAgIGhlaWdodDptYXgtY29udGVudDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLy8gcGFkZGluZzogMTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxuICAgIH1cclxuICAgIC8vIGJveC1zaGFkb3c6IDEycHggMTJweCAycHggMXB4IHJnYmEoMTE5LCAxMTksIDEyMywgMC4xMSksIDEzcHggN3B4IDJweCAxcHggcmdiYSg0NiwgNDYsIDE4NSwgMC4xMSk7XHJcbiAgfVxyXG5cclxuICAjc2VjdGlvbi1yZWNhcHtcclxuICAgIC8vIHdpZHRoOjIwMHB4O1xyXG4gICAgLy8gbWF4LXdpZHRoOiAyMDBweDtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIC8vIG1heC13aWR0aDogMjUwcHg7XHJcbiAgfVxyXG5cclxuICAuZXJyLWlucHV0IHtcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmMtaW5wdXQge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNjNjUzOGM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uYy1pbnB1dC1vbmUge1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW46IDVweDtcclxuICAvLyBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6XHJcbiAgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBsYWJlbCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICBtYXJnaW46IDVweCAweDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDJweDtcclxuXHJcblxyXG5cclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-form',
                // class:'component-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.scss'],
                host: { 'id': 'component-form' },
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_8__["Store"] }]; }, null); })();


/***/ }),

/***/ "8Fl1":
/*!***********************************************!*\
  !*** ./src/app/customvalidators.validator.ts ***!
  \***********************************************/
/*! exports provided: ComparePassword, ValidateString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparePassword", function() { return ComparePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateString", function() { return ValidateString; });
// To validate password and confirm password
function ComparePassword(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}
function ValidateString(str) {
    if (str.match('/^[A-Z]+$/i')) {
        return { validString: true };
    }
    return null;
}


/***/ }),

/***/ "DYnj":
/*!***********************************************!*\
  !*** ./src/app/customdirectives.directive.ts ***!
  \***********************************************/
/*! exports provided: ErrorInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInputDirective", function() { return ErrorInputDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ErrorInputDirective {
    // ErrClass: boolean = false;
    constructor(templateRef, viewContainer, renderer, el) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.renderer = renderer;
        this.el = el;
    }
    set ccErrorInput(condition) {
        if (!condition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }
    }
}
ErrorInputDirective.ɵfac = function ErrorInputDirective_Factory(t) { return new (t || ErrorInputDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ErrorInputDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ErrorInputDirective, selectors: [["", "ccErrorInput", ""]], inputs: { ccErrorInput: "ccErrorInput" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInputDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ccErrorInput]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { ccErrorInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "GW4n":
/*!*******************************************************!*\
  !*** ./src/app/user-account/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _shared_models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/models/User */ "xNjB");
/* harmony import */ var _shared_actions_user_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/actions/user-action */ "jQhb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../user.service */ "xdv0");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../api.service */ "yTNM");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function LoginComponent_form_0_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r1.form.valid);
} }
function LoginComponent_form_0_i_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 16);
} }
function LoginComponent_form_0_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.errorMessage, "");
} }
function LoginComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_0_Template_form_ngSubmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Login :");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_0_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.login = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, LoginComponent_form_0_button_15_Template, 2, 1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, LoginComponent_form_0_i_16_Template, 1, 0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, LoginComponent_form_0_div_18_Template, 3, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.waiting);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.waiting);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.errorLogIn);
} }
class LoginComponent {
    constructor(fb, userService, apiService, userstore) {
        this.fb = fb;
        this.userService = userService;
        this.apiService = apiService;
        this.userstore = userstore;
        this.logged = false;
        this.waiting = false;
        this.errorLogIn = false;
        this.errorMessage = null;
        this.loggedUser = new _shared_models_User__WEBPACK_IMPORTED_MODULE_0__["User"]();
    }
    ngOnInit() {
        this.form = this.fb.group({
            login: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    onSubmit(event) {
        this.waiting = true;
        this.errorLogIn = false;
        this.apiService.setJWT();
        this.userService.logUser(this.login, this.password).subscribe((response) => {
            // add user to connect store
            if (response.success == true) {
                this.loggedUser = response.data;
                this.userstore.dispatch(new _shared_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["AddUser"](this.loggedUser));
                this.errorMessage = null;
            }
            else {
                this.waiting = false;
                this.login = null;
                this.password = null;
                this.errorLogIn = true;
                this.errorMessage = response.data;
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 1, vars: 1, consts: [[3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "header"], [1, "c-input-one"], ["for", "mail"], ["formControlName", "login", "type", "text", "id", "login", "name", "login", 3, "ngModel", "ngModelChange"], [1, "c-input"], ["for", "pass"], ["formControlName", "password", "type", "password", "id", "password", "name", "password", 3, "ngModel", "ngModelChange"], [1, "separator"], [1, "c-input", "btn-container"], ["type", "submit", "class", "validate", "value", "Valider", 3, "disabled", 4, "ngIf"], ["class", "fa fa-spin fa-spinner", "aria-hidden", "true", 4, "ngIf"], [1, "footer"], [4, "ngIf"], ["type", "submit", "value", "Valider", 1, "validate", 3, "disabled"], ["aria-hidden", "true", 1, "fa", "fa-spin", "fa-spinner"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-circle"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, LoginComponent_form_0_Template, 19, 6, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.logged);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]], styles: ["[_nghost-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 330px;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  background: #FFF;\n  border-radius: 10px;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .c-input-one[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 10px;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0 0;\n  background-color: #31bbd6;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  text-align: center;\n  padding: 5px;\n  color: white;\n  font-family: Arial;\n  height: 3em;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  height: 3em;\n  border-radius: 0 0 10px 10px;\n  background-color: #31bbd6;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFEQUFBO0VBQ0Esd0VBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRFI7QUFFUTtFQUNJLDRFQUFBO0FBQVo7QUFFUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFBWjtBQUVRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBQVo7QUFFUTtFQUNJLDRCQUFBO0VBQ0EseUJDckJFO0VEc0JGLG1CQUFBO0FBQVo7QUFDWTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUNoQjtBQUVRO0VBQ0ksV0FBQTtFQUNBLDRCQUFBO0VBQ0EseUJDdkNFO0VEd0NGLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBWiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vY29sb3JzLnNjc3MnO1xyXG46aG9zdCB7XHJcbiAgICBmb3JtIHtcclxuICAgICAgICB3aWR0aDogMzMwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllciguMjUsIC44LCAuMjUsIDEpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jLWlucHV0LW9uZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmx1ZTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogM2VtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1ibHVlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkcHJpbWFyeS1waW5rOiAjZDgxYjYwO1xyXG4kcHJpbWFyeS1waW5rLWw6I2ZmNWM4ZDtcclxuJHByaW1hcnktcGluay1kOiNhMDAwMzc7XHJcbiRwcmltYXJ5LWJsdWU6IzMxYmJkNjtcclxuJHByaW1hcnktYmx1ZS1kOiMyMzc1OEU7XHJcbiRwcmltYXJ5LXRleHQ6IzIxMjEyMTtcclxuJHByaW1hcnktY29sb3ItbDojQjNFNUZDO1xyXG4kcHJpbWFyeS1idG46IzE4ZjdmNztcclxuJHByaW1hcnktYnRuLWhvdmVyOiM0ZGQzZWU7XHJcbiRzdWJtaXQtYnRuOiMxOGY3Zjc7XHJcbiRzdWJtaXQtYnRuLWhvdmVyOiM0ZGQzZWU7XHJcbiRzZWNvbmRhcnktdGV4dDojNzU3NTc1O1xyXG4kYm9keTojYzZkYmYwOyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }]; }, null); })();


/***/ }),

/***/ "MCpj":
/*!*****************************************************!*\
  !*** ./src/app/user-account/user-account.module.ts ***!
  \*****************************************************/
/*! exports provided: UserAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountModule", function() { return UserAccountModule; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "GW4n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_account_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-account-routing.module */ "dXoi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _customdirectives_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../customdirectives.directive */ "DYnj");
/* harmony import */ var _user_account_recap_recap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../user-account/recap/recap.component */ "5cnw");
/* harmony import */ var _user_account_form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../user-account/form/form.component */ "7jn9");
/* harmony import */ var _user_account_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../user-account/footer-form/footer-form.component */ "78ep");
/* harmony import */ var _header_form_header_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header-form/header-form.component */ "6fNX");













class UserAccountModule {
}
UserAccountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: UserAccountModule });
UserAccountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function UserAccountModule_Factory(t) { return new (t || UserAccountModule)(); }, providers: [], imports: [[
            // AppModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _user_account_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserAccountRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UserAccountModule, { declarations: [_user_account_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _user_account_form_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"],
        _header_form_header_form_component__WEBPACK_IMPORTED_MODULE_9__["HeaderFormComponent"],
        _user_account_recap_recap_component__WEBPACK_IMPORTED_MODULE_6__["RecapComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
        _customdirectives_directive__WEBPACK_IMPORTED_MODULE_5__["ErrorInputDirective"],
        _user_account_recap_recap_component__WEBPACK_IMPORTED_MODULE_6__["PhonePipe"],
        _user_account_recap_recap_component__WEBPACK_IMPORTED_MODULE_6__["CodePipe"]], imports: [
        // AppModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _user_account_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserAccountRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](UserAccountModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _user_account_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _user_account_form_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"],
                    _header_form_header_form_component__WEBPACK_IMPORTED_MODULE_9__["HeaderFormComponent"],
                    _user_account_recap_recap_component__WEBPACK_IMPORTED_MODULE_6__["RecapComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
                    _customdirectives_directive__WEBPACK_IMPORTED_MODULE_5__["ErrorInputDirective"],
                    _user_account_recap_recap_component__WEBPACK_IMPORTED_MODULE_6__["PhonePipe"],
                    _user_account_recap_recap_component__WEBPACK_IMPORTED_MODULE_6__["CodePipe"],
                ],
                imports: [
                    // AppModule,
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _user_account_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserAccountRoutingModule"]
                ],
                providers: [],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetComponentScope"](_user_account_form_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _header_form_header_form_component__WEBPACK_IMPORTED_MODULE_9__["HeaderFormComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _customdirectives_directive__WEBPACK_IMPORTED_MODULE_5__["ErrorInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _user_account_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
    _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
    _user_account_recap_recap_component__WEBPACK_IMPORTED_MODULE_6__["RecapComponent"]], []);


/***/ }),

/***/ "dXoi":
/*!*************************************************************!*\
  !*** ./src/app/user-account/user-account-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: UserAccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountRoutingModule", function() { return UserAccountRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ "7jn9");





const routes = [
    {
        path: '',
        component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"]
    }
];
class UserAccountRoutingModule {
}
UserAccountRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserAccountRoutingModule });
UserAccountRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserAccountRoutingModule_Factory(t) { return new (t || UserAccountRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserAccountRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAccountRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xdv0":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../environments/environment */ "AytR");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "yTNM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class UserService extends _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] {
    constructor(hClient) {
        super(hClient);
        this.hClient = hClient;
    }
    addUser(u) {
        const body = new URLSearchParams();
        body.set('firstname', u.firstname);
        body.set('lastname', u.lastname);
        body.set('address', u.address);
        body.set('zipcode', u.zipcode);
        body.set('city', u.city);
        body.set('gender', u.gender);
        body.set('mail', u.mail);
        body.set('password', u.password);
        body.set('login', u.login);
        body.set('country', u.country);
        body.set('phone', u.phone);
        return this.hClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api + '/user/register', body.toString(), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response));
    }
    updateUser(u) {
        const body = new URLSearchParams();
        body.set('idUser', u.idUser.toString());
        body.set('firstname', u.firstname);
        body.set('lastname', u.lastname);
        body.set('address', u.address);
        body.set('zipcode', u.zipcode);
        body.set('city', u.city);
        body.set('gender', u.gender);
        body.set('mail', u.mail);
        body.set('password', u.password);
        body.set('login', u.login);
        body.set('country', u.country);
        body.set('phone', u.phone);
        return this.hClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api + '/user/update', body.toString(), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response));
    }
    deleteUser(u) {
        const body = new URLSearchParams();
        body.set('idUser', u.idUser.toString());
        return this.hClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api + '/user/delete', body.toString(), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response));
    }
    logUser(log, pwd) {
        const body = new URLSearchParams();
        body.set('login', log);
        body.set('password', pwd);
        return this.hClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api + '/user/login', body.toString(), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((response) => response));
    }
    logOffUser(u) {
        const body = new URLSearchParams();
        body.set('idUser', u.idUser.toString());
        return this.hClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api + '/user/logoff', body.toString(), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=user-account-user-account-module-es2015.js.map
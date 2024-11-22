(self["webpackChunkteller"] = self["webpackChunkteller"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/GlEscrowManagement/CashierAccount.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/GlEscrowManagement/CashierAccount.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/form/Form */ "./resources/js/utils/form/Form.js");
/* harmony import */ var _payments_modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../payments/modal/Modal.vue */ "./resources/js/components/pages/payments/modal/Modal.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_2__.defineComponent)({
  components: {
    Modal: _payments_modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      isValidating: false,
      form: new _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        agent_id: '',
        walletId: '',
        wallet_number: '',
        is_verified: false,
        agent_name: '',
        groupId: '',
        amount: ''
      }),
      modal: {
        message: 'Unexpected Error Occurred',
        type: 'failed',
        title: 'Error'
      },
      btnState: 'submit'
    };
  },
  watch: {},
  computed: {
    canSubmit: function canSubmit() {
      return this.form.amount !== '' && this.form.processing != true;
    }
  },
  methods: {
    goBack: function goBack() {
      window.history.back();
    },
    agentFloat: function agentFloat() {
      var _this = this;
      this.btnState = "Submitting...";
      this.form.post('/bank/agent-float').then(function (data) {
        if (data.status === "SUCCESS") {
          _this.modal.type = 'success', _this.modal.message = "Your payment of has been successfully submitted.";
          _this.modal.title = 'Payment succeeded';
          _this.is_verified = false;
          _this.form.is_verified = false;
          _this.btnState = "Submit";
          var bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return bn.click();
          }, 200);
        } else {
          _this.modal.type = 'failed', _this.modal.message = data.message, _this.modal.title = 'Payment not succeeded';
          _this.is_verified = false;
          _this.form.is_verified = false;
          _this.isValidating = false;
          _this.btnState = "Submit";
          var _bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return _bn.click();
          }, 200);
        }
      })["catch"](function (error) {
        _this.isValidating = false;
        _this.is_verified = true;
        _this.form.is_verified = true;
        _this.btnState = "Submit";
      });
    },
    cashOutToBanks: function cashOutToBanks() {
      alert('call');
      console.log(this.cashOutToBank);
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    apexchart: (vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default())
  },
  data: function data() {
    return {
      series: [],
      loaded: false,
      chartOptions: {
        labels: ['Successful Transaction', 'Failed Transaction'],
        chart: {
          type: 'donut'
        },
        stroke: {
          width: 2
        },
        dataLabels: {
          enabled: true
        },
        tooltip: {
          y: {
            formatter: function formatter(val) {
              return val + 'k';
            }
          }
        },
        legend: {
          position: 'bottom'
        }
      }
    };
  },
  methods: {
    fetchTransactionData: function fetchTransactionData() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/admin-dashboard/weekly-transactions');
            case 3:
              response = _context.sent;
              data = response.data;
              _this.updateChart(data);
              _this.loaded = true;
              _context.next = 12;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.error('Error fetching transaction data:', _context.t0);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 9]]);
      }))();
    },
    updateChart: function updateChart(data) {
      this.series = [data.series.successful / 1000, data.series.failed / 1000];
    }
  },
  mounted: function mounted() {
    this.fetchTransactionData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/AccountCreation.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/AccountCreation.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/form/Form */ "./resources/js/utils/form/Form.js");
/* harmony import */ var _payments_modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../payments/modal/Modal.vue */ "./resources/js/components/pages/payments/modal/Modal.vue");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/esm/index.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_tel_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-tel-input */ "./node_modules/vue-tel-input/dist/vue-tel-input.umd.min.js");
/* harmony import */ var vue_tel_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_tel_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_tel_input_dist_vue_tel_input_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-tel-input/dist/vue-tel-input.css */ "./node_modules/vue-tel-input/dist/vue-tel-input.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Modal: _payments_modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    flatpickr: flatpickr__WEBPACK_IMPORTED_MODULE_2__["default"],
    FlatPickr: (vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3___default()),
    VueTelInput: vue_tel_input__WEBPACK_IMPORTED_MODULE_4__.VueTelInput
  },
  data: function data() {
    return {
      agent: false,
      teller: false,
      form: new _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        role: 'Customer',
        fullname: '',
        dob: '',
        phone: '',
        email: '',
        gender: '',
        documentId: '',
        bussinessname: '',
        fullphone: '',
        docType: '',
        kebele: '',
        branch: '',
        woreda: '',
        trade_license: ''
      }, {
        resetOnSuccess: false
      }),
      selectedDate: null,
      dateConfig: {
        maxDate: new Date().setFullYear(new Date().getFullYear() - 18),
        dateFormat: 'Y-m-d',
        disableMobile: true,
        altInput: true,
        altFormat: 'F j, Y'
      },
      modal: {
        message: 'Unexpected Error Occurred',
        type: 'failed',
        title: 'Error'
      },
      combinedPhoneNumber: '',
      countryCode: '',
      btnState: 'submit'
    };
  },
  watch: {
    'form.role': function formRole(value) {
      if (value == 'Teller') {
        this.teller = true;
        this.agent = false;
      } else if (value == 'Agent') {
        this.teller = false;
        this.agent = true;
      } else {
        this.teller = false;
        this.agent = false;
      }
    }
  },
  computed: {
    canSubmit: function canSubmit() {
      return this.form.fullname !== '' && this.form.processing === false;
    }
  },
  methods: {
    goBack: function goBack() {
      window.history.back();
    },
    formatPhoneNumber: function formatPhoneNumber(phoneNumber, numberOjg) {
      console.log(numberOjg);
      this.combinedPhoneNumber = phoneNumber;
      this.form.phone = "".concat(numberOjg.countryCallingCode).concat(numberOjg.nationalNumber);
      this.countryCode = this.$refs.phoneInput.selectedCountry.callingCode;
    },
    createAccount: function createAccount() {
      var _this = this;
      this.btnState = "Submitting...";
      this.form.post('/bank/create-customer').then(function (data) {
        if (data.status === "SUCCESS") {
          _this.modal.type = 'success', _this.modal.message = data.message, _this.modal.title = 'Account Created';
          _this.form.reset();
          _this.btnState = "Submit";
          var bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return bn.click();
          }, 200);
        } else {
          _this.modal.type = 'failed', _this.modal.message = data.message, _this.modal.title = 'Account Not Created';
          _this.btnState = "Submit";
          var _bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return _bn.click();
          }, 200);
        }
      })["catch"](function (error) {
        _this.isValidating = false;
        _this.is_verified = true;
        _this.form.is_verified = true;
        _this.btnState = "Submit";
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/GroupManagement.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/GroupManagement.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/form/Form */ "./resources/js/utils/form/Form.js");
/* harmony import */ var _payments_modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../payments/modal/Modal.vue */ "./resources/js/components/pages/payments/modal/Modal.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Modal: _payments_modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    page_info: {
      type: Object
    }
  },
  data: function data() {
    return {
      form: new _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        wallet_number: '',
        user_id: '',
        is_verified: false,
        recipient_name: '',
        current_group: '',
        new_group: ''
      }, {
        resetOnSuccess: false
      }),
      groups: [],
      modal: {
        message: 'Unexpected Error Occurred',
        type: 'failed',
        title: 'Error'
      },
      is_verified: false,
      isValidating: false,
      on_edit: false,
      btnState: 'submit'
    };
  },
  watch: {
    'form.user_id': function formUser_id(value) {
      var _this = this;
      if (this.typingTimeout) clearTimeout(this.typingTimeout);
      this.form.wallet_number = value;
      if (value.length > 3 && this.form.is_verified === false) {
        this.typingTimeout = setTimeout(function () {
          var _this$page_info;
          _this.isValidating = true;
          _this.form.post("".concat((_this$page_info = _this.page_info) === null || _this$page_info === void 0 ? void 0 : _this$page_info.domain, "bank/verify-wallet-id")).then(function (data) {
            if (data.status === "SUCCESS") {
              _this.isValidating = false;
              _this.is_verified = true;
              _this.form.walletId = data.walletId;
              _this.form.current_group = data.groupId;
              _this.form.is_verified = true;
              _this.form.recipient_name = data.walletName;
            } else {
              _this.is_verified = false;
              _this.form.is_verified = false;
              _this.isValidating = false;
              _this.modal.type = 'failed', _this.modal.message = data.message, _this.modal.title = 'Not Found';
              var bn = document.getElementById('modalBtn');
              setTimeout(function () {
                return bn.click();
              }, 200);
            }
          })["catch"](function (error) {
            _this.cashOutIsValidating = false;
            if (error.response && error.response.data && error.response.data.errors) {
              _this.cashInForm.errors.record(error.response.data.errors);
            } else {
              _this.$toast.error(error.response.data);
            }
          });
        }, 1500);
      }
    }
  },
  computed: {
    canSubmit: function canSubmit() {
      return this.form.user_id !== '' && this.form.processing === false && this.form.new_group !== '';
    }
  },
  mounted: function mounted() {
    this.getGroups();
  },
  methods: {
    changeGroup: function changeGroup() {
      var _this$page_info2,
        _this2 = this;
      // this.isValidating = true
      this.btnState = "submitting...";
      this.form.post("".concat((_this$page_info2 = this.page_info) === null || _this$page_info2 === void 0 ? void 0 : _this$page_info2.domain, "bank/group-management")).then(function (data) {
        if (data.status === "SUCCESS") {
          _this2.isValidating = false;
          _this2.is_verified = false;
          _this2.btnState = 'Submit';
          _this2.form.reset();
          _this2.modal.type = 'success', _this2.modal.message = data.message, _this2.modal.title = 'Group Changed';
          var bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return bn.click();
          }, 200);
        } else {
          _this2.btnState = 'Submit';
          _this2.is_verified = true;
          _this2.form.is_verified = true;
          _this2.isValidating = false;
          _this2.modal.type = 'failed', _this2.modal.message = data.message, _this2.modal.title = 'Not Found';
          var _bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return _bn.click();
          }, 200);
        }
      })["catch"](function (error) {
        _this2.isValidating = false;
        _this2.btnState = 'Submit';
        if (error.response && error.response.data && error.response.data.errors) {
          _this2.cashInForm.errors.record(error.response.data.errors);
        } else {
          _this2.$toast.error(error.response.data);
        }
      });
    },
    goBack: function goBack() {
      window.history.back();
    },
    getGroups: function getGroups() {
      var _this$page_info3,
        _this3 = this;
      var apiUrl = "".concat((_this$page_info3 = this.page_info) === null || _this$page_info3 === void 0 ? void 0 : _this$page_info3.domain, "bank/get-groups");
      axios__WEBPACK_IMPORTED_MODULE_2___default().get(apiUrl).then(function (response) {
        var data = response.data;
        _this3.groups = data;
      })["catch"](function (error) {
        _this3.modal.type = 'failed', _this3.modal.message = "failed to load groups", _this3.modal.title = 'Error Occurred';
        var bn = document.getElementById('modalBtn');
        setTimeout(function () {
          return bn.click();
        }, 200);
        setTimeout(function () {
          return window.location.reload();
        }, 5000);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/ResetPin.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/ResetPin.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/form/Form */ "./resources/js/utils/form/Form.js");
/* harmony import */ var _payments_modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../payments/modal/Modal.vue */ "./resources/js/components/pages/payments/modal/Modal.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Modal: _payments_modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    page_info: {
      type: Object
    }
  },
  data: function data() {
    return {
      walletId: '',
      customerName: '',
      form: new _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        wallet_number: '',
        walletId: '',
        is_verified: false,
        customerName: '',
        newPin: ''
      }, {
        resetOnSuccess: false
      }),
      modal: {
        message: 'Unexpected Error Occurred',
        type: 'failed',
        title: 'Error'
      },
      showConfirmPin: false,
      showPin: false,
      hidePin: 'bi-eye-slash',
      is_verified: false,
      state: 'Submit',
      newPinInputs: Array(4).fill(""),
      confirmPinInputs: Array(4).fill(""),
      isValidating: false,
      typingTimeout: null // Add a timeout reference
    };
  },
  watch: {
    'form.wallet_number': function formWallet_number(value) {
      var _this = this;
      if (this.typingTimeout) clearTimeout(this.typingTimeout);
      if (value.length > 3 && this.form.is_verified === false) {
        this.typingTimeout = setTimeout(function () {
          var _this$page_info;
          _this.isValidating = true;
          _this.form.post("".concat((_this$page_info = _this.page_info) === null || _this$page_info === void 0 ? void 0 : _this$page_info.domain, "bank/verify-wallet-id")).then(function (data) {
            if (data.status === "SUCCESS") {
              _this.isValidating = false;
              _this.is_verified = true;
              _this.form.walletId = data.walletId;
              _this.form.is_verified = true;
              _this.form.customerName = data.walletName;
              _this.form.wallet_number = data.walletId;
            } else {
              _this.is_verified = false;
              _this.form.is_verified = false;
              _this.isValidating = false;
              _this.modal.type = 'failed', _this.modal.message = data.message, _this.modal.title = 'Not Found';
              var bn = document.getElementById('modalBtn');
              setTimeout(function () {
                return bn.click();
              }, 200);
            }
          })["catch"](function (error) {
            _this.isValidating = false;
            if (error.response && error.response.data && error.response.data.errors) {
              _this.form.errors.record(error.response.data.errors);
            } else {
              _this.$toast.error(error.response.data);
            }
          });
        }, 1500);
      }
    }
  },
  computed: {
    canSubmit: function canSubmit() {
      return this.newPinInputs.join('').length === 4 && this.confirmPinInputs.join('').length === 4 && this.newPinInputs.join('') === this.confirmPinInputs.join('') && this.form.processing === false && this.is_verified !== false;
    }
  },
  methods: {
    handleShowConfirmPin: function handleShowConfirmPin() {
      var _this2 = this;
      this.showConfirmPin = !this.showConfirmPin;
      var input = document.querySelectorAll('#confirmPin');
      input.forEach(function (input) {
        return input.type = _this2.showConfirmPin ? 'text' : 'password';
      });
    },
    handleShowPin: function handleShowPin() {
      var _this3 = this;
      this.showPin = !this.showPin;
      var input = document.querySelectorAll('#pin');
      input.forEach(function (input) {
        return input.type = _this3.showPin ? 'text' : 'password';
      });
    },
    handleInput: function handleInput(index, type) {
      var pinArray = type === 'new' ? this.newPinInputs : this.confirmPinInputs;
      if (pinArray[index] !== "" && index < pinArray.length - 1) {
        this.$refs["".concat(type, "PinInputs")][index + 1].focus();
      }
    },
    handleKeyDown: function handleKeyDown(event, index, type) {
      var pinArray = type === 'new' ? this.newPinInputs : this.confirmPinInputs;
      if (event.key === 'Backspace' && pinArray[index] === '' && index > 0) {
        this.$refs["".concat(type, "PinInputs")][index - 1].focus();
      }
    },
    handleFocus: function handleFocus(event) {
      event.target.select();
    },
    handlePaste: function handlePaste(event, type) {
      var _this4 = this;
      event.preventDefault();
      var text = event.clipboardData.getData('text').replace(/\D/g, ''); // Allow only numeric
      text.split('').slice(0, 4).forEach(function (digit, index) {
        _this4["".concat(type, "PinInputs")][index] = digit;
        _this4.$refs["".concat(type, "PinInputs")][index].focus();
      });
    },
    goBack: function goBack() {
      window.history.back();
    },
    verifyPin: function verifyPin() {
      var _this$page_info2,
        _this5 = this;
      this.form.newPin = this.newPinInputs.join('');
      this.state = "Resetting...";
      this.canSubmit = true;
      this.form.post("".concat((_this$page_info2 = this.page_info) === null || _this$page_info2 === void 0 ? void 0 : _this$page_info2.domain, "bank/reset-customer-pin")).then(function (data) {
        if (data.status === "SUCCESS") {
          _this5.modal.type = 'success', _this5.modal.message = data.message, _this5.modal.title = 'PIN Reset succeeded';
          var bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return bn.click();
          }, 200);
          _this5.is_verified = false;
          _this5.form.is_verified = false;
          _this5.form.reset();
          _this5.state = "Submit";
        } else {
          _this5.is_verified = true;
          _this5.form.is_verified = true;
          _this5.isValidating = false;
          _this5.state = "Submit";
          _this5.modal.type = 'failed', _this5.modal.message = data.message, _this5.modal.title = 'PIN Reset Failed';
          var _bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return _bn.click();
          }, 200);
        }
      })["catch"](function (error) {
        _this5.response = true;
        _this5.responseMessage = "An error occurred when connecting";
        _this5.isValidating = false;
        _this5.is_verified = true;
        _this5.form.is_verified = true;
        _this5.state = "Submit";
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/UpdateAccount.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/UpdateAccount.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/form/Form */ "./resources/js/utils/form/Form.js");
/* harmony import */ var _payments_modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../payments/modal/Modal.vue */ "./resources/js/components/pages/payments/modal/Modal.vue");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/esm/index.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_tel_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-tel-input */ "./node_modules/vue-tel-input/dist/vue-tel-input.umd.min.js");
/* harmony import */ var vue_tel_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_tel_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_tel_input_dist_vue_tel_input_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-tel-input/dist/vue-tel-input.css */ "./node_modules/vue-tel-input/dist/vue-tel-input.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Modal: _payments_modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    flatpickr: flatpickr__WEBPACK_IMPORTED_MODULE_2__["default"],
    FlatPickr: (vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3___default()),
    VueTelInput: vue_tel_input__WEBPACK_IMPORTED_MODULE_4__.VueTelInput
  },
  props: {
    page_info: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      form: new _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        wallet_number: '',
        acountPhoneInput: '',
        is_verified: false,
        fullname: '',
        macAddress: '',
        phoneNumber: '',
        email: '',
        language: '',
        fullphone: ''
      }, {
        resetOnSuccess: false
      }),
      toUpdateForm: new _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        value: '',
        walletId: '',
        fieldToChange: '',
        is_verified: ''
      }),
      selectedDate: null,
      dateConfig: {
        maxDate: new Date().setFullYear(new Date().getFullYear() - 18),
        dateFormat: 'Y-m-d',
        disableMobile: true,
        altInput: true,
        altFormat: 'F j, Y'
      },
      modal: {
        message: 'Unexpected Error Occurred',
        type: 'failed',
        title: 'Error'
      },
      is_verified: false,
      isValidating: false,
      on_edit: false,
      combinedPhoneNumber: '',
      countryCode: '',
      btnState: 'submit'
    };
  },
  watch: {
    'form.acountPhoneInput': function formAcountPhoneInput(value) {
      var _this = this;
      if (this.typingTimeout) clearTimeout(this.typingTimeout);
      this.form.wallet_number = value;
      if (value.length > 3 && this.form.is_verified === false) {
        this.typingTimeout = setTimeout(function () {
          _this.isValidating = true;
          _this.form.post("".concat(_this.page_info.domain, "bank/verify-wallet-id")).then(function (data) {
            if (data.status === "SUCCESS") {
              _this.isValidating = false;
              _this.is_verified = true;
              _this.form.walletId = data.walletId;
              _this.form.groupId = data.groupId;
              _this.form.is_verified = true;
              _this.form.fullname = data.walletName;
              _this.form.phoneNumber = data.phoneNumber;
              _this.form.language = data.language;
              _this.form.macAddress = data.macAddress;
              _this.form.email = data.email;
            } else {
              _this.is_verified = false;
              _this.form.is_verified = false;
              _this.isValidating = false;
              _this.modal.type = 'failed', _this.modal.message = data.message, _this.modal.title = 'Not Found';
              var bn = document.getElementById('modalBtn');
              setTimeout(function () {
                return bn.click();
              }, 200);
            }
          })["catch"](function (error) {
            _this.cashOutIsValidating = false;
            if (error.response && error.response.data && error.response.data.errors) {
              _this.cashInForm.errors.record(error.response.data.errors);
            } else {
              _this.$toast.error(error.response.data);
            }
          });
        }, 1500);
      }
    }
  },
  computed: {
    canSubmit: function canSubmit() {
      return this.form.fullname !== '' && this.form.processing === false;
    }
  },
  methods: {
    verify: function verify() {
      var _this2 = this;
      this.isValidating = true;
      if (this.form.wallet_number !== '') {
        this.form.post("".concat(this.page_info.domain, "bank/verify-wallet-id")).then(function (data) {
          if (data.status === "SUCCESS") {
            _this2.isValidating = false;
            _this2.is_verified = true;
            _this2.form.walletId = data.walletId;
            _this2.form.groupId = data.groupId;
            _this2.form.is_verified = true;
            _this2.form.fullname = data.walletName;
            _this2.form.phoneNumber = data.phoneNumber;
            _this2.form.language = data.language;
            _this2.form.macAddress = data.macAddress;
            _this2.form.email = data.email;
          } else {
            _this2.is_verified = false;
            _this2.form.is_verified = false;
            _this2.isValidating = false;
            _this2.modal.type = 'failed', _this2.modal.message = data.message, _this2.modal.title = 'Not Found';
            var bn = document.getElementById('modalBtn');
            setTimeout(function () {
              return bn.click();
            }, 200);
          }
        })["catch"](function (error) {
          _this2.isValidating = false;
          if (error.response && error.response.data && error.response.data.errors) {
            _this2.cashInForm.errors.record(error.response.data.errors);
          } else {
            _this2.$toast.error(error.response.data);
          }
        });
      } else {
        this.isValidating = false, this.modal.type = 'failed', this.modal.message = "Please supply an account number or phone number", this.modal.title = 'Fill The Form';
        var bn = document.getElementById('modalBtn');
        setTimeout(function () {
          return bn.click();
        }, 200);
      }
    },
    goBack: function goBack() {
      window.history.back();
    },
    done: function done() {
      this.on_edit = false;
      this.is_verified = false;
    },
    onEdit: function onEdit() {
      this.on_edit = true;
      this.is_verified = true;
    },
    cancel: function cancel() {
      this.is_verified = false;
    },
    formatPhoneNumber: function formatPhoneNumber(phoneNumber, numberOjg) {
      console.log(numberOjg);
      this.combinedPhoneNumber = phoneNumber;
      this.form.phone = "".concat(numberOjg.countryCallingCode).concat(numberOjg.nationalNumber);
      this.countryCode = this.$refs.phoneInput.selectedCountry.callingCode;
    },
    createAccount: function createAccount() {},
    updateField: function updateField(fieldName, formField) {
      var _this3 = this;
      this.toUpdateForm.value = this.form[formField];
      this.toUpdateForm.walletId = this.form.acountPhoneInput;
      this.toUpdateForm.fieldToChange = fieldName;
      this.toUpdateForm.is_verified = this.form.is_verified;
      var btn = document.getElementById(fieldName);
      btn.innerHTML = "Updating...";
      btn.disabled = true;
      this.btnState = "...";
      this.toUpdateForm.post("".concat(this.page_info.domain, "bank/update-user")).then(function (data) {
        if (data.status === "SUCCESS") {
          btn.disabled = false;
          btn.innerHTML = "Updated";
          _this3.modal.type = 'success', _this3.modal.message = data.message, _this3.modal.title = "Field Updated";
          _this3.toUpdateForm.reset();
          _this3.btnState = "Submit";
          var bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return bn.click();
          }, 200);
        } else {
          _this3.modal.type = 'failed', btn.disabled = false;
          _this3.modal.message = data.message, _this3.modal.title = 'Field Failed To Update';
          _this3.btnState = "Submit";
          btn.innerHTML = "Update";
          var _bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return _bn.click();
          }, 200);
        }
      })["catch"](function (error) {
        _this3.isValidating = false;
        _this3.is_verified = true;
        btn.disabled = false;
        _this3.form.is_verified = false;
        _this3.btnState = "Submit";
        btn.innerHTML = "Update";
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/fraudManagement/Index.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/fraudManagement/Index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _charts_highValueTransactions_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts/highValueTransactions.vue */ "./resources/js/components/pages/fraudManagement/charts/highValueTransactions.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    highValueTransactions: _charts_highValueTransactions_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    statics: {
      type: Object,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/fraudManagement/charts/highValueTransactions.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/fraudManagement/charts/highValueTransactions.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    apexchart: (vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default())
  },
  data: function data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '45%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: []
        },
        yaxis: {
          title: {
            text: 'Amount (k)',
            style: {
              color: '#000',
              fontWeight: 600
            }
          }
        },
        fill: {
          opacity: 1,
          colors: ['#0000FF'] // Blue color for bars
        },
        tooltip: {
          y: {
            formatter: function formatter(val) {
              return val / 1000 + " k"; // Tooltip values in 'k'
            }
          }
        }
      }
    };
  },
  mounted: function mounted() {
    this.fetchData();
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;
      var apiUrl;
      var xAxisCategories = [];
      apiUrl = "/fraud/high-value-violation?startDate=".concat(this.startDate, "&endDate=").concat(this.endDate);
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(apiUrl).then(function (response) {
        var data = response.data;
        console.log(data);
        _this.series = [{
          name: 'High value transaction',
          data: data.series
        }];
        _this.chartOptions.xaxis.categories = data.categories;
      })["catch"](function (error) {
        console.error("Error fetching data:", error);
        // alert("Failed to load data from the API.");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AgentFloat.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AgentFloat.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/form/Form */ "./resources/js/utils/form/Form.js");
/* harmony import */ var _modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/Modal.vue */ "./resources/js/components/pages/payments/modal/Modal.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_2__.defineComponent)({
  name: 'AgentFloat',
  props: {
    page_info: {
      type: Object
    }
  },
  components: {
    Modal: _modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      isValidating: false,
      form: new _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        agent_id: '',
        walletId: '',
        wallet_number: '',
        is_verified: false,
        agent_name: '',
        groupId: '',
        amount: ''
      }),
      cashOutToBank: new _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        bank: 'Shabelle',
        acc_no: '',
        amount: ''
      }),
      is_verified: false,
      modal: {
        message: 'Unexpected Error Occurred',
        type: 'failed',
        title: 'Error'
      },
      btnState: 'submit'
    };
  },
  watch: {
    'form.agent_id': function formAgent_id(value) {
      var _this = this;
      this.form.wallet_number = value;
      if (this.typingTimeout) clearTimeout(this.typingTimeout);
      if (value.length > 3 && this.form.is_verified === false) {
        this.typingTimeout = setTimeout(function () {
          var _this$page_info;
          _this.isValidating = true;
          _this.form.post("".concat((_this$page_info = _this.page_info) === null || _this$page_info === void 0 ? void 0 : _this$page_info.domain, "bank/verify-wallet-id")).then(function (data) {
            if (data.status === "SUCCESS") {
              _this.isValidating = false;
              _this.is_verified = true;
              _this.form.walletId = data.walletId;
              _this.form.groupId = data.groupId;
              _this.form.is_verified = true;
              _this.form.agent_name = data.walletName;
              _this.form.agent_id = data.walletId;
            } else {
              _this.is_verified = false;
              _this.form.is_verified = false;
              _this.isValidating = false;
              _this.modal.type = 'failed', _this.modal.message = data.message, _this.modal.title = 'Not Found';
              var bn = document.getElementById('modalBtn');
              setTimeout(function () {
                return bn.click();
              }, 200);
            }
          })["catch"](function (error) {
            console.log(error);
            _this.isValidating = false;
            if (error.response && error.response.data && error.response.data.errors) {
              _this.form.errors.record(error.response.data.errors);
            } else {
              _this.$toast.error(error.response.data);
            }
          });
        }, 1500);
      }
    }
  },
  computed: {
    canSubmit: function canSubmit() {
      return this.form.amount !== '' && this.form.processing != true;
    }
  },
  methods: {
    goBack: function goBack() {
      window.history.back();
    },
    agentFloat: function agentFloat() {
      var _this$page_info2,
        _this2 = this;
      this.btnState = "Submitting...";
      this.form.post("".concat((_this$page_info2 = this.page_info) === null || _this$page_info2 === void 0 ? void 0 : _this$page_info2.domain, "bank/agent-float")).then(function (data) {
        if (data.status === "SUCCESS") {
          _this2.modal.type = 'success', _this2.modal.message = "Your payment of has been successfully submitted.";
          _this2.modal.title = 'Payment succeeded';
          _this2.is_verified = false;
          _this2.form.is_verified = false;
          _this2.btnState = "Submit";
          var bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return bn.click();
          }, 200);
        } else {
          _this2.modal.type = 'failed', _this2.modal.message = data.message, _this2.modal.title = 'Payment not succeeded';
          _this2.is_verified = false;
          _this2.form.is_verified = false;
          _this2.isValidating = false;
          _this2.btnState = "Submit";
          var _bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return _bn.click();
          }, 200);
        }
      })["catch"](function (error) {
        _this2.isValidating = false;
        _this2.is_verified = true;
        _this2.form.is_verified = true;
        _this2.btnState = "Submit";
      });
    },
    cashOutToBanks: function cashOutToBanks() {
      alert('call');
      console.log(this.cashOutToBank);
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AirtimePayment.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AirtimePayment.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/form/Form */ "./resources/js/utils/form/Form.js");
/* harmony import */ var _modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/Modal.vue */ "./resources/js/components/pages/payments/modal/Modal.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_2__.defineComponent)({
  name: 'AirtimePayment',
  components: {
    Modal: _modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    routes: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      isValidating: false,
      form: new _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        service_provider: '',
        phone_number: '',
        amount: ''
      }),
      modal: {
        message: 'Unexpected Error Occurred',
        type: 'failed',
        title: 'Error'
      },
      btnState: 'submit'
    };
  },
  computed: {
    canSubmit: function canSubmit() {
      return this.form.amount !== '' && this.form.phone_number !== '' && this.form.processing != true && this.form.service_provider !== '';
    }
  },
  methods: {
    goBack: function goBack() {
      window.history.back();
    },
    airtime_payment: function airtime_payment() {
      var _this = this;
      this.btnState = "Submitting...";
      this.form.post(this.routes.airtime).then(function (data) {
        if (data.status === "SUCCESS") {
          _this.modal.type = 'success', _this.modal.message = "Your payment of has been successfully submitted.";
          _this.modal.title = 'Payment succeeded';
          _this.is_verified = false;
          _this.form.is_verified = false;
          _this.btnState = "Submit";
          var bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return bn.click();
          }, 200);
        } else {
          _this.modal.type = 'failed', _this.modal.message = data.message, _this.modal.title = 'Payment not succeeded';
          _this.is_verified = false;
          _this.form.is_verified = false;
          _this.isValidating = false;
          _this.btnState = "Submit";
          var _bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return _bn.click();
          }, 200);
        }
      })["catch"](function (error) {
        _this.isValidating = false;
        _this.is_verified = true;
        _this.form.is_verified = true;
        _this.btnState = "Submit";
      });
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/CashInCashOut.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/CashInCashOut.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/form/Form */ "./resources/js/utils/form/Form.js");
/* harmony import */ var _modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/Modal.vue */ "./resources/js/components/pages/payments/modal/Modal.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    routes: {
      type: Object,
      required: true,
      "default": function _default() {}
    }
  },
  components: {
    Modal: _modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      cashInIsValidating: false,
      cash_in_is_verified: false,
      cashInBtnState: 'Submit',
      cashInForm: new _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        wallet_number: '',
        walletId: '',
        is_verified: false,
        recipientName: '',
        groupId: '',
        amount: ''
      }),
      cashOutIsValidating: false,
      cash_out_is_verified: false,
      cashOutBtnState: 'Submit',
      cashOutForm: new _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        wallet_number: '',
        walletId: '',
        is_verified: false,
        recipientName: '',
        groupId: '',
        amount: ''
      }),
      modal: {
        message: 'Make payment',
        type: 'failed',
        title: 'Error'
      }
    };
  },
  mounted: function mounted() {
    if (location.hash == '#cash-out') {
      document.querySelector("#pills-profile-tab").click();
    }
  },
  computed: {
    canSubmitCashIn: function canSubmitCashIn() {
      return this.cashInForm.amount !== '' && this.cashInForm.processing != true;
    },
    canSubmitCashOut: function canSubmitCashOut() {
      return this.cashOutForm.amount !== '' && this.cashOutForm.processing != true;
    }
  },
  watch: {
    'cashInForm.wallet_number': function cashInFormWallet_number(value) {
      var _this = this;
      if (this.typingTimeout) clearTimeout(this.typingTimeout);
      if (value.length > 3 && this.cashInForm.is_verified === false) {
        this.typingTimeout = setTimeout(function () {
          _this.cashInIsValidating = true;
          _this.cashInForm.post('/bank/verify-wallet-id').then(function (data) {
            if (data.status === "SUCCESS") {
              _this.cashInIsValidating = false;
              _this.cash_in_is_verified = true;
              _this.cashInForm.walletId = data.walletId;
              _this.cashInForm.groupId = data.groupId;
              _this.cashInForm.is_verified = true;
              _this.cashInForm.recipientName = data.walletName;
              _this.cashInForm.wallet_number = data.walletId;
            } else {
              _this.cash_in_is_verified = false;
              _this.cashInForm.is_verified = false;
              _this.cashInIsValidating = false;
              _this.modal.type = 'failed', _this.modal.message = data.message, _this.modal.title = 'Not Found';
              var bn = document.getElementById('modalBtn');
              setTimeout(function () {
                return bn.click();
              }, 200);
            }
          })["catch"](function (error) {
            console.log(error);
            _this.cashInIsValidating = false;
            if (error.response && error.response.data && error.response.data.errors) {
              _this.cashInForm.errors.record(error.response.data.errors);
            } else {
              _this.$toast.error(error.response.data);
            }
          });
        }, 1500);
      }
    },
    'cashOutForm.wallet_number': function cashOutFormWallet_number(value) {
      var _this2 = this;
      if (this.typingTimeout) clearTimeout(this.typingTimeout);
      if (value.length > 3 && this.cashOutForm.is_verified === false) {
        this.typingTimeout = setTimeout(function () {
          _this2.cashOutIsValidating = true;
          _this2.cashOutForm.post('/bank/verify-wallet-id').then(function (data) {
            if (data.status === "SUCCESS") {
              _this2.cashOutIsValidating = false;
              _this2.cash_out_is_verified = true;
              _this2.cashOutForm.walletId = data.walletId;
              _this2.cashOutForm.groupId = data.groupId;
              _this2.cashOutForm.is_verified = true;
              _this2.cashOutForm.recipientName = data.walletName;
              _this2.cashOutForm.wallet_number = data.walletId;
            } else {
              _this2.cash_out_is_verified = false;
              _this2.cashOutForm.is_verified = false;
              _this2.cashOutIsValidating = false;
              _this2.modal.type = 'failed', _this2.modal.message = data.message, _this2.modal.title = 'Not Found';
              var bn = document.getElementById('modalBtn');
              setTimeout(function () {
                return bn.click();
              }, 200);
            }
          })["catch"](function (error) {
            _this2.cashOutIsValidating = false;
            if (error.response && error.response.data && error.response.data.errors) {
              _this2.cashInForm.errors.record(error.response.data.errors);
            } else {
              _this2.$toast.error(error.response.data);
            }
          });
        }, 1500);
      }
    }
  },
  methods: {
    goBack: function goBack() {
      window.history.back();
    },
    cashIn: function cashIn() {
      var _this3 = this;
      this.cashInBtnState = "Submitting...";
      this.cashInForm.post(this.routes.cash_in_route).then(function (data) {
        if (data.status === "SUCCESS") {
          _this3.modal.type = 'success', _this3.modal.message = "Your cash-in payment of has been successfully submitted.";
          _this3.modal.title = 'Payment succeeded';
          _this3.cash_in_is_verified = false;
          _this3.cashInForm.is_verified = false;
          _this3.cashInBtnState = "Submit";
          var bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return bn.click();
          }, 200);
        } else {
          _this3.modal.type = 'failed', _this3.modal.message = data.message, _this3.modal.title = 'Payment not succeeded';
          _this3.cash_in_is_verified = false;
          _this3.cashInForm.is_verified = false;
          _this3.cashInIsValidating = false;
          _this3.cashInBtnState = "Submit";
          var _bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return _bn.click();
          }, 200);
        }
      })["catch"](function (error) {
        _this3.response = true;
        _this3.responseMessage = "An error occurred when connecting";
        _this3.cashInIsValidating = false;
        _this3.cash_in_is_verified = true;
        _this3.cashInForm.is_verified = true;
        _this3.cashInBtnState = "Submit";
      });
    },
    cashOut: function cashOut() {
      var _this4 = this;
      this.cashOutBtnState = "Submitting...";
      this.cashOutForm.post(this.routes.cash_out_route).then(function (data) {
        if (data.status === "SUCCESS") {
          _this4.modal.type = 'success', _this4.modal.message = "Your cash-out payment of has been successfully submitted.";
          _this4.modal.title = 'Payment succeeded';
          _this4.cash_out_is_verified = false;
          _this4.cashOutForm.is_verified = false;
          _this4.cashOutBtnState = "Submit";
          var bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return bn.click();
          }, 200);
        } else {
          _this4.modal.type = 'failed', _this4.modal.message = data.message, _this4.modal.title = 'Payment not succeeded';
          _this4.cash_out_is_verified = false;
          _this4.cashOutForm.is_verified = false;
          _this4.cashInIsValidating = false;
          _this4.cashOutBtnState = "Submit";
          var _bn2 = document.getElementById('modalBtn');
          setTimeout(function () {
            return _bn2.click();
          }, 200);
        }
      })["catch"](function (error) {
        _this4.response = true;
        _this4.responseMessage = "An error occurred when connecting";
        _this4.cashInIsValidating = false;
        _this4.cash_out_is_verified = true;
        _this4.cashOutForm.is_verified = true;
        _this4.cashOutBtnState = "Submit";
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/modal/Modal.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/modal/Modal.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    message: {
      type: String,
      required: true,
      "default": function _default() {
        return '';
      }
    },
    title: {
      type: String,
      required: true,
      "default": function _default() {
        return '';
      }
    },
    type: {
      type: String,
      required: true,
      "default": function _default() {
        return '';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/BulkSms.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/BulkSms.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/form/Form */ "./resources/js/utils/form/Form.js");
/* harmony import */ var _payments_modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../payments/modal/Modal.vue */ "./resources/js/components/pages/payments/modal/Modal.vue");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_2__.defineComponent)({
  components: {
    Modal: _payments_modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      isValidating: false,
      form: new _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        contacts: '',
        wallet_number: '',
        message: '',
        phoneNumber: '',
        name: '',
        date_time: '',
        is_verified: false,
        shouldSchedule: false
      }, {
        resetOnSuccess: false
      }),
      fileUploaded: false,
      modal: {
        message: 'Unexpected Error Occurred',
        type: 'failed',
        title: 'Error'
      },
      btnState: 'Send Message'
    };
  },
  watch: {
    'form.phoneNumber': function formPhoneNumber(value) {
      var _this = this;
      this.form.wallet_number = value;
      if (this.typingTimeout) clearTimeout(this.typingTimeout);
      if (value.length < 4) this.form.is_verified = false;
      if (value.length > 3 && this.form.is_verified === false) {
        this.typingTimeout = setTimeout(function () {
          _this.isValidating = true;
          _this.form.post('/bank/verify-wallet-id').then(function (data) {
            if (data.status === "SUCCESS") {
              _this.isValidating = false;
              _this.is_verified = true;
              _this.form.name = data.walletName;
              _this.form.is_verified = true;
            } else {
              _this.is_verified = false;
              _this.form.is_verified = false;
              _this.isValidating = false;
              _this.modal.type = 'failed', _this.modal.message = data.message, _this.modal.title = 'Not Found';
              var bn = document.getElementById('modalBtn');
              setTimeout(function () {
                return bn.click();
              }, 200);
            }
          })["catch"](function (error) {
            _this.isValidating = false;
            if (error.response && error.response.data && error.response.data.errors) {
              _this.form.errors.record(error.response.data.errors);
            } else {
              _this.$toast.error(error.response.data);
            }
          });
        }, 1500);
      }
    },
    'form.date_time': function formDate_time(value) {
      if (value !== '') {
        this.form.shouldSchedule = true;
      } else {
        this.form.shouldSchedule = false;
      }
    }
  },
  computed: {
    canSubmit: function canSubmit() {
      return this.form.message !== '' && this.fileUploaded == true && this.form.contacts.length !== 0 && this.form.processing != true;
    }
  },
  methods: {
    goBack: function goBack() {
      window.history.back();
    },
    sendMessage: function sendMessage() {
      var _this2 = this;
      this.btnState = "Sending...";
      this.form.post('/sms/bulk').then(function (data) {
        if (data.status === "SUCCESS") {
          _this2.modal.type = 'success', _this2.modal.message = "Your message is sent.";
          _this2.modal.title = 'Message Sent';
          _this2.is_verified = false;
          _this2.form.is_verified = false;
          _this2.btnState = "Message Sent";
          var bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return bn.click();
          }, 200);
        } else {
          _this2.modal.type = 'failed', _this2.modal.message = data.message, _this2.modal.title = 'Failed';
          _this2.form.is_verified = false;
          _this2.btnState = "Send Message";
          var _bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return _bn.click();
          }, 200);
        }
      })["catch"](function (error) {
        _this2.isValidating = false;
        _this2.is_verified = true;
        _this2.form.is_verified = true;
        _this2.btnState = "Send Message";
      });
    },
    handleFileUpload: function handleFileUpload(event) {
      var file = event.target.files[0];
      if (file && file.type === 'text/csv') {
        this.parseCSV(file);
      } else {
        alert('Please upload a valid CSV file.');
      }
    },
    parseCSV: function parseCSV(file) {
      var _this3 = this;
      var reader = new FileReader();
      reader.onload = function (e) {
        var csvData = e.target.result;
        var parsedData = _this3.csvToArray(csvData);
        _this3.form.contacts = parsedData;
        _this3.fileUploaded = true;
      };
      reader.readAsText(file);
    },
    csvToArray: function csvToArray(csvString) {
      var rows = csvString.split('\n');
      var contacts = [];
      rows.forEach(function (row) {
        var _row$split = row.split(','),
          _row$split2 = _slicedToArray(_row$split, 2),
          name = _row$split2[0],
          contact = _row$split2[1];
        if (name && contact) {
          contacts.push({
            name: name.trim(),
            contact: contact.trim()
          });
        }
      });
      return contacts;
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/SingleSms.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/SingleSms.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/form/Form */ "./resources/js/utils/form/Form.js");
/* harmony import */ var _payments_modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../payments/modal/Modal.vue */ "./resources/js/components/pages/payments/modal/Modal.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_2__.defineComponent)({
  components: {
    Modal: _payments_modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      isValidating: false,
      form: new _utils_form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        wallet_number: '',
        message: '',
        phoneNumber: '',
        name: '',
        date_time: '',
        is_verified: false,
        shouldSchedule: false
      }, {
        resetOnSuccess: false
      }),
      shouldSchedule: function shouldSchedule() {
        this.form.shouldSchedule = true;
      },
      modal: {
        message: 'Unexpected Error Occurred',
        type: 'failed',
        title: 'Error'
      },
      btnState: 'Send'
    };
  },
  watch: {
    'form.phoneNumber': function formPhoneNumber(value) {
      var _this = this;
      this.form.wallet_number = value;
      if (this.typingTimeout) clearTimeout(this.typingTimeout);
      if (value.length < 4) this.form.is_verified = false;
      if (value.length > 3 && this.form.is_verified === false) {
        this.typingTimeout = setTimeout(function () {
          _this.isValidating = true;
          _this.form.post('/bank/verify-wallet-id').then(function (data) {
            if (data.status === "SUCCESS") {
              _this.isValidating = false;
              _this.is_verified = true;
              _this.form.name = data.walletName;
              _this.form.is_verified = true;
            } else {
              _this.is_verified = false;
              _this.form.is_verified = false;
              _this.isValidating = false;
              _this.modal.type = 'failed', _this.modal.message = data.message, _this.modal.title = 'Not Found';
              var bn = document.getElementById('modalBtn');
              setTimeout(function () {
                return bn.click();
              }, 200);
            }
          })["catch"](function (error) {
            _this.isValidating = false;
            if (error.response && error.response.data && error.response.data.errors) {
              _this.form.errors.record(error.response.data.errors);
            } else {
              _this.$toast.error(error.response.data);
            }
          });
        }, 1500);
      }
    },
    'form.date_time': function formDate_time(value) {
      if (value !== '') {
        this.form.shouldSchedule = true;
      } else {
        this.form.shouldSchedule = false;
      }
    }
  },
  computed: {
    canSubmit: function canSubmit() {
      return this.form.message !== '' && this.form.is_verified == true && this.form.phoneNumber !== '' && this.form.processing != true;
    }
  },
  methods: {
    goBack: function goBack() {
      window.history.back();
    },
    sendMessage: function sendMessage() {
      var _this2 = this;
      this.btnState = "Sending...";
      this.form.post('/bank/agent-float').then(function (data) {
        if (data.status === "SUCCESS") {
          _this2.modal.type = 'success', _this2.modal.message = "Your payment of has been successfully submitted.";
          _this2.modal.title = 'Payment succeeded';
          _this2.is_verified = false;
          _this2.form.is_verified = false;
          _this2.btnState = "Sent";
          var bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return bn.click();
          }, 200);
        } else {
          _this2.modal.type = 'failed', _this2.modal.message = data.message, _this2.modal.title = 'Payment not succeeded';
          _this2.is_verified = false;
          _this2.form.is_verified = false;
          _this2.isValidating = false;
          _this2.btnState = "Send";
          var _bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return _bn.click();
          }, 200);
        }
      })["catch"](function (error) {
        _this2.isValidating = false;
        _this2.is_verified = true;
        _this2.form.is_verified = true;
        _this2.btnState = "Send";
      });
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    apexchart: (vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default())
  },
  data: function data() {
    return {
      series: [],
      xAxisLabels: [],
      loaded: false,
      chartOptions: {
        chart: {
          type: 'line',
          height: 350
        },
        stroke: {
          width: 5,
          curve: 'smooth'
        },
        markers: {
          size: 4,
          hover: {
            size: 6
          }
        },
        xaxis: {
          categories: [],
          title: {
            text: 'Date'
          }
        },
        yaxis: {
          title: {
            text: 'Transactions'
          },
          labels: {
            formatter: function formatter(val) {
              return val + 'k';
            }
          }
        },
        grid: {
          borderColor: '#e7e7e7',
          strokeDashArray: 5
        },
        dataLabels: {
          enabled: false
        },
        tooltip: {
          y: {
            formatter: function formatter(val) {
              return val + ' transactions';
            }
          }
        }
      }
    };
  },
  methods: {
    fetchTransactionData: function fetchTransactionData() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/teller-dashboard/weekly-transanctions');
            case 3:
              response = _context.sent;
              data = response.data;
              _this.updateChart(data);
              _this.loaded = true;
              _context.next = 12;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.error('Error fetching transaction data:', _context.t0);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 9]]);
      }))();
    },
    updateChart: function updateChart(data) {
      this.xAxisLabels = data.categories;
      this.series = data.series.map(function (serviceType) {
        return {
          name: serviceType.name,
          data: serviceType.data.map(function (amount) {
            return amount / 1000;
          })
        };
      });
      this.chartOptions.xaxis.categories = this.xAxisLabels;
    }
  },
  mounted: function mounted() {
    // Fetch the data when the component is mounted
    this.fetchTransactionData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/user/UpdateProfile.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/user/UpdateProfile.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _payments_modal_Modal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../payments/modal/Modal.vue */ "./resources/js/components/pages/payments/modal/Modal.vue");
/* harmony import */ var _utils_form_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/form/Form */ "./resources/js/utils/form/Form.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Modal: _payments_modal_Modal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    user: {
      type: Object,
      required: true,
      "default": function _default() {}
    },
    page_info: {
      type: Object
    },
    role: {
      type: Object,
      required: false,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      selectedFile: null,
      previewImage: null,
      walletId: '',
      customerName: '',
      profile: new _utils_form_Form__WEBPACK_IMPORTED_MODULE_1__["default"]({
        tellerName: '',
        tellerPhone: '',
        email: ''
      }, {
        resetOnSuccess: false
      }),
      form: new _utils_form_Form__WEBPACK_IMPORTED_MODULE_1__["default"]({
        wallet_number: '',
        walletId: '',
        is_verified: false,
        customerName: '',
        newPin: ''
      }),
      modal: {
        message: 'Unexpected Error Occurred',
        type: 'failed',
        title: 'Error'
      },
      response: false,
      responseType: 'alert-danger',
      responseMessage: 'Error',
      showConfirmPin: false,
      showPin: false,
      hidePin: 'bi-eye-slash',
      is_verified: false,
      state: 'Submit',
      stateBtn: 'Submit',
      newPinInputs: Array(4).fill(""),
      confirmPinInputs: Array(4).fill(""),
      isValidating: false,
      typingTimeout: null
    };
  },
  computed: {
    canUpdate: function canUpdate() {
      return this.profile.processing;
    },
    canSubmit: function canSubmit() {
      return this.newPinInputs.join('').length === 4 && this.confirmPinInputs.join('').length === 4 && this.newPinInputs.join('') === this.confirmPinInputs.join('') && this.form.processing === false;
    }
  },
  created: function created() {
    this.profile.populate(this.user);
  },
  methods: {
    updateProfile: function updateProfile() {
      var _this$page_info,
        _this = this;
      this.stateBtn = "Updating...";
      this.canSubmit = true;
      this.profile.post("".concat((_this$page_info = this.page_info) === null || _this$page_info === void 0 ? void 0 : _this$page_info.domain, "bank/update-profile")).then(function (data) {
        if (data.status === "SUCCESS") {
          _this.is_verified = false;
          _this.modal.type = 'success';
          var message = '';
          var failed_message = '';
          data.updatedFields.forEach(function (field) {
            return message += "".concat(field, ", ");
          });
          data.failedFields.forEach(function (field) {
            return failed_message += "".concat(field, ", ");
          });
          console.log(message);
          _this.modal.message = "".concat(message, " ").concat(message ? 'Updated' : 'nothing to Updated', ". ").concat(failed_message, " ").concat(failed_message && 'failed');
          data.updatedFields.length !== 0 ? _this.modal.title = 'Profile Updated' : _this.modal.title = 'Profile Updated Failed';
          _this.stateBtn = "Updated";
          var bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return bn.click();
          }, 200);
          message && setTimeout(function () {
            return window.location.reload();
          }, 1000);
        } else {
          _this.response = true;
          _this.responseMessage = data.message;
          _this.is_verified = false;
          _this.form.is_verified = false;
          _this.isValidating = false;
          _this.stateBtn = "Update";
          _this.modal.type = 'failed', _this.modal.message = "Your payment of has been successfully submitted.";
          _this.modal.title = 'Payment succeeded';
          var _bn = document.getElementById('modalBtn');
          setTimeout(function () {
            return _bn.click();
          }, 200);
        }
      })["catch"](function (error) {
        _this.response = true;
        _this.responseMessage = "An error occurred when connecting";
        _this.isValidating = false;
        _this.is_verified = true;
        _this.form.is_verified = true;
        _this.stateBtn = "Update";
        _this.modal.type = 'failed', _this.modal.message = "Nothing Updated";
        _this.modal.title = 'Profile Updated Failed';
        var bn = document.getElementById('modalBtn');
        setTimeout(function () {
          return bn.click();
        }, 200);
      });
    },
    goBack: function goBack() {
      window.history.back();
    },
    handleFileUpload: function handleFileUpload(event) {
      var _this2 = this;
      this.selectedFile = null;
      this.previewImage = null;
      var file = event.target.files[0];
      if (file) {
        this.selectedFile = file;
        var reader = new FileReader();
        reader.onload = function (e) {
          _this2.previewImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleShowConfirmPin: function handleShowConfirmPin() {
      var _this3 = this;
      this.showConfirmPin = !this.showConfirmPin;
      var input = document.querySelectorAll('#confirmPin');
      input.forEach(function (input) {
        return input.type = _this3.showConfirmPin ? 'text' : 'password';
      });
    },
    handleShowPin: function handleShowPin() {
      var _this4 = this;
      this.showPin = !this.showPin;
      var input = document.querySelectorAll('#pin');
      input.forEach(function (input) {
        return input.type = _this4.showPin ? 'text' : 'password';
      });
    },
    handleInput: function handleInput(index, type) {
      var pinArray = type === 'new' ? this.newPinInputs : this.confirmPinInputs;
      if (pinArray[index] !== "" && index < pinArray.length - 1) {
        this.$refs["".concat(type, "PinInputs")][index + 1].focus();
      }
    },
    handleKeyDown: function handleKeyDown(event, index, type) {
      var pinArray = type === 'new' ? this.newPinInputs : this.confirmPinInputs;
      if (event.key === 'Backspace' && pinArray[index] === '' && index > 0) {
        this.$refs["".concat(type, "PinInputs")][index - 1].focus();
      }
    },
    handleFocus: function handleFocus(event) {
      event.target.select();
    },
    handlePaste: function handlePaste(event, type) {
      var _this5 = this;
      event.preventDefault();
      var text = event.clipboardData.getData('text').replace(/\D/g, '');
      text.split('').slice(0, 4).forEach(function (digit, index) {
        _this5["".concat(type, "PinInputs")][index] = digit;
        _this5.$refs["".concat(type, "PinInputs")][index].focus();
      });
    },
    verifyPin: function verifyPin() {
      var _this$page_info2,
        _this6 = this;
      this.form.newPin = this.newPinInputs.join('');
      this.state = "Resetting...";
      this.canSubmit = true;
      this.form.post("".concat((_this$page_info2 = this.page_info) === null || _this$page_info2 === void 0 ? void 0 : _this$page_info2.domain, "profile/change-pin")).then(function (data) {
        if (data.status === "SUCCESS") {
          _this6.response = true;
          _this6.responseType = 'alert-success';
          _this6.responseMessage = data.message;
          _this6.is_verified = false;
          _this6.form.is_verified = false;
          _this6.newPinInputs = Array(4).fill(""), _this6.confirmPinInputs = Array(4).fill(""), _this6.state = "Submit";
          _this6.form.reset();
          setTimeout(function () {
            return document.querySelector('#pills-home-tab').click();
          }, 1000);
        } else {
          _this6.response = true;
          _this6.responseMessage = data.message;
          _this6.is_verified = false;
          _this6.form.is_verified = false;
          _this6.isValidating = false;
          _this6.state = "Submit";
        }
      })["catch"](function (error) {
        _this6.response = true;
        _this6.responseMessage = "An error occurred when connecting";
        _this6.isValidating = false;
        _this6.is_verified = true;
        _this6.form.is_verified = true;
        _this6.state = "Submit";
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/GlEscrowManagement/CashierAccount.vue?vue&type=template&id=d8c0af74":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/GlEscrowManagement/CashierAccount.vue?vue&type=template&id=d8c0af74 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _vm._m(0);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-8"
  }, [_c("div", {
    staticClass: "card w-100",
    staticStyle: {
      "margin-top": "50px",
      "border-radius": "10px"
    }
  }, [_c("div", {
    staticClass: "card-header text-white",
    staticStyle: {
      "background-color": "#041b3f",
      "border-top-left-radius": "10px",
      "border-top-right-radius": "10px"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("form", {
    staticClass: "px-lg-3",
    attrs: {
      action: "",
      method: "post"
    }
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "agentID"
    }
  }, [_vm._v("Cashier ID")]), _vm._v(" "), _c("input", {
    staticClass: "form-control mb-3",
    attrs: {
      type: "text",
      id: "cashierId",
      name: "cashierId",
      placeholder: "Enter Cashier Account ID",
      value: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "amount"
    }
  }, [_vm._v("Amount")]), _vm._v(" "), _c("input", {
    staticClass: "form-control mb-3",
    attrs: {
      type: "text",
      id: "amount",
      name: "amount",
      placeholder: "Enter Amount"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("a", {
    staticClass: "btn btn-outline-primary px-5 me-2",
    attrs: {
      href: ""
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary px-5",
    staticStyle: {
      "background-color": "#041b3f"
    },
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Submit")])])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue?vue&type=template&id=e241d7a6&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue?vue&type=template&id=e241d7a6&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.loaded ? _c("div", {
    staticClass: "d-lg-flex align-items-center gap-2"
  }, [_c("apexchart", {
    attrs: {
      type: "donut",
      height: "350",
      options: _vm.chartOptions,
      series: _vm.series
    }
  }), _vm._v(" "), _c("div", [_c("div", [_c("span", {
    staticClass: "badge bg-warning me-1 rounded-circle",
    staticStyle: {
      width: "5px",
      height: "5px"
    }
  }), _vm._v(" "), _c("span", [_c("div", [_vm._v("Failed Transaction")]), _vm._v(" "), _c("div", {
    staticClass: "fs-24"
  }, [_vm._v(_vm._s(_vm.series[1]) + " K")])])]), _vm._v(" "), _c("div", [_c("span", {
    staticClass: "badge-success p-2 w-2 h-2"
  }), _vm._v(" "), _c("span", [_c("div", [_vm._v("Successful Transaction")]), _vm._v(" "), _c("div", {
    staticClass: "fs-24"
  }, [_vm._v(_vm._s(_vm.series[0]) + " K")])])])])], 1) : _c("div", {
    staticClass: "loader mx-auto"
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/AccountCreation.vue?vue&type=template&id=028025d1&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/AccountCreation.vue?vue&type=template&id=028025d1&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-10 me-auto"
  }, [_c("div", {
    staticClass: "card w-100",
    staticStyle: {
      "margin-top": "50px",
      "border-radius": "10px"
    }
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("form", {
    staticClass: "px-3 row",
    attrs: {
      enctype: "multipart/form-data"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.createAccount.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "col-lg-6 col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "role"
    }
  }, [_vm._v("Select Group")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.role,
      expression: "form.role"
    }],
    staticClass: "form-select",
    attrs: {
      name: "role",
      id: "role"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "role", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "Customer"
    }
  }, [_vm._v("Customer")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Teller"
    }
  }, [_vm._v("Teller")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Agent"
    }
  }, [_vm._v("Agent")])]), _vm._v(" "), _vm.form.errors.has("role") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.errors.first("role"))
    }
  }) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "fullname"
    }
  }, [_vm._v("Full Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.fullname,
      expression: "form.fullname"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "fullname",
      id: "fullname",
      placeholder: "Enter Full Name"
    },
    domProps: {
      value: _vm.form.fullname
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "fullname", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.form.errors.has("fullname") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.errors.first("fullname"))
    }
  }) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "dob"
    }
  }, [_vm._v("Date of Birth")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "form-control",
    attrs: {
      config: _vm.dateConfig,
      placeholder: "Select birthdate"
    },
    model: {
      value: _vm.form.dob,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "dob", $$v);
      },
      expression: "form.dob"
    }
  }), _vm._v(" "), _vm.form.errors.has("dob") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.errors.first("dob"))
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "phone"
    }
  }, [_vm._v("Phone Number")]), _vm._v(" "), _c("vue-tel-input", {
    ref: "phoneInput",
    attrs: {
      "enable-formatting": true,
      "default-country": "et",
      mode: _vm.international,
      placeholder: "Enter your phone number"
    },
    on: {
      input: _vm.formatPhoneNumber,
      "country-changed": _vm.onCountryChange
    },
    model: {
      value: _vm.form.fullphone,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "fullphone", $$v);
      },
      expression: "form.fullphone"
    }
  }), _vm._v(" "), _vm.form.errors.has("fullphone") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.errors.first("fullphone"))
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "documentId"
    }
  }, [_vm._v("Document Type")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.docType,
      expression: "form.docType"
    }],
    staticClass: "form-select",
    attrs: {
      name: "gender",
      id: "gender"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "docType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "NationalId"
    }
  }, [_vm._v("National ID")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Passport"
    }
  }, [_vm._v("Passport")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Other"
    }
  }, [_vm._v("Other")])]), _vm._v(" "), _vm.form.errors.has("docType") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.errors.first("docType"))
    }
  }) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "documentId"
    }
  }, [_vm._v("Document ID")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.documentId,
      expression: "form.documentId"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "documentId",
      id: "documentId",
      placeholder: "Enter Document"
    },
    domProps: {
      value: _vm.form.documentId
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "documentId", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.form.errors.has("documentId") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.errors.first("documentId"))
    }
  }) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Email Address")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.email,
      expression: "form.email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "email",
      name: "email",
      id: "email",
      placeholder: "Enter Email Address",
      value: ""
    },
    domProps: {
      value: _vm.form.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "email", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.form.errors.has("email") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.errors.first("email"))
    }
  }) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "gender"
    }
  }, [_vm._v("Gender")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.gender,
      expression: "form.gender"
    }],
    staticClass: "form-select",
    attrs: {
      name: "gender",
      id: "gender"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "gender", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "Male"
    }
  }, [_vm._v("Male")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Female"
    }
  }, [_vm._v("Female")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Female"
    }
  }, [_vm._v("Other")])]), _vm._v(" "), _vm.form.errors.has("gender") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.errors.first("gender"))
    }
  }) : _vm._e()]), _vm._v(" "), _vm.agent || _vm.teller ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-6 col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "trade_license"
    }
  }, [_vm._v("Trade License")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.trade_license,
      expression: "form.trade_license"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "trade_license",
      id: "trade_license",
      placeholder: "Enter Trade License"
    },
    domProps: {
      value: _vm.form.trade_license
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "trade_license", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.form.errors.has("trade_license") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.errors.first("trade_license"))
    }
  }) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "branch"
    }
  }, [_vm._v("Branch Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.branch,
      expression: "form.branch"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "branch",
      id: "branch",
      placeholder: "Enter Branch Name"
    },
    domProps: {
      value: _vm.form.branch
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "branch", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.form.errors.has("branch") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.errors.first("branch"))
    }
  }) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("button", {
    staticClass: "btn btn-outline-primary px-5 me-2",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.goBack
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary px-5",
    staticStyle: {
      "background-color": "#041b3f"
    },
    attrs: {
      disabled: !_vm.canSubmit,
      type: "submit"
    },
    domProps: {
      innerHTML: _vm._s(_vm.btnState)
    }
  })])])]), _vm._v(" "), _c("a", {
    staticClass: "btn",
    staticStyle: {
      visibility: "hidden"
    },
    attrs: {
      id: "modalBtn",
      href: "#",
      "data-bs-toggle": "modal",
      "data-bs-target": "#modal-success"
    }
  }, [_vm._v("\n                Success modal\n            ")]), _vm._v(" "), _c("modal", {
    attrs: {
      message: _vm.modal.message,
      title: _vm.modal.title,
      type: _vm.modal.type
    }
  })], 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header text-white",
    staticStyle: {
      "background-color": "#041b3f",
      "border-top-left-radius": "10px",
      "border-top-right-radius": "10px"
    }
  }, [_c("h5", {
    staticClass: "mb-0 text-white"
  }, [_vm._v("Account Details")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/GroupManagement.vue?vue&type=template&id=66065a72&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/GroupManagement.vue?vue&type=template&id=66065a72&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-8 me-auto"
  }, [_c("div", {
    staticClass: "card w-100",
    staticStyle: {
      "margin-top": "50px",
      "border-radius": "10px"
    }
  }, [_c("div", {
    staticClass: "card-header text-white",
    staticStyle: {
      "background-color": "#041b3f",
      "border-top-left-radius": "10px",
      "border-top-right-radius": "10px"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.changeGroup.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "recipientName"
    }
  }, [_vm._v("Phone no or Ac no")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.user_id,
      expression: "form.user_id"
    }],
    staticClass: "form-control mb-3",
    attrs: {
      disabled: _vm.is_verified,
      type: "text",
      id: "user_id",
      name: "user_id",
      placeholder: "Enter Phone no or Ac no"
    },
    domProps: {
      value: _vm.form.user_id
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "user_id", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.isValidating ? _c("div", {
    staticClass: "spinner mt-2"
  }) : _vm._e()]), _vm._v(" "), _vm.is_verified ? _c("div", [_c("div", {
    staticClass: "mb-4",
    attrs: {
      id: "recipient_name_field_group_manage"
    }
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "recipient_name_input_manage"
    }
  }, [_vm._v("Customer\n                            Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.recipient_name,
      expression: "form.recipient_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "recipient_name_input_manage",
      name: "recipient_name",
      disabled: "",
      placeholder: "Enter Recipient Name"
    },
    domProps: {
      value: _vm.form.recipient_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "recipient_name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3",
    attrs: {
      id: "current_group_field"
    }
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "current_group"
    }
  }, [_vm._v("Current Group")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.current_group,
      expression: "form.current_group"
    }],
    staticClass: "form-select",
    attrs: {
      disabled: "",
      id: "current_group",
      name: "new_group"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "current_group", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_vm.groups.length === 0 ? _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("No group available")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.groups, function (group) {
    return _c("option", {
      key: group.id,
      domProps: {
        value: group.id
      }
    }, [_vm._v(_vm._s(group.name))]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "mb-3",
    attrs: {
      id: "new_group_field"
    }
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "role"
    }
  }, [_vm._v("New Group")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.new_group,
      expression: "form.new_group"
    }],
    staticClass: "form-select",
    attrs: {
      name: "new_group",
      id: "role"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "new_group", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_vm.groups.length === 0 ? _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("No group available")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.groups, function (group) {
    return _c("option", {
      key: group.id,
      domProps: {
        value: group.id
      }
    }, [_vm._v(_vm._s(group.name))]);
  })], 2)])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("button", {
    staticClass: "btn btn-outline-primary px-5 me-2",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.goBack
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary px-5",
    staticStyle: {
      "background-color": "#041b3f"
    },
    attrs: {
      disabled: !_vm.canSubmit
    }
  }, [_vm._v(_vm._s(_vm.btnState))])])])]), _vm._v(" "), _c("a", {
    staticClass: "btn",
    staticStyle: {
      visibility: "hidden"
    },
    attrs: {
      id: "modalBtn",
      href: "#",
      "data-bs-toggle": "modal",
      "data-bs-target": "#modal-success"
    }
  }, [_vm._v("\n                Success modal\n            ")]), _vm._v(" "), _c("modal", {
    attrs: {
      message: _vm.modal.message,
      title: _vm.modal.title,
      type: _vm.modal.type
    }
  })], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/ResetPin.vue?vue&type=template&id=411020f1&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/ResetPin.vue?vue&type=template&id=411020f1&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-6 me-auto"
  }, [_c("div", {
    staticClass: "card w-100 mt-5",
    staticStyle: {
      "border-radius": "10px"
    }
  }, [_c("div", {
    staticClass: "card-header",
    staticStyle: {
      "background-color": "#041b3f",
      "border-radius": "10px 10px 0 0"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("form", {
    staticClass: "px-lg-3",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.verifyPin.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "account_no"
    }
  }, [_vm._v("Phone No or Ac no")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.wallet_number,
      expression: "form.wallet_number"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: _vm.is_verified,
      type: "text",
      id: "account_no",
      name: "walletId",
      placeholder: "Enter Phone No or Ac no"
    },
    domProps: {
      value: _vm.form.wallet_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "wallet_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.isValidating ? _c("div", {
    staticClass: "spinner mt-2"
  }) : _vm._e()]), _vm._v(" "), _vm.is_verified ? _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "customer_name"
    }
  }, [_vm._v("Customer's Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.customerName,
      expression: "form.customerName"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: _vm.is_verified,
      type: "text",
      id: "customer_name",
      placeholder: "Enter customer name"
    },
    domProps: {
      value: _vm.form.customerName
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "customerName", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.is_verified ? _c("div", {
    staticClass: "mt-6"
  }, [_c("p", {
    staticClass: "text-muted"
  }, [_vm._v("Provide the new pin for the customer")]), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_c("label", {
    staticClass: "form-label d-block text-start",
    attrs: {
      "for": "new-pin"
    }
  }, [_vm._v("New PIN")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center gap-4"
  }, [_vm._l(_vm.newPinInputs, function (pin, index) {
    return _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.newPinInputs[index],
        expression: "newPinInputs[index]"
      }],
      key: "new-pin-".concat(index),
      ref: "newPinInputs",
      refInFor: true,
      staticClass: "form-control text-center otp-input",
      attrs: {
        type: "password",
        id: "pin",
        maxlength: "1"
      },
      domProps: {
        value: _vm.newPinInputs[index]
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.newPinInputs, index, $event.target.value);
        }, function ($event) {
          return _vm.handleInput(index, "new");
        }],
        keydown: function keydown($event) {
          return _vm.handleKeyDown($event, index, "new");
        },
        paste: function paste($event) {
          return _vm.handlePaste($event, "new");
        },
        focus: _vm.handleFocus
      }
    });
  }), _vm._v(" "), _c("div", {
    on: {
      click: _vm.handleShowPin
    }
  }, [_c("i", {
    "class": "bi ".concat(_vm.showPin ? "bi-eye" : "bi-eye-slash", " fs-22")
  })])], 2)]), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_c("label", {
    staticClass: "form-label d-block text-start",
    attrs: {
      "for": "confirm-pin"
    }
  }, [_vm._v("Confirm PIN")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-4 align-items-center"
  }, [_vm._l(_vm.confirmPinInputs, function (pin, index) {
    return _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.confirmPinInputs[index],
        expression: "confirmPinInputs[index]"
      }],
      key: "confirm-pin-".concat(index),
      ref: "confirmPinInputs",
      refInFor: true,
      staticClass: "form-control text-center otp-input",
      attrs: {
        type: "password",
        id: "confirmPin",
        maxlength: "1"
      },
      domProps: {
        value: _vm.confirmPinInputs[index]
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.confirmPinInputs, index, $event.target.value);
        }, function ($event) {
          return _vm.handleInput(index, "confirm");
        }],
        keydown: function keydown($event) {
          return _vm.handleKeyDown($event, index, "confirm");
        },
        paste: function paste($event) {
          return _vm.handlePaste($event, "confirm");
        },
        focus: _vm.handleFocus
      }
    });
  }), _vm._v(" "), _c("div", {
    on: {
      click: _vm.handleShowConfirmPin
    }
  }, [_c("i", {
    "class": "bi ".concat(_vm.showConfirmPin ? "bi-eye" : "bi-eye-slash", " fs-22")
  })])], 2)])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-3 flex-wrap flex-column-reverse flex-md-row justify-content-md-end"
  }, [_c("button", {
    staticClass: "btn btn-outline-primary px-5",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.goBack
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary px-5",
    staticStyle: {
      "background-color": "#041b3f"
    },
    attrs: {
      disabled: !_vm.canSubmit,
      type: "submit"
    },
    domProps: {
      innerHTML: _vm._s(_vm.state)
    }
  })])])]), _vm._v(" "), _c("a", {
    staticClass: "btn",
    staticStyle: {
      visibility: "hidden"
    },
    attrs: {
      id: "modalBtn",
      href: "#",
      "data-bs-toggle": "modal",
      "data-bs-target": "#modal-success"
    }
  }, [_vm._v("\n            Success modal\n        ")]), _vm._v(" "), _c("modal", {
    attrs: {
      message: _vm.modal.message,
      title: _vm.modal.title,
      type: _vm.modal.type
    }
  })], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/UpdateAccount.vue?vue&type=template&id=728be3ee&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/UpdateAccount.vue?vue&type=template&id=728be3ee&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-8 me-auto"
  }, [_c("div", {
    staticClass: "card w-100",
    staticStyle: {
      "margin-top": "50px",
      "border-radius": "10px"
    }
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("form", {
    attrs: {
      id: "updateForm"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
      }
    }
  }, [!_vm.is_verified ? _c("div", {
    staticClass: "form-group mb-3"
  }, [_c("label", {
    attrs: {
      "for": "accountPhoneInput"
    }
  }, [_vm._v("Ac no or Phone no")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.acountPhoneInput,
      expression: "form.acountPhoneInput"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "account_no",
      name: "walletId",
      placeholder: "Enter Phone No or Ac no"
    },
    domProps: {
      value: _vm.form.acountPhoneInput
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "acountPhoneInput", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.isValidating ? _c("div", {
    staticClass: "spinner mt-2"
  }) : _vm._e()])])]) : _vm._e(), _vm._v(" "), _vm.is_verified && _vm.on_edit === false ? _c("div", {
    staticClass: "col-lg-10 mx-auto mb-3"
  }, [_c("div", {
    staticClass: "form-group mb-3"
  }, [_c("label", {
    attrs: {
      "for": "nameInput"
    }
  }, [_vm._v("Wallet Name")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2 d-flex align-items-center justify-content-center"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.fullname,
      expression: "form.fullname"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      id: "nameInput",
      name: "name",
      placeholder: "Enter Name"
    },
    domProps: {
      value: _vm.form.fullname
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "fullname", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group mb-3"
  }, [_c("label", {
    attrs: {
      "for": "phoneNumber"
    }
  }, [_vm._v("Phone Number")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2 d-flex align-items-center justify-content-center"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.acountPhoneInput,
      expression: "form.acountPhoneInput"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      id: "phoneNumberInput",
      name: "phoneNumber",
      placeholder: "Enter Phone Number"
    },
    domProps: {
      value: _vm.form.acountPhoneInput
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "acountPhoneInput", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("button", {
    staticClass: "btn btn-outline-primary",
    on: {
      click: _vm.cancel
    }
  }, [_vm._v("back")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-success",
    on: {
      click: _vm.onEdit
    }
  }, [_vm._v("Edit")])])]) : _vm._e(), _vm._v(" "), _vm.on_edit ? _c("div", {
    attrs: {
      id: "is_verified"
    }
  }, [_c("div", {
    staticClass: "form-group mb-3"
  }, [_c("label", {
    attrs: {
      "for": "nameInput"
    }
  }, [_vm._v("Wallet Name")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2 d-flex align-items-center justify-content-center"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.fullname,
      expression: "form.fullname"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "nameInput",
      name: "name",
      placeholder: "Enter Name"
    },
    domProps: {
      value: _vm.form.fullname
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "fullname", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      id: "name",
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.updateField("name", "fullname");
      }
    }
  }, [_vm._v("Update")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group mb-3"
  }, [_c("label", {
    attrs: {
      "for": "phoneNumber"
    }
  }, [_vm._v("Phone Number")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2 d-flex align-items-center justify-content-center"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.phoneNumber,
      expression: "form.phoneNumber"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "phoneNumberInput",
      name: "phoneNumber",
      placeholder: "Enter Phone Number"
    },
    domProps: {
      value: _vm.form.phoneNumber
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "phoneNumber", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      id: "phoneNumber",
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.updateField("phoneNumber", "phoneNumber");
      }
    }
  }, [_vm._v("Update")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group mb-3"
  }, [_c("label", {
    attrs: {
      "for": "macAddress"
    }
  }, [_vm._v("Mac Address")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2 d-flex align-items-center justify-content-center"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.macAddress,
      expression: "form.macAddress"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "macAddressInput",
      name: "macAddress",
      placeholder: "Mac Address"
    },
    domProps: {
      value: _vm.form.macAddress
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "macAddress", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      id: "macAddress",
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.updateField("macAddress", "macAddress");
      }
    }
  }, [_vm._v("Update")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group mb-3"
  }, [_c("label", {
    attrs: {
      "for": "language"
    }
  }, [_vm._v("Language")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2 d-flex align-items-center justify-content-center"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.language,
      expression: "form.language"
    }],
    staticClass: "form-select",
    attrs: {
      name: "language",
      id: "gender"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "language", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "English"
    }
  }, [_vm._v("English")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Somali"
    }
  }, [_vm._v("Somali")])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      id: "language",
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.updateField("language", "language");
      }
    }
  }, [_vm._v("Update")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group mb-3"
  }, [_c("label", {
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2 d-flex align-items-center justify-content-center"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.email,
      expression: "form.email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "email",
      id: "emailInput",
      name: "email",
      placeholder: "Email"
    },
    domProps: {
      value: _vm.form.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "email", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      id: "email",
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.updateField("email", "email");
      }
    }
  }, [_vm._v("Update")])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between mt-2"
  }, [_c("a", {
    staticClass: "btn btn-danger exit-btn",
    attrs: {
      href: ""
    }
  }, [_vm._v("Exit")]), _vm._v(" "), _vm.on_edit ? _c("button", {
    staticClass: "btn btn-success",
    on: {
      click: _vm.done
    }
  }, [_vm._v("Done")]) : _vm._e(), _vm._v(" "), !_vm.on_edit && !_vm.is_verified ? _c("button", {
    staticClass: "btn btn-success",
    attrs: {
      disabled: _vm.isValidating
    },
    on: {
      click: _vm.verify
    }
  }, [_vm._v("Verify")]) : _vm._e()])])]), _vm._v(" "), _c("a", {
    staticClass: "btn",
    staticStyle: {
      visibility: "hidden"
    },
    attrs: {
      id: "modalBtn",
      href: "#",
      "data-bs-toggle": "modal",
      "data-bs-target": "#modal-success"
    }
  }, [_vm._v("\n                Success modal\n            ")]), _vm._v(" "), _c("modal", {
    attrs: {
      message: _vm.modal.message,
      title: _vm.modal.title,
      type: _vm.modal.type
    }
  })], 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header text-white",
    staticStyle: {
      "background-color": "#041b3f",
      "border-top-left-radius": "10px",
      "border-top-right-radius": "10px"
    }
  }, [_c("h5", {
    staticClass: "mb-0 text-white"
  }, [_vm._v("Customer Details")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/fraudManagement/Index.vue?vue&type=template&id=417467e4":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/fraudManagement/Index.vue?vue&type=template&id=417467e4 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-3 col-md-6"
  }, [_c("a", {
    attrs: {
      href: "/bank/fraud/limit-violation"
    }
  }, [_c("div", {
    staticClass: "card p-4 fw-bold"
  }, [_c("div", {
    staticClass: "d-flex flex-column align-items-center justify-content-center"
  }, [_c("div", {
    staticClass: "icon"
  }, [_c("svg", {
    attrs: {
      width: "91",
      height: "90",
      viewBox: "0 0 91 90",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("g", {
    attrs: {
      filter: "url(#filter0_d_2410_11557)"
    }
  }, [_c("rect", {
    attrs: {
      x: "16",
      y: "13",
      width: "58.6628",
      height: "58.6628",
      rx: "10",
      fill: "#041E43"
    }
  })]), _vm._v(" "), _c("g", {
    attrs: {
      "clip-path": "url(#clip0_2410_11557)"
    }
  }, [_c("path", {
    attrs: {
      d: "M28.2754 33.4565V30.6128H30.4006V33.4565",
      fill: "white"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M61.5996 33.4565V30.6128H63.7248V33.4565",
      fill: "white"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M33.6757 59.4866H25V57.8244C25 57.1696 25.5308 56.6387 26.1858 56.6387H32.49C33.1449 56.6387 33.6758 57.1695 33.6758 57.8244L33.6757 59.4866Z",
      fill: "white"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M46.0398 37.2676C40.3836 37.2676 35.066 35.065 31.0666 31.0656C30.8163 30.8153 30.8163 30.4096 31.0666 30.1594C31.3169 29.9091 31.7226 29.9091 31.9728 30.1594C39.7293 37.9159 52.3501 37.9159 60.1066 30.1594C60.3569 29.9091 60.7626 29.9091 61.0128 30.1594C61.2631 30.4097 61.2631 30.8154 61.0128 31.0656C57.0133 35.065 51.6958 37.2676 46.0398 37.2676Z",
      fill: "white"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M29.3381 24.5132C31.1942 24.5132 32.6987 26.0178 32.6987 27.8738C32.6987 29.7297 31.1941 31.2343 29.3381 31.2343C27.4822 31.2343 25.9775 29.7297 25.9775 27.8738C25.9775 27.1778 26.1891 26.5312 26.5513 25.9949C26.5513 25.9949 27.4427 24.5132 29.3381 24.5132Z",
      fill: "white"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M27.4636 37.9176L27.6289 33.4561H31.0465L31.9208 57.061L26.7607 56.8932L27.2347 44.0978L27.4636 37.9176Z",
      fill: "white"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M62.6623 24.5132C64.5184 24.5132 66.0229 26.0178 66.0229 27.8738C66.0229 29.7297 64.5183 31.2343 62.6623 31.2343C60.8064 31.2343 59.3018 29.7297 59.3018 27.8738C59.3018 27.0452 59.6016 26.2868 60.0986 25.7009C60.0986 25.7009 60.8275 24.5132 62.6623 24.5132Z",
      fill: "white"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M60.7888 37.9175L60.954 33.4561H64.3716L65.226 56.8931H60.0996L60.5599 44.0979L60.7888 37.9175Z",
      fill: "white"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M66.9999 59.4866H58.3242V57.8244C58.3242 57.1696 58.855 56.6387 59.51 56.6387H65.8142C66.4691 56.6387 67 57.1695 67 57.8244L66.9999 59.4866Z",
      fill: "white"
    }
  })]), _vm._v(" "), _c("defs", [_c("filter", {
    attrs: {
      id: "filter0_d_2410_11557",
      x: "0.601017",
      y: "0.534157",
      width: "89.4611",
      height: "89.4606",
      filterUnits: "userSpaceOnUse",
      "color-interpolation-filters": "sRGB"
    }
  }, [_c("feFlood", {
    attrs: {
      "flood-opacity": "0",
      result: "BackgroundImageFix"
    }
  }), _vm._v(" "), _c("feColorMatrix", {
    attrs: {
      "in": "SourceAlpha",
      type: "matrix",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
      result: "hardAlpha"
    }
  }), _vm._v(" "), _c("feOffset", {
    attrs: {
      dy: "2.93314"
    }
  }), _vm._v(" "), _c("feGaussianBlur", {
    attrs: {
      stdDeviation: "7.69949"
    }
  }), _vm._v(" "), _c("feComposite", {
    attrs: {
      in2: "hardAlpha",
      operator: "out"
    }
  }), _vm._v(" "), _c("feColorMatrix", {
    attrs: {
      type: "matrix",
      values: "0 0 0 0 0.0627451 0 0 0 0 0.164706 0 0 0 0 0.427451 0 0 0 0.29 0"
    }
  }), _vm._v(" "), _c("feBlend", {
    attrs: {
      mode: "normal",
      in2: "BackgroundImageFix",
      result: "effect1_dropShadow_2410_11557"
    }
  }), _vm._v(" "), _c("feBlend", {
    attrs: {
      mode: "normal",
      "in": "SourceGraphic",
      in2: "effect1_dropShadow_2410_11557",
      result: "shape"
    }
  })], 1), _vm._v(" "), _c("clipPath", {
    attrs: {
      id: "clip0_2410_11557"
    }
  }, [_c("rect", {
    attrs: {
      width: "42",
      height: "42",
      fill: "white",
      transform: "translate(25 21)"
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "info"
  }, [_vm._v("\n                                Limit violation\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "badge bg-primary fs-12 fw-light px-3 py-1"
  }, [_vm._v(_vm._s(_vm.statics.no_of_violation))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-6"
  }, [_c("a", {
    attrs: {
      href: "/bank/fraud/high-value-transaction"
    }
  }, [_c("div", {
    staticClass: "card p-4 fw-bold"
  }, [_c("div", {
    staticClass: "d-flex flex-column align-items-center justify-content-center"
  }, [_c("div", {
    staticClass: "icon"
  }, [_c("svg", {
    attrs: {
      width: "91",
      height: "90",
      viewBox: "0 0 91 90",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("g", {
    attrs: {
      filter: "url(#filter0_d_2410_11539)"
    }
  }, [_c("rect", {
    attrs: {
      x: "16",
      y: "13",
      width: "58.6628",
      height: "58.6628",
      rx: "10",
      fill: "#041E43"
    }
  })]), _vm._v(" "), _c("path", {
    attrs: {
      d: "M46.0801 36.0724V24.0571",
      stroke: "white",
      "stroke-width": "3",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M50.0854 28.0051L46.0803 24L42.0752 28.0051",
      stroke: "white",
      "stroke-width": "3",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M28.0576 59.0444C31.0614 59.0444 31.0614 60.0457 34.0653 60.0457C37.0691 60.0457 37.0691 59.0444 40.0729 59.0444C43.0768 59.0444 43.0768 60.0457 46.0806 60.0457C49.0844 60.0457 49.0844 59.0444 52.0883 59.0444C55.0921 59.0444 55.0921 60.0457 58.0959 60.0457C61.0997 60.0457 61.0997 59.0444 64.1036 59.0444",
      stroke: "white",
      "stroke-width": "3",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M28.0576 51.0347C31.0614 51.0347 31.0614 52.0359 34.0653 52.0359C37.0691 52.0359 37.0691 51.0347 40.0729 51.0347C43.0768 51.0347 43.0768 52.0359 46.0806 52.0359C49.0844 52.0359 49.0844 51.0347 52.0883 51.0347C55.0921 51.0347 55.0921 52.0359 58.0959 52.0359C61.0997 52.0359 61.0997 51.0347 64.1036 51.0347",
      stroke: "white",
      "stroke-width": "3",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M28 43.0146C31.0038 43.0146 31.0038 44.0159 34.0077 44.0159C37.0115 44.0159 37.0115 43.0146 40.0153 43.0146C43.0191 43.0146 43.0191 44.0159 46.023 44.0159C49.0268 44.0159 49.0268 43.0146 52.0306 43.0146C55.0345 43.0146 55.0345 44.0159 58.0383 44.0159C61.0421 44.0159 61.0421 43.0146 64.046 43.0146",
      stroke: "white",
      "stroke-width": "3",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }), _vm._v(" "), _c("defs", [_c("filter", {
    attrs: {
      id: "filter0_d_2410_11539",
      x: "0.601017",
      y: "0.534157",
      width: "89.4611",
      height: "89.4606",
      filterUnits: "userSpaceOnUse",
      "color-interpolation-filters": "sRGB"
    }
  }, [_c("feFlood", {
    attrs: {
      "flood-opacity": "0",
      result: "BackgroundImageFix"
    }
  }), _vm._v(" "), _c("feColorMatrix", {
    attrs: {
      "in": "SourceAlpha",
      type: "matrix",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
      result: "hardAlpha"
    }
  }), _vm._v(" "), _c("feOffset", {
    attrs: {
      dy: "2.93314"
    }
  }), _vm._v(" "), _c("feGaussianBlur", {
    attrs: {
      stdDeviation: "7.69949"
    }
  }), _vm._v(" "), _c("feComposite", {
    attrs: {
      in2: "hardAlpha",
      operator: "out"
    }
  }), _vm._v(" "), _c("feColorMatrix", {
    attrs: {
      type: "matrix",
      values: "0 0 0 0 0.0627451 0 0 0 0 0.164706 0 0 0 0 0.427451 0 0 0 0.29 0"
    }
  }), _vm._v(" "), _c("feBlend", {
    attrs: {
      mode: "normal",
      in2: "BackgroundImageFix",
      result: "effect1_dropShadow_2410_11539"
    }
  }), _vm._v(" "), _c("feBlend", {
    attrs: {
      mode: "normal",
      "in": "SourceGraphic",
      in2: "effect1_dropShadow_2410_11539",
      result: "shape"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "info"
  }, [_vm._v("\n                                High value transaction\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "badge bg-primary fs-12 fw-light px-3 py-1"
  }, [_vm._v(_vm._s(_vm.statics.no_of_high_value_transaction))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-6"
  }, [_c("a", {
    attrs: {
      href: "/bank/fraud/info-change"
    }
  }, [_c("div", {
    staticClass: "card p-4 fw-bold"
  }, [_c("div", {
    staticClass: "d-flex flex-column align-items-center justify-content-center"
  }, [_c("div", {
    staticClass: "icon"
  }, [_c("svg", {
    attrs: {
      width: "91",
      height: "90",
      viewBox: "0 0 91 90",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("g", {
    attrs: {
      filter: "url(#filter0_d_2410_11548)"
    }
  }, [_c("rect", {
    attrs: {
      x: "16",
      y: "13",
      width: "58.6628",
      height: "58.6628",
      rx: "10",
      fill: "#041E43"
    }
  })]), _vm._v(" "), _c("path", {
    attrs: {
      d: "M26.572 50.1749L36.3971 60H42V54.3971L32.1749 44.572C31.8009 44.2054 31.298 44 30.7742 44C30.2504 44 29.7475 44.2054 29.3735 44.572L26.572 47.3735C26.2054 47.7475 26 48.2504 26 48.7742C26 49.298 26.2054 49.8009 26.572 50.1749Z",
      stroke: "white",
      "stroke-width": "3",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M47 44H49C52.713 44 56.274 45.475 58.8995 48.1005C61.525 50.726 63 54.287 63 58C63 58.5304 62.7893 59.0391 62.4142 59.4142C62.0391 59.7893 61.5304 60 61 60H51",
      stroke: "white",
      "stroke-width": "3",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M46.5 44C52.299 44 57 39.299 57 33.5C57 27.701 52.299 23 46.5 23C40.701 23 36 27.701 36 33.5C36 39.299 40.701 44 46.5 44Z",
      stroke: "white",
      "stroke-width": "3",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }), _vm._v(" "), _c("defs", [_c("filter", {
    attrs: {
      id: "filter0_d_2410_11548",
      x: "0.601017",
      y: "0.534157",
      width: "89.4611",
      height: "89.4606",
      filterUnits: "userSpaceOnUse",
      "color-interpolation-filters": "sRGB"
    }
  }, [_c("feFlood", {
    attrs: {
      "flood-opacity": "0",
      result: "BackgroundImageFix"
    }
  }), _vm._v(" "), _c("feColorMatrix", {
    attrs: {
      "in": "SourceAlpha",
      type: "matrix",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
      result: "hardAlpha"
    }
  }), _vm._v(" "), _c("feOffset", {
    attrs: {
      dy: "2.93314"
    }
  }), _vm._v(" "), _c("feGaussianBlur", {
    attrs: {
      stdDeviation: "7.69949"
    }
  }), _vm._v(" "), _c("feComposite", {
    attrs: {
      in2: "hardAlpha",
      operator: "out"
    }
  }), _vm._v(" "), _c("feColorMatrix", {
    attrs: {
      type: "matrix",
      values: "0 0 0 0 0.0627451 0 0 0 0 0.164706 0 0 0 0 0.427451 0 0 0 0.29 0"
    }
  }), _vm._v(" "), _c("feBlend", {
    attrs: {
      mode: "normal",
      in2: "BackgroundImageFix",
      result: "effect1_dropShadow_2410_11548"
    }
  }), _vm._v(" "), _c("feBlend", {
    attrs: {
      mode: "normal",
      "in": "SourceGraphic",
      in2: "effect1_dropShadow_2410_11548",
      result: "shape"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "info"
  }, [_vm._v("\n                                Customer Change\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "badge bg-primary fs-12 fw-light px-3 py-1"
  }, [_vm._v(_vm._s(_vm.statics.no_of_infor_updated))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-6"
  }, [_c("a", {
    attrs: {
      href: "/bank/fraud/pin-change"
    }
  }, [_c("div", {
    staticClass: "card p-4 fw-bold"
  }, [_c("div", {
    staticClass: "d-flex flex-column align-items-center justify-content-center"
  }, [_c("div", {
    staticClass: "icon"
  }, [_c("svg", {
    attrs: {
      width: "91",
      height: "90",
      viewBox: "0 0 91 90",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("g", {
    attrs: {
      filter: "url(#filter0_d_4301_8227)"
    }
  }, [_c("rect", {
    attrs: {
      x: "16",
      y: "13",
      width: "58.6628",
      height: "58.6628",
      rx: "10",
      fill: "#041E43"
    }
  })]), _vm._v(" "), _c("path", {
    attrs: {
      d: "M64.904 24H26V40.0368H64.904V24Z",
      stroke: "white",
      "stroke-width": "3",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M32.2366 32.9093C32.7287 32.9093 33.1276 32.5104 33.1276 32.0184C33.1276 31.5263 32.7287 31.1274 32.2366 31.1274C31.7446 31.1274 31.3457 31.5263 31.3457 32.0184C31.3457 32.5104 31.7446 32.9093 32.2366 32.9093Z",
      stroke: "white",
      "stroke-width": "3",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M41.1458 32.9093C41.6379 32.9093 42.0367 32.5104 42.0367 32.0184C42.0367 31.5263 41.6379 31.1274 41.1458 31.1274C40.6538 31.1274 40.2549 31.5263 40.2549 32.0184C40.2549 32.5104 40.6538 32.9093 41.1458 32.9093Z",
      stroke: "white",
      "stroke-width": "3",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M49.7581 32.9093C50.2502 32.9093 50.6491 32.5104 50.6491 32.0184C50.6491 31.5263 50.2502 31.1274 49.7581 31.1274C49.2661 31.1274 48.8672 31.5263 48.8672 32.0184C48.8672 32.5104 49.2661 32.9093 49.7581 32.9093Z",
      stroke: "white",
      "stroke-width": "3",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M58.6673 32.9093C59.1593 32.9093 59.5582 32.5104 59.5582 32.0184C59.5582 31.5263 59.1593 31.1274 58.6673 31.1274C58.1753 31.1274 57.7764 31.5263 57.7764 32.0184C57.7764 32.5104 58.1753 32.9093 58.6673 32.9093Z",
      stroke: "white",
      "stroke-width": "3",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M42.0361 46.8672H48.8666",
      stroke: "white",
      "stroke-width": "3",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M52.4307 46.8672H59.5581",
      stroke: "white",
      "stroke-width": "3",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M31.3457 46.8672H38.4732",
      stroke: "white",
      "stroke-width": "3",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M42.0361 53.9941H48.8666",
      stroke: "white",
      "stroke-width": "3",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M52.4307 53.9941H59.5581",
      stroke: "white",
      "stroke-width": "3",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M31.3457 53.9941H38.4732",
      stroke: "white",
      "stroke-width": "3",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M42.0361 61.1221H48.8666",
      stroke: "white",
      "stroke-width": "3",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M52.4307 61.1221H59.5581",
      stroke: "white",
      "stroke-width": "3",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M31.3457 61.1221H38.4732",
      stroke: "white",
      "stroke-width": "3",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c("defs", [_c("filter", {
    attrs: {
      id: "filter0_d_4301_8227",
      x: "0.601017",
      y: "0.534157",
      width: "89.4611",
      height: "89.4606",
      filterUnits: "userSpaceOnUse",
      "color-interpolation-filters": "sRGB"
    }
  }, [_c("feFlood", {
    attrs: {
      "flood-opacity": "0",
      result: "BackgroundImageFix"
    }
  }), _vm._v(" "), _c("feColorMatrix", {
    attrs: {
      "in": "SourceAlpha",
      type: "matrix",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
      result: "hardAlpha"
    }
  }), _vm._v(" "), _c("feOffset", {
    attrs: {
      dy: "2.93314"
    }
  }), _vm._v(" "), _c("feGaussianBlur", {
    attrs: {
      stdDeviation: "7.69949"
    }
  }), _vm._v(" "), _c("feComposite", {
    attrs: {
      in2: "hardAlpha",
      operator: "out"
    }
  }), _vm._v(" "), _c("feColorMatrix", {
    attrs: {
      type: "matrix",
      values: "0 0 0 0 0.0627451 0 0 0 0 0.164706 0 0 0 0 0.427451 0 0 0 0.29 0"
    }
  }), _vm._v(" "), _c("feBlend", {
    attrs: {
      mode: "normal",
      in2: "BackgroundImageFix",
      result: "effect1_dropShadow_4301_8227"
    }
  }), _vm._v(" "), _c("feBlend", {
    attrs: {
      mode: "normal",
      "in": "SourceGraphic",
      in2: "effect1_dropShadow_4301_8227",
      result: "shape"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "info"
  }, [_vm._v("\n                                PIN change\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "badge bg-primary fs-12 fw-light px-3 py-1"
  }, [_vm._v(_vm._s(_vm.statics.no_of_PIN_resetted))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-6"
  }, [_c("a", {
    attrs: {
      href: "/bank/fraud/time-violation"
    }
  }, [_c("div", {
    staticClass: "card p-4 fw-bold"
  }, [_c("div", {
    staticClass: "d-flex flex-column align-items-center justify-content-center"
  }, [_c("div", {
    staticClass: "icon"
  }, [_c("svg", {
    attrs: {
      width: "91",
      height: "90",
      viewBox: "0 0 91 90",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("g", {
    attrs: {
      filter: "url(#filter0_d_4301_8228)"
    }
  }, [_c("rect", {
    attrs: {
      x: "16",
      y: "13",
      width: "58.6628",
      height: "58.6628",
      rx: "10",
      fill: "#041E43"
    }
  })]), _vm._v(" "), _c("g", {
    attrs: {
      "clip-path": "url(#clip0_4301_8228)"
    }
  }, [_c("path", {
    attrs: {
      d: "M45.3333 43.8717C44.8269 43.5825 44.4059 43.1646 44.1131 42.6603C43.8203 42.156 43.666 41.5832 43.666 41C43.666 40.4168 43.8203 39.844 44.1131 39.3397C44.4059 38.8354 44.8269 38.4175 45.3333 38.1283V32.6667C45.3333 32.2246 45.5089 31.8007 45.8215 31.4882C46.134 31.1756 46.558 31 47 31C47.442 31 47.8659 31.1756 48.1785 31.4882C48.4911 31.8007 48.6667 32.2246 48.6667 32.6667V38.1283C49.1731 38.4175 49.5941 38.8354 49.8869 39.3397C50.1797 39.844 50.334 40.4168 50.334 41C50.334 41.5832 50.1797 42.156 49.8869 42.6603C49.5941 43.1646 49.1731 43.5825 48.6667 43.8717V47.6667C48.6667 48.1087 48.4911 48.5326 48.1785 48.8452C47.8659 49.1577 47.442 49.3333 47 49.3333C46.558 49.3333 46.134 49.1577 45.8215 48.8452C45.5089 48.5326 45.3333 48.1087 45.3333 47.6667V43.8717ZM47 21C46.558 21 46.134 21.1756 45.8215 21.4882C45.5089 21.8007 45.3333 22.2246 45.3333 22.6667C45.3333 23.1087 45.5089 23.5326 45.8215 23.8452C46.134 24.1577 46.558 24.3333 47 24.3333C51.4203 24.3333 55.6595 26.0893 58.7851 29.2149C61.9107 32.3405 63.6667 36.5797 63.6667 41C63.6667 45.4203 61.9107 49.6595 58.7851 52.7851C55.6595 55.9107 51.4203 57.6667 47 57.6667C46.558 57.6667 46.134 57.8423 45.8215 58.1548C45.5089 58.4674 45.3333 58.8913 45.3333 59.3333C45.3333 59.7754 45.5089 60.1993 45.8215 60.5118C46.134 60.8244 46.558 61 47 61C52.3043 61 57.3914 58.8929 61.1421 55.1421C64.8929 51.3914 67 46.3043 67 41C67 35.6957 64.8929 30.6086 61.1421 26.8579C57.3914 23.1071 52.3043 21 47 21ZM30.045 32.3067C29.7154 32.3067 29.3931 32.4044 29.1191 32.5876C28.845 32.7707 28.6313 33.031 28.5052 33.3355C28.3791 33.6401 28.346 33.9752 28.4104 34.2985C28.4747 34.6218 28.6334 34.9188 28.8665 35.1518C29.0996 35.3849 29.3965 35.5437 29.7199 35.608C30.0432 35.6723 30.3783 35.6393 30.6828 35.5131C30.9873 35.387 31.2476 35.1734 31.4308 34.8993C31.6139 34.6252 31.7117 34.303 31.7117 33.9733C31.7117 33.5313 31.5361 33.1074 31.2235 32.7948C30.911 32.4823 30.487 32.3067 30.045 32.3067ZM30.3333 41C30.3333 40.6704 30.2356 40.3481 30.0525 40.074C29.8693 39.8 29.609 39.5863 29.3045 39.4602C28.9999 39.3341 28.6648 39.301 28.3415 39.3654C28.0182 39.4297 27.7212 39.5884 27.4882 39.8215C27.2551 40.0546 27.0963 40.3515 27.032 40.6748C26.9677 40.9981 27.0007 41.3333 27.1269 41.6378C27.253 41.9423 27.4666 42.2026 27.7407 42.3858C28.0148 42.5689 28.337 42.6667 28.6667 42.6667C29.1087 42.6667 29.5326 42.4911 29.8452 42.1785C30.1577 41.8659 30.3333 41.442 30.3333 41ZM34.035 26.345C33.7054 26.345 33.3831 26.4427 33.1091 26.6259C32.835 26.809 32.6213 27.0693 32.4952 27.3739C32.3691 27.6784 32.3361 28.0135 32.4004 28.3368C32.4647 28.6601 32.6234 28.9571 32.8565 29.1902C33.0896 29.4233 33.3865 29.582 33.7099 29.6463C34.0332 29.7106 34.3683 29.6776 34.6728 29.5515C34.9773 29.4253 35.2376 29.2117 35.4208 28.9376C35.6039 28.6635 35.7017 28.3413 35.7017 28.0117C35.7017 27.5696 35.5261 27.1457 35.2135 26.8332C34.901 26.5206 34.477 26.345 34.035 26.345ZM39.965 22.4017C39.6354 22.4017 39.3131 22.4994 39.0391 22.6826C38.765 22.8657 38.5513 23.126 38.4252 23.4305C38.2991 23.7351 38.2661 24.0702 38.3304 24.3935C38.3947 24.7168 38.5534 25.0138 38.7865 25.2468C39.0196 25.4799 39.3165 25.6387 39.6398 25.703C39.9632 25.7673 40.2983 25.7343 40.6028 25.6081C40.9073 25.482 41.1676 25.2684 41.3508 24.9943C41.5339 24.7202 41.6317 24.398 41.6317 24.0683C41.6317 23.6263 41.4561 23.2024 41.1435 22.8898C40.831 22.5773 40.407 22.4017 39.965 22.4017ZM30.045 46.36C29.7154 46.36 29.3931 46.4577 29.1191 46.6409C28.845 46.824 28.6313 47.0843 28.5052 47.3889C28.3791 47.6934 28.346 48.0285 28.4104 48.3518C28.4747 48.6751 28.6334 48.9721 28.8665 49.2052C29.0996 49.4383 29.3965 49.597 29.7199 49.6613C30.0432 49.7256 30.3783 49.6926 30.6828 49.5665C30.9873 49.4403 31.2476 49.2267 31.4308 48.9526C31.6139 48.6785 31.7117 48.3563 31.7117 48.0267C31.7117 47.5846 31.5361 47.1607 31.2235 46.8482C30.911 46.5356 30.487 46.36 30.045 46.36ZM34.035 52.3217C33.7054 52.3217 33.3831 52.4194 33.1091 52.6026C32.835 52.7857 32.6213 53.046 32.4952 53.3505C32.3691 53.6551 32.3361 53.9902 32.4004 54.3135C32.4647 54.6368 32.6234 54.9338 32.8565 55.1668C33.0896 55.3999 33.3865 55.5587 33.7099 55.623C34.0332 55.6873 34.3683 55.6543 34.6728 55.5281C34.9773 55.402 35.2376 55.1884 35.4208 54.9143C35.6039 54.6402 35.7017 54.318 35.7017 53.9883C35.7017 53.5463 35.5261 53.1224 35.2135 52.8098C34.901 52.4973 34.477 52.3217 34.035 52.3217ZM39.965 56.265C39.6354 56.265 39.3131 56.3627 39.0391 56.5459C38.765 56.729 38.5513 56.9893 38.4252 57.2939C38.2991 57.5984 38.2661 57.9335 38.3304 58.2568C38.3947 58.5801 38.5534 58.8771 38.7865 59.1102C39.0196 59.3433 39.3165 59.502 39.6398 59.5663C39.9632 59.6306 40.2983 59.5976 40.6028 59.4715C40.9073 59.3453 41.1676 59.1317 41.3508 58.8576C41.5339 58.5835 41.6317 58.2613 41.6317 57.9317C41.6317 57.4896 41.4561 57.0657 41.1435 56.7532C40.831 56.4406 40.407 56.265 39.965 56.265Z",
      fill: "white"
    }
  })]), _vm._v(" "), _c("defs", [_c("filter", {
    attrs: {
      id: "filter0_d_4301_8228",
      x: "0.601017",
      y: "0.534157",
      width: "89.4611",
      height: "89.4606",
      filterUnits: "userSpaceOnUse",
      "color-interpolation-filters": "sRGB"
    }
  }, [_c("feFlood", {
    attrs: {
      "flood-opacity": "0",
      result: "BackgroundImageFix"
    }
  }), _vm._v(" "), _c("feColorMatrix", {
    attrs: {
      "in": "SourceAlpha",
      type: "matrix",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
      result: "hardAlpha"
    }
  }), _vm._v(" "), _c("feOffset", {
    attrs: {
      dy: "2.93314"
    }
  }), _vm._v(" "), _c("feGaussianBlur", {
    attrs: {
      stdDeviation: "7.69949"
    }
  }), _vm._v(" "), _c("feComposite", {
    attrs: {
      in2: "hardAlpha",
      operator: "out"
    }
  }), _vm._v(" "), _c("feColorMatrix", {
    attrs: {
      type: "matrix",
      values: "0 0 0 0 0.0627451 0 0 0 0 0.164706 0 0 0 0 0.427451 0 0 0 0.29 0"
    }
  }), _vm._v(" "), _c("feBlend", {
    attrs: {
      mode: "normal",
      in2: "BackgroundImageFix",
      result: "effect1_dropShadow_4301_8228"
    }
  }), _vm._v(" "), _c("feBlend", {
    attrs: {
      mode: "normal",
      "in": "SourceGraphic",
      in2: "effect1_dropShadow_4301_8228",
      result: "shape"
    }
  })], 1), _vm._v(" "), _c("clipPath", {
    attrs: {
      id: "clip0_4301_8228"
    }
  }, [_c("rect", {
    attrs: {
      width: "40",
      height: "40",
      fill: "white",
      transform: "translate(27 21)"
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "info"
  }, [_vm._v("\n                                Time violation\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "badge bg-primary fs-12 fw-light px-3 py-1"
  }, [_vm._v(_vm._s(_vm.statics.no_of_time_violation))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-6"
  }, [_c("a", {
    attrs: {
      href: "/bank/fraud/blocked-user-attempts"
    }
  }, [_c("div", {
    staticClass: "card p-4 fw-bold"
  }, [_c("div", {
    staticClass: "d-flex flex-column align-items-center justify-content-center"
  }, [_c("div", {
    staticClass: "icon"
  }, [_c("svg", {
    attrs: {
      width: "91",
      height: "90",
      viewBox: "0 0 91 90",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("g", {
    attrs: {
      filter: "url(#filter0_d_4301_8229)"
    }
  }, [_c("rect", {
    attrs: {
      x: "16",
      y: "13",
      width: "58.6628",
      height: "58.6628",
      rx: "10",
      fill: "#041E43"
    }
  })]), _vm._v(" "), _c("path", {
    attrs: {
      d: "M32.2721 29.2721L57.728 54.728M32.2721 54.728L57.728 29.2721M63 42C63 51.9412 54.9412 60 45 60C35.0589 60 27 51.9412 27 42C27 32.0589 35.0589 24 45 24C54.9412 24 63 32.0589 63 42Z",
      stroke: "white",
      "stroke-width": "3",
      "stroke-linecap": "round"
    }
  }), _vm._v(" "), _c("defs", [_c("filter", {
    attrs: {
      id: "filter0_d_4301_8229",
      x: "0.601017",
      y: "0.534157",
      width: "89.4611",
      height: "89.4606",
      filterUnits: "userSpaceOnUse",
      "color-interpolation-filters": "sRGB"
    }
  }, [_c("feFlood", {
    attrs: {
      "flood-opacity": "0",
      result: "BackgroundImageFix"
    }
  }), _vm._v(" "), _c("feColorMatrix", {
    attrs: {
      "in": "SourceAlpha",
      type: "matrix",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
      result: "hardAlpha"
    }
  }), _vm._v(" "), _c("feOffset", {
    attrs: {
      dy: "2.93314"
    }
  }), _vm._v(" "), _c("feGaussianBlur", {
    attrs: {
      stdDeviation: "7.69949"
    }
  }), _vm._v(" "), _c("feComposite", {
    attrs: {
      in2: "hardAlpha",
      operator: "out"
    }
  }), _vm._v(" "), _c("feColorMatrix", {
    attrs: {
      type: "matrix",
      values: "0 0 0 0 0.0627451 0 0 0 0 0.164706 0 0 0 0 0.427451 0 0 0 0.29 0"
    }
  }), _vm._v(" "), _c("feBlend", {
    attrs: {
      mode: "normal",
      in2: "BackgroundImageFix",
      result: "effect1_dropShadow_4301_8229"
    }
  }), _vm._v(" "), _c("feBlend", {
    attrs: {
      mode: "normal",
      "in": "SourceGraphic",
      in2: "effect1_dropShadow_4301_8229",
      result: "shape"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "info"
  }, [_vm._v("\n                                Blocked User attempts\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "badge bg-primary fs-12 fw-light px-3 py-1"
  }, [_vm._v("23")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-6"
  }, [_c("a", {
    attrs: {
      href: "/bank/fraud/disabled-accounts"
    }
  }, [_c("div", {
    staticClass: "card p-4 fw-bold"
  }, [_c("div", {
    staticClass: "d-flex flex-column align-items-center justify-content-center"
  }, [_c("div", {
    staticClass: "icon"
  }, [_c("svg", {
    attrs: {
      width: "91",
      height: "90",
      viewBox: "0 0 91 90",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("g", {
    attrs: {
      filter: "url(#filter0_d_2410_11568)"
    }
  }, [_c("rect", {
    attrs: {
      x: "16",
      y: "13",
      width: "58.6628",
      height: "58.6628",
      rx: "10",
      fill: "#041E43"
    }
  })]), _vm._v(" "), _c("path", {
    attrs: {
      d: "M26 41.5C26 52.8038 35.1962 62 46.5 62C57.8038 62 67 52.8038 67 41.5C67 30.1962 57.804 21 46.5 21C35.196 21 26 30.1962 26 41.5ZM46.5 58.3341C37.2177 58.3341 29.6662 50.7825 29.6662 41.5C29.6662 37.5181 31.0588 33.8568 33.379 30.9712L57.0288 54.621C54.1432 56.9412 50.4822 58.3341 46.5 58.3341ZM63.3338 41.5C63.3338 45.4819 61.9412 49.1432 59.6212 52.0288L35.9712 28.379C38.8568 26.0588 42.5181 24.6662 46.5 24.6662C55.7823 24.6662 63.3338 32.2177 63.3338 41.5Z",
      fill: "white"
    }
  }), _vm._v(" "), _c("defs", [_c("filter", {
    attrs: {
      id: "filter0_d_2410_11568",
      x: "0.601017",
      y: "0.534157",
      width: "89.4611",
      height: "89.4606",
      filterUnits: "userSpaceOnUse",
      "color-interpolation-filters": "sRGB"
    }
  }, [_c("feFlood", {
    attrs: {
      "flood-opacity": "0",
      result: "BackgroundImageFix"
    }
  }), _vm._v(" "), _c("feColorMatrix", {
    attrs: {
      "in": "SourceAlpha",
      type: "matrix",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
      result: "hardAlpha"
    }
  }), _vm._v(" "), _c("feOffset", {
    attrs: {
      dy: "2.93314"
    }
  }), _vm._v(" "), _c("feGaussianBlur", {
    attrs: {
      stdDeviation: "7.69949"
    }
  }), _vm._v(" "), _c("feComposite", {
    attrs: {
      in2: "hardAlpha",
      operator: "out"
    }
  }), _vm._v(" "), _c("feColorMatrix", {
    attrs: {
      type: "matrix",
      values: "0 0 0 0 0.0627451 0 0 0 0 0.164706 0 0 0 0 0.427451 0 0 0 0.29 0"
    }
  }), _vm._v(" "), _c("feBlend", {
    attrs: {
      mode: "normal",
      in2: "BackgroundImageFix",
      result: "effect1_dropShadow_2410_11568"
    }
  }), _vm._v(" "), _c("feBlend", {
    attrs: {
      mode: "normal",
      "in": "SourceGraphic",
      in2: "effect1_dropShadow_2410_11568",
      result: "shape"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "info"
  }, [_vm._v("\n                                Disabled Accounts\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "badge bg-primary fs-12 fw-light px-3 py-1"
  }, [_vm._v("3")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-6"
  }, [_c("a", {
    attrs: {
      href: "/bank/fraud/disabled-accounts"
    }
  }, [_c("div", {
    staticClass: "card p-4 fw-bold"
  }, [_c("div", {
    staticClass: "d-flex flex-column align-items-center justify-content-center"
  }, [_c("div", {
    staticClass: "icon"
  }, [_c("svg", {
    attrs: {
      width: "91",
      height: "90",
      viewBox: "0 0 91 90",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("g", {
    attrs: {
      filter: "url(#filter0_d_4301_8230)"
    }
  }, [_c("rect", {
    attrs: {
      x: "16",
      y: "13",
      width: "58.6628",
      height: "58.6628",
      rx: "10",
      fill: "#041E43"
    }
  })]), _vm._v(" "), _c("path", {
    attrs: {
      d: "M44.5 60.25C54.8125 60.25 63.25 51.8125 63.25 41.5C63.25 31.1875 54.8125 22.75 44.5 22.75C34.1875 22.75 25.75 31.1875 25.75 41.5C25.75 51.8125 34.1875 60.25 44.5 60.25Z",
      stroke: "white",
      "stroke-width": "3",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M51.9932 41.5H52.0105",
      stroke: "white",
      "stroke-width": "5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M44.4912 41.5H44.5088",
      stroke: "white",
      "stroke-width": "5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M36.9893 41.5H37.0068",
      stroke: "white",
      "stroke-width": "5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }), _vm._v(" "), _c("defs", [_c("filter", {
    attrs: {
      id: "filter0_d_4301_8230",
      x: "0.601017",
      y: "0.534157",
      width: "89.4611",
      height: "89.4606",
      filterUnits: "userSpaceOnUse",
      "color-interpolation-filters": "sRGB"
    }
  }, [_c("feFlood", {
    attrs: {
      "flood-opacity": "0",
      result: "BackgroundImageFix"
    }
  }), _vm._v(" "), _c("feColorMatrix", {
    attrs: {
      "in": "SourceAlpha",
      type: "matrix",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
      result: "hardAlpha"
    }
  }), _vm._v(" "), _c("feOffset", {
    attrs: {
      dy: "2.93314"
    }
  }), _vm._v(" "), _c("feGaussianBlur", {
    attrs: {
      stdDeviation: "7.69949"
    }
  }), _vm._v(" "), _c("feComposite", {
    attrs: {
      in2: "hardAlpha",
      operator: "out"
    }
  }), _vm._v(" "), _c("feColorMatrix", {
    attrs: {
      type: "matrix",
      values: "0 0 0 0 0.0627451 0 0 0 0 0.164706 0 0 0 0 0.427451 0 0 0 0.29 0"
    }
  }), _vm._v(" "), _c("feBlend", {
    attrs: {
      mode: "normal",
      in2: "BackgroundImageFix",
      result: "effect1_dropShadow_4301_8230"
    }
  }), _vm._v(" "), _c("feBlend", {
    attrs: {
      mode: "normal",
      "in": "SourceGraphic",
      in2: "effect1_dropShadow_4301_8230",
      result: "shape"
    }
  })], 1)])])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card p-4 rounded-4"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("high-value-transactions")], 1)])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "my-0"
  }, [_c("br")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "info"
  }, [_c("li", {
    staticClass: "dropdown pe-3",
    staticStyle: {
      "list-style": "none"
    }
  }, [_c("a", {
    staticClass: "nav-profile d-flex align-items-center pe-0",
    attrs: {
      href: "#",
      "data-bs-toggle": "dropdown"
    }
  }, [_c("span", {
    staticClass: "d-none d-md-block dropdown-toggle ps-2"
  }, [_vm._v("Other Services")])]), _vm._v(" "), _c("ul", {
    staticClass: "dropdown-menu dropdown-menu-end dropdown-menu-arrow"
  }, [_c("li", [_c("a", {
    staticClass: "dropdown-item d-flex align-items-center",
    attrs: {
      href: "/bank/fraud/reversals"
    }
  }, [_vm._v("\n                                                Reversals\n                                            ")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "dropdown-item d-flex align-items-center",
    attrs: {
      href: "/bank/fraud/new-accounts"
    }
  }, [_vm._v("\n                                                New Accounts\n                                            ")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("div", {}, [_c("div", {
    staticClass: "card-title fw-main fs-20"
  }, [_vm._v("High value transaction")]), _vm._v(" "), _c("p", {
    staticClass: "text-muted"
  }, [_vm._v("high value transaction.")])]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("select", {
    staticClass: "form-select rounded-4",
    attrs: {
      name: "",
      id: ""
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("This month")])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/fraudManagement/charts/highValueTransactions.vue?vue&type=template&id=1cec2c68":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/fraudManagement/charts/highValueTransactions.vue?vue&type=template&id=1cec2c68 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("apexchart", {
    attrs: {
      type: "bar",
      height: "350",
      options: _vm.chartOptions,
      series: _vm.series
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AgentFloat.vue?vue&type=template&id=737e0513&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AgentFloat.vue?vue&type=template&id=737e0513&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-8 me-auto"
  }, [_c("div", {
    staticClass: "card w-100",
    staticStyle: {
      "margin-top": "50px",
      "border-radius": "10px"
    }
  }, [_c("div", {
    staticClass: "card-header text-white",
    staticStyle: {
      "background-color": "#041b3f",
      "border-top-left-radius": "10px",
      "border-top-right-radius": "10px"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("form", {
    staticClass: "px-lg-3",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.agentFloat.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "account_no"
    }
  }, [_vm._v("Agent ID")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.agent_id,
      expression: "form.agent_id"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "account_no",
      name: "agentId",
      placeholder: "Enter Agent ID"
    },
    domProps: {
      value: _vm.form.agent_id
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "agent_id", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.isValidating ? _c("div", {
    staticClass: "spinner mt-2"
  }) : _vm._e()]), _vm._v(" "), _vm.is_verified ? _c("div", {
    staticClass: "mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "recipient_name"
    }
  }, [_vm._v("Agent Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.agent_name,
      expression: "form.agent_name"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      id: "agent_name",
      name: "agent_name",
      placeholder: "Enter Agent Name"
    },
    domProps: {
      value: _vm.form.agent_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "agent_name", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.is_verified ? _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "amount"
    }
  }, [_vm._v("Amount")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.amount,
      expression: "form.amount"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "amount",
      name: "amount",
      placeholder: "Enter Amount",
      value: ""
    },
    domProps: {
      value: _vm.form.amount
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "amount", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-3 flex-wrap flex-column-reverse flex-md-row justify-content-md-end"
  }, [_c("a", {
    staticClass: "btn btn-outline-primary px-5 me-2",
    attrs: {
      href: "#"
    },
    on: {
      click: _vm.goBack
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary px-2 me-2",
    staticStyle: {
      "background-color": "#041b3f"
    },
    attrs: {
      "data-bs-toggle": "modal",
      "data-bs-target": "#verticalycentered",
      type: "button"
    }
  }, [_vm._v("Cashout to other\n                            banks")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary px-5",
    staticStyle: {
      "background-color": "#041b3f"
    },
    attrs: {
      disabled: !_vm.canSubmit,
      type: "submit"
    },
    domProps: {
      innerHTML: _vm._s(_vm.btnState)
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "verticalycentered",
      tabindex: "-1"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(0), _vm._v(" "), _c("form", {
    staticClass: "modal-body",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.cashOutToBanks.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "bank"
    }
  }, [_vm._v("Available Banks")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cashOutToBank.bank,
      expression: "cashOutToBank.bank"
    }],
    staticClass: "form-select",
    attrs: {
      name: "bank",
      id: "bank"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.cashOutToBank, "bank", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "Shabelle"
    }
  }, [_vm._v("Shabelle")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Other"
    }
  }, [_vm._v("Others")])])]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "acc_no"
    }
  }, [_vm._v("Account Number")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cashOutToBank.acc_no,
      expression: "cashOutToBank.acc_no"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "acc_no",
      placeholder: "Enter Amount",
      id: "acc_no"
    },
    domProps: {
      value: _vm.cashOutToBank.acc_no
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.cashOutToBank, "acc_no", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "amount"
    }
  }, [_vm._v("Amount")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cashOutToBank.amount,
      expression: "cashOutToBank.amount"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "amount",
      placeholder: "Enter Amount",
      id: "amount"
    },
    domProps: {
      value: _vm.cashOutToBank.amount
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.cashOutToBank, "amount", $event.target.value);
      }
    }
  })]), _vm._v(" "), _vm._m(1)])])])]), _vm._v(" "), _c("a", {
    staticClass: "btn",
    staticStyle: {
      visibility: "hidden"
    },
    attrs: {
      id: "modalBtn",
      href: "#",
      "data-bs-toggle": "modal",
      "data-bs-target": "#modal-success"
    }
  }, [_vm._v("\n                Success modal\n            ")]), _vm._v(" "), _c("modal", {
    attrs: {
      message: _vm.modal.message,
      title: _vm.modal.title,
      type: _vm.modal.type
    }
  })], 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title"
  }, [_vm._v("Cash Out")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary"
  }, [_vm._v("Submit")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AirtimePayment.vue?vue&type=template&id=482f57ab&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AirtimePayment.vue?vue&type=template&id=482f57ab&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-8 me-auto"
  }, [_c("div", {
    staticClass: "card w-100",
    staticStyle: {
      "margin-top": "50px",
      "border-radius": "10px"
    }
  }, [_c("div", {
    staticClass: "card-header text-white",
    staticStyle: {
      "background-color": "#041b3f",
      "border-top-left-radius": "10px",
      "border-top-right-radius": "10px"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("form", {
    staticClass: "px-lg-5",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.airtime_payment.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "serviceProviders"
    }
  }, [_vm._v("Available Options")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.service_provider,
      expression: "form.service_provider"
    }],
    staticClass: "form-select",
    attrs: {
      name: "service_provider",
      id: "serviceProviders"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "service_provider", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Select Service Provider")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "safaricom"
    }
  }, [_vm._v("Safaricom")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "ETHIOTELECOM"
    }
  }, [_vm._v("ETHIO TELECOM")])])]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "phoneNumber"
    }
  }, [_vm._v("Phone Number")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.phone_number,
      expression: "form.phone_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "phone_number",
      placeholder: "Enter Phone Number",
      id: "phoneNumber"
    },
    domProps: {
      value: _vm.form.phone_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "phone_number", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "amount"
    }
  }, [_vm._v("Amount")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.amount,
      expression: "form.amount"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "amount",
      placeholder: "Enter Amount",
      id: "amount"
    },
    domProps: {
      value: _vm.form.amount
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "amount", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("a", {
    staticClass: "btn btn-outline-primary px-5 me-2",
    attrs: {
      href: "#",
      type: "button"
    },
    on: {
      click: _vm.goBack
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary px-5",
    staticStyle: {
      "background-color": "#041b3f"
    },
    attrs: {
      disabled: !_vm.canSubmit,
      type: "submit"
    },
    domProps: {
      innerHTML: _vm._s(_vm.btnState)
    }
  })])])]), _vm._v(" "), _c("a", {
    staticClass: "btn",
    staticStyle: {
      visibility: "hidden"
    },
    attrs: {
      id: "modalBtn",
      href: "#",
      "data-bs-toggle": "modal",
      "data-bs-target": "#modal-success"
    }
  }, [_vm._v("\n                Success modal\n            ")]), _vm._v(" "), _c("modal", {
    attrs: {
      message: _vm.modal.message,
      title: _vm.modal.title,
      type: _vm.modal.type
    }
  })], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/CashInCashOut.vue?vue&type=template&id=39f63b37&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/CashInCashOut.vue?vue&type=template&id=39f63b37&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-8 me-auto"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "tab-content",
    attrs: {
      id: "myTabContent"
    }
  }, [_c("div", {
    staticClass: "tab-pane fade show active",
    attrs: {
      id: "pills-home",
      role: "tabpanel",
      "aria-labelledby": "home-tab"
    }
  }, [_c("div", {
    staticClass: "card w-100",
    staticStyle: {
      "border-radius": "10px"
    }
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("form", {
    staticClass: "px-4",
    attrs: {
      id: "walletForm"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.cashIn.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "wallet_number"
    }
  }, [_vm._v("Phone No or Ac no")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cashInForm.wallet_number,
      expression: "cashInForm.wallet_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "account_no",
      name: "walletId",
      placeholder: "Enter Phone No or Ac no"
    },
    domProps: {
      value: _vm.cashInForm.wallet_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.cashInForm, "wallet_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.cashInIsValidating ? _c("div", {
    staticClass: "spinner mt-2"
  }) : _vm._e()]), _vm._v(" "), _vm.cash_in_is_verified ? _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "customer_name"
    }
  }, [_vm._v("Recipient Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cashInForm.recipientName,
      expression: "cashInForm.recipientName"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      id: "customer_name",
      placeholder: "Enter customer name"
    },
    domProps: {
      value: _vm.cashInForm.recipientName
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.cashInForm, "recipientName", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.cash_in_is_verified ? _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "cash-in-amount"
    }
  }, [_vm._v("Amount")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cashInForm.amount,
      expression: "cashInForm.amount"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "cash-in-amount",
      placeholder: "Enter Amount"
    },
    domProps: {
      value: _vm.cashInForm.amount
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.cashInForm, "amount", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("a", {
    staticClass: "btn btn-outline-primary px-5 me-2",
    attrs: {
      href: "#"
    },
    on: {
      click: _vm.goBack
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary px-5",
    staticStyle: {
      "background-color": "#041b3f"
    },
    attrs: {
      disabled: !_vm.canSubmitCashIn,
      type: "submit"
    },
    domProps: {
      innerHTML: _vm._s(_vm.cashInBtnState)
    }
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane fade",
    attrs: {
      id: "pills-profile",
      role: "tabpanel",
      "aria-labelledby": "profile-tab"
    }
  }, [_c("div", {
    staticClass: "tab-pane fade show active",
    attrs: {
      id: "pills-home",
      role: "tabpanel",
      "aria-labelledby": "home-tab"
    }
  }, [_c("div", {
    staticClass: "card w-100",
    staticStyle: {
      "border-radius": "10px"
    }
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("form", {
    staticClass: "px-4",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.cashOut.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "wallet_number"
    }
  }, [_vm._v("Phone No or Ac no")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cashOutForm.wallet_number,
      expression: "cashOutForm.wallet_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "account_no",
      name: "walletId",
      placeholder: "Enter Phone No or Ac no"
    },
    domProps: {
      value: _vm.cashOutForm.wallet_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.cashOutForm, "wallet_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.cashOutIsValidating ? _c("div", {
    staticClass: "spinner mt-2"
  }) : _vm._e()]), _vm._v(" "), _vm.cash_out_is_verified ? _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "customer_name"
    }
  }, [_vm._v("Recipient Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cashOutForm.recipientName,
      expression: "cashOutForm.recipientName"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      id: "customer_name",
      placeholder: "Enter customer name"
    },
    domProps: {
      value: _vm.cashOutForm.recipientName
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.cashOutForm, "recipientName", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.cash_out_is_verified ? _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "cash-in-amount"
    }
  }, [_vm._v("Amount")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cashOutForm.amount,
      expression: "cashOutForm.amount"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "cash-in-amount",
      placeholder: "Enter Amount"
    },
    domProps: {
      value: _vm.cashOutForm.amount
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.cashOutForm, "amount", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("a", {
    staticClass: "btn btn-outline-primary px-5 me-2",
    attrs: {
      href: "#"
    },
    on: {
      click: _vm.goBack
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary px-5",
    staticStyle: {
      "background-color": "#041b3f"
    },
    attrs: {
      disabled: !_vm.canSubmitCashOut,
      type: "submit"
    },
    domProps: {
      innerHTML: _vm._s(_vm.cashOutBtnState)
    }
  })])])])])])]), _vm._v(" "), _c("a", {
    staticClass: "btn",
    staticStyle: {
      visibility: "hidden"
    },
    attrs: {
      id: "modalBtn",
      href: "#",
      "data-bs-toggle": "modal",
      "data-bs-target": "#modal-success"
    }
  }, [_vm._v("\n                Success modal\n            ")]), _vm._v(" "), _c("modal", {
    attrs: {
      message: _vm.modal.message,
      title: _vm.modal.title,
      type: _vm.modal.type
    }
  })], 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", {
    staticClass: "nav nav-pills mb-4",
    attrs: {
      id: "pills-tab",
      role: "tablist"
    }
  }, [_c("li", {
    staticClass: "nav-item",
    attrs: {
      role: "presentation"
    }
  }, [_c("button", {
    staticClass: "nav-link p-2 active",
    staticStyle: {
      "margin-right": "1rem"
    },
    attrs: {
      id: "pills-home-tab",
      "data-bs-toggle": "pill",
      "data-bs-target": "#pills-home",
      type: "button",
      role: "tab",
      "aria-controls": "pills-home",
      "aria-selected": "true"
    }
  }, [_vm._v("CASH IN\n                ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item",
    attrs: {
      role: "presentation"
    }
  }, [_c("button", {
    staticClass: "nav-link",
    attrs: {
      id: "pills-profile-tab",
      "data-bs-toggle": "pill",
      "data-bs-target": "#pills-profile",
      type: "button",
      role: "tab",
      "aria-controls": "pills-profile",
      "aria-selected": "false"
    }
  }, [_vm._v("CASH OUT\n                ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header text-white",
    staticStyle: {
      "background-color": "#041b3f",
      "border-top-left-radius": "10px",
      "border-top-right-radius": "10px"
    }
  }, [_c("h5", {
    staticClass: "mb-0 text-white"
  }, [_vm._v("CASH IN")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header text-white",
    staticStyle: {
      "background-color": "#041b3f",
      "border-top-left-radius": "10px",
      "border-top-right-radius": "10px"
    }
  }, [_c("h5", {
    staticClass: "mb-0 text-white"
  }, [_vm._v("CASH OUT")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/modal/Modal.vue?vue&type=template&id=1de62abf":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/modal/Modal.vue?vue&type=template&id=1de62abf ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal modal-blur fade",
    attrs: {
      id: "modal-success",
      tabindex: "-1",
      role: "dialog",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-centered px-5"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "modal-header border-0"
  }, [_c("div", {
    staticClass: "text-center w-100"
  }, [_c("div", {
    "class": "display-5 ".concat(_vm.type === "success" ? "text-success" : "text-danger", "  mb-3")
  }, [_c("i", {
    "class": "bi ".concat(_vm.type === "success" ? "bi-check-circle" : "bi-x-circle")
  })]), _vm._v(" "), _c("h5", {
    staticClass: "modal-title",
    attrs: {
      id: "paymentSuccessLabel"
    }
  }, [_vm._v(_vm._s(_vm.title))])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body text-center"
  }, [_c("p", [_vm._v(_vm._s(_vm.message))])]), _vm._v(" "), _vm._m(1)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("button", {
    staticClass: "btn-close m-2",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-footer justify-content-between"
  }, [_c("a", {
    staticClass: "btn btn-secondary",
    attrs: {
      href: "/bank"
    }
  }, [_vm._v("Go to dashboard")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Close")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/BulkSms.vue?vue&type=template&id=9f9d46ea&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/BulkSms.vue?vue&type=template&id=9f9d46ea&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("div", {
    staticClass: "rounded-4"
  }, [_c("div", {
    staticClass: "card-body row"
  }, [_c("div", {
    staticClass: "col-md-8 mb-4"
  }, [_c("div", {
    staticClass: "d-flex justify-content-center"
  }, [_c("div", {
    staticClass: "form-wrapper bg-white"
  }, [_vm._m(0), _vm._v(" "), _c("form", {
    staticClass: "form-group row px-5 p-4 g-3",
    attrs: {
      method: "post",
      enctype: "multipart/form-data"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.sendMessage.apply(null, arguments);
      }
    }
  }, [_vm.fileUploaded ? _c("div", {
    staticClass: "accordion accordion-flush",
    attrs: {
      id: "accordionFlushExample"
    }
  }, [_c("div", {
    staticClass: "accordion-item"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "accordion-collapse collapse",
    attrs: {
      id: "flush-collapseTwo",
      "data-bs-parent": "#accordionFlushExample"
    }
  }, [_c("div", {
    staticClass: "accordion-body"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-striped"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", _vm._l(_vm.form.contacts.slice(0, 10), function (contact, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(contact.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(contact.contact))])]);
  }), 0)])])])])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    attrs: {
      "for": "contacts"
    }
  }, [_vm._v("Upload Contacts (CSV)")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "file",
      id: "contacts",
      accept: ".csv"
    },
    on: {
      change: _vm.handleFileUpload
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    attrs: {
      "for": "message"
    }
  }, [_vm._v("Message")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.message,
      expression: "form.message"
    }],
    staticClass: "form-control",
    attrs: {
      id: "message",
      placeholder: "Enter your message",
      cols: "30",
      rows: "3"
    },
    domProps: {
      value: _vm.form.message
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "message", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-12 d-flex justify-content-between mt-3"
  }, [_c("button", {
    staticClass: "btn btn-outline-primary",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.goBack
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      disabled: !_vm.canSubmit,
      type: "submit"
    },
    on: {
      click: _vm.sendMessage
    }
  }, [_vm._v(_vm._s(_vm.btnState))])])])])])])]), _vm._v(" "), _c("a", {
    staticClass: "btn",
    staticStyle: {
      visibility: "hidden"
    },
    attrs: {
      id: "modalBtn",
      href: "#",
      "data-bs-toggle": "modal",
      "data-bs-target": "#modal-success"
    }
  }, [_vm._v("\n                Success modal\n            ")]), _vm._v(" "), _c("modal", {
    attrs: {
      message: _vm.modal.message,
      title: _vm.modal.title,
      type: _vm.modal.type
    }
  })], 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", {
    staticClass: "p-3 px-5 text-light",
    staticStyle: {
      background: "#041E43"
    }
  }, [_c("div", {
    staticClass: "title"
  }, [_c("h3", {
    staticClass: "text-white fw-bold"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("h2", {
    staticClass: "accordion-header"
  }, [_c("button", {
    staticClass: "accordion-button collapsed",
    attrs: {
      type: "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#flush-collapseTwo",
      "aria-expanded": "false",
      "aria-controls": "flush-collapseTwo"
    }
  }, [_vm._v("\n                                                Contacts List\n                                            ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("thead", {
    staticClass: "thead-dark"
  }, [_c("tr", {
    staticClass: "text-white",
    staticStyle: {
      background: "#041E43"
    }
  }, [_c("th", [_c("span", [_vm._v("Name")])]), _vm._v(" "), _c("th", [_vm._v("Number")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/SingleSms.vue?vue&type=template&id=4664cd95&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/SingleSms.vue?vue&type=template&id=4664cd95&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-8 me-auto"
  }, [_c("div", {
    staticClass: "card w-100",
    staticStyle: {
      "margin-top": "30px",
      "border-radius": "10px"
    }
  }, [_c("div", {
    staticClass: "card-header text-white",
    staticStyle: {
      "background-color": "#041b3f",
      "border-top-left-radius": "10px",
      "border-top-right-radius": "10px"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("form", {
    staticClass: "px-lg-3",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.sendMessage.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "agentID"
    }
  }, [_vm._v("Message")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.message,
      expression: "form.message"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "4",
      placeholder: "Write a message"
    },
    domProps: {
      value: _vm.form.message
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "message", $event.target.value);
      }
    }
  })]), _vm._v(" "), _vm.form.is_verified ? _c("div", {
    staticClass: "mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "recipient_phone"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.name,
      expression: "form.name"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      id: "agent_name",
      name: "agent_name"
    },
    domProps: {
      value: _vm.form.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "name", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "recipient_phone"
    }
  }, [_vm._v("Phone Number")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.phoneNumber,
      expression: "form.phoneNumber"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "agent_name",
      name: "agent_name",
      placeholder: "Enter Phone Number"
    },
    domProps: {
      value: _vm.form.phoneNumber
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "phoneNumber", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.isValidating ? _c("div", {
    staticClass: "spinner mt-2"
  }) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-3 flex-wrap flex-column-reverse flex-md-row justify-content-md-end"
  }, [_c("button", {
    staticClass: "btn btn-outline-primary px-5 me-2",
    on: {
      click: _vm.goBack
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary px-3 me-2",
    staticStyle: {
      "background-color": "#041b3f"
    },
    attrs: {
      "data-bs-toggle": "modal",
      "data-bs-target": "#verticalycentered",
      type: "button",
      disabled: !_vm.canSubmit
    },
    on: {
      click: _vm.shouldSchedule
    }
  }, [_vm._v("Schedule")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary px-5",
    staticStyle: {
      "background-color": "#041b3f"
    },
    attrs: {
      disabled: !_vm.canSubmit,
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.btnState))])])])])]), _vm._v(" "), _c("a", {
    staticClass: "btn",
    staticStyle: {
      visibility: "hidden"
    },
    attrs: {
      id: "modalBtn",
      href: "#",
      "data-bs-toggle": "modal",
      "data-bs-target": "#modal-success"
    }
  }, [_vm._v("\n                Success modal\n            ")]), _vm._v(" "), _c("modal", {
    attrs: {
      message: _vm.modal.message,
      title: _vm.modal.title,
      type: _vm.modal.type
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "verticalycentered",
      tabindex: "-1"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(0), _vm._v(" "), _c("form", {
    staticClass: "modal-body",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.sendMessage.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label mb-2",
    attrs: {
      "for": "date_time"
    }
  }, [_vm._v("Date & Time")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.date_time,
      expression: "form.date_time"
    }],
    staticClass: "form-control",
    attrs: {
      type: "datetime-local",
      name: "date_time",
      id: "date_time"
    },
    domProps: {
      value: _vm.form.date_time
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "date_time", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      disabled: !_vm.canSubmit && !_vm.form.shouldSchedule
    }
  }, [_vm._v(_vm._s(_vm.btnState))])])])])])])], 1)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title"
  }, [_vm._v("Schedule a Message")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue?vue&type=template&id=07a65f7e&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue?vue&type=template&id=07a65f7e&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.loaded ? _c("apexchart", {
    attrs: {
      type: "line",
      height: "350",
      options: _vm.chartOptions,
      series: _vm.series
    }
  }) : _c("div", {
    staticClass: "loader mx-auto"
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/user/UpdateProfile.vue?vue&type=template&id=2eee0d9c&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/user/UpdateProfile.vue?vue&type=template&id=2eee0d9c&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "profile-image-upload",
      tabindex: "-1",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("input", {
    ref: "fileInput",
    attrs: {
      type: "file"
    },
    on: {
      change: _vm.handleFileUpload
    }
  })]), _vm._v(" "), _vm._m(1)])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "change-pin",
      tabindex: "-1",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("input", {
    ref: "fileInput",
    attrs: {
      type: "file"
    },
    on: {
      change: _vm.handleFileUpload
    }
  })]), _vm._v(" "), _vm._m(3)])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-6 mx-auto"
  }, [_c("div", {
    staticClass: "card w-100",
    staticStyle: {
      "margin-top": "50px",
      "border-radius": "10px"
    }
  }, [_c("div", {
    staticClass: "card-header text-white",
    staticStyle: {
      "background-color": "#041b3f",
      "border-top-left-radius": "10px",
      "border-top-right-radius": "10px"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "px-5"
  }, [_c("div", {
    staticClass: "d-flex flex-column justify-content-center align-items-center"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "fw-bold my-2"
  }, [_vm._v(_vm._s(_vm.user.tellerName))]), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_vm._v(_vm._s(_vm.user.email))])]), _vm._v(" "), _vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "tab-content",
    attrs: {
      id: "myTabContent"
    }
  }, [_c("div", {
    staticClass: "tab-pane fade show active",
    attrs: {
      id: "pills-home",
      role: "tabpanel",
      "aria-labelledby": "home-tab"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("form", {
    attrs: {
      id: "walletForm"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.updateProfile.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "narration"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.profile.tellerName,
      expression: "profile.tellerName"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: _vm.role.name === "teller",
      type: "text",
      id: "project",
      placeholder: "Enter Phone"
    },
    domProps: {
      value: _vm.profile.tellerName
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.profile, "tellerName", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "narration"
    }
  }, [_vm._v("Phone Number")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.profile.tellerPhone,
      expression: "profile.tellerPhone"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: _vm.role.name === "teller",
      type: "text",
      id: "project",
      placeholder: "Enter Phone"
    },
    domProps: {
      value: _vm.profile.tellerPhone
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.profile, "tellerPhone", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "narration"
    }
  }, [_vm._v("Email Address")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.profile.email,
      expression: "profile.email"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: _vm.role.name === "teller",
      type: "email",
      id: "project",
      placeholder: "Enter Email Address"
    },
    domProps: {
      value: _vm.profile.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.profile, "email", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-3 flex-wrap flex-column-reverse flex-md-row justify-content-md-end"
  }, [_c("button", {
    staticClass: "btn btn-outline-primary px-5",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.goBack
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary px-5",
    staticStyle: {
      "background-color": "#041b3f"
    },
    attrs: {
      disabled: _vm.canUpdate,
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.stateBtn))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane fade",
    attrs: {
      id: "pills-profile",
      role: "tabpanel",
      "aria-labelledby": "profile-tab"
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_vm._m(7), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("form", {
    staticClass: "mx-auto",
    attrs: {
      method: "POST",
      id: "walletForm"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.verifyPin.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "mb-1"
  }, [_vm.response ? _c("div", [_c("div", {
    "class": "alert ".concat(_vm.responseType)
  }, [_vm._v("\n                                                        " + _vm._s(_vm.responseMessage) + "\n                                                    ")])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "mb-4 d-flex flex-column justify-content-center"
  }, [_c("label", {
    staticClass: "form-label d-block text-start",
    attrs: {
      "for": "new-pin"
    }
  }, [_vm._v("New PIN")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center gap-4"
  }, [_vm._l(_vm.newPinInputs, function (pin, index) {
    return _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.newPinInputs[index],
        expression: "newPinInputs[index]"
      }],
      key: "new-pin-".concat(index),
      ref: "newPinInputs",
      refInFor: true,
      staticClass: "form-control text-center otp-input",
      attrs: {
        type: "password",
        id: "pin",
        maxlength: "1"
      },
      domProps: {
        value: _vm.newPinInputs[index]
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.newPinInputs, index, $event.target.value);
        }, function ($event) {
          return _vm.handleInput(index, "new");
        }],
        keydown: function keydown($event) {
          return _vm.handleKeyDown($event, index, "new");
        },
        paste: function paste($event) {
          return _vm.handlePaste($event, "new");
        },
        focus: _vm.handleFocus
      }
    });
  }), _vm._v(" "), _c("div", {
    on: {
      click: _vm.handleShowPin
    }
  }, [_c("i", {
    "class": "bi ".concat(_vm.showPin ? "bi-eye" : "bi-eye-slash", " fs-22")
  })])], 2)]), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_c("label", {
    staticClass: "form-label d-block text-start",
    attrs: {
      "for": "confirm-pin"
    }
  }, [_vm._v("Confirm PIN")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-4 align-items-center"
  }, [_vm._l(_vm.confirmPinInputs, function (pin, index) {
    return _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.confirmPinInputs[index],
        expression: "confirmPinInputs[index]"
      }],
      key: "confirm-pin-".concat(index),
      ref: "confirmPinInputs",
      refInFor: true,
      staticClass: "form-control text-center otp-input",
      attrs: {
        type: "password",
        id: "confirmPin",
        maxlength: "1"
      },
      domProps: {
        value: _vm.confirmPinInputs[index]
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.confirmPinInputs, index, $event.target.value);
        }, function ($event) {
          return _vm.handleInput(index, "confirm");
        }],
        keydown: function keydown($event) {
          return _vm.handleKeyDown($event, index, "confirm");
        },
        paste: function paste($event) {
          return _vm.handlePaste($event, "confirm");
        },
        focus: _vm.handleFocus
      }
    });
  }), _vm._v(" "), _c("div", {
    on: {
      click: _vm.handleShowConfirmPin
    }
  }, [_c("i", {
    "class": "bi ".concat(_vm.showConfirmPin ? "bi-eye" : "bi-eye-slash", " fs-22")
  })])], 2)]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-3 flex-wrap flex-column-reverse flex-md-row justify-content-md-end"
  }, [_c("button", {
    staticClass: "btn btn-outline-primary px-5",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.goBack
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary px-5",
    staticStyle: {
      "background-color": "#041b3f"
    },
    attrs: {
      disabled: !_vm.canSubmit,
      type: "submit"
    },
    domProps: {
      innerHTML: _vm._s(_vm.state)
    }
  })])])])])])])])])]), _vm._v(" "), _c("a", {
    staticClass: "btn",
    staticStyle: {
      visibility: "hidden"
    },
    attrs: {
      id: "modalBtn",
      href: "#",
      "data-bs-toggle": "modal",
      "data-bs-target": "#modal-success"
    }
  }, [_vm._v("\n                    Success modal\n                ")]), _vm._v(" "), _c("modal", {
    attrs: {
      message: _vm.modal.message,
      title: _vm.modal.title,
      type: _vm.modal.type
    }
  })], 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h1", {
    staticClass: "modal-title fs-5",
    attrs: {
      id: "exampleModalLabel"
    }
  }, [_vm._v("Upload image")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "button"
    }
  }, [_vm._v("Upload")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h1", {
    staticClass: "modal-title fs-5",
    attrs: {
      id: "exampleModalLabel"
    }
  }, [_vm._v("Upload image")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "button"
    }
  }, [_vm._v("Upload")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "profile-pic position-relative",
    staticStyle: {
      width: "200px"
    }
  }, [_c("img", {
    staticStyle: {
      width: "100%",
      "border-radius": "50%"
    },
    attrs: {
      src: "/assets/images/users/avatar-1.jpg",
      alt: ""
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "position-absolute",
    attrs: {
      "data-bs-toggle": "modal",
      "data-bs-target": "#profile-image-upload"
    }
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("div", {
    staticClass: "mx-auto"
  }, [_c("i", {
    staticClass: "bi bi-camera fs-36"
  })]), _vm._v(" "), _c("p", [_vm._v(" Change profile image")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", {
    staticClass: "nav nav-pills mb-4",
    attrs: {
      id: "pills-tab",
      role: "tablist"
    }
  }, [_c("li", {
    staticClass: "nav-item",
    attrs: {
      role: "presentation"
    }
  }, [_c("button", {
    staticClass: "nav-link p-2 active",
    staticStyle: {
      "margin-right": "1rem"
    },
    attrs: {
      id: "pills-home-tab",
      "data-bs-toggle": "pill",
      "data-bs-target": "#pills-home",
      type: "button",
      role: "tab",
      "aria-controls": "pills-home",
      "aria-selected": "true"
    }
  }, [_vm._v("Basic Info\n                                ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item",
    attrs: {
      role: "presentation"
    }
  }, [_c("button", {
    staticClass: "nav-link",
    attrs: {
      id: "pills-profile-tab",
      "data-bs-toggle": "pill",
      "data-bs-target": "#pills-profile",
      type: "button",
      role: "tab",
      "aria-controls": "pills-profile",
      "aria-selected": "false"
    }
  }, [_vm._v("Change PIN\n                                ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header text-white",
    staticStyle: {
      "background-color": "rgba(241,241,241,0.61)",
      "border-radius": "0"
    }
  }, [_c("h6", {
    staticClass: "mb-0"
  }, [_vm._v("Basic Info")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header text-white",
    staticStyle: {
      "background-color": "#f1f1f1",
      "border-radius": "0"
    }
  }, [_c("h6", {
    staticClass: "mb-0"
  }, [_vm._v("Change PIN")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('FraudDashboard', (__webpack_require__(/*! @components/pages/fraudManagement/Index.vue */ "./resources/js/components/pages/fraudManagement/Index.vue")["default"]));
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('CashInCashOut', (__webpack_require__(/*! @components/pages/payments/CashInCashOut.vue */ "./resources/js/components/pages/payments/CashInCashOut.vue")["default"]));
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('AgentFloat', (__webpack_require__(/*! @components/pages/payments/AgentFloat.vue */ "./resources/js/components/pages/payments/AgentFloat.vue")["default"]));
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('AirtimePayment', (__webpack_require__(/*! @components/pages/payments/AirtimePayment.vue */ "./resources/js/components/pages/payments/AirtimePayment.vue")["default"]));
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('AccountCreation', (__webpack_require__(/*! @components/pages/customer/AccountCreation.vue */ "./resources/js/components/pages/customer/AccountCreation.vue")["default"]));
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('UpdateAccount', (__webpack_require__(/*! @components/pages/customer/UpdateAccount.vue */ "./resources/js/components/pages/customer/UpdateAccount.vue")["default"]));
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('GroupManagement', (__webpack_require__(/*! @components/pages/customer/GroupManagement.vue */ "./resources/js/components/pages/customer/GroupManagement.vue")["default"]));
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('CashierAccount', (__webpack_require__(/*! @components/pages/GlEscrowManagement/CashierAccount.vue */ "./resources/js/components/pages/GlEscrowManagement/CashierAccount.vue")["default"]));
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('SingleSms', (__webpack_require__(/*! @components/pages/sms/SingleSms.vue */ "./resources/js/components/pages/sms/SingleSms.vue")["default"]));
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('BulkSms', (__webpack_require__(/*! @components/pages/sms/BulkSms.vue */ "./resources/js/components/pages/sms/BulkSms.vue")["default"]));
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('TransactionsChart', (__webpack_require__(/*! @components/pages/tellerDashboard/charts/TransactionsChart.vue */ "./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue")["default"]));
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('TransactionsStatus', (__webpack_require__(/*! @components/pages/adminDashboard/charts/TransactionsStatus.vue */ "./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue")["default"]));
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('ResetPin', (__webpack_require__(/*! @components/pages/customer/ResetPin.vue */ "./resources/js/components/pages/customer/ResetPin.vue")["default"]));
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('UpdateProfile', (__webpack_require__(/*! @components/pages/user/UpdateProfile.vue */ "./resources/js/components/pages/user/UpdateProfile.vue")["default"]));
var app = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: '#app'
});

/***/ }),

/***/ "./resources/js/plugins/axios.js":
/*!***************************************!*\
  !*** ./resources/js/plugins/axios.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _plugins_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @plugins/notification */ "./resources/js/plugins/notification.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_2__);





/**
 * Create a new Axios client instance
 * @see https://github.com/mzabriskie/axios#creating-an-instance
 */
var config = {
  // baseURL: process.env.MIX_APP_URL,
  retries: 2,
  // timeout: 35000, // 35sec
  headers: {
    Accept: 'application/json',
    common: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  },
  paramsSerializer: function paramsSerializer(params) {
    return qs__WEBPACK_IMPORTED_MODULE_2___default().stringify(params, {
      arrayFormat: 'brackets'
    });
  }
};
var httpClient = axios__WEBPACK_IMPORTED_MODULE_0___default().create(config);
httpClient.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response) {
    var status = error.response.status;

    // authentication error
    if (status === 401) {
      _plugins_notification__WEBPACK_IMPORTED_MODULE_1__["default"].error('You need to sign in to perform this action', 'Unauthenticated');
    }
    if (status === 403) {
      _plugins_notification__WEBPACK_IMPORTED_MODULE_1__["default"].warning('You are not authorized to perform this action', 'Unauthorized');
    }
    return Promise.reject(error);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
  } else {
    // Something happened in setting up the request that triggered an Error
  }
  return Promise.reject(error);
});
Object.defineProperty(vue__WEBPACK_IMPORTED_MODULE_3__["default"].prototype, '$httpClient', {
  value: httpClient
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (httpClient);

/***/ }),

/***/ "./resources/js/plugins/notification.js":
/*!**********************************************!*\
  !*** ./resources/js/plugins/notification.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! izitoast */ "./node_modules/izitoast/dist/js/iziToast.js");
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(izitoast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");


var position = 'topRight';
var displayMode = 'replace';
var timeout = 9000;
var layout = 2;
var toast = {
  error: function error(message) {
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Error';
    return izitoast__WEBPACK_IMPORTED_MODULE_0___default().error({
      title: title,
      message: message,
      position: position,
      transitionIn: 'fadeIn',
      icon: 'icon-x',
      displayMode: displayMode,
      layout: 2,
      timeout: timeout
    });
  },
  success: function success(message) {
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Success';
    return izitoast__WEBPACK_IMPORTED_MODULE_0___default().success({
      title: title,
      message: message,
      position: position,
      transitionIn: 'fadeIn',
      icon: 'uil uil-check',
      displayMode: displayMode,
      layout: layout,
      timeout: timeout
      // image: '/logo_35.jpg',
    });
  },
  question: function question() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Deleting the selected item';
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Caution';
    return new Promise(function (resolve) {
      izitoast__WEBPACK_IMPORTED_MODULE_0___default().question({
        title: title,
        message: message,
        timeout: 20000,
        progressBar: false,
        close: false,
        overlay: true,
        displayMode: displayMode,
        id: 'question',
        position: 'center',
        transitionIn: 'fadeIn',
        transitionOut: 'fadeOut',
        layout: layout,
        buttons: [['<button class="btn btn-danger"><b>Confirm</b></button>', function (instance, toast, button, e, inputs) {
          instance.hide({
            transitionOut: 'fadeOut'
          }, toast, 'button');
          resolve();
        }, false],
        // true to focus

        ['<button class="btn btn-light">Cancel</button>', function (instance, toast, button, e) {
          instance.hide({
            transitionOut: 'fadeOut'
          }, toast, 'button');
        }]],
        onClosing: function onClosing(_instance, _toast, closedBy) {
          // console.info('closedBy: ' + closedBy);
        }
      });
    });
  },
  info: function info(message) {
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Info';
    return izitoast__WEBPACK_IMPORTED_MODULE_0___default().info({
      title: title,
      message: message,
      displayMode: displayMode,
      position: position,
      transitionIn: 'fadeIn',
      transitionOut: 'fadeOut',
      layout: layout,
      timeout: timeout
    });
  },
  warning: function warning(message) {
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Warning';
    return izitoast__WEBPACK_IMPORTED_MODULE_0___default().warning({
      title: title,
      message: message,
      displayMode: displayMode,
      id: 'question',
      position: position,
      transitionIn: 'fadeIn',
      transitionOut: 'fadeOut',
      layout: layout,
      timeout: timeout
    });
  }
};
Object.defineProperty(vue__WEBPACK_IMPORTED_MODULE_1__["default"].prototype, '$toast', {
  value: toast
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toast);

/***/ }),

/***/ "./resources/js/utils/form/Errors.js":
/*!*******************************************!*\
  !*** ./resources/js/utils/form/Errors.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Errors = /*#__PURE__*/function () {
  /**
   * Create a new Errors instance.
   */
  function Errors() {
    var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Errors);
    this.record(errors);
  }

  /**
   * Get all the errors.
   *
   * @return {object}
   */
  return _createClass(Errors, [{
    key: "all",
    value: function all() {
      return this.errors;
    }

    /**
     * Determine if any errors exists for the given field or object.
     *
     * @param {string} field
     */
  }, {
    key: "has",
    value: function has(field) {
      var hasError = this.errors.hasOwnProperty(field);
      if (!hasError) {
        var errors = Object.keys(this.errors).filter(function (e) {
          return e.startsWith("".concat(field, ".")) || e.startsWith("".concat(field, "["));
        });
        hasError = errors.length > 0;
      }
      return hasError;
    }
  }, {
    key: "first",
    value: function first(field) {
      return this.get(field)[0];
      // return this.get(field)
    }
  }, {
    key: "get",
    value: function get(field) {
      // return this.errors[field].detail || []
      return this.errors[field] || [];
    }

    /**
     * Determine if we have any errors.
     */
  }, {
    key: "any",
    value: function any() {
      return Object.keys(this.errors).length > 0;
    }

    /**
     * Record the new errors.
     *
     * @param {object} errors
     */
  }, {
    key: "record",
    value: function record() {
      var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.errors = errors;
    }

    /**
     * Clear a specific field, object or all error fields.
     *
     * @param {string|null} field
     */
  }, {
    key: "clear",
    value: function clear(field) {
      if (!field) {
        this.errors = {};
        return;
      }
      var errors = Object.assign({}, this.errors);
      Object.keys(errors).filter(function (e) {
        return e === field || e.startsWith("".concat(field, ".")) || e.startsWith("".concat(field, "["));
      }).forEach(function (e) {
        return delete errors[e];
      });
      this.errors = errors;
    }
  }]);
}();
Object.defineProperty(vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, '$Errors', {
  value: Errors
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Errors);

/***/ }),

/***/ "./resources/js/utils/form/Form.js":
/*!*****************************************!*\
  !*** ./resources/js/utils/form/Form.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "./resources/js/utils/form/Errors.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./resources/js/utils/form/util/index.js");
/* harmony import */ var _plugins_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @plugins/axios */ "./resources/js/plugins/axios.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var Form = /*#__PURE__*/function () {
  /**
   * Create a new Form instance.
   *
   * @param {object} data
   * @param {object} options
   */
  function Form() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Form);
    this.processing = false;
    this.successful = false;
    this.withData(data).withOptions(options).withErrors({});
  }
  return _createClass(Form, [{
    key: "withData",
    value: function withData(data) {
      if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isArray)(data)) {
        data = data.reduce(function (carry, element) {
          carry[element] = '';
          return carry;
        }, {});
      }
      this.setInitialValues(data);
      this.errors = new _Errors__WEBPACK_IMPORTED_MODULE_0__["default"]();
      this.processing = false;
      this.successful = false;
      for (var field in data) {
        (0,_util__WEBPACK_IMPORTED_MODULE_1__.guardAgainstReservedFieldName)(field);
        this[field] = data[field];
      }
      return this;
    }
  }, {
    key: "withErrors",
    value: function withErrors(errors) {
      this.errors = new _Errors__WEBPACK_IMPORTED_MODULE_0__["default"](errors);
      return this;
    }
  }, {
    key: "withOptions",
    value: function withOptions(options) {
      this.__options = {
        resetOnSuccess: true
      };
      if (options.hasOwnProperty('resetOnSuccess')) {
        this.__options.resetOnSuccess = options.resetOnSuccess;
      }
      if (options.hasOwnProperty('onSuccess')) {
        this.onSuccess = options.onSuccess;
      }
      if (options.hasOwnProperty('onFail')) {
        this.onFail = options.onFail;
      }
      this.__http = _plugins_axios__WEBPACK_IMPORTED_MODULE_2__["default"];
      if (!this.__http) {
        throw new Error('No http library provided. Either pass an http option, or install axios.');
      }
      return this;
    }

    /**
     * Fetch all relevant data for the form.
     */
  }, {
    key: "data",
    value: function data() {
      var data = {};
      for (var property in this.initial) {
        data[property] = this[property];
      }
      return data;
    }

    /**
     * Fetch specific data for the form.
     *
     * @param {array} fields
     * @return {object}
     */
  }, {
    key: "only",
    value: function only(fields) {
      var _this = this;
      return fields.reduce(function (filtered, field) {
        filtered[field] = _this[field];
        return filtered;
      }, {});
    }

    /**
     * Reset the form fields.
     */
  }, {
    key: "reset",
    value: function reset() {
      (0,_util__WEBPACK_IMPORTED_MODULE_1__.merge)(this, this.initial);
      this.errors.clear();
    }
  }, {
    key: "setInitialValues",
    value: function setInitialValues(values) {
      this.initial = {};
      (0,_util__WEBPACK_IMPORTED_MODULE_1__.merge)(this.initial, values);
    }
  }, {
    key: "populate",
    value: function populate(data) {
      var _this2 = this;
      Object.keys(data).forEach(function (field) {
        (0,_util__WEBPACK_IMPORTED_MODULE_1__.guardAgainstReservedFieldName)(field);
        if (_this2.hasOwnProperty(field)) {
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.merge)(_this2, _defineProperty({}, field, data[field]));
        }
      });
      return this;
    }

    /**
     * Clear the form fields.
     */
  }, {
    key: "clear",
    value: function clear() {
      for (var field in this.initial) {
        this[field] = '';
      }
      this.errors.clear();
    }

    /**
     * Send a POST request to the given URL.
     *
     * @param {string} url
     */
  }, {
    key: "post",
    value: function post(url) {
      return this.submit('post', url);
    }

    /**
     * Send a PUT request to the given URL.
     *
     * @param {string} url
     */
  }, {
    key: "put",
    value: function put(url) {
      return this.submit('put', url);
    }

    /**
     * Send a PATCH request to the given URL.
     *
     * @param {string} url
     */
  }, {
    key: "patch",
    value: function patch(url) {
      return this.submit('patch', url);
    }

    /**
     * Send a DELETE request to the given URL.
     *
     * @param {string} url
     */
  }, {
    key: "delete",
    value: function _delete(url) {
      return this.submit('delete', url);
    }

    /**
     * Submit the form.
     *
     * @param {string} requestType
     * @param {string} url
     */
  }, {
    key: "submit",
    value: function submit(requestType, url) {
      var _this3 = this;
      this.__validateRequestType(requestType);
      this.errors.clear();
      this.processing = true;
      this.successful = false;
      return new Promise(function (resolve, reject) {
        _this3.__http[requestType](url, _this3.hasFiles() ? (0,_util__WEBPACK_IMPORTED_MODULE_1__.objectToFormData)(_this3.data()) : _this3.data()).then(function (response) {
          _this3.processing = false;
          _this3.onSuccess(response.data);
          resolve(response.data);
        })["catch"](function (error) {
          _this3.processing = false;
          _this3.onFail(error);
          reject(error);
        });
      });
    }

    /**
     * @returns {boolean}
     */
  }, {
    key: "hasFiles",
    value: function hasFiles() {
      for (var property in this.initial) {
        if (this.hasFilesDeep(this[property])) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: "hasFilesDeep",
    value:
    /**
     * @param {Object|Array} object
     * @returns {boolean}
     */
    function hasFilesDeep(object) {
      if (object === null) {
        return false;
      }
      if (_typeof(object) === 'object') {
        for (var key in object) {
          if (object.hasOwnProperty(key)) {
            if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isFile)(object[key])) {
              return true;
            }
          }
        }
      }
      if (Array.isArray(object)) {
        for (var _key in object) {
          if (object.hasOwnProperty(_key)) {
            return this.hasFilesDeep(object[_key]);
          }
        }
      }
      return (0,_util__WEBPACK_IMPORTED_MODULE_1__.isFile)(object);
    }

    /**
     * Handle a successful form submission.
     *
     * @param {object} data
     */
  }, {
    key: "onSuccess",
    value: function onSuccess(data) {
      this.successful = true;
      if (this.__options.resetOnSuccess) {
        this.reset();
      }
    }

    /**
     * Handle a failed form submission.
     *
     * @param {object} data
     */
  }, {
    key: "onFail",
    value: function onFail(error) {
      this.successful = false;
      if (error.response && error.response.data.errors) {
        this.errors.record(error.response.data.errors);
      }
    }

    /**
     * Get the error message(s) for the given field.
     *
     * @param field
     */
  }, {
    key: "hasError",
    value: function hasError(field) {
      return this.errors.has(field);
    }

    /**
     * Get the first error message for the given field.
     *
     * @param {string} field
     * @return {string}
     */
  }, {
    key: "getError",
    value: function getError(field) {
      return this.errors.first(field);
    }

    /**
     * Get the error messages for the given field.
     *
     * @param {string} field
     * @return {array}
     */
  }, {
    key: "getErrors",
    value: function getErrors(field) {
      return this.errors.get(field);
    }
  }, {
    key: "__validateRequestType",
    value: function __validateRequestType(requestType) {
      var requestTypes = ['get', 'delete', 'head', 'post', 'put', 'patch'];
      if (requestTypes.indexOf(requestType) === -1) {
        throw new Error("`".concat(requestType, "` is not a valid request type, ") + "must be one of: `".concat(requestTypes.join('`, `'), "`."));
      }
    }
  }], [{
    key: "create",
    value: function create() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Form().withData(data);
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./resources/js/utils/form/util/fieldNameValidation.js":
/*!*************************************************************!*\
  !*** ./resources/js/utils/form/util/fieldNameValidation.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   guardAgainstReservedFieldName: () => (/* binding */ guardAgainstReservedFieldName),
/* harmony export */   reservedFieldNames: () => (/* binding */ reservedFieldNames)
/* harmony export */ });
var reservedFieldNames = ['__http', '__options', '__validateRequestType', 'clear', 'data', 'delete', 'errors', 'getError', 'getErrors', 'hasError', 'initial', 'onFail', 'only', 'onSuccess', 'patch', 'populate', 'post', 'processing', 'successful', 'put', 'reset', 'submit', 'withData', 'withErrors', 'withOptions'];
function guardAgainstReservedFieldName(fieldName) {
  if (reservedFieldNames.indexOf(fieldName) !== -1) {
    throw new Error("Field name ".concat(fieldName, " isn't allowed to be used in a Form or Errors instance."));
  }
}

/***/ }),

/***/ "./resources/js/utils/form/util/formData.js":
/*!**************************************************!*\
  !*** ./resources/js/utils/form/util/formData.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   objectToFormData: () => (/* binding */ objectToFormData)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function objectToFormData(object) {
  var formData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new FormData();
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  if (object === null || object === 'undefined' || object.length === 0) {
    return formData.append(parent, object);
  }
  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      appendToFormData(formData, getKey(parent, property), object[property]);
    }
  }
  return formData;
}
function getKey(parent, property) {
  return parent ? parent + '[' + property + ']' : property;
}
function appendToFormData(formData, key, value) {
  if (value instanceof Date) {
    return formData.append(key, value.toISOString());
  }
  if (value instanceof File) {
    return formData.append(key, value, value.name);
  }
  if (typeof value === "boolean") {
    return formData.append(key, value ? '1' : '0');
  }
  if (value === null) {
    return formData.append(key, '');
  }
  if (_typeof(value) !== 'object') {
    return formData.append(key, value);
  }
  objectToFormData(value, formData, key);
}

/***/ }),

/***/ "./resources/js/utils/form/util/index.js":
/*!***********************************************!*\
  !*** ./resources/js/utils/form/util/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cloneDeep: () => (/* reexport safe */ _objects__WEBPACK_IMPORTED_MODULE_0__.cloneDeep),
/* harmony export */   guardAgainstReservedFieldName: () => (/* reexport safe */ _fieldNameValidation__WEBPACK_IMPORTED_MODULE_2__.guardAgainstReservedFieldName),
/* harmony export */   isArray: () => (/* reexport safe */ _objects__WEBPACK_IMPORTED_MODULE_0__.isArray),
/* harmony export */   isFile: () => (/* reexport safe */ _objects__WEBPACK_IMPORTED_MODULE_0__.isFile),
/* harmony export */   merge: () => (/* reexport safe */ _objects__WEBPACK_IMPORTED_MODULE_0__.merge),
/* harmony export */   objectToFormData: () => (/* reexport safe */ _formData__WEBPACK_IMPORTED_MODULE_1__.objectToFormData),
/* harmony export */   reservedFieldNames: () => (/* reexport safe */ _fieldNameValidation__WEBPACK_IMPORTED_MODULE_2__.reservedFieldNames)
/* harmony export */ });
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ "./resources/js/utils/form/util/objects.js");
/* harmony import */ var _formData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formData */ "./resources/js/utils/form/util/formData.js");
/* harmony import */ var _fieldNameValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fieldNameValidation */ "./resources/js/utils/form/util/fieldNameValidation.js");




/***/ }),

/***/ "./resources/js/utils/form/util/objects.js":
/*!*************************************************!*\
  !*** ./resources/js/utils/form/util/objects.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cloneDeep: () => (/* binding */ cloneDeep),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isFile: () => (/* binding */ isFile),
/* harmony export */   merge: () => (/* binding */ merge)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function isArray(object) {
  return Object.prototype.toString.call(object) === '[object Array]';
}
function isFile(object) {
  return object instanceof File || object instanceof FileList;
}
function merge(a, b) {
  for (var key in b) {
    a[key] = cloneDeep(b[key]);
  }
}
function cloneDeep(object) {
  if (object === null) {
    return null;
  }
  if (isFile(object)) {
    return object;
  }
  if (Array.isArray(object)) {
    var clone = [];
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        clone[key] = cloneDeep(object[key]);
      }
    }
    return clone;
  }
  if (_typeof(object) === 'object') {
    var _clone = {};
    for (var _key in object) {
      if (object.hasOwnProperty(_key)) {
        _clone[_key] = cloneDeep(object[_key]);
      }
    }
    return _clone;
  }
  return object;
}

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue?vue&type=style&index=0&id=e241d7a6&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue?vue&type=style&index=0&id=e241d7a6&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.loader[data-v-e241d7a6] {\r\n    border: 8px solid #f3f3f3;\r\n    border-top: 8px solid #3498db;\r\n    border-radius: 50%;\r\n    width: 60px;\r\n    height: 60px;\r\n    animation: spin-e241d7a6 1s linear infinite;\n}\n@keyframes spin-e241d7a6 {\n0% {\r\n        transform: rotate(0deg);\n}\n100% {\r\n        transform: rotate(360deg);\n}\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue"],"names":[],"mappings":";AAsFA;IACA,yBAAA;IACA,6BAAA;IACA,kBAAA;IACA,WAAA;IACA,YAAA;IACA,2CAAA;AACA;AAEA;AACA;QACA,uBAAA;AACA;AAEA;QACA,yBAAA;AACA;AACA","sourcesContent":["<template>\r\n    <div>\r\n        <div v-if=\"loaded\" class=\"d-lg-flex align-items-center gap-2\">\r\n\r\n            <apexchart type=\"donut\" height=\"350\" :options=\"chartOptions\" :series=\"series\"></apexchart>\r\n\r\n            <div>\r\n                <div>\r\n                    <span style=\"width: 5px;height: 5px;\" class=\"badge bg-warning me-1 rounded-circle\"></span>\r\n                    <span>\r\n                        <div>Failed Transaction</div>\r\n                        <div class=\"fs-24\">{{ series[1] }} K</div>\r\n                    </span>\r\n                </div>\r\n                <div>\r\n                    <span class=\"badge-success p-2 w-2 h-2\"></span>\r\n                    <span>\r\n                        <div>Successful Transaction</div>\r\n                        <div class=\"fs-24\">{{ series[0] }} K</div>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div v-else class=\"loader mx-auto\"></div>\r\n    </div>\r\n\r\n</template>\r\n\r\n<script>\r\nimport VueApexCharts from 'vue-apexcharts';\r\nimport axios from 'axios';\r\n\r\nexport default {\r\n    components: {\r\n        apexchart: VueApexCharts,\r\n    },\r\n    data() {\r\n        return {\r\n            series: [],\r\n            loaded: false,\r\n            chartOptions: {\r\n                labels: ['Successful Transaction', 'Failed Transaction'],\r\n                chart: {\r\n                    type: 'donut',\r\n                },\r\n                stroke: {\r\n                    width: 2,\r\n                },\r\n                dataLabels: {\r\n                    enabled: true,\r\n                },\r\n                tooltip: {\r\n                    y: {\r\n                        formatter: function (val) {\r\n                            return val + 'k'; \r\n                        },\r\n                    },\r\n                },\r\n                legend: {\r\n                    position: 'bottom', \r\n                },\r\n            },\r\n        };\r\n    },\r\n    methods: {\r\n        async fetchTransactionData() {\r\n            try {\r\n                const response = await axios.get('/admin-dashboard/weekly-transactions');\r\n                const data = response.data;\r\n                this.updateChart(data);\r\n                this.loaded = true;\r\n            } catch (error) {\r\n                console.error('Error fetching transaction data:', error);\r\n            }\r\n        },\r\n        updateChart(data) {\r\n            this.series = [(data.series.successful / 1000), (data.series.failed/1000)];\r\n        },\r\n    },\r\n    mounted() {\r\n        this.fetchTransactionData();\r\n    },\r\n};\r\n</script>\r\n\r\n<style scoped>\r\n.loader {\r\n    border: 8px solid #f3f3f3;\r\n    border-top: 8px solid #3498db;\r\n    border-radius: 50%;\r\n    width: 60px;\r\n    height: 60px;\r\n    animation: spin 1s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/GroupManagement.vue?vue&type=style&index=0&id=66065a72&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/GroupManagement.vue?vue&type=style&index=0&id=66065a72&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.spinner[data-v-66065a72] {\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    border: 3px solid rgba(0, 0, 0, 0.1);\n    border-left-color: #041b3f;\n    border-radius: 50%;\n    animation: spin-66065a72 1s linear infinite;\n}\n@keyframes spin-66065a72 {\n100% {\n        transform: rotate(360deg);\n}\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/pages/customer/GroupManagement.vue"],"names":[],"mappings":";AA4NA;IACA,qBAAA;IACA,WAAA;IACA,YAAA;IACA,oCAAA;IACA,0BAAA;IACA,kBAAA;IACA,2CAAA;AACA;AAEA;AACA;QACA,yBAAA;AACA;AACA","sourcesContent":["<template>\n\n    <div class=\"row\">\n        <div class=\"col-lg-8  me-auto\">\n            <div class=\"card w-100\" style=\"margin-top: 50px; border-radius: 10px;\">\n                <div class=\"card-header text-white\"\n                    style=\"background-color: #041b3f; border-top-left-radius: 10px; border-top-right-radius: 10px;\">\n                    <!-- <h5 class=\"mb-0 text-white\">GROUP MANAGEMENT</h5> -->\n                </div>\n                <div class=\"card-body\">\n                    <form @submit.prevent=\"changeGroup\">\n\n                        <div class=\"mb-3\">\n                            <label for=\"recipientName\" class=\"form-label\">Phone no or Ac no</label>\n                            <input :disabled=\"is_verified\" v-model=\"form.user_id\" type=\"text\" class=\"form-control mb-3\" id=\"user_id\" name=\"user_id\"\n                                placeholder=\"Enter Phone no or Ac no\">\n                                <div v-if=\"isValidating\" class=\"spinner mt-2\"></div>\n                        </div>\n                        <div v-if=\"is_verified\">\n                            <div class=\"mb-4\" id=\"recipient_name_field_group_manage\">\n                            <label for=\"recipient_name_input_manage\" class=\"form-label\">Customer\n                                Name</label>\n                            <input type=\"text\" class=\"form-control \" id=\"recipient_name_input_manage\"\n                                name=\"recipient_name\" disabled v-model=\"form.recipient_name\" placeholder=\"Enter Recipient Name\">\n\n                        </div>\n\n                        <div class=\"mb-3\" id=\"current_group_field\">\n                            <label for=\"current_group\" class=\"form-label\">Current Group</label>\n                            <select v-model=\"form.current_group\" disabled id=\"current_group\" class=\"form-select\" name=\"new_group\">\n\n                                <option v-if=\"groups.length === 0\" value=\"0\">No group available</option>\n                                <option :key=\"group.id\" v-for=\"group in groups\" :value=\"group.id\">{{ group.name }}</option>\n                            </select>\n                        </div>\n\n                        <div class=\"mb-3\" id=\"new_group_field\">\n                            <label for=\"role\" class=\"form-label\">New Group</label>\n                            <select v-model=\"form.new_group\" class=\"form-select\" name=\"new_group\" id=\"role\">\n                                <option v-if=\"groups.length === 0\" value=\"0\">No group available</option>\n                                <option :key=\"group.id\" v-for=\"group in groups\" :value=\"group.id\">{{ group.name }}</option>\n\n                            </select>\n\n                        </div>\n                        </div>\n\n                        <div class=\"d-flex justify-content-end\">\n                            <button @click=\"goBack\" type=\"button\" class=\"btn btn-outline-primary px-5 me-2\">Cancel</button>\n                            <button :disabled=\"!canSubmit\" class=\"btn btn-primary px-5\" style=\"background-color: #041b3f;\">{{ btnState }}</button>\n                        </div>\n\n                    </form>\n\n                </div>\n                <a style=\"visibility: hidden\" id=\"modalBtn\" href=\"#\" class=\"btn\" data-bs-toggle=\"modal\"\n                    data-bs-target=\"#modal-success\">\n                    Success modal\n                </a>\n                <!-- Vertically centered scrollable modal -->\n                <modal :message=\"modal.message\" :title=\"modal.title\" :type=\"modal.type\"></modal>\n            </div>\n\n        </div>\n    </div>\n</template>\n\n<script>\nimport Form from '@utils/form/Form'\nimport Modal from '../payments/modal/Modal.vue';\nimport axios from 'axios';\nexport default {\n    components: { Modal },\n    props: {\n        page_info:{\n            type:Object\n        }\n    },\n    data() {\n        return {\n            form: new Form({\n                wallet_number: '',\n                user_id: '',\n                is_verified: false,\n                recipient_name: '',\n                current_group: '',\n                new_group: '',\n            }, {\n                resetOnSuccess: false,\n            }),\n            groups: [],\n            modal: {\n                message: 'Unexpected Error Occurred',\n                type: 'failed',\n                title: 'Error'\n            },\n            is_verified: false,\n            isValidating: false,\n            on_edit: false,\n\n            btnState: 'submit'\n        };\n    },\n    watch: {\n        'form.user_id': function (value) {\n            if (this.typingTimeout) clearTimeout(this.typingTimeout);\n            this.form.wallet_number = value\n            if (value.length > 3 && this.form.is_verified === false) {\n                this.typingTimeout = setTimeout(() => {\n                    this.isValidating = true\n                    this.form.post(`${this.page_info?.domain}bank/verify-wallet-id`)\n                        .then((data) => {\n                            if (data.status === \"SUCCESS\") {\n                                this.isValidating = false;\n                                this.is_verified = true;\n                                this.form.walletId = data.walletId;\n                                this.form.current_group = data.groupId;\n                                this.form.is_verified = true;\n                                this.form.recipient_name = data.walletName;\n\n                            } else {\n                                this.is_verified = false;\n                                this.form.is_verified = false;\n                                this.isValidating = false;\n                                this.modal.type = 'failed',\n                                this.modal.message = data.message,\n                                this.modal.title = 'Not Found'\n                                let bn = document.getElementById('modalBtn');\n                                setTimeout(() => bn.click(), 200)\n                            }\n                        })\n                        .catch((error) => {\n                            this.cashOutIsValidating = false;\n                            if (error.response && error.response.data && error.response.data.errors) {\n                                this.cashInForm.errors.record(error.response.data.errors);\n                            } else {\n                                this.$toast.error(error.response.data);\n                            }\n                        });\n                }, 1500);\n            }\n        }\n    },\n    computed: {\n        canSubmit() {\n            return (\n                this.form.user_id !== '' && this.form.processing === false && this.form.new_group !== ''\n            );\n        },\n    },\n    mounted() {\n        this.getGroups()\n    },\n    methods: {\n        changeGroup() {\n            // this.isValidating = true\n            this.btnState= \"submitting...\"\n            this.form.post(`${this.page_info?.domain}bank/group-management`)\n                .then((data) => {\n                    if (data.status === \"SUCCESS\") {\n                        this.isValidating = false;\n                        this.is_verified = false;\n                        this.btnState = 'Submit'\n                        this.form.reset()\n                        this.modal.type = 'success',\n                        this.modal.message = data.message,\n                        this.modal.title = 'Group Changed'\n                        let bn = document.getElementById('modalBtn');\n                        setTimeout(() => bn.click(), 200)\n                    } else {\n                        this.btnState = 'Submit'\n                        this.is_verified = true;\n                        this.form.is_verified = true;\n                        this.isValidating = false;\n                        this.modal.type = 'failed',\n                            this.modal.message = data.message,\n                            this.modal.title = 'Not Found'\n                        let bn = document.getElementById('modalBtn');\n                        setTimeout(() => bn.click(), 200)\n                    }\n                })\n                .catch((error) => {\n                    this.isValidating = false;\n                    this.btnState = 'Submit'\n                    if (error.response && error.response.data && error.response.data.errors) {\n                        this.cashInForm.errors.record(error.response.data.errors);\n                    } else {\n                        this.$toast.error(error.response.data);\n                    }\n                });\n\n\n        },\n        goBack() {\n            window.history.back();\n        },\n        getGroups() {\n            let apiUrl = `${this.page_info?.domain}bank/get-groups`\n            axios.get(apiUrl)\n                .then(response => {\n                    let data = response.data;\n                    this.groups = data\n                })\n                .catch(error => {\n                    this.modal.type = 'failed',\n                    this.modal.message = \"failed to load groups\",\n                    this.modal.title = 'Error Occurred'\n                    let bn = document.getElementById('modalBtn');\n                    setTimeout(() => bn.click(), 200)\n                    setTimeout(()=>window.location.reload(),5000)\n\n                });\n        }\n\n    },\n};\n</script>\n\n\n<style scoped>\n.spinner {\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    border: 3px solid rgba(0, 0, 0, 0.1);\n    border-left-color: #041b3f;\n    border-radius: 50%;\n    animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n    100% {\n        transform: rotate(360deg);\n    }\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/ResetPin.vue?vue&type=style&index=0&id=411020f1&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/ResetPin.vue?vue&type=style&index=0&id=411020f1&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.otp-input[data-v-411020f1] {\n    width: 60px;\n    height: 60px;\n    font-size: 2rem;\n    font-weight: bold;\n}\n.form-label[data-v-411020f1] {\n    font-weight: bold;\n}\n.spinner[data-v-411020f1] {\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    border: 3px solid rgba(0, 0, 0, 0.1);\n    border-left-color: #041b3f;\n    border-radius: 50%;\n    animation: spin-411020f1 1s linear infinite;\n}\n@keyframes spin-411020f1 {\n100% {\n        transform: rotate(360deg);\n}\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/pages/customer/ResetPin.vue"],"names":[],"mappings":";AAwPA;IACA,WAAA;IACA,YAAA;IACA,eAAA;IACA,iBAAA;AACA;AAEA;IACA,iBAAA;AACA;AAEA;IACA,qBAAA;IACA,WAAA;IACA,YAAA;IACA,oCAAA;IACA,0BAAA;IACA,kBAAA;IACA,2CAAA;AACA;AAEA;AACA;QACA,yBAAA;AACA;AACA","sourcesContent":["<template>\n\n        <div class=\"row\">\n            <div class=\"col-lg-6 me-auto\">\n                <div class=\"card w-100 mt-5\" style=\"border-radius: 10px;\">\n                    <div class=\"card-header \" style=\"background-color: #041b3f; border-radius: 10px 10px 0 0;\">\n                        <!-- <h5 class=\"mb-0 text-white\">Reset PIN</h5> -->\n                    </div>\n\n                    <div class=\"card-body\">\n                        <form class=\"px-lg-3\" @submit.prevent=\"verifyPin\">\n                            <!-- Phone No or Account No -->\n                            <div class=\"mb-3\">\n                                <label for=\"account_no\" class=\"form-label\">Phone No or Ac no</label>\n                                <input :disabled=\"is_verified\" type=\"text\" class=\"form-control\" id=\"account_no\" name=\"walletId\"\n                                    placeholder=\"Enter Phone No or Ac no\" v-model=\"form.wallet_number\">\n                                <div v-if=\"isValidating\" class=\"spinner mt-2\"></div>\n                            </div>\n\n                            <!-- Customer's Name -->\n                            <div v-if=\"is_verified\" class=\"mb-3\">\n                                <label for=\"customer_name\" class=\"form-label\">Customer's Name</label>\n                                <input :disabled=\"is_verified\" type=\"text\" class=\"form-control\" id=\"customer_name\"\n                                    placeholder=\"Enter customer name\" v-model=\"form.customerName\">\n                            </div>\n\n                            <div v-if=\"is_verified\" class=\"mt-6\">\n                                <p class=\"text-muted\">Provide the new pin for the customer</p>\n                                <div class=\"mb-4\">\n                                    <label for=\"new-pin\" class=\"form-label d-block text-start\">New PIN</label>\n                                    <div class=\"d-flex align-items-center gap-4\">\n                                        <input v-for=\"(pin, index) in newPinInputs\" :key=\"`new-pin-${index}`\"\n                                            ref=\"newPinInputs\" type=\"password\" class=\"form-control text-center otp-input\"\n                                               id=\"pin\"\n                                            maxlength=\"1\" v-model=\"newPinInputs[index]\"\n                                            @input=\"handleInput(index, 'new')\"\n                                            @keydown=\"handleKeyDown($event, index, 'new')\"\n                                            @paste=\"handlePaste($event, 'new')\" @focus=\"handleFocus\" />\n                                        <div @click=\"handleShowPin\"><i :class=\"`bi ${showPin ? 'bi-eye' : 'bi-eye-slash'} fs-22`\"></i></div>\n                                    </div>\n                                </div>\n\n                                <div class=\"mb-4\">\n                                    <label for=\"confirm-pin\" class=\"form-label d-block text-start\">Confirm PIN</label>\n                                    <div class=\"d-flex gap-4 align-items-center\">\n                                        <input v-for=\"(pin, index) in confirmPinInputs\" :key=\"`confirm-pin-${index}`\"\n                                            ref=\"confirmPinInputs\" type=\"password\"\n                                               id=\"confirmPin\"\n                                            class=\"form-control text-center otp-input\" maxlength=\"1\"\n                                            v-model=\"confirmPinInputs[index]\" @input=\"handleInput(index, 'confirm')\"\n                                            @keydown=\"handleKeyDown($event, index, 'confirm')\"\n                                            @paste=\"handlePaste($event, 'confirm')\" @focus=\"handleFocus\" />\n                                        <div @click=\"handleShowConfirmPin\" ><i :class=\"`bi ${showConfirmPin ? 'bi-eye' : 'bi-eye-slash'} fs-22`\"></i></div>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                            <div class=\"d-flex gap-3 flex-wrap flex-column-reverse flex-md-row justify-content-md-end\">\n                                <button @click=\"goBack\" type=\"button\" class=\"btn btn-outline-primary px-5\">Cancel</button>\n                                <button :disabled=\"!canSubmit\" v-html=\"state\" type=\"submit\" class=\"btn btn-primary px-5\"\n                                    style=\"background-color: #041b3f;\"></button>\n                            </div>\n                        </form>\n                    </div>\n                    <a style=\"visibility: hidden\" id=\"modalBtn\" href=\"#\" class=\"btn\" data-bs-toggle=\"modal\"\n                    data-bs-target=\"#modal-success\">\n                    Success modal\n                </a>\n                <!-- Vertically centered scrollable modal -->\n                <modal :message=\"modal.message\" :title=\"modal.title\" :type=\"modal.type\"></modal>\n                </div>\n            </div>\n\n        </div>\n\n</template>\n\n<script>\nimport Form from '@utils/form/Form'\nimport Modal from '../payments/modal/Modal.vue';\nexport default {\n    components: { Modal },\n    props: {\n        page_info:{\n            type:Object\n        }\n    },\n    data() {\n        return {\n            walletId: '',\n            customerName: '',\n            form: new Form({\n                wallet_number: '',\n                walletId: '',\n                is_verified: false,\n                customerName: '',\n                newPin: ''\n            }, {\n                resetOnSuccess: false,\n            }),\n            modal: {\n                message: 'Unexpected Error Occurred',\n                type: 'failed',\n                title: 'Error'\n            },\n            showConfirmPin: false,\n            showPin: false,\n            hidePin:'bi-eye-slash',\n            is_verified: false,\n            state: 'Submit',\n            newPinInputs: Array(4).fill(\"\"),\n            confirmPinInputs: Array(4).fill(\"\"),\n            isValidating: false,\n            typingTimeout: null,  // Add a timeout reference\n        };\n    },\n    watch: {\n        'form.wallet_number': function (value) {\n            if (this.typingTimeout) clearTimeout(this.typingTimeout);\n\n            if (value.length > 3 && this.form.is_verified === false) {\n                this.typingTimeout = setTimeout(() => {\n                    this.isValidating = true\n                    this.form.post(`${this.page_info?.domain}bank/verify-wallet-id`)\n                        .then((data) => {\n                            if (data.status === \"SUCCESS\") {\n                                this.isValidating = false;\n                                this.is_verified = true;\n                                this.form.walletId = data.walletId;\n                                this.form.is_verified = true;\n                                this.form.customerName = data.walletName;\n                                this.form.wallet_number = data.walletId;\n                            } else {\n                                this.is_verified = false;\n                                this.form.is_verified = false;\n                                this.isValidating = false;\n                                this.modal.type = 'failed',\n                                this.modal.message = data.message,\n                                this.modal.title = 'Not Found'\n                                let bn = document.getElementById('modalBtn');\n                                setTimeout(() => bn.click(), 200)\n                            }\n                        })\n                        .catch((error) => {\n                            this.isValidating = false;\n                            if (error.response && error.response.data && error.response.data.errors) {\n                                this.form.errors.record(error.response.data.errors);\n                            } else {\n                                this.$toast.error(error.response.data);\n                            }\n                        });\n                }, 1500);\n            }\n        }\n    },\n    computed: {\n        canSubmit() {\n            return (\n                this.newPinInputs.join('').length === 4 &&\n                this.confirmPinInputs.join('').length === 4 &&\n                this.newPinInputs.join('') === this.confirmPinInputs.join('')\n                && this.form.processing === false && this.is_verified !== false\n            );\n        },\n    },\n    methods: {\n        handleShowConfirmPin(){\n            this.showConfirmPin = !this.showConfirmPin\n            let input = document.querySelectorAll('#confirmPin')\n            input.forEach((input)=>input.type = this.showConfirmPin ? 'text' : 'password')\n        },\n        handleShowPin(){\n            this.showPin = !this.showPin\n            let input = document.querySelectorAll('#pin')\n            input.forEach((input)=>input.type = this.showPin ? 'text' : 'password')\n        },\n        handleInput(index, type) {\n            const pinArray = type === 'new' ? this.newPinInputs : this.confirmPinInputs;\n            if (pinArray[index] !== \"\" && index < pinArray.length - 1) {\n                this.$refs[`${type}PinInputs`][index + 1].focus();\n            }\n        },\n        handleKeyDown(event, index, type) {\n            const pinArray = type === 'new' ? this.newPinInputs : this.confirmPinInputs;\n            if (event.key === 'Backspace' && pinArray[index] === '' && index > 0) {\n                this.$refs[`${type}PinInputs`][index - 1].focus();\n            }\n        },\n        handleFocus(event) {\n            event.target.select();\n        },\n        handlePaste(event, type) {\n            event.preventDefault();\n            const text = event.clipboardData.getData('text').replace(/\\D/g, ''); // Allow only numeric\n            text.split('').slice(0, 4).forEach((digit, index) => {\n                this[`${type}PinInputs`][index] = digit;\n                this.$refs[`${type}PinInputs`][index].focus();\n            });\n        },\n        goBack() {\n            window.history.back();\n        },\n        verifyPin() {\n            this.form.newPin = this.newPinInputs.join('');\n            this.state = `Resetting...`\n            this.canSubmit = true;\n            this.form.post(`${this.page_info?.domain}bank/reset-customer-pin`)\n                .then((data) => {\n                    if (data.status === \"SUCCESS\") {\n\n                        this.modal.type = 'success',\n                        this.modal.message = data.message,\n                        this.modal.title = 'PIN Reset succeeded'\n                        let bn = document.getElementById('modalBtn');\n                        setTimeout(() => bn.click(), 200)\n                        this.is_verified = false;\n                        this.form.is_verified = false;\n                        this.form.reset()\n                        this.state = `Submit`\n                    } else {\n                        this.is_verified = true;\n                        this.form.is_verified = true;\n                        this.isValidating = false;\n                        this.state = `Submit`\n                        this.modal.type = 'failed',\n                        this.modal.message = data.message,\n                        this.modal.title = 'PIN Reset Failed'\n                        let bn = document.getElementById('modalBtn');\n                        setTimeout(() => bn.click(), 200)\n\n                    }\n                })\n                .catch((error) => {\n                    this.response = true\n                    this.responseMessage = \"An error occurred when connecting\";\n                    this.isValidating = false;\n                    this.is_verified = true;\n                    this.form.is_verified = true;\n                    this.state = `Submit`\n                });\n        },\n    },\n};\n</script>\n\n\n<style scoped>\n.otp-input {\n    width: 60px;\n    height: 60px;\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n.form-label {\n    font-weight: bold;\n}\n\n.spinner {\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    border: 3px solid rgba(0, 0, 0, 0.1);\n    border-left-color: #041b3f;\n    border-radius: 50%;\n    animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n    100% {\n        transform: rotate(360deg);\n    }\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/UpdateAccount.vue?vue&type=style&index=0&id=728be3ee&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/UpdateAccount.vue?vue&type=style&index=0&id=728be3ee&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.spinner[data-v-728be3ee] {\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    border: 3px solid rgba(0, 0, 0, 0.1);\n    border-left-color: #041b3f;\n    border-radius: 50%;\n    animation: spin-728be3ee 1s linear infinite;\n}\n@keyframes spin-728be3ee {\n100% {\n        transform: rotate(360deg);\n}\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/pages/customer/UpdateAccount.vue"],"names":[],"mappings":";AAmWA;IACA,qBAAA;IACA,WAAA;IACA,YAAA;IACA,oCAAA;IACA,0BAAA;IACA,kBAAA;IACA,2CAAA;AACA;AAEA;AACA;QACA,yBAAA;AACA;AACA","sourcesContent":["<template>\n    <div class=\"row\">\n        <div class=\"col-lg-8  me-auto\">\n            <div class=\"card w-100\" style=\"margin-top: 50px; border-radius: 10px;\">\n                <div class=\"card-header text-white\"\n                    style=\"background-color: #041b3f; border-top-left-radius: 10px; border-top-right-radius: 10px;\">\n                    <h5 class=\"mb-0 text-white\">Customer Details</h5>\n                </div>\n                <div class=\"card-body\">\n                    <form @submit.prevent id=\"updateForm\">\n\n                        <div v-if=\"!is_verified\" class=\"form-group mb-3 \">\n                            <label for=\"accountPhoneInput\">Ac no or Phone no</label>\n                            <div class=\"d-flex align-items-center \">\n                                <div class=\"w-100\">\n                                    <input type=\"text\" class=\"form-control\" id=\"account_no\" name=\"walletId\"\n                                        placeholder=\"Enter Phone No or Ac no\" v-model=\"form.acountPhoneInput\">\n                                    <div v-if=\"isValidating\" class=\"spinner mt-2\"></div>\n                                </div>\n\n\n                            </div>\n                        </div>\n                        <div v-if=\"is_verified && on_edit === false\" class=\"col-lg-10 mx-auto mb-3\">\n                            <div class=\"form-group mb-3\">\n                                <label for=\"nameInput\">Wallet Name</label>\n                                <div class=\"d-flex gap-2 d-flex align-items-center justify-content-center\">\n                                    <input disabled type=\"text\" v-model=\"form.fullname\" id=\"nameInput\" name=\"name\"\n                                        class=\"form-control\" placeholder=\"Enter Name\">\n                                </div>\n\n                            </div>\n\n                            <div class=\"form-group mb-3\">\n                                <label for=\"phoneNumber\">Phone Number</label>\n                                <div class=\"d-flex gap-2 d-flex align-items-center justify-content-center\">\n                                    <input v-model=\"form.acountPhoneInput\" disabled type=\"text\" id=\"phoneNumberInput\"\n                                        name=\"phoneNumber\" class=\"form-control\" placeholder=\"Enter Phone Number\">\n                                </div>\n\n                            </div>\n                            <div class=\"d-flex justify-content-between\">\n                                <button @click=\"cancel\" class=\"btn btn-outline-primary\">back</button>\n                                <button @click=\"onEdit\" class=\"btn btn-success\">Edit</button>\n                            </div>\n                        </div>\n                        <div v-if=\"on_edit\" id=\"is_verified\">\n                            <div class=\"form-group mb-3\">\n                                <label for=\"nameInput\">Wallet Name</label>\n                                <div class=\"d-flex gap-2 d-flex align-items-center justify-content-center\">\n                                    <input type=\"text\" v-model=\"form.fullname\" id=\"nameInput\" name=\"name\"\n                                        class=\"form-control\" placeholder=\"Enter Name\">\n                                    <button @click=\"updateField('name', 'fullname')\" id=\"name\" type=\"button\"\n                                        class=\"btn btn-primary\">Update</button>\n                                </div>\n\n                            </div>\n\n                            <div class=\"form-group mb-3\">\n                                <label for=\"phoneNumber\">Phone Number</label>\n                                <div class=\"d-flex gap-2 d-flex align-items-center justify-content-center\">\n                                    <input v-model=\"form.phoneNumber\" type=\"text\" id=\"phoneNumberInput\"\n                                        name=\"phoneNumber\" class=\"form-control\" placeholder=\"Enter Phone Number\">\n                                    <button id=\"phoneNumber\" type=\"button\" class=\"btn btn-primary\"\n                                        @click=\"updateField('phoneNumber', 'phoneNumber')\">Update</button>\n                                </div>\n\n                            </div>\n\n                            <div class=\"form-group mb-3 \">\n                                <label for=\"macAddress\">Mac Address</label>\n                                <div class=\"d-flex gap-2 d-flex align-items-center justify-content-center\">\n                                    <input type=\"text\" v-model=\"form.macAddress\" id=\"macAddressInput\" name=\"macAddress\"\n                                        class=\"form-control\" placeholder=\"Mac Address\">\n                                    <button id=\"macAddress\" type=\"button\" class=\"btn btn-primary\"\n                                        @click=\"updateField('macAddress', 'macAddress')\">Update</button>\n                                </div>\n\n                            </div>\n\n                            <div class=\"form-group mb-3 \">\n                                <label for=\"language\">Language</label>\n                                <div class=\"d-flex gap-2 d-flex align-items-center justify-content-center\">\n                                    <select v-model=\"form.language\" class=\"form-select\" name=\"language\" id=\"gender\">\n                                        <option value=\"English\">English</option>\n                                        <option value=\"Somali\">Somali</option>\n                                        <!-- <option value=\"Arabic\">Arabic</option> -->\n                                    </select>\n                                    <button id=\"language\" type=\"button\" class=\"btn btn-primary\"\n                                        @click=\"updateField('language', 'language')\">Update</button>\n                                </div>\n\n                            </div>\n\n                            <div class=\"form-group mb-3\">\n                                <label for=\"email\">Email</label>\n                                <div class=\"d-flex gap-2 d-flex align-items-center justify-content-center\">\n                                    <input v-model=\"form.email\" type=\"email\" id=\"emailInput\" name=\"email\"\n                                        class=\"form-control\" placeholder=\"Email\">\n                                    <button id=\"email\" type=\"button\" class=\"btn btn-primary\"\n                                        @click=\"updateField('email', 'email')\">Update</button>\n                                </div>\n\n\n                            </div>\n                        </div>\n                        <div class=\"d-flex justify-content-between mt-2\">\n                            <a href=\"\" class=\"btn btn-danger exit-btn\">Exit</a>\n                            <button v-if=\"on_edit\" @click=\"done\" class=\"btn btn-success\">Done</button>\n                            <button @click=\"verify\" :disabled=\"isValidating\" v-if=\"!on_edit && !is_verified\"\n                                class=\"btn btn-success\">Verify</button>\n                        </div>\n\n                    </form>\n                </div>\n                <a style=\"visibility: hidden\" id=\"modalBtn\" href=\"#\" class=\"btn\" data-bs-toggle=\"modal\"\n                    data-bs-target=\"#modal-success\">\n                    Success modal\n                </a>\n                <!-- Vertically centered scrollable modal -->\n                <modal :message=\"modal.message\" :title=\"modal.title\" :type=\"modal.type\"></modal>\n\n            </div>\n\n        </div>\n    </div>\n</template>\n\n<script>\nimport Form from '@utils/form/Form'\nimport Modal from '../payments/modal/Modal.vue';\nimport flatpickr from 'flatpickr';\nimport FlatPickr from 'vue-flatpickr-component';\nimport { VueTelInput } from 'vue-tel-input';\nimport 'vue-tel-input/dist/vue-tel-input.css';\nimport 'flatpickr/dist/flatpickr.css';\nexport default {\n    components: { Modal, flatpickr, FlatPickr, VueTelInput },\n    props:{\n        page_info:{\n            type:Object,\n            required: true\n        }\n    },\n    data() {\n        return {\n            form: new Form({\n                wallet_number: '',\n                acountPhoneInput: '',\n                is_verified: false,\n                fullname: '',\n                macAddress: '',\n                phoneNumber: '',\n                email: '',\n                language: '',\n                fullphone: '',\n\n            }, {\n                resetOnSuccess: false,\n            }),\n            toUpdateForm: new Form({\n                value: '',\n                walletId: '',\n                fieldToChange: '',\n                is_verified: ''\n            }),\n            selectedDate: null,\n            dateConfig: {\n                maxDate: new Date().setFullYear(new Date().getFullYear() - 18),\n                dateFormat: 'Y-m-d',\n                disableMobile: true,\n                altInput: true,\n                altFormat: 'F j, Y',\n            },\n            modal: {\n                message: 'Unexpected Error Occurred',\n                type: 'failed',\n                title: 'Error'\n            },\n            is_verified: false,\n            isValidating: false,\n            on_edit: false,\n            combinedPhoneNumber: '',\n            countryCode: '',\n            btnState: 'submit'\n        };\n    },\n    watch: {\n        'form.acountPhoneInput': function (value) {\n            if (this.typingTimeout) clearTimeout(this.typingTimeout);\n            this.form.wallet_number = value\n            if (value.length > 3 && this.form.is_verified === false) {\n                this.typingTimeout = setTimeout(() => {\n                    this.isValidating = true\n                    this.form.post(`${this.page_info.domain}bank/verify-wallet-id`)\n                        .then((data) => {\n                            if (data.status === \"SUCCESS\") {\n                                this.isValidating = false;\n                                this.is_verified = true;\n                                this.form.walletId = data.walletId;\n                                this.form.groupId = data.groupId;\n                                this.form.is_verified = true;\n                                this.form.fullname = data.walletName;\n                                this.form.phoneNumber = data.phoneNumber;\n                                this.form.language = data.language;\n                                this.form.macAddress = data.macAddress;\n                                this.form.email = data.email;\n                            } else {\n                                this.is_verified = false;\n                                this.form.is_verified = false;\n                                this.isValidating = false;\n                                this.modal.type = 'failed',\n                                    this.modal.message = data.message,\n                                    this.modal.title = 'Not Found'\n                                let bn = document.getElementById('modalBtn');\n                                setTimeout(() => bn.click(), 200)\n                            }\n                        })\n                        .catch((error) => {\n                            this.cashOutIsValidating = false;\n                            if (error.response && error.response.data && error.response.data.errors) {\n                                this.cashInForm.errors.record(error.response.data.errors);\n                            } else {\n                                this.$toast.error(error.response.data);\n                            }\n                        });\n                }, 1500);\n            }\n        }\n    },\n    computed: {\n        canSubmit() {\n            return (\n                this.form.fullname !== '' && this.form.processing === false\n            );\n        },\n    },\n    methods: {\n        verify() {\n            this.isValidating = true\n            if (this.form.wallet_number !== '') {\n                this.form.post(`${this.page_info.domain}bank/verify-wallet-id`)\n                    .then((data) => {\n                        if (data.status === \"SUCCESS\") {\n                            this.isValidating = false;\n                            this.is_verified = true;\n                            this.form.walletId = data.walletId;\n                            this.form.groupId = data.groupId;\n                            this.form.is_verified = true;\n                            this.form.fullname = data.walletName;\n                            this.form.phoneNumber = data.phoneNumber;\n                            this.form.language = data.language;\n                            this.form.macAddress = data.macAddress;\n                            this.form.email = data.email;\n\n                        } else {\n                            this.is_verified = false;\n                            this.form.is_verified = false;\n                            this.isValidating = false;\n                            this.modal.type = 'failed',\n                                this.modal.message = data.message,\n                                this.modal.title = 'Not Found'\n                            let bn = document.getElementById('modalBtn');\n                            setTimeout(() => bn.click(), 200)\n                        }\n                    })\n                    .catch((error) => {\n                        this.isValidating = false;\n                        if (error.response && error.response.data && error.response.data.errors) {\n                            this.cashInForm.errors.record(error.response.data.errors);\n                        } else {\n                            this.$toast.error(error.response.data);\n                        }\n                    });\n            } else {\n                this.isValidating = false,\n                    this.modal.type = 'failed',\n                    this.modal.message = \"Please supply an account number or phone number\",\n                    this.modal.title = 'Fill The Form'\n                let bn = document.getElementById('modalBtn');\n                setTimeout(() => bn.click(), 200)\n            }\n\n        },\n        goBack() {\n            window.history.back();\n        },\n        done() {\n            this.on_edit = false\n            this.is_verified = false\n        },\n        onEdit() {\n            this.on_edit = true\n            this.is_verified = true\n        },\n        cancel() {\n            this.is_verified = false\n        },\n        formatPhoneNumber(phoneNumber, numberOjg) {\n            console.log(numberOjg)\n            this.combinedPhoneNumber = phoneNumber;\n            this.form.phone = `${numberOjg.countryCallingCode}${numberOjg.nationalNumber\n                }`\n            this.countryCode = this.$refs.phoneInput.selectedCountry.callingCode;\n        },\n        createAccount() {\n\n        },\n        updateField(fieldName, formField) {\n            this.toUpdateForm.value = this.form[formField]\n            this.toUpdateForm.walletId = this.form.acountPhoneInput\n            this.toUpdateForm.fieldToChange = fieldName\n            this.toUpdateForm.is_verified = this.form.is_verified\n            let btn = document.getElementById(fieldName);\n            btn.innerHTML = `Updating...`;\n            btn.disabled = true;\n            this.btnState = `...`\n            this.toUpdateForm.post(`${this.page_info.domain}bank/update-user`)\n                .then((data) => {\n                    if (data.status === \"SUCCESS\") {\n                        btn.disabled = false;\n                        btn.innerHTML = `Updated`;\n                        this.modal.type = 'success',\n                            this.modal.message = data.message,\n                            this.modal.title = `Field Updated`\n                        this.toUpdateForm.reset()\n                        this.btnState = `Submit`\n                        let bn = document.getElementById('modalBtn');\n                        setTimeout(() => bn.click(), 200)\n                    } else {\n                        this.modal.type = 'failed',\n                        btn.disabled = false;\n                            this.modal.message = data.message,\n                            this.modal.title = 'Field Failed To Update'\n                        this.btnState = `Submit`\n                        btn.innerHTML = `Update`;\n                        let bn = document.getElementById('modalBtn');\n                        setTimeout(() => bn.click(), 200)\n                    }\n                })\n                .catch((error) => {\n                    this.isValidating = false;\n                    this.is_verified = true;\n                    btn.disabled = false;\n                    this.form.is_verified = false;\n                    this.btnState = `Submit`\n                    btn.innerHTML = `Update`;\n                });\n        }\n    },\n};\n</script>\n\n\n<style scoped>\n.spinner {\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    border: 3px solid rgba(0, 0, 0, 0.1);\n    border-left-color: #041b3f;\n    border-radius: 50%;\n    animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n    100% {\n        transform: rotate(360deg);\n    }\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AgentFloat.vue?vue&type=style&index=0&id=737e0513&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AgentFloat.vue?vue&type=style&index=0&id=737e0513&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.spinner[data-v-737e0513] {\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    border: 3px solid rgba(0, 0, 0, 0.1);\n    border-left-color: #041b3f;\n    border-radius: 50%;\n    animation: spin-737e0513 1s linear infinite;\n}\n@keyframes spin-737e0513 {\n100% {\n        transform: rotate(360deg);\n}\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/pages/payments/AgentFloat.vue"],"names":[],"mappings":";AAsOA;IACA,qBAAA;IACA,WAAA;IACA,YAAA;IACA,oCAAA;IACA,0BAAA;IACA,kBAAA;IACA,2CAAA;AACA;AAEA;AACA;QACA,yBAAA;AACA;AACA","sourcesContent":["<template>\n    <div class=\"row\">\n        <div class=\"col-lg-8  me-auto\">\n            <div class=\"card w-100\" style=\"margin-top: 50px; border-radius: 10px;\">\n                <div class=\"card-header text-white\"\n                    style=\"background-color: #041b3f; border-top-left-radius: 10px; border-top-right-radius: 10px;\">\n\n                </div>\n\n                <div class=\"card-body\">\n\n                    <form @submit.prevent=\"agentFloat\" class=\"px-lg-3\">\n                        <!-- Agent No -->\n                        <div class=\"mb-3\">\n                            <label for=\"account_no\" class=\"form-label\">Agent ID</label>\n                            <input type=\"text\" v-model=\"form.agent_id\" class=\"form-control\" id=\"account_no\"\n                                name=\"agentId\" placeholder=\"Enter Agent ID\">\n                            <div v-if=\"isValidating\" class=\"spinner mt-2\"></div>\n                        </div>\n\n\n                        <div v-if=\"is_verified\" class=\"mb-4\">\n                            <label for=\"recipient_name\" class=\"form-label\">Agent Name</label>\n                            <input disabled type=\"text\" v-model=\"form.agent_name\" class=\"form-control\" id=\"agent_name\"\n                                name=\"agent_name\" placeholder=\"Enter Agent Name\">\n\n                        </div>\n\n                        <div v-if=\"is_verified\" class=\"mb-3\">\n                            <label for=\"amount\" class=\"form-label\">Amount</label>\n                            <input type=\"text\" v-model=\"form.amount\" class=\"form-control\" id=\"amount\" name=\"amount\"\n                                placeholder=\"Enter Amount\" value=\"\">\n                        </div>\n\n                        <div class=\"d-flex gap-3 flex-wrap flex-column-reverse flex-md-row justify-content-md-end\">\n                            <a @click=\"goBack\" href=\"#\" class=\"btn btn-outline-primary px-5 me-2\">Cancel</a>\n                            <button data-bs-toggle=\"modal\" data-bs-target=\"#verticalycentered\" type=\"button\"\n                                class=\"btn btn-primary px-2 me-2\" style=\"background-color: #041b3f;\">Cashout to other\n                                banks</button>\n                            <button v-html=\"btnState\" :disabled=\"!canSubmit\" type=\"submit\" class=\"btn btn-primary px-5\"\n                                style=\"background-color: #041b3f;\"></button>\n                        </div>\n                    </form>\n\n                </div>\n                <!-- cash out to other banks Modal -->\n                <div class=\"modal fade\" id=\"verticalycentered\" tabindex=\"-1\">\n                    <div class=\"modal-dialog modal-dialog-centered\">\n                        <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <h5 class=\"modal-title\">Cash Out</h5>\n                                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\"\n                                    aria-label=\"Close\"></button>\n                            </div>\n                            <form class=\"modal-body\" @submit.prevent=\"cashOutToBanks\">\n                                <div class=\"mb-3\">\n                                    <label for=\"bank\" class=\"form-label\">Available Banks</label>\n                                    <select v-model=\"cashOutToBank.bank\"   name=\"bank\" class=\"form-select \" id=\"bank\">\n                                        <option value=\"Shabelle\">Shabelle</option>\n                                        <option value=\"Other\">Others</option>\n                                    </select>\n\n                                </div>\n                                <div class=\"mb-3\">\n                                    <label for=\"acc_no\" class=\"form-label\">Account Number</label>\n                                    <input v-model=\"cashOutToBank.acc_no\" type=\"text\" name=\"acc_no\" class=\"form-control\" placeholder=\"Enter Amount\"\n                                        id=\"acc_no\">\n                                </div>\n                                <div class=\"mb-3\">\n                                    <label for=\"amount\" class=\"form-label\">Amount</label>\n                                    <input v-model=\"cashOutToBank.amount\" type=\"text\" name=\"amount\" class=\"form-control\" placeholder=\"Enter Amount\"\n                                        id=\"amount\">\n                                </div>\n                                <div class=\"modal-footer\">\n                                <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>\n                                <button class=\"btn btn-primary\">Submit</button>\n                            </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n                <!-- End cash out to other banks Modal-->\n\n                <a style=\"visibility: hidden\" id=\"modalBtn\" href=\"#\" class=\"btn\" data-bs-toggle=\"modal\"\n                    data-bs-target=\"#modal-success\">\n                    Success modal\n                </a>\n                <!-- Vertically centered scrollable modal -->\n                <modal :message=\"modal.message\" :title=\"modal.title\" :type=\"modal.type\"></modal>\n            </div>\n\n        </div>\n\n    </div>\n</template>\n<script>\nimport { defineComponent } from 'vue'\nimport Form from '@utils/form/Form'\nimport Modal from \"./modal/Modal.vue\";\n\nexport default defineComponent({\n    name: 'AgentFloat',\n    props:{\n        page_info:{\n            type:Object\n        }\n    },\n    components: { Modal },\n    data() {\n        return {\n            isValidating: false,\n            form: new Form({\n                agent_id: '',\n                walletId: '',\n                wallet_number: '',\n                is_verified: false,\n                agent_name: '',\n                groupId: '',\n                amount: ''\n            }),\n            cashOutToBank: new Form({\n                bank: 'Shabelle',\n                acc_no: '',\n                amount: ''\n\n            }),\n            is_verified: false,\n            modal: {\n                message: 'Unexpected Error Occurred',\n                type: 'failed',\n                title: 'Error'\n            },\n            btnState: 'submit'\n        }\n    },\n\n    watch: {\n        'form.agent_id': function (value) {\n            this.form.wallet_number = value\n            if (this.typingTimeout) clearTimeout(this.typingTimeout);\n\n            if (value.length > 3 && this.form.is_verified === false) {\n                this.typingTimeout = setTimeout(() => {\n                    this.isValidating = true\n                    this.form.post(`${this.page_info?.domain}bank/verify-wallet-id`)\n                        .then((data) => {\n                            if (data.status === \"SUCCESS\") {\n                                this.isValidating = false;\n                                this.is_verified = true;\n                                this.form.walletId = data.walletId;\n                                this.form.groupId = data.groupId;\n                                this.form.is_verified = true;\n                                this.form.agent_name = data.walletName;\n                                this.form.agent_id = data.walletId;\n                            } else {\n                                this.is_verified = false;\n                                this.form.is_verified = false;\n                                this.isValidating = false;\n                                this.modal.type = 'failed',\n                                    this.modal.message = data.message,\n                                    this.modal.title = 'Not Found'\n                                let bn = document.getElementById('modalBtn');\n                                setTimeout(() => bn.click(), 200)\n                            }\n                        })\n                        .catch((error) => {\n                            console.log(error);\n                            this.isValidating = false;\n\n                            if (error.response && error.response.data && error.response.data.errors) {\n                                this.form.errors.record(error.response.data.errors);\n                            } else {\n                                this.$toast.error(error.response.data);\n                            }\n                        });\n                }, 1500);\n            }\n        },\n    },\n    computed: {\n        canSubmit() {\n            return (\n                this.form.amount !== '' && this.form.processing != true\n            );\n        },\n    },\n    methods: {\n        goBack() {\n            window.history.back();\n        },\n        agentFloat() {\n            this.btnState = `Submitting...`\n            this.form.post(`${this.page_info?.domain}bank/agent-float`)\n                .then((data) => {\n                    if (data.status === \"SUCCESS\") {\n                        this.modal.type = 'success',\n                        this.modal.message = \"Your payment of has been successfully submitted.\"\n                        this.modal.title = 'Payment succeeded'\n                        this.is_verified = false;\n                        this.form.is_verified = false;\n                        this.btnState = `Submit`\n                        let bn = document.getElementById('modalBtn');\n                        setTimeout(() => bn.click(), 200)\n                    } else {\n                        this.modal.type = 'failed',\n                            this.modal.message = data.message,\n                            this.modal.title = 'Payment not succeeded'\n                        this.is_verified = false;\n                        this.form.is_verified = false;\n                        this.isValidating = false;\n                        this.btnState = `Submit`\n                        let bn = document.getElementById('modalBtn');\n                        setTimeout(() => bn.click(), 200)\n                    }\n                })\n                .catch((error) => {\n                    this.isValidating = false;\n                    this.is_verified = true;\n                    this.form.is_verified = true;\n                    this.btnState = `Submit`\n                });\n        },\n        cashOutToBanks(){\n            alert('call')\n            console.log(this.cashOutToBank)\n        }\n    }\n})\n</script>\n<style scoped>\n.spinner {\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    border: 3px solid rgba(0, 0, 0, 0.1);\n    border-left-color: #041b3f;\n    border-radius: 50%;\n    animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n    100% {\n        transform: rotate(360deg);\n    }\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AirtimePayment.vue?vue&type=style&index=0&id=482f57ab&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AirtimePayment.vue?vue&type=style&index=0&id=482f57ab&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.spinner[data-v-482f57ab] {\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 3px solid rgba(0, 0, 0, 0.1);\r\n    border-left-color: #041b3f;\r\n    border-radius: 50%;\r\n    animation: spin-482f57ab 1s linear infinite;\n}\n@keyframes spin-482f57ab {\n100% {\r\n        transform: rotate(360deg);\n}\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/components/pages/payments/AirtimePayment.vue"],"names":[],"mappings":";AAsIA;IACA,qBAAA;IACA,WAAA;IACA,YAAA;IACA,oCAAA;IACA,0BAAA;IACA,kBAAA;IACA,2CAAA;AACA;AAEA;AACA;QACA,yBAAA;AACA;AACA","sourcesContent":["<template>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-8  me-auto\">\r\n\r\n            <div class=\"card w-100\" style=\"margin-top: 50px; border-radius: 10px;\">\r\n                <div class=\"card-header text-white\"\r\n                    style=\"background-color: #041b3f; border-top-left-radius: 10px; border-top-right-radius: 10px;\">\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form @submit.prevent=\"airtime_payment\" class=\"px-lg-5\">\r\n\r\n                        <div class=\"mb-3\">\r\n                            <label for=\"serviceProviders\" class=\"form-label\">Available Options</label>\r\n                            <select v-model=\"form.service_provider\" name=\"service_provider\" class=\"form-select\" id=\"serviceProviders\">\r\n                                <option value=\"\">Select Service Provider</option>\r\n                                <option value=\"safaricom\">Safaricom</option>\r\n                                <option value=\"ETHIOTELECOM\">ETHIO TELECOM</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <div class=\"mb-3\">\r\n                            <label for=\"phoneNumber\" class=\"form-label\">Phone Number</label>\r\n                            <input v-model=\"form.phone_number\" type=\"text\" name=\"phone_number\" class=\"form-control\" placeholder=\"Enter Phone Number\"\r\n                                id=\"phoneNumber\">\r\n\r\n                        </div>\r\n\r\n                        <div class=\"mb-3\">\r\n                            <label for=\"amount\" class=\"form-label\">Amount</label>\r\n                            <input  v-model=\"form.amount\" type=\"text\" name=\"amount\" class=\"form-control\" placeholder=\"Enter Amount\"\r\n                                id=\"amount\">\r\n\r\n                        </div>\r\n\r\n                        <div class=\"d-flex justify-content-end\">\r\n                            <a  @click=\"goBack\" href=\"#\" type=\"button\" class=\"btn btn-outline-primary px-5 me-2\">Cancel</a>\r\n                            <button v-html=\"btnState\" :disabled=\"!canSubmit\" type=\"submit\" class=\"btn btn-primary px-5\"\r\n                                style=\"background-color: #041b3f;\"></button>\r\n                        </div>\r\n                    </form>\r\n\r\n                </div>\r\n\r\n                <a style=\"visibility: hidden\" id=\"modalBtn\" href=\"#\" class=\"btn\" data-bs-toggle=\"modal\"\r\n                    data-bs-target=\"#modal-success\">\r\n                    Success modal\r\n                </a>\r\n                <!-- Vertically centered scrollable modal -->\r\n                <modal :message=\"modal.message\" :title=\"modal.title\" :type=\"modal.type\"></modal>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n</template>\r\n<script>\r\nimport { defineComponent } from 'vue'\r\nimport Form from '@utils/form/Form'\r\nimport Modal from \"./modal/Modal.vue\";\r\n\r\nexport default defineComponent({\r\n    name: 'AirtimePayment',\r\n    components: { Modal },\r\n    props:{\r\n        routes:{\r\n            type: Object,\r\n            required: true,\r\n        }\r\n    },\r\n    data() {\r\n        return {\r\n            isValidating: false,\r\n            form: new Form({\r\n                service_provider: '',\r\n                phone_number: '',\r\n                amount: ''\r\n            }),\r\n            modal: {\r\n                message: 'Unexpected Error Occurred',\r\n                type: 'failed',\r\n                title: 'Error'\r\n            },\r\n            btnState: 'submit'\r\n        }\r\n    },\r\n    computed: {\r\n        canSubmit() {\r\n            return (\r\n                this.form.amount !== '' && this.form.phone_number !== '' && this.form.processing != true &&  this.form.service_provider !== ''\r\n            );\r\n        },\r\n    },\r\n    methods: {\r\n        goBack() {\r\n            window.history.back();\r\n        },\r\n        airtime_payment() {\r\n            this.btnState = `Submitting...`\r\n            this.form.post(this.routes.airtime)\r\n                .then((data) => {\r\n                    if (data.status === \"SUCCESS\") {\r\n                        this.modal.type = 'success',\r\n                            this.modal.message = \"Your payment of has been successfully submitted.\"\r\n                        this.modal.title = 'Payment succeeded'\r\n                        this.is_verified = false;\r\n                        this.form.is_verified = false;\r\n                        this.btnState = `Submit`\r\n                        let bn = document.getElementById('modalBtn');\r\n                        setTimeout(() => bn.click(), 200)\r\n                    } else {\r\n                        this.modal.type = 'failed',\r\n                            this.modal.message = data.message,\r\n                            this.modal.title = 'Payment not succeeded'\r\n                        this.is_verified = false;\r\n                        this.form.is_verified = false;\r\n                        this.isValidating = false;\r\n                        this.btnState = `Submit`\r\n                        let bn = document.getElementById('modalBtn');\r\n                        setTimeout(() => bn.click(), 200)\r\n                    }\r\n                })\r\n                .catch((error) => {\r\n                    this.isValidating = false;\r\n                    this.is_verified = true;\r\n                    this.form.is_verified = true;\r\n                    this.btnState = `Submit`\r\n                });\r\n        },\r\n    }\r\n})\r\n</script>\r\n<style scoped>\r\n.spinner {\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 3px solid rgba(0, 0, 0, 0.1);\r\n    border-left-color: #041b3f;\r\n    border-radius: 50%;\r\n    animation: spin 1s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/CashInCashOut.vue?vue&type=style&index=0&id=39f63b37&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/CashInCashOut.vue?vue&type=style&index=0&id=39f63b37&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.spinner[data-v-39f63b37] {\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 3px solid rgba(0, 0, 0, 0.1);\r\n    border-left-color: #041b3f;\r\n    border-radius: 50%;\r\n    animation: spin-39f63b37 1s linear infinite;\n}\n@keyframes spin-39f63b37 {\n100% {\r\n        transform: rotate(360deg);\n}\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/components/pages/payments/CashInCashOut.vue"],"names":[],"mappings":";AA2UA;IACA,qBAAA;IACA,WAAA;IACA,YAAA;IACA,oCAAA;IACA,0BAAA;IACA,kBAAA;IACA,2CAAA;AACA;AAEA;AACA;QACA,yBAAA;AACA;AACA","sourcesContent":["<template>\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-lg-8  me-auto\">\r\n            <ul class=\"nav nav-pills mb-4\" id=\"pills-tab\" role=\"tablist\">\r\n                <li class=\"nav-item\" role=\"presentation\">\r\n                    <button style=\"margin-right:1rem\" class=\"nav-link p-2 active\" id=\"pills-home-tab\"\r\n                        data-bs-toggle=\"pill\" data-bs-target=\"#pills-home\" type=\"button\" role=\"tab\"\r\n                        aria-controls=\"pills-home\" aria-selected=\"true\">CASH IN\r\n                    </button>\r\n                </li>\r\n                <li class=\"nav-item\" role=\"presentation\">\r\n                    <button style=\"\" class=\"nav-link\" id=\"pills-profile-tab\" data-bs-toggle=\"pill\"\r\n                        data-bs-target=\"#pills-profile\" type=\"button\" role=\"tab\" aria-controls=\"pills-profile\"\r\n                        aria-selected=\"false\">CASH OUT\r\n                    </button>\r\n                </li>\r\n            </ul>\r\n            <div class=\"tab-content\" id=\"myTabContent\">\r\n                <div class=\"tab-pane fade show active\" id=\"pills-home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r\n                    <div class=\"card w-100\" style=\"border-radius: 10px;\">\r\n                        <div class=\"card-header text-white\"\r\n                            style=\"background-color: #041b3f; border-top-left-radius: 10px; border-top-right-radius: 10px;\">\r\n                            <h5 class=\"mb-0 text-white\">CASH IN</h5>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <form @submit.prevent=\"cashIn\" class=\"px-4\" id=\"walletForm\">\r\n\r\n                                <div class=\"mb-3\">\r\n                                    <label for=\"wallet_number\" class=\"form-label\">Phone No or Ac no</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"account_no\" name=\"walletId\"\r\n                                        placeholder=\"Enter Phone No or Ac no\" v-model=\"cashInForm.wallet_number\">\r\n                                    <div v-if=\"cashInIsValidating\" class=\"spinner mt-2\"></div>\r\n                                </div>\r\n\r\n                                <!-- Customer's Name -->\r\n                                <div v-if=\"cash_in_is_verified\" class=\"mb-3\">\r\n                                    <label for=\"customer_name\" class=\"form-label\">Recipient Name</label>\r\n                                    <input disabled type=\"text\" class=\"form-control\" id=\"customer_name\"\r\n                                        placeholder=\"Enter customer name\" v-model=\"cashInForm.recipientName\">\r\n                                </div>\r\n                                <!-- Amount -->\r\n                                <div v-if=\"cash_in_is_verified\" class=\"mb-3\">\r\n                                    <label for=\"cash-in-amount\" class=\"form-label\">Amount</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"cash-in-amount\"\r\n                                        placeholder=\"Enter Amount\" v-model=\"cashInForm.amount\">\r\n                                </div>\r\n\r\n                                <div class=\"d-flex justify-content-end\">\r\n                                    <a  @click=\"goBack\" href=\"#\" class=\"btn btn-outline-primary px-5 me-2\">Cancel</a>\r\n                                    <button :disabled=\"!canSubmitCashIn\" type=\"submit\" v-html=\"cashInBtnState\"\r\n                                        class=\"btn btn-primary px-5\" style=\"background-color: #041b3f;\">\r\n                                    </button>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab-pane fade\" id=\"pills-profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\r\n                    <div class=\"tab-pane fade show active\" id=\"pills-home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r\n                        <div class=\"card w-100\" style=\"border-radius: 10px;\">\r\n                            <div class=\"card-header text-white\"\r\n                                style=\"background-color: #041b3f; border-top-left-radius: 10px; border-top-right-radius: 10px;\">\r\n                                <h5 class=\"mb-0 text-white\">CASH OUT</h5>\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n                                <form @submit.prevent=\"cashOut\" class=\"px-4\">\r\n\r\n                                    <div class=\"mb-3\">\r\n                                        <label for=\"wallet_number\" class=\"form-label\">Phone No or Ac no</label>\r\n                                        <input type=\"text\" class=\"form-control\" id=\"account_no\" name=\"walletId\"\r\n                                            placeholder=\"Enter Phone No or Ac no\" v-model=\"cashOutForm.wallet_number\">\r\n                                        <div v-if=\"cashOutIsValidating\" class=\"spinner mt-2\"></div>\r\n                                    </div>\r\n\r\n                                    <!-- Customer's Name -->\r\n                                    <div v-if=\"cash_out_is_verified\" class=\"mb-3\">\r\n                                        <label for=\"customer_name\" class=\"form-label\">Recipient Name</label>\r\n                                        <input disabled type=\"text\" class=\"form-control\" id=\"customer_name\"\r\n                                            placeholder=\"Enter customer name\" v-model=\"cashOutForm.recipientName\">\r\n                                    </div>\r\n                                    <!-- Amount -->\r\n                                    <div v-if=\"cash_out_is_verified\" class=\"mb-3\">\r\n                                        <label for=\"cash-in-amount\" class=\"form-label\">Amount</label>\r\n                                        <input type=\"text\" class=\"form-control\" id=\"cash-in-amount\"\r\n                                            placeholder=\"Enter Amount\" v-model=\"cashOutForm.amount\">\r\n                                    </div>\r\n\r\n                                    <div class=\"d-flex justify-content-end\">\r\n                                        <a @click=\"goBack\" href=\"#\" class=\"btn btn-outline-primary px-5 me-2\">Cancel</a>\r\n                                        <button :disabled=\"!canSubmitCashOut\" type=\"submit\" v-html=\"cashOutBtnState\"\r\n                                            class=\"btn btn-primary px-5\" style=\"background-color: #041b3f;\">\r\n                                        </button>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <!--modal-->\r\n            \r\n                <a style=\"visibility: hidden\" id=\"modalBtn\" href=\"#\" class=\"btn\" data-bs-toggle=\"modal\"\r\n                    data-bs-target=\"#modal-success\">\r\n                    Success modal\r\n                </a>\r\n                <!-- Vertically centered scrollable modal -->\r\n                <modal :message=\"modal.message\" :title=\"modal.title\" :type=\"modal.type\"></modal>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</template>\r\n<script>\r\nimport Form from '@utils/form/Form'\r\nimport Modal from \"./modal/Modal.vue\";\r\n\r\nexport default {\r\n    props: {\r\n        routes: {\r\n            type: Object,\r\n            required: true,\r\n            default: () => { }\r\n        }\r\n    },\r\n    components: { Modal },\r\n    data() {\r\n        return {\r\n            cashInIsValidating: false,\r\n            cash_in_is_verified: false,\r\n            cashInBtnState: 'Submit',\r\n            cashInForm: new Form({\r\n                wallet_number: '',\r\n                walletId: '',\r\n                is_verified: false,\r\n                recipientName: '',\r\n                groupId: '',\r\n                amount: '',\r\n            }),\r\n            cashOutIsValidating: false,\r\n            cash_out_is_verified: false,\r\n            cashOutBtnState: 'Submit',\r\n            cashOutForm: new Form({\r\n                wallet_number: '',\r\n                walletId: '',\r\n                is_verified: false,\r\n                recipientName: '',\r\n                groupId: '',\r\n                amount: '',\r\n            }),\r\n            modal: {\r\n                message: 'Make payment',\r\n                type: 'failed',\r\n                title: 'Error'\r\n            }\r\n\r\n        };\r\n    },\r\n    mounted(){\r\n        if(location.hash == '#cash-out'){\r\n            document.querySelector(\"#pills-profile-tab\").click()\r\n        }\r\n    },\r\n    computed: {\r\n        canSubmitCashIn() {\r\n            return (\r\n                this.cashInForm.amount !== '' && this.cashInForm.processing != true\r\n            );\r\n        },\r\n        canSubmitCashOut() {\r\n            return (\r\n                this.cashOutForm.amount !== '' && this.cashOutForm.processing != true\r\n            );\r\n        },\r\n    },\r\n    watch: {\r\n        'cashInForm.wallet_number': function (value) {\r\n            if (this.typingTimeout) clearTimeout(this.typingTimeout);\r\n\r\n            if (value.length > 3 && this.cashInForm.is_verified === false) {\r\n                this.typingTimeout = setTimeout(() => {\r\n                    this.cashInIsValidating = true\r\n                    this.cashInForm.post('/bank/verify-wallet-id')\r\n                        .then((data) => {\r\n                            if (data.status === \"SUCCESS\") {\r\n                                this.cashInIsValidating = false;\r\n                                this.cash_in_is_verified = true;\r\n                                this.cashInForm.walletId = data.walletId;\r\n                                this.cashInForm.groupId = data.groupId;\r\n                                this.cashInForm.is_verified = true;\r\n                                this.cashInForm.recipientName = data.walletName;\r\n                                this.cashInForm.wallet_number = data.walletId;\r\n                            } else {\r\n                                this.cash_in_is_verified = false;\r\n                                this.cashInForm.is_verified = false;\r\n                                this.cashInIsValidating = false;\r\n                                this.modal.type = 'failed',\r\n                                    this.modal.message = data.message,\r\n                                    this.modal.title = 'Not Found'\r\n                                let bn = document.getElementById('modalBtn');\r\n                                setTimeout(() => bn.click(), 200)\r\n                            }\r\n                        })\r\n                        .catch((error) => {\r\n                            console.log(error);\r\n                            this.cashInIsValidating = false;\r\n\r\n                            if (error.response && error.response.data && error.response.data.errors) {\r\n                                this.cashInForm.errors.record(error.response.data.errors);\r\n                            } else {\r\n                                this.$toast.error(error.response.data);\r\n                            }\r\n                        });\r\n                }, 1500);\r\n            }\r\n        },\r\n        'cashOutForm.wallet_number': function (value) {\r\n            if (this.typingTimeout) clearTimeout(this.typingTimeout);\r\n\r\n            if (value.length > 3 && this.cashOutForm.is_verified === false) {\r\n                this.typingTimeout = setTimeout(() => {\r\n                    this.cashOutIsValidating = true\r\n                    this.cashOutForm.post('/bank/verify-wallet-id')\r\n                        .then((data) => {\r\n                            if (data.status === \"SUCCESS\") {\r\n                                this.cashOutIsValidating = false;\r\n                                this.cash_out_is_verified = true;\r\n                                this.cashOutForm.walletId = data.walletId;\r\n                                this.cashOutForm.groupId = data.groupId;\r\n                                this.cashOutForm.is_verified = true;\r\n                                this.cashOutForm.recipientName = data.walletName;\r\n                                this.cashOutForm.wallet_number = data.walletId;\r\n                            } else {\r\n                                this.cash_out_is_verified = false;\r\n                                this.cashOutForm.is_verified = false;\r\n                                this.cashOutIsValidating = false;\r\n                                this.modal.type = 'failed',\r\n                                    this.modal.message = data.message,\r\n                                    this.modal.title = 'Not Found'\r\n                                let bn = document.getElementById('modalBtn');\r\n                                setTimeout(() => bn.click(), 200)\r\n                            }\r\n                        })\r\n                        .catch((error) => {\r\n                            this.cashOutIsValidating = false;\r\n                            if (error.response && error.response.data && error.response.data.errors) {\r\n                                this.cashInForm.errors.record(error.response.data.errors);\r\n                            } else {\r\n                                this.$toast.error(error.response.data);\r\n                            }\r\n                        });\r\n                }, 1500);\r\n            }\r\n        }\r\n    },\r\n    methods: {\r\n        goBack() {\r\n            window.history.back();\r\n        },\r\n        cashIn() {\r\n            this.cashInBtnState = `Submitting...`\r\n            this.cashInForm.post(this.routes.cash_in_route)\r\n                .then((data) => {\r\n                    if (data.status === \"SUCCESS\") {\r\n                        this.modal.type = 'success',\r\n                            this.modal.message = \"Your cash-in payment of has been successfully submitted.\"\r\n                        this.modal.title = 'Payment succeeded'\r\n                        this.cash_in_is_verified = false;\r\n                        this.cashInForm.is_verified = false;\r\n                        this.cashInBtnState = `Submit`\r\n                        let bn = document.getElementById('modalBtn');\r\n                        setTimeout(() => bn.click(), 200)\r\n                    } else {\r\n                        this.modal.type = 'failed',\r\n                            this.modal.message = data.message,\r\n                            this.modal.title = 'Payment not succeeded'\r\n                        this.cash_in_is_verified = false;\r\n                        this.cashInForm.is_verified = false;\r\n                        this.cashInIsValidating = false;\r\n                        this.cashInBtnState = `Submit`\r\n                        let bn = document.getElementById('modalBtn');\r\n                        setTimeout(() => bn.click(), 200)\r\n                    }\r\n                })\r\n                .catch((error) => {\r\n                    this.response = true\r\n                    this.responseMessage = \"An error occurred when connecting\";\r\n                    this.cashInIsValidating = false;\r\n                    this.cash_in_is_verified = true;\r\n                    this.cashInForm.is_verified = true;\r\n                    this.cashInBtnState = `Submit`\r\n                });\r\n        },\r\n        cashOut() {\r\n            this.cashOutBtnState = `Submitting...`\r\n            this.cashOutForm.post(this.routes.cash_out_route)\r\n                .then((data) => {\r\n                    if (data.status === \"SUCCESS\") {\r\n                        this.modal.type = 'success',\r\n                            this.modal.message = \"Your cash-out payment of has been successfully submitted.\"\r\n                        this.modal.title = 'Payment succeeded'\r\n                        this.cash_out_is_verified = false;\r\n                        this.cashOutForm.is_verified = false;\r\n                        this.cashOutBtnState = `Submit`\r\n                        let bn = document.getElementById('modalBtn');\r\n                        setTimeout(() => bn.click(), 200)\r\n                    } else {\r\n                        this.modal.type = 'failed',\r\n                            this.modal.message = data.message,\r\n                            this.modal.title = 'Payment not succeeded'\r\n                        this.cash_out_is_verified = false;\r\n                        this.cashOutForm.is_verified = false;\r\n                        this.cashInIsValidating = false;\r\n                        this.cashOutBtnState = `Submit`\r\n                        let bn = document.getElementById('modalBtn');\r\n                        setTimeout(() => bn.click(), 200)\r\n                    }\r\n                })\r\n                .catch((error) => {\r\n                    this.response = true\r\n                    this.responseMessage = \"An error occurred when connecting\";\r\n                    this.cashInIsValidating = false;\r\n                    this.cash_out_is_verified = true;\r\n                    this.cashOutForm.is_verified = true;\r\n                    this.cashOutBtnState = `Submit`\r\n                });\r\n        },\r\n    },\r\n};\r\n</script>\r\n<style scoped>\r\n.spinner {\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 3px solid rgba(0, 0, 0, 0.1);\r\n    border-left-color: #041b3f;\r\n    border-radius: 50%;\r\n    animation: spin 1s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/BulkSms.vue?vue&type=style&index=0&id=9f9d46ea&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/BulkSms.vue?vue&type=style&index=0&id=9f9d46ea&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.otp-input[data-v-9f9d46ea] {\r\n    width: 60px;\r\n    height: 60px;\r\n    font-size: 2rem;\r\n    font-weight: bold;\n}\n.form-label[data-v-9f9d46ea] {\r\n    font-weight: bold;\n}\n.spinner[data-v-9f9d46ea] {\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 3px solid rgba(0, 0, 0, 0.1);\r\n    border-left-color: #041b3f;\r\n    border-radius: 50%;\r\n    animation: spin-9f9d46ea 1s linear infinite;\n}\n@keyframes spin-9f9d46ea {\n100% {\r\n        transform: rotate(360deg);\n}\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/components/pages/sms/BulkSms.vue"],"names":[],"mappings":";AA8OA;IACA,WAAA;IACA,YAAA;IACA,eAAA;IACA,iBAAA;AACA;AAEA;IACA,iBAAA;AACA;AAEA;IACA,qBAAA;IACA,WAAA;IACA,YAAA;IACA,oCAAA;IACA,0BAAA;IACA,kBAAA;IACA,2CAAA;AACA;AAEA;AACA;QACA,yBAAA;AACA;AACA","sourcesContent":["<template>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"rounded-4\">\r\n                <div class=\"card-body row\">\r\n                    <div class=\"col-md-8 mb-4\">\r\n                        <div class=\"d-flex justify-content-center\">\r\n                            <div class=\"form-wrapper bg-white\">\r\n                                <div style=\"background: #041E43\" class=\"p-3 px-5 text-light\">\r\n                                    <div class=\"title\">\r\n                                        <h3 class=\"text-white fw-bold\"></h3>\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                                <form @submit.prevent=\"sendMessage\" class=\"form-group row px-5 p-4 g-3\" method=\"post\"\r\n                                    enctype=\"multipart/form-data\">\r\n                                   \r\n                                    <div v-if=\"fileUploaded\" class=\"accordion accordion-flush\" id=\"accordionFlushExample\">\r\n                                        <div class=\"accordion-item\">\r\n                                            <h2 class=\"accordion-header\">\r\n                                                <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#flush-collapseTwo\" aria-expanded=\"false\" aria-controls=\"flush-collapseTwo\">\r\n                                                    Contacts List\r\n                                                </button>\r\n                                            </h2>\r\n                                            <div id=\"flush-collapseTwo\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionFlushExample\">\r\n                                                <div class=\"accordion-body\">\r\n                                                    <div class=\"col-12\">\r\n                                                      \r\n                                                        <div class=\"table-responsive\">\r\n                                                            <table class=\"table table-striped\">\r\n                                                                <thead class=\"thead-dark\">\r\n                                                                <tr style=\"background: #041E43\" class=\"text-white\">\r\n                                                                    <th> <span>Name</span> </th>\r\n                                                                    <th>Number</th>\r\n                                                                </tr>\r\n                                                                </thead>\r\n                                                                <tbody>\r\n                                                                    <tr :key=\"index\" v-for=\"(contact,index) in form.contacts.slice(0, 10)\">\r\n                                                                        <td>{{ contact.name }}</td>\r\n                                                                        <td>{{ contact.contact }}</td>\r\n                                                                \r\n                                                                </tr> \r\n                                                                \r\n                                                               \r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                        </div>\r\n                                                    </div></div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n\r\n                                    <div class=\"col-12\">\r\n                                        <label for=\"contacts\">Upload Contacts (CSV)</label>\r\n                                        <input type=\"file\" @change=\"handleFileUpload\" class=\"form-control\" id=\"contacts\"\r\n                                            accept=\".csv\">\r\n                                    </div>\r\n\r\n                                    <div class=\"col-12\">\r\n                                        <label for=\"message\">Message</label>\r\n                                        <textarea v-model=\"form.message\" id=\"message\" placeholder=\"Enter your message\"\r\n                                            class=\"form-control\" cols=\"30\" rows=\"3\"></textarea>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-lg-12 d-flex justify-content-between mt-3\">\r\n                                        <button @click=\"goBack\" type=\"button\"\r\n                                            class=\"btn btn-outline-primary\">Cancel</button>\r\n                                        <button @click=\"sendMessage\" :disabled=\"!canSubmit\" type=\"submit\" class=\"btn btn-primary\">{{ btnState }}</button>\r\n                                    </div>\r\n                                </form>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <a style=\"visibility: hidden\" id=\"modalBtn\" href=\"#\" class=\"btn\" data-bs-toggle=\"modal\"\r\n                    data-bs-target=\"#modal-success\">\r\n                    Success modal\r\n                </a>\r\n                <!-- Vertically centered scrollable modal -->\r\n                <modal :message=\"modal.message\" :title=\"modal.title\" :type=\"modal.type\"></modal>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>\r\n<script>\r\nimport { defineComponent } from 'vue'\r\nimport Form from '@utils/form/Form'\r\nimport Modal from '../payments/modal/Modal.vue';\r\nexport default defineComponent({\r\n    components: { Modal},\r\n    data() {\r\n        return {\r\n            isValidating: false,\r\n            form: new Form({\r\n                contacts: '',\r\n                wallet_number: '',\r\n                message: '',\r\n                phoneNumber: '',\r\n                name: '',\r\n                date_time: '',\r\n                is_verified: false,\r\n                shouldSchedule: false,\r\n            }, {\r\n                resetOnSuccess: false,\r\n            }),\r\n            fileUploaded: false,\r\n            modal: {\r\n                message: 'Unexpected Error Occurred',\r\n                type: 'failed',\r\n                title: 'Error'\r\n            },\r\n            btnState: 'Send Message'\r\n        }\r\n    },\r\n\r\n    watch: {\r\n        'form.phoneNumber': function (value) {\r\n            this.form.wallet_number = value\r\n            if (this.typingTimeout) clearTimeout(this.typingTimeout);\r\n            if (value.length < 4) this.form.is_verified = false;\r\n            if (value.length > 3 && this.form.is_verified === false) {\r\n                this.typingTimeout = setTimeout(() => {\r\n                    this.isValidating = true\r\n                    this.form.post('/bank/verify-wallet-id')\r\n                        .then((data) => {\r\n                            if (data.status === \"SUCCESS\") {\r\n                                this.isValidating = false;\r\n                                this.is_verified = true;\r\n                                this.form.name = data.walletName;\r\n                                this.form.is_verified = true;\r\n                            } else {\r\n                                this.is_verified = false;\r\n                                this.form.is_verified = false;\r\n                                this.isValidating = false;\r\n                                this.modal.type = 'failed',\r\n                                    this.modal.message = data.message,\r\n                                    this.modal.title = 'Not Found'\r\n                                let bn = document.getElementById('modalBtn');\r\n                                setTimeout(() => bn.click(), 200)\r\n                            }\r\n                        })\r\n                        .catch((error) => {\r\n                            this.isValidating = false;\r\n                            if (error.response && error.response.data && error.response.data.errors) {\r\n                                this.form.errors.record(error.response.data.errors);\r\n                            } else {\r\n                                this.$toast.error(error.response.data);\r\n                            }\r\n                        });\r\n                }, 1500);\r\n            }\r\n        },\r\n        'form.date_time': function (value) {\r\n            if (value !== '') { this.form.shouldSchedule = true } else { this.form.shouldSchedule = false }\r\n        }\r\n    },\r\n    computed: {\r\n        canSubmit() {\r\n            return (\r\n                this.form.message !== '' && this.fileUploaded == true && this.form.contacts.length !== 0 && this.form.processing != true\r\n            );\r\n        },\r\n    },\r\n    methods: {\r\n        goBack() {\r\n            window.history.back();\r\n        },\r\n        sendMessage() {\r\n            this.btnState = `Sending...`\r\n            this.form.post('/sms/bulk')\r\n                .then((data) => {\r\n                    if (data.status === \"SUCCESS\") {\r\n                        this.modal.type = 'success',\r\n                            this.modal.message = \"Your message is sent.\"\r\n                        this.modal.title = 'Message Sent'\r\n                        this.is_verified = false;\r\n                        this.form.is_verified = false;\r\n                        this.btnState = `Message Sent`\r\n                        let bn = document.getElementById('modalBtn');\r\n                        setTimeout(() => bn.click(), 200)\r\n                    } else {\r\n                        this.modal.type = 'failed',\r\n                            this.modal.message = data.message,\r\n                            this.modal.title = 'Failed'\r\n                        this.form.is_verified = false;\r\n                        this.btnState = `Send Message`\r\n                        let bn = document.getElementById('modalBtn');\r\n                        setTimeout(() => bn.click(), 200)\r\n                    }\r\n                })\r\n                .catch((error) => {\r\n                    this.isValidating = false;\r\n                    this.is_verified = true;\r\n                    this.form.is_verified = true;\r\n                    this.btnState = `Send Message`\r\n                });\r\n        },\r\n        handleFileUpload(event) {\r\n            const file = event.target.files[0];\r\n            if (file && file.type === 'text/csv') {\r\n                this.parseCSV(file);\r\n            } else {\r\n                alert('Please upload a valid CSV file.');\r\n            }\r\n        },\r\n        parseCSV(file) {\r\n            const reader = new FileReader();\r\n            reader.onload = (e) => {\r\n                const csvData = e.target.result;\r\n                const parsedData = this.csvToArray(csvData)\r\n                this.form.contacts = parsedData;\r\n                this.fileUploaded = true\r\n\r\n            };\r\n            reader.readAsText(file);\r\n        },\r\n        csvToArray(csvString) {\r\n            const rows = csvString.split('\\n');\r\n            const contacts = [];\r\n\r\n            rows.forEach((row) => {\r\n                const [name, contact] = row.split(',');\r\n                if (name && contact) {\r\n                    contacts.push({ name: name.trim(), contact: contact.trim() });\r\n                }\r\n            });\r\n\r\n            return contacts;\r\n        },\r\n    }\r\n})\r\n</script>\r\n<style scoped>\r\n.otp-input {\r\n    width: 60px;\r\n    height: 60px;\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-label {\r\n    font-weight: bold;\r\n}\r\n\r\n.spinner {\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 3px solid rgba(0, 0, 0, 0.1);\r\n    border-left-color: #041b3f;\r\n    border-radius: 50%;\r\n    animation: spin 1s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/SingleSms.vue?vue&type=style&index=0&id=4664cd95&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/SingleSms.vue?vue&type=style&index=0&id=4664cd95&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.otp-input[data-v-4664cd95] {\r\n    width: 60px;\r\n    height: 60px;\r\n    font-size: 2rem;\r\n    font-weight: bold;\n}\n.form-label[data-v-4664cd95] {\r\n    font-weight: bold;\n}\n.spinner[data-v-4664cd95] {\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 3px solid rgba(0, 0, 0, 0.1);\r\n    border-left-color: #041b3f;\r\n    border-radius: 50%;\r\n    animation: spin-4664cd95 1s linear infinite;\n}\n@keyframes spin-4664cd95 {\n100% {\r\n        transform: rotate(360deg);\n}\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/components/pages/sms/SingleSms.vue"],"names":[],"mappings":";AAuMA;IACA,WAAA;IACA,YAAA;IACA,eAAA;IACA,iBAAA;AACA;AAEA;IACA,iBAAA;AACA;AAEA;IACA,qBAAA;IACA,WAAA;IACA,YAAA;IACA,oCAAA;IACA,0BAAA;IACA,kBAAA;IACA,2CAAA;AACA;AAEA;AACA;QACA,yBAAA;AACA;AACA","sourcesContent":["<template>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-8  me-auto\">\r\n            <div class=\"card w-100\" style=\"margin-top: 30px; border-radius: 10px;\">\r\n                <div class=\"card-header text-white\"\r\n                    style=\"background-color: #041b3f; border-top-left-radius: 10px; border-top-right-radius: 10px;\">\r\n                    <!-- <h5 class=\"mb-0 text-white\">Single Message</h5> -->\r\n                </div>\r\n\r\n                <div class=\"card-body\">\r\n\r\n                    <form @submit.prevent=\"sendMessage\" class=\"px-lg-3\">\r\n\r\n\r\n                        <div class=\"mb-3\">\r\n                            <label for=\"agentID\" class=\"form-label\">Message</label>\r\n                            <textarea v-model=\"form.message\" rows=\"4\" class=\"form-control\"\r\n                                placeholder=\"Write a message\"></textarea>\r\n\r\n                        </div>\r\n                        <div v-if=\"form.is_verified\" class=\"mb-4\">\r\n                            <label for=\"recipient_phone\" class=\"form-label\">Name</label>\r\n                            <input disabled v-model=\"form.name\" type=\"text\" class=\"form-control\" id=\"agent_name\"\r\n                                name=\"agent_name\" >\r\n                            \r\n                        </div>\r\n\r\n                        <div class=\"mb-4\">\r\n                            <label for=\"recipient_phone\" class=\"form-label\">Phone Number</label>\r\n                            <input v-model=\"form.phoneNumber\" type=\"text\" class=\"form-control\" id=\"agent_name\"\r\n                                name=\"agent_name\" placeholder=\"Enter Phone Number\">\r\n                                <div v-if=\"isValidating\" class=\"spinner mt-2\"></div>\r\n                        </div>\r\n\r\n                        <div class=\"d-flex gap-3 flex-wrap flex-column-reverse flex-md-row justify-content-md-end\">\r\n                            <button @click=\"goBack\" class=\"btn btn-outline-primary px-5 me-2\">Cancel</button>\r\n                            <button @click=\"shouldSchedule\" data-bs-toggle=\"modal\" data-bs-target=\"#verticalycentered\"\r\n                                type=\"button\" class=\"btn btn-primary px-3 me-2\" :disabled=\"!canSubmit\"\r\n                                style=\"background-color: #041b3f;\">Schedule</button>\r\n                            <button :disabled=\"!canSubmit\" type=\"submit\" class=\"btn btn-primary px-5\"\r\n                                style=\"background-color: #041b3f;\">{{ btnState }}</button>\r\n                        </div>\r\n                    </form>\r\n\r\n                </div>\r\n            </div>\r\n            <a style=\"visibility: hidden\" id=\"modalBtn\" href=\"#\" class=\"btn\" data-bs-toggle=\"modal\"\r\n                    data-bs-target=\"#modal-success\">\r\n                    Success modal\r\n                </a>\r\n                <!-- Vertically centered scrollable modal -->\r\n                <modal :message=\"modal.message\" :title=\"modal.title\" :type=\"modal.type\"></modal>\r\n            <!-- Vertically centered Modal -->\r\n            <div class=\"modal fade\" id=\"verticalycentered\" tabindex=\"-1\">\r\n                <div class=\"modal-dialog modal-dialog-centered\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                            <h5 class=\"modal-title\">Schedule a Message</h5>\r\n                            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\r\n                        </div>\r\n                        <form @submit.prevent=\"sendMessage\" class=\"modal-body\">\r\n                            <div class=\"mb-3\">\r\n                                <label for=\"date_time\" class=\"form-label mb-2\">Date & Time</label>\r\n                                <input v-model=\"form.date_time\" type=\"datetime-local\" class=\"form-control\"\r\n                                    name=\"date_time\" id=\"date_time\">\r\n                            </div>\r\n                            <div class=\"modal-footer\">\r\n                            <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>\r\n                            <button :disabled=\"!canSubmit && !form.shouldSchedule\" class=\"btn btn-primary\">{{ btnState }}</button>\r\n                        </div>\r\n                        </form>\r\n                       \r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- End Vertically centered Modal-->\r\n        </div>\r\n    </div>\r\n</template>\r\n<script>\r\nimport { defineComponent } from 'vue'\r\nimport Form from '@utils/form/Form'\r\nimport Modal from '../payments/modal/Modal.vue';\r\nexport default defineComponent({\r\n    components: { Modal },\r\n    data() {\r\n        return {\r\n            isValidating: false,\r\n            form: new Form({\r\n                wallet_number: '',\r\n                message: '',\r\n                phoneNumber: '',\r\n                name:'',\r\n                date_time: '',\r\n                is_verified: false,\r\n                shouldSchedule: false,\r\n            },{\r\n                resetOnSuccess: false,\r\n            }),\r\n            shouldSchedule() {\r\n                this.form.shouldSchedule = true\r\n            },\r\n            modal: {\r\n                message: 'Unexpected Error Occurred',\r\n                type: 'failed',\r\n                title: 'Error'\r\n            },\r\n            btnState: 'Send'\r\n        }\r\n    },\r\n\r\n    watch: {\r\n        'form.phoneNumber': function (value) {\r\n            this.form.wallet_number = value\r\n            if (this.typingTimeout) clearTimeout(this.typingTimeout); \r\n            if(value.length < 4) this.form.is_verified = false;\r\n            if (value.length > 3 && this.form.is_verified === false) {\r\n                this.typingTimeout = setTimeout(() => {\r\n                    this.isValidating = true\r\n                    this.form.post('/bank/verify-wallet-id')\r\n                        .then((data) => {\r\n                            if (data.status === \"SUCCESS\") {\r\n                                this.isValidating = false;\r\n                                this.is_verified = true;\r\n                                this.form.name = data.walletName;\r\n                                this.form.is_verified = true;\r\n                            } else {\r\n                                this.is_verified = false;\r\n                                this.form.is_verified = false;\r\n                                this.isValidating = false;\r\n                                this.modal.type = 'failed',\r\n                                this.modal.message = data.message,\r\n                                this.modal.title = 'Not Found'\r\n                                let bn = document.getElementById('modalBtn');\r\n                                setTimeout(() => bn.click(), 200)\r\n                            }\r\n                        })\r\n                        .catch((error) => {\r\n                            this.isValidating = false;\r\n                            if (error.response && error.response.data && error.response.data.errors) {\r\n                                this.form.errors.record(error.response.data.errors);\r\n                            } else {\r\n                                this.$toast.error(error.response.data);\r\n                            }\r\n                        });\r\n                }, 1500);\r\n            }\r\n        },\r\n        'form.date_time': function (value){\r\n            if(value !== ''){ this.form.shouldSchedule = true}else{ this.form.shouldSchedule = false }\r\n        }\r\n    },\r\n    computed: {\r\n        canSubmit() {\r\n            return (\r\n                this.form.message !== '' && this.form.is_verified == true && this.form.phoneNumber !== '' && this.form.processing != true\r\n            );\r\n        },\r\n    },\r\n    methods: {\r\n        goBack() {\r\n            window.history.back();\r\n        },\r\n        sendMessage() {\r\n            this.btnState = `Sending...`\r\n            this.form.post('/bank/agent-float')\r\n                .then((data) => {\r\n                    if (data.status === \"SUCCESS\") {\r\n                        this.modal.type = 'success',\r\n                            this.modal.message = \"Your payment of has been successfully submitted.\"\r\n                        this.modal.title = 'Payment succeeded'\r\n                        this.is_verified = false;\r\n                        this.form.is_verified = false;\r\n                        this.btnState = `Sent`\r\n                        let bn = document.getElementById('modalBtn');\r\n                        setTimeout(() => bn.click(), 200)\r\n                    } else {\r\n                        this.modal.type = 'failed',\r\n                            this.modal.message = data.message,\r\n                            this.modal.title = 'Payment not succeeded'\r\n                        this.is_verified = false;\r\n                        this.form.is_verified = false;\r\n                        this.isValidating = false;\r\n                        this.btnState = `Send`\r\n                        let bn = document.getElementById('modalBtn');\r\n                        setTimeout(() => bn.click(), 200)\r\n                    }\r\n                })\r\n                .catch((error) => {\r\n                    this.isValidating = false;\r\n                    this.is_verified = true;\r\n                    this.form.is_verified = true;\r\n                    this.btnState = `Send`\r\n                });\r\n        },\r\n    }\r\n})\r\n</script>\r\n<style scoped>\r\n.otp-input {\r\n    width: 60px;\r\n    height: 60px;\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-label {\r\n    font-weight: bold;\r\n}\r\n\r\n.spinner {\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 3px solid rgba(0, 0, 0, 0.1);\r\n    border-left-color: #041b3f;\r\n    border-radius: 50%;\r\n    animation: spin 1s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue?vue&type=style&index=0&id=07a65f7e&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue?vue&type=style&index=0&id=07a65f7e&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.loader[data-v-07a65f7e] {\r\n  border: 8px solid #f3f3f3; /* Light grey */\r\n  border-top: 8px solid #3498db; /* Blue */\r\n  border-radius: 50%;\r\n  width: 60px;\r\n  height: 60px;\r\n  animation: spin-07a65f7e 1s linear infinite;\n}\n@keyframes spin-07a65f7e {\n0% { transform: rotate(0deg);\n}\n100% { transform: rotate(360deg);\n}\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue"],"names":[],"mappings":";AAoGA;EACA,yBAAA,EAAA,eAAA;EACA,6BAAA,EAAA,SAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,2CAAA;AACA;AAEA;AACA,KAAA,uBAAA;AAAA;AACA,OAAA,yBAAA;AAAA;AACA","sourcesContent":["<template>\r\n    <div>\r\n        <apexchart v-if=\"loaded\" type=\"line\" height=\"350\" :options=\"chartOptions\" :series=\"series\"></apexchart>\r\n\r\n        <div v-else class=\"loader mx-auto\"></div>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n   import VueApexCharts from 'vue-apexcharts';\r\nimport axios from 'axios';\r\n\r\nexport default {\r\n    components: {\r\n        apexchart: VueApexCharts,\r\n    },\r\n    data() {\r\n        return {\r\n            series: [], \r\n            xAxisLabels: [],\r\n            loaded: false,\r\n            chartOptions: {\r\n                chart: {\r\n                    type: 'line',\r\n                    height: 350,\r\n                },\r\n                stroke: {\r\n                    width: 5,\r\n                    curve: 'smooth',\r\n                },\r\n                markers: {\r\n                    size: 4,\r\n                    hover: {\r\n                        size: 6,\r\n                    },\r\n                },\r\n                xaxis: {\r\n                    categories: [], \r\n                    title: {\r\n                        text: 'Date',\r\n                    },\r\n                },\r\n                yaxis: {\r\n                    title: {\r\n                        text: 'Transactions',\r\n                    },\r\n                    labels: {\r\n                        formatter: function (val) {\r\n                            return val + 'k';\r\n                        },\r\n                    },\r\n                },\r\n                grid: {\r\n                    borderColor: '#e7e7e7',\r\n                    strokeDashArray: 5,\r\n                },\r\n                dataLabels: {\r\n                    enabled: false,\r\n                },\r\n                tooltip: {\r\n                    y: {\r\n                        formatter: function (val) {\r\n                            return val + ' transactions' \r\n                        },\r\n                    },\r\n                },\r\n            },\r\n        };\r\n    },\r\n    methods: {\r\n        async fetchTransactionData() {\r\n            try {\r\n                const response = await axios.get('/teller-dashboard/weekly-transanctions');\r\n                const data = response.data;\r\n                this.updateChart(data);\r\n                this.loaded = true;\r\n            } catch (error) {\r\n                console.error('Error fetching transaction data:', error);\r\n            }\r\n        },\r\n        updateChart(data) {\r\n           \r\n            this.xAxisLabels = data.categories; \r\n            this.series = data.series.map(serviceType => ({\r\n                name: serviceType.name,\r\n                data: serviceType.data.map(amount => amount / 1000), \r\n            }));\r\n           \r\n            this.chartOptions.xaxis.categories = this.xAxisLabels;\r\n        },\r\n    },\r\n    mounted() {\r\n        // Fetch the data when the component is mounted\r\n        this.fetchTransactionData();\r\n    },\r\n};\r\n\r\n</script>\r\n<style scoped>\r\n.loader {\r\n  border: 8px solid #f3f3f3; /* Light grey */\r\n  border-top: 8px solid #3498db; /* Blue */\r\n  border-radius: 50%;\r\n  width: 60px;\r\n  height: 60px;\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/user/UpdateProfile.vue?vue&type=style&index=0&id=2eee0d9c&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/user/UpdateProfile.vue?vue&type=style&index=0&id=2eee0d9c&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.profile-pic[data-v-2eee0d9c]{\n    max-width: 200px;\n    max-height: 200px;\n    height: 200px;\n    border-radius: 50%;\n    overflow: hidden;\n    cursor: pointer;\n}\n.profile-pic .position-absolute[data-v-2eee0d9c]{\n    visibility: hidden;\n    display: flex;\n    /*flex-direction: column;*/\n    right: 0;\n    left: 0;\n    top: -10rem;\n    align-items: center;\n    justify-content: center;\n    background: rgba(224, 214, 214, 0.99);\n    transition: ease-in-out 300ms;\n}\n.profile-pic:hover > .position-absolute[data-v-2eee0d9c]{\n    top: 0;\n    bottom: 0;\n\n\n    visibility: visible;\n}\n.otp-input[data-v-2eee0d9c] {\n    width: 60px;\n    height: 60px;\n    font-size: 2rem;\n    font-weight: bold;\n}\n.form-label[data-v-2eee0d9c] {\n    font-weight: bold;\n}\n\n\n", "",{"version":3,"sources":["webpack://./resources/js/components/pages/user/UpdateProfile.vue"],"names":[],"mappings":";AA2YA;IACA,gBAAA;IACA,iBAAA;IACA,aAAA;IACA,kBAAA;IACA,gBAAA;IACA,eAAA;AACA;AACA;IACA,kBAAA;IACA,aAAA;IACA,0BAAA;IACA,QAAA;IACA,OAAA;IACA,WAAA;IACA,mBAAA;IACA,uBAAA;IACA,qCAAA;IACA,6BAAA;AACA;AACA;IACA,MAAA;IACA,SAAA;;;IAGA,mBAAA;AACA;AACA;IACA,WAAA;IACA,YAAA;IACA,eAAA;IACA,iBAAA;AACA;AAEA;IACA,iBAAA;AACA","sourcesContent":["<template>\n<div>\n    <div class=\"modal fade\" id=\"profile-image-upload\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h1 class=\"modal-title fs-5\" id=\"exampleModalLabel\">Upload image</h1>\n                    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n                </div>\n                <div class=\"modal-body\">\n                    <input  ref=\"fileInput\" type=\"file\" @change=\"handleFileUpload\" />\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-primary\">Upload</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal fade\" id=\"change-pin\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h1 class=\"modal-title fs-5\" id=\"exampleModalLabel\">Upload image</h1>\n                    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n                </div>\n                <div class=\"modal-body\">\n                    <input  ref=\"fileInput\" type=\"file\" @change=\"handleFileUpload\" />\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-primary\">Upload</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n\n        <div class=\"col-lg-6 mx-auto\">\n            <div class=\"card w-100 \" style=\"margin-top: 50px; border-radius: 10px;\">\n                <div class=\"card-header text-white\" style=\"background-color: #041b3f; border-top-left-radius: 10px; border-top-right-radius: 10px;\">\n\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"px-5\">\n                        <div class=\"d-flex flex-column justify-content-center align-items-center\">\n                            <div style=\"width: 200px;\" class=\"profile-pic position-relative\">\n                                <img style=\"width: 100%; border-radius:50%\" src=\"/assets/images/users/avatar-1.jpg\" alt=\"\">\n                                <div  data-bs-toggle=\"modal\" data-bs-target=\"#profile-image-upload\" class=\"position-absolute\"><div class=\"text-center\"><div class=\"mx-auto\"><i class=\"bi bi-camera fs-36\"></i></div> <p> Change profile image</p></div>   </div>\n                            </div>\n                            <div class=\"fw-bold my-2\">{{ user.tellerName }}</div>\n                            <div class=\"mb-4\">{{ user.email }}</div>\n                        </div>\n                        <ul class=\"nav nav-pills mb-4\" id=\"pills-tab\" role=\"tablist\">\n                            <li class=\"nav-item\" role=\"presentation\">\n                                <button style=\"margin-right:1rem\" class=\"nav-link p-2 active\" id=\"pills-home-tab\"\n                                        data-bs-toggle=\"pill\" data-bs-target=\"#pills-home\" type=\"button\" role=\"tab\"\n                                        aria-controls=\"pills-home\" aria-selected=\"true\">Basic Info\n                                </button>\n                            </li>\n                            <li class=\"nav-item\" role=\"presentation\">\n                                <button style=\"\" class=\"nav-link\" id=\"pills-profile-tab\" data-bs-toggle=\"pill\"\n                                        data-bs-target=\"#pills-profile\" type=\"button\" role=\"tab\" aria-controls=\"pills-profile\"\n                                        aria-selected=\"false\">Change PIN\n                                </button>\n                            </li>\n                        </ul>\n                        <div class=\"tab-content\" id=\"myTabContent\">\n                            <div class=\"tab-pane fade show active\" id=\"pills-home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                                <div class=\"w-100\">\n                                    <div class=\"card-header text-white\"\n                                         style=\"background-color: rgba(241,241,241,0.61);border-radius: 0\">\n                                        <h6 class=\"mb-0\">Basic Info</h6>\n                                    </div>\n                                    <div class=\"card-body\">\n                                        <form @submit.prevent=\"updateProfile\" id=\"walletForm\">\n                                            <div class=\"mb-3\">\n                                                <label for=\"narration\" class=\"form-label\">Name</label>\n                                                <input :disabled=\"role.name === 'teller'\" type=\"text\"  v-model=\"profile.tellerName\" class=\"form-control\" id=\"project\" placeholder=\"Enter Phone\">\n                                            </div>\n                                            <div class=\"mb-3\">\n                                                <label for=\"narration\" class=\"form-label\">Phone Number</label>\n                                                <input :disabled=\"role.name === 'teller'\" type=\"text\"  v-model=\"profile.tellerPhone\" class=\"form-control\" id=\"project\" placeholder=\"Enter Phone\">\n                                            </div>\n                                            <div class=\"mb-3\">\n                                                <label for=\"narration\" class=\"form-label\">Email Address</label>\n                                                <input :disabled=\"role.name === 'teller'\" type=\"email\" class=\"form-control\" v-model=\"profile.email\" id=\"project\" placeholder=\"Enter Email Address\">\n                                            </div>\n                                            <div class=\"d-flex gap-3 flex-wrap flex-column-reverse flex-md-row justify-content-md-end\">\n                                                <button @click=\"goBack\" type=\"button\" class=\"btn btn-outline-primary px-5\">Cancel</button>\n                                                <button :disabled=\"canUpdate\" type=\"submit\" class=\"btn btn-primary px-5\" style=\"background-color: #041b3f;\">{{ stateBtn }}</button>\n                                            </div>\n                                        </form>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"tab-pane fade\" id=\"pills-profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                                <div class=\"w-100\" >\n                                    <div  class=\"card-header text-white\"\n                                         style=\"background-color: #f1f1f1;border-radius: 0\">\n                                        <h6 class=\"mb-0\">Change PIN</h6>\n                                    </div>\n                                    <div class=\"card-body\">\n                                        <form class=\"mx-auto\" @submit.prevent=\"verifyPin\" method=\"POST\" id=\"walletForm\">\n                                            <div class=\"mb-1\">\n                                                <div v-if=\"response\">\n                                                    <div :class=\"`alert ${responseType}`\">\n                                                        {{ responseMessage }}\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"mb-4  d-flex flex-column justify-content-center\">\n                                                <label for=\"new-pin\" class=\"form-label d-block text-start\">New PIN</label>\n                                                <div class=\"d-flex align-items-center gap-4\">\n                                                    <input v-for=\"(pin, index) in newPinInputs\" :key=\"`new-pin-${index}`\"\n                                                           ref=\"newPinInputs\" type=\"password\" class=\"form-control text-center otp-input\"\n                                                           id=\"pin\"\n                                                           maxlength=\"1\" v-model=\"newPinInputs[index]\"\n                                                           @input=\"handleInput(index, 'new')\"\n                                                           @keydown=\"handleKeyDown($event, index, 'new')\"\n                                                           @paste=\"handlePaste($event, 'new')\" @focus=\"handleFocus\" />\n                                                    <div @click=\"handleShowPin\"><i :class=\"`bi ${showPin ? 'bi-eye' : 'bi-eye-slash'} fs-22`\"></i></div>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"mb-4\">\n                                                <label for=\"confirm-pin\" class=\"form-label d-block text-start\">Confirm PIN</label>\n                                                <div class=\"d-flex gap-4 align-items-center\">\n                                                    <input v-for=\"(pin, index) in confirmPinInputs\" :key=\"`confirm-pin-${index}`\"\n                                                           ref=\"confirmPinInputs\" type=\"password\"\n                                                           id=\"confirmPin\"\n                                                           class=\"form-control text-center otp-input\" maxlength=\"1\"\n                                                           v-model=\"confirmPinInputs[index]\" @input=\"handleInput(index, 'confirm')\"\n                                                           @keydown=\"handleKeyDown($event, index, 'confirm')\"\n                                                           @paste=\"handlePaste($event, 'confirm')\" @focus=\"handleFocus\" />\n                                                    <div @click=\"handleShowConfirmPin\" ><i :class=\"`bi ${showConfirmPin ? 'bi-eye' : 'bi-eye-slash'} fs-22`\"></i></div>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"d-flex gap-3 flex-wrap flex-column-reverse flex-md-row justify-content-md-end\">\n                                                <button @click=\"goBack\" type=\"button\" class=\"btn btn-outline-primary px-5\">Cancel</button>\n                                                <button :disabled=\"!canSubmit\" v-html=\"state\" type=\"submit\" class=\"btn btn-primary px-5\"\n                                                        style=\"background-color: #041b3f;\"></button>\n                                            </div>\n                                        </form>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n            <a style=\"visibility: hidden\" id=\"modalBtn\" href=\"#\" class=\"btn\" data-bs-toggle=\"modal\"\n                    data-bs-target=\"#modal-success\">\n                    Success modal\n                </a>\n                <!-- Vertically centered scrollable modal -->\n                <modal :message=\"modal.message\" :title=\"modal.title\" :type=\"modal.type\"></modal>\n        </div>\n\n    </div>\n</div>\n\n</template>\n<script>\nimport Modal from \"../payments/modal/Modal.vue\";\nimport Form from '@utils/form/Form'\n\nexport default {\n    components:{\n        Modal\n    },\n    props:{\n        user: {\n            type: Object,\n            required: true,\n            default: () => {\n            },\n        },\n        page_info:{\n            type: Object\n        },\n        role:{\n            type: Object,\n            required: false,\n            default: () => {\n\n            }\n        }\n    },\n    data() {\n        return {\n            selectedFile: null,\n            previewImage: null,\n            walletId: '',\n            customerName: '',\n            profile: new Form({\n                tellerName: '',\n                tellerPhone: '',\n                email: ''\n            }, {\n                resetOnSuccess: false,\n            }),\n            form: new Form({\n                wallet_number: '',\n                walletId: '',\n                is_verified: false,\n                customerName: '',\n                newPin: ''\n            }),\n            modal: {\n                message: 'Unexpected Error Occurred',\n                type: 'failed',\n                title: 'Error'\n            },\n            response: false,\n            responseType: 'alert-danger',\n            responseMessage: 'Error',\n            showConfirmPin: false,\n            showPin: false,\n            hidePin:'bi-eye-slash',\n            is_verified: false,\n            state: 'Submit',\n            stateBtn: 'Submit',\n            newPinInputs: Array(4).fill(\"\"),\n            confirmPinInputs: Array(4).fill(\"\"),\n            isValidating: false,\n            typingTimeout: null,\n        };\n    },\n\n    computed: {\n        canUpdate(){\n            return(\n                this.profile.processing\n            );\n        },\n        canSubmit() {\n            return (\n                this.newPinInputs.join('').length === 4 &&\n                this.confirmPinInputs.join('').length === 4 &&\n                this.newPinInputs.join('') === this.confirmPinInputs.join('')\n                && this.form.processing === false\n            );\n        },\n    },\n    created() {\n        this.profile.populate(this.user);\n    },\n    methods: {\n        updateProfile() {\n            this.stateBtn = `Updating...`\n            this.canSubmit = true;\n            this.profile.post(`${this.page_info?.domain}bank/update-profile`)\n                .then((data) => {\n                    if (data.status === \"SUCCESS\") {\n                        this.is_verified = false;\n                        this.modal.type = 'success';\n                        let message = '';\n                        let failed_message = '';\n                        data.updatedFields.forEach((field)=> message += `${field}, `);\n                        data.failedFields.forEach((field)=> failed_message += `${field}, `);\n                        console.log(message)\n                        this.modal.message = `${message} ${message ? 'Updated' : 'nothing to Updated'}. ${failed_message} ${failed_message && 'failed'}`\n                        data.updatedFields.length !== 0 ? this.modal.title = 'Profile Updated' : this.modal.title = 'Profile Updated Failed'\n                        this.stateBtn = `Updated`\n                        let bn = document.getElementById('modalBtn');\n                        setTimeout(() => bn.click(), 200)\n                        message && setTimeout(()=>window.location.reload(),1000)\n                    } else {\n                        this.response = true\n                        this.responseMessage = data.message;\n                        this.is_verified = false;\n                        this.form.is_verified = false;\n                        this.isValidating = false;\n                        this.stateBtn = `Update`\n                        this.modal.type = 'failed',\n                        this.modal.message = \"Your payment of has been successfully submitted.\"\n                        this.modal.title = 'Payment succeeded'\n                        let bn = document.getElementById('modalBtn');\n                        setTimeout(() => bn.click(), 200)\n\n                    }\n                })\n                .catch((error) => {\n                    this.response = true\n                    this.responseMessage = \"An error occurred when connecting\";\n                    this.isValidating = false;\n                    this.is_verified = true;\n                    this.form.is_verified = true;\n                    this.stateBtn = `Update`\n                    this.modal.type = 'failed',\n                        this.modal.message = \"Nothing Updated\"\n                        this.modal.title = 'Profile Updated Failed'\n                        let bn = document.getElementById('modalBtn');\n                        setTimeout(() => bn.click(), 200)\n\n                });\n        },\n        goBack() {\n            window.history.back();\n        },\n        handleFileUpload(event) {\n            this.selectedFile = null;\n            this.previewImage = null;\n\n            let file = event.target.files[0];\n\n            if (file) {\n                this.selectedFile = file;\n\n                let reader = new FileReader();\n                reader.onload = (e) => {\n                    this.previewImage = e.target.result;\n                };\n                reader.readAsDataURL(file);\n\n            }\n        },\n        handleShowConfirmPin(){\n            this.showConfirmPin = !this.showConfirmPin\n            let input = document.querySelectorAll('#confirmPin')\n            input.forEach((input)=>input.type = this.showConfirmPin ? 'text' : 'password')\n        },\n        handleShowPin(){\n            this.showPin = !this.showPin\n            let input = document.querySelectorAll('#pin')\n            input.forEach((input)=>input.type = this.showPin ? 'text' : 'password')\n        },\n        handleInput(index, type) {\n            const pinArray = type === 'new' ? this.newPinInputs : this.confirmPinInputs;\n            if (pinArray[index] !== \"\" && index < pinArray.length - 1) {\n                this.$refs[`${type}PinInputs`][index + 1].focus();\n            }\n        },\n        handleKeyDown(event, index, type) {\n            const pinArray = type === 'new' ? this.newPinInputs : this.confirmPinInputs;\n            if (event.key === 'Backspace' && pinArray[index] === '' && index > 0) {\n                this.$refs[`${type}PinInputs`][index - 1].focus();\n            }\n        },\n        handleFocus(event) {\n            event.target.select();\n        },\n        handlePaste(event, type) {\n            event.preventDefault();\n            const text = event.clipboardData.getData('text').replace(/\\D/g, '');\n            text.split('').slice(0, 4).forEach((digit, index) => {\n                this[`${type}PinInputs`][index] = digit;\n                this.$refs[`${type}PinInputs`][index].focus();\n            });\n        },\n        verifyPin() {\n            this.form.newPin = this.newPinInputs.join('');\n            this.state = `Resetting...`\n            this.canSubmit = true;\n            this.form.post(`${this.page_info?.domain}profile/change-pin`)\n                .then((data) => {\n                    if (data.status === \"SUCCESS\") {\n                        this.response = true\n                        this.responseType = 'alert-success'\n                        this.responseMessage = data.message;\n                        this.is_verified = false;\n                        this.form.is_verified = false;\n                        this.newPinInputs= Array(4).fill(\"\"),\n                        this.confirmPinInputs= Array(4).fill(\"\"),\n                        this.state = `Submit`\n                        this.form.reset()\n                        setTimeout(()=> document.querySelector('#pills-home-tab').click(),1000)\n\n\n                    } else {\n                        this.response = true\n                        this.responseMessage = data.message;\n                        this.is_verified = false;\n                        this.form.is_verified = false;\n                        this.isValidating = false;\n                        this.state = `Submit`\n\n                    }\n                })\n                .catch((error) => {\n                    this.response = true\n                    this.responseMessage = \"An error occurred when connecting\";\n                    this.isValidating = false;\n                    this.is_verified = true;\n                    this.form.is_verified = true;\n                    this.state = `Submit`\n                });\n        },\n    },\n};\n</script>\n<style scoped>\n.profile-pic{\n    max-width: 200px;\n    max-height: 200px;\n    height: 200px;\n    border-radius: 50%;\n    overflow: hidden;\n    cursor: pointer;\n}\n.profile-pic .position-absolute{\n    visibility: hidden;\n    display: flex;\n    /*flex-direction: column;*/\n    right: 0;\n    left: 0;\n    top: -10rem;\n    align-items: center;\n    justify-content: center;\n    background: rgba(224, 214, 214, 0.99);\n    transition: ease-in-out 300ms;\n}\n.profile-pic:hover > .position-absolute{\n    top: 0;\n    bottom: 0;\n\n\n    visibility: visible;\n}\n.otp-input {\n    width: 60px;\n    height: 60px;\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n.form-label {\n    font-weight: bold;\n}\n\n\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/css/sass/app.scss":
/*!*************************************!*\
  !*** ./resources/css/sass/app.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue?vue&type=style&index=0&id=e241d7a6&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue?vue&type=style&index=0&id=e241d7a6&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsStatus_vue_vue_type_style_index_0_id_e241d7a6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TransactionsStatus.vue?vue&type=style&index=0&id=e241d7a6&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue?vue&type=style&index=0&id=e241d7a6&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsStatus_vue_vue_type_style_index_0_id_e241d7a6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsStatus_vue_vue_type_style_index_0_id_e241d7a6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/GroupManagement.vue?vue&type=style&index=0&id=66065a72&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/GroupManagement.vue?vue&type=style&index=0&id=66065a72&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupManagement_vue_vue_type_style_index_0_id_66065a72_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupManagement.vue?vue&type=style&index=0&id=66065a72&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/GroupManagement.vue?vue&type=style&index=0&id=66065a72&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupManagement_vue_vue_type_style_index_0_id_66065a72_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupManagement_vue_vue_type_style_index_0_id_66065a72_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/ResetPin.vue?vue&type=style&index=0&id=411020f1&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/ResetPin.vue?vue&type=style&index=0&id=411020f1&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPin_vue_vue_type_style_index_0_id_411020f1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResetPin.vue?vue&type=style&index=0&id=411020f1&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/ResetPin.vue?vue&type=style&index=0&id=411020f1&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPin_vue_vue_type_style_index_0_id_411020f1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPin_vue_vue_type_style_index_0_id_411020f1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/UpdateAccount.vue?vue&type=style&index=0&id=728be3ee&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/UpdateAccount.vue?vue&type=style&index=0&id=728be3ee&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateAccount_vue_vue_type_style_index_0_id_728be3ee_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateAccount.vue?vue&type=style&index=0&id=728be3ee&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/UpdateAccount.vue?vue&type=style&index=0&id=728be3ee&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateAccount_vue_vue_type_style_index_0_id_728be3ee_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateAccount_vue_vue_type_style_index_0_id_728be3ee_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AgentFloat.vue?vue&type=style&index=0&id=737e0513&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AgentFloat.vue?vue&type=style&index=0&id=737e0513&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentFloat_vue_vue_type_style_index_0_id_737e0513_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgentFloat.vue?vue&type=style&index=0&id=737e0513&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AgentFloat.vue?vue&type=style&index=0&id=737e0513&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentFloat_vue_vue_type_style_index_0_id_737e0513_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentFloat_vue_vue_type_style_index_0_id_737e0513_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AirtimePayment.vue?vue&type=style&index=0&id=482f57ab&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AirtimePayment.vue?vue&type=style&index=0&id=482f57ab&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AirtimePayment_vue_vue_type_style_index_0_id_482f57ab_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AirtimePayment.vue?vue&type=style&index=0&id=482f57ab&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AirtimePayment.vue?vue&type=style&index=0&id=482f57ab&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AirtimePayment_vue_vue_type_style_index_0_id_482f57ab_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AirtimePayment_vue_vue_type_style_index_0_id_482f57ab_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/CashInCashOut.vue?vue&type=style&index=0&id=39f63b37&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/CashInCashOut.vue?vue&type=style&index=0&id=39f63b37&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CashInCashOut_vue_vue_type_style_index_0_id_39f63b37_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CashInCashOut.vue?vue&type=style&index=0&id=39f63b37&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/CashInCashOut.vue?vue&type=style&index=0&id=39f63b37&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CashInCashOut_vue_vue_type_style_index_0_id_39f63b37_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CashInCashOut_vue_vue_type_style_index_0_id_39f63b37_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/BulkSms.vue?vue&type=style&index=0&id=9f9d46ea&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/BulkSms.vue?vue&type=style&index=0&id=9f9d46ea&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkSms_vue_vue_type_style_index_0_id_9f9d46ea_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BulkSms.vue?vue&type=style&index=0&id=9f9d46ea&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/BulkSms.vue?vue&type=style&index=0&id=9f9d46ea&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkSms_vue_vue_type_style_index_0_id_9f9d46ea_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkSms_vue_vue_type_style_index_0_id_9f9d46ea_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/SingleSms.vue?vue&type=style&index=0&id=4664cd95&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/SingleSms.vue?vue&type=style&index=0&id=4664cd95&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleSms_vue_vue_type_style_index_0_id_4664cd95_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SingleSms.vue?vue&type=style&index=0&id=4664cd95&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/SingleSms.vue?vue&type=style&index=0&id=4664cd95&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleSms_vue_vue_type_style_index_0_id_4664cd95_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleSms_vue_vue_type_style_index_0_id_4664cd95_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue?vue&type=style&index=0&id=07a65f7e&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue?vue&type=style&index=0&id=07a65f7e&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsChart_vue_vue_type_style_index_0_id_07a65f7e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TransactionsChart.vue?vue&type=style&index=0&id=07a65f7e&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue?vue&type=style&index=0&id=07a65f7e&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsChart_vue_vue_type_style_index_0_id_07a65f7e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsChart_vue_vue_type_style_index_0_id_07a65f7e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/user/UpdateProfile.vue?vue&type=style&index=0&id=2eee0d9c&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/user/UpdateProfile.vue?vue&type=style&index=0&id=2eee0d9c&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfile_vue_vue_type_style_index_0_id_2eee0d9c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateProfile.vue?vue&type=style&index=0&id=2eee0d9c&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/user/UpdateProfile.vue?vue&type=style&index=0&id=2eee0d9c&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfile_vue_vue_type_style_index_0_id_2eee0d9c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfile_vue_vue_type_style_index_0_id_2eee0d9c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/pages/GlEscrowManagement/CashierAccount.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/pages/GlEscrowManagement/CashierAccount.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CashierAccount_vue_vue_type_template_id_d8c0af74__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CashierAccount.vue?vue&type=template&id=d8c0af74 */ "./resources/js/components/pages/GlEscrowManagement/CashierAccount.vue?vue&type=template&id=d8c0af74");
/* harmony import */ var _CashierAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CashierAccount.vue?vue&type=script&lang=js */ "./resources/js/components/pages/GlEscrowManagement/CashierAccount.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CashierAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CashierAccount_vue_vue_type_template_id_d8c0af74__WEBPACK_IMPORTED_MODULE_0__.render,
  _CashierAccount_vue_vue_type_template_id_d8c0af74__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/GlEscrowManagement/CashierAccount.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TransactionsStatus_vue_vue_type_template_id_e241d7a6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransactionsStatus.vue?vue&type=template&id=e241d7a6&scoped=true */ "./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue?vue&type=template&id=e241d7a6&scoped=true");
/* harmony import */ var _TransactionsStatus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionsStatus.vue?vue&type=script&lang=js */ "./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue?vue&type=script&lang=js");
/* harmony import */ var _TransactionsStatus_vue_vue_type_style_index_0_id_e241d7a6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TransactionsStatus.vue?vue&type=style&index=0&id=e241d7a6&scoped=true&lang=css */ "./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue?vue&type=style&index=0&id=e241d7a6&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TransactionsStatus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TransactionsStatus_vue_vue_type_template_id_e241d7a6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TransactionsStatus_vue_vue_type_template_id_e241d7a6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e241d7a6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/customer/AccountCreation.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/pages/customer/AccountCreation.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AccountCreation_vue_vue_type_template_id_028025d1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountCreation.vue?vue&type=template&id=028025d1&scoped=true */ "./resources/js/components/pages/customer/AccountCreation.vue?vue&type=template&id=028025d1&scoped=true");
/* harmony import */ var _AccountCreation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountCreation.vue?vue&type=script&lang=js */ "./resources/js/components/pages/customer/AccountCreation.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountCreation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountCreation_vue_vue_type_template_id_028025d1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _AccountCreation_vue_vue_type_template_id_028025d1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "028025d1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/customer/AccountCreation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/customer/GroupManagement.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/pages/customer/GroupManagement.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GroupManagement_vue_vue_type_template_id_66065a72_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupManagement.vue?vue&type=template&id=66065a72&scoped=true */ "./resources/js/components/pages/customer/GroupManagement.vue?vue&type=template&id=66065a72&scoped=true");
/* harmony import */ var _GroupManagement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupManagement.vue?vue&type=script&lang=js */ "./resources/js/components/pages/customer/GroupManagement.vue?vue&type=script&lang=js");
/* harmony import */ var _GroupManagement_vue_vue_type_style_index_0_id_66065a72_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupManagement.vue?vue&type=style&index=0&id=66065a72&scoped=true&lang=css */ "./resources/js/components/pages/customer/GroupManagement.vue?vue&type=style&index=0&id=66065a72&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GroupManagement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GroupManagement_vue_vue_type_template_id_66065a72_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _GroupManagement_vue_vue_type_template_id_66065a72_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "66065a72",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/customer/GroupManagement.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/customer/ResetPin.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/pages/customer/ResetPin.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResetPin_vue_vue_type_template_id_411020f1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPin.vue?vue&type=template&id=411020f1&scoped=true */ "./resources/js/components/pages/customer/ResetPin.vue?vue&type=template&id=411020f1&scoped=true");
/* harmony import */ var _ResetPin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPin.vue?vue&type=script&lang=js */ "./resources/js/components/pages/customer/ResetPin.vue?vue&type=script&lang=js");
/* harmony import */ var _ResetPin_vue_vue_type_style_index_0_id_411020f1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResetPin.vue?vue&type=style&index=0&id=411020f1&scoped=true&lang=css */ "./resources/js/components/pages/customer/ResetPin.vue?vue&type=style&index=0&id=411020f1&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ResetPin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetPin_vue_vue_type_template_id_411020f1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ResetPin_vue_vue_type_template_id_411020f1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "411020f1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/customer/ResetPin.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/customer/UpdateAccount.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/pages/customer/UpdateAccount.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UpdateAccount_vue_vue_type_template_id_728be3ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateAccount.vue?vue&type=template&id=728be3ee&scoped=true */ "./resources/js/components/pages/customer/UpdateAccount.vue?vue&type=template&id=728be3ee&scoped=true");
/* harmony import */ var _UpdateAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateAccount.vue?vue&type=script&lang=js */ "./resources/js/components/pages/customer/UpdateAccount.vue?vue&type=script&lang=js");
/* harmony import */ var _UpdateAccount_vue_vue_type_style_index_0_id_728be3ee_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpdateAccount.vue?vue&type=style&index=0&id=728be3ee&scoped=true&lang=css */ "./resources/js/components/pages/customer/UpdateAccount.vue?vue&type=style&index=0&id=728be3ee&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UpdateAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateAccount_vue_vue_type_template_id_728be3ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _UpdateAccount_vue_vue_type_template_id_728be3ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "728be3ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/customer/UpdateAccount.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/fraudManagement/Index.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/pages/fraudManagement/Index.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_417467e4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=417467e4 */ "./resources/js/components/pages/fraudManagement/Index.vue?vue&type=template&id=417467e4");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/components/pages/fraudManagement/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_417467e4__WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_417467e4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/fraudManagement/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/fraudManagement/charts/highValueTransactions.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/fraudManagement/charts/highValueTransactions.vue ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _highValueTransactions_vue_vue_type_template_id_1cec2c68__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highValueTransactions.vue?vue&type=template&id=1cec2c68 */ "./resources/js/components/pages/fraudManagement/charts/highValueTransactions.vue?vue&type=template&id=1cec2c68");
/* harmony import */ var _highValueTransactions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highValueTransactions.vue?vue&type=script&lang=js */ "./resources/js/components/pages/fraudManagement/charts/highValueTransactions.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _highValueTransactions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _highValueTransactions_vue_vue_type_template_id_1cec2c68__WEBPACK_IMPORTED_MODULE_0__.render,
  _highValueTransactions_vue_vue_type_template_id_1cec2c68__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/fraudManagement/charts/highValueTransactions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/payments/AgentFloat.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/pages/payments/AgentFloat.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AgentFloat_vue_vue_type_template_id_737e0513_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgentFloat.vue?vue&type=template&id=737e0513&scoped=true */ "./resources/js/components/pages/payments/AgentFloat.vue?vue&type=template&id=737e0513&scoped=true");
/* harmony import */ var _AgentFloat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgentFloat.vue?vue&type=script&lang=js */ "./resources/js/components/pages/payments/AgentFloat.vue?vue&type=script&lang=js");
/* harmony import */ var _AgentFloat_vue_vue_type_style_index_0_id_737e0513_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AgentFloat.vue?vue&type=style&index=0&id=737e0513&scoped=true&lang=css */ "./resources/js/components/pages/payments/AgentFloat.vue?vue&type=style&index=0&id=737e0513&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AgentFloat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AgentFloat_vue_vue_type_template_id_737e0513_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _AgentFloat_vue_vue_type_template_id_737e0513_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "737e0513",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/payments/AgentFloat.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/payments/AirtimePayment.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/pages/payments/AirtimePayment.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AirtimePayment_vue_vue_type_template_id_482f57ab_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AirtimePayment.vue?vue&type=template&id=482f57ab&scoped=true */ "./resources/js/components/pages/payments/AirtimePayment.vue?vue&type=template&id=482f57ab&scoped=true");
/* harmony import */ var _AirtimePayment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AirtimePayment.vue?vue&type=script&lang=js */ "./resources/js/components/pages/payments/AirtimePayment.vue?vue&type=script&lang=js");
/* harmony import */ var _AirtimePayment_vue_vue_type_style_index_0_id_482f57ab_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AirtimePayment.vue?vue&type=style&index=0&id=482f57ab&scoped=true&lang=css */ "./resources/js/components/pages/payments/AirtimePayment.vue?vue&type=style&index=0&id=482f57ab&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AirtimePayment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AirtimePayment_vue_vue_type_template_id_482f57ab_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _AirtimePayment_vue_vue_type_template_id_482f57ab_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "482f57ab",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/payments/AirtimePayment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/payments/CashInCashOut.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/pages/payments/CashInCashOut.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CashInCashOut_vue_vue_type_template_id_39f63b37_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CashInCashOut.vue?vue&type=template&id=39f63b37&scoped=true */ "./resources/js/components/pages/payments/CashInCashOut.vue?vue&type=template&id=39f63b37&scoped=true");
/* harmony import */ var _CashInCashOut_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CashInCashOut.vue?vue&type=script&lang=js */ "./resources/js/components/pages/payments/CashInCashOut.vue?vue&type=script&lang=js");
/* harmony import */ var _CashInCashOut_vue_vue_type_style_index_0_id_39f63b37_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CashInCashOut.vue?vue&type=style&index=0&id=39f63b37&scoped=true&lang=css */ "./resources/js/components/pages/payments/CashInCashOut.vue?vue&type=style&index=0&id=39f63b37&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CashInCashOut_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CashInCashOut_vue_vue_type_template_id_39f63b37_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CashInCashOut_vue_vue_type_template_id_39f63b37_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "39f63b37",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/payments/CashInCashOut.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/payments/modal/Modal.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/pages/payments/modal/Modal.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modal_vue_vue_type_template_id_1de62abf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=1de62abf */ "./resources/js/components/pages/payments/modal/Modal.vue?vue&type=template&id=1de62abf");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js */ "./resources/js/components/pages/payments/modal/Modal.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modal_vue_vue_type_template_id_1de62abf__WEBPACK_IMPORTED_MODULE_0__.render,
  _Modal_vue_vue_type_template_id_1de62abf__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/payments/modal/Modal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/sms/BulkSms.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/pages/sms/BulkSms.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BulkSms_vue_vue_type_template_id_9f9d46ea_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BulkSms.vue?vue&type=template&id=9f9d46ea&scoped=true */ "./resources/js/components/pages/sms/BulkSms.vue?vue&type=template&id=9f9d46ea&scoped=true");
/* harmony import */ var _BulkSms_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BulkSms.vue?vue&type=script&lang=js */ "./resources/js/components/pages/sms/BulkSms.vue?vue&type=script&lang=js");
/* harmony import */ var _BulkSms_vue_vue_type_style_index_0_id_9f9d46ea_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BulkSms.vue?vue&type=style&index=0&id=9f9d46ea&scoped=true&lang=css */ "./resources/js/components/pages/sms/BulkSms.vue?vue&type=style&index=0&id=9f9d46ea&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BulkSms_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _BulkSms_vue_vue_type_template_id_9f9d46ea_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _BulkSms_vue_vue_type_template_id_9f9d46ea_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9f9d46ea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/sms/BulkSms.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/sms/SingleSms.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/pages/sms/SingleSms.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SingleSms_vue_vue_type_template_id_4664cd95_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleSms.vue?vue&type=template&id=4664cd95&scoped=true */ "./resources/js/components/pages/sms/SingleSms.vue?vue&type=template&id=4664cd95&scoped=true");
/* harmony import */ var _SingleSms_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleSms.vue?vue&type=script&lang=js */ "./resources/js/components/pages/sms/SingleSms.vue?vue&type=script&lang=js");
/* harmony import */ var _SingleSms_vue_vue_type_style_index_0_id_4664cd95_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleSms.vue?vue&type=style&index=0&id=4664cd95&scoped=true&lang=css */ "./resources/js/components/pages/sms/SingleSms.vue?vue&type=style&index=0&id=4664cd95&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SingleSms_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleSms_vue_vue_type_template_id_4664cd95_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SingleSms_vue_vue_type_template_id_4664cd95_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4664cd95",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/sms/SingleSms.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TransactionsChart_vue_vue_type_template_id_07a65f7e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransactionsChart.vue?vue&type=template&id=07a65f7e&scoped=true */ "./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue?vue&type=template&id=07a65f7e&scoped=true");
/* harmony import */ var _TransactionsChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionsChart.vue?vue&type=script&lang=js */ "./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue?vue&type=script&lang=js");
/* harmony import */ var _TransactionsChart_vue_vue_type_style_index_0_id_07a65f7e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TransactionsChart.vue?vue&type=style&index=0&id=07a65f7e&scoped=true&lang=css */ "./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue?vue&type=style&index=0&id=07a65f7e&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TransactionsChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TransactionsChart_vue_vue_type_template_id_07a65f7e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TransactionsChart_vue_vue_type_template_id_07a65f7e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "07a65f7e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/user/UpdateProfile.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/pages/user/UpdateProfile.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UpdateProfile_vue_vue_type_template_id_2eee0d9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateProfile.vue?vue&type=template&id=2eee0d9c&scoped=true */ "./resources/js/components/pages/user/UpdateProfile.vue?vue&type=template&id=2eee0d9c&scoped=true");
/* harmony import */ var _UpdateProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateProfile.vue?vue&type=script&lang=js */ "./resources/js/components/pages/user/UpdateProfile.vue?vue&type=script&lang=js");
/* harmony import */ var _UpdateProfile_vue_vue_type_style_index_0_id_2eee0d9c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpdateProfile.vue?vue&type=style&index=0&id=2eee0d9c&scoped=true&lang=css */ "./resources/js/components/pages/user/UpdateProfile.vue?vue&type=style&index=0&id=2eee0d9c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UpdateProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateProfile_vue_vue_type_template_id_2eee0d9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _UpdateProfile_vue_vue_type_template_id_2eee0d9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2eee0d9c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/user/UpdateProfile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/GlEscrowManagement/CashierAccount.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/pages/GlEscrowManagement/CashierAccount.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CashierAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CashierAccount.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/GlEscrowManagement/CashierAccount.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CashierAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsStatus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TransactionsStatus.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsStatus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/customer/AccountCreation.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pages/customer/AccountCreation.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountCreation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountCreation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/AccountCreation.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountCreation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/customer/GroupManagement.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pages/customer/GroupManagement.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupManagement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupManagement.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/GroupManagement.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupManagement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/customer/ResetPin.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/pages/customer/ResetPin.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResetPin.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/ResetPin.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/customer/UpdateAccount.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/pages/customer/UpdateAccount.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateAccount.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/UpdateAccount.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/fraudManagement/Index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/pages/fraudManagement/Index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/fraudManagement/Index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/fraudManagement/charts/highValueTransactions.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/pages/fraudManagement/charts/highValueTransactions.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_highValueTransactions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./highValueTransactions.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/fraudManagement/charts/highValueTransactions.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_highValueTransactions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/payments/AgentFloat.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pages/payments/AgentFloat.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentFloat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgentFloat.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AgentFloat.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentFloat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/payments/AirtimePayment.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/pages/payments/AirtimePayment.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirtimePayment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AirtimePayment.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AirtimePayment.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirtimePayment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/payments/CashInCashOut.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/pages/payments/CashInCashOut.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CashInCashOut_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CashInCashOut.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/CashInCashOut.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CashInCashOut_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/payments/modal/Modal.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/payments/modal/Modal.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Modal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/modal/Modal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/sms/BulkSms.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/pages/sms/BulkSms.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkSms_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BulkSms.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/BulkSms.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkSms_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/sms/SingleSms.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/pages/sms/SingleSms.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleSms_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SingleSms.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/SingleSms.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleSms_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TransactionsChart.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/user/UpdateProfile.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pages/user/UpdateProfile.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateProfile.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/user/UpdateProfile.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/GlEscrowManagement/CashierAccount.vue?vue&type=template&id=d8c0af74":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/pages/GlEscrowManagement/CashierAccount.vue?vue&type=template&id=d8c0af74 ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CashierAccount_vue_vue_type_template_id_d8c0af74__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CashierAccount_vue_vue_type_template_id_d8c0af74__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CashierAccount_vue_vue_type_template_id_d8c0af74__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CashierAccount.vue?vue&type=template&id=d8c0af74 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/GlEscrowManagement/CashierAccount.vue?vue&type=template&id=d8c0af74");


/***/ }),

/***/ "./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue?vue&type=template&id=e241d7a6&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue?vue&type=template&id=e241d7a6&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsStatus_vue_vue_type_template_id_e241d7a6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsStatus_vue_vue_type_template_id_e241d7a6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsStatus_vue_vue_type_template_id_e241d7a6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TransactionsStatus.vue?vue&type=template&id=e241d7a6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue?vue&type=template&id=e241d7a6&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/customer/AccountCreation.vue?vue&type=template&id=028025d1&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/pages/customer/AccountCreation.vue?vue&type=template&id=028025d1&scoped=true ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountCreation_vue_vue_type_template_id_028025d1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountCreation_vue_vue_type_template_id_028025d1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountCreation_vue_vue_type_template_id_028025d1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountCreation.vue?vue&type=template&id=028025d1&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/AccountCreation.vue?vue&type=template&id=028025d1&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/customer/GroupManagement.vue?vue&type=template&id=66065a72&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/pages/customer/GroupManagement.vue?vue&type=template&id=66065a72&scoped=true ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupManagement_vue_vue_type_template_id_66065a72_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupManagement_vue_vue_type_template_id_66065a72_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupManagement_vue_vue_type_template_id_66065a72_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupManagement.vue?vue&type=template&id=66065a72&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/GroupManagement.vue?vue&type=template&id=66065a72&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/customer/ResetPin.vue?vue&type=template&id=411020f1&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/pages/customer/ResetPin.vue?vue&type=template&id=411020f1&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPin_vue_vue_type_template_id_411020f1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPin_vue_vue_type_template_id_411020f1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPin_vue_vue_type_template_id_411020f1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResetPin.vue?vue&type=template&id=411020f1&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/ResetPin.vue?vue&type=template&id=411020f1&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/customer/UpdateAccount.vue?vue&type=template&id=728be3ee&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/pages/customer/UpdateAccount.vue?vue&type=template&id=728be3ee&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateAccount_vue_vue_type_template_id_728be3ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateAccount_vue_vue_type_template_id_728be3ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateAccount_vue_vue_type_template_id_728be3ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateAccount.vue?vue&type=template&id=728be3ee&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/UpdateAccount.vue?vue&type=template&id=728be3ee&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/fraudManagement/Index.vue?vue&type=template&id=417467e4":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/pages/fraudManagement/Index.vue?vue&type=template&id=417467e4 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_417467e4__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_417467e4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_417467e4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=417467e4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/fraudManagement/Index.vue?vue&type=template&id=417467e4");


/***/ }),

/***/ "./resources/js/components/pages/fraudManagement/charts/highValueTransactions.vue?vue&type=template&id=1cec2c68":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/pages/fraudManagement/charts/highValueTransactions.vue?vue&type=template&id=1cec2c68 ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_highValueTransactions_vue_vue_type_template_id_1cec2c68__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_highValueTransactions_vue_vue_type_template_id_1cec2c68__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_highValueTransactions_vue_vue_type_template_id_1cec2c68__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./highValueTransactions.vue?vue&type=template&id=1cec2c68 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/fraudManagement/charts/highValueTransactions.vue?vue&type=template&id=1cec2c68");


/***/ }),

/***/ "./resources/js/components/pages/payments/AgentFloat.vue?vue&type=template&id=737e0513&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/pages/payments/AgentFloat.vue?vue&type=template&id=737e0513&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentFloat_vue_vue_type_template_id_737e0513_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentFloat_vue_vue_type_template_id_737e0513_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentFloat_vue_vue_type_template_id_737e0513_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgentFloat.vue?vue&type=template&id=737e0513&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AgentFloat.vue?vue&type=template&id=737e0513&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/payments/AirtimePayment.vue?vue&type=template&id=482f57ab&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/pages/payments/AirtimePayment.vue?vue&type=template&id=482f57ab&scoped=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AirtimePayment_vue_vue_type_template_id_482f57ab_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AirtimePayment_vue_vue_type_template_id_482f57ab_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AirtimePayment_vue_vue_type_template_id_482f57ab_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AirtimePayment.vue?vue&type=template&id=482f57ab&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AirtimePayment.vue?vue&type=template&id=482f57ab&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/payments/CashInCashOut.vue?vue&type=template&id=39f63b37&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/pages/payments/CashInCashOut.vue?vue&type=template&id=39f63b37&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CashInCashOut_vue_vue_type_template_id_39f63b37_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CashInCashOut_vue_vue_type_template_id_39f63b37_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CashInCashOut_vue_vue_type_template_id_39f63b37_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CashInCashOut.vue?vue&type=template&id=39f63b37&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/CashInCashOut.vue?vue&type=template&id=39f63b37&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/payments/modal/Modal.vue?vue&type=template&id=1de62abf":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/pages/payments/modal/Modal.vue?vue&type=template&id=1de62abf ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_1de62abf__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_1de62abf__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_1de62abf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Modal.vue?vue&type=template&id=1de62abf */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/modal/Modal.vue?vue&type=template&id=1de62abf");


/***/ }),

/***/ "./resources/js/components/pages/sms/BulkSms.vue?vue&type=template&id=9f9d46ea&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/pages/sms/BulkSms.vue?vue&type=template&id=9f9d46ea&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkSms_vue_vue_type_template_id_9f9d46ea_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkSms_vue_vue_type_template_id_9f9d46ea_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkSms_vue_vue_type_template_id_9f9d46ea_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BulkSms.vue?vue&type=template&id=9f9d46ea&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/BulkSms.vue?vue&type=template&id=9f9d46ea&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/sms/SingleSms.vue?vue&type=template&id=4664cd95&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/pages/sms/SingleSms.vue?vue&type=template&id=4664cd95&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleSms_vue_vue_type_template_id_4664cd95_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleSms_vue_vue_type_template_id_4664cd95_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleSms_vue_vue_type_template_id_4664cd95_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SingleSms.vue?vue&type=template&id=4664cd95&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/SingleSms.vue?vue&type=template&id=4664cd95&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue?vue&type=template&id=07a65f7e&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue?vue&type=template&id=07a65f7e&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsChart_vue_vue_type_template_id_07a65f7e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsChart_vue_vue_type_template_id_07a65f7e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsChart_vue_vue_type_template_id_07a65f7e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TransactionsChart.vue?vue&type=template&id=07a65f7e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue?vue&type=template&id=07a65f7e&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/user/UpdateProfile.vue?vue&type=template&id=2eee0d9c&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/pages/user/UpdateProfile.vue?vue&type=template&id=2eee0d9c&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfile_vue_vue_type_template_id_2eee0d9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfile_vue_vue_type_template_id_2eee0d9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfile_vue_vue_type_template_id_2eee0d9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateProfile.vue?vue&type=template&id=2eee0d9c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/user/UpdateProfile.vue?vue&type=template&id=2eee0d9c&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue?vue&type=style&index=0&id=e241d7a6&scoped=true&lang=css":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue?vue&type=style&index=0&id=e241d7a6&scoped=true&lang=css ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsStatus_vue_vue_type_style_index_0_id_e241d7a6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TransactionsStatus.vue?vue&type=style&index=0&id=e241d7a6&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/adminDashboard/charts/TransactionsStatus.vue?vue&type=style&index=0&id=e241d7a6&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/pages/customer/GroupManagement.vue?vue&type=style&index=0&id=66065a72&scoped=true&lang=css":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/customer/GroupManagement.vue?vue&type=style&index=0&id=66065a72&scoped=true&lang=css ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupManagement_vue_vue_type_style_index_0_id_66065a72_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupManagement.vue?vue&type=style&index=0&id=66065a72&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/GroupManagement.vue?vue&type=style&index=0&id=66065a72&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/pages/customer/ResetPin.vue?vue&type=style&index=0&id=411020f1&scoped=true&lang=css":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/pages/customer/ResetPin.vue?vue&type=style&index=0&id=411020f1&scoped=true&lang=css ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPin_vue_vue_type_style_index_0_id_411020f1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResetPin.vue?vue&type=style&index=0&id=411020f1&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/ResetPin.vue?vue&type=style&index=0&id=411020f1&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/pages/customer/UpdateAccount.vue?vue&type=style&index=0&id=728be3ee&scoped=true&lang=css":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/customer/UpdateAccount.vue?vue&type=style&index=0&id=728be3ee&scoped=true&lang=css ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateAccount_vue_vue_type_style_index_0_id_728be3ee_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateAccount.vue?vue&type=style&index=0&id=728be3ee&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/UpdateAccount.vue?vue&type=style&index=0&id=728be3ee&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/pages/payments/AgentFloat.vue?vue&type=style&index=0&id=737e0513&scoped=true&lang=css":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/pages/payments/AgentFloat.vue?vue&type=style&index=0&id=737e0513&scoped=true&lang=css ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentFloat_vue_vue_type_style_index_0_id_737e0513_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgentFloat.vue?vue&type=style&index=0&id=737e0513&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AgentFloat.vue?vue&type=style&index=0&id=737e0513&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/pages/payments/AirtimePayment.vue?vue&type=style&index=0&id=482f57ab&scoped=true&lang=css":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/payments/AirtimePayment.vue?vue&type=style&index=0&id=482f57ab&scoped=true&lang=css ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AirtimePayment_vue_vue_type_style_index_0_id_482f57ab_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AirtimePayment.vue?vue&type=style&index=0&id=482f57ab&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/AirtimePayment.vue?vue&type=style&index=0&id=482f57ab&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/pages/payments/CashInCashOut.vue?vue&type=style&index=0&id=39f63b37&scoped=true&lang=css":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/payments/CashInCashOut.vue?vue&type=style&index=0&id=39f63b37&scoped=true&lang=css ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CashInCashOut_vue_vue_type_style_index_0_id_39f63b37_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CashInCashOut.vue?vue&type=style&index=0&id=39f63b37&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/payments/CashInCashOut.vue?vue&type=style&index=0&id=39f63b37&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/pages/sms/BulkSms.vue?vue&type=style&index=0&id=9f9d46ea&scoped=true&lang=css":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/pages/sms/BulkSms.vue?vue&type=style&index=0&id=9f9d46ea&scoped=true&lang=css ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkSms_vue_vue_type_style_index_0_id_9f9d46ea_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BulkSms.vue?vue&type=style&index=0&id=9f9d46ea&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/BulkSms.vue?vue&type=style&index=0&id=9f9d46ea&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/pages/sms/SingleSms.vue?vue&type=style&index=0&id=4664cd95&scoped=true&lang=css":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/pages/sms/SingleSms.vue?vue&type=style&index=0&id=4664cd95&scoped=true&lang=css ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleSms_vue_vue_type_style_index_0_id_4664cd95_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SingleSms.vue?vue&type=style&index=0&id=4664cd95&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/sms/SingleSms.vue?vue&type=style&index=0&id=4664cd95&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue?vue&type=style&index=0&id=07a65f7e&scoped=true&lang=css":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue?vue&type=style&index=0&id=07a65f7e&scoped=true&lang=css ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsChart_vue_vue_type_style_index_0_id_07a65f7e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TransactionsChart.vue?vue&type=style&index=0&id=07a65f7e&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tellerDashboard/charts/TransactionsChart.vue?vue&type=style&index=0&id=07a65f7e&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/pages/user/UpdateProfile.vue?vue&type=style&index=0&id=2eee0d9c&scoped=true&lang=css":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/pages/user/UpdateProfile.vue?vue&type=style&index=0&id=2eee0d9c&scoped=true&lang=css ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfile_vue_vue_type_style_index_0_id_2eee0d9c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateProfile.vue?vue&type=style&index=0&id=2eee0d9c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/user/UpdateProfile.vue?vue&type=style&index=0&id=2eee0d9c&scoped=true&lang=css");


/***/ }),

/***/ "?2128":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/css/sass/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app.js.map
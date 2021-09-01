self["webpackHotUpdate_N_E"]("pages/campaigns/requests",{

/***/ "./components/requestRow.js":
/*!**********************************!*\
  !*** ./components/requestRow.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_13__);
/* module decorator */ module = __webpack_require__.hmd(module);










var _jsxFileName = "C:\\Users\\Mouhib\\Desktop\\Desktop\\blockchain\\campaign_blochain\\components\\requestRow.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var RequestRow = /*#__PURE__*/function (_Component) {
  (0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(RequestRow, _Component);

  var _super = _createSuper(RequestRow);

  function RequestRow() {
    var _this;

    (0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, RequestRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.default)(_this), "state", {
      loadingApprove: false,
      loadingFinalize: false,
      errorMessage: ""
    });

    (0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.default)(_this), "onApprove", /*#__PURE__*/(0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var campaign, accounts;
      return C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                loadingApprove: true
              });

              campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_12__.default)(_this.props.address);
              _context.prev = 2;
              _context.next = 5;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__.default.eth.getAccounts();

            case 5:
              accounts = _context.sent;
              _context.next = 8;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 8:
              _routes__WEBPACK_IMPORTED_MODULE_13__.Router.replaceRoute("/campaigns/".concat(_this.props.address, "/requests"));
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);

              _this.setState({
                errorMessage: _context.t0.message
              });

              alert(_this.state.errorMessage);

            case 15:
              _this.setState({
                loadingApprove: false
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 11]]);
    })));

    (0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.default)(_this), "onFinalize", /*#__PURE__*/(0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var campaign, accounts;
      return C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.setState({
                loadingFinalize: true
              });

              campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_12__.default)(_this.props.address);
              _context2.prev = 2;
              _context2.next = 5;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__.default.eth.getAccounts();

            case 5:
              accounts = _context2.sent;
              _context2.next = 8;
              return campaign.methods.finalizeRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 8:
              _routes__WEBPACK_IMPORTED_MODULE_13__.Router.replaceRoute("/campaigns/".concat(_this.props.address, "/requests"));
              _context2.next = 15;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](2);

              _this.setState({
                errorMessage: _context2.t0.message
              });

              alert(_this.state.errorMessage);

            case 15:
              _this.setState({
                loadingFinalize: false
              });

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 11]]);
    })));

    return _this;
  }

  (0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(RequestRow, [{
    key: "render",
    value: function render() {
      var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Table.Row,
          Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Table.Cell;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: this.props.id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: this.props.request.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: [_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__.default.utils.fromWei(this.props.request.value, 'ether'), " (ETH)"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: this.props.request.recipient
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: [this.props.request.approvalCount, "/", this.props.approversCount]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {
            loading: this.state.loadingApprove,
            color: "green",
            basic: true,
            onClick: this.onApprove,
            children: "Approve"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 23
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {
            loading: this.state.loadingFinalize,
            color: "teal",
            onClick: this.onFinalize,
            children: "Finalize"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 23
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, this);
    }
  }]);

  return RequestRow;
}(react__WEBPACK_IMPORTED_MODULE_10__.Component);

/* harmony default export */ __webpack_exports__["default"] = (RequestRow);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXF1ZXN0Um93LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RSb3ciLCJsb2FkaW5nQXBwcm92ZSIsImxvYWRpbmdGaW5hbGl6ZSIsImVycm9yTWVzc2FnZSIsInNldFN0YXRlIiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsIndlYjMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJSb3V0ZXIiLCJtZXNzYWdlIiwiYWxlcnQiLCJzdGF0ZSIsImZpbmFsaXplUmVxdWVzdCIsIlJvdyIsIlRhYmxlIiwiQ2VsbCIsInJlcXVlc3QiLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwicmVjaXBpZW50IiwiYXBwcm92YWxDb3VudCIsImFwcHJvdmVyc0NvdW50Iiwib25BcHByb3ZlIiwib25GaW5hbGl6ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBQ01BLFU7Ozs7Ozs7Ozs7Ozs7Ozs7c1hBQ007QUFDSkMsb0JBQWMsRUFBQyxLQURYO0FBRUpDLHFCQUFlLEVBQUMsS0FGWjtBQUdKQyxrQkFBWSxFQUFDO0FBSFQsSzs7cXVCQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSLG9CQUFLQyxRQUFMLENBQWM7QUFBQ0gsOEJBQWMsRUFBQztBQUFoQixlQUFkOztBQUNNSSxzQkFGRSxHQUVTQyw0REFBUSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0MsT0FBWixDQUZqQjtBQUFBO0FBQUE7QUFBQSxxQkFJbUJDLG9FQUFBLEVBSm5COztBQUFBO0FBSUVDLHNCQUpGO0FBQUE7QUFBQSxxQkFLRUwsUUFBUSxDQUFDTSxPQUFULENBQWlCQyxjQUFqQixDQUFnQyxNQUFLTCxLQUFMLENBQVdNLEVBQTNDLEVBQStD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QUFRLG1CQUFPLEVBQUUsS0FBS1gsS0FBTCxDQUFXakIsZUFBNUI7QUFBNkMsaUJBQUssRUFBQyxNQUFuRDtBQUEwRCxtQkFBTyxFQUFFLEtBQUs2QixVQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFZSDs7OztFQWxEb0JDLDZDOztBQXFEekIsK0RBQWVoQyxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy40YTE3NWIwZTI4NGJiYmJlMzE5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1RhYmxlLEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnXHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9jYW1wYWlnbicgXHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICcuLi9yb3V0ZXMnXHJcbmNsYXNzIFJlcXVlc3RSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgbG9hZGluZ0FwcHJvdmU6ZmFsc2UsXHJcbiAgICAgICAgbG9hZGluZ0ZpbmFsaXplOmZhbHNlLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTpcIlwiXHJcbiAgICB9XHJcbiAgICBvbkFwcHJvdmUgPSBhc3luYyAoKSA9PntcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nQXBwcm92ZTp0cnVlfSlcclxuICAgICAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHRoaXMucHJvcHMuYWRkcmVzcylcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKVxyXG4gICAgICAgICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVSZXF1ZXN0KHRoaXMucHJvcHMuaWQpLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZnJvbTphY2NvdW50c1swXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2ApXHJcbiAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTplcnIubWVzc2FnZX0pXHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nQXBwcm92ZTpmYWxzZX0pXHJcbiAgICB9XHJcbiAgICBvbkZpbmFsaXplID1hc3luYyAoKT0+e1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmdGaW5hbGl6ZTp0cnVlfSlcclxuICAgICAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHRoaXMucHJvcHMuYWRkcmVzcylcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKVxyXG4gICAgICAgICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmZpbmFsaXplUmVxdWVzdCh0aGlzLnByb3BzLmlkKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGZyb206YWNjb3VudHNbMF1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgUm91dGVyLnJlcGxhY2VSb3V0ZShgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHNgKVxyXG4gICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvck1lc3NhZ2U6ZXJyLm1lc3NhZ2V9KVxyXG4gICAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZ0ZpbmFsaXplOmZhbHNlfSlcclxuICAgIH1cclxuICAgIHJlbmRlciAoKXtcclxuICAgICAgICBjb25zdCB7Um93LENlbGx9ID0gVGFibGVcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENlbGw+e3RoaXMucHJvcHMuaWR9PC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+e3RoaXMucHJvcHMucmVxdWVzdC5kZXNjcmlwdGlvbn08L0NlbGw+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD57d2ViMy51dGlscy5mcm9tV2VpKHRoaXMucHJvcHMucmVxdWVzdC52YWx1ZSwnZXRoZXInKX0gKEVUSCk8L0NlbGw+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD57dGhpcy5wcm9wcy5yZXF1ZXN0LnJlY2lwaWVudH08L0NlbGw+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD57dGhpcy5wcm9wcy5yZXF1ZXN0LmFwcHJvdmFsQ291bnR9L3t0aGlzLnByb3BzLmFwcHJvdmVyc0NvdW50fTwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPjxCdXR0b24gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nQXBwcm92ZX0gY29sb3I9XCJncmVlblwiIGJhc2ljIG9uQ2xpY2s9e3RoaXMub25BcHByb3ZlfT5BcHByb3ZlPC9CdXR0b24+PC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+PEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmdGaW5hbGl6ZX0gY29sb3I9XCJ0ZWFsXCIgb25DbGljaz17dGhpcy5vbkZpbmFsaXplfT5GaW5hbGl6ZTwvQnV0dG9uPjwvQ2VsbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJvdyJdLCJzb3VyY2VSb290IjoiIn0=
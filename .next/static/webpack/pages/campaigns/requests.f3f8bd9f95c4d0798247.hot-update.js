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
      loading: false,
      errorMessage: ""
    });

    (0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.default)(_this), "onApprove", /*#__PURE__*/(0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var campaign, accounts;
      return C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                loading: true
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
              console.log(_context.t0);

              _this.setState({
                errorMessage: error.message
              });

            case 15:
              _this.setState({
                loading: false
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 11]]);
    })));

    (0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.default)(_this), "onFinalize", /*#__PURE__*/(0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      return C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
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
          lineNumber: 33,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: this.props.request.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: [_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__.default.utils.fromWei(this.props.request.value, 'ether'), " (ETH)"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: this.props.request.recipient
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: [this.props.request.approvalCount, "/", this.props.approversCount]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {
            loading: this.state.loading,
            color: "green",
            basic: true,
            onClick: this.onApprove,
            children: "Approve"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 23
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {
            color: "red",
            onClick: this.onFinalize,
            children: "Finalize"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 23
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXF1ZXN0Um93LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RSb3ciLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwic2V0U3RhdGUiLCJjYW1wYWlnbiIsIkNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwid2ViMyIsImFjY291bnRzIiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsIlJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1lc3NhZ2UiLCJSb3ciLCJUYWJsZSIsIkNlbGwiLCJyZXF1ZXN0IiwiZGVzY3JpcHRpb24iLCJ2YWx1ZSIsInJlY2lwaWVudCIsImFwcHJvdmFsQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsInN0YXRlIiwib25BcHByb3ZlIiwib25GaW5hbGl6ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBQ01BLFU7Ozs7Ozs7Ozs7Ozs7Ozs7c1hBQ007QUFDSkMsYUFBTyxFQUFDLEtBREo7QUFFSkMsa0JBQVksRUFBQztBQUZULEs7O3F1QkFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUixvQkFBS0MsUUFBTCxDQUFjO0FBQUNGLHVCQUFPLEVBQUM7QUFBVCxlQUFkOztBQUNNRyxzQkFGRSxHQUVTQyw0REFBUSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0MsT0FBWixDQUZqQjtBQUFBO0FBQUE7QUFBQSxxQkFJbUJDLG9FQUFBLEVBSm5COztBQUFBO0FBSUVDLHNCQUpGO0FBQUE7QUFBQSxxQkFLRUwsUUFBUSxDQUFDTSxPQUFULENBQWlCQyxjQUFqQixDQUFnQyxNQUFLTCxLQUFMLENBQVdNLEVBQTNDLEVBQStDQyxJQUEvQyxDQUFvRDtBQUN0REMsb0JBQUksRUFBQ0wsUUFBUSxDQUFDLENBQUQ7QUFEeUMsZUFBcEQsQ0FMRjs7QUFBQTtBQVFKTSx1RUFBQSxzQkFBa0MsTUFBS1QsS0FBTCxDQUFXQyxPQUE3QztBQVJJO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBVUpTLHFCQUFPLENBQUNDLEdBQVI7O0FBQ0Esb0JBQUtkLFFBQUwsQ0FBYztBQUFDRCw0QkFBWSxFQUFDZ0IsS0FBSyxDQUFDQztBQUFwQixlQUFkOztBQVhJO0FBYVIsb0JBQUtoQixRQUFMLENBQWM7QUFBQ0YsdUJBQU8sRUFBQztBQUFULGVBQWQ7O0FBYlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSzs7c3VCQWVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSzs7Ozs7Ozs2QkFHSDtBQUFBLFVBQ0VtQixHQURGLEdBQ2NDLHlEQURkO0FBQUEsVUFDTUMsSUFETixHQUNjRCwwREFEZDtBQUVMLDBCQUNJLDhEQUFDLEdBQUQ7QUFBQSxnQ0FDSSw4REFBQyxJQUFEO0FBQUEsb0JBQU8sS0FBS2YsS0FBTCxDQUFXTTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUksOERBQUMsSUFBRDtBQUFBLG9CQUFPLEtBQUtOLEtBQUwsQ0FBV2lCLE9BQVgsQ0FBbUJDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSSw4REFBQyxJQUFEO0FBQUEscUJBQU9oQixrRUFBQSxDQUFtQixLQUFLRixLQUFMLENBQVdpQixPQUFYLENBQW1CRSxLQUF0QyxFQUE0QyxPQUE1QyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQUlJLDhEQUFDLElBQUQ7QUFBQSxvQkFBTyxLQUFLbkIsS0FBTCxDQUFXaUIsT0FBWCxDQUFtQkc7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQUtJLDhEQUFDLElBQUQ7QUFBQSxxQkFBTyxLQUFLcEIsS0FBTCxDQUFXaUIsT0FBWCxDQUFtQkksYUFBMUIsT0FBMEMsS0FBS3JCLEtBQUwsQ0FBV3NCLGNBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSixlQU1JLDhEQUFDLElBQUQ7QUFBQSxpQ0FBTSw4REFBQyxzREFBRDtBQUFRLG1CQUFPLEVBQUUsS0FBS0MsS0FBTCxDQUFXNUIsT0FBNUI7QUFBcUMsaUJBQUssRUFBQyxPQUEzQztBQUFtRCxpQkFBSyxNQUF4RDtBQUF5RCxtQkFBTyxFQUFFLEtBQUs2QixTQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkosZUFPSSw4REFBQyxJQUFEO0FBQUEsaUNBQU0sOERBQUMsc0RBQUQ7QUFBUSxpQkFBSyxFQUFDLEtBQWQ7QUFBb0IsbUJBQU8sRUFBRSxLQUFLQyxVQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFXSDs7OztFQXBDb0JDLDZDOztBQXVDekIsK0RBQWVoQyxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy5mM2Y4YmQ5Zjk1YzRkMDc5ODI0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1RhYmxlLEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnXHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9jYW1wYWlnbicgXHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICcuLi9yb3V0ZXMnXHJcbmNsYXNzIFJlcXVlc3RSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgbG9hZGluZzpmYWxzZSxcclxuICAgICAgICBlcnJvck1lc3NhZ2U6XCJcIlxyXG4gICAgfVxyXG4gICAgb25BcHByb3ZlID0gYXN5bmMgKCkgPT57XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzp0cnVlfSlcclxuICAgICAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHRoaXMucHJvcHMuYWRkcmVzcylcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKVxyXG4gICAgICAgICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVSZXF1ZXN0KHRoaXMucHJvcHMuaWQpLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZnJvbTphY2NvdW50c1swXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2ApXHJcbiAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JNZXNzYWdlOmVycm9yLm1lc3NhZ2V9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlfSlcclxuICAgIH1cclxuICAgIG9uRmluYWxpemUgPWFzeW5jICgpPT57XHJcblxyXG4gICAgfVxyXG4gICAgcmVuZGVyICgpe1xyXG4gICAgICAgIGNvbnN0IHtSb3csQ2VsbH0gPSBUYWJsZVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD57dGhpcy5wcm9wcy5pZH08L0NlbGw+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD57dGhpcy5wcm9wcy5yZXF1ZXN0LmRlc2NyaXB0aW9ufTwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPnt3ZWIzLnV0aWxzLmZyb21XZWkodGhpcy5wcm9wcy5yZXF1ZXN0LnZhbHVlLCdldGhlcicpfSAoRVRIKTwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPnt0aGlzLnByb3BzLnJlcXVlc3QucmVjaXBpZW50fTwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPnt0aGlzLnByb3BzLnJlcXVlc3QuYXBwcm92YWxDb3VudH0ve3RoaXMucHJvcHMuYXBwcm92ZXJzQ291bnR9PC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+PEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGNvbG9yPVwiZ3JlZW5cIiBiYXNpYyBvbkNsaWNrPXt0aGlzLm9uQXBwcm92ZX0+QXBwcm92ZTwvQnV0dG9uPjwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPjxCdXR0b24gY29sb3I9XCJyZWRcIiBvbkNsaWNrPXt0aGlzLm9uRmluYWxpemV9PkZpbmFsaXplPC9CdXR0b24+PC9DZWxsPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3ciXSwic291cmNlUm9vdCI6IiJ9
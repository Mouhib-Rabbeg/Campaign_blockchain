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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
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

    (0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.default)(_this), "onApprove", /*#__PURE__*/(0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      return C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              alert('dsd');

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
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
      var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Table.Row,
          Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Table.Cell;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: this.props.id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: this.props.request.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: [_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__.default.utils.fromWei(this.props.request.value, 'ether'), " (ETH)"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: this.props.request.recipient
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: [this.props.request.approvalCount, "/", this.props.approversCount]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Button, {
            color: "green",
            basic: true,
            onClick: this.onApprove,
            children: "Approve"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 23
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Button, {
            color: "red",
            onClick: this.onFinalize,
            children: "Finalize"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 23
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXF1ZXN0Um93LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RSb3ciLCJhbGVydCIsIlJvdyIsIlRhYmxlIiwiQ2VsbCIsInByb3BzIiwiaWQiLCJyZXF1ZXN0IiwiZGVzY3JpcHRpb24iLCJ3ZWIzIiwidmFsdWUiLCJyZWNpcGllbnQiLCJhcHByb3ZhbENvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJvbkFwcHJvdmUiLCJvbkZpbmFsaXplIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUNNQSxVOzs7Ozs7Ozs7Ozs7Ozs7O3F1QkFDVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JDLG1CQUFLLENBQUMsS0FBRCxDQUFMOztBQURRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEs7O3N1QkFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEs7Ozs7Ozs7NkJBR0g7QUFBQSxVQUNFQyxHQURGLEdBQ2NDLHlEQURkO0FBQUEsVUFDTUMsSUFETixHQUNjRCwwREFEZDtBQUVMLDBCQUNJLDhEQUFDLEdBQUQ7QUFBQSxnQ0FDSSw4REFBQyxJQUFEO0FBQUEsb0JBQU8sS0FBS0UsS0FBTCxDQUFXQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUksOERBQUMsSUFBRDtBQUFBLG9CQUFPLEtBQUtELEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJLDhEQUFDLElBQUQ7QUFBQSxxQkFBT0Msa0VBQUEsQ0FBbUIsS0FBS0osS0FBTCxDQUFXRSxPQUFYLENBQW1CRyxLQUF0QyxFQUE0QyxPQUE1QyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQUlJLDhEQUFDLElBQUQ7QUFBQSxvQkFBTyxLQUFLTCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJJO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkosZUFLSSw4REFBQyxJQUFEO0FBQUEscUJBQU8sS0FBS04sS0FBTCxDQUFXRSxPQUFYLENBQW1CSyxhQUExQixPQUEwQyxLQUFLUCxLQUFMLENBQVdRLGNBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSixlQU1JLDhEQUFDLElBQUQ7QUFBQSxpQ0FBTSw4REFBQyxzREFBRDtBQUFRLGlCQUFLLEVBQUMsT0FBZDtBQUFzQixpQkFBSyxNQUEzQjtBQUE0QixtQkFBTyxFQUFFLEtBQUtDLFNBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOSixlQU9JLDhEQUFDLElBQUQ7QUFBQSxpQ0FBTSw4REFBQyxzREFBRDtBQUFRLGlCQUFLLEVBQUMsS0FBZDtBQUFvQixtQkFBTyxFQUFFLEtBQUtDLFVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQVdIOzs7O0VBcEJvQkMsNkM7O0FBdUJ6QiwrREFBZWhCLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzLjJhNzc1ZDVlMTg5NTI5YWNmZDc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7VGFibGUsQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMydcclxuY2xhc3MgUmVxdWVzdFJvdyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBvbkFwcHJvdmUgPSBhc3luYyAoKSA9PntcclxuICAgICAgICBhbGVydCgnZHNkJylcclxuICAgIH1cclxuICAgIG9uRmluYWxpemUgPWFzeW5jICgpPT57XHJcblxyXG4gICAgfVxyXG4gICAgcmVuZGVyICgpe1xyXG4gICAgICAgIGNvbnN0IHtSb3csQ2VsbH0gPSBUYWJsZVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD57dGhpcy5wcm9wcy5pZH08L0NlbGw+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD57dGhpcy5wcm9wcy5yZXF1ZXN0LmRlc2NyaXB0aW9ufTwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPnt3ZWIzLnV0aWxzLmZyb21XZWkodGhpcy5wcm9wcy5yZXF1ZXN0LnZhbHVlLCdldGhlcicpfSAoRVRIKTwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPnt0aGlzLnByb3BzLnJlcXVlc3QucmVjaXBpZW50fTwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPnt0aGlzLnByb3BzLnJlcXVlc3QuYXBwcm92YWxDb3VudH0ve3RoaXMucHJvcHMuYXBwcm92ZXJzQ291bnR9PC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+PEJ1dHRvbiBjb2xvcj1cImdyZWVuXCIgYmFzaWMgb25DbGljaz17dGhpcy5vbkFwcHJvdmV9PkFwcHJvdmU8L0J1dHRvbj48L0NlbGw+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD48QnV0dG9uIGNvbG9yPVwicmVkXCIgb25DbGljaz17dGhpcy5vbkZpbmFsaXplfT5GaW5hbGl6ZTwvQnV0dG9uPjwvQ2VsbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0Um93Il0sInNvdXJjZVJvb3QiOiIifQ==
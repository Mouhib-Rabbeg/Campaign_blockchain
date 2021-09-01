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
/* harmony import */ var C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\Mouhib\\Desktop\\Desktop\\blockchain\\campaign_blochain\\components\\requestRow.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var RequestRow = /*#__PURE__*/function (_Component) {
  (0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(RequestRow, _Component);

  var _super = _createSuper(RequestRow);

  function RequestRow() {
    (0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, RequestRow);

    return _super.apply(this, arguments);
  }

  (0,C_Users_Mouhib_Desktop_Desktop_blockchain_campaign_blochain_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(RequestRow, [{
    key: "onApprove",
    value: function onApprove() {
      alert('dsd');
    }
  }, {
    key: "onFinalize",
    value: function onFinalize() {}
  }, {
    key: "render",
    value: function render() {
      var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.Row,
          Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.Cell;
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
          children: [_ethereum_web3__WEBPACK_IMPORTED_MODULE_7__.default.utils.fromWei(this.props.request.value, 'ether'), " (ETH)"]
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
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
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
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
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
}(react__WEBPACK_IMPORTED_MODULE_6__.Component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXF1ZXN0Um93LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RSb3ciLCJhbGVydCIsIlJvdyIsIlRhYmxlIiwiQ2VsbCIsInByb3BzIiwiaWQiLCJyZXF1ZXN0IiwiZGVzY3JpcHRpb24iLCJ3ZWIzIiwidmFsdWUiLCJyZWNpcGllbnQiLCJhcHByb3ZhbENvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJvbkFwcHJvdmUiLCJvbkZpbmFsaXplIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUNNQSxVOzs7Ozs7Ozs7Ozs7O2dDQUNVO0FBQ1JDLFdBQUssQ0FBQyxLQUFELENBQUw7QUFDSDs7O2lDQUNXLENBRVg7Ozs2QkFDUTtBQUFBLFVBQ0VDLEdBREYsR0FDY0Msd0RBRGQ7QUFBQSxVQUNNQyxJQUROLEdBQ2NELHlEQURkO0FBRUwsMEJBQ0ksOERBQUMsR0FBRDtBQUFBLGdDQUNJLDhEQUFDLElBQUQ7QUFBQSxvQkFBTyxLQUFLRSxLQUFMLENBQVdDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSw4REFBQyxJQUFEO0FBQUEsb0JBQU8sS0FBS0QsS0FBTCxDQUFXRSxPQUFYLENBQW1CQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0ksOERBQUMsSUFBRDtBQUFBLHFCQUFPQyxpRUFBQSxDQUFtQixLQUFLSixLQUFMLENBQVdFLE9BQVgsQ0FBbUJHLEtBQXRDLEVBQTRDLE9BQTVDLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBSUksOERBQUMsSUFBRDtBQUFBLG9CQUFPLEtBQUtMLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkk7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQUtJLDhEQUFDLElBQUQ7QUFBQSxxQkFBTyxLQUFLTixLQUFMLENBQVdFLE9BQVgsQ0FBbUJLLGFBQTFCLE9BQTBDLEtBQUtQLEtBQUwsQ0FBV1EsY0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKLGVBTUksOERBQUMsSUFBRDtBQUFBLGlDQUFNLDhEQUFDLHFEQUFEO0FBQVEsaUJBQUssRUFBQyxPQUFkO0FBQXNCLGlCQUFLLE1BQTNCO0FBQTRCLG1CQUFPLEVBQUUsS0FBS0MsU0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KLGVBT0ksOERBQUMsSUFBRDtBQUFBLGlDQUFNLDhEQUFDLHFEQUFEO0FBQVEsaUJBQUssRUFBQyxLQUFkO0FBQW9CLG1CQUFPLEVBQUUsS0FBS0MsVUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBV0g7Ozs7RUFwQm9CQyw0Qzs7QUF1QnpCLCtEQUFlaEIsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMuMTk0M2U4YTQ2MDVlNjc4ODkyOTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtUYWJsZSxCdXR0b259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJ1xyXG5jbGFzcyBSZXF1ZXN0Um93IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIG9uQXBwcm92ZSAoKXtcclxuICAgICAgICBhbGVydCgnZHNkJylcclxuICAgIH1cclxuICAgIG9uRmluYWxpemUoKXtcclxuXHJcbiAgICB9XHJcbiAgICByZW5kZXIgKCl7XHJcbiAgICAgICAgY29uc3Qge1JvdyxDZWxsfSA9IFRhYmxlXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDZWxsPnt0aGlzLnByb3BzLmlkfTwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPnt0aGlzLnByb3BzLnJlcXVlc3QuZGVzY3JpcHRpb259PC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+e3dlYjMudXRpbHMuZnJvbVdlaSh0aGlzLnByb3BzLnJlcXVlc3QudmFsdWUsJ2V0aGVyJyl9IChFVEgpPC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+e3RoaXMucHJvcHMucmVxdWVzdC5yZWNpcGllbnR9PC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+e3RoaXMucHJvcHMucmVxdWVzdC5hcHByb3ZhbENvdW50fS97dGhpcy5wcm9wcy5hcHByb3ZlcnNDb3VudH08L0NlbGw+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD48QnV0dG9uIGNvbG9yPVwiZ3JlZW5cIiBiYXNpYyBvbkNsaWNrPXt0aGlzLm9uQXBwcm92ZX0+QXBwcm92ZTwvQnV0dG9uPjwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPjxCdXR0b24gY29sb3I9XCJyZWRcIiBvbkNsaWNrPXt0aGlzLm9uRmluYWxpemV9PkZpbmFsaXplPC9CdXR0b24+PC9DZWxsPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3ciXSwic291cmNlUm9vdCI6IiJ9
webpackHotUpdate_N_E("pages/backend_host_controller",{

/***/ "./pages/backend_host_controller.js":
/*!******************************************!*\
  !*** ./pages/backend_host_controller.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.js\");\n/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-cookies */ \"./node_modules/next-cookies/index.js\");\n/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _services_apiservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/apiservice */ \"./services/apiservice.js\");\n/* harmony import */ var _services_projectservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/projectservice */ \"./services/projectservice.js\");\n/* harmony import */ var _components_backend_taskmanager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/backend/taskmanager */ \"./components/backend/taskmanager.js\");\n\n\n\nvar _jsxFileName = \"/Users/williamforte/Canvas/burkedeveloping/pages/backend_host_controller.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\nfunction Backend(_ref) {\n  _s();\n\n  var getFirstLoad = _ref.getFirstLoad;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      file = _useState[0],\n      setFile = _useState[1];\n\n  var uploadImage = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function uploadImage(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var handleFileChange = function handleFileChange(e) {\n    setFile(URL.createObjectURL(e.target.files[0]));\n  };\n\n  return __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"1671647213\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy]]]) + \" \" + 'body',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    id: \"body_bg\",\n    src: \"/bg_login.png\",\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"1671647213\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    id: \"abovelayer\",\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"1671647213\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, __jsx(_components_backend_taskmanager__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    getFirstLoad: getFirstLoad,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"1671647213\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy]]]) + \" \" + 'imageupload',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, __jsx(\"form\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"1671647213\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: file ? file : '/noimage.png',\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"1671647213\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 25\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"fileid\",\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"1671647213\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 25\n    }\n  }, \"Upload Image\"), __jsx(\"input\", {\n    id: \"fileid\",\n    type: \"file\",\n    onChange: handleFileChange,\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"1671647213\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 25\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"1671647213\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 25\n    }\n  }, \"Upload File\")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    id: \"1671647213\",\n    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy],\n    __self: this\n  }, \".imageupload.__jsx-style-dynamic-selector{float:left;width:23%;margin:20px 1%;position:relative;border-radius:8px;overflow:hidden;}.imageupload.__jsx-style-dynamic-selector form.__jsx-style-dynamic-selector{width:100%;float:left;}.imageupload.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector{width:80%;margin:10px 10%;background:\".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, \";}.imageupload.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:100%;float:left;}#fileid.__jsx-style-dynamic-selector{display:none;}.body.__jsx-style-dynamic-selector{float:left;width:100%;height:100%;z-index:1;overflow:hidden;}#abovelayer.__jsx-style-dynamic-selector{float:left;width:100%;height:100%;z-index:99;position:relative;margin-top:80px;}#body_bg.__jsx-style-dynamic-selector{width:100%;z-index:-20;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%) scale(1.1,1.1);-ms-transform:translate(-50%,-50%) scale(1.1,1.1);transform:translate(-50%,-50%) scale(1.1,1.1);}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtZm9ydGUvQ2FudmFzL2J1cmtlZGV2ZWxvcGluZy9wYWdlcy9iYWNrZW5kX2hvc3RfY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ3dCLEFBR2dDLEFBUUEsQUFJRCxBQUtDLEFBSUUsQUFHRixBQU9BLEFBUUEsVUExQkssQ0FaTixBQVFDLEFBU0EsQUFPQSxBQU9BLEFBUUMsRUFsQmhCLFFBcEJtQixDQVFuQixBQVNBLEFBT2dCLEFBT0EsQ0FRTSxHQTNCc0IsUUFhOUIsQUFPQyxFQS9CTyxLQXVDVixHQWRRLENBT0UsSUFRVCxLQXZDUyxJQXdDNkIsRUFmbkQsR0FPb0IsR0FyQnBCLE1BVm9CLE9BZ0NwQixTQS9CQSx3SEF1Q0EiLCJmaWxlIjoiL1VzZXJzL3dpbGxpYW1mb3J0ZS9DYW52YXMvYnVya2VkZXZlbG9waW5nL3BhZ2VzL2JhY2tlbmRfaG9zdF9jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCBuZXh0Q29va2llIGZyb20gJ25leHQtY29va2llcydcbmltcG9ydCB7ICB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaXNlcnZpY2UnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gJy4uL3NlcnZpY2VzL3Byb2plY3RzZXJ2aWNlJ1xuaW1wb3J0IFRhc2tNYW5hZ2VyLCB7Y29tcGFyZX0gZnJvbSAnLi4vY29tcG9uZW50cy9iYWNrZW5kL3Rhc2ttYW5hZ2VyJ1xuXG5mdW5jdGlvbiBCYWNrZW5kKHtnZXRGaXJzdExvYWR9KSB7XG5cbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgY29uc3QgdXBsb2FkSW1hZ2UgPSBhc3luYyhlKSA9PiB7XG5cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0RmlsZShVUkwuY3JlYXRlT2JqZWN0VVJMKGUudGFyZ2V0LmZpbGVzWzBdKSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keSc+XG4gICAgICAgICAgICA8aW1nIGlkPSdib2R5X2JnJyBzcmM9Jy9iZ19sb2dpbi5wbmcnLz5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhYm92ZWxheWVyXCI+XG4gICAgICAgICAgICAgICAgPFRhc2tNYW5hZ2VyIGdldEZpcnN0TG9hZD17Z2V0Rmlyc3RMb2FkfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZXVwbG9hZCc+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ZpbGUgPyBmaWxlOiAnL25vaW1hZ2UucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdmaWxlaWQnPlVwbG9hZCBJbWFnZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J2ZpbGVpZCcgdHlwZT0nZmlsZScgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+VXBsb2FkIEZpbGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmltYWdldXBsb2FkIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMyU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAxJTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbWFnZXVwbG9hZCBmb3JtIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW1hZ2V1cGxvYWQgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMTAlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLmNvbG9ycy5vbnh5fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmltYWdldXBsb2FkIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI2ZpbGVpZCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7IFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjYWJvdmVsYXllciB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjYm9keV9iZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMjA7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS4xLDEuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbkJhY2tlbmQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMoY3R4KSA9PiB7XG4gICAgY29uc3QgY29va2llcyA9IGF3YWl0IG5leHRDb29raWUoY3R4KVxuICAgIGNvbnN0IGdldGZpcnN0dGFza3MgPSBhd2FpdCBnZXRUYXNrcyg1MCwgY29va2llcy5hY2Nlc3NUb2tlbilcbiAgICBpZihnZXRmaXJzdHRhc2tzID09ICdOb3QgQXV0aG9yaXplZCcpIHtcbiAgICAgICAgaWYgKGN0eC5yZXMpIHtcbiAgICAgICAgICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMSwge1xuICAgICAgICAgICAgICBMb2NhdGlvbjogJy9sb2dpbidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY3R4LnJlcy5lbmQoKTtcbiAgICAgICAgfSBcbiAgICB9XG4gICAgZ2V0Zmlyc3R0YXNrcy5zb3J0KGNvbXBhcmUoJ3N0YXR1cycpKVxuICAgIHJldHVybiB7Z2V0Rmlyc3RMb2FkOiBnZXRmaXJzdHRhc2tzfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZW5kIl19 */\\n/*@ sourceURL=/Users/williamforte/Canvas/burkedeveloping/pages/backend_host_controller.js */\")));\n}\n\n_s(Backend, \"Nkb8eHkBruGouXteoqeZ1R6wRVk=\");\n\n_c = Backend;\n\nBackend.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ctx) {\n    var cookies, getfirsttasks;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return next_cookies__WEBPACK_IMPORTED_MODULE_5___default()(ctx);\n\n          case 2:\n            cookies = _context2.sent;\n            _context2.next = 5;\n            return getTasks(50, cookies.accessToken);\n\n          case 5:\n            getfirsttasks = _context2.sent;\n\n            if (getfirsttasks == 'Not Authorized') {\n              if (ctx.res) {\n                ctx.res.writeHead(301, {\n                  Location: '/login'\n                });\n                ctx.res.end();\n              }\n            }\n\n            getfirsttasks.sort(Object(_components_backend_taskmanager__WEBPACK_IMPORTED_MODULE_8__[\"compare\"])('status'));\n            return _context2.abrupt(\"return\", {\n              getFirstLoad: getfirsttasks\n            });\n\n          case 9:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x2) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Backend);\n\nvar _c;\n\n$RefreshReg$(_c, \"Backend\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmFja2VuZF9ob3N0X2NvbnRyb2xsZXIuanM/ZmUxYyJdLCJuYW1lcyI6WyJCYWNrZW5kIiwiZ2V0Rmlyc3RMb2FkIiwidXNlU3RhdGUiLCJmaWxlIiwic2V0RmlsZSIsInVwbG9hZEltYWdlIiwiZSIsImhhbmRsZUZpbGVDaGFuZ2UiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ0YXJnZXQiLCJmaWxlcyIsIlRoZW1lIiwiY29sb3JzIiwib254eSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIm5leHRDb29raWUiLCJjb29raWVzIiwiZ2V0VGFza3MiLCJhY2Nlc3NUb2tlbiIsImdldGZpcnN0dGFza3MiLCJyZXMiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsInNvcnQiLCJjb21wYXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULE9BQWlDO0FBQUE7O0FBQUEsTUFBZkMsWUFBZSxRQUFmQSxZQUFlOztBQUFBLGtCQUVMQyxzREFBUSxDQUFDLElBQUQsQ0FGSDtBQUFBLE1BRXRCQyxJQUZzQjtBQUFBLE1BRWhCQyxPQUZnQjs7QUFJN0IsTUFBTUMsV0FBVztBQUFBLGlNQUFHLGlCQUFNQyxDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWEQsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFJQSxNQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNELENBQUQsRUFBTztBQUM1QkYsV0FBTyxDQUFDSSxHQUFHLENBQUNDLGVBQUosQ0FBb0JILENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFwQixDQUFELENBQVA7QUFDSCxHQUZEOztBQUlBLFNBQ0k7QUFBQSxnR0E2QjBCQyxxREFB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cGFnZXMvYmFja2VuZF9ob3N0X2NvbnRyb2xsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IG5leHRDb29raWUgZnJvbSAnbmV4dC1jb29raWVzJ1xuaW1wb3J0IHsgIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpc2VydmljZSdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSAnLi4vc2VydmljZXMvcHJvamVjdHNlcnZpY2UnXG5pbXBvcnQgVGFza01hbmFnZXIsIHtjb21wYXJlfSBmcm9tICcuLi9jb21wb25lbnRzL2JhY2tlbmQvdGFza21hbmFnZXInXG5cbmZ1bmN0aW9uIEJhY2tlbmQoe2dldEZpcnN0TG9hZH0pIHtcblxuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICBjb25zdCB1cGxvYWRJbWFnZSA9IGFzeW5jKGUpID0+IHtcblxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRGaWxlKFVSTC5jcmVhdGVPYmplY3RVUkwoZS50YXJnZXQuZmlsZXNbMF0pKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2R5Jz5cbiAgICAgICAgICAgIDxpbWcgaWQ9J2JvZHlfYmcnIHNyYz0nL2JnX2xvZ2luLnBuZycvPlxuICAgICAgICAgICAgPGRpdiBpZD1cImFib3ZlbGF5ZXJcIj5cbiAgICAgICAgICAgICAgICA8VGFza01hbmFnZXIgZ2V0Rmlyc3RMb2FkPXtnZXRGaXJzdExvYWR9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdldXBsb2FkJz5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZmlsZSA/IGZpbGU6ICcvbm9pbWFnZS5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2ZpbGVpZCc+VXBsb2FkIEltYWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nZmlsZWlkJyB0eXBlPSdmaWxlJyBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5VcGxvYWQgRmlsZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaW1hZ2V1cGxvYWQge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIzJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDElO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmltYWdldXBsb2FkIGZvcm0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbWFnZXVwbG9hZCBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMCU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuY29sb3JzLm9ueHl9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW1hZ2V1cGxvYWQgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjZmlsZWlkIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJvZHkge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDsgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICNhYm92ZWxheWVyIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICNib2R5X2JnIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0yMDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjEsMS4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuQmFja2VuZC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyhjdHgpID0+IHtcbiAgICBjb25zdCBjb29raWVzID0gYXdhaXQgbmV4dENvb2tpZShjdHgpXG4gICAgY29uc3QgZ2V0Zmlyc3R0YXNrcyA9IGF3YWl0IGdldFRhc2tzKDUwLCBjb29raWVzLmFjY2Vzc1Rva2VuKVxuICAgIGlmKGdldGZpcnN0dGFza3MgPT0gJ05vdCBBdXRob3JpemVkJykge1xuICAgICAgICBpZiAoY3R4LnJlcykge1xuICAgICAgICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAxLCB7XG4gICAgICAgICAgICAgIExvY2F0aW9uOiAnL2xvZ2luJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjdHgucmVzLmVuZCgpO1xuICAgICAgICB9IFxuICAgIH1cbiAgICBnZXRmaXJzdHRhc2tzLnNvcnQoY29tcGFyZSgnc3RhdHVzJykpXG4gICAgcmV0dXJuIHtnZXRGaXJzdExvYWQ6IGdldGZpcnN0dGFza3N9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/backend_host_controller.js\n");

/***/ })

})
webpackHotUpdate_N_E("pages/backend_host_controller",{

/***/ "./components/banner.js":
false,

/***/ "./components/hooks.js":
false,

/***/ "./pages/backend_host_controller.js":
/*!******************************************!*\
  !*** ./pages/backend_host_controller.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.js\");\n/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-cookies */ \"./node_modules/next-cookies/index.js\");\n/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _services_apiservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/apiservice */ \"./services/apiservice.js\");\n\n\nvar _jsxFileName = \"/Users/williamforte/Canvas/burkedeveloping/pages/backend_host_controller.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\nvar sortingOrder = {\n  'inprogress': 1,\n  'created': 2,\n  'done': 3\n};\n\nfunction compare(key) {\n  var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';\n  return function (a, b) {\n    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;\n    var first = a[key].toLowerCase() in sortingOrder ? sortingOrder[a[key]] : Number.MAX_SAFE_INTEGER;\n    var second = b[key].toLowerCase() in sortingOrder ? sortingOrder[b[key]] : Number.MAX_SAFE_INTEGER;\n    var result = 0;\n    if (first < second) result = -1;else if (first > second) result = 1;\n    return order === 'desc' ? ~result : result;\n  };\n}\n\nfunction Backend(_ref) {\n  var getFirstLoad = _ref.getFirstLoad;\n  return __jsx(\"div\", {\n    className: \"jsx-3315303781\" + \" \" + 'body',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    id: \"body_bg\",\n    src: \"/bg_login.png\",\n    className: \"jsx-3315303781\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    id: \"abovelayer\",\n    className: \"jsx-3315303781\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    id: \"3315303781\",\n    __self: this\n  }, \".body.jsx-3315303781{float:left;width:100%;height:100%;z-index:1;overflow:hidden;}#body_bg.jsx-3315303781{width:100%;z-index:-20;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%) scale(1.1,1.1);-ms-transform:translate(-50%,-50%) scale(1.1,1.1);transform:translate(-50%,-50%) scale(1.1,1.1);}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtZm9ydGUvQ2FudmFzL2J1cmtlZGV2ZWxvcGluZy9wYWdlcy9iYWNrZW5kX2hvc3RfY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ3dCLEFBR2dDLEFBT0EsV0FOQSxBQU9DLFdBTkEsQ0FPTSxXQU5SLE9BT0YsR0FOUSxLQU9QLFNBQ3NDLEVBUG5ELG9KQVFBIiwiZmlsZSI6Ii9Vc2Vycy93aWxsaWFtZm9ydGUvQ2FudmFzL2J1cmtlZGV2ZWxvcGluZy9wYWdlcy9iYWNrZW5kX2hvc3RfY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5pbXBvcnQgbmV4dENvb2tpZSBmcm9tICduZXh0LWNvb2tpZXMnXG5pbXBvcnQgeyBjcmVhdGVUYXNrLCBnZXRUYXNrcywgcmVtb3ZlVGFzaywgdXBkYXRlVGFza1N0YXR1cyB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaXNlcnZpY2UnXG5cbmNvbnN0IHNvcnRpbmdPcmRlciA9IHtcbiAgICAnaW5wcm9ncmVzcyc6IDEsXG4gICAgJ2NyZWF0ZWQnOiAyLFxuICAgICdkb25lJzogM1xufVxuXG5mdW5jdGlvbiBjb21wYXJlKGtleSwgb3JkZXIgPSAnYXNjJykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoIWEuaGFzT3duUHJvcGVydHkoa2V5KSB8fCAhYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSBcblx0ICAgIHJldHVybiAwO1xuXHRcdFxuXHRjb25zdCBmaXJzdCA9IChhW2tleV0udG9Mb3dlckNhc2UoKSBpbiBzb3J0aW5nT3JkZXIpID8gc29ydGluZ09yZGVyW2Fba2V5XV0gOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcblx0Y29uc3Qgc2Vjb25kID0gKGJba2V5XS50b0xvd2VyQ2FzZSgpIGluIHNvcnRpbmdPcmRlcikgPyBzb3J0aW5nT3JkZXJbYltrZXldXSA6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuXHRcdFxuXHRsZXQgcmVzdWx0ID0gMDtcblx0aWYgKGZpcnN0IDwgc2Vjb25kKSBcblx0ICAgIHJlc3VsdCA9IC0xO1xuXHRlbHNlIGlmIChmaXJzdCA+IHNlY29uZCkgXG5cdCAgICByZXN1bHQgPSAxO1xuXHRyZXR1cm4gKG9yZGVyID09PSAnZGVzYycpID8gfnJlc3VsdCA6IHJlc3VsdFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIEJhY2tlbmQoe2dldEZpcnN0TG9hZH0pIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2R5Jz5cbiAgICAgICAgICAgIDxpbWcgaWQ9J2JvZHlfYmcnIHNyYz0nL2JnX2xvZ2luLnBuZycvPlxuICAgICAgICAgICAgPGRpdiBpZD1cImFib3ZlbGF5ZXJcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7IFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjYm9keV9iZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMjA7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS4xLDEuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbkJhY2tlbmQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMoY3R4KSA9PiB7XG4gICAgY29uc3QgY29va2llcyA9IGF3YWl0IG5leHRDb29raWUoY3R4KVxuICAgIGNvbnN0IGdldGZpcnN0dGFza3MgPSBhd2FpdCBnZXRUYXNrcyg1MCwgY29va2llcy5hY2Nlc3NUb2tlbilcbiAgICBpZihnZXRmaXJzdHRhc2tzID09ICdOb3QgQXV0aG9yaXplZCcpIHtcbiAgICAgICAgaWYgKGN0eC5yZXMpIHtcbiAgICAgICAgICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMSwge1xuICAgICAgICAgICAgICBMb2NhdGlvbjogJy9sb2dpbidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY3R4LnJlcy5lbmQoKTtcbiAgICAgICAgfSBcbiAgICB9XG4gICAgZ2V0Zmlyc3R0YXNrcy5zb3J0KGNvbXBhcmUoJ3N0YXR1cycpKVxuICAgIHJldHVybiB7Z2V0Rmlyc3RMb2FkOiBnZXRmaXJzdHRhc2tzfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZW5kIl19 */\\n/*@ sourceURL=/Users/williamforte/Canvas/burkedeveloping/pages/backend_host_controller.js */\"));\n}\n\n_c = Backend;\n\nBackend.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var cookies, getfirsttasks;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return next_cookies__WEBPACK_IMPORTED_MODULE_5___default()(ctx);\n\n          case 2:\n            cookies = _context.sent;\n            _context.next = 5;\n            return Object(_services_apiservice__WEBPACK_IMPORTED_MODULE_6__[\"getTasks\"])(50, cookies.accessToken);\n\n          case 5:\n            getfirsttasks = _context.sent;\n\n            if (getfirsttasks == 'Not Authorized') {\n              if (ctx.res) {\n                ctx.res.writeHead(301, {\n                  Location: '/login'\n                });\n                ctx.res.end();\n              }\n            }\n\n            getfirsttasks.sort(compare('status'));\n            return _context.abrupt(\"return\", {\n              getFirstLoad: getfirsttasks\n            });\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Backend);\n\nvar _c;\n\n$RefreshReg$(_c, \"Backend\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmFja2VuZF9ob3N0X2NvbnRyb2xsZXIuanM/ZmUxYyJdLCJuYW1lcyI6WyJzb3J0aW5nT3JkZXIiLCJjb21wYXJlIiwia2V5Iiwib3JkZXIiLCJhIiwiYiIsImhhc093blByb3BlcnR5IiwiZmlyc3QiLCJ0b0xvd2VyQ2FzZSIsIk51bWJlciIsIk1BWF9TQUZFX0lOVEVHRVIiLCJzZWNvbmQiLCJyZXN1bHQiLCJCYWNrZW5kIiwiZ2V0Rmlyc3RMb2FkIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwibmV4dENvb2tpZSIsImNvb2tpZXMiLCJnZXRUYXNrcyIsImFjY2Vzc1Rva2VuIiwiZ2V0Zmlyc3R0YXNrcyIsInJlcyIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwic29ydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ2pCLGdCQUFjLENBREc7QUFFakIsYUFBVyxDQUZNO0FBR2pCLFVBQVE7QUFIUyxDQUFyQjs7QUFNQSxTQUFTQyxPQUFULENBQWlCQyxHQUFqQixFQUFxQztBQUFBLE1BQWZDLEtBQWUsdUVBQVAsS0FBTztBQUNqQyxTQUFPLFVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNuQixRQUFJLENBQUNELENBQUMsQ0FBQ0UsY0FBRixDQUFpQkosR0FBakIsQ0FBRCxJQUEwQixDQUFDRyxDQUFDLENBQUNDLGNBQUYsQ0FBaUJKLEdBQWpCLENBQS9CLEVBQ0gsT0FBTyxDQUFQO0FBRUosUUFBTUssS0FBSyxHQUFJSCxDQUFDLENBQUNGLEdBQUQsQ0FBRCxDQUFPTSxXQUFQLE1BQXdCUixZQUF6QixHQUF5Q0EsWUFBWSxDQUFDSSxDQUFDLENBQUNGLEdBQUQsQ0FBRixDQUFyRCxHQUFnRU8sTUFBTSxDQUFDQyxnQkFBckY7QUFDQSxRQUFNQyxNQUFNLEdBQUlOLENBQUMsQ0FBQ0gsR0FBRCxDQUFELENBQU9NLFdBQVAsTUFBd0JSLFlBQXpCLEdBQXlDQSxZQUFZLENBQUNLLENBQUMsQ0FBQ0gsR0FBRCxDQUFGLENBQXJELEdBQWdFTyxNQUFNLENBQUNDLGdCQUF0RjtBQUVBLFFBQUlFLE1BQU0sR0FBRyxDQUFiO0FBQ0EsUUFBSUwsS0FBSyxHQUFHSSxNQUFaLEVBQ0lDLE1BQU0sR0FBRyxDQUFDLENBQVYsQ0FESixLQUVLLElBQUlMLEtBQUssR0FBR0ksTUFBWixFQUNEQyxNQUFNLEdBQUcsQ0FBVDtBQUNKLFdBQVFULEtBQUssS0FBSyxNQUFYLEdBQXFCLENBQUNTLE1BQXRCLEdBQStCQSxNQUF0QztBQUNJLEdBYkQ7QUFjSDs7QUFFRCxTQUFTQyxPQUFULE9BQWlDO0FBQUEsTUFBZkMsWUFBZSxRQUFmQSxZQUFlO0FBRTdCLFNBQ0k7QUFBQSx3Q0FBZSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE1BQUUsRUFBQyxTQUFSO0FBQWtCLE9BQUcsRUFBQyxlQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssTUFBRSxFQUFDLFlBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRko7QUFBQTtBQUFBO0FBQUEsbWxIQURKO0FBeUJIOztLQTNCUUQsTzs7QUE2QlRBLE9BQU8sQ0FBQ0UsZUFBUjtBQUFBLCtMQUEwQixpQkFBTUMsR0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNBQyxtREFBVSxDQUFDRCxHQUFELENBRFY7O0FBQUE7QUFDaEJFLG1CQURnQjtBQUFBO0FBQUEsbUJBRU1DLHFFQUFRLENBQUMsRUFBRCxFQUFLRCxPQUFPLENBQUNFLFdBQWIsQ0FGZDs7QUFBQTtBQUVoQkMseUJBRmdCOztBQUd0QixnQkFBR0EsYUFBYSxJQUFJLGdCQUFwQixFQUFzQztBQUNsQyxrQkFBSUwsR0FBRyxDQUFDTSxHQUFSLEVBQWE7QUFDVE4sbUJBQUcsQ0FBQ00sR0FBSixDQUFRQyxTQUFSLENBQWtCLEdBQWxCLEVBQXVCO0FBQ3JCQywwQkFBUSxFQUFFO0FBRFcsaUJBQXZCO0FBR0FSLG1CQUFHLENBQUNNLEdBQUosQ0FBUUcsR0FBUjtBQUNIO0FBQ0o7O0FBQ0RKLHlCQUFhLENBQUNLLElBQWQsQ0FBbUJ6QixPQUFPLENBQUMsUUFBRCxDQUExQjtBQVhzQiw2Q0FZZjtBQUFDYSwwQkFBWSxFQUFFTztBQUFmLGFBWmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZWVSLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYmFja2VuZF9ob3N0X2NvbnRyb2xsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IG5leHRDb29raWUgZnJvbSAnbmV4dC1jb29raWVzJ1xuaW1wb3J0IHsgY3JlYXRlVGFzaywgZ2V0VGFza3MsIHJlbW92ZVRhc2ssIHVwZGF0ZVRhc2tTdGF0dXMgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGlzZXJ2aWNlJ1xuXG5jb25zdCBzb3J0aW5nT3JkZXIgPSB7XG4gICAgJ2lucHJvZ3Jlc3MnOiAxLFxuICAgICdjcmVhdGVkJzogMixcbiAgICAnZG9uZSc6IDNcbn1cblxuZnVuY3Rpb24gY29tcGFyZShrZXksIG9yZGVyID0gJ2FzYycpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKCFhLmhhc093blByb3BlcnR5KGtleSkgfHwgIWIuaGFzT3duUHJvcGVydHkoa2V5KSkgXG5cdCAgICByZXR1cm4gMDtcblx0XHRcblx0Y29uc3QgZmlyc3QgPSAoYVtrZXldLnRvTG93ZXJDYXNlKCkgaW4gc29ydGluZ09yZGVyKSA/IHNvcnRpbmdPcmRlclthW2tleV1dIDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG5cdGNvbnN0IHNlY29uZCA9IChiW2tleV0udG9Mb3dlckNhc2UoKSBpbiBzb3J0aW5nT3JkZXIpID8gc29ydGluZ09yZGVyW2Jba2V5XV0gOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcblx0XHRcblx0bGV0IHJlc3VsdCA9IDA7XG5cdGlmIChmaXJzdCA8IHNlY29uZCkgXG5cdCAgICByZXN1bHQgPSAtMTtcblx0ZWxzZSBpZiAoZmlyc3QgPiBzZWNvbmQpIFxuXHQgICAgcmVzdWx0ID0gMTtcblx0cmV0dXJuIChvcmRlciA9PT0gJ2Rlc2MnKSA/IH5yZXN1bHQgOiByZXN1bHRcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBCYWNrZW5kKHtnZXRGaXJzdExvYWR9KSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keSc+XG4gICAgICAgICAgICA8aW1nIGlkPSdib2R5X2JnJyBzcmM9Jy9iZ19sb2dpbi5wbmcnLz5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhYm92ZWxheWVyXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0OyBcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI2JvZHlfYmcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTIwO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMSwxLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5CYWNrZW5kLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jKGN0eCkgPT4ge1xuICAgIGNvbnN0IGNvb2tpZXMgPSBhd2FpdCBuZXh0Q29va2llKGN0eClcbiAgICBjb25zdCBnZXRmaXJzdHRhc2tzID0gYXdhaXQgZ2V0VGFza3MoNTAsIGNvb2tpZXMuYWNjZXNzVG9rZW4pXG4gICAgaWYoZ2V0Zmlyc3R0YXNrcyA9PSAnTm90IEF1dGhvcml6ZWQnKSB7XG4gICAgICAgIGlmIChjdHgucmVzKSB7XG4gICAgICAgICAgICBjdHgucmVzLndyaXRlSGVhZCgzMDEsIHtcbiAgICAgICAgICAgICAgTG9jYXRpb246ICcvbG9naW4nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGN0eC5yZXMuZW5kKCk7XG4gICAgICAgIH0gXG4gICAgfVxuICAgIGdldGZpcnN0dGFza3Muc29ydChjb21wYXJlKCdzdGF0dXMnKSlcbiAgICByZXR1cm4ge2dldEZpcnN0TG9hZDogZ2V0Zmlyc3R0YXNrc31cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/backend_host_controller.js\n");

/***/ }),

/***/ "./services/projectservice.js":
false

})
webpackHotUpdate_N_E("pages/backend_host_controller",{

/***/ "./pages/backend_host_controller.js":
/*!******************************************!*\
  !*** ./pages/backend_host_controller.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/banner */ \"./components/banner.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.js\");\n/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-cookies */ \"./node_modules/next-cookies/index.js\");\n/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _services_apiservice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/apiservice */ \"./services/apiservice.js\");\n/* harmony import */ var _services_projectservice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/projectservice */ \"./services/projectservice.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\nvar _jsxFileName = \"/Users/williamforte/Canvas/burkedeveloping/pages/backend_host_controller.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar sortingOrder = {\n  'inprogress': 1,\n  'created': 2,\n  'done': 3\n};\n\nfunction compare(key) {\n  var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';\n  return function (a, b) {\n    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;\n    var first = a[key].toLowerCase() in sortingOrder ? sortingOrder[a[key]] : Number.MAX_SAFE_INTEGER;\n    var second = b[key].toLowerCase() in sortingOrder ? sortingOrder[b[key]] : Number.MAX_SAFE_INTEGER;\n    var result = 0;\n    if (first < second) result = -1;else if (first > second) result = 1;\n    return order === 'desc' ? ~result : result;\n  };\n}\n\nfunction Backend(_ref) {\n  _s();\n\n  var getFirstLoad = _ref.getFirstLoad;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({\n    objective: '',\n    status: 'created'\n  }),\n      inputs = _useState[0],\n      setInputs = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(getFirstLoad != null ? getFirstLoad : null),\n      allTasks = _useState2[0],\n      setAllTasks = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(getFirstLoad != null ? 'succeeded' : 'none'),\n      status = _useState3[0],\n      setStatus = _useState3[1];\n\n  var lastcat = null; // Create a new Task DEFAULT: status: 'created'\n\n  var createNewTask = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var newTask;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              _context.next = 3;\n              return Object(_services_apiservice__WEBPACK_IMPORTED_MODULE_8__[\"createTask\"])(inputs.objective, inputs.status);\n\n            case 3:\n              newTask = _context.sent;\n\n              if (newTask) {\n                console.log(newTask);\n                setInputs(_objectSpread(_objectSpread({}, inputs), {}, {\n                  objective: ''\n                }));\n                updateTasks(e);\n              }\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function createNewTask(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }(); // Updating Tasks with Backend\n\n\n  var updateTasks = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {\n      var getalltasks;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              setStatus('loading');\n              _context2.next = 3;\n              return Object(_services_apiservice__WEBPACK_IMPORTED_MODULE_8__[\"getTasks\"])(50, null);\n\n            case 3:\n              getalltasks = _context2.sent;\n\n              if (getalltasks) {\n                console.log(getalltasks);\n                getalltasks.sort(compare('status'));\n                setAllTasks(getalltasks);\n                setStatus('succeeded');\n              }\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function updateTasks(_x2) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var removeThisTask = /*#__PURE__*/function () {\n    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(e, task_id) {\n      var removenewtask;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              e.preventDefault();\n              _context3.next = 3;\n              return Object(_services_apiservice__WEBPACK_IMPORTED_MODULE_8__[\"removeTask\"])(task_id);\n\n            case 3:\n              removenewtask = _context3.sent;\n\n              if (removenewtask) {\n                console.log(removenewtask);\n                updateTasks(e);\n              }\n\n            case 5:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function removeThisTask(_x3, _x4) {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  var updateThisTask = /*#__PURE__*/function () {\n    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(e, task_id, status) {\n      var updatenewtask;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              e.preventDefault();\n              _context4.next = 3;\n              return Object(_services_apiservice__WEBPACK_IMPORTED_MODULE_8__[\"updateTaskStatus\"])(task_id, status);\n\n            case 3:\n              updatenewtask = _context4.sent;\n\n              if (updatenewtask) {\n                console.log(updatenewtask);\n                updateTasks(e);\n              }\n\n            case 5:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    return function updateThisTask(_x5, _x6, _x7) {\n      return _ref5.apply(this, arguments);\n    };\n  }();\n\n  var isTyping = function isTyping(e) {\n    e.persist();\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, e.target.name, e.target.value)));\n  };\n\n  return __jsx(\"div\", {\n    className: \"jsx-3315303781\" + \" \" + 'body',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    id: \"body_bg\",\n    src: \"/bg_login.png\",\n    className: \"jsx-3315303781\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    id: \"abovelayer\",\n    className: \"jsx-3315303781\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }\n  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    id: \"3315303781\",\n    __self: this\n  }, \".body.jsx-3315303781{float:left;width:100%;height:100%;z-index:1;overflow:hidden;}#body_bg.jsx-3315303781{width:100%;z-index:-20;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%) scale(1.1,1.1);-ms-transform:translate(-50%,-50%) scale(1.1,1.1);transform:translate(-50%,-50%) scale(1.1,1.1);}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtZm9ydGUvQ2FudmFzL2J1cmtlZGV2ZWxvcGluZy9wYWdlcy9iYWNrZW5kX2hvc3RfY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnR3dCLEFBR2dDLEFBT0EsV0FOQSxBQU9DLFdBTkEsQ0FPTSxXQU5SLE9BT0YsR0FOUSxLQU9QLFNBQ3NDLEVBUG5ELG9KQVFBIiwiZmlsZSI6Ii9Vc2Vycy93aWxsaWFtZm9ydGUvQ2FudmFzL2J1cmtlZGV2ZWxvcGluZy9wYWdlcy9iYWNrZW5kX2hvc3RfY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYW5uZXJTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9iYW5uZXInXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IG5leHRDb29raWUgZnJvbSAnbmV4dC1jb29raWVzJ1xuaW1wb3J0IHsgY3JlYXRlVGFzaywgZ2V0VGFza3MsIHJlbW92ZVRhc2ssIHVwZGF0ZVRhc2tTdGF0dXMgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGlzZXJ2aWNlJ1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gJy4uL3NlcnZpY2VzL3Byb2plY3RzZXJ2aWNlJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3Qgc29ydGluZ09yZGVyID0ge1xuICAgICdpbnByb2dyZXNzJzogMSxcbiAgICAnY3JlYXRlZCc6IDIsXG4gICAgJ2RvbmUnOiAzXG59XG5cbmZ1bmN0aW9uIGNvbXBhcmUoa2V5LCBvcmRlciA9ICdhc2MnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmICghYS5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8ICFiLmhhc093blByb3BlcnR5KGtleSkpIFxuXHQgICAgcmV0dXJuIDA7XG5cdFx0XG5cdGNvbnN0IGZpcnN0ID0gKGFba2V5XS50b0xvd2VyQ2FzZSgpIGluIHNvcnRpbmdPcmRlcikgPyBzb3J0aW5nT3JkZXJbYVtrZXldXSA6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuXHRjb25zdCBzZWNvbmQgPSAoYltrZXldLnRvTG93ZXJDYXNlKCkgaW4gc29ydGluZ09yZGVyKSA/IHNvcnRpbmdPcmRlcltiW2tleV1dIDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG5cdFx0XG5cdGxldCByZXN1bHQgPSAwO1xuXHRpZiAoZmlyc3QgPCBzZWNvbmQpIFxuXHQgICAgcmVzdWx0ID0gLTE7XG5cdGVsc2UgaWYgKGZpcnN0ID4gc2Vjb25kKSBcblx0ICAgIHJlc3VsdCA9IDE7XG5cdHJldHVybiAob3JkZXIgPT09ICdkZXNjJykgPyB+cmVzdWx0IDogcmVzdWx0XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gQmFja2VuZCh7Z2V0Rmlyc3RMb2FkfSkge1xuXG4gICAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgb2JqZWN0aXZlOiAnJyxcbiAgICAgICAgc3RhdHVzOiAnY3JlYXRlZCcsXG4gICAgfSlcbiAgICBjb25zdCBbYWxsVGFza3MsIHNldEFsbFRhc2tzXSA9IHVzZVN0YXRlKGdldEZpcnN0TG9hZCAhPSBudWxsID8gZ2V0Rmlyc3RMb2FkOiBudWxsKVxuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShnZXRGaXJzdExvYWQgIT0gbnVsbCA/ICdzdWNjZWVkZWQnOiAnbm9uZScpXG4gICAgbGV0IGxhc3RjYXQgPSBudWxsXG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgVGFzayBERUZBVUxUOiBzdGF0dXM6ICdjcmVhdGVkJ1xuICAgIGNvbnN0IGNyZWF0ZU5ld1Rhc2sgPSBhc3luYyhlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IGF3YWl0IGNyZWF0ZVRhc2soaW5wdXRzLm9iamVjdGl2ZSwgaW5wdXRzLnN0YXR1cylcbiAgICAgICAgaWYobmV3VGFzaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VGFzaylcbiAgICAgICAgICAgIHNldElucHV0cyh7Li4uaW5wdXRzLCBvYmplY3RpdmU6ICcnfSlcbiAgICAgICAgICAgIHVwZGF0ZVRhc2tzKGUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGluZyBUYXNrcyB3aXRoIEJhY2tlbmRcbiAgICBjb25zdCB1cGRhdGVUYXNrcyA9IGFzeW5jKGUpID0+IHtcbiAgICAgICAgc2V0U3RhdHVzKCdsb2FkaW5nJylcbiAgICAgICAgY29uc3QgZ2V0YWxsdGFza3MgPSBhd2FpdCBnZXRUYXNrcyg1MCwgbnVsbClcbiAgICAgICAgaWYoZ2V0YWxsdGFza3MpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGdldGFsbHRhc2tzKVxuICAgICAgICAgICAgZ2V0YWxsdGFza3Muc29ydChjb21wYXJlKCdzdGF0dXMnKSlcbiAgICAgICAgICAgIHNldEFsbFRhc2tzKGdldGFsbHRhc2tzKVxuICAgICAgICAgICAgc2V0U3RhdHVzKCdzdWNjZWVkZWQnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVGhpc1Rhc2sgPSBhc3luYyhlLCB0YXNrX2lkKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCByZW1vdmVuZXd0YXNrID0gYXdhaXQgcmVtb3ZlVGFzayh0YXNrX2lkKTtcbiAgICAgICAgaWYocmVtb3ZlbmV3dGFzaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVtb3ZlbmV3dGFzaylcbiAgICAgICAgICAgIHVwZGF0ZVRhc2tzKGUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVUaGlzVGFzayA9IGFzeW5jKGUsIHRhc2tfaWQsIHN0YXR1cykgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgdXBkYXRlbmV3dGFzayA9IGF3YWl0IHVwZGF0ZVRhc2tTdGF0dXModGFza19pZCwgc3RhdHVzKTtcbiAgICAgICAgaWYodXBkYXRlbmV3dGFzaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlbmV3dGFzaylcbiAgICAgICAgICAgIHVwZGF0ZVRhc2tzKGUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpc1R5cGluZyA9IChlKSA9PiB7XG4gICAgICAgIGUucGVyc2lzdCgpO1xuICAgICAgICBzZXRJbnB1dHMoe1xuICAgICAgICAgICAgLi4uaW5wdXRzLFxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2R5Jz5cbiAgICAgICAgICAgIDxpbWcgaWQ9J2JvZHlfYmcnIHNyYz0nL2JnX2xvZ2luLnBuZycvPlxuICAgICAgICAgICAgPGRpdiBpZD1cImFib3ZlbGF5ZXJcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7IFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjYm9keV9iZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMjA7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS4xLDEuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbkJhY2tlbmQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMoY3R4KSA9PiB7XG4gICAgY29uc3QgY29va2llcyA9IGF3YWl0IG5leHRDb29raWUoY3R4KVxuICAgIGNvbnN0IGdldGZpcnN0dGFza3MgPSBhd2FpdCBnZXRUYXNrcyg1MCwgY29va2llcy5hY2Nlc3NUb2tlbilcbiAgICBpZihnZXRmaXJzdHRhc2tzID09ICdOb3QgQXV0aG9yaXplZCcpIHtcbiAgICAgICAgaWYgKGN0eC5yZXMpIHtcbiAgICAgICAgICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMSwge1xuICAgICAgICAgICAgICBMb2NhdGlvbjogJy9sb2dpbidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY3R4LnJlcy5lbmQoKTtcbiAgICAgICAgfSBcbiAgICB9XG4gICAgZ2V0Zmlyc3R0YXNrcy5zb3J0KGNvbXBhcmUoJ3N0YXR1cycpKVxuICAgIHJldHVybiB7Z2V0Rmlyc3RMb2FkOiBnZXRmaXJzdHRhc2tzfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZW5kIl19 */\\n/*@ sourceURL=/Users/williamforte/Canvas/burkedeveloping/pages/backend_host_controller.js */\"));\n}\n\n_s(Backend, \"2ziEF0kWb7T45djIxBUARwQoZ2c=\");\n\n_c = Backend;\n\nBackend.getInitialProps = /*#__PURE__*/function () {\n  var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(ctx) {\n    var cookies, getfirsttasks;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.next = 2;\n            return next_cookies__WEBPACK_IMPORTED_MODULE_7___default()(ctx);\n\n          case 2:\n            cookies = _context5.sent;\n            _context5.next = 5;\n            return Object(_services_apiservice__WEBPACK_IMPORTED_MODULE_8__[\"getTasks\"])(50, cookies.accessToken);\n\n          case 5:\n            getfirsttasks = _context5.sent;\n\n            if (getfirsttasks == 'Not Authorized') {\n              if (ctx.res) {\n                ctx.res.writeHead(301, {\n                  Location: '/login'\n                });\n                ctx.res.end();\n              }\n            }\n\n            getfirsttasks.sort(compare('status'));\n            return _context5.abrupt(\"return\", {\n              getFirstLoad: getfirsttasks\n            });\n\n          case 9:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n\n  return function (_x8) {\n    return _ref6.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Backend);\n\nvar _c;\n\n$RefreshReg$(_c, \"Backend\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmFja2VuZF9ob3N0X2NvbnRyb2xsZXIuanM/ZmUxYyJdLCJuYW1lcyI6WyJzb3J0aW5nT3JkZXIiLCJjb21wYXJlIiwia2V5Iiwib3JkZXIiLCJhIiwiYiIsImhhc093blByb3BlcnR5IiwiZmlyc3QiLCJ0b0xvd2VyQ2FzZSIsIk51bWJlciIsIk1BWF9TQUZFX0lOVEVHRVIiLCJzZWNvbmQiLCJyZXN1bHQiLCJCYWNrZW5kIiwiZ2V0Rmlyc3RMb2FkIiwidXNlU3RhdGUiLCJvYmplY3RpdmUiLCJzdGF0dXMiLCJpbnB1dHMiLCJzZXRJbnB1dHMiLCJhbGxUYXNrcyIsInNldEFsbFRhc2tzIiwic2V0U3RhdHVzIiwibGFzdGNhdCIsImNyZWF0ZU5ld1Rhc2siLCJlIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVUYXNrIiwibmV3VGFzayIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVUYXNrcyIsImdldFRhc2tzIiwiZ2V0YWxsdGFza3MiLCJzb3J0IiwicmVtb3ZlVGhpc1Rhc2siLCJ0YXNrX2lkIiwicmVtb3ZlVGFzayIsInJlbW92ZW5ld3Rhc2siLCJ1cGRhdGVUaGlzVGFzayIsInVwZGF0ZVRhc2tTdGF0dXMiLCJ1cGRhdGVuZXd0YXNrIiwiaXNUeXBpbmciLCJwZXJzaXN0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwibmV4dENvb2tpZSIsImNvb2tpZXMiLCJhY2Nlc3NUb2tlbiIsImdldGZpcnN0dGFza3MiLCJyZXMiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUNqQixnQkFBYyxDQURHO0FBRWpCLGFBQVcsQ0FGTTtBQUdqQixVQUFRO0FBSFMsQ0FBckI7O0FBTUEsU0FB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTFCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWVldkMsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9iYWNrZW5kX2hvc3RfY29udHJvbGxlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYW5uZXJTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9iYW5uZXInXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IG5leHRDb29raWUgZnJvbSAnbmV4dC1jb29raWVzJ1xuaW1wb3J0IHsgY3JlYXRlVGFzaywgZ2V0VGFza3MsIHJlbW92ZVRhc2ssIHVwZGF0ZVRhc2tTdGF0dXMgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGlzZXJ2aWNlJ1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gJy4uL3NlcnZpY2VzL3Byb2plY3RzZXJ2aWNlJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3Qgc29ydGluZ09yZGVyID0ge1xuICAgICdpbnByb2dyZXNzJzogMSxcbiAgICAnY3JlYXRlZCc6IDIsXG4gICAgJ2RvbmUnOiAzXG59XG5cbmZ1bmN0aW9uIGNvbXBhcmUoa2V5LCBvcmRlciA9ICdhc2MnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmICghYS5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8ICFiLmhhc093blByb3BlcnR5KGtleSkpIFxuXHQgICAgcmV0dXJuIDA7XG5cdFx0XG5cdGNvbnN0IGZpcnN0ID0gKGFba2V5XS50b0xvd2VyQ2FzZSgpIGluIHNvcnRpbmdPcmRlcikgPyBzb3J0aW5nT3JkZXJbYVtrZXldXSA6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuXHRjb25zdCBzZWNvbmQgPSAoYltrZXldLnRvTG93ZXJDYXNlKCkgaW4gc29ydGluZ09yZGVyKSA/IHNvcnRpbmdPcmRlcltiW2tleV1dIDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG5cdFx0XG5cdGxldCByZXN1bHQgPSAwO1xuXHRpZiAoZmlyc3QgPCBzZWNvbmQpIFxuXHQgICAgcmVzdWx0ID0gLTE7XG5cdGVsc2UgaWYgKGZpcnN0ID4gc2Vjb25kKSBcblx0ICAgIHJlc3VsdCA9IDE7XG5cdHJldHVybiAob3JkZXIgPT09ICdkZXNjJykgPyB+cmVzdWx0IDogcmVzdWx0XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gQmFja2VuZCh7Z2V0Rmlyc3RMb2FkfSkge1xuXG4gICAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgb2JqZWN0aXZlOiAnJyxcbiAgICAgICAgc3RhdHVzOiAnY3JlYXRlZCcsXG4gICAgfSlcbiAgICBjb25zdCBbYWxsVGFza3MsIHNldEFsbFRhc2tzXSA9IHVzZVN0YXRlKGdldEZpcnN0TG9hZCAhPSBudWxsID8gZ2V0Rmlyc3RMb2FkOiBudWxsKVxuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShnZXRGaXJzdExvYWQgIT0gbnVsbCA/ICdzdWNjZWVkZWQnOiAnbm9uZScpXG4gICAgbGV0IGxhc3RjYXQgPSBudWxsXG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgVGFzayBERUZBVUxUOiBzdGF0dXM6ICdjcmVhdGVkJ1xuICAgIGNvbnN0IGNyZWF0ZU5ld1Rhc2sgPSBhc3luYyhlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IGF3YWl0IGNyZWF0ZVRhc2soaW5wdXRzLm9iamVjdGl2ZSwgaW5wdXRzLnN0YXR1cylcbiAgICAgICAgaWYobmV3VGFzaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VGFzaylcbiAgICAgICAgICAgIHNldElucHV0cyh7Li4uaW5wdXRzLCBvYmplY3RpdmU6ICcnfSlcbiAgICAgICAgICAgIHVwZGF0ZVRhc2tzKGUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGluZyBUYXNrcyB3aXRoIEJhY2tlbmRcbiAgICBjb25zdCB1cGRhdGVUYXNrcyA9IGFzeW5jKGUpID0+IHtcbiAgICAgICAgc2V0U3RhdHVzKCdsb2FkaW5nJylcbiAgICAgICAgY29uc3QgZ2V0YWxsdGFza3MgPSBhd2FpdCBnZXRUYXNrcyg1MCwgbnVsbClcbiAgICAgICAgaWYoZ2V0YWxsdGFza3MpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGdldGFsbHRhc2tzKVxuICAgICAgICAgICAgZ2V0YWxsdGFza3Muc29ydChjb21wYXJlKCdzdGF0dXMnKSlcbiAgICAgICAgICAgIHNldEFsbFRhc2tzKGdldGFsbHRhc2tzKVxuICAgICAgICAgICAgc2V0U3RhdHVzKCdzdWNjZWVkZWQnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVGhpc1Rhc2sgPSBhc3luYyhlLCB0YXNrX2lkKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCByZW1vdmVuZXd0YXNrID0gYXdhaXQgcmVtb3ZlVGFzayh0YXNrX2lkKTtcbiAgICAgICAgaWYocmVtb3ZlbmV3dGFzaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVtb3ZlbmV3dGFzaylcbiAgICAgICAgICAgIHVwZGF0ZVRhc2tzKGUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVUaGlzVGFzayA9IGFzeW5jKGUsIHRhc2tfaWQsIHN0YXR1cykgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgdXBkYXRlbmV3dGFzayA9IGF3YWl0IHVwZGF0ZVRhc2tTdGF0dXModGFza19pZCwgc3RhdHVzKTtcbiAgICAgICAgaWYodXBkYXRlbmV3dGFzaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlbmV3dGFzaylcbiAgICAgICAgICAgIHVwZGF0ZVRhc2tzKGUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpc1R5cGluZyA9IChlKSA9PiB7XG4gICAgICAgIGUucGVyc2lzdCgpO1xuICAgICAgICBzZXRJbnB1dHMoe1xuICAgICAgICAgICAgLi4uaW5wdXRzLFxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2R5Jz5cbiAgICAgICAgICAgIDxpbWcgaWQ9J2JvZHlfYmcnIHNyYz0nL2JnX2xvZ2luLnBuZycvPlxuICAgICAgICAgICAgPGRpdiBpZD1cImFib3ZlbGF5ZXJcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7IFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjYm9keV9iZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMjA7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS4xLDEuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbkJhY2tlbmQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMoY3R4KSA9PiB7XG4gICAgY29uc3QgY29va2llcyA9IGF3YWl0IG5leHRDb29raWUoY3R4KVxuICAgIGNvbnN0IGdldGZpcnN0dGFza3MgPSBhd2FpdCBnZXRUYXNrcyg1MCwgY29va2llcy5hY2Nlc3NUb2tlbilcbiAgICBpZihnZXRmaXJzdHRhc2tzID09ICdOb3QgQXV0aG9yaXplZCcpIHtcbiAgICAgICAgaWYgKGN0eC5yZXMpIHtcbiAgICAgICAgICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMSwge1xuICAgICAgICAgICAgICBMb2NhdGlvbjogJy9sb2dpbidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY3R4LnJlcy5lbmQoKTtcbiAgICAgICAgfSBcbiAgICB9XG4gICAgZ2V0Zmlyc3R0YXNrcy5zb3J0KGNvbXBhcmUoJ3N0YXR1cycpKVxuICAgIHJldHVybiB7Z2V0Rmlyc3RMb2FkOiBnZXRmaXJzdHRhc2tzfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/backend_host_controller.js\n");

/***/ })

})
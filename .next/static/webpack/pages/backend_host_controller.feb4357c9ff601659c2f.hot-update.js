webpackHotUpdate_N_E("pages/backend_host_controller",{

/***/ "./pages/backend_host_controller.js":
/*!******************************************!*\
  !*** ./pages/backend_host_controller.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.js\");\n/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-cookies */ \"./node_modules/next-cookies/index.js\");\n/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _services_apiservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/apiservice */ \"./services/apiservice.js\");\n/* harmony import */ var _services_projectservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/projectservice */ \"./services/projectservice.js\");\n/* harmony import */ var _components_backend_taskmanager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/backend/taskmanager */ \"./components/backend/taskmanager.js\");\n\n\n\nvar _jsxFileName = \"/Users/williamforte/Canvas/burkedeveloping/pages/backend_host_controller.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\n\nfunction Backend(_ref) {\n  _s();\n\n  var getFirstLoad = _ref.getFirstLoad;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      file = _useState[0],\n      setFile = _useState[1];\n\n  var uploadImage = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var formData, uploadImage;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              formData = new FormData();\n              formData.append(\"myFile\", file);\n              uploadImage = fetch('http://localhost:3600/uploadfile', {\n                method: 'POST',\n                body: formData\n              }).then(function (response) {\n                return response.json();\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function uploadImage(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var handleFileChange = function handleFileChange(e) {\n    setFile(URL.createObjectURL(e.target.files[0]));\n  };\n\n  return __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"842008282\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue]]]) + \" \" + 'body',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    id: \"body_bg\",\n    src: \"/bg_login.png\",\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"842008282\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    id: \"abovelayer\",\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"842008282\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, __jsx(_components_backend_taskmanager__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    getFirstLoad: getFirstLoad,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"842008282\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue]]]) + \" \" + 'imageupload',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  }, __jsx(\"form\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"842008282\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"842008282\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue]]]) + \" \" + 'frame',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 25\n    }\n  }, __jsx(\"img\", {\n    src: file ? file : '/imageplaceholder.png',\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"842008282\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 48\n    }\n  })), __jsx(\"label\", {\n    htmlFor: \"fileid\",\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"842008282\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 25\n    }\n  }, file ? file : 'Upload Image'), __jsx(\"input\", {\n    id: \"fileid\",\n    type: \"file\",\n    onChange: handleFileChange,\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"842008282\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 25\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"842008282\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 25\n    }\n  }, \"Upload File\")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    id: \"842008282\",\n    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue],\n    __self: this\n  }, \".imageupload.__jsx-style-dynamic-selector{float:left;width:23%;margin:20px 1%;position:relative;border-radius:10px;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);background:rgba(255,255,255,.7);box-shadow:0 0 2px rgba(20,20,20,.8);overflow:hidden;}.imageupload.__jsx-style-dynamic-selector form.__jsx-style-dynamic-selector{width:100%;float:left;}.imageupload.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector{float:left;width:80%;cursor:pointer;padding:14px 0;margin:10px 10%;margin-top:20px;border-radius:8px;background:\".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, \";-webkit-transition:background .3s ease;transition:background .3s ease;color:white;text-align:center;font:14px 'Roboto';}.imageupload.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector:hover{background:\").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, \";}.imageupload.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{float:left;width:80%;border:none;border-radius:8px;cursor:pointer;padding:14px 0;margin:10px 10%;margin-bottom:20px;background:\").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, \";-webkit-transition:background .3s ease;transition:background .3s ease;color:white;text-align:center;font:14px 'Roboto';}.imageupload.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{background:\").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, \";}.frame.__jsx-style-dynamic-selector{float:left;width:100%;height:250px;overflow:hidden;position:relative;}.imageupload.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}#fileid.__jsx-style-dynamic-selector{display:none;}.body.__jsx-style-dynamic-selector{float:left;width:100%;height:100%;z-index:1;overflow:hidden;}#abovelayer.__jsx-style-dynamic-selector{float:left;width:100%;height:100%;z-index:99;position:relative;margin-top:80px;}#body_bg.__jsx-style-dynamic-selector{width:100%;z-index:-20;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%) scale(1.1,1.1);-ms-transform:translate(-50%,-50%) scale(1.1,1.1);transform:translate(-50%,-50%) scale(1.1,1.1);}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtZm9ydGUvQ2FudmFzL2J1cmtlZGV2ZWxvcGluZy9wYWdlcy9iYWNrZW5kX2hvc3RfY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ3dCLEFBR2dDLEFBV0EsQUFJQSxBQWM2QixBQUc3QixBQWU2QixBQUc3QixBQU9PLEFBTUwsQUFHRixBQU9BLEFBUUEsV0FoRkQsQUFXQyxBQUlELEFBaUJBLEFBa0JDLEFBZ0JBLEFBT0EsQUFRQyxFQWxCaEIsS0FOWSxHQXhETyxBQWVBLEFBaUJILENBckJoQixBQXVDaUIsQUFnQkQsQUFPQSxDQVFNLEdBeEJULE9BeEJTLENBa0NSLEFBT0MsQ0F2QkssQUFPZ0IsQ0F6RGQsQUFlSCxJQVluQixBQWtCQSxDQW9DWSxHQWRRLENBT0UsSUFRVCxFQWxFTyxBQWlCRCxBQWtCRyxHQWxEQyxJQWtGNEIsRUFmbkQsR0FPb0IsR0F6Q0QsQ0FqQkMsRUFtQ3BCLElBbEQ4QixNQTBFOUIsRUF6Q29CLEVBakJFLGNBa0JDLElBakJxQixlQWtCQSxpQkFsQ0wsT0F1RHZDLENBdENtQyxlQWtCQSxTQWxDTSxxQ0FDckIsTUErRXBCLEdBL0RnQixPQWZoQixLQWdCc0IsR0FpQk4sWUFDTSxHQWpCQyxlQWtCQSxJQWpCdkIsZUFrQkEiLCJmaWxlIjoiL1VzZXJzL3dpbGxpYW1mb3J0ZS9DYW52YXMvYnVya2VkZXZlbG9waW5nL3BhZ2VzL2JhY2tlbmRfaG9zdF9jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCBuZXh0Q29va2llIGZyb20gJ25leHQtY29va2llcydcbmltcG9ydCB7ICB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaXNlcnZpY2UnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gJy4uL3NlcnZpY2VzL3Byb2plY3RzZXJ2aWNlJ1xuaW1wb3J0IHsgZ2V0VGFza3MgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGlzZXJ2aWNlJ1xuaW1wb3J0IFRhc2tNYW5hZ2VyLCB7Y29tcGFyZX0gZnJvbSAnLi4vY29tcG9uZW50cy9iYWNrZW5kL3Rhc2ttYW5hZ2VyJ1xuXG5mdW5jdGlvbiBCYWNrZW5kKHtnZXRGaXJzdExvYWR9KSB7XG5cbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgY29uc3QgdXBsb2FkSW1hZ2UgPSBhc3luYyhlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm15RmlsZVwiLCBmaWxlKVxuICAgICAgICBjb25zdCB1cGxvYWRJbWFnZSA9IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjM2MDAvdXBsb2FkZmlsZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRGaWxlKFVSTC5jcmVhdGVPYmplY3RVUkwoZS50YXJnZXQuZmlsZXNbMF0pKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2R5Jz5cbiAgICAgICAgICAgIDxpbWcgaWQ9J2JvZHlfYmcnIHNyYz0nL2JnX2xvZ2luLnBuZycvPlxuICAgICAgICAgICAgPGRpdiBpZD1cImFib3ZlbGF5ZXJcIj5cbiAgICAgICAgICAgICAgICA8VGFza01hbmFnZXIgZ2V0Rmlyc3RMb2FkPXtnZXRGaXJzdExvYWR9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdldXBsb2FkJz5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZnJhbWUnPjxpbWcgc3JjPXtmaWxlID8gZmlsZTogJy9pbWFnZXBsYWNlaG9sZGVyLnBuZyd9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZmlsZWlkJz57ZmlsZSA/IGZpbGU6ICdVcGxvYWQgSW1hZ2UnfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9J2ZpbGVpZCcgdHlwZT0nZmlsZScgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+VXBsb2FkIEZpbGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmltYWdldXBsb2FkIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMyU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAxJTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNyk7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggcmdiYSgyMCwyMCwyMCwuOCk7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbWFnZXVwbG9hZCBmb3JtIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW1hZ2V1cGxvYWQgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtUaGVtZS5jb2xvcnMub254eX07XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250OiAxNHB4ICdSb2JvdG8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW1hZ2V1cGxvYWQgbGFiZWw6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLmNvbG9ycy5yb3lhbGJsdWV9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW1hZ2V1cGxvYWQgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE0cHggMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtUaGVtZS5jb2xvcnMub254eX07XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250OiAxNHB4ICdSb2JvdG8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW1hZ2V1cGxvYWQgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtUaGVtZS5jb2xvcnMucm95YWxibHVlfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZyYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbWFnZXVwbG9hZCBpbWcge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjZmlsZWlkIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJvZHkge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDsgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICNhYm92ZWxheWVyIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICNib2R5X2JnIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0yMDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjEsMS4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuQmFja2VuZC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyhjdHgpID0+IHtcbiAgICBjb25zdCBjb29raWVzID0gYXdhaXQgbmV4dENvb2tpZShjdHgpXG4gICAgY29uc3QgZ2V0Zmlyc3R0YXNrcyA9IGF3YWl0IGdldFRhc2tzKDUwLCBjb29raWVzLmFjY2Vzc1Rva2VuKVxuICAgIGlmKGdldGZpcnN0dGFza3MgPT0gJ05vdCBBdXRob3JpemVkJykge1xuICAgICAgICBpZiAoY3R4LnJlcykge1xuICAgICAgICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAxLCB7XG4gICAgICAgICAgICAgIExvY2F0aW9uOiAnL2xvZ2luJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjdHgucmVzLmVuZCgpO1xuICAgICAgICB9IFxuICAgIH1cbiAgICBnZXRmaXJzdHRhc2tzLnNvcnQoY29tcGFyZSgnc3RhdHVzJykpXG4gICAgcmV0dXJuIHtnZXRGaXJzdExvYWQ6IGdldGZpcnN0dGFza3N9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tlbmQiXX0= */\\n/*@ sourceURL=/Users/williamforte/Canvas/burkedeveloping/pages/backend_host_controller.js */\")));\n}\n\n_s(Backend, \"Nkb8eHkBruGouXteoqeZ1R6wRVk=\");\n\n_c = Backend;\n\nBackend.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ctx) {\n    var cookies, getfirsttasks;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return next_cookies__WEBPACK_IMPORTED_MODULE_5___default()(ctx);\n\n          case 2:\n            cookies = _context2.sent;\n            _context2.next = 5;\n            return Object(_services_apiservice__WEBPACK_IMPORTED_MODULE_6__[\"getTasks\"])(50, cookies.accessToken);\n\n          case 5:\n            getfirsttasks = _context2.sent;\n\n            if (getfirsttasks == 'Not Authorized') {\n              if (ctx.res) {\n                ctx.res.writeHead(301, {\n                  Location: '/login'\n                });\n                ctx.res.end();\n              }\n            }\n\n            getfirsttasks.sort(Object(_components_backend_taskmanager__WEBPACK_IMPORTED_MODULE_8__[\"compare\"])('status'));\n            return _context2.abrupt(\"return\", {\n              getFirstLoad: getfirsttasks\n            });\n\n          case 9:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x2) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Backend);\n\nvar _c;\n\n$RefreshReg$(_c, \"Backend\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmFja2VuZF9ob3N0X2NvbnRyb2xsZXIuanM/ZmUxYyJdLCJuYW1lcyI6WyJCYWNrZW5kIiwiZ2V0Rmlyc3RMb2FkIiwidXNlU3RhdGUiLCJmaWxlIiwic2V0RmlsZSIsInVwbG9hZEltYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJoYW5kbGVGaWxlQ2hhbmdlIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwidGFyZ2V0IiwiZmlsZXMiLCJUaGVtZSIsImNvbG9ycyIsIm9ueHkiLCJyb3lhbGJsdWUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJuZXh0Q29va2llIiwiY29va2llcyIsImdldFRhc2tzIiwiYWNjZXNzVG9rZW4iLCJnZXRmaXJzdHRhc2tzIiwicmVzIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJzb3J0IiwiY29tcGFyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULE9BQWlDO0FBQUE7O0FBQUEsTUFBZkMsWUFBZSxRQUFmQSxZQUFlOztBQUFBLGtCQUVMQyxzREFBUSxDQUFDLElBQUQsQ0FGSDtBQUFBLE1BRXRCQyxJQUZzQjtBQUFBLE1BRWhCQyxPQUZnQjs7QUFJN0IsTUFBTUMsV0FBVztBQUFBLGlNQUFHLGlCQUFNQyxDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQkEsZUFBQyxDQUFDQyxjQUFGO0FBQ01DLHNCQUZVLEdBRUMsSUFBSUMsUUFBSixFQUZEO0FBR2hCRCxzQkFBUSxDQUFDRSxNQUFULENBQWdCLFFBQWhCLEVBQTBCUCxJQUExQjtBQUNNRSx5QkFKVSxHQUlJTSxLQUFLLENBQUMsa0NBQUQsRUFB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YUFaZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUExQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFlZWhDLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYmFja2VuZF9ob3N0X2NvbnRyb2xsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IG5leHRDb29raWUgZnJvbSAnbmV4dC1jb29raWVzJ1xuaW1wb3J0IHsgIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpc2VydmljZSdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSAnLi4vc2VydmljZXMvcHJvamVjdHNlcnZpY2UnXG5pbXBvcnQgeyBnZXRUYXNrcyB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaXNlcnZpY2UnXG5pbXBvcnQgVGFza01hbmFnZXIsIHtjb21wYXJlfSBmcm9tICcuLi9jb21wb25lbnRzL2JhY2tlbmQvdGFza21hbmFnZXInXG5cbmZ1bmN0aW9uIEJhY2tlbmQoe2dldEZpcnN0TG9hZH0pIHtcblxuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICBjb25zdCB1cGxvYWRJbWFnZSA9IGFzeW5jKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwibXlGaWxlXCIsIGZpbGUpXG4gICAgICAgIGNvbnN0IHVwbG9hZEltYWdlID0gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzYwMC91cGxvYWRmaWxlJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldEZpbGUoVVJMLmNyZWF0ZU9iamVjdFVSTChlLnRhcmdldC5maWxlc1swXSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvZHknPlxuICAgICAgICAgICAgPGltZyBpZD0nYm9keV9iZycgc3JjPScvYmdfbG9naW4ucG5nJy8+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYWJvdmVsYXllclwiPlxuICAgICAgICAgICAgICAgIDxUYXNrTWFuYWdlciBnZXRGaXJzdExvYWQ9e2dldEZpcnN0TG9hZH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2V1cGxvYWQnPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmcmFtZSc+PGltZyBzcmM9e2ZpbGUgPyBmaWxlOiAnL2ltYWdlcGxhY2Vob2xkZXIucG5nJ30gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdmaWxlaWQnPntmaWxlID8gZmlsZTogJ1VwbG9hZCBJbWFnZSd9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nZmlsZWlkJyB0eXBlPSdmaWxlJyBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5VcGxvYWQgRmlsZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaW1hZ2V1cGxvYWQge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIzJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDElO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43KTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDIwLDIwLDIwLC44KTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmltYWdldXBsb2FkIGZvcm0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbWFnZXVwbG9hZCBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE0cHggMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLmNvbG9ycy5vbnh5fTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE0cHggJ1JvYm90byc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbWFnZXVwbG9hZCBsYWJlbDpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuY29sb3JzLnJveWFsYmx1ZX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbWFnZXVwbG9hZCBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTRweCAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMTAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLmNvbG9ycy5vbnh5fTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE0cHggJ1JvYm90byc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbWFnZXVwbG9hZCBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLmNvbG9ycy5yb3lhbGJsdWV9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZnJhbWUge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmltYWdldXBsb2FkIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICNmaWxlaWQge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0OyBcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI2Fib3ZlbGF5ZXIge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogODBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI2JvZHlfYmcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTIwO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMSwxLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5CYWNrZW5kLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jKGN0eCkgPT4ge1xuICAgIGNvbnN0IGNvb2tpZXMgPSBhd2FpdCBuZXh0Q29va2llKGN0eClcbiAgICBjb25zdCBnZXRmaXJzdHRhc2tzID0gYXdhaXQgZ2V0VGFza3MoNTAsIGNvb2tpZXMuYWNjZXNzVG9rZW4pXG4gICAgaWYoZ2V0Zmlyc3R0YXNrcyA9PSAnTm90IEF1dGhvcml6ZWQnKSB7XG4gICAgICAgIGlmIChjdHgucmVzKSB7XG4gICAgICAgICAgICBjdHgucmVzLndyaXRlSGVhZCgzMDEsIHtcbiAgICAgICAgICAgICAgTG9jYXRpb246ICcvbG9naW4nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGN0eC5yZXMuZW5kKCk7XG4gICAgICAgIH0gXG4gICAgfVxuICAgIGdldGZpcnN0dGFza3Muc29ydChjb21wYXJlKCdzdGF0dXMnKSlcbiAgICByZXR1cm4ge2dldEZpcnN0TG9hZDogZ2V0Zmlyc3R0YXNrc31cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/backend_host_controller.js\n");

/***/ })

})
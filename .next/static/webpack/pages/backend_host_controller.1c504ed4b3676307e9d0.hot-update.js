webpackHotUpdate_N_E("pages/backend_host_controller",{

/***/ "./pages/backend_host_controller.js":
/*!******************************************!*\
  !*** ./pages/backend_host_controller.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.js\");\n/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-cookies */ \"./node_modules/next-cookies/index.js\");\n/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _services_apiservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/apiservice */ \"./services/apiservice.js\");\n/* harmony import */ var _services_projectservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/projectservice */ \"./services/projectservice.js\");\n/* harmony import */ var _components_backend_taskmanager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/backend/taskmanager */ \"./components/backend/taskmanager.js\");\n\n\n\nvar _jsxFileName = \"/Users/williamforte/Canvas/burkedeveloping/pages/backend_host_controller.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\nfunction Backend(_ref) {\n  _s();\n\n  var getFirstLoad = _ref.getFirstLoad;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      file = _useState[0],\n      setFile = _useState[1];\n\n  var uploadImage = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var formData, uploadImage;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              formData = new FormData();\n              formData.append(\"myFile\", file);\n              uploadImage = fetch('http://localhost:3600/uploadfile', {});\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function uploadImage(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var handleFileChange = function handleFileChange(e) {\n    setFile(URL.createObjectURL(e.target.files[0]));\n  };\n\n  return __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"343936111\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue]]]) + \" \" + 'body',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    id: \"body_bg\",\n    src: \"/bg_login.png\",\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"343936111\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    id: \"abovelayer\",\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"343936111\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, __jsx(_components_backend_taskmanager__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    getFirstLoad: getFirstLoad,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  }), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"343936111\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue]]]) + \" \" + 'imageupload',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 17\n    }\n  }, __jsx(\"form\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"343936111\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: file ? file : '/noimage.png',\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"343936111\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 25\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"fileid\",\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"343936111\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 25\n    }\n  }, \"Upload Image\"), __jsx(\"input\", {\n    id: \"fileid\",\n    type: \"file\",\n    onChange: handleFileChange,\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"343936111\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 25\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"343936111\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 25\n    }\n  }, \"Upload File\")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    id: \"343936111\",\n    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue],\n    __self: this\n  }, \".imageupload.__jsx-style-dynamic-selector{float:left;width:23%;margin:20px 1%;position:relative;border-radius:10px;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);background:rgba(255,255,255,.7);box-shadow:0 0 2px rgba(20,20,20,.8);overflow:hidden;}.imageupload.__jsx-style-dynamic-selector form.__jsx-style-dynamic-selector{width:100%;float:left;}.imageupload.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector{float:left;width:80%;cursor:pointer;padding:14px 0;margin:10px 10%;margin-top:20px;border-radius:8px;background:\".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, \";-webkit-transition:background .3s ease;transition:background .3s ease;color:white;text-align:center;font:14px 'Roboto';}.imageupload.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector:hover{background:\").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, \";}.imageupload.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{float:left;width:80%;border:none;border-radius:8px;cursor:pointer;padding:14px 0;margin:10px 10%;margin-bottom:20px;background:\").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.onxy, \";-webkit-transition:background .3s ease;transition:background .3s ease;color:white;text-align:center;font:14px 'Roboto';}.imageupload.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{background:\").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.royalblue, \";}.imageupload.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:100%;float:left;}#fileid.__jsx-style-dynamic-selector{display:none;}.body.__jsx-style-dynamic-selector{float:left;width:100%;height:100%;z-index:1;overflow:hidden;}#abovelayer.__jsx-style-dynamic-selector{float:left;width:100%;height:100%;z-index:99;position:relative;margin-top:80px;}#body_bg.__jsx-style-dynamic-selector{width:100%;z-index:-20;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%) scale(1.1,1.1);-ms-transform:translate(-50%,-50%) scale(1.1,1.1);transform:translate(-50%,-50%) scale(1.1,1.1);}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtZm9ydGUvQ2FudmFzL2J1cmtlZGV2ZWxvcGluZy9wYWdlcy9iYWNrZW5kX2hvc3RfY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ3dCLEFBR2dDLEFBV0EsQUFJQSxBQWM2QixBQUc3QixBQWU2QixBQUc3QixBQUlFLEFBR0YsQUFPQSxBQVFBLFdBdkVELEFBV0MsQUFJRCxBQWlCQSxBQWtCQyxBQU9BLEFBT0EsQUFRQyxFQWxCaEIsUUFyRG1CLEFBZUEsQUFpQkgsQ0FyQmhCLEFBdUNBLEFBT2dCLEFBT0EsQ0FRTSxVQXZDQSxDQXlCUixBQU9DLEVBaEVPLEFBZUgsSUFZbkIsQUFrQkEsQ0EyQlksR0FkUSxDQU9FLElBUVQsRUF6RE8sQUFpQkQsR0FoQ0ksSUF5RTRCLEVBZm5ELEdBT29CLEdBaENELENBakJDLE1BZlUsTUFpRTlCLEVBaENvQixFQWpCRSxjQWtCQyxJQWpCcUIsZUFrQkEsaUJBbENMLFFBaUJKLGVBa0JBLFNBbENNLHFDQUNyQixNQXNFcEIsR0F0RGdCLE9BZmhCLEtBZ0JzQixHQWlCTixZQUNNLEdBakJDLGVBa0JBLElBakJ2QixlQWtCQSIsImZpbGUiOiIvVXNlcnMvd2lsbGlhbWZvcnRlL0NhbnZhcy9idXJrZWRldmVsb3BpbmcvcGFnZXMvYmFja2VuZF9ob3N0X2NvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IG5leHRDb29raWUgZnJvbSAnbmV4dC1jb29raWVzJ1xuaW1wb3J0IHsgIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpc2VydmljZSdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSAnLi4vc2VydmljZXMvcHJvamVjdHNlcnZpY2UnXG5pbXBvcnQgVGFza01hbmFnZXIsIHtjb21wYXJlfSBmcm9tICcuLi9jb21wb25lbnRzL2JhY2tlbmQvdGFza21hbmFnZXInXG5cbmZ1bmN0aW9uIEJhY2tlbmQoe2dldEZpcnN0TG9hZH0pIHtcblxuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICBjb25zdCB1cGxvYWRJbWFnZSA9IGFzeW5jKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwibXlGaWxlXCIsIGZpbGUpXG4gICAgICAgIGNvbnN0IHVwbG9hZEltYWdlID0gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzYwMC91cGxvYWRmaWxlJywge1xuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldEZpbGUoVVJMLmNyZWF0ZU9iamVjdFVSTChlLnRhcmdldC5maWxlc1swXSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvZHknPlxuICAgICAgICAgICAgPGltZyBpZD0nYm9keV9iZycgc3JjPScvYmdfbG9naW4ucG5nJy8+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYWJvdmVsYXllclwiPlxuICAgICAgICAgICAgICAgIDxUYXNrTWFuYWdlciBnZXRGaXJzdExvYWQ9e2dldEZpcnN0TG9hZH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2V1cGxvYWQnPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmaWxlID8gZmlsZTogJy9ub2ltYWdlLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZmlsZWlkJz5VcGxvYWQgSW1hZ2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdmaWxlaWQnIHR5cGU9J2ZpbGUnIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlVwbG9hZCBGaWxlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5pbWFnZXVwbG9hZCB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjMlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMSU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjcpO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMjAsMjAsMjAsLjgpO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW1hZ2V1cGxvYWQgZm9ybSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmltYWdldXBsb2FkIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTRweCAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMTAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuY29sb3JzLm9ueHl9O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udDogMTRweCAnUm9ib3RvJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmltYWdldXBsb2FkIGxhYmVsOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtUaGVtZS5jb2xvcnMucm95YWxibHVlfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmltYWdldXBsb2FkIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuY29sb3JzLm9ueHl9O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udDogMTRweCAnUm9ib3RvJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmltYWdldXBsb2FkIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuY29sb3JzLnJveWFsYmx1ZX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbWFnZXVwbG9hZCBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICNmaWxlaWQge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0OyBcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI2Fib3ZlbGF5ZXIge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogODBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI2JvZHlfYmcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTIwO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMSwxLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5CYWNrZW5kLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jKGN0eCkgPT4ge1xuICAgIGNvbnN0IGNvb2tpZXMgPSBhd2FpdCBuZXh0Q29va2llKGN0eClcbiAgICBjb25zdCBnZXRmaXJzdHRhc2tzID0gYXdhaXQgZ2V0VGFza3MoNTAsIGNvb2tpZXMuYWNjZXNzVG9rZW4pXG4gICAgaWYoZ2V0Zmlyc3R0YXNrcyA9PSAnTm90IEF1dGhvcml6ZWQnKSB7XG4gICAgICAgIGlmIChjdHgucmVzKSB7XG4gICAgICAgICAgICBjdHgucmVzLndyaXRlSGVhZCgzMDEsIHtcbiAgICAgICAgICAgICAgTG9jYXRpb246ICcvbG9naW4nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGN0eC5yZXMuZW5kKCk7XG4gICAgICAgIH0gXG4gICAgfVxuICAgIGdldGZpcnN0dGFza3Muc29ydChjb21wYXJlKCdzdGF0dXMnKSlcbiAgICByZXR1cm4ge2dldEZpcnN0TG9hZDogZ2V0Zmlyc3R0YXNrc31cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2VuZCJdfQ== */\\n/*@ sourceURL=/Users/williamforte/Canvas/burkedeveloping/pages/backend_host_controller.js */\")));\n}\n\n_s(Backend, \"Nkb8eHkBruGouXteoqeZ1R6wRVk=\");\n\n_c = Backend;\n\nBackend.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ctx) {\n    var cookies, getfirsttasks;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return next_cookies__WEBPACK_IMPORTED_MODULE_5___default()(ctx);\n\n          case 2:\n            cookies = _context2.sent;\n            _context2.next = 5;\n            return getTasks(50, cookies.accessToken);\n\n          case 5:\n            getfirsttasks = _context2.sent;\n\n            if (getfirsttasks == 'Not Authorized') {\n              if (ctx.res) {\n                ctx.res.writeHead(301, {\n                  Location: '/login'\n                });\n                ctx.res.end();\n              }\n            }\n\n            getfirsttasks.sort(Object(_components_backend_taskmanager__WEBPACK_IMPORTED_MODULE_8__[\"compare\"])('status'));\n            return _context2.abrupt(\"return\", {\n              getFirstLoad: getfirsttasks\n            });\n\n          case 9:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x2) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Backend);\n\nvar _c;\n\n$RefreshReg$(_c, \"Backend\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmFja2VuZF9ob3N0X2NvbnRyb2xsZXIuanM/ZmUxYyJdLCJuYW1lcyI6WyJCYWNrZW5kIiwiZ2V0Rmlyc3RMb2FkIiwidXNlU3RhdGUiLCJmaWxlIiwic2V0RmlsZSIsInVwbG9hZEltYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZldGNoIiwiaGFuZGxlRmlsZUNoYW5nZSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInRhcmdldCIsImZpbGVzIiwiVGhlbWUiLCJjb2xvcnMiLCJvbnh5Iiwicm95YWxibHVlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwibmV4dENvb2tpZSIsImNvb2tpZXMiLCJnZXRUYXNrcyIsImFjY2Vzc1Rva2VuIiwiZ2V0Zmlyc3R0YXNrcyIsInJlcyIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwic29ydCIsImNvbXBhcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsT0FBaUM7QUFBQTs7QUFBQSxNQUFmQyxZQUFlLFFBQWZBLFlBQWU7O0FBQUEsa0JBRUxDLHNEQUFRLENBQUMsSUFBRCxDQUZIO0FBQUEsTUFFdEJDLElBRnNCO0FBQUEsTUFFaEJDLE9BRmdCOztBQUk3QixNQUFNQyxXQUFXO0FBQUEsaU1BQUcsaUJBQU1DLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCQSxlQUFDLENBQUNDLGNBQUY7QUFDTUMsc0JBRlUsR0FFQyxJQUFJQyxRQUFKLEVBRkQ7QUFHaEJELHNCQUFRLENBQUNFLE1BQVQsQ0FBZ0IsUUFBaEIsRUFBMEJQLElBQTFCO0FBQ01FLHlCQUpVLEdBSUlNLEtBQUssQ0FBQyxrQ0FBRCxFQUFxQyxFQUFyQyxDQUpUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QUFSO0FBQUEsK0xBQTBCLGtCQUFNQyxHQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0FDLG1EQUFVLENBQUNELEdBQUQsQ0FEVjs7QUFBQTtBQUNoQkUsbUJBRGdCO0FBQUE7QUFBQSxtQkFFTUMsUUFBUSxDQUFDLEVBQUQsRUFBS0QsT0FBTyxDQUFDRSxXQUFiLENBRmQ7O0FBQUE7QUFFaEJDLHlCQUZnQjs7QUFHdEIsZ0JBQUdBLGFBQWEsSUFBSSxnQkFBcEIsRUFBc0M7QUFDbEMsa0JBQUlMLEdBQUcsQ0FBQ00sR0FBUixFQUFhO0FBQ1ROLG1CQUFHLENBQUNNLEdBQUosQ0FBUUMsU0FBUixDQUFrQixHQUFsQixFQUF1QjtBQUNyQkMsMEJBQVEsRUFBRTtBQURXLGlCQUF2QjtBQUdBUixtQkFBRyxDQUFDTSxHQUFKLENBQVFHLEdBQVI7QUFDSDtBQUNKOztBQUNESix5QkFBYSxDQUFDSyxJQUFkLENBQW1CQywrRUFBTyxDQUFDLFFBQUQsQ0FBMUI7QUFYc0IsOENBWWY7QUFBQ2hDLDBCQUFZLEVBQUUwQjtBQUFmLGFBWmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZWUzQixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2JhY2tlbmRfaG9zdF9jb250cm9sbGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCBuZXh0Q29va2llIGZyb20gJ25leHQtY29va2llcydcbmltcG9ydCB7ICB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaXNlcnZpY2UnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gJy4uL3NlcnZpY2VzL3Byb2plY3RzZXJ2aWNlJ1xuaW1wb3J0IFRhc2tNYW5hZ2VyLCB7Y29tcGFyZX0gZnJvbSAnLi4vY29tcG9uZW50cy9iYWNrZW5kL3Rhc2ttYW5hZ2VyJ1xuXG5mdW5jdGlvbiBCYWNrZW5kKHtnZXRGaXJzdExvYWR9KSB7XG5cbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgY29uc3QgdXBsb2FkSW1hZ2UgPSBhc3luYyhlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm15RmlsZVwiLCBmaWxlKVxuICAgICAgICBjb25zdCB1cGxvYWRJbWFnZSA9IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjM2MDAvdXBsb2FkZmlsZScsIHtcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRGaWxlKFVSTC5jcmVhdGVPYmplY3RVUkwoZS50YXJnZXQuZmlsZXNbMF0pKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2R5Jz5cbiAgICAgICAgICAgIDxpbWcgaWQ9J2JvZHlfYmcnIHNyYz0nL2JnX2xvZ2luLnBuZycvPlxuICAgICAgICAgICAgPGRpdiBpZD1cImFib3ZlbGF5ZXJcIj5cbiAgICAgICAgICAgICAgICA8VGFza01hbmFnZXIgZ2V0Rmlyc3RMb2FkPXtnZXRGaXJzdExvYWR9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdldXBsb2FkJz5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZmlsZSA/IGZpbGU6ICcvbm9pbWFnZS5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2ZpbGVpZCc+VXBsb2FkIEltYWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nZmlsZWlkJyB0eXBlPSdmaWxlJyBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5VcGxvYWQgRmlsZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaW1hZ2V1cGxvYWQge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIzJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDElO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43KTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDIwLDIwLDIwLC44KTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmltYWdldXBsb2FkIGZvcm0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbWFnZXVwbG9hZCBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE0cHggMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLmNvbG9ycy5vbnh5fTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE0cHggJ1JvYm90byc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbWFnZXVwbG9hZCBsYWJlbDpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuY29sb3JzLnJveWFsYmx1ZX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbWFnZXVwbG9hZCBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTRweCAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMTAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLmNvbG9ycy5vbnh5fTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE0cHggJ1JvYm90byc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbWFnZXVwbG9hZCBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLmNvbG9ycy5yb3lhbGJsdWV9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW1hZ2V1cGxvYWQgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjZmlsZWlkIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJvZHkge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDsgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICNhYm92ZWxheWVyIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICNib2R5X2JnIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0yMDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjEsMS4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuQmFja2VuZC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyhjdHgpID0+IHtcbiAgICBjb25zdCBjb29raWVzID0gYXdhaXQgbmV4dENvb2tpZShjdHgpXG4gICAgY29uc3QgZ2V0Zmlyc3R0YXNrcyA9IGF3YWl0IGdldFRhc2tzKDUwLCBjb29raWVzLmFjY2Vzc1Rva2VuKVxuICAgIGlmKGdldGZpcnN0dGFza3MgPT0gJ05vdCBBdXRob3JpemVkJykge1xuICAgICAgICBpZiAoY3R4LnJlcykge1xuICAgICAgICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAxLCB7XG4gICAgICAgICAgICAgIExvY2F0aW9uOiAnL2xvZ2luJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjdHgucmVzLmVuZCgpO1xuICAgICAgICB9IFxuICAgIH1cbiAgICBnZXRmaXJzdHRhc2tzLnNvcnQoY29tcGFyZSgnc3RhdHVzJykpXG4gICAgcmV0dXJuIHtnZXRGaXJzdExvYWQ6IGdldGZpcnN0dGFza3N9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/backend_host_controller.js\n");

/***/ })

})
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[slug]",{

/***/ "./pages/[slug].js":
/*!*************************!*\
  !*** ./pages/[slug].js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Schedule = ()=>{\n    _s();\n    const [city, setCity] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [teamName, setTeamName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const OppRosterTable = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"pages_components_opponentRosterTable_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./components/opponentRosterTable.js */ \"./pages/components/opponentRosterTable.js\")), {\n        loadableGenerated: {\n            modules: [\n                \"[slug].js -> \" + \"./components/opponentRosterTable.js\"\n            ]\n        },\n        suspense: true\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        let path = window && window.location.pathname.split(\"_\");\n        setCity(path[0].slice(1));\n        setTeamName(path[1]);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container pt-16 pl-6\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OppRosterTable, {\n            city: city,\n            teamName: teamName\n        }, void 0, false, {\n            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/[slug].js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/[slug].js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Schedule, \"4ucFxY1t7OKYdLQ8vUIPyhHq5CQ=\");\n_c = Schedule;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Schedule);\nvar _c;\n$RefreshReg$(_c, \"Schedule\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtDO0FBQ21CO0FBRXJELE1BQU1JLFdBQVcsSUFBTTs7SUFDckIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQTtJQUNoQyxNQUFNLENBQUNJLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBO0lBRXhDLE1BQU1NLGlCQUFpQlQsbURBQU9BLENBQUMsSUFBTSw0TkFBTzs7Ozs7O1FBQzFDVSxVQUFVLElBQUk7O0lBSWhCUixnREFBU0EsQ0FBRSxJQUFNO1FBQ2YsSUFBSVMsT0FBT0MsVUFBVUEsT0FBT0MsUUFBUSxDQUFDQyxRQUFRLENBQUNDLEtBQUssQ0FBQztRQUNwRFQsUUFBUUssSUFBSSxDQUFDLEVBQUUsQ0FBQ0ssS0FBSyxDQUFDO1FBQ3RCUixZQUFZRyxJQUFJLENBQUMsRUFBRTtJQUNyQixHQUFHLEVBQUU7SUFPTCxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ1Q7WUFBZUosTUFBTUE7WUFBTUUsVUFBVUE7Ozs7Ozs7Ozs7O0FBRzVDO0dBekJNSDtLQUFBQTtBQTJCTiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bc2x1Z10uanM/NmMxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgeyBTdXNwZW5zZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBTY2hlZHVsZSA9ICgpID0+IHtcbiAgY29uc3QgW2NpdHksIHNldENpdHldID0gdXNlU3RhdGUoKVxuICBjb25zdCBbdGVhbU5hbWUsIHNldFRlYW1OYW1lXSA9IHVzZVN0YXRlKClcbiAgXG4gIGNvbnN0IE9wcFJvc3RlclRhYmxlID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9vcHBvbmVudFJvc3RlclRhYmxlLmpzJyksIHtcbiAgICBzdXNwZW5zZTogdHJ1ZSxcbiAgfSk7XG5cblxuICB1c2VFZmZlY3QgKCgpID0+IHtcbiAgICBsZXQgcGF0aCA9IHdpbmRvdyAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJ18nKVxuICAgIHNldENpdHkocGF0aFswXS5zbGljZSgxKSlcbiAgICBzZXRUZWFtTmFtZShwYXRoWzFdKVxuICB9LCBbXSlcbiAgXG4gIFxuXG4gIFxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwdC0xNiBwbC02XCI+XG4gICAgICA8T3BwUm9zdGVyVGFibGUgY2l0eT17Y2l0eX0gdGVhbU5hbWU9e3RlYW1OYW1lfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjaGVkdWxlIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJTdXNwZW5zZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2NoZWR1bGUiLCJjaXR5Iiwic2V0Q2l0eSIsInRlYW1OYW1lIiwic2V0VGVhbU5hbWUiLCJPcHBSb3N0ZXJUYWJsZSIsInN1c3BlbnNlIiwicGF0aCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsInNsaWNlIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[slug].js\n"));

/***/ })

});
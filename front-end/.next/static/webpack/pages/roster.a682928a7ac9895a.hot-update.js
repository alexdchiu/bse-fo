"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/roster",{

/***/ "./pages/roster.js":
/*!*************************!*\
  !*** ./pages/roster.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Roster = (param)=>{\n    let { currRoster  } = param;\n    // axios.get('/api/players').then((data) => {\n    //   console.log(data)\n    // })\n    let modal = document.getElementById(\"modal\");\n    // const PlayerCard = dynamic(() => import('./components/playerCard.js'), {\n    //   suspense: true,\n    // });\n    const RosterTable = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"pages_components_rosterTable_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./components/rosterTable */ \"./pages/components/rosterTable.js\")), {\n        loadableGenerated: {\n            modules: [\n                \"roster.js -> \" + \"./components/rosterTable\"\n            ]\n        },\n        suspense: true\n    });\n    const PlayerCareerStatsTable = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"pages_components_playerCareerStatsTable_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./components/playerCareerStatsTable */ \"./pages/components/playerCareerStatsTable.js\")), {\n        loadableGenerated: {\n            modules: [\n                \"roster.js -> \" + \"./components/playerCareerStatsTable\"\n            ]\n        },\n        suspense: true\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {\n                fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RosterTable, {\n                    currRoster: currRoster\n                }, void 0, false, {\n                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/roster.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/roster.js\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {\n                fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerCareerStatsTable, {}, void 0, false, {\n                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/roster.js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/roster.js\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/roster.js\",\n        lineNumber: 23,\n        columnNumber: 10\n    }, undefined);\n};\n_c = Roster;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Roster);\nvar _c;\n$RefreshReg$(_c, \"Roster\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yb3N0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUI7QUFDUztBQUNGO0FBSWhDLE1BQU1HLFNBQVMsU0FBa0I7UUFBakIsRUFBQ0MsV0FBVSxFQUFDO0lBQzFCLDZDQUE2QztJQUM3QyxzQkFBc0I7SUFDdEIsS0FBSztJQUNMLElBQUlDLFFBQVFDLFNBQVNDLGNBQWMsQ0FBQztJQUVwQywyRUFBMkU7SUFDM0Usb0JBQW9CO0lBQ3BCLE1BQU07SUFDTixNQUFNQyxjQUFjUCxtREFBT0EsQ0FBQyxJQUFNLGlNQUFPOzs7Ozs7UUFDdkNRLFVBQVUsSUFBSTs7SUFFaEIsTUFBTUMseUJBQXlCVCxtREFBT0EsQ0FBQyxJQUFNLGtPQUFPOzs7Ozs7UUFDbERRLFVBQVUsSUFBSTs7SUFHaEIscUJBQU8sOERBQUNFOzswQkFFTiw4REFBQ1QsMkNBQVFBO2dCQUFDVSx3QkFBVSw4REFBQ0Q7OEJBQUk7OzBCQUN2Qiw0RUFBQ0g7b0JBQVlKLFlBQVlBOzs7Ozs7Ozs7OzswQkFPM0IsOERBQUNGLDJDQUFRQTtnQkFBQ1Usd0JBQVUsOERBQUNEOzhCQUFJOzswQkFDdkIsNEVBQUNEOzs7Ozs7Ozs7Ozs7Ozs7O0FBSVA7S0EvQk1QO0FBaUNOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Jvc3Rlci5qcz80N2E2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCB7IFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnXG5cblxuXG5jb25zdCBSb3N0ZXIgPSAoe2N1cnJSb3N0ZXJ9KSA9PiB7XG4gIC8vIGF4aW9zLmdldCgnL2FwaS9wbGF5ZXJzJykudGhlbigoZGF0YSkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIC8vIH0pXG4gIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpXG5cbiAgLy8gY29uc3QgUGxheWVyQ2FyZCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvcGxheWVyQ2FyZC5qcycpLCB7XG4gIC8vICAgc3VzcGVuc2U6IHRydWUsXG4gIC8vIH0pO1xuICBjb25zdCBSb3N0ZXJUYWJsZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvcm9zdGVyVGFibGUnKSwge1xuICAgIHN1c3BlbnNlOiB0cnVlLFxuICB9KTtcbiAgY29uc3QgUGxheWVyQ2FyZWVyU3RhdHNUYWJsZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvcGxheWVyQ2FyZWVyU3RhdHNUYWJsZScpLCB7XG4gICAgc3VzcGVuc2U6IHRydWUsXG4gIH0pO1xuICBcbiAgcmV0dXJuIDxkaXY+XG4gICAgXG4gICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgPFJvc3RlclRhYmxlIGN1cnJSb3N0ZXI9e2N1cnJSb3N0ZXJ9IC8+XG4gICAgPC9TdXNwZW5zZT5cbiAgICB7LyogPGRpdiBpZD1cIm1vZGFsXCI+XG4gICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgIDxQbGF5ZXJDYXJkIC8+XG4gICAgICA8L1N1c3BlbnNlPlxuICAgIDwvZGl2PiAqL31cbiAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICA8UGxheWVyQ2FyZWVyU3RhdHNUYWJsZSAvPlxuICAgIDwvU3VzcGVuc2U+XG4gIDwvZGl2PlxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm9zdGVyIl0sIm5hbWVzIjpbImF4aW9zIiwiZHluYW1pYyIsIlN1c3BlbnNlIiwiUm9zdGVyIiwiY3VyclJvc3RlciIsIm1vZGFsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJvc3RlclRhYmxlIiwic3VzcGVuc2UiLCJQbGF5ZXJDYXJlZXJTdGF0c1RhYmxlIiwiZGl2IiwiZmFsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/roster.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Roster = ()=>{\n    // axios.get('/api/players').then((data) => {\n    //   console.log(data)\n    // })\n    let modal = document.getElementById(\"modal\");\n    const PlayerCard = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"pages_components_playerCard_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./components/playerCard.js */ \"./pages/components/playerCard.js\")), {\n        loadableGenerated: {\n            modules: [\n                \"roster.js -> \" + \"./components/playerCard.js\"\n            ]\n        },\n        suspense: true\n    });\n    const RosterTable = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"pages_components_rosterTable_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./components/rosterTable */ \"./pages/components/rosterTable.js\")), {\n        loadableGenerated: {\n            modules: [\n                \"roster.js -> \" + \"./components/rosterTable\"\n            ]\n        },\n        suspense: true\n    });\n    const PlayerCareerStatsTable = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"pages_components_playerCareerStatsTable_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./components/playerCareerStatsTable */ \"./pages/components/playerCareerStatsTable.js\")), {\n        loadableGenerated: {\n            modules: [\n                \"roster.js -> \" + \"./components/playerCareerStatsTable\"\n            ]\n        },\n        suspense: true\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {\n                fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RosterTable, {}, void 0, false, {\n                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/roster.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/roster.js\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {\n                fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerCareerStatsTable, {}, void 0, false, {\n                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/roster.js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/roster.js\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/roster.js\",\n        lineNumber: 23,\n        columnNumber: 10\n    }, undefined);\n};\n_c = Roster;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Roster);\nvar _c;\n$RefreshReg$(_c, \"Roster\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yb3N0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUI7QUFDUztBQUNGO0FBSWhDLE1BQU1HLFNBQVMsSUFBTTtJQUNuQiw2Q0FBNkM7SUFDN0Msc0JBQXNCO0lBQ3RCLEtBQUs7SUFDTCxJQUFJQyxRQUFRQyxTQUFTQyxjQUFjLENBQUM7SUFFcEMsTUFBTUMsYUFBYU4sbURBQU9BLENBQUMsSUFBTSxpTUFBTzs7Ozs7O1FBQ3RDTyxVQUFVLElBQUk7O0lBRWhCLE1BQU1DLGNBQWNSLG1EQUFPQSxDQUFDLElBQU0saU1BQU87Ozs7OztRQUN2Q08sVUFBVSxJQUFJOztJQUVoQixNQUFNRSx5QkFBeUJULG1EQUFPQSxDQUFDLElBQU0sa09BQU87Ozs7OztRQUNsRE8sVUFBVSxJQUFJOztJQUdoQixxQkFBTyw4REFBQ0c7OzBCQUVOLDhEQUFDVCwyQ0FBUUE7Z0JBQUNVLHdCQUFVLDhEQUFDRDs4QkFBSTs7MEJBQ3ZCLDRFQUFDRjs7Ozs7Ozs7OzswQkFPSCw4REFBQ1AsMkNBQVFBO2dCQUFDVSx3QkFBVSw4REFBQ0Q7OEJBQUk7OzBCQUN2Qiw0RUFBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJUDtLQS9CTVA7QUFpQ04sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcm9zdGVyLmpzPzQ3YTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IHsgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCdcblxuXG5cbmNvbnN0IFJvc3RlciA9ICgpID0+IHtcbiAgLy8gYXhpb3MuZ2V0KCcvYXBpL3BsYXllcnMnKS50aGVuKChkYXRhKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coZGF0YSlcbiAgLy8gfSlcbiAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJylcblxuICBjb25zdCBQbGF5ZXJDYXJkID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9wbGF5ZXJDYXJkLmpzJyksIHtcbiAgICBzdXNwZW5zZTogdHJ1ZSxcbiAgfSk7XG4gIGNvbnN0IFJvc3RlclRhYmxlID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9yb3N0ZXJUYWJsZScpLCB7XG4gICAgc3VzcGVuc2U6IHRydWUsXG4gIH0pO1xuICBjb25zdCBQbGF5ZXJDYXJlZXJTdGF0c1RhYmxlID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9wbGF5ZXJDYXJlZXJTdGF0c1RhYmxlJyksIHtcbiAgICBzdXNwZW5zZTogdHJ1ZSxcbiAgfSk7XG4gIFxuICByZXR1cm4gPGRpdj5cbiAgICBcbiAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICA8Um9zdGVyVGFibGUgLz5cbiAgICA8L1N1c3BlbnNlPlxuICAgIHsvKiA8ZGl2IGlkPVwibW9kYWxcIj5cbiAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgPFBsYXllckNhcmQgLz5cbiAgICAgIDwvU3VzcGVuc2U+XG4gICAgPC9kaXY+ICovfVxuICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgIDxQbGF5ZXJDYXJlZXJTdGF0c1RhYmxlIC8+XG4gICAgPC9TdXNwZW5zZT5cbiAgPC9kaXY+XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3N0ZXIiXSwibmFtZXMiOlsiYXhpb3MiLCJkeW5hbWljIiwiU3VzcGVuc2UiLCJSb3N0ZXIiLCJtb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJQbGF5ZXJDYXJkIiwic3VzcGVuc2UiLCJSb3N0ZXJUYWJsZSIsIlBsYXllckNhcmVlclN0YXRzVGFibGUiLCJkaXYiLCJmYWxsYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/roster.js\n"));

/***/ })

});
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/roster"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Falexchiu%2FDocuments%2Fprojects%2Fbse-fo%2Ffront-end%2Fpages%2Froster.js&page=%2Froster!":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Falexchiu%2FDocuments%2Fprojects%2Fbse-fo%2Ffront-end%2Fpages%2Froster.js&page=%2Froster! ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/roster\",\n      function () {\n        return __webpack_require__(/*! ./pages/roster.js */ \"./pages/roster.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/roster\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRmFsZXhjaGl1JTJGRG9jdW1lbnRzJTJGcHJvamVjdHMlMkZic2UtZm8lMkZmcm9udC1lbmQlMkZwYWdlcyUyRnJvc3Rlci5qcyZwYWdlPSUyRnJvc3RlciEuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyw0Q0FBbUI7QUFDMUM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvPzBiZWUiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9yb3N0ZXJcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL3Jvc3Rlci5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvcm9zdGVyXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Falexchiu%2FDocuments%2Fprojects%2Fbse-fo%2Ffront-end%2Fpages%2Froster.js&page=%2Froster!\n"));

/***/ }),

/***/ "./pages/roster.js":
/*!*************************!*\
  !*** ./pages/roster.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Roster = ()=>{\n    // axios.get('/api/players').then((data) => {\n    //   console.log(data)\n    // })\n    let modal = document.getElementById(\"modal\");\n    // const PlayerCard = dynamic(() => import('./components/playerCard.js'), {\n    //   suspense: true,\n    // });\n    const RosterTable = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"pages_components_rosterTable_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./components/rosterTable */ \"./pages/components/rosterTable.js\")), {\n        loadableGenerated: {\n            modules: [\n                \"roster.js -> \" + \"./components/rosterTable\"\n            ]\n        },\n        suspense: true\n    });\n    const PlayerCareerStatsTable = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"pages_components_playerCareerStatsTable_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./components/playerCareerStatsTable */ \"./pages/components/playerCareerStatsTable.js\")), {\n        loadableGenerated: {\n            modules: [\n                \"roster.js -> \" + \"./components/playerCareerStatsTable\"\n            ]\n        },\n        suspense: true\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {\n                fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RosterTable, {}, void 0, false, {\n                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/roster.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/roster.js\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {\n                fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerCareerStatsTable, {}, void 0, false, {\n                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/roster.js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/roster.js\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/roster.js\",\n        lineNumber: 23,\n        columnNumber: 10\n    }, undefined);\n};\n_c = Roster;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Roster);\nvar _c;\n$RefreshReg$(_c, \"Roster\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yb3N0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUI7QUFDUztBQUNGO0FBSWhDLE1BQU1HLFNBQVMsSUFBTTtJQUNuQiw2Q0FBNkM7SUFDN0Msc0JBQXNCO0lBQ3RCLEtBQUs7SUFDTCxJQUFJQyxRQUFRQyxTQUFTQyxjQUFjLENBQUM7SUFFcEMsMkVBQTJFO0lBQzNFLG9CQUFvQjtJQUNwQixNQUFNO0lBQ04sTUFBTUMsY0FBY04sbURBQU9BLENBQUMsSUFBTSxpTUFBTzs7Ozs7O1FBQ3ZDTyxVQUFVLElBQUk7O0lBRWhCLE1BQU1DLHlCQUF5QlIsbURBQU9BLENBQUMsSUFBTSxrT0FBTzs7Ozs7O1FBQ2xETyxVQUFVLElBQUk7O0lBR2hCLHFCQUFPLDhEQUFDRTs7MEJBRU4sOERBQUNSLDJDQUFRQTtnQkFBQ1Msd0JBQVUsOERBQUNEOzhCQUFJOzswQkFDdkIsNEVBQUNIOzs7Ozs7Ozs7OzBCQU9ILDhEQUFDTCwyQ0FBUUE7Z0JBQUNTLHdCQUFVLDhEQUFDRDs4QkFBSTs7MEJBQ3ZCLDRFQUFDRDs7Ozs7Ozs7Ozs7Ozs7OztBQUlQO0tBL0JNTjtBQWlDTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yb3N0ZXIuanM/NDdhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgeyBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0J1xuXG5cblxuY29uc3QgUm9zdGVyID0gKCkgPT4ge1xuICAvLyBheGlvcy5nZXQoJy9hcGkvcGxheWVycycpLnRoZW4oKGRhdGEpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhkYXRhKVxuICAvLyB9KVxuICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKVxuXG4gIC8vIGNvbnN0IFBsYXllckNhcmQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL3BsYXllckNhcmQuanMnKSwge1xuICAvLyAgIHN1c3BlbnNlOiB0cnVlLFxuICAvLyB9KTtcbiAgY29uc3QgUm9zdGVyVGFibGUgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL3Jvc3RlclRhYmxlJyksIHtcbiAgICBzdXNwZW5zZTogdHJ1ZSxcbiAgfSk7XG4gIGNvbnN0IFBsYXllckNhcmVlclN0YXRzVGFibGUgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL3BsYXllckNhcmVlclN0YXRzVGFibGUnKSwge1xuICAgIHN1c3BlbnNlOiB0cnVlLFxuICB9KTtcbiAgXG4gIHJldHVybiA8ZGl2PlxuICAgIFxuICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgIDxSb3N0ZXJUYWJsZSAvPlxuICAgIDwvU3VzcGVuc2U+XG4gICAgey8qIDxkaXYgaWQ9XCJtb2RhbFwiPlxuICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICA8UGxheWVyQ2FyZCAvPlxuICAgICAgPC9TdXNwZW5zZT5cbiAgICA8L2Rpdj4gKi99XG4gICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgPFBsYXllckNhcmVlclN0YXRzVGFibGUgLz5cbiAgICA8L1N1c3BlbnNlPlxuICA8L2Rpdj5cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvc3RlciJdLCJuYW1lcyI6WyJheGlvcyIsImR5bmFtaWMiLCJTdXNwZW5zZSIsIlJvc3RlciIsIm1vZGFsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJvc3RlclRhYmxlIiwic3VzcGVuc2UiLCJQbGF5ZXJDYXJlZXJTdGF0c1RhYmxlIiwiZGl2IiwiZmFsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/roster.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Falexchiu%2FDocuments%2Fprojects%2Fbse-fo%2Ffront-end%2Fpages%2Froster.js&page=%2Froster!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages_components_navBar_js",{

/***/ "./pages/components/allTeams.js":
/*!**************************************!*\
  !*** ./pages/components/allTeams.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TeamRow = (param)=>{\n    let { team , teamID  } = param;\n    console.log(teamID);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        a: true,\n        href: \"/opponent\",\n        className: \"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white\",\n        role: \"menuitem\",\n        value: teamID,\n        children: team\n    }, void 0, false, {\n        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/allTeams.js\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TeamRow;\nconst AllTeams = (param)=>{\n    let { teamNames , teamIDs  } = param;\n    // console.log('teamNames', teamNames)\n    // console.log('teamIDs', teamIDs)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: teamNames && teamNames.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TeamRow, {\n                    team: team,\n                    teamID: teamIDs[team]\n                }, teamIDs[team], false, {\n                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/allTeams.js\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/allTeams.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/allTeams.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = AllTeams;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllTeams);\nvar _c, _c1;\n$RefreshReg$(_c, \"TeamRow\");\n$RefreshReg$(_c1, \"AllTeams\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2FsbFRlYW1zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxVQUFVLFNBQW9CO1FBQW5CLEVBQUNDLEtBQUksRUFBRUMsT0FBTSxFQUFDO0lBQzdCQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1oscUJBQ0UsOERBQUNHO1FBQUdDLENBQUM7UUFBQ0MsTUFBSztRQUFZQyxXQUFVO1FBQTBIQyxNQUFLO1FBQVdDLE9BQU9SO2tCQUNqTEQ7Ozs7OztBQUdMO0tBUE1EO0FBU04sTUFBTVcsV0FBVyxTQUEwQjtRQUF6QixFQUFDQyxVQUFTLEVBQUVDLFFBQU8sRUFBQztJQUNwQyxzQ0FBc0M7SUFDdEMsa0NBQWtDO0lBQ2xDLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0M7c0JBQ0VILGFBQWFBLFVBQVVJLEdBQUcsQ0FBQyxDQUFDZixxQkFDM0IsOERBQUNEO29CQUFRQyxNQUFNQTtvQkFBTUMsUUFBUVcsT0FBTyxDQUFDWixLQUFLO21CQUFPWSxPQUFPLENBQUNaLEtBQUs7Ozs7Ozs7Ozs7Ozs7OztBQUt4RTtNQVpNVTtBQWNOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvYWxsVGVhbXMuanM/OTljMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUZWFtUm93ID0gKHt0ZWFtLCB0ZWFtSUR9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHRlYW1JRClcbiAgcmV0dXJuIChcbiAgICA8bGkgYSBocmVmPVwiL29wcG9uZW50XCIgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOnRleHQtZ3JheS0zMDAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGVcIiByb2xlPVwibWVudWl0ZW1cIiB2YWx1ZT17dGVhbUlEfT5cbiAgICB7dGVhbX1cbiAgPC9saT5cbiAgKVxufVxuXG5jb25zdCBBbGxUZWFtcyA9ICh7dGVhbU5hbWVzLCB0ZWFtSURzfSkgPT4ge1xuICAvLyBjb25zb2xlLmxvZygndGVhbU5hbWVzJywgdGVhbU5hbWVzKVxuICAvLyBjb25zb2xlLmxvZygndGVhbUlEcycsIHRlYW1JRHMpXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDx1bD5cbiAgICAgICAge3RlYW1OYW1lcyAmJiB0ZWFtTmFtZXMubWFwKCh0ZWFtKSA9PiBcbiAgICAgICAgICA8VGVhbVJvdyB0ZWFtPXt0ZWFtfSB0ZWFtSUQ9e3RlYW1JRHNbdGVhbV19IGtleT17dGVhbUlEc1t0ZWFtXX0vPlxuICAgICAgICApfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGxUZWFtcyJdLCJuYW1lcyI6WyJUZWFtUm93IiwidGVhbSIsInRlYW1JRCIsImNvbnNvbGUiLCJsb2ciLCJsaSIsImEiLCJocmVmIiwiY2xhc3NOYW1lIiwicm9sZSIsInZhbHVlIiwiQWxsVGVhbXMiLCJ0ZWFtTmFtZXMiLCJ0ZWFtSURzIiwiZGl2IiwidWwiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/allTeams.js\n"));

/***/ })

});
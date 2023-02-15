"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages_components_rosterTable_js",{

/***/ "./pages/components/rosterTable.js":
/*!*****************************************!*\
  !*** ./pages/components/rosterTable.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sample_api_responses_teamProfile_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../sample_api_responses/teamProfile.json */ \"../sample_api_responses/teamProfile.json\");\n/* harmony import */ var _sample_api_responses_seasonalStats_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../sample_api_responses/seasonalStats.json */ \"../sample_api_responses/seasonalStats.json\");\n\n\n\nconst PlayerRow = (player)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        class: \"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n            scope: \"row\",\n            class: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#\",\n                children: player.full_name\n            }, void 0, false, {\n                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PlayerRow;\nconst rosterTable = ()=>{\n    const teamData = _sample_api_responses_teamProfile_json__WEBPACK_IMPORTED_MODULE_1__.players;\n    const seasonData = _sample_api_responses_seasonalStats_json__WEBPACK_IMPORTED_MODULE_2__;\n    const playersData = Object.entries(seasonData.players);\n    console.log(teamData, seasonData, playersData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"relative overflow-x-auto shadow-md sm:rounded-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            class: \"w-full text-sm text-left text-gray-500 dark:text-gray-400\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    class: \"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"Player\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 77,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"GP\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 80,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"GS\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 83,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"MPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 86,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"PPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 89,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"RPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 92,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"APG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 95,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"SPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 98,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"BPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 101,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"TPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 104,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"FG%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 107,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"3P%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 110,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"FT%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 113,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"TS%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 116,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"EFF\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 119,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"+/-\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 122,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                        lineNumber: 76,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: playersData[1].map((player)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerRow, {\n                            player: player\n                        }, player.id, false, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                            lineNumber: 181,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n            lineNumber: 74,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n        lineNumber: 73,\n        columnNumber: 1\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (rosterTable);\nvar _c;\n$RefreshReg$(_c, \"PlayerRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3Jvc3RlclRhYmxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3RTtBQUVJO0FBRTVFLE1BQU1FLFlBQVksQ0FBQ0MsU0FBVztJQUM1QixxQkFDRSw4REFBQ0M7UUFBR0MsT0FBTTtrQkFDUiw0RUFBQ0M7WUFBR0MsT0FBTTtZQUFNRixPQUFNO3NCQUNwQiw0RUFBQ0c7Z0JBQUVDLE1BQUs7MEJBQUtOLE9BQU9PLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvRHJDO0tBeERNUjtBQTRETixNQUFNUyxjQUFjLElBQU07SUFDeEIsTUFBTUMsV0FBV1osMkVBQW1CO0lBQ3BDLE1BQU1jLGFBQWFiLHFFQUFhQTtJQUNoQyxNQUFNYyxjQUFjQyxPQUFPQyxPQUFPLENBQUNILFdBQVdELE9BQU87SUFDckRLLFFBQVFDLEdBQUcsQ0FBQ1AsVUFBVUUsWUFBWUM7SUFFbEMscUJBRUYsOERBQUNLO1FBQUlmLE9BQU07a0JBQ1AsNEVBQUNnQjtZQUFNaEIsT0FBTTs7OEJBQ1QsOERBQUNpQjtvQkFBTWpCLE9BQU07OEJBQ1QsNEVBQUNEOzswQ0FDRyw4REFBQ0U7Z0NBQUdDLE9BQU07Z0NBQU1GLE9BQU07MENBQVk7Ozs7OzswQ0FHbEMsOERBQUNDO2dDQUFHQyxPQUFNO2dDQUFNRixPQUFNOzBDQUFZOzs7Ozs7MENBR2xDLDhEQUFDQztnQ0FBR0MsT0FBTTtnQ0FBTUYsT0FBTTswQ0FBWTs7Ozs7OzBDQUdsQyw4REFBQ0M7Z0NBQUdDLE9BQU07Z0NBQU1GLE9BQU07MENBQVk7Ozs7OzswQ0FHbEMsOERBQUNDO2dDQUFHQyxPQUFNO2dDQUFNRixPQUFNOzBDQUFZOzs7Ozs7MENBR2xDLDhEQUFDQztnQ0FBR0MsT0FBTTtnQ0FBTUYsT0FBTTswQ0FBWTs7Ozs7OzBDQUdsQyw4REFBQ0M7Z0NBQUdDLE9BQU07Z0NBQU1GLE9BQU07MENBQVk7Ozs7OzswQ0FHbEMsOERBQUNDO2dDQUFHQyxPQUFNO2dDQUFNRixPQUFNOzBDQUFZOzs7Ozs7MENBR2xDLDhEQUFDQztnQ0FBR0MsT0FBTTtnQ0FBTUYsT0FBTTswQ0FBWTs7Ozs7OzBDQUdsQyw4REFBQ0M7Z0NBQUdDLE9BQU07Z0NBQU1GLE9BQU07MENBQVk7Ozs7OzswQ0FHbEMsOERBQUNDO2dDQUFHQyxPQUFNO2dDQUFNRixPQUFNOzBDQUFZOzs7Ozs7MENBR2xDLDhEQUFDQztnQ0FBR0MsT0FBTTtnQ0FBTUYsT0FBTTswQ0FBWTs7Ozs7OzBDQUdsQyw4REFBQ0M7Z0NBQUdDLE9BQU07Z0NBQU1GLE9BQU07MENBQVk7Ozs7OzswQ0FHbEMsOERBQUNDO2dDQUFHQyxPQUFNO2dDQUFNRixPQUFNOzBDQUFZOzs7Ozs7MENBR2xDLDhEQUFDQztnQ0FBR0MsT0FBTTtnQ0FBTUYsT0FBTTswQ0FBWTs7Ozs7OzBDQUdsQyw4REFBQ0M7Z0NBQUdDLE9BQU07Z0NBQU1GLE9BQU07MENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUsxQyw4REFBQ2tCOzhCQXFESVIsV0FBVyxDQUFDLEVBQUUsQ0FBQ1MsR0FBRyxDQUFDLENBQUNyQix1QkFDbkIsOERBQUNEOzRCQUVDQyxRQUFVQTsyQkFESEEsT0FBT3NCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNoQztBQUVBLCtEQUFlZCxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvcm9zdGVyVGFibGUuanM/M2VjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGVhbVByb2ZpbGUgZnJvbSAnLi4vLi4vLi4vc2FtcGxlX2FwaV9yZXNwb25zZXMvdGVhbVByb2ZpbGUuanNvbidcblxuaW1wb3J0IHNlYXNvbmFsU3RhdHMgZnJvbSAnLi4vLi4vLi4vc2FtcGxlX2FwaV9yZXNwb25zZXMvc2Vhc29uYWxTdGF0cy5qc29uJ1xuXG5jb25zdCBQbGF5ZXJSb3cgPSAocGxheWVyKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHRyIGNsYXNzPVwiYmctd2hpdGUgYm9yZGVyLWIgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTUwIGRhcms6aG92ZXI6YmctZ3JheS02MDBcIj5cbiAgICAgIDx0aCBzY29wZT1cInJvd1wiIGNsYXNzPVwicHgtNiBweS00IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgIDxhIGhyZWY9XCIjXCI+e3BsYXllci5mdWxsX25hbWV9PC9hPlxuICAgICAgPC90aD5cbiAgICAgIHsvKiA8dGQgY2xhc3M9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci50b3RhbC5nYW1lc19wbGF5ZWR9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgICAgIHtwbGF5ZXIudG90YWwuZ2FtZXNfc3RhcnRlZH1cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci50b3RhbC5nYW1lc19zdGFydGVkfVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzcz1cInB4LTYgcHktNFwiPlxuICAgICAgICB7cGxheWVyLmF2ZXJhZ2UubWludXRlc31cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci5hdmVyYWdlLnBvaW50c31cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci5hdmVyYWdlLnBvaW50c31cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci5hdmVyYWdlLnJlYm91bmRzfVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzcz1cInB4LTYgcHktNFwiPlxuICAgICAgICB7cGxheWVyLmF2ZXJhZ2UuYXNzaXN0c31cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci5hdmVyYWdlLnN0ZWFsc31cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci5hdmVyYWdlLmJsb2Nrc31cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci5hdmVyYWdlLnR1cm5vdmVyc31cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci50b3RhbC5maWVsZF9nb2Fsc19wY3R9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgICAgIHtwbGF5ZXIudG90YWwuZnJlZV90aHJvd3NfcGN0fVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzcz1cInB4LTYgcHktNFwiPlxuICAgICAgICB7cGxheWVyLnRvdGFsLnRydWVfc2hvb3RpbmdfcGN0fVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzcz1cInB4LTYgcHktNFwiPlxuICAgICAgICB7cGxheWVyLmF2ZXJhZ2UuZWZmaWNpZW5jeX1cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci50b3RhbC5wbHVzIC0gcGxheWVyLnRvdGFsLm1pbnVzfVxuICAgICAgPC90ZD4gKi99XG4gIDwvdHI+XG4gIClcbn1cblxuXG5cbmNvbnN0IHJvc3RlclRhYmxlID0gKCkgPT4ge1xuICBjb25zdCB0ZWFtRGF0YSA9IHRlYW1Qcm9maWxlLnBsYXllcnNcbiAgY29uc3Qgc2Vhc29uRGF0YSA9IHNlYXNvbmFsU3RhdHNcbiAgY29uc3QgcGxheWVyc0RhdGEgPSBPYmplY3QuZW50cmllcyhzZWFzb25EYXRhLnBsYXllcnMpXG4gIGNvbnNvbGUubG9nKHRlYW1EYXRhLCBzZWFzb25EYXRhLCBwbGF5ZXJzRGF0YSlcbiAgXG4gIHJldHVybiAoXG4gICAgXG48ZGl2IGNsYXNzPVwicmVsYXRpdmUgb3ZlcmZsb3cteC1hdXRvIHNoYWRvdy1tZCBzbTpyb3VuZGVkLWxnXCI+XG4gICAgPHRhYmxlIGNsYXNzPVwidy1mdWxsIHRleHQtc20gdGV4dC1sZWZ0IHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgIDx0aGVhZCBjbGFzcz1cInRleHQteHMgdGV4dC1ncmF5LTcwMCB1cHBlcmNhc2UgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIFBsYXllclxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3M9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgR1BcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIEdTXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzcz1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBNUEdcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIFBQR1xuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3M9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgUlBHXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzcz1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBBUEdcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIFNQR1xuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3M9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgQlBHXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzcz1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBUUEdcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIEZHJVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3M9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgM1AlXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzcz1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBGVCVcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIFRTJVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3M9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgRUZGXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzcz1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICArLy1cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgey8qIDx0ciBjbGFzcz1cImJnLXdoaXRlIGJvcmRlci1iIGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS03MDAgaG92ZXI6YmctZ3JheS01MCBkYXJrOmhvdmVyOmJnLWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCIgY2xhc3M9XCJweC02IHB5LTQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgQXBwbGUgTWFjQm9vayBQcm8gMTdcIlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIFNsaXZlclxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIExhcHRvcFxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgICQyOTk5XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweC02IHB5LTQgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZm9udC1tZWRpdW0gdGV4dC1ibHVlLTYwMCBkYXJrOnRleHQtYmx1ZS01MDAgaG92ZXI6dW5kZXJsaW5lXCI+RWRpdDwvYT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImJnLXdoaXRlIGJvcmRlci1iIGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS03MDAgaG92ZXI6YmctZ3JheS01MCBkYXJrOmhvdmVyOmJnLWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCIgY2xhc3M9XCJweC02IHB5LTQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgTWljcm9zb2Z0IFN1cmZhY2UgUHJvXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweC02IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgV2hpdGVcbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB4LTYgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICBMYXB0b3AgUENcbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB4LTYgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICAkMTk5OVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHgtNiBweS00IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImZvbnQtbWVkaXVtIHRleHQtYmx1ZS02MDAgZGFyazp0ZXh0LWJsdWUtNTAwIGhvdmVyOnVuZGVybGluZVwiPkVkaXQ8L2E+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwIGhvdmVyOmJnLWdyYXktNTAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiIGNsYXNzPVwicHgtNiBweS00IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIE1hZ2ljIE1vdXNlIDJcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB4LTYgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICBCbGFja1xuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIEFjY2Vzc29yaWVzXG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweC02IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgJDk5XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweC02IHB5LTQgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZm9udC1tZWRpdW0gdGV4dC1ibHVlLTYwMCBkYXJrOnRleHQtYmx1ZS01MDAgaG92ZXI6dW5kZXJsaW5lXCI+RWRpdDwvYT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj4gKi99XG5cbiAgICAgICAgICAgIHtwbGF5ZXJzRGF0YVsxXS5tYXAoKHBsYXllcikgPT4gXG4gICAgICAgICAgICAgIDxQbGF5ZXJSb3dcbiAgICAgICAgICAgICAgICBrZXkgPSB7cGxheWVyLmlkfVxuICAgICAgICAgICAgICAgIHBsYXllciA9IHtwbGF5ZXJ9IFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbjwvZGl2PlxuXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcm9zdGVyVGFibGUiXSwibmFtZXMiOlsidGVhbVByb2ZpbGUiLCJzZWFzb25hbFN0YXRzIiwiUGxheWVyUm93IiwicGxheWVyIiwidHIiLCJjbGFzcyIsInRoIiwic2NvcGUiLCJhIiwiaHJlZiIsImZ1bGxfbmFtZSIsInJvc3RlclRhYmxlIiwidGVhbURhdGEiLCJwbGF5ZXJzIiwic2Vhc29uRGF0YSIsInBsYXllcnNEYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJ0YWJsZSIsInRoZWFkIiwidGJvZHkiLCJtYXAiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/rosterTable.js\n"));

/***/ })

});
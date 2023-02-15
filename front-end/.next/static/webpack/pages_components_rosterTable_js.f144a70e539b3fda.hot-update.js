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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sample_api_responses_teamProfile_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../sample_api_responses/teamProfile.json */ \"../sample_api_responses/teamProfile.json\");\n/* harmony import */ var _sample_api_responses_seasonalStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../sample_api_responses/seasonalStats */ \"../sample_api_responses/seasonalStats.js\");\n\n\n\nconst PlayerRow = (data)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        className: \"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n            scope: \"row\",\n            className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#\",\n                children: data.player.full_name\n            }, void 0, false, {\n                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PlayerRow;\nconst rosterTable = ()=>{\n    const teamData = _sample_api_responses_teamProfile_json__WEBPACK_IMPORTED_MODULE_1__.players;\n    // console.log(seasonalStats)\n    const playersData = Object.values(_sample_api_responses_seasonalStats__WEBPACK_IMPORTED_MODULE_2__.seasonalStats.players);\n    // console.log(teamData, playersData)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative overflow-x-auto shadow-md sm:rounded-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"w-full text-sm text-left text-gray-500 dark:text-gray-400\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    className: \"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"Player\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 77,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"GP\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 80,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"GS\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 83,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"MPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 86,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"PPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 89,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"RPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 92,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"APG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 95,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"SPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 98,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"BPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 101,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"TPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 104,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"FG%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 107,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"3P%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 110,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"FT%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 113,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"TS%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 116,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"EFF\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 119,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"+/-\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 122,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                        lineNumber: 76,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: playersData && playersData.map((player)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerRow, {\n                            player: player\n                        }, player.id, false, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                            lineNumber: 181,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n            lineNumber: 74,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n        lineNumber: 73,\n        columnNumber: 1\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (rosterTable);\nvar _c;\n$RefreshReg$(_c, \"PlayerRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3Jvc3RlclRhYmxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3RTtBQUVHO0FBRTNFLE1BQU1FLFlBQVksQ0FBQ0MsT0FBUztJQUMxQixxQkFDRSw4REFBQ0M7UUFBR0MsV0FBVTtrQkFDWiw0RUFBQ0M7WUFBR0MsT0FBTTtZQUFNRixXQUFVO3NCQUN4Qiw0RUFBQ0c7Z0JBQUVDLE1BQUs7MEJBQUtOLEtBQUtPLE1BQU0sQ0FBQ0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQW9EMUM7S0F4RE1UO0FBNEROLE1BQU1VLGNBQWMsSUFBTTtJQUN4QixNQUFNQyxXQUFXYiwyRUFBbUI7SUFDcEMsNkJBQTZCO0lBQzdCLE1BQU1lLGNBQWNDLE9BQU9DLE1BQU0sQ0FBQ2hCLHNGQUFxQjtJQUN2RCxxQ0FBcUM7SUFFckMscUJBRUYsOERBQUNpQjtRQUFJYixXQUFVO2tCQUNYLDRFQUFDYztZQUFNZCxXQUFVOzs4QkFDYiw4REFBQ2U7b0JBQU1mLFdBQVU7OEJBQ2IsNEVBQUNEOzswQ0FDRyw4REFBQ0U7Z0NBQUdDLE9BQU07Z0NBQU1GLFdBQVU7MENBQVk7Ozs7OzswQ0FHdEMsOERBQUNDO2dDQUFHQyxPQUFNO2dDQUFNRixXQUFVOzBDQUFZOzs7Ozs7MENBR3RDLDhEQUFDQztnQ0FBR0MsT0FBTTtnQ0FBTUYsV0FBVTswQ0FBWTs7Ozs7OzBDQUd0Qyw4REFBQ0M7Z0NBQUdDLE9BQU07Z0NBQU1GLFdBQVU7MENBQVk7Ozs7OzswQ0FHdEMsOERBQUNDO2dDQUFHQyxPQUFNO2dDQUFNRixXQUFVOzBDQUFZOzs7Ozs7MENBR3RDLDhEQUFDQztnQ0FBR0MsT0FBTTtnQ0FBTUYsV0FBVTswQ0FBWTs7Ozs7OzBDQUd0Qyw4REFBQ0M7Z0NBQUdDLE9BQU07Z0NBQU1GLFdBQVU7MENBQVk7Ozs7OzswQ0FHdEMsOERBQUNDO2dDQUFHQyxPQUFNO2dDQUFNRixXQUFVOzBDQUFZOzs7Ozs7MENBR3RDLDhEQUFDQztnQ0FBR0MsT0FBTTtnQ0FBTUYsV0FBVTswQ0FBWTs7Ozs7OzBDQUd0Qyw4REFBQ0M7Z0NBQUdDLE9BQU07Z0NBQU1GLFdBQVU7MENBQVk7Ozs7OzswQ0FHdEMsOERBQUNDO2dDQUFHQyxPQUFNO2dDQUFNRixXQUFVOzBDQUFZOzs7Ozs7MENBR3RDLDhEQUFDQztnQ0FBR0MsT0FBTTtnQ0FBTUYsV0FBVTswQ0FBWTs7Ozs7OzBDQUd0Qyw4REFBQ0M7Z0NBQUdDLE9BQU07Z0NBQU1GLFdBQVU7MENBQVk7Ozs7OzswQ0FHdEMsOERBQUNDO2dDQUFHQyxPQUFNO2dDQUFNRixXQUFVOzBDQUFZOzs7Ozs7MENBR3RDLDhEQUFDQztnQ0FBR0MsT0FBTTtnQ0FBTUYsV0FBVTswQ0FBWTs7Ozs7OzBDQUd0Qyw4REFBQ0M7Z0NBQUdDLE9BQU07Z0NBQU1GLFdBQVU7MENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUs5Qyw4REFBQ2dCOzhCQXFESU4sZUFBZUEsWUFBWU8sR0FBRyxDQUFDLENBQUNaLHVCQUMvQiw4REFBQ1I7NEJBRUNRLFFBQVVBOzJCQURIQSxPQUFPYSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTaEM7QUFFQSwrREFBZVgsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL3Jvc3RlclRhYmxlLmpzPzNlYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRlYW1Qcm9maWxlIGZyb20gJy4uLy4uLy4uL3NhbXBsZV9hcGlfcmVzcG9uc2VzL3RlYW1Qcm9maWxlLmpzb24nXG5cbmltcG9ydCB7IHNlYXNvbmFsU3RhdHMgfSBmcm9tICcuLi8uLi8uLi9zYW1wbGVfYXBpX3Jlc3BvbnNlcy9zZWFzb25hbFN0YXRzJ1xuXG5jb25zdCBQbGF5ZXJSb3cgPSAoZGF0YSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDx0ciBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItYiBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNTAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMFwiPlxuICAgICAgPHRoIHNjb3BlPVwicm93XCIgY2xhc3NOYW1lPVwicHgtNiBweS00IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgIDxhIGhyZWY9XCIjXCI+e2RhdGEucGxheWVyLmZ1bGxfbmFtZX08L2E+XG4gICAgICA8L3RoPlxuICAgICAgey8qIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci50b3RhbC5nYW1lc19wbGF5ZWR9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICB7cGxheWVyLnRvdGFsLmdhbWVzX3N0YXJ0ZWR9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICB7cGxheWVyLnRvdGFsLmdhbWVzX3N0YXJ0ZWR9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICB7cGxheWVyLmF2ZXJhZ2UubWludXRlc31cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgIHtwbGF5ZXIuYXZlcmFnZS5wb2ludHN9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICB7cGxheWVyLmF2ZXJhZ2UucG9pbnRzfVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci5hdmVyYWdlLnJlYm91bmRzfVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci5hdmVyYWdlLmFzc2lzdHN9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICB7cGxheWVyLmF2ZXJhZ2Uuc3RlYWxzfVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci5hdmVyYWdlLmJsb2Nrc31cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgIHtwbGF5ZXIuYXZlcmFnZS50dXJub3ZlcnN9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICB7cGxheWVyLnRvdGFsLmZpZWxkX2dvYWxzX3BjdH1cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgIHtwbGF5ZXIudG90YWwuZnJlZV90aHJvd3NfcGN0fVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci50b3RhbC50cnVlX3Nob290aW5nX3BjdH1cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgIHtwbGF5ZXIuYXZlcmFnZS5lZmZpY2llbmN5fVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci50b3RhbC5wbHVzIC0gcGxheWVyLnRvdGFsLm1pbnVzfVxuICAgICAgPC90ZD4gKi99XG4gIDwvdHI+XG4gIClcbn1cblxuXG5cbmNvbnN0IHJvc3RlclRhYmxlID0gKCkgPT4ge1xuICBjb25zdCB0ZWFtRGF0YSA9IHRlYW1Qcm9maWxlLnBsYXllcnNcbiAgLy8gY29uc29sZS5sb2coc2Vhc29uYWxTdGF0cylcbiAgY29uc3QgcGxheWVyc0RhdGEgPSBPYmplY3QudmFsdWVzKHNlYXNvbmFsU3RhdHMucGxheWVycylcbiAgLy8gY29uc29sZS5sb2codGVhbURhdGEsIHBsYXllcnNEYXRhKVxuICBcbiAgcmV0dXJuIChcbiAgICBcbjxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3cteC1hdXRvIHNoYWRvdy1tZCBzbTpyb3VuZGVkLWxnXCI+XG4gICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXNtIHRleHQtbGVmdCB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNzAwIHVwcGVyY2FzZSBiZy1ncmF5LTUwIGRhcms6YmctZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIFBsYXllclxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIEdQXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgR1NcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBNUEdcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBQUEdcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBSUEdcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBBUEdcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBTUEdcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBCUEdcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBUUEdcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBGRyVcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICAzUCVcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBGVCVcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBUUyVcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBFRkZcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICArLy1cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgey8qIDx0ciBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItYiBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNTAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiIGNsYXNzTmFtZT1cInB4LTYgcHktNCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICBBcHBsZSBNYWNCb29rIFBybyAxN1wiXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIFNsaXZlclxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICBMYXB0b3BcbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgJDI5OTlcbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtYmx1ZS02MDAgZGFyazp0ZXh0LWJsdWUtNTAwIGhvdmVyOnVuZGVybGluZVwiPkVkaXQ8L2E+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyLWIgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTUwIGRhcms6aG92ZXI6YmctZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIiBjbGFzc05hbWU9XCJweC02IHB5LTQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgTWljcm9zb2Z0IFN1cmZhY2UgUHJvXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIFdoaXRlXG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIExhcHRvcCBQQ1xuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICAkMTk5OVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ibHVlLTYwMCBkYXJrOnRleHQtYmx1ZS01MDAgaG92ZXI6dW5kZXJsaW5lXCI+RWRpdDwvYT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwIGhvdmVyOmJnLWdyYXktNTAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiIGNsYXNzTmFtZT1cInB4LTYgcHktNCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICBNYWdpYyBNb3VzZSAyXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIEJsYWNrXG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIEFjY2Vzc29yaWVzXG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgICQ5OVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ibHVlLTYwMCBkYXJrOnRleHQtYmx1ZS01MDAgaG92ZXI6dW5kZXJsaW5lXCI+RWRpdDwvYT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj4gKi99XG5cbiAgICAgICAgICAgIHtwbGF5ZXJzRGF0YSAmJiBwbGF5ZXJzRGF0YS5tYXAoKHBsYXllcikgPT4gXG4gICAgICAgICAgICAgIDxQbGF5ZXJSb3dcbiAgICAgICAgICAgICAgICBrZXkgPSB7cGxheWVyLmlkfVxuICAgICAgICAgICAgICAgIHBsYXllciA9IHtwbGF5ZXJ9IFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbjwvZGl2PlxuXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcm9zdGVyVGFibGUiXSwibmFtZXMiOlsidGVhbVByb2ZpbGUiLCJzZWFzb25hbFN0YXRzIiwiUGxheWVyUm93IiwiZGF0YSIsInRyIiwiY2xhc3NOYW1lIiwidGgiLCJzY29wZSIsImEiLCJocmVmIiwicGxheWVyIiwiZnVsbF9uYW1lIiwicm9zdGVyVGFibGUiLCJ0ZWFtRGF0YSIsInBsYXllcnMiLCJwbGF5ZXJzRGF0YSIsIk9iamVjdCIsInZhbHVlcyIsImRpdiIsInRhYmxlIiwidGhlYWQiLCJ0Ym9keSIsIm1hcCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/rosterTable.js\n"));

/***/ })

});
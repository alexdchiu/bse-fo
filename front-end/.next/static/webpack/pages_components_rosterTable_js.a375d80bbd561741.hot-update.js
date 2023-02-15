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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sample_api_responses_teamProfile_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../sample_api_responses/teamProfile.json */ \"../sample_api_responses/teamProfile.json\");\n/* harmony import */ var _sample_api_responses_seasonalStats_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../sample_api_responses/seasonalStats.json */ \"../sample_api_responses/seasonalStats.json\");\n\n\n\nconst PlayerRow = (player)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        class: \"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n            scope: \"row\",\n            class: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#\",\n                children: [\n                    player.first_name,\n                    \" \",\n                    player.last_name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PlayerRow;\nconst rosterTable = ()=>{\n    const teamData = _sample_api_responses_teamProfile_json__WEBPACK_IMPORTED_MODULE_1__.players;\n    const seasonData = _sample_api_responses_seasonalStats_json__WEBPACK_IMPORTED_MODULE_2__;\n    console.log(teamData, seasonData);\n    console.log(seasonData.entries());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"relative overflow-x-auto shadow-md sm:rounded-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            class: \"w-full text-sm text-left text-gray-500 dark:text-gray-400\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    class: \"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"Player\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 78,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"GP\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 81,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"GS\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 84,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"MPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 87,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"PPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 90,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"RPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 93,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"APG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 96,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"SPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 99,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"BPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 102,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"TPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 105,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"FG%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 108,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"3P%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 111,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"FT%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 114,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"TS%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 117,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"EFF\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 120,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                class: \"px-6 py-3\",\n                                children: \"+/-\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 123,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: seasonData.players.map((player)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerRow, {\n                            player: player\n                        }, player.last_name, false, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                            lineNumber: 182,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n            lineNumber: 75,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n        lineNumber: 74,\n        columnNumber: 1\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (rosterTable);\nvar _c;\n$RefreshReg$(_c, \"PlayerRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3Jvc3RlclRhYmxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3RTtBQUVJO0FBRTVFLE1BQU1FLFlBQVksQ0FBQ0MsU0FBVztJQUM1QixxQkFDRSw4REFBQ0M7UUFBR0MsT0FBTTtrQkFDUiw0RUFBQ0M7WUFBR0MsT0FBTTtZQUFNRixPQUFNO3NCQUNwQiw0RUFBQ0c7Z0JBQUVDLE1BQUs7O29CQUFLTixPQUFPTyxVQUFVO29CQUFDO29CQUFFUCxPQUFPUSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQW9EekQ7S0F4RE1UO0FBNEROLE1BQU1VLGNBQWMsSUFBTTtJQUN4QixNQUFNQyxXQUFXYiwyRUFBbUI7SUFDcEMsTUFBTWUsYUFBYWQscUVBQWFBO0lBRWhDZSxRQUFRQyxHQUFHLENBQUNKLFVBQVVFO0lBQ3RCQyxRQUFRQyxHQUFHLENBQUNGLFdBQVdHLE9BQU87SUFFOUIscUJBRUYsOERBQUNDO1FBQUlkLE9BQU07a0JBQ1AsNEVBQUNlO1lBQU1mLE9BQU07OzhCQUNULDhEQUFDZ0I7b0JBQU1oQixPQUFNOzhCQUNULDRFQUFDRDs7MENBQ0csOERBQUNFO2dDQUFHQyxPQUFNO2dDQUFNRixPQUFNOzBDQUFZOzs7Ozs7MENBR2xDLDhEQUFDQztnQ0FBR0MsT0FBTTtnQ0FBTUYsT0FBTTswQ0FBWTs7Ozs7OzBDQUdsQyw4REFBQ0M7Z0NBQUdDLE9BQU07Z0NBQU1GLE9BQU07MENBQVk7Ozs7OzswQ0FHbEMsOERBQUNDO2dDQUFHQyxPQUFNO2dDQUFNRixPQUFNOzBDQUFZOzs7Ozs7MENBR2xDLDhEQUFDQztnQ0FBR0MsT0FBTTtnQ0FBTUYsT0FBTTswQ0FBWTs7Ozs7OzBDQUdsQyw4REFBQ0M7Z0NBQUdDLE9BQU07Z0NBQU1GLE9BQU07MENBQVk7Ozs7OzswQ0FHbEMsOERBQUNDO2dDQUFHQyxPQUFNO2dDQUFNRixPQUFNOzBDQUFZOzs7Ozs7MENBR2xDLDhEQUFDQztnQ0FBR0MsT0FBTTtnQ0FBTUYsT0FBTTswQ0FBWTs7Ozs7OzBDQUdsQyw4REFBQ0M7Z0NBQUdDLE9BQU07Z0NBQU1GLE9BQU07MENBQVk7Ozs7OzswQ0FHbEMsOERBQUNDO2dDQUFHQyxPQUFNO2dDQUFNRixPQUFNOzBDQUFZOzs7Ozs7MENBR2xDLDhEQUFDQztnQ0FBR0MsT0FBTTtnQ0FBTUYsT0FBTTswQ0FBWTs7Ozs7OzBDQUdsQyw4REFBQ0M7Z0NBQUdDLE9BQU07Z0NBQU1GLE9BQU07MENBQVk7Ozs7OzswQ0FHbEMsOERBQUNDO2dDQUFHQyxPQUFNO2dDQUFNRixPQUFNOzBDQUFZOzs7Ozs7MENBR2xDLDhEQUFDQztnQ0FBR0MsT0FBTTtnQ0FBTUYsT0FBTTswQ0FBWTs7Ozs7OzBDQUdsQyw4REFBQ0M7Z0NBQUdDLE9BQU07Z0NBQU1GLE9BQU07MENBQVk7Ozs7OzswQ0FHbEMsOERBQUNDO2dDQUFHQyxPQUFNO2dDQUFNRixPQUFNOzBDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLMUMsOERBQUNpQjs4QkFxRElQLFdBQVdELE9BQU8sQ0FBQ1MsR0FBRyxDQUFDLENBQUNwQix1QkFDdkIsOERBQUNEOzRCQUVDQyxRQUFVQTsyQkFESEEsT0FBT1EsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3ZDO0FBRUEsK0RBQWVDLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9yb3N0ZXJUYWJsZS5qcz8zZWM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0ZWFtUHJvZmlsZSBmcm9tICcuLi8uLi8uLi9zYW1wbGVfYXBpX3Jlc3BvbnNlcy90ZWFtUHJvZmlsZS5qc29uJ1xuXG5pbXBvcnQgc2Vhc29uYWxTdGF0cyBmcm9tICcuLi8uLi8uLi9zYW1wbGVfYXBpX3Jlc3BvbnNlcy9zZWFzb25hbFN0YXRzLmpzb24nXG5cbmNvbnN0IFBsYXllclJvdyA9IChwbGF5ZXIpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8dHIgY2xhc3M9XCJiZy13aGl0ZSBib3JkZXItYiBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNTAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMFwiPlxuICAgICAgPHRoIHNjb3BlPVwicm93XCIgY2xhc3M9XCJweC02IHB5LTQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIj57cGxheWVyLmZpcnN0X25hbWV9IHtwbGF5ZXIubGFzdF9uYW1lfTwvYT5cbiAgICAgIDwvdGg+XG4gICAgICB7LyogPHRkIGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgICAgIHtwbGF5ZXIudG90YWwuZ2FtZXNfcGxheWVkfVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzcz1cInB4LTYgcHktNFwiPlxuICAgICAgICB7cGxheWVyLnRvdGFsLmdhbWVzX3N0YXJ0ZWR9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgICAgIHtwbGF5ZXIudG90YWwuZ2FtZXNfc3RhcnRlZH1cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci5hdmVyYWdlLm1pbnV0ZXN9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgICAgIHtwbGF5ZXIuYXZlcmFnZS5wb2ludHN9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgICAgIHtwbGF5ZXIuYXZlcmFnZS5wb2ludHN9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgICAgIHtwbGF5ZXIuYXZlcmFnZS5yZWJvdW5kc31cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci5hdmVyYWdlLmFzc2lzdHN9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgICAgIHtwbGF5ZXIuYXZlcmFnZS5zdGVhbHN9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgICAgIHtwbGF5ZXIuYXZlcmFnZS5ibG9ja3N9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgICAgIHtwbGF5ZXIuYXZlcmFnZS50dXJub3ZlcnN9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgICAgIHtwbGF5ZXIudG90YWwuZmllbGRfZ29hbHNfcGN0fVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzcz1cInB4LTYgcHktNFwiPlxuICAgICAgICB7cGxheWVyLnRvdGFsLmZyZWVfdGhyb3dzX3BjdH1cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci50b3RhbC50cnVlX3Nob290aW5nX3BjdH1cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci5hdmVyYWdlLmVmZmljaWVuY3l9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgICAgIHtwbGF5ZXIudG90YWwucGx1cyAtIHBsYXllci50b3RhbC5taW51c31cbiAgICAgIDwvdGQ+ICovfVxuICA8L3RyPlxuICApXG59XG5cblxuXG5jb25zdCByb3N0ZXJUYWJsZSA9ICgpID0+IHtcbiAgY29uc3QgdGVhbURhdGEgPSB0ZWFtUHJvZmlsZS5wbGF5ZXJzXG4gIGNvbnN0IHNlYXNvbkRhdGEgPSBzZWFzb25hbFN0YXRzXG5cbiAgY29uc29sZS5sb2codGVhbURhdGEsIHNlYXNvbkRhdGEpXG4gIGNvbnNvbGUubG9nKHNlYXNvbkRhdGEuZW50cmllcygpKVxuICBcbiAgcmV0dXJuIChcbiAgICBcbjxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBvdmVyZmxvdy14LWF1dG8gc2hhZG93LW1kIHNtOnJvdW5kZWQtbGdcIj5cbiAgICA8dGFibGUgY2xhc3M9XCJ3LWZ1bGwgdGV4dC1zbSB0ZXh0LWxlZnQgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgPHRoZWFkIGNsYXNzPVwidGV4dC14cyB0ZXh0LWdyYXktNzAwIHVwcGVyY2FzZSBiZy1ncmF5LTUwIGRhcms6YmctZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3M9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgUGxheWVyXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzcz1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBHUFxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3M9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgR1NcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIE1QR1xuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3M9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgUFBHXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzcz1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBSUEdcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIEFQR1xuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3M9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgU1BHXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzcz1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBCUEdcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIFRQR1xuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3M9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgRkclXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzcz1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICAzUCVcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIEZUJVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3M9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgVFMlXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzcz1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBFRkZcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICsvLVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7LyogPHRyIGNsYXNzPVwiYmctd2hpdGUgYm9yZGVyLWIgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTUwIGRhcms6aG92ZXI6YmctZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIiBjbGFzcz1cInB4LTYgcHktNCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICBBcHBsZSBNYWNCb29rIFBybyAxN1wiXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweC02IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgU2xpdmVyXG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweC02IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgTGFwdG9wXG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweC02IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgJDI5OTlcbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB4LTYgcHktNCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJmb250LW1lZGl1bSB0ZXh0LWJsdWUtNjAwIGRhcms6dGV4dC1ibHVlLTUwMCBob3Zlcjp1bmRlcmxpbmVcIj5FZGl0PC9hPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiYmctd2hpdGUgYm9yZGVyLWIgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTUwIGRhcms6aG92ZXI6YmctZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIiBjbGFzcz1cInB4LTYgcHktNCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICBNaWNyb3NvZnQgU3VyZmFjZSBQcm9cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB4LTYgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICBXaGl0ZVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIExhcHRvcCBQQ1xuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgICQxOTk5XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweC02IHB5LTQgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZm9udC1tZWRpdW0gdGV4dC1ibHVlLTYwMCBkYXJrOnRleHQtYmx1ZS01MDAgaG92ZXI6dW5kZXJsaW5lXCI+RWRpdDwvYT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImJnLXdoaXRlIGRhcms6YmctZ3JheS04MDAgaG92ZXI6YmctZ3JheS01MCBkYXJrOmhvdmVyOmJnLWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCIgY2xhc3M9XCJweC02IHB5LTQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgTWFnaWMgTW91c2UgMlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIEJsYWNrXG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweC02IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgQWNjZXNzb3JpZXNcbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB4LTYgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICAkOTlcbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB4LTYgcHktNCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJmb250LW1lZGl1bSB0ZXh0LWJsdWUtNjAwIGRhcms6dGV4dC1ibHVlLTUwMCBob3Zlcjp1bmRlcmxpbmVcIj5FZGl0PC9hPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPiAqL31cblxuICAgICAgICAgICAge3NlYXNvbkRhdGEucGxheWVycy5tYXAoKHBsYXllcikgPT4gXG4gICAgICAgICAgICAgIDxQbGF5ZXJSb3dcbiAgICAgICAgICAgICAgICBrZXkgPSB7cGxheWVyLmxhc3RfbmFtZX1cbiAgICAgICAgICAgICAgICBwbGF5ZXIgPSB7cGxheWVyfSBcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG48L2Rpdj5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvc3RlclRhYmxlIl0sIm5hbWVzIjpbInRlYW1Qcm9maWxlIiwic2Vhc29uYWxTdGF0cyIsIlBsYXllclJvdyIsInBsYXllciIsInRyIiwiY2xhc3MiLCJ0aCIsInNjb3BlIiwiYSIsImhyZWYiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwicm9zdGVyVGFibGUiLCJ0ZWFtRGF0YSIsInBsYXllcnMiLCJzZWFzb25EYXRhIiwiY29uc29sZSIsImxvZyIsImVudHJpZXMiLCJkaXYiLCJ0YWJsZSIsInRoZWFkIiwidGJvZHkiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/rosterTable.js\n"));

/***/ })

});
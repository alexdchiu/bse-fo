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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sample_api_responses_teamProfile_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../sample_api_responses/teamProfile.json */ \"../sample_api_responses/teamProfile.json\");\n/* harmony import */ var _sample_api_responses_seasonalStats_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../sample_api_responses/seasonalStats.js */ \"../sample_api_responses/seasonalStats.js\");\n\n\n\nconst PlayerRow = (player)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        className: \"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n            scope: \"row\",\n            className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#\",\n                children: player.id\n            }, void 0, false, {\n                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PlayerRow;\nconst rosterTable = ()=>{\n    const teamData = _sample_api_responses_teamProfile_json__WEBPACK_IMPORTED_MODULE_1__.players;\n    console.log(_sample_api_responses_seasonalStats_js__WEBPACK_IMPORTED_MODULE_2__.seasonalStats);\n    const playersData = Object.values(_sample_api_responses_seasonalStats_js__WEBPACK_IMPORTED_MODULE_2__.seasonalStats.players);\n    console.log(teamData, playersData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative overflow-x-auto shadow-md sm:rounded-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"w-full text-sm text-left text-gray-500 dark:text-gray-400\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    className: \"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"Player\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 77,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"GP\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 80,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"GS\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 83,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"MPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 86,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"PPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 89,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"RPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 92,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"APG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 95,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"SPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 98,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"BPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 101,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"TPG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 104,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"FG%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 107,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"3P%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 110,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"FT%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 113,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"TS%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 116,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"EFF\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 119,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: \"+/-\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                                lineNumber: 122,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                        lineNumber: 76,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: playersData && playersData.map((player)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerRow, {\n                            player: player\n                        }, player.id, false, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                            lineNumber: 181,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n            lineNumber: 74,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/rosterTable.js\",\n        lineNumber: 73,\n        columnNumber: 1\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (rosterTable);\nvar _c;\n$RefreshReg$(_c, \"PlayerRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3Jvc3RlclRhYmxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3RTtBQUVJO0FBRTVFLE1BQU1FLFlBQVksQ0FBQ0MsU0FBVztJQUM1QixxQkFDRSw4REFBQ0M7UUFBR0MsV0FBVTtrQkFDWiw0RUFBQ0M7WUFBR0MsT0FBTTtZQUFNRixXQUFVO3NCQUN4Qiw0RUFBQ0c7Z0JBQUVDLE1BQUs7MEJBQUtOLE9BQU9PLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvRDlCO0tBeERNUjtBQTRETixNQUFNUyxjQUFjLElBQU07SUFDeEIsTUFBTUMsV0FBV1osMkVBQW1CO0lBQ3BDYyxRQUFRQyxHQUFHLENBQUNkLGlGQUFhQTtJQUN6QixNQUFNZSxjQUFjQyxPQUFPQyxNQUFNLENBQUNqQix5RkFBcUI7SUFDdkRhLFFBQVFDLEdBQUcsQ0FBQ0gsVUFBVUk7SUFFdEIscUJBRUYsOERBQUNHO1FBQUlkLFdBQVU7a0JBQ1gsNEVBQUNlO1lBQU1mLFdBQVU7OzhCQUNiLDhEQUFDZ0I7b0JBQU1oQixXQUFVOzhCQUNiLDRFQUFDRDs7MENBQ0csOERBQUNFO2dDQUFHQyxPQUFNO2dDQUFNRixXQUFVOzBDQUFZOzs7Ozs7MENBR3RDLDhEQUFDQztnQ0FBR0MsT0FBTTtnQ0FBTUYsV0FBVTswQ0FBWTs7Ozs7OzBDQUd0Qyw4REFBQ0M7Z0NBQUdDLE9BQU07Z0NBQU1GLFdBQVU7MENBQVk7Ozs7OzswQ0FHdEMsOERBQUNDO2dDQUFHQyxPQUFNO2dDQUFNRixXQUFVOzBDQUFZOzs7Ozs7MENBR3RDLDhEQUFDQztnQ0FBR0MsT0FBTTtnQ0FBTUYsV0FBVTswQ0FBWTs7Ozs7OzBDQUd0Qyw4REFBQ0M7Z0NBQUdDLE9BQU07Z0NBQU1GLFdBQVU7MENBQVk7Ozs7OzswQ0FHdEMsOERBQUNDO2dDQUFHQyxPQUFNO2dDQUFNRixXQUFVOzBDQUFZOzs7Ozs7MENBR3RDLDhEQUFDQztnQ0FBR0MsT0FBTTtnQ0FBTUYsV0FBVTswQ0FBWTs7Ozs7OzBDQUd0Qyw4REFBQ0M7Z0NBQUdDLE9BQU07Z0NBQU1GLFdBQVU7MENBQVk7Ozs7OzswQ0FHdEMsOERBQUNDO2dDQUFHQyxPQUFNO2dDQUFNRixXQUFVOzBDQUFZOzs7Ozs7MENBR3RDLDhEQUFDQztnQ0FBR0MsT0FBTTtnQ0FBTUYsV0FBVTswQ0FBWTs7Ozs7OzBDQUd0Qyw4REFBQ0M7Z0NBQUdDLE9BQU07Z0NBQU1GLFdBQVU7MENBQVk7Ozs7OzswQ0FHdEMsOERBQUNDO2dDQUFHQyxPQUFNO2dDQUFNRixXQUFVOzBDQUFZOzs7Ozs7MENBR3RDLDhEQUFDQztnQ0FBR0MsT0FBTTtnQ0FBTUYsV0FBVTswQ0FBWTs7Ozs7OzBDQUd0Qyw4REFBQ0M7Z0NBQUdDLE9BQU07Z0NBQU1GLFdBQVU7MENBQVk7Ozs7OzswQ0FHdEMsOERBQUNDO2dDQUFHQyxPQUFNO2dDQUFNRixXQUFVOzBDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLOUMsOERBQUNpQjs4QkFxRElOLGVBQWVBLFlBQVlPLEdBQUcsQ0FBQyxDQUFDcEIsdUJBQy9CLDhEQUFDRDs0QkFFQ0MsUUFBVUE7MkJBREhBLE9BQU9PLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNoQztBQUVBLCtEQUFlQyxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvcm9zdGVyVGFibGUuanM/M2VjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGVhbVByb2ZpbGUgZnJvbSAnLi4vLi4vLi4vc2FtcGxlX2FwaV9yZXNwb25zZXMvdGVhbVByb2ZpbGUuanNvbidcblxuaW1wb3J0IHtzZWFzb25hbFN0YXRzfSBmcm9tICcuLi8uLi8uLi9zYW1wbGVfYXBpX3Jlc3BvbnNlcy9zZWFzb25hbFN0YXRzLmpzJ1xuXG5jb25zdCBQbGF5ZXJSb3cgPSAocGxheWVyKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHRyIGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlci1iIGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS03MDAgaG92ZXI6YmctZ3JheS01MCBkYXJrOmhvdmVyOmJnLWdyYXktNjAwXCI+XG4gICAgICA8dGggc2NvcGU9XCJyb3dcIiBjbGFzc05hbWU9XCJweC02IHB5LTQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIj57cGxheWVyLmlkfTwvYT5cbiAgICAgIDwvdGg+XG4gICAgICB7LyogPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICB7cGxheWVyLnRvdGFsLmdhbWVzX3BsYXllZH1cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgIHtwbGF5ZXIudG90YWwuZ2FtZXNfc3RhcnRlZH1cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgIHtwbGF5ZXIudG90YWwuZ2FtZXNfc3RhcnRlZH1cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgIHtwbGF5ZXIuYXZlcmFnZS5taW51dGVzfVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci5hdmVyYWdlLnBvaW50c31cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgIHtwbGF5ZXIuYXZlcmFnZS5wb2ludHN9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICB7cGxheWVyLmF2ZXJhZ2UucmVib3VuZHN9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICB7cGxheWVyLmF2ZXJhZ2UuYXNzaXN0c31cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgIHtwbGF5ZXIuYXZlcmFnZS5zdGVhbHN9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICB7cGxheWVyLmF2ZXJhZ2UuYmxvY2tzfVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci5hdmVyYWdlLnR1cm5vdmVyc31cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgIHtwbGF5ZXIudG90YWwuZmllbGRfZ29hbHNfcGN0fVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci50b3RhbC5mcmVlX3Rocm93c19wY3R9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICB7cGxheWVyLnRvdGFsLnRydWVfc2hvb3RpbmdfcGN0fVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAge3BsYXllci5hdmVyYWdlLmVmZmljaWVuY3l9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICB7cGxheWVyLnRvdGFsLnBsdXMgLSBwbGF5ZXIudG90YWwubWludXN9XG4gICAgICA8L3RkPiAqL31cbiAgPC90cj5cbiAgKVxufVxuXG5cblxuY29uc3Qgcm9zdGVyVGFibGUgPSAoKSA9PiB7XG4gIGNvbnN0IHRlYW1EYXRhID0gdGVhbVByb2ZpbGUucGxheWVyc1xuICBjb25zb2xlLmxvZyhzZWFzb25hbFN0YXRzKVxuICBjb25zdCBwbGF5ZXJzRGF0YSA9IE9iamVjdC52YWx1ZXMoc2Vhc29uYWxTdGF0cy5wbGF5ZXJzKVxuICBjb25zb2xlLmxvZyh0ZWFtRGF0YSwgcGxheWVyc0RhdGEpXG4gIFxuICByZXR1cm4gKFxuICAgIFxuPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy14LWF1dG8gc2hhZG93LW1kIHNtOnJvdW5kZWQtbGdcIj5cbiAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtc20gdGV4dC1sZWZ0IHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS03MDAgdXBwZXJjYXNlIGJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgUGxheWVyXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgR1BcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBHU1xuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIE1QR1xuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIFBQR1xuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIFJQR1xuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIEFQR1xuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIFNQR1xuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIEJQR1xuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIFRQR1xuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIEZHJVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDNQJVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIEZUJVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIFRTJVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIEVGRlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICsvLVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7LyogPHRyIGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlci1iIGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS03MDAgaG92ZXI6YmctZ3JheS01MCBkYXJrOmhvdmVyOmJnLWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCIgY2xhc3NOYW1lPVwicHgtNiBweS00IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIEFwcGxlIE1hY0Jvb2sgUHJvIDE3XCJcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgU2xpdmVyXG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIExhcHRvcFxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICAkMjk5OVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ibHVlLTYwMCBkYXJrOnRleHQtYmx1ZS01MDAgaG92ZXI6dW5kZXJsaW5lXCI+RWRpdDwvYT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItYiBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNTAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiIGNsYXNzTmFtZT1cInB4LTYgcHktNCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICBNaWNyb3NvZnQgU3VyZmFjZSBQcm9cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgV2hpdGVcbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgTGFwdG9wIFBDXG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgICQxOTk5XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWJsdWUtNjAwIGRhcms6dGV4dC1ibHVlLTUwMCBob3Zlcjp1bmRlcmxpbmVcIj5FZGl0PC9hPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLXdoaXRlIGRhcms6YmctZ3JheS04MDAgaG92ZXI6YmctZ3JheS01MCBkYXJrOmhvdmVyOmJnLWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCIgY2xhc3NOYW1lPVwicHgtNiBweS00IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIE1hZ2ljIE1vdXNlIDJcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgQmxhY2tcbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgQWNjZXNzb3JpZXNcbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgJDk5XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWJsdWUtNjAwIGRhcms6dGV4dC1ibHVlLTUwMCBob3Zlcjp1bmRlcmxpbmVcIj5FZGl0PC9hPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPiAqL31cblxuICAgICAgICAgICAge3BsYXllcnNEYXRhICYmIHBsYXllcnNEYXRhLm1hcCgocGxheWVyKSA9PiBcbiAgICAgICAgICAgICAgPFBsYXllclJvd1xuICAgICAgICAgICAgICAgIGtleSA9IHtwbGF5ZXIuaWR9XG4gICAgICAgICAgICAgICAgcGxheWVyID0ge3BsYXllcn0gXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuPC9kaXY+XG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCByb3N0ZXJUYWJsZSJdLCJuYW1lcyI6WyJ0ZWFtUHJvZmlsZSIsInNlYXNvbmFsU3RhdHMiLCJQbGF5ZXJSb3ciLCJwbGF5ZXIiLCJ0ciIsImNsYXNzTmFtZSIsInRoIiwic2NvcGUiLCJhIiwiaHJlZiIsImlkIiwicm9zdGVyVGFibGUiLCJ0ZWFtRGF0YSIsInBsYXllcnMiLCJjb25zb2xlIiwibG9nIiwicGxheWVyc0RhdGEiLCJPYmplY3QiLCJ2YWx1ZXMiLCJkaXYiLCJ0YWJsZSIsInRoZWFkIiwidGJvZHkiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/rosterTable.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages_components_playerCard_js",{

/***/ "./pages/components/playerCard.js":
/*!****************************************!*\
  !*** ./pages/components/playerCard.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n// import {playerDetails, allPlayers} from '../api/playerProfile'\nconst PlayerCard = ()=>{\n    _s();\n    const [playerData, setPlayerData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"api/playerProfile\").then((response)=>{\n            setPlayerData(response);\n        });\n    }, []);\n    const playerDetails = playerData === null || playerData === void 0 ? void 0 : playerData.data.playerDetails;\n    const allPlayers = playerData === null || playerData === void 0 ? void 0 : playerData.data.allPlayers;\n    const currFirstName = playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.first_name;\n    const currLastName = playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.last_name;\n    const currFullName = playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.full_name;\n    // console.log(playerDetails)\n    var newArray = allPlayers === null || allPlayers === void 0 ? void 0 : allPlayers.filter(function(el) {\n        return el.firstName === currFirstName && el.lastName === currLastName;\n    });\n    var currID = newArray && newArray[0].personId;\n    const headshotURL = \"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/\".concat(currID, \".png\");\n    let heightFt = Math.floor((playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.height) / 12);\n    let heightInches = (playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.height) - heightFt * 12;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end px-4 pt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"dropdownButton\",\n                        \"data-dropdown-toggle\": \"dropdownId\",\n                        className: \"inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5\",\n                        type: \"button\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"w-5 h-5\",\n                            fill: \"currentColor\",\n                            viewBox: \"0 0 20 20\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                fillRule: \"evenodd\",\n                                d: \"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\",\n                                clipRule: \"evenodd\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                                lineNumber: 45,\n                                columnNumber: 121\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center pb-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"w-24 h-24 mb-3 rounded-full shadow-lg\",\n                            src: \"\".concat(headshotURL),\n                            alt: \"Bonnie image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"mb-1 text-xl font-medium text-gray-900 dark:text-white\",\n                            children: currFullName\n                        }, void 0, false, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 50,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm text-gray-500 dark:text-gray-400\",\n                            children: [\n                                \"#\",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.jersey_number,\n                                \" / \",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.primary_position\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 53,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm text-gray-500 dark:text-gray-400\",\n                            children: [\n                                heightFt,\n                                \"'\",\n                                heightInches,\n                                '\" / ',\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.weight\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 56,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm text-gray-500 dark:text-gray-400\",\n                            children: [\n                                \"Born: \",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.birthdate,\n                                \" /  \",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.birth_place\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 59,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm text-gray-500 dark:text-gray-400\",\n                            children: [\n                                \"Draft: \",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.draft.year,\n                                \" - \",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.draft.round,\n                                \" / \",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.draft.pick,\n                                \" (\",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.college,\n                                \")\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 62,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex mt-4 space-x-3 md:mt-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                                children: \"See Career Stats\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                                lineNumber: 66,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 65,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n            lineNumber: 42,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PlayerCard, \"oVKmWTdTuz8e9OCsgjlV8HIY2xo=\");\n_c = PlayerCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerCard);\nvar _c;\n$RefreshReg$(_c, \"PlayerCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMvQ3ZCLDBCQUFBQSwyQkFBQUEsS0FBQUEsSUFBQUEsY0FBZThDLEtBQUssQ0FBQ0MsSUFBSTtnQ0FBQztnQ0FBSS9DLDBCQUFBQSwyQkFBQUEsS0FBQUEsSUFBQUEsY0FBZThDLEtBQUssQ0FBQ0UsS0FBSztnQ0FBQztnQ0FBSWhELDBCQUFBQSwyQkFBQUEsS0FBQUEsSUFBQUEsY0FBZThDLEtBQUssQ0FBQ0csSUFBSTtnQ0FBQztnQ0FBR2pELDBCQUFBQSwyQkFBQUEsS0FBQUEsSUFBQUEsY0FBZWtELE9BQU87Z0NBQUM7Ozs7Ozs7c0NBRTdILDhEQUFDNUI7NEJBQUlDLFdBQVU7c0NBQ1gsNEVBQUM0QjtnQ0FBRUMsTUFBSztnQ0FBSTdCLFdBQVU7MENBQThPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hSO0dBbEVNN0I7S0FBQUE7QUFvRU4sK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9wbGF5ZXJDYXJkLmpzP2NmMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuXG4vLyBpbXBvcnQge3BsYXllckRldGFpbHMsIGFsbFBsYXllcnN9IGZyb20gJy4uL2FwaS9wbGF5ZXJQcm9maWxlJ1xuXG5jb25zdCBQbGF5ZXJDYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IFtwbGF5ZXJEYXRhLCBzZXRQbGF5ZXJEYXRhXSA9IHVzZVN0YXRlKClcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBheGlvcy5nZXQoJ2FwaS9wbGF5ZXJQcm9maWxlJykudGhlbigocmVzcG9uc2UpID0+IHtzZXRQbGF5ZXJEYXRhKHJlc3BvbnNlKX0pXG4gICAgfSwgW11cbiAgICApXG5cbiAgICBjb25zdCBwbGF5ZXJEZXRhaWxzID0gcGxheWVyRGF0YT8uZGF0YS5wbGF5ZXJEZXRhaWxzXG4gICAgY29uc3QgYWxsUGxheWVycyA9IHBsYXllckRhdGE/LmRhdGEuYWxsUGxheWVyc1xuICAgIGNvbnN0IGN1cnJGaXJzdE5hbWUgPSBwbGF5ZXJEZXRhaWxzPy5maXJzdF9uYW1lXG4gICAgY29uc3QgY3Vyckxhc3ROYW1lID0gcGxheWVyRGV0YWlscz8ubGFzdF9uYW1lXG4gICAgY29uc3QgY3VyckZ1bGxOYW1lID0gcGxheWVyRGV0YWlscz8uZnVsbF9uYW1lXG5cbiAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJEZXRhaWxzKVxuXG5cbiAgICB2YXIgbmV3QXJyYXkgPSBhbGxQbGF5ZXJzPy5maWx0ZXIoZnVuY3Rpb24gKGVsKVxuICAgIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGVsLmZpcnN0TmFtZSA9PT0gY3VyckZpcnN0TmFtZSAmJlxuICAgICAgICBlbC5sYXN0TmFtZSA9PT0gY3Vyckxhc3ROYW1lKVxuICAgIH1cbiAgICApO1xuXG4gICAgdmFyIGN1cnJJRCA9IG5ld0FycmF5JiZuZXdBcnJheVswXS5wZXJzb25JZFxuXG4gICAgY29uc3QgaGVhZHNob3RVUkwgPSBgaHR0cHM6Ly9hay1zdGF0aWMuY21zLm5iYS5jb20vd3AtY29udGVudC91cGxvYWRzL2hlYWRzaG90cy9uYmEvbGF0ZXN0LzI2MHgxOTAvJHtjdXJySUR9LnBuZ2BcblxuICAgIGxldCBoZWlnaHRGdCA9IE1hdGguZmxvb3IocGxheWVyRGV0YWlscz8uaGVpZ2h0LzEyKVxuICAgIGxldCBoZWlnaHRJbmNoZXMgPSBwbGF5ZXJEZXRhaWxzPy5oZWlnaHQgLSBoZWlnaHRGdCoxMlxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIHotNTAgdy1mdWxsIHAtNCBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWF1dG8gbWQ6aW5zZXQtMCBoLW1vZGFsIG1kOmgtZnVsbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1zbSBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGcgc2hhZG93IGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS03MDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBweC00IHB0LTRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZHJvcGRvd25CdXR0b25cIiBkYXRhLWRyb3Bkb3duLXRvZ2dsZT1cImRyb3Bkb3duSWRcIiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDAgaG92ZXI6YmctZ3JheS0xMDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctZ3JheS0yMDAgZGFyazpmb2N1czpyaW5nLWdyYXktNzAwIHJvdW5kZWQtbGcgdGV4dC1zbSBwLTEuNVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTUgaC01XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgZD1cIk00LjI5MyA0LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgOC41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEwxMS40MTQgMTBsNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgMTEuNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw4LjU4NiAxMCA0LjI5MyA1LjcwN2ExIDEgMCAwMTAtMS40MTR6XCIgY2xpcFJ1bGU9XCJldmVub2RkXCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHBiLTEwXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTI0IGgtMjQgbWItMyByb3VuZGVkLWZ1bGwgc2hhZG93LWxnXCIgc3JjPXtgJHtoZWFkc2hvdFVSTH1gfSBhbHQ9XCJCb25uaWUgaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTEgdGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7Y3VyckZ1bGxOYW1lfVxuICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAje3BsYXllckRldGFpbHM/LmplcnNleV9udW1iZXJ9IC8ge3BsYXllckRldGFpbHM/LnByaW1hcnlfcG9zaXRpb259XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge2hlaWdodEZ0fSd7aGVpZ2h0SW5jaGVzfVwiIC8ge3BsYXllckRldGFpbHM/LndlaWdodH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICBCb3JuOiB7cGxheWVyRGV0YWlscz8uYmlydGhkYXRlfSAvICB7cGxheWVyRGV0YWlscz8uYmlydGhfcGxhY2V9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgRHJhZnQ6IHtwbGF5ZXJEZXRhaWxzPy5kcmFmdC55ZWFyfSAtIHtwbGF5ZXJEZXRhaWxzPy5kcmFmdC5yb3VuZH0gLyB7cGxheWVyRGV0YWlscz8uZHJhZnQucGlja30gKHtwbGF5ZXJEZXRhaWxzPy5jb2xsZWdlfSlcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTQgc3BhY2UteC0zIG1kOm10LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBiZy1ibHVlLTcwMCByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCBkYXJrOmJnLWJsdWUtNjAwIGRhcms6aG92ZXI6YmctYmx1ZS03MDAgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwXCI+U2VlIENhcmVlciBTdGF0czwvYT5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtY2VudGVyIHRleHQtZ3JheS05MDAgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ncmF5LTIwMCBkYXJrOmJnLWdyYXktODAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6aG92ZXI6Ym9yZGVyLWdyYXktNzAwIGRhcms6Zm9jdXM6cmluZy1ncmF5LTcwMFwiPk1lc3NhZ2U8L2E+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllckNhcmQiXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlBsYXllckNhcmQiLCJwbGF5ZXJEYXRhIiwic2V0UGxheWVyRGF0YSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsInBsYXllckRldGFpbHMiLCJkYXRhIiwiYWxsUGxheWVycyIsImN1cnJGaXJzdE5hbWUiLCJmaXJzdF9uYW1lIiwiY3Vyckxhc3ROYW1lIiwibGFzdF9uYW1lIiwiY3VyckZ1bGxOYW1lIiwiZnVsbF9uYW1lIiwibmV3QXJyYXkiLCJmaWx0ZXIiLCJlbCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiY3VycklEIiwicGVyc29uSWQiLCJoZWFkc2hvdFVSTCIsImhlaWdodEZ0IiwiTWF0aCIsImZsb29yIiwiaGVpZ2h0IiwiaGVpZ2h0SW5jaGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwiaWQiLCJkYXRhLWRyb3Bkb3duLXRvZ2dsZSIsInR5cGUiLCJzdmciLCJmaWxsIiwidmlld0JveCIsInhtbG5zIiwicGF0aCIsImZpbGxSdWxlIiwiZCIsImNsaXBSdWxlIiwiaW1nIiwic3JjIiwiYWx0IiwiaDUiLCJzcGFuIiwiamVyc2V5X251bWJlciIsInByaW1hcnlfcG9zaXRpb24iLCJ3ZWlnaHQiLCJiaXJ0aGRhdGUiLCJiaXJ0aF9wbGFjZSIsImRyYWZ0IiwieWVhciIsInJvdW5kIiwicGljayIsImNvbGxlZ2UiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/playerCard.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n// import {playerDetails, allPlayers} from '../api/playerProfile'\nconst PlayerCard = (data)=>{\n    _s();\n    // console.log('playerCard data', data)\n    const [playerData, setPlayerData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"api/playerProfile\").then((response)=>{\n            setPlayerData(response);\n        });\n    }, []);\n    const handleClose = ()=>{\n        data.setShowModal(!data.showModal);\n    };\n    const playerDetails = playerData === null || playerData === void 0 ? void 0 : playerData.data.playerDetails;\n    const allPlayers = playerData === null || playerData === void 0 ? void 0 : playerData.data.allPlayers;\n    const currFirstName = playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.first_name;\n    const currLastName = playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.last_name;\n    const currFullName = playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.full_name;\n    // console.log(playerDetails)\n    // console.log(data)\n    var newArray = allPlayers === null || allPlayers === void 0 ? void 0 : allPlayers.filter(function(el) {\n        return el.firstName === currFirstName && el.lastName === currLastName;\n    });\n    var currID = newArray && newArray[0].personId;\n    console.log(currID);\n    const headshotURL = currID && \"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/\".concat(currID, \".png\");\n    let heightFt = Math.floor((playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.height) / 12);\n    let heightInches = (playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.height) - heightFt * 12;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-x-1/3 md:inset-y-1/4 h-modal md:h-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end px-4 pt-4 bg-slate-700\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"dropdownButton\",\n                        \"data-dropdown-toggle\": \"dropdownId\",\n                        className: \"inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5\",\n                        type: \"button\",\n                        onClick: handleClose,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"w-5 h-5\",\n                            fill: \"currentColor\",\n                            viewBox: \"0 0 20 20\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                fillRule: \"evenodd\",\n                                d: \"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\",\n                                clipRule: \"evenodd\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                                lineNumber: 55,\n                                columnNumber: 121\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center pb-10 bg-slate-700\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"w-24 h-24 mb-3 rounded-full shadow-lg\",\n                            src: \"\".concat(headshotURL),\n                            alt: \"Bonnie image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 59,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"mb-1 text-xl font-medium text-gray-900 dark:text-white\",\n                            children: currFullName\n                        }, void 0, false, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 60,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm text-gray-500 dark:text-gray-300\",\n                            children: [\n                                \"#\",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.jersey_number,\n                                \" / \",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.primary_position\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 63,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm text-gray-500 dark:text-gray-300\",\n                            children: [\n                                heightFt,\n                                \"'\",\n                                heightInches,\n                                '\" / ',\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.weight\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 66,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm text-gray-500 dark:text-gray-300\",\n                            children: [\n                                \"Born: \",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.birthdate,\n                                \" /  \",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.birth_place\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 69,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm text-gray-500 dark:text-gray-300\",\n                            children: [\n                                \"Draft: \",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.draft.year,\n                                \" - \",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.draft.round,\n                                \" / \",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.draft.pick,\n                                \" (\",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.college,\n                                \")\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 72,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex mt-4 space-x-3 md:mt-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                                children: \"See Career Stats\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                                lineNumber: 76,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 75,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                    lineNumber: 58,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n            lineNumber: 52,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PlayerCard, \"oVKmWTdTuz8e9OCsgjlV8HIY2xo=\");\n_c = PlayerCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerCard);\nvar _c;\n$RefreshReg$(_c, \"PlayerCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dDQUNoRHhCLDBCQUFBQSwyQkFBQUEsS0FBQUEsSUFBQUEsY0FBZThDLFNBQVM7Z0NBQUM7Z0NBQUs5QywwQkFBQUEsMkJBQUFBLEtBQUFBLElBQUFBLGNBQWUrQyxXQUFXOzs7Ozs7O3NDQUVuRSw4REFBQ0w7NEJBQUtsQixXQUFVOztnQ0FBMkM7Z0NBQy9DeEIsMEJBQUFBLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlZ0QsS0FBSyxDQUFDQyxJQUFJO2dDQUFDO2dDQUFJakQsMEJBQUFBLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlZ0QsS0FBSyxDQUFDRSxLQUFLO2dDQUFDO2dDQUFJbEQsMEJBQUFBLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlZ0QsS0FBSyxDQUFDRyxJQUFJO2dDQUFDO2dDQUFHbkQsMEJBQUFBLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlb0QsT0FBTztnQ0FBQzs7Ozs7OztzQ0FFN0gsOERBQUM3Qjs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQzZCO2dDQUFFQyxNQUFLO2dDQUFJOUIsV0FBVTswQ0FBOE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeFI7R0E1RU1sQztLQUFBQTtBQThFTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL3BsYXllckNhcmQuanM/Y2YzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuXG5cbi8vIGltcG9ydCB7cGxheWVyRGV0YWlscywgYWxsUGxheWVyc30gZnJvbSAnLi4vYXBpL3BsYXllclByb2ZpbGUnXG5cbmNvbnN0IFBsYXllckNhcmQgPSAoZGF0YSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdwbGF5ZXJDYXJkIGRhdGEnLCBkYXRhKVxuICAgIFxuICAgIGNvbnN0IFtwbGF5ZXJEYXRhLCBzZXRQbGF5ZXJEYXRhXSA9IHVzZVN0YXRlKClcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBheGlvcy5nZXQoJ2FwaS9wbGF5ZXJQcm9maWxlJykudGhlbigocmVzcG9uc2UpID0+IHtzZXRQbGF5ZXJEYXRhKHJlc3BvbnNlKX0pXG4gICAgfSwgW11cbiAgICApXG5cbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICAgICAgZGF0YS5zZXRTaG93TW9kYWwoIWRhdGEuc2hvd01vZGFsKVxuICAgICAgfVxuXG4gICAgY29uc3QgcGxheWVyRGV0YWlscyA9IHBsYXllckRhdGE/LmRhdGEucGxheWVyRGV0YWlsc1xuICAgIGNvbnN0IGFsbFBsYXllcnMgPSBwbGF5ZXJEYXRhPy5kYXRhLmFsbFBsYXllcnNcbiAgICBjb25zdCBjdXJyRmlyc3ROYW1lID0gcGxheWVyRGV0YWlscz8uZmlyc3RfbmFtZVxuICAgIGNvbnN0IGN1cnJMYXN0TmFtZSA9IHBsYXllckRldGFpbHM/Lmxhc3RfbmFtZVxuICAgIGNvbnN0IGN1cnJGdWxsTmFtZSA9IHBsYXllckRldGFpbHM/LmZ1bGxfbmFtZVxuXG4gICAgLy8gY29uc29sZS5sb2cocGxheWVyRGV0YWlscylcblxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG5cblxuICAgIHZhciBuZXdBcnJheSA9IGFsbFBsYXllcnM/LmZpbHRlcihmdW5jdGlvbiAoZWwpXG4gICAge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZWwuZmlyc3ROYW1lID09PSBjdXJyRmlyc3ROYW1lICYmXG4gICAgICAgIGVsLmxhc3ROYW1lID09PSBjdXJyTGFzdE5hbWUpXG4gICAgfVxuICAgICk7XG5cbiAgICB2YXIgY3VycklEID0gbmV3QXJyYXkmJm5ld0FycmF5WzBdLnBlcnNvbklkXG5cbiAgICBjb25zb2xlLmxvZyhjdXJySUQpXG5cbiAgICBjb25zdCBoZWFkc2hvdFVSTCA9IGN1cnJJRCAmJiBgaHR0cHM6Ly9hay1zdGF0aWMuY21zLm5iYS5jb20vd3AtY29udGVudC91cGxvYWRzL2hlYWRzaG90cy9uYmEvbGF0ZXN0LzI2MHgxOTAvJHtjdXJySUR9LnBuZ2BcblxuICAgIGxldCBoZWlnaHRGdCA9IE1hdGguZmxvb3IocGxheWVyRGV0YWlscz8uaGVpZ2h0LzEyKVxuICAgIGxldCBoZWlnaHRJbmNoZXMgPSBwbGF5ZXJEZXRhaWxzPy5oZWlnaHQgLSBoZWlnaHRGdCoxMlxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIHotNTAgdy1mdWxsIHAtNCBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWF1dG8gbWQ6aW5zZXQteC0xLzMgbWQ6aW5zZXQteS0xLzQgaC1tb2RhbCBtZDpoLWZ1bGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctc20gYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIHNoYWRvdyBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgcHgtNCBwdC00IGJnLXNsYXRlLTcwMFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJkcm9wZG93bkJ1dHRvblwiIGRhdGEtZHJvcGRvd24tdG9nZ2xlPVwiZHJvcGRvd25JZFwiIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMCBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ncmF5LTIwMCBkYXJrOmZvY3VzOnJpbmctZ3JheS03MDAgcm91bmRlZC1sZyB0ZXh0LXNtIHAtMS41XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTUgaC01XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgZD1cIk00LjI5MyA0LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgOC41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEwxMS40MTQgMTBsNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgMTEuNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw4LjU4NiAxMCA0LjI5MyA1LjcwN2ExIDEgMCAwMTAtMS40MTR6XCIgY2xpcFJ1bGU9XCJldmVub2RkXCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHBiLTEwIGJnLXNsYXRlLTcwMFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy0yNCBoLTI0IG1iLTMgcm91bmRlZC1mdWxsIHNoYWRvdy1sZ1wiIHNyYz17YCR7aGVhZHNob3RVUkx9YH0gYWx0PVwiQm9ubmllIGltYWdlXCIvPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0xIHRleHQteGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAge2N1cnJGdWxsTmFtZX1cbiAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgI3twbGF5ZXJEZXRhaWxzPy5qZXJzZXlfbnVtYmVyfSAvIHtwbGF5ZXJEZXRhaWxzPy5wcmltYXJ5X3Bvc2l0aW9ufVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtoZWlnaHRGdH0ne2hlaWdodEluY2hlc31cIiAvIHtwbGF5ZXJEZXRhaWxzPy53ZWlnaHR9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgQm9ybjoge3BsYXllckRldGFpbHM/LmJpcnRoZGF0ZX0gLyAge3BsYXllckRldGFpbHM/LmJpcnRoX3BsYWNlfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIERyYWZ0OiB7cGxheWVyRGV0YWlscz8uZHJhZnQueWVhcn0gLSB7cGxheWVyRGV0YWlscz8uZHJhZnQucm91bmR9IC8ge3BsYXllckRldGFpbHM/LmRyYWZ0LnBpY2t9ICh7cGxheWVyRGV0YWlscz8uY29sbGVnZX0pXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC00IHNwYWNlLXgtMyBtZDptdC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtY2VudGVyIHRleHQtd2hpdGUgYmctYmx1ZS03MDAgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS0zMDAgZGFyazpiZy1ibHVlLTYwMCBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiPlNlZSBDYXJlZXIgU3RhdHM8L2E+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktOTAwIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBob3ZlcjpiZy1ncmF5LTEwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctZ3JheS0yMDAgZGFyazpiZy1ncmF5LTgwMCBkYXJrOnRleHQtd2hpdGUgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmhvdmVyOmJvcmRlci1ncmF5LTcwMCBkYXJrOmZvY3VzOnJpbmctZ3JheS03MDBcIj5NZXNzYWdlPC9hPiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJDYXJkIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQbGF5ZXJDYXJkIiwiZGF0YSIsInBsYXllckRhdGEiLCJzZXRQbGF5ZXJEYXRhIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiaGFuZGxlQ2xvc2UiLCJzZXRTaG93TW9kYWwiLCJzaG93TW9kYWwiLCJwbGF5ZXJEZXRhaWxzIiwiYWxsUGxheWVycyIsImN1cnJGaXJzdE5hbWUiLCJmaXJzdF9uYW1lIiwiY3Vyckxhc3ROYW1lIiwibGFzdF9uYW1lIiwiY3VyckZ1bGxOYW1lIiwiZnVsbF9uYW1lIiwibmV3QXJyYXkiLCJmaWx0ZXIiLCJlbCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiY3VycklEIiwicGVyc29uSWQiLCJjb25zb2xlIiwibG9nIiwiaGVhZHNob3RVUkwiLCJoZWlnaHRGdCIsIk1hdGgiLCJmbG9vciIsImhlaWdodCIsImhlaWdodEluY2hlcyIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsImlkIiwiZGF0YS1kcm9wZG93bi10b2dnbGUiLCJ0eXBlIiwib25DbGljayIsInN2ZyIsImZpbGwiLCJ2aWV3Qm94IiwieG1sbnMiLCJwYXRoIiwiZmlsbFJ1bGUiLCJkIiwiY2xpcFJ1bGUiLCJpbWciLCJzcmMiLCJhbHQiLCJoNSIsInNwYW4iLCJqZXJzZXlfbnVtYmVyIiwicHJpbWFyeV9wb3NpdGlvbiIsIndlaWdodCIsImJpcnRoZGF0ZSIsImJpcnRoX3BsYWNlIiwiZHJhZnQiLCJ5ZWFyIiwicm91bmQiLCJwaWNrIiwiY29sbGVnZSIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/playerCard.js\n"));

/***/ })

});
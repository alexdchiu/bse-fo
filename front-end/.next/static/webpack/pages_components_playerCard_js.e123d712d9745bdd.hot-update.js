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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n// import {playerDetails, allPlayers} from '../api/playerProfile'\nconst playerCard = ()=>{\n    _s();\n    const [playerData, setPlayerData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"api/playerProfile\").then((response)=>{\n            setPlayerData(response);\n        });\n    }, []);\n    const playerDetails = playerData === null || playerData === void 0 ? void 0 : playerData.data.playerDetails;\n    const allPlayers = playerData === null || playerData === void 0 ? void 0 : playerData.data.allPlayers;\n    const currFirstName = playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.first_name;\n    const currLastName = playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.last_name;\n    const currFullName = playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.full_name;\n    console.log(playerDetails);\n    var newArray = allPlayers === null || allPlayers === void 0 ? void 0 : allPlayers.filter(function(el) {\n        return el.firstName === currFirstName && el.lastName === currLastName;\n    });\n    var currID = newArray && newArray[0].personId;\n    const headshotURL = \"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/\".concat(currID, \".png\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-end px-4 pt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"dropdownButton\",\n                        \"data-dropdown-toggle\": \"dropdownId\",\n                        className: \"inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5\",\n                        type: \"button\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"sr-only\",\n                                children: \"Open dropdown\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"w-6 h-6\",\n                                \"aria-hidden\": \"true\",\n                                fill: \"currentColor\",\n                                viewBox: \"0 0 20 20\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 132\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"dropdown\",\n                        className: \"z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"py-2\",\n                            \"aria-labelledby\": \"dropdownButton\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        className: \"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white\",\n                                        children: \"Edit\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        className: \"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white\",\n                                        children: \"Export Data\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        className: \"block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white\",\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center pb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"w-24 h-24 mb-3 rounded-full shadow-lg\",\n                        src: \"\".concat(headshotURL),\n                        alt: \"Bonnie image\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"mb-1 text-xl font-medium text-gray-900 dark:text-white\",\n                        children: currFullName\n                    }, void 0, false, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-sm text-gray-500 dark:text-gray-400\",\n                        children: [\n                            playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.jersey_number,\n                            \" / \",\n                            playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.primary_position\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-sm text-gray-500 dark:text-gray-400\",\n                        children: [\n                            \"Birthplace:  \",\n                            playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.birth_place\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-sm text-gray-500 dark:text-gray-400\",\n                        children: playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.birth_place\n                    }, void 0, false, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-sm text-gray-500 dark:text-gray-400\",\n                        children: [\n                            \"Draft: \",\n                            playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.draft.year,\n                            \" - \",\n                            playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.draft.round,\n                            \" / \",\n                            playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.draft.pick,\n                            \" (\",\n                            playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.college,\n                            \")\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex mt-4 space-x-3 md:mt-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                                children: \"Add friend\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700\",\n                                children: \"Message\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                lineNumber: 60,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n        lineNumber: 39,\n        columnNumber: 1\n    }, undefined);\n};\n_s(playerCard, \"oVKmWTdTuz8e9OCsgjlV8HIY2xo=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (playerCard);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3BsYXllckNhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUI7QUFDZ0I7QUFFekMsaUVBQWlFO0FBRWpFLE1BQU1HLGFBQWEsSUFBTTs7SUFDckIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdKLCtDQUFRQTtJQUU1Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNaRixpREFBUyxDQUFDLHFCQUFxQk8sSUFBSSxDQUFDLENBQUNDLFdBQWE7WUFBQ0gsY0FBY0c7UUFBUztJQUM5RSxHQUFHLEVBQUU7SUFHTCxNQUFNQyxnQkFBZ0JMLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWU0sSUFBSSxDQUFDRCxhQUFhO0lBQ3BELE1BQU1FLGFBQWFQLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWU0sSUFBSSxDQUFDQyxVQUFVO0lBRTlDLE1BQU1DLGdCQUFnQkgsMEJBQUFBLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlSSxVQUFVO0lBQy9DLE1BQU1DLGVBQWVMLDBCQUFBQSwyQkFBQUEsS0FBQUEsSUFBQUEsY0FBZU0sU0FBUztJQUM3QyxNQUFNQyxlQUFlUCwwQkFBQUEsMkJBQUFBLEtBQUFBLElBQUFBLGNBQWVRLFNBQVM7SUFFN0NDLFFBQVFDLEdBQUcsQ0FBQ1Y7SUFHWixJQUFJVyxXQUFXVCx1QkFBQUEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVlVLE1BQU0sQ0FBQyxTQUFVQyxFQUFFLEVBQzlDO1FBQ0UsT0FDRUEsR0FBR0MsU0FBUyxLQUFLWCxpQkFDakJVLEdBQUdFLFFBQVEsS0FBS1Y7SUFDcEI7SUFHQSxJQUFJVyxTQUFTTCxZQUFVQSxRQUFRLENBQUMsRUFBRSxDQUFDTSxRQUFRO0lBRTNDLE1BQU1DLGNBQWMsaUZBQXdGLE9BQVBGLFFBQU87SUFHOUcscUJBRUYsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFPQyxJQUFHO3dCQUFpQkMsd0JBQXFCO3dCQUFhSCxXQUFVO3dCQUErTEksTUFBSzs7MENBQ3hRLDhEQUFDQztnQ0FBS0wsV0FBVTswQ0FBVTs7Ozs7OzBDQUMxQiw4REFBQ007Z0NBQUlOLFdBQVU7Z0NBQVVPLGVBQVk7Z0NBQU9DLE1BQUs7Z0NBQWVDLFNBQVE7Z0NBQVlDLE9BQU07MENBQTZCLDRFQUFDQztvQ0FBS0MsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR25JLDhEQUFDYjt3QkFBSUcsSUFBRzt3QkFBV0YsV0FBVTtrQ0FDekIsNEVBQUNhOzRCQUFHYixXQUFVOzRCQUFPYyxtQkFBZ0I7OzhDQUNyQyw4REFBQ0M7OENBQ0csNEVBQUNDO3dDQUFFQyxNQUFLO3dDQUFJakIsV0FBVTtrREFBMEg7Ozs7Ozs7Ozs7OzhDQUVwSiw4REFBQ2U7OENBQ0csNEVBQUNDO3dDQUFFQyxNQUFLO3dDQUFJakIsV0FBVTtrREFBMEg7Ozs7Ozs7Ozs7OzhDQUVwSiw4REFBQ2U7OENBQ0csNEVBQUNDO3dDQUFFQyxNQUFLO3dDQUFJakIsV0FBVTtrREFBeUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzNKLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNrQjt3QkFBSWxCLFdBQVU7d0JBQXdDbUIsS0FBSyxHQUFlLE9BQVpyQjt3QkFBZXNCLEtBQUk7Ozs7OztrQ0FDbEYsOERBQUNDO3dCQUFHckIsV0FBVTtrQ0FBMERiOzs7Ozs7a0NBQ3hFLDhEQUFDa0I7d0JBQUtMLFdBQVU7OzRCQUNacEIsMEJBQUFBLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlMEMsYUFBYTs0QkFBQzs0QkFBSTFDLDBCQUFBQSwyQkFBQUEsS0FBQUEsSUFBQUEsY0FBZTJDLGdCQUFnQjs7Ozs7OztrQ0FFcEUsOERBQUNsQjt3QkFBS0wsV0FBVTs7NEJBQTJDOzRCQUFjcEIsMEJBQUFBLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlNEMsV0FBVzs7Ozs7OztrQ0FDbkcsOERBQUNuQjt3QkFBS0wsV0FBVTtrQ0FBNENwQiwwQkFBQUEsMkJBQUFBLEtBQUFBLElBQUFBLGNBQWU0QyxXQUFXOzs7Ozs7a0NBQ3RGLDhEQUFDbkI7d0JBQUtMLFdBQVU7OzRCQUEyQzs0QkFBUXBCLDBCQUFBQSwyQkFBQUEsS0FBQUEsSUFBQUEsY0FBZTZDLEtBQUssQ0FBQ0MsSUFBSTs0QkFBQzs0QkFBSTlDLDBCQUFBQSwyQkFBQUEsS0FBQUEsSUFBQUEsY0FBZTZDLEtBQUssQ0FBQ0UsS0FBSzs0QkFBQzs0QkFBSS9DLDBCQUFBQSwyQkFBQUEsS0FBQUEsSUFBQUEsY0FBZTZDLEtBQUssQ0FBQ0csSUFBSTs0QkFBQzs0QkFBR2hELDBCQUFBQSwyQkFBQUEsS0FBQUEsSUFBQUEsY0FBZWlELE9BQU87NEJBQUM7Ozs7Ozs7a0NBQ3BMLDhEQUFDOUI7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDZ0I7Z0NBQUVDLE1BQUs7Z0NBQUlqQixXQUFVOzBDQUE4Tzs7Ozs7OzBDQUNwUSw4REFBQ2dCO2dDQUFFQyxNQUFLO2dDQUFJakIsV0FBVTswQ0FBcVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12VztHQXZFTTFCO0FBeUVOLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvcGxheWVyQ2FyZC5qcz9jZjM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbi8vIGltcG9ydCB7cGxheWVyRGV0YWlscywgYWxsUGxheWVyc30gZnJvbSAnLi4vYXBpL3BsYXllclByb2ZpbGUnXG5cbmNvbnN0IHBsYXllckNhcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgW3BsYXllckRhdGEsIHNldFBsYXllckRhdGFdID0gdXNlU3RhdGUoKVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCgnYXBpL3BsYXllclByb2ZpbGUnKS50aGVuKChyZXNwb25zZSkgPT4ge3NldFBsYXllckRhdGEocmVzcG9uc2UpfSlcbiAgICB9LCBbXVxuICAgIClcblxuICAgIGNvbnN0IHBsYXllckRldGFpbHMgPSBwbGF5ZXJEYXRhPy5kYXRhLnBsYXllckRldGFpbHNcbiAgICBjb25zdCBhbGxQbGF5ZXJzID0gcGxheWVyRGF0YT8uZGF0YS5hbGxQbGF5ZXJzXG4gICAgXG4gICAgY29uc3QgY3VyckZpcnN0TmFtZSA9IHBsYXllckRldGFpbHM/LmZpcnN0X25hbWVcbiAgICBjb25zdCBjdXJyTGFzdE5hbWUgPSBwbGF5ZXJEZXRhaWxzPy5sYXN0X25hbWVcbiAgICBjb25zdCBjdXJyRnVsbE5hbWUgPSBwbGF5ZXJEZXRhaWxzPy5mdWxsX25hbWVcblxuICAgIGNvbnNvbGUubG9nKHBsYXllckRldGFpbHMpXG5cblxuICAgIHZhciBuZXdBcnJheSA9IGFsbFBsYXllcnM/LmZpbHRlcihmdW5jdGlvbiAoZWwpXG4gICAge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZWwuZmlyc3ROYW1lID09PSBjdXJyRmlyc3ROYW1lICYmXG4gICAgICAgIGVsLmxhc3ROYW1lID09PSBjdXJyTGFzdE5hbWUpXG4gICAgfVxuICAgICk7XG5cbiAgICB2YXIgY3VycklEID0gbmV3QXJyYXkmJm5ld0FycmF5WzBdLnBlcnNvbklkXG5cbiAgICBjb25zdCBoZWFkc2hvdFVSTCA9IGBodHRwczovL2FrLXN0YXRpYy5jbXMubmJhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvaGVhZHNob3RzL25iYS9sYXRlc3QvMjYweDE5MC8ke2N1cnJJRH0ucG5nYFxuXG5cbiAgcmV0dXJuIChcbiAgICBcbjxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LXNtIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBzaGFkb3cgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBweC00IHB0LTRcIj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImRyb3Bkb3duQnV0dG9uXCIgZGF0YS1kcm9wZG93bi10b2dnbGU9XCJkcm9wZG93bklkXCIgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwIGhvdmVyOmJnLWdyYXktMTAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWdyYXktMjAwIGRhcms6Zm9jdXM6cmluZy1ncmF5LTcwMCByb3VuZGVkLWxnIHRleHQtc20gcC0xLjVcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBkcm9wZG93bjwvc3Bhbj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy02IGgtNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNNiAxMGEyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6TTEyIDEwYTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHpNMTYgMTJhMiAyIDAgMTAwLTQgMiAyIDAgMDAwIDR6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgey8qIDwhLS0gRHJvcGRvd24gbWVudSAtLT4gKi99XG4gICAgICAgIDxkaXYgaWQ9XCJkcm9wZG93blwiIGNsYXNzTmFtZT1cInotMTAgaGlkZGVuIHRleHQtYmFzZSBsaXN0LW5vbmUgYmctd2hpdGUgZGl2aWRlLXkgZGl2aWRlLWdyYXktMTAwIHJvdW5kZWQtbGcgc2hhZG93IHctNDQgZGFyazpiZy1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInB5LTJcIiBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bkJ1dHRvblwiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTIwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGVcIj5FZGl0PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAgaG92ZXI6YmctZ3JheS0xMDAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0yMDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlXCI+RXhwb3J0IERhdGE8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1yZWQtNjAwIGhvdmVyOmJnLWdyYXktMTAwIGRhcms6aG92ZXI6YmctZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMjAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZVwiPkRlbGV0ZTwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHBiLTEwXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy0yNCBoLTI0IG1iLTMgcm91bmRlZC1mdWxsIHNoYWRvdy1sZ1wiIHNyYz17YCR7aGVhZHNob3RVUkx9YH0gYWx0PVwiQm9ubmllIGltYWdlXCIvPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMSB0ZXh0LXhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+e2N1cnJGdWxsTmFtZX08L2g1PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+e1xuICAgICAgICAgICAgcGxheWVyRGV0YWlscz8uamVyc2V5X251bWJlcn0gLyB7cGxheWVyRGV0YWlscz8ucHJpbWFyeV9wb3NpdGlvbn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+QmlydGhwbGFjZTogIHtwbGF5ZXJEZXRhaWxzPy5iaXJ0aF9wbGFjZX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj57cGxheWVyRGV0YWlscz8uYmlydGhfcGxhY2V9PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+RHJhZnQ6IHtwbGF5ZXJEZXRhaWxzPy5kcmFmdC55ZWFyfSAtIHtwbGF5ZXJEZXRhaWxzPy5kcmFmdC5yb3VuZH0gLyB7cGxheWVyRGV0YWlscz8uZHJhZnQucGlja30gKHtwbGF5ZXJEZXRhaWxzPy5jb2xsZWdlfSk8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC00IHNwYWNlLXgtMyBtZDptdC02XCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwIGRhcms6YmctYmx1ZS02MDAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIj5BZGQgZnJpZW5kPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTkwMCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWdyYXktMjAwIGRhcms6YmctZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgZGFyazpob3Zlcjpib3JkZXItZ3JheS03MDAgZGFyazpmb2N1czpyaW5nLWdyYXktNzAwXCI+TWVzc2FnZTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllckNhcmQiXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInBsYXllckNhcmQiLCJwbGF5ZXJEYXRhIiwic2V0UGxheWVyRGF0YSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsInBsYXllckRldGFpbHMiLCJkYXRhIiwiYWxsUGxheWVycyIsImN1cnJGaXJzdE5hbWUiLCJmaXJzdF9uYW1lIiwiY3Vyckxhc3ROYW1lIiwibGFzdF9uYW1lIiwiY3VyckZ1bGxOYW1lIiwiZnVsbF9uYW1lIiwiY29uc29sZSIsImxvZyIsIm5ld0FycmF5IiwiZmlsdGVyIiwiZWwiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImN1cnJJRCIsInBlcnNvbklkIiwiaGVhZHNob3RVUkwiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJpZCIsImRhdGEtZHJvcGRvd24tdG9nZ2xlIiwidHlwZSIsInNwYW4iLCJzdmciLCJhcmlhLWhpZGRlbiIsImZpbGwiLCJ2aWV3Qm94IiwieG1sbnMiLCJwYXRoIiwiZCIsInVsIiwiYXJpYS1sYWJlbGxlZGJ5IiwibGkiLCJhIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsImg1IiwiamVyc2V5X251bWJlciIsInByaW1hcnlfcG9zaXRpb24iLCJiaXJ0aF9wbGFjZSIsImRyYWZ0IiwieWVhciIsInJvdW5kIiwicGljayIsImNvbGxlZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/playerCard.js\n"));

/***/ })

});
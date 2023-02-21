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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n// import {playerDetails, allPlayers} from '../api/playerProfile'\nconst PlayerCard = (data)=>{\n    _s();\n    console.log(\"playerCard data\", data);\n    const [playerData, setPlayerData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"api/playerProfile\").then((response)=>{\n            setPlayerData(response);\n        });\n    }, []);\n    const handleClose = ()=>{\n        data.setShowModal(!data.showModal);\n    };\n    const playerDetails = playerData === null || playerData === void 0 ? void 0 : playerData.data.playerDetails;\n    const allPlayers = playerData === null || playerData === void 0 ? void 0 : playerData.data.allPlayers;\n    const currFirstName = playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.first_name;\n    const currLastName = playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.last_name;\n    const currFullName = playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.full_name;\n    // console.log(playerDetails)\n    var newArray = allPlayers === null || allPlayers === void 0 ? void 0 : allPlayers.filter(function(el) {\n        return el.firstName === currFirstName && el.lastName === currLastName;\n    });\n    var currID = newArray && newArray[0].personId;\n    const headshotURL = \"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/\".concat(currID, \".png\");\n    let heightFt = Math.floor((playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.height) / 12);\n    let heightInches = (playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.height) - heightFt * 12;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-1/3 h-modal md:h-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end px-4 pt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"dropdownButton\",\n                        \"data-dropdown-toggle\": \"dropdownId\",\n                        className: \"inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5\",\n                        type: \"button\",\n                        onClick: handleClose,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"w-5 h-5\",\n                            fill: \"currentColor\",\n                            viewBox: \"0 0 20 20\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                fillRule: \"evenodd\",\n                                d: \"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\",\n                                clipRule: \"evenodd\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                                lineNumber: 51,\n                                columnNumber: 121\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center pb-10 bg-slate-600\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"w-24 h-24 mb-3 rounded-full shadow-lg\",\n                            src: \"\".concat(headshotURL),\n                            alt: \"Bonnie image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 55,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"mb-1 text-xl font-medium text-gray-900 dark:text-white\",\n                            children: currFullName\n                        }, void 0, false, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 56,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm text-gray-500 dark:text-gray-400\",\n                            children: [\n                                \"#\",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.jersey_number,\n                                \" / \",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.primary_position\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 59,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm text-gray-500 dark:text-gray-400\",\n                            children: [\n                                heightFt,\n                                \"'\",\n                                heightInches,\n                                '\" / ',\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.weight\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 62,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm text-gray-500 dark:text-gray-400\",\n                            children: [\n                                \"Born: \",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.birthdate,\n                                \" /  \",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.birth_place\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 65,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm text-gray-500 dark:text-gray-400\",\n                            children: [\n                                \"Draft: \",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.draft.year,\n                                \" - \",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.draft.round,\n                                \" / \",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.draft.pick,\n                                \" (\",\n                                playerDetails === null || playerDetails === void 0 ? void 0 : playerDetails.college,\n                                \")\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 68,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex mt-4 space-x-3 md:mt-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                                children: \"See Career Stats\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 71,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                    lineNumber: 54,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n            lineNumber: 48,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PlayerCard, \"oVKmWTdTuz8e9OCsgjlV8HIY2xo=\");\n_c = PlayerCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerCard);\nvar _c;\n$RefreshReg$(_c, \"PlayerCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBQUEsSUFBQUEsY0FBZTRDLFNBQVM7Z0NBQUM7Z0NBQUs1QywwQkFBQUEsMkJBQUFBLEtBQUFBLElBQUFBLGNBQWU2QyxXQUFXOzs7Ozs7O3NDQUVuRSw4REFBQ0w7NEJBQUtsQixXQUFVOztnQ0FBMkM7Z0NBQy9DdEIsMEJBQUFBLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlOEMsS0FBSyxDQUFDQyxJQUFJO2dDQUFDO2dDQUFJL0MsMEJBQUFBLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlOEMsS0FBSyxDQUFDRSxLQUFLO2dDQUFDO2dDQUFJaEQsMEJBQUFBLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlOEMsS0FBSyxDQUFDRyxJQUFJO2dDQUFDO2dDQUFHakQsMEJBQUFBLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFla0QsT0FBTztnQ0FBQzs7Ozs7OztzQ0FFN0gsOERBQUM3Qjs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQzZCO2dDQUFFQyxNQUFLO2dDQUFJOUIsV0FBVTswQ0FBOE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeFI7R0F4RU1sQztLQUFBQTtBQTBFTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL3BsYXllckNhcmQuanM/Y2YzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuXG5cbi8vIGltcG9ydCB7cGxheWVyRGV0YWlscywgYWxsUGxheWVyc30gZnJvbSAnLi4vYXBpL3BsYXllclByb2ZpbGUnXG5cbmNvbnN0IFBsYXllckNhcmQgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdwbGF5ZXJDYXJkIGRhdGEnLCBkYXRhKVxuICAgIFxuICAgIGNvbnN0IFtwbGF5ZXJEYXRhLCBzZXRQbGF5ZXJEYXRhXSA9IHVzZVN0YXRlKClcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBheGlvcy5nZXQoJ2FwaS9wbGF5ZXJQcm9maWxlJykudGhlbigocmVzcG9uc2UpID0+IHtzZXRQbGF5ZXJEYXRhKHJlc3BvbnNlKX0pXG4gICAgfSwgW11cbiAgICApXG5cbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICAgICAgZGF0YS5zZXRTaG93TW9kYWwoIWRhdGEuc2hvd01vZGFsKVxuICAgICAgfVxuXG4gICAgY29uc3QgcGxheWVyRGV0YWlscyA9IHBsYXllckRhdGE/LmRhdGEucGxheWVyRGV0YWlsc1xuICAgIGNvbnN0IGFsbFBsYXllcnMgPSBwbGF5ZXJEYXRhPy5kYXRhLmFsbFBsYXllcnNcbiAgICBjb25zdCBjdXJyRmlyc3ROYW1lID0gcGxheWVyRGV0YWlscz8uZmlyc3RfbmFtZVxuICAgIGNvbnN0IGN1cnJMYXN0TmFtZSA9IHBsYXllckRldGFpbHM/Lmxhc3RfbmFtZVxuICAgIGNvbnN0IGN1cnJGdWxsTmFtZSA9IHBsYXllckRldGFpbHM/LmZ1bGxfbmFtZVxuXG4gICAgLy8gY29uc29sZS5sb2cocGxheWVyRGV0YWlscylcblxuXG4gICAgdmFyIG5ld0FycmF5ID0gYWxsUGxheWVycz8uZmlsdGVyKGZ1bmN0aW9uIChlbClcbiAgICB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBlbC5maXJzdE5hbWUgPT09IGN1cnJGaXJzdE5hbWUgJiZcbiAgICAgICAgZWwubGFzdE5hbWUgPT09IGN1cnJMYXN0TmFtZSlcbiAgICB9XG4gICAgKTtcblxuICAgIHZhciBjdXJySUQgPSBuZXdBcnJheSYmbmV3QXJyYXlbMF0ucGVyc29uSWRcblxuICAgIGNvbnN0IGhlYWRzaG90VVJMID0gYGh0dHBzOi8vYWstc3RhdGljLmNtcy5uYmEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9oZWFkc2hvdHMvbmJhL2xhdGVzdC8yNjB4MTkwLyR7Y3VycklEfS5wbmdgXG5cbiAgICBsZXQgaGVpZ2h0RnQgPSBNYXRoLmZsb29yKHBsYXllckRldGFpbHM/LmhlaWdodC8xMilcbiAgICBsZXQgaGVpZ2h0SW5jaGVzID0gcGxheWVyRGV0YWlscz8uaGVpZ2h0IC0gaGVpZ2h0RnQqMTJcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgcmlnaHQtMCB6LTUwIHctZnVsbCBwLTQgb3ZlcmZsb3cteC1oaWRkZW4gb3ZlcmZsb3cteS1hdXRvIG1kOmluc2V0LTEvMyBoLW1vZGFsIG1kOmgtZnVsbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1zbSBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGcgc2hhZG93IGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS03MDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBweC00IHB0LTRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZHJvcGRvd25CdXR0b25cIiBkYXRhLWRyb3Bkb3duLXRvZ2dsZT1cImRyb3Bkb3duSWRcIiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDAgaG92ZXI6YmctZ3JheS0xMDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctZ3JheS0yMDAgZGFyazpmb2N1czpyaW5nLWdyYXktNzAwIHJvdW5kZWQtbGcgdGV4dC1zbSBwLTEuNVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy01IGgtNVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNNC4yOTMgNC4yOTNhMSAxIDAgMDExLjQxNCAwTDEwIDguNTg2bDQuMjkzLTQuMjkzYTEgMSAwIDExMS40MTQgMS40MTRMMTEuNDE0IDEwbDQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0IDEuNDE0TDEwIDExLjQxNGwtNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQtMS40MTRMOC41ODYgMTAgNC4yOTMgNS43MDdhMSAxIDAgMDEwLTEuNDE0elwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwYi0xMCBiZy1zbGF0ZS02MDBcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctMjQgaC0yNCBtYi0zIHJvdW5kZWQtZnVsbCBzaGFkb3ctbGdcIiBzcmM9e2Ake2hlYWRzaG90VVJMfWB9IGFsdD1cIkJvbm5pZSBpbWFnZVwiLz5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMSB0ZXh0LXhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjdXJyRnVsbE5hbWV9XG4gICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgICN7cGxheWVyRGV0YWlscz8uamVyc2V5X251bWJlcn0gLyB7cGxheWVyRGV0YWlscz8ucHJpbWFyeV9wb3NpdGlvbn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7aGVpZ2h0RnR9J3toZWlnaHRJbmNoZXN9XCIgLyB7cGxheWVyRGV0YWlscz8ud2VpZ2h0fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgIEJvcm46IHtwbGF5ZXJEZXRhaWxzPy5iaXJ0aGRhdGV9IC8gIHtwbGF5ZXJEZXRhaWxzPy5iaXJ0aF9wbGFjZX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICBEcmFmdDoge3BsYXllckRldGFpbHM/LmRyYWZ0LnllYXJ9IC0ge3BsYXllckRldGFpbHM/LmRyYWZ0LnJvdW5kfSAvIHtwbGF5ZXJEZXRhaWxzPy5kcmFmdC5waWNrfSAoe3BsYXllckRldGFpbHM/LmNvbGxlZ2V9KVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtNCBzcGFjZS14LTMgbWQ6bXQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwIGRhcms6YmctYmx1ZS02MDAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIj5TZWUgQ2FyZWVyIFN0YXRzPC9hPlxuICAgICAgICAgICAgICAgICAgICB7LyogPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTkwMCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWdyYXktMjAwIGRhcms6YmctZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgZGFyazpob3Zlcjpib3JkZXItZ3JheS03MDAgZGFyazpmb2N1czpyaW5nLWdyYXktNzAwXCI+TWVzc2FnZTwvYT4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyQ2FyZCJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUGxheWVyQ2FyZCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicGxheWVyRGF0YSIsInNldFBsYXllckRhdGEiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJoYW5kbGVDbG9zZSIsInNldFNob3dNb2RhbCIsInNob3dNb2RhbCIsInBsYXllckRldGFpbHMiLCJhbGxQbGF5ZXJzIiwiY3VyckZpcnN0TmFtZSIsImZpcnN0X25hbWUiLCJjdXJyTGFzdE5hbWUiLCJsYXN0X25hbWUiLCJjdXJyRnVsbE5hbWUiLCJmdWxsX25hbWUiLCJuZXdBcnJheSIsImZpbHRlciIsImVsIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJjdXJySUQiLCJwZXJzb25JZCIsImhlYWRzaG90VVJMIiwiaGVpZ2h0RnQiLCJNYXRoIiwiZmxvb3IiLCJoZWlnaHQiLCJoZWlnaHRJbmNoZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJpZCIsImRhdGEtZHJvcGRvd24tdG9nZ2xlIiwidHlwZSIsIm9uQ2xpY2siLCJzdmciLCJmaWxsIiwidmlld0JveCIsInhtbG5zIiwicGF0aCIsImZpbGxSdWxlIiwiZCIsImNsaXBSdWxlIiwiaW1nIiwic3JjIiwiYWx0IiwiaDUiLCJzcGFuIiwiamVyc2V5X251bWJlciIsInByaW1hcnlfcG9zaXRpb24iLCJ3ZWlnaHQiLCJiaXJ0aGRhdGUiLCJiaXJ0aF9wbGFjZSIsImRyYWZ0IiwieWVhciIsInJvdW5kIiwicGljayIsImNvbGxlZ2UiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/playerCard.js\n"));

/***/ })

});
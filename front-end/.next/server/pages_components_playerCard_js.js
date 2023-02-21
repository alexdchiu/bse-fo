"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "pages_components_playerCard_js";
exports.ids = ["pages_components_playerCard_js"];
exports.modules = {

/***/ "./pages/components/playerCard.js":
/*!****************************************!*\
  !*** ./pages/components/playerCard.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// import {playerDetails, allPlayers} from '../api/playerProfile'\nconst PlayerCard = ()=>{\n    const [playerData, setPlayerData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"api/playerProfile\").then((response)=>{\n            setPlayerData(response);\n        });\n    }, []);\n    const playerDetails = playerData?.data.playerDetails;\n    const allPlayers = playerData?.data.allPlayers;\n    const currFirstName = playerDetails?.first_name;\n    const currLastName = playerDetails?.last_name;\n    const currFullName = playerDetails?.full_name;\n    // console.log(playerDetails)\n    var newArray = allPlayers?.filter(function(el) {\n        return el.firstName === currFirstName && el.lastName === currLastName;\n    });\n    var currID = newArray && newArray[0].personId;\n    const headshotURL = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${currID}.png`;\n    let heightFt = Math.floor(playerDetails?.height / 12);\n    let heightInches = playerDetails?.height - heightFt * 12;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-end px-4 pt-4\"\n            }, void 0, false, {\n                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center pb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"w-24 h-24 mb-3 rounded-full shadow-lg\",\n                        src: `${headshotURL}`,\n                        alt: \"Bonnie image\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"mb-1 text-xl font-medium text-gray-900 dark:text-white\",\n                        children: currFullName\n                    }, void 0, false, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-sm text-gray-500 dark:text-gray-400\",\n                        children: [\n                            \"#\",\n                            playerDetails?.jersey_number,\n                            \" / \",\n                            playerDetails?.primary_position\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-sm text-gray-500 dark:text-gray-400\",\n                        children: [\n                            heightFt,\n                            \"'\",\n                            heightInches,\n                            '\" / ',\n                            playerDetails?.weight\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-sm text-gray-500 dark:text-gray-400\",\n                        children: [\n                            \"Born: \",\n                            playerDetails?.birthdate,\n                            \" /  \",\n                            playerDetails?.birth_place\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-sm text-gray-500 dark:text-gray-400\",\n                        children: [\n                            \"Draft: \",\n                            playerDetails?.draft.year,\n                            \" - \",\n                            playerDetails?.draft.round,\n                            \" / \",\n                            playerDetails?.draft.pick,\n                            \" (\",\n                            playerDetails?.college,\n                            \")\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex mt-4 space-x-3 md:mt-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            className: \"inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                            children: \"See Career Stats\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n                lineNumber: 63,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/components/playerCard.js\",\n        lineNumber: 42,\n        columnNumber: 1\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerCard);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3BsYXllckNhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNnQjtBQUd6QyxpRUFBaUU7QUFFakUsTUFBTUcsYUFBYSxJQUFNO0lBQ3JCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSiwrQ0FBUUE7SUFFNUNDLGdEQUFTQSxDQUFDLElBQU07UUFDWkYsaURBQVMsQ0FBQyxxQkFBcUJPLElBQUksQ0FBQyxDQUFDQyxXQUFhO1lBQUNILGNBQWNHO1FBQVM7SUFDOUUsR0FBRyxFQUFFO0lBR0wsTUFBTUMsZ0JBQWdCTCxZQUFZTSxLQUFLRCxhQUFhO0lBQ3BELE1BQU1FLGFBQWFQLFlBQVlNLEtBQUtDLFVBQVU7SUFDOUMsTUFBTUMsZ0JBQWdCSCxlQUFlSTtJQUNyQyxNQUFNQyxlQUFlTCxlQUFlTTtJQUNwQyxNQUFNQyxlQUFlUCxlQUFlUTtJQUVwQyw2QkFBNkI7SUFHN0IsSUFBSUMsV0FBV1AsWUFBWVEsT0FBTyxTQUFVQyxFQUFFLEVBQzlDO1FBQ0UsT0FDRUEsR0FBR0MsU0FBUyxLQUFLVCxpQkFDakJRLEdBQUdFLFFBQVEsS0FBS1I7SUFDcEI7SUFHQSxJQUFJUyxTQUFTTCxZQUFVQSxRQUFRLENBQUMsRUFBRSxDQUFDTSxRQUFRO0lBRTNDLE1BQU1DLGNBQWMsQ0FBQyw4RUFBOEUsRUFBRUYsT0FBTyxJQUFJLENBQUM7SUFFakgsSUFBSUcsV0FBV0MsS0FBS0MsS0FBSyxDQUFDbkIsZUFBZW9CLFNBQU87SUFDaEQsSUFBSUMsZUFBZXJCLGVBQWVvQixTQUFTSCxXQUFTO0lBR3RELHFCQUVGLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7Ozs7OzswQkFvQmYsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQUlELFdBQVU7d0JBQXdDRSxLQUFLLENBQUMsRUFBRVQsWUFBWSxDQUFDO3dCQUFFVSxLQUFJOzs7Ozs7a0NBQ2xGLDhEQUFDQzt3QkFBR0osV0FBVTtrQ0FDVGhCOzs7Ozs7a0NBRUwsOERBQUNxQjt3QkFBS0wsV0FBVTs7NEJBQTJDOzRCQUNyRHZCLGVBQWU2Qjs0QkFBYzs0QkFBSTdCLGVBQWU4Qjs7Ozs7OztrQ0FFdEQsOERBQUNGO3dCQUFLTCxXQUFVOzs0QkFDWE47NEJBQVM7NEJBQUVJOzRCQUFhOzRCQUFLckIsZUFBZStCOzs7Ozs7O2tDQUVqRCw4REFBQ0g7d0JBQUtMLFdBQVU7OzRCQUEyQzs0QkFDaER2QixlQUFlZ0M7NEJBQVU7NEJBQUtoQyxlQUFlaUM7Ozs7Ozs7a0NBRXhELDhEQUFDTDt3QkFBS0wsV0FBVTs7NEJBQTJDOzRCQUMvQ3ZCLGVBQWVrQyxNQUFNQyxJQUFJOzRCQUFDOzRCQUFJbkMsZUFBZWtDLE1BQU1FLEtBQUs7NEJBQUM7NEJBQUlwQyxlQUFla0MsTUFBTUcsSUFBSTs0QkFBQzs0QkFBR3JDLGVBQWVzQzs0QkFBUTs7Ozs7OztrQ0FFN0gsOERBQUNoQjt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ2dCOzRCQUFFQyxNQUFLOzRCQUFJakIsV0FBVTtzQ0FBOE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2hSO0FBRUEsaUVBQWU3QixVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQtZW5kLy4vcGFnZXMvY29tcG9uZW50cy9wbGF5ZXJDYXJkLmpzP2NmMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuXG4vLyBpbXBvcnQge3BsYXllckRldGFpbHMsIGFsbFBsYXllcnN9IGZyb20gJy4uL2FwaS9wbGF5ZXJQcm9maWxlJ1xuXG5jb25zdCBQbGF5ZXJDYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IFtwbGF5ZXJEYXRhLCBzZXRQbGF5ZXJEYXRhXSA9IHVzZVN0YXRlKClcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBheGlvcy5nZXQoJ2FwaS9wbGF5ZXJQcm9maWxlJykudGhlbigocmVzcG9uc2UpID0+IHtzZXRQbGF5ZXJEYXRhKHJlc3BvbnNlKX0pXG4gICAgfSwgW11cbiAgICApXG5cbiAgICBjb25zdCBwbGF5ZXJEZXRhaWxzID0gcGxheWVyRGF0YT8uZGF0YS5wbGF5ZXJEZXRhaWxzXG4gICAgY29uc3QgYWxsUGxheWVycyA9IHBsYXllckRhdGE/LmRhdGEuYWxsUGxheWVyc1xuICAgIGNvbnN0IGN1cnJGaXJzdE5hbWUgPSBwbGF5ZXJEZXRhaWxzPy5maXJzdF9uYW1lXG4gICAgY29uc3QgY3Vyckxhc3ROYW1lID0gcGxheWVyRGV0YWlscz8ubGFzdF9uYW1lXG4gICAgY29uc3QgY3VyckZ1bGxOYW1lID0gcGxheWVyRGV0YWlscz8uZnVsbF9uYW1lXG5cbiAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJEZXRhaWxzKVxuXG5cbiAgICB2YXIgbmV3QXJyYXkgPSBhbGxQbGF5ZXJzPy5maWx0ZXIoZnVuY3Rpb24gKGVsKVxuICAgIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGVsLmZpcnN0TmFtZSA9PT0gY3VyckZpcnN0TmFtZSAmJlxuICAgICAgICBlbC5sYXN0TmFtZSA9PT0gY3Vyckxhc3ROYW1lKVxuICAgIH1cbiAgICApO1xuXG4gICAgdmFyIGN1cnJJRCA9IG5ld0FycmF5JiZuZXdBcnJheVswXS5wZXJzb25JZFxuXG4gICAgY29uc3QgaGVhZHNob3RVUkwgPSBgaHR0cHM6Ly9hay1zdGF0aWMuY21zLm5iYS5jb20vd3AtY29udGVudC91cGxvYWRzL2hlYWRzaG90cy9uYmEvbGF0ZXN0LzI2MHgxOTAvJHtjdXJySUR9LnBuZ2BcblxuICAgIGxldCBoZWlnaHRGdCA9IE1hdGguZmxvb3IocGxheWVyRGV0YWlscz8uaGVpZ2h0LzEyKVxuICAgIGxldCBoZWlnaHRJbmNoZXMgPSBwbGF5ZXJEZXRhaWxzPy5oZWlnaHQgLSBoZWlnaHRGdCoxMlxuXG5cbiAgcmV0dXJuIChcbiAgICBcbjxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LXNtIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBzaGFkb3cgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBweC00IHB0LTRcIj5cbiAgICAgICAgey8qIDxidXR0b24gaWQ9XCJkcm9wZG93bkJ1dHRvblwiIGRhdGEtZHJvcGRvd24tdG9nZ2xlPVwiZHJvcGRvd25JZFwiIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMCBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ncmF5LTIwMCBkYXJrOmZvY3VzOnJpbmctZ3JheS03MDAgcm91bmRlZC1sZyB0ZXh0LXNtIHAtMS41XCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gZHJvcGRvd248L3NwYW4+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNiBoLTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTYgMTBhMiAyIDAgMTEtNCAwIDIgMiAwIDAxNCAwek0xMiAxMGEyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6TTE2IDEyYTIgMiAwIDEwMC00IDIgMiAwIDAwMCA0elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgPC9idXR0b24+ICovfVxuICAgICAgICB7LyogPCEtLSBEcm9wZG93biBtZW51IC0tPiAqL31cbiAgICAgICAgey8qIDxkaXYgaWQ9XCJkcm9wZG93blwiIGNsYXNzTmFtZT1cInotMTAgaGlkZGVuIHRleHQtYmFzZSBsaXN0LW5vbmUgYmctd2hpdGUgZGl2aWRlLXkgZGl2aWRlLWdyYXktMTAwIHJvdW5kZWQtbGcgc2hhZG93IHctNDQgZGFyazpiZy1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInB5LTJcIiBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bkJ1dHRvblwiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTIwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGVcIj5FZGl0PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAgaG92ZXI6YmctZ3JheS0xMDAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0yMDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlXCI+RXhwb3J0IERhdGE8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1yZWQtNjAwIGhvdmVyOmJnLWdyYXktMTAwIGRhcms6aG92ZXI6YmctZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMjAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZVwiPkRlbGV0ZTwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwYi0xMFwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctMjQgaC0yNCBtYi0zIHJvdW5kZWQtZnVsbCBzaGFkb3ctbGdcIiBzcmM9e2Ake2hlYWRzaG90VVJMfWB9IGFsdD1cIkJvbm5pZSBpbWFnZVwiLz5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTEgdGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAge2N1cnJGdWxsTmFtZX1cbiAgICAgICAgPC9oNT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgI3twbGF5ZXJEZXRhaWxzPy5qZXJzZXlfbnVtYmVyfSAvIHtwbGF5ZXJEZXRhaWxzPy5wcmltYXJ5X3Bvc2l0aW9ufVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgIHtoZWlnaHRGdH0ne2hlaWdodEluY2hlc31cIiAvIHtwbGF5ZXJEZXRhaWxzPy53ZWlnaHR9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgQm9ybjoge3BsYXllckRldGFpbHM/LmJpcnRoZGF0ZX0gLyAge3BsYXllckRldGFpbHM/LmJpcnRoX3BsYWNlfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgIERyYWZ0OiB7cGxheWVyRGV0YWlscz8uZHJhZnQueWVhcn0gLSB7cGxheWVyRGV0YWlscz8uZHJhZnQucm91bmR9IC8ge3BsYXllckRldGFpbHM/LmRyYWZ0LnBpY2t9ICh7cGxheWVyRGV0YWlscz8uY29sbGVnZX0pXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTQgc3BhY2UteC0zIG1kOm10LTZcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtY2VudGVyIHRleHQtd2hpdGUgYmctYmx1ZS03MDAgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS0zMDAgZGFyazpiZy1ibHVlLTYwMCBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiPlNlZSBDYXJlZXIgU3RhdHM8L2E+XG4gICAgICAgICAgICB7LyogPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTkwMCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWdyYXktMjAwIGRhcms6YmctZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgZGFyazpob3Zlcjpib3JkZXItZ3JheS03MDAgZGFyazpmb2N1czpyaW5nLWdyYXktNzAwXCI+TWVzc2FnZTwvYT4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJDYXJkIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQbGF5ZXJDYXJkIiwicGxheWVyRGF0YSIsInNldFBsYXllckRhdGEiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJwbGF5ZXJEZXRhaWxzIiwiZGF0YSIsImFsbFBsYXllcnMiLCJjdXJyRmlyc3ROYW1lIiwiZmlyc3RfbmFtZSIsImN1cnJMYXN0TmFtZSIsImxhc3RfbmFtZSIsImN1cnJGdWxsTmFtZSIsImZ1bGxfbmFtZSIsIm5ld0FycmF5IiwiZmlsdGVyIiwiZWwiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImN1cnJJRCIsInBlcnNvbklkIiwiaGVhZHNob3RVUkwiLCJoZWlnaHRGdCIsIk1hdGgiLCJmbG9vciIsImhlaWdodCIsImhlaWdodEluY2hlcyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImg1Iiwic3BhbiIsImplcnNleV9udW1iZXIiLCJwcmltYXJ5X3Bvc2l0aW9uIiwid2VpZ2h0IiwiYmlydGhkYXRlIiwiYmlydGhfcGxhY2UiLCJkcmFmdCIsInllYXIiLCJyb3VuZCIsInBpY2siLCJjb2xsZWdlIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/playerCard.js\n");

/***/ })

};
;
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout */ \"./pages/components/layout.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [currRoster, setCurrRoster] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [seasonStats, setSeasonStats] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [player, setPlayer] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    console.log(\"p123\", \"pctnev2hp8f3fv4nwuyvwp5z\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const delay = (ms)=>new Promise((res)=>setTimeout(res, ms));\n        async function getData() {\n            var _firstResponse_data_currTeam;\n            const [firstResponse, secondResponse, thirdResponse] = await Promise.all([\n                axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/getCurrentRoster\"),\n                await delay(2000),\n                axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/seasonalStats\")\n            ]);\n            setCurrRoster((_firstResponse_data_currTeam = firstResponse === null || firstResponse === void 0 ? void 0 : firstResponse.data.currTeam) === null || _firstResponse_data_currTeam === void 0 ? void 0 : _firstResponse_data_currTeam.players);\n            setSeasonStats(thirdResponse === null || thirdResponse === void 0 ? void 0 : thirdResponse.data);\n            return {\n                firstResponse: firstResponse,\n                thirdResponse: thirdResponse\n            };\n        }\n        let responses = getData();\n    // axios.get('/api/getCurrentRoster').then((response) => {\n    //   setCurrRoster(response?.data.currTeam.players)\n    // })\n    }, []);\n    // useEffect (() => {\n    //   axios.get('/api/seasonalStats').then((response) => {\n    //     setSeasonStats(response?.data)\n    //   })\n    // }, [currRoster])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: currRoster && seasonStats && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps,\n            currRoster: currRoster,\n            seasonStats: seasonStats\n        }, void 0, false, {\n            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/_app.js\",\n            lineNumber: 48,\n            columnNumber: 15\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/_app.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_s(MyApp, \"ui5ash6W59KkRfiHtgl7YxHdsz8=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThCO0FBQ1U7QUFDZjtBQUNnQjtBQUd6QyxTQUFTSSxNQUFNLEtBQXdCLEVBQUU7UUFBMUIsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsR0FBeEI7O0lBQ1gsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQTtJQUM1QyxNQUFNLENBQUNPLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBO0lBQzlDLE1BQU0sQ0FBQ1MsUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUE7SUFHdENXLFFBQVFDLEdBQUcsQ0FBQyxRQUFPQywwQkFBMkM7SUFFNURaLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNZSxRQUFRQyxDQUFBQSxLQUFNLElBQUlDLFFBQVFDLENBQUFBLE1BQU9DLFdBQVdELEtBQUtGO1FBRXZELGVBQWVJLFVBQVc7Z0JBS1ZDO1lBSmQsTUFBTSxDQUFDQSxlQUFlQyxnQkFBZ0JDLGNBQWMsR0FBRyxNQUFNTixRQUFRTyxHQUFHLENBQUM7Z0JBQUMxQixpREFBUyxDQUFDO2dCQUNwRixNQUFNaUIsTUFBTTtnQkFDWmpCLGlEQUFTLENBQUM7YUFBc0I7WUFFaENPLGNBQWNnQixDQUFBQSwrQkFBQUEsMEJBQUFBLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlSyxJQUFJLENBQUNDLFFBQVEsY0FBNUJOLDBDQUFBQSxLQUFBQSxJQUFBQSw2QkFBOEJPLE9BQU87WUFDbkRyQixlQUFlZ0IsMEJBQUFBLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlRyxJQUFJO1lBRWxDLE9BQU87Z0JBQUNMLGVBQWVBO2dCQUFlRSxlQUFlQTtZQUFhO1FBQ3BFO1FBRUEsSUFBSU0sWUFBWVQ7SUFJaEIsMERBQTBEO0lBQzFELG1EQUFtRDtJQUNuRCxLQUFLO0lBQ1AsR0FBRyxFQUFFO0lBRUwscUJBQXFCO0lBQ3JCLHlEQUF5RDtJQUN6RCxxQ0FBcUM7SUFDckMsT0FBTztJQUNQLG1CQUFtQjtJQUduQixxQkFDSSw4REFBQ3ZCLDBEQUFNQTtrQkFDRixjQUFlUyw2QkFDZCw4REFBQ0o7WUFBVyxHQUFHQyxTQUFTO1lBQUVDLFlBQVlBO1lBQVlFLGFBQWFBOzs7Ozs7Ozs7OztBQUk3RTtHQTdDU0w7S0FBQUE7QUErQ1QsK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICBjb25zdCBbY3VyclJvc3Rlciwgc2V0Q3VyclJvc3Rlcl0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW3NlYXNvblN0YXRzLCBzZXRTZWFzb25TdGF0c10gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW3BsYXllciwgc2V0UGxheWVyXSA9IHVzZVN0YXRlKClcblxuXG4gIGNvbnNvbGUubG9nKCdwMTIzJyxwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TUE9SVFNSQURBUl9BUElfS0VZKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IGRlbGF5ID0gbXMgPT4gbmV3IFByb21pc2UocmVzID0+IHNldFRpbWVvdXQocmVzLCBtcykpO1xuXG4gICAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhICgpIHtcbiAgICAgICAgY29uc3QgW2ZpcnN0UmVzcG9uc2UsIHNlY29uZFJlc3BvbnNlLCB0aGlyZFJlc3BvbnNlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtheGlvcy5nZXQoJy9hcGkvZ2V0Q3VycmVudFJvc3RlcicpLFxuICAgICAgICBhd2FpdCBkZWxheSgyMDAwKSxcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3NlYXNvbmFsU3RhdHMnKV0pXG5cbiAgICAgICAgc2V0Q3VyclJvc3RlcihmaXJzdFJlc3BvbnNlPy5kYXRhLmN1cnJUZWFtPy5wbGF5ZXJzKVxuICAgICAgICBzZXRTZWFzb25TdGF0cyh0aGlyZFJlc3BvbnNlPy5kYXRhKVxuXG4gICAgICAgIHJldHVybiB7Zmlyc3RSZXNwb25zZTogZmlyc3RSZXNwb25zZSwgdGhpcmRSZXNwb25zZTogdGhpcmRSZXNwb25zZX1cbiAgICAgIH1cblxuICAgICAgbGV0IHJlc3BvbnNlcyA9IGdldERhdGEoKVxuXG5cblxuICAgICAgLy8gYXhpb3MuZ2V0KCcvYXBpL2dldEN1cnJlbnRSb3N0ZXInKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gICBzZXRDdXJyUm9zdGVyKHJlc3BvbnNlPy5kYXRhLmN1cnJUZWFtLnBsYXllcnMpXG4gICAgICAvLyB9KVxuICAgIH0sIFtdKVxuXG4gICAgLy8gdXNlRWZmZWN0ICgoKSA9PiB7XG4gICAgLy8gICBheGlvcy5nZXQoJy9hcGkvc2Vhc29uYWxTdGF0cycpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgLy8gICAgIHNldFNlYXNvblN0YXRzKHJlc3BvbnNlPy5kYXRhKVxuICAgIC8vICAgfSlcbiAgICAvLyB9LCBbY3VyclJvc3Rlcl0pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICB7KGN1cnJSb3N0ZXIgJiYgc2Vhc29uU3RhdHMpICYmIFxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGN1cnJSb3N0ZXI9e2N1cnJSb3N0ZXJ9IHNlYXNvblN0YXRzPXtzZWFzb25TdGF0c30gLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcCJdLCJuYW1lcyI6WyJMYXlvdXQiLCJheGlvcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjdXJyUm9zdGVyIiwic2V0Q3VyclJvc3RlciIsInNlYXNvblN0YXRzIiwic2V0U2Vhc29uU3RhdHMiLCJwbGF5ZXIiLCJzZXRQbGF5ZXIiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NQT1JUU1JBREFSX0FQSV9LRVkiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlcyIsInNldFRpbWVvdXQiLCJnZXREYXRhIiwiZmlyc3RSZXNwb25zZSIsInNlY29uZFJlc3BvbnNlIiwidGhpcmRSZXNwb25zZSIsImFsbCIsImdldCIsImRhdGEiLCJjdXJyVGVhbSIsInBsYXllcnMiLCJyZXNwb25zZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});
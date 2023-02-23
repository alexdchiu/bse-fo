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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\n\nfunction MyApp(param) {\n    let { Component , props  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...props\n        }, void 0, false, {\n            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/_app.js\",\n            lineNumber: 12,\n            columnNumber: 15\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/_app.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n_c = MyApp;\nMyApp.getInitialProps = async (ctx)=>{\n    var _firstResponse_data_currTeam;\n    const delay = (ms)=>new Promise((res)=>setTimeout(res, ms));\n    await delay(2000);\n    const season_year = \"2022\";\n    const season_type = \"REG\";\n    const team_id = \"583ec9d6-fb46-11e1-82cb-f4ce4684ea4c\";\n    const language_code = \"en\";\n    const key = \"\".concat(\"pctnev2hp8f3fv4nwuyvwp5z\");\n    const seasonStatsURL = \"http://api.sportradar.us/nba/trial/v7/\".concat(language_code, \"/seasons/\").concat(season_year, \"/\").concat(season_type, \"/teams/\").concat(team_id, \"/statistics.json?api_key=\").concat(\"pctnev2hp8f3fv4nwuyvwp5z\");\n    const currRosterURL = \"http://api.sportradar.us/nba/trial/v7/\".concat(language_code, \"/teams/\").concat(team_id, \"/profile.json?api_key=\").concat(key);\n    const [firstResponse, secondResponse, thirdResponse] = await Promise.all([\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(currRosterURL),\n        await delay(2000),\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(seasonStatsURL)\n    ]);\n    console.log(firstResponse);\n    return {\n        props: {\n            currRoster: (_firstResponse_data_currTeam = firstResponse === null || firstResponse === void 0 ? void 0 : firstResponse.data.currTeam) === null || _firstResponse_data_currTeam === void 0 ? void 0 : _firstResponse_data_currTeam.players,\n            seasonStats: thirdResponse === null || thirdResponse === void 0 ? void 0 : thirdResponse.data.data\n        }\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThCO0FBQ1c7QUFDaEI7QUFHekIsU0FBU0UsTUFBTSxLQUVaLEVBQUU7UUFGVSxFQUFFQyxVQUFTLEVBQ3ZCQyxNQUFLLEVBQ0wsR0FGWTtJQUdYLHFCQUNJLDhEQUFDSiwwREFBTUE7a0JBRUQsNEVBQUNHO1lBQVcsR0FBR0MsS0FBSzs7Ozs7Ozs7Ozs7QUFHbEM7S0FUU0Y7QUFZVEEsTUFBTUcsZUFBZSxHQUFHLE9BQU9DLE1BQVE7UUFzQmZDO0lBcEJsQixNQUFNQyxRQUFRQyxDQUFBQSxLQUFNLElBQUlDLFFBQVFDLENBQUFBLE1BQU9DLFdBQVdELEtBQUtGO0lBQ3ZELE1BQU1ELE1BQU07SUFDWixNQUFNSyxjQUFjO0lBQ3BCLE1BQU1DLGNBQWM7SUFDcEIsTUFBTUMsVUFBVTtJQUNoQixNQUFNQyxnQkFBZ0I7SUFDdEIsTUFBTUMsTUFBTSxHQUErQyxPQUE1Q0MsMEJBQTJDO0lBRTFELE1BQU1HLGlCQUFpQix5Q0FBa0VSLE9BQXpCRyxlQUFjLGFBQTBCRixPQUFmRCxhQUFZLEtBQXdCRSxPQUFyQkQsYUFBWSxXQUE0Q0ksT0FBbkNILFNBQVEsNkJBQXVFLE9BQTVDRywwQkFBMkM7SUFFM00sTUFBTUksZ0JBQWdCLHlDQUFnRVAsT0FBdkJDLGVBQWMsV0FBeUNDLE9BQWhDRixTQUFRLDBCQUE0QixPQUFKRTtJQUV0SCxNQUFNLENBQUNWLGVBQWVnQixnQkFBZ0JDLGNBQWMsR0FBRyxNQUFNZCxRQUFRZSxHQUFHLENBQUM7UUFBQ3hCLGlEQUFTLENBQUNxQjtRQUNsRixNQUFNZCxNQUFNO1FBQ1pQLGlEQUFTLENBQUNvQjtLQUFnQjtJQUcxQk0sUUFBUUMsR0FBRyxDQUFDckI7SUFDWixPQUFPO1FBQ0xILE9BQU87WUFDTHlCLFlBQVl0QixDQUFBQSwrQkFBQUEsMEJBQUFBLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFldUIsSUFBSSxDQUFDQyxRQUFRLGNBQTVCeEIsMENBQUFBLEtBQUFBLElBQUFBLDZCQUE4QnlCLE9BQU87WUFDakRDLFdBQVcsRUFBRVQsMEJBQUFBLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlTSxJQUFJLENBQUNBLElBQUk7UUFDdkM7SUFDRjtBQUNSO0FBRUEsK0RBQWU1QixLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsXG4gICBwcm9wcyBcbiAgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgIFxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufVxuXG5cbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcblxuICAgICAgY29uc3QgZGVsYXkgPSBtcyA9PiBuZXcgUHJvbWlzZShyZXMgPT4gc2V0VGltZW91dChyZXMsIG1zKSk7XG4gICAgICBhd2FpdCBkZWxheSgyMDAwKVxuICAgICAgY29uc3Qgc2Vhc29uX3llYXIgPSAnMjAyMidcbiAgICAgIGNvbnN0IHNlYXNvbl90eXBlID0gJ1JFRydcbiAgICAgIGNvbnN0IHRlYW1faWQgPSAnNTgzZWM5ZDYtZmI0Ni0xMWUxLTgyY2ItZjRjZTQ2ODRlYTRjJ1xuICAgICAgY29uc3QgbGFuZ3VhZ2VfY29kZSA9ICdlbidcbiAgICAgIGNvbnN0IGtleSA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NQT1JUU1JBREFSX0FQSV9LRVl9YFxuICAgICAgXG4gICAgICBjb25zdCBzZWFzb25TdGF0c1VSTCA9IGBodHRwOi8vYXBpLnNwb3J0cmFkYXIudXMvbmJhL3RyaWFsL3Y3LyR7bGFuZ3VhZ2VfY29kZX0vc2Vhc29ucy8ke3NlYXNvbl95ZWFyfS8ke3NlYXNvbl90eXBlfS90ZWFtcy8ke3RlYW1faWR9L3N0YXRpc3RpY3MuanNvbj9hcGlfa2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1BPUlRTUkFEQVJfQVBJX0tFWX1gXG5cbiAgICAgIGNvbnN0IGN1cnJSb3N0ZXJVUkwgPSBgaHR0cDovL2FwaS5zcG9ydHJhZGFyLnVzL25iYS90cmlhbC92Ny8ke2xhbmd1YWdlX2NvZGV9L3RlYW1zLyR7dGVhbV9pZH0vcHJvZmlsZS5qc29uP2FwaV9rZXk9JHtrZXl9YFxuICAgICAgXG4gICAgICBjb25zdCBbZmlyc3RSZXNwb25zZSwgc2Vjb25kUmVzcG9uc2UsIHRoaXJkUmVzcG9uc2VdID0gYXdhaXQgUHJvbWlzZS5hbGwoW2F4aW9zLmdldChjdXJyUm9zdGVyVVJMKSxcbiAgICAgICAgYXdhaXQgZGVsYXkoMjAwMCksXG4gICAgICAgIGF4aW9zLmdldChzZWFzb25TdGF0c1VSTCldKVxuXG5cbiAgICAgICAgY29uc29sZS5sb2coZmlyc3RSZXNwb25zZSlcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgY3VyclJvc3RlcjogZmlyc3RSZXNwb25zZT8uZGF0YS5jdXJyVGVhbT8ucGxheWVycyxcbiAgICAgICAgICAgIHNlYXNvblN0YXRzOiB0aGlyZFJlc3BvbnNlPy5kYXRhLmRhdGFcbiAgICAgICAgICB9XG4gICAgICAgIH0gICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJheGlvcyIsIk15QXBwIiwiQ29tcG9uZW50IiwicHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmaXJzdFJlc3BvbnNlIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXMiLCJzZXRUaW1lb3V0Iiwic2Vhc29uX3llYXIiLCJzZWFzb25fdHlwZSIsInRlYW1faWQiLCJsYW5ndWFnZV9jb2RlIiwia2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NQT1JUU1JBREFSX0FQSV9LRVkiLCJzZWFzb25TdGF0c1VSTCIsImN1cnJSb3N0ZXJVUkwiLCJzZWNvbmRSZXNwb25zZSIsInRoaXJkUmVzcG9uc2UiLCJhbGwiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiY3VyclJvc3RlciIsImRhdGEiLCJjdXJyVGVhbSIsInBsYXllcnMiLCJzZWFzb25TdGF0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});
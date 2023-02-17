"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_app */ \"./pages/_app.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Index() {\n    _s();\n    // axios.get('/api/players').then((data) => {\n    //   console.log(data)\n    // })\n    const [allTeams, setAllTeams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    let conferences = [];\n    let divisionNames = [];\n    let divisions = {};\n    let teamNames = [];\n    let teamIDs = {};\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"api/allTeams\").then((response)=>{\n            setAllTeams(response.data);\n        });\n    }, []);\n    for(let i = 0; i < (allTeams === null || allTeams === void 0 ? void 0 : allTeams.standings.conferences.length); i++){\n        conferences.push(allTeams.standings.conferences[i].alias);\n        for(let j = 0; j < allTeams.standings.conferences[i].divisions.length; j++){\n            divisions[allTeams.standings.conferences[i].divisions[j].name] = allTeams.standings.conferences[i].divisions[j].teams;\n            divisionNames.push(allTeams.standings.conferences[i].divisions[j].name);\n        }\n    }\n    for(let i = 0; i < (divisionNames === null || divisionNames === void 0 ? void 0 : divisionNames.length); i++){\n        let division = divisionNames[i];\n        for(let j = 0; j < divisionNames.length; j++){\n            var _divisions_division_j, _divisions_division_j1, _divisions_division_j2;\n            let market = (_divisions_division_j = divisions[division][j]) === null || _divisions_division_j === void 0 ? void 0 : _divisions_division_j.market;\n            let name = (_divisions_division_j1 = divisions[division][j]) === null || _divisions_division_j1 === void 0 ? void 0 : _divisions_division_j1.name;\n            let id = (_divisions_division_j2 = divisions[division][j]) === null || _divisions_division_j2 === void 0 ? void 0 : _divisions_division_j2.id;\n            if (market && name) {\n                teamNames.push(\"\".concat(market, \" \").concat(name));\n                teamIDs[\"\".concat(market, \" \").concat(name)] = id;\n            }\n        }\n    }\n    console.log(\"ids\", teamIDs);\n    teamNames.sort();\n    // console.log(teamNames)\n    // console.log('conf', conferences)\n    // console.log('div', divisions)\n    // console.log('divnames', divisionNames)\n    // console.log('teamnames', teamNames)\n    // console.log(teamNames, teamIDs, Object.keys(teamIDs).length)\n    const NavBar = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>__webpack_require__.e(/*! import() */ \"pages_components_navBar_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./components/navBar.js */ \"./pages/components/navBar.js\")), {\n        loadableGenerated: {\n            modules: [\n                \"index.js -> \" + \"./components/navBar.js\"\n            ]\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavBar, {\n            teamNames: teamNames,\n            teamIDs: teamIDs\n        }, void 0, false, {\n            fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/index.js\",\n            lineNumber: 64,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/alexchiu/Documents/projects/bse-fo/front-end/pages/index.js\",\n        lineNumber: 62,\n        columnNumber: 10\n    }, this);\n}\n_s(Index, \"X5pzE6z6QbfYlljBXtaea6gibHw=\");\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDQTtBQUNjO0FBQ2Y7QUFDVTtBQUNGO0FBQ1M7QUFHMUIsU0FBU1EsUUFBUzs7SUFDL0IsNkNBQTZDO0lBQzdDLHNCQUFzQjtJQUN0QixLQUFLO0lBQ0wsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQTtJQUN4QyxJQUFJSyxjQUFjLEVBQUU7SUFDcEIsSUFBSUMsZ0JBQWdCLEVBQUU7SUFDdEIsSUFBSUMsWUFBWSxDQUFDO0lBQ2pCLElBQUlDLFlBQVksRUFBRTtJQUNsQixJQUFJQyxVQUFVLENBQUM7SUFFZlIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkUCxpREFBUyxDQUFDLGdCQUFnQmlCLElBQUksQ0FBQyxDQUFDQyxXQUFhO1lBQzNDUixZQUFZUSxTQUFTQyxJQUFJO1FBQzNCO0lBQ0YsR0FBRyxFQUFFO0lBR0wsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLEtBQUlYLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVVksU0FBUyxDQUFDVixXQUFXLENBQUNXLE1BQU0sR0FBRUYsSUFBSztRQUMvRFQsWUFBWVksSUFBSSxDQUFDZCxTQUFTWSxTQUFTLENBQUNWLFdBQVcsQ0FBQ1MsRUFBRSxDQUFDSSxLQUFLO1FBQ3hELElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJaEIsU0FBU1ksU0FBUyxDQUFDVixXQUFXLENBQUNTLEVBQUUsQ0FBQ1AsU0FBUyxDQUFDUyxNQUFNLEVBQUVHLElBQUs7WUFDM0VaLFNBQVMsQ0FBQ0osU0FBU1ksU0FBUyxDQUFDVixXQUFXLENBQUNTLEVBQUUsQ0FBQ1AsU0FBUyxDQUFDWSxFQUFFLENBQUNDLElBQUksQ0FBQyxHQUFHakIsU0FBU1ksU0FBUyxDQUFDVixXQUFXLENBQUNTLEVBQUUsQ0FBQ1AsU0FBUyxDQUFDWSxFQUFFLENBQUNFLEtBQUs7WUFDckhmLGNBQWNXLElBQUksQ0FBQ2QsU0FBU1ksU0FBUyxDQUFDVixXQUFXLENBQUNTLEVBQUUsQ0FBQ1AsU0FBUyxDQUFDWSxFQUFFLENBQUNDLElBQUk7UUFDeEU7SUFDRjtJQUVBLElBQUssSUFBSU4sSUFBSSxHQUFHQSxJQUFJUixDQUFBQSwwQkFBQUEsMkJBQUFBLEtBQUFBLElBQUFBLGNBQWVVLE1BQU0sR0FBRUYsSUFBSztRQUM5QyxJQUFJUSxXQUFXaEIsYUFBYSxDQUFDUSxFQUFFO1FBQy9CLElBQUssSUFBSUssSUFBSSxHQUFHQSxJQUFJYixjQUFjVSxNQUFNLEVBQUVHLElBQUs7Z0JBQ2hDWix1QkFDRkEsd0JBQ0ZBO1lBRlQsSUFBSWdCLFNBQVNoQixDQUFBQSx3QkFBQUEsU0FBUyxDQUFDZSxTQUFTLENBQUNILEVBQUUsY0FBdEJaLG1DQUFBQSxLQUFBQSxJQUFBQSxzQkFBd0JnQixNQUFNO1lBQzNDLElBQUlILE9BQU9iLENBQUFBLHlCQUFBQSxTQUFTLENBQUNlLFNBQVMsQ0FBQ0gsRUFBRSxjQUF0Qlosb0NBQUFBLEtBQUFBLElBQUFBLHVCQUF3QmEsSUFBSTtZQUN2QyxJQUFJSSxLQUFLakIsQ0FBQUEseUJBQUFBLFNBQVMsQ0FBQ2UsU0FBUyxDQUFDSCxFQUFFLGNBQXRCWixvQ0FBQUEsS0FBQUEsSUFBQUEsdUJBQXdCaUIsRUFBRTtZQUNuQyxJQUFJRCxVQUFVSCxNQUFNO2dCQUNsQlosVUFBVVMsSUFBSSxDQUFDLEdBQWFHLE9BQVZHLFFBQU8sS0FBUSxPQUFMSDtnQkFDNUJYLE9BQU8sQ0FBQyxHQUFhVyxPQUFWRyxRQUFPLEtBQVEsT0FBTEgsTUFBTyxHQUFHSTtZQUNqQyxDQUFDO1FBQ0g7SUFDRjtJQUVBQyxRQUFRQyxHQUFHLENBQUMsT0FBT2pCO0lBRW5CRCxVQUFVbUIsSUFBSTtJQUNkLHlCQUF5QjtJQUV6QixtQ0FBbUM7SUFDbkMsZ0NBQWdDO0lBQ2hDLHlDQUF5QztJQUN6QyxzQ0FBc0M7SUFDdEMsK0RBQStEO0lBRS9ELE1BQU1DLFNBQVM5QixtREFBT0EsQ0FBQyxJQUFNLHFMQUFROzs7Ozs7O0lBRXJDLHFCQUFPLDhEQUFDK0I7a0JBRU4sNEVBQUNEO1lBQU9wQixXQUFXQTtZQUFXQyxTQUFTQTs7Ozs7Ozs7Ozs7QUFFM0MsQ0FBQztHQXhEdUJQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnXG5pbXBvcnQgQXBwIGZyb20gJy4vX2FwcCdcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCB7IFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4ICgpIHtcbiAgLy8gYXhpb3MuZ2V0KCcvYXBpL3BsYXllcnMnKS50aGVuKChkYXRhKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coZGF0YSlcbiAgLy8gfSlcbiAgY29uc3QgW2FsbFRlYW1zLCBzZXRBbGxUZWFtc10gPSB1c2VTdGF0ZSgpXG4gIGxldCBjb25mZXJlbmNlcyA9IFtdXG4gIGxldCBkaXZpc2lvbk5hbWVzID0gW11cbiAgbGV0IGRpdmlzaW9ucyA9IHt9XG4gIGxldCB0ZWFtTmFtZXMgPSBbXVxuICBsZXQgdGVhbUlEcyA9IHt9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvcy5nZXQoJ2FwaS9hbGxUZWFtcycpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRBbGxUZWFtcyhyZXNwb25zZS5kYXRhKVxuICAgIH0pXG4gIH0sIFtdKVxuXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUZWFtcz8uc3RhbmRpbmdzLmNvbmZlcmVuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uZmVyZW5jZXMucHVzaChhbGxUZWFtcy5zdGFuZGluZ3MuY29uZmVyZW5jZXNbaV0uYWxpYXMpXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxUZWFtcy5zdGFuZGluZ3MuY29uZmVyZW5jZXNbaV0uZGl2aXNpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICBkaXZpc2lvbnNbYWxsVGVhbXMuc3RhbmRpbmdzLmNvbmZlcmVuY2VzW2ldLmRpdmlzaW9uc1tqXS5uYW1lXSA9IGFsbFRlYW1zLnN0YW5kaW5ncy5jb25mZXJlbmNlc1tpXS5kaXZpc2lvbnNbal0udGVhbXNcbiAgICAgIGRpdmlzaW9uTmFtZXMucHVzaChhbGxUZWFtcy5zdGFuZGluZ3MuY29uZmVyZW5jZXNbaV0uZGl2aXNpb25zW2pdLm5hbWUpXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXZpc2lvbk5hbWVzPy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBkaXZpc2lvbiA9IGRpdmlzaW9uTmFtZXNbaV1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRpdmlzaW9uTmFtZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBtYXJrZXQgPSBkaXZpc2lvbnNbZGl2aXNpb25dW2pdPy5tYXJrZXRcbiAgICAgIGxldCBuYW1lID0gZGl2aXNpb25zW2RpdmlzaW9uXVtqXT8ubmFtZVxuICAgICAgbGV0IGlkID0gZGl2aXNpb25zW2RpdmlzaW9uXVtqXT8uaWRcbiAgICAgIGlmIChtYXJrZXQgJiYgbmFtZSkge1xuICAgICAgICB0ZWFtTmFtZXMucHVzaChgJHttYXJrZXR9ICR7bmFtZX1gKVxuICAgICAgICB0ZWFtSURzW2Ake21hcmtldH0gJHtuYW1lfWBdID0gaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zb2xlLmxvZygnaWRzJywgdGVhbUlEcylcblxuICB0ZWFtTmFtZXMuc29ydCgpXG4gIC8vIGNvbnNvbGUubG9nKHRlYW1OYW1lcylcblxuICAvLyBjb25zb2xlLmxvZygnY29uZicsIGNvbmZlcmVuY2VzKVxuICAvLyBjb25zb2xlLmxvZygnZGl2JywgZGl2aXNpb25zKVxuICAvLyBjb25zb2xlLmxvZygnZGl2bmFtZXMnLCBkaXZpc2lvbk5hbWVzKVxuICAvLyBjb25zb2xlLmxvZygndGVhbW5hbWVzJywgdGVhbU5hbWVzKVxuICAvLyBjb25zb2xlLmxvZyh0ZWFtTmFtZXMsIHRlYW1JRHMsIE9iamVjdC5rZXlzKHRlYW1JRHMpLmxlbmd0aClcblxuICBjb25zdCBOYXZCYXIgPSBkeW5hbWljKCgpID0+IGltcG9ydCAoJy4vY29tcG9uZW50cy9uYXZCYXIuanMnKSlcbiAgXG4gIHJldHVybiA8ZGl2PlxuICAgIHsvKiA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHVuZGVybGluZVwiPkhvbWUgcGFnZTwvaDE+ICovfVxuICAgIDxOYXZCYXIgdGVhbU5hbWVzPXt0ZWFtTmFtZXN9IHRlYW1JRHM9e3RlYW1JRHN9Lz5cbiAgPC9kaXY+XG59Il0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJSZWFjdERPTSIsIkFwcCIsImR5bmFtaWMiLCJTdXNwZW5zZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW5kZXgiLCJhbGxUZWFtcyIsInNldEFsbFRlYW1zIiwiY29uZmVyZW5jZXMiLCJkaXZpc2lvbk5hbWVzIiwiZGl2aXNpb25zIiwidGVhbU5hbWVzIiwidGVhbUlEcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJpIiwic3RhbmRpbmdzIiwibGVuZ3RoIiwicHVzaCIsImFsaWFzIiwiaiIsIm5hbWUiLCJ0ZWFtcyIsImRpdmlzaW9uIiwibWFya2V0IiwiaWQiLCJjb25zb2xlIiwibG9nIiwic29ydCIsIk5hdkJhciIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
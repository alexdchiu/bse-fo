"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getCurrentRoster";
exports.ids = ["pages/api/getCurrentRoster"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/getCurrentRoster.js":
/*!***************************************!*\
  !*** ./pages/api/getCurrentRoster.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst currTeamRoster = async (req, res)=>{\n    const team_id = \"583ec9d6-fb46-11e1-82cb-f4ce4684ea4c\";\n    const language_code = \"en\";\n    const key = `${process.env.SPORTSRADAR_API_KEY}`;\n    const url = `http://api.sportradar.us/nba/trial/v7/${language_code}/teams/${team_id}/profile.json?api_key=${key}`;\n    const data = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url).then((response)=>{\n        return response.data;\n    });\n    console.log(\"aaa\", data);\n    res.json({\n        currTeam: data\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currTeamRoster);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Q3VycmVudFJvc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUd6QixNQUFNQyxpQkFBaUIsT0FBT0MsS0FBS0MsTUFBUTtJQUN6QyxNQUFNQyxVQUFVO0lBQ2hCLE1BQU1DLGdCQUFnQjtJQUN0QixNQUFNQyxNQUFNLENBQUMsRUFBRUMsUUFBUUMsR0FBRyxDQUFDQyxtQkFBbUIsQ0FBQyxDQUFDO0lBRWhELE1BQU1DLE1BQU0sQ0FBQyxzQ0FBc0MsRUFBRUwsY0FBYyxPQUFPLEVBQUVELFFBQVEsc0JBQXNCLEVBQUVFLElBQUksQ0FBQztJQUVqSCxNQUFNSyxPQUFPLE1BQU1YLGlEQUFTLENBQUNVLEtBQUtHLElBQUksQ0FBQyxDQUFDQyxXQUFhO1FBQ25ELE9BQU9BLFNBQVNILElBQUk7SUFDdEI7SUFFQUksUUFBUUMsR0FBRyxDQUFDLE9BQU9MO0lBRW5CUixJQUFJYyxJQUFJLENBQUM7UUFDUEMsVUFBVVA7SUFDWjtBQUNGO0FBRUEsaUVBQWVWLGNBQWNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1lbmQvLi9wYWdlcy9hcGkvZ2V0Q3VycmVudFJvc3Rlci5qcz84ZWE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuXG5jb25zdCBjdXJyVGVhbVJvc3RlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB0ZWFtX2lkID0gJzU4M2VjOWQ2LWZiNDYtMTFlMS04MmNiLWY0Y2U0Njg0ZWE0YydcbiAgY29uc3QgbGFuZ3VhZ2VfY29kZSA9ICdlbidcbiAgY29uc3Qga2V5ID0gYCR7cHJvY2Vzcy5lbnYuU1BPUlRTUkFEQVJfQVBJX0tFWX1gXG5cbiAgY29uc3QgdXJsID0gYGh0dHA6Ly9hcGkuc3BvcnRyYWRhci51cy9uYmEvdHJpYWwvdjcvJHtsYW5ndWFnZV9jb2RlfS90ZWFtcy8ke3RlYW1faWR9L3Byb2ZpbGUuanNvbj9hcGlfa2V5PSR7a2V5fWBcbiAgXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQodXJsKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhXG4gIH0pXG5cbiAgY29uc29sZS5sb2coJ2FhYScsIGRhdGEpXG5cbiAgcmVzLmpzb24oe1xuICAgIGN1cnJUZWFtOiBkYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJUZWFtUm9zdGVyIl0sIm5hbWVzIjpbImF4aW9zIiwiY3VyclRlYW1Sb3N0ZXIiLCJyZXEiLCJyZXMiLCJ0ZWFtX2lkIiwibGFuZ3VhZ2VfY29kZSIsImtleSIsInByb2Nlc3MiLCJlbnYiLCJTUE9SVFNSQURBUl9BUElfS0VZIiwidXJsIiwiZGF0YSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiY3VyclRlYW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getCurrentRoster.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getCurrentRoster.js"));
module.exports = __webpack_exports__;

})();
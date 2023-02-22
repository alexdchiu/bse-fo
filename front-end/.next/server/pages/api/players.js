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
exports.id = "pages/api/players";
exports.ids = ["pages/api/players"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/players.js":
/*!******************************!*\
  !*** ./pages/api/players.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst getPlayerProfile = async (req, res)=>{\n    const team_id = \"583eccfa-fb46-11e1-82cb-f4ce4684ea4c\";\n    const player_id = req.query.id;\n    const language_code = \"en\";\n    const access_level = \"trial\";\n    const version = \"v7\";\n    const format = \"json\";\n    const key = `${process.env.NEXT_PUBLIC_SPORTSRADAR_API_KEY}`;\n    const url = `https://api.sportradar.com/nba/${access_level}/${version}/${language_code}/players/${player_id}/profile.${format}?api_key=${key}`;\n    const data = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url).then((response)=>{\n        return response.data;\n    });\n    console.log(\"hihi\", data);\n    res.json(data);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPlayerProfile);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGxheWVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUV6QixNQUFNQyxtQkFBbUIsT0FBT0MsS0FBS0MsTUFBUTtJQUMzQyxNQUFNQyxVQUFVO0lBQ2hCLE1BQU1DLFlBQVlILElBQUlJLEtBQUssQ0FBQ0MsRUFBRTtJQUM5QixNQUFNQyxnQkFBZ0I7SUFDdEIsTUFBTUMsZUFBZTtJQUNyQixNQUFNQyxVQUFVO0lBQ2hCLE1BQU1DLFNBQVM7SUFDZixNQUFNQyxNQUFNLENBQUMsRUFBRUMsUUFBUUMsR0FBRyxDQUFDQyxtQkFBbUIsQ0FBQyxDQUFDO0lBRWhELE1BQU1DLE1BQU0sQ0FBQywrQkFBK0IsRUFBRVAsYUFBYSxDQUFDLEVBQUVDLFFBQVEsQ0FBQyxFQUFFRixjQUFjLFNBQVMsRUFBRUgsVUFBVSxTQUFTLEVBQUVNLE9BQU8sU0FBUyxFQUFFQyxJQUFJLENBQUM7SUFFOUksTUFBTUssT0FBTyxNQUFNakIsaURBQVMsQ0FBQ2dCLEtBQUtHLElBQUksQ0FBQyxDQUFDQyxXQUFhO1FBQ25ELE9BQU9BLFNBQVNILElBQUk7SUFDdEI7SUFFQUksUUFBUUMsR0FBRyxDQUFDLFFBQVFMO0lBQ3BCZCxJQUFJb0IsSUFBSSxDQUFDTjtBQUVYO0FBRUEsaUVBQWVoQixnQkFBZ0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1lbmQvLi9wYWdlcy9hcGkvcGxheWVycy5qcz9kZTA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY29uc3QgZ2V0UGxheWVyUHJvZmlsZSA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB0ZWFtX2lkID0gJzU4M2VjY2ZhLWZiNDYtMTFlMS04MmNiLWY0Y2U0Njg0ZWE0YydcbiAgY29uc3QgcGxheWVyX2lkID0gcmVxLnF1ZXJ5LmlkIFxuICBjb25zdCBsYW5ndWFnZV9jb2RlID0gJ2VuJ1xuICBjb25zdCBhY2Nlc3NfbGV2ZWwgPSAndHJpYWwnXG4gIGNvbnN0IHZlcnNpb24gPSAndjcnXG4gIGNvbnN0IGZvcm1hdCA9ICdqc29uJ1xuICBjb25zdCBrZXkgPSBgJHtwcm9jZXNzLmVudi5TUE9SVFNSQURBUl9BUElfS0VZfWBcblxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkuc3BvcnRyYWRhci5jb20vbmJhLyR7YWNjZXNzX2xldmVsfS8ke3ZlcnNpb259LyR7bGFuZ3VhZ2VfY29kZX0vcGxheWVycy8ke3BsYXllcl9pZH0vcHJvZmlsZS4ke2Zvcm1hdH0/YXBpX2tleT0ke2tleX1gXG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbiAgfSlcblxuICBjb25zb2xlLmxvZygnaGloaScsIGRhdGEpXG4gIHJlcy5qc29uKGRhdGEpXG5cbn1cbiAgXG5leHBvcnQgZGVmYXVsdCBnZXRQbGF5ZXJQcm9maWxlIl0sIm5hbWVzIjpbImF4aW9zIiwiZ2V0UGxheWVyUHJvZmlsZSIsInJlcSIsInJlcyIsInRlYW1faWQiLCJwbGF5ZXJfaWQiLCJxdWVyeSIsImlkIiwibGFuZ3VhZ2VfY29kZSIsImFjY2Vzc19sZXZlbCIsInZlcnNpb24iLCJmb3JtYXQiLCJrZXkiLCJwcm9jZXNzIiwiZW52IiwiU1BPUlRTUkFEQVJfQVBJX0tFWSIsInVybCIsImRhdGEiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/players.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/players.js"));
module.exports = __webpack_exports__;

})();
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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst getPlayerProfile = async (req, res)=>{\n    // boston celtics\n    const team_id = \"583eccfa-fb46-11e1-82cb-f4ce4684ea4c\";\n    // jason tatum\n    const player_id = \"98136da3-452f-49dc-a794-1ee9c76443f2\";\n    const language_code = \"en\";\n    const access_level = \"trial\";\n    const version = \"v7\";\n    const format = \"json\";\n    const key = `${process.env.SPORTSRADAR_API_KEY}`;\n    const url = `https://api.sportradar.com/nba/${access_level}/${version}/${language_code}/players/${player_id}/profile.${format}?api_key=${key}`;\n    const data = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url).then((response)=>{\n        return response.data;\n    });\n    console.log(\"thisrklsjkldf\", data);\n    res.json(data);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPlayerProfile);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGxheWVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUV6QixNQUFNQyxtQkFBbUIsT0FBT0MsS0FBS0MsTUFBUTtJQUMzQyxpQkFBaUI7SUFDakIsTUFBTUMsVUFBVTtJQUNoQixjQUFjO0lBQ2QsTUFBTUMsWUFBWTtJQUNsQixNQUFNQyxnQkFBZ0I7SUFDdEIsTUFBTUMsZUFBZTtJQUNyQixNQUFNQyxVQUFVO0lBQ2hCLE1BQU1DLFNBQVM7SUFDZixNQUFNQyxNQUFNLENBQUMsRUFBRUMsUUFBUUMsR0FBRyxDQUFDQyxtQkFBbUIsQ0FBQyxDQUFDO0lBRWhELE1BQU1DLE1BQU0sQ0FBQywrQkFBK0IsRUFBRVAsYUFBYSxDQUFDLEVBQUVDLFFBQVEsQ0FBQyxFQUFFRixjQUFjLFNBQVMsRUFBRUQsVUFBVSxTQUFTLEVBQUVJLE9BQU8sU0FBUyxFQUFFQyxJQUFJLENBQUM7SUFFOUksTUFBTUssT0FBTyxNQUFNZixpREFBUyxDQUFDYyxLQUFLRyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtRQUNuRCxPQUFPQSxTQUFTSCxJQUFJO0lBQ3RCO0lBRUFJLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJMO0lBQzdCWixJQUFJa0IsSUFBSSxDQUFDTjtBQUVYO0FBRUEsaUVBQWVkLGdCQUFnQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LWVuZC8uL3BhZ2VzL2FwaS9wbGF5ZXJzLmpzP2RlMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBnZXRQbGF5ZXJQcm9maWxlID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIC8vIGJvc3RvbiBjZWx0aWNzXG4gIGNvbnN0IHRlYW1faWQgPSAnNTgzZWNjZmEtZmI0Ni0xMWUxLTgyY2ItZjRjZTQ2ODRlYTRjJ1xuICAvLyBqYXNvbiB0YXR1bVxuICBjb25zdCBwbGF5ZXJfaWQgPSAnOTgxMzZkYTMtNDUyZi00OWRjLWE3OTQtMWVlOWM3NjQ0M2YyJyBcbiAgY29uc3QgbGFuZ3VhZ2VfY29kZSA9ICdlbidcbiAgY29uc3QgYWNjZXNzX2xldmVsID0gJ3RyaWFsJ1xuICBjb25zdCB2ZXJzaW9uID0gJ3Y3J1xuICBjb25zdCBmb3JtYXQgPSAnanNvbidcbiAgY29uc3Qga2V5ID0gYCR7cHJvY2Vzcy5lbnYuU1BPUlRTUkFEQVJfQVBJX0tFWX1gXG5cbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLnNwb3J0cmFkYXIuY29tL25iYS8ke2FjY2Vzc19sZXZlbH0vJHt2ZXJzaW9ufS8ke2xhbmd1YWdlX2NvZGV9L3BsYXllcnMvJHtwbGF5ZXJfaWR9L3Byb2ZpbGUuJHtmb3JtYXR9P2FwaV9rZXk9JHtrZXl9YFxuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQodXJsKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhXG4gIH0pXG5cbiAgY29uc29sZS5sb2coJ3RoaXNya2xzamtsZGYnLCBkYXRhKVxuICByZXMuanNvbihkYXRhKVxuXG59XG4gIFxuZXhwb3J0IGRlZmF1bHQgZ2V0UGxheWVyUHJvZmlsZSJdLCJuYW1lcyI6WyJheGlvcyIsImdldFBsYXllclByb2ZpbGUiLCJyZXEiLCJyZXMiLCJ0ZWFtX2lkIiwicGxheWVyX2lkIiwibGFuZ3VhZ2VfY29kZSIsImFjY2Vzc19sZXZlbCIsInZlcnNpb24iLCJmb3JtYXQiLCJrZXkiLCJwcm9jZXNzIiwiZW52IiwiU1BPUlRTUkFEQVJfQVBJX0tFWSIsInVybCIsImRhdGEiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/players.js\n");

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
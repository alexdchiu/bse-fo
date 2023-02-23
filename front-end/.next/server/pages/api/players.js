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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst getPlayerProfile = async (req, res)=>{\n    const team_id = \"583eccfa-fb46-11e1-82cb-f4ce4684ea4c\";\n    const player_id = req.query.id;\n    const language_code = \"en\";\n    const access_level = \"trial\";\n    const version = \"v7\";\n    const format = \"json\";\n    const key = `${\"pctnev2hp8f3fv4nwuyvwp5z\"}`;\n    const url = `https://api.sportradar.com/nba/${access_level}/${version}/${language_code}/players/${player_id}/profile.${format}?api_key=${key}`;\n    const data = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url).then((response)=>{\n        return response.data;\n    });\n    res.json(data);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPlayerProfile);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGxheWVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUV6QixNQUFNQyxtQkFBbUIsT0FBT0MsS0FBS0MsTUFBUTtJQUMzQyxNQUFNQyxVQUFVO0lBQ2hCLE1BQU1DLFlBQVlILElBQUlJLEtBQUssQ0FBQ0MsRUFBRTtJQUM5QixNQUFNQyxnQkFBZ0I7SUFDdEIsTUFBTUMsZUFBZTtJQUNyQixNQUFNQyxVQUFVO0lBQ2hCLE1BQU1DLFNBQVM7SUFDZixNQUFNQyxNQUFNLENBQUMsRUFBRUMsMEJBQTJDLENBQUMsQ0FBQztJQUU1RCxNQUFNRyxNQUFNLENBQUMsK0JBQStCLEVBQUVQLGFBQWEsQ0FBQyxFQUFFQyxRQUFRLENBQUMsRUFBRUYsY0FBYyxTQUFTLEVBQUVILFVBQVUsU0FBUyxFQUFFTSxPQUFPLFNBQVMsRUFBRUMsSUFBSSxDQUFDO0lBRTlJLE1BQU1LLE9BQU8sTUFBTWpCLGlEQUFTLENBQUNnQixLQUFLRyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtRQUNuRCxPQUFPQSxTQUFTSCxJQUFJO0lBQ3RCO0lBRUFkLElBQUlrQixJQUFJLENBQUNKO0FBRVg7QUFFQSxpRUFBZWhCLGdCQUFnQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LWVuZC8uL3BhZ2VzL2FwaS9wbGF5ZXJzLmpzP2RlMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBnZXRQbGF5ZXJQcm9maWxlID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHRlYW1faWQgPSAnNTgzZWNjZmEtZmI0Ni0xMWUxLTgyY2ItZjRjZTQ2ODRlYTRjJ1xuICBjb25zdCBwbGF5ZXJfaWQgPSByZXEucXVlcnkuaWQgXG4gIGNvbnN0IGxhbmd1YWdlX2NvZGUgPSAnZW4nXG4gIGNvbnN0IGFjY2Vzc19sZXZlbCA9ICd0cmlhbCdcbiAgY29uc3QgdmVyc2lvbiA9ICd2NydcbiAgY29uc3QgZm9ybWF0ID0gJ2pzb24nXG4gIGNvbnN0IGtleSA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NQT1JUU1JBREFSX0FQSV9LRVl9YFxuXG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5zcG9ydHJhZGFyLmNvbS9uYmEvJHthY2Nlc3NfbGV2ZWx9LyR7dmVyc2lvbn0vJHtsYW5ndWFnZV9jb2RlfS9wbGF5ZXJzLyR7cGxheWVyX2lkfS9wcm9maWxlLiR7Zm9ybWF0fT9hcGlfa2V5PSR7a2V5fWBcblxuICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICB9KVxuXG4gIHJlcy5qc29uKGRhdGEpXG5cbn1cbiAgXG5leHBvcnQgZGVmYXVsdCBnZXRQbGF5ZXJQcm9maWxlIl0sIm5hbWVzIjpbImF4aW9zIiwiZ2V0UGxheWVyUHJvZmlsZSIsInJlcSIsInJlcyIsInRlYW1faWQiLCJwbGF5ZXJfaWQiLCJxdWVyeSIsImlkIiwibGFuZ3VhZ2VfY29kZSIsImFjY2Vzc19sZXZlbCIsInZlcnNpb24iLCJmb3JtYXQiLCJrZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1BPUlRTUkFEQVJfQVBJX0tFWSIsInVybCIsImRhdGEiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/players.js\n");

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
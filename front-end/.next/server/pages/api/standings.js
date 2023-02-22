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
exports.id = "pages/api/standings";
exports.ids = ["pages/api/standings"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/standings.js":
/*!********************************!*\
  !*** ./pages/api/standings.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst standings = async (req, res)=>{\n    const language_code = \"en\";\n    const season_year = \"2022\";\n    const season_type = \"REG\";\n    const key = `${process.env.NEXT_PUBLIC_SPORTSRADAR_API_KEY}`;\n    const delay = (ms)=>new Promise((res)=>setTimeout(res, ms));\n    await delay(1000);\n    const url = `http://api.sportradar.us/nba/trial/v7/${language_code}/seasons/${season_year}/${season_type}/standings.json?api_key=${key}`;\n    const data = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url).then((response)=>{\n        console.log(\"123\", response.data);\n        return response.data;\n    });\n    res.json({\n        data\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (standings);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RhbmRpbmdzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlCO0FBRXpCLE1BQU1DLFlBQVksT0FBT0MsS0FBS0MsTUFBUTtJQUNwQyxNQUFNQyxnQkFBZ0I7SUFDdEIsTUFBTUMsY0FBYztJQUNwQixNQUFNQyxjQUFjO0lBQ3BCLE1BQU1DLE1BQU0sQ0FBQyxFQUFFQyxRQUFRQyxHQUFHLENBQUNDLG1CQUFtQixDQUFDLENBQUM7SUFFaEQsTUFBTUMsUUFBUUMsQ0FBQUEsS0FBTSxJQUFJQyxRQUFRVixDQUFBQSxNQUFPVyxXQUFXWCxLQUFLUztJQUV2RCxNQUFNRCxNQUFNO0lBRVosTUFBTUksTUFBTSxDQUFDLHNDQUFzQyxFQUFFWCxjQUFjLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEVBQUVDLFlBQVksd0JBQXdCLEVBQUVDLElBQUksQ0FBQztJQUV4SSxNQUFNUyxPQUFPLE1BQU1oQixpREFBUyxDQUFDZSxLQUFLRyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtRQUNuREMsUUFBUUMsR0FBRyxDQUFDLE9BQU9GLFNBQVNILElBQUk7UUFDaEMsT0FBT0csU0FBU0gsSUFBSTtJQUN0QjtJQUVBYixJQUFJbUIsSUFBSSxDQUFDO1FBQ1BOO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlZixTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQtZW5kLy4vcGFnZXMvYXBpL3N0YW5kaW5ncy5qcz84ZWExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY29uc3Qgc3RhbmRpbmdzID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IGxhbmd1YWdlX2NvZGUgPSAnZW4nXG4gIGNvbnN0IHNlYXNvbl95ZWFyID0gJzIwMjInXG4gIGNvbnN0IHNlYXNvbl90eXBlID0gJ1JFRydcbiAgY29uc3Qga2V5ID0gYCR7cHJvY2Vzcy5lbnYuU1BPUlRTUkFEQVJfQVBJX0tFWX1gXG5cbiAgY29uc3QgZGVsYXkgPSBtcyA9PiBuZXcgUHJvbWlzZShyZXMgPT4gc2V0VGltZW91dChyZXMsIG1zKSk7XG5cbiAgYXdhaXQgZGVsYXkoMTAwMClcbiAgXG4gIGNvbnN0IHVybCA9IGBodHRwOi8vYXBpLnNwb3J0cmFkYXIudXMvbmJhL3RyaWFsL3Y3LyR7bGFuZ3VhZ2VfY29kZX0vc2Vhc29ucy8ke3NlYXNvbl95ZWFyfS8ke3NlYXNvbl90eXBlfS9zdGFuZGluZ3MuanNvbj9hcGlfa2V5PSR7a2V5fWBcbiAgXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQodXJsKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCcxMjMnLCByZXNwb25zZS5kYXRhKVxuICAgIHJldHVybiByZXNwb25zZS5kYXRhXG4gIH0pXG5cbiAgcmVzLmpzb24oe1xuICAgIGRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhbmRpbmdzIl0sIm5hbWVzIjpbImF4aW9zIiwic3RhbmRpbmdzIiwicmVxIiwicmVzIiwibGFuZ3VhZ2VfY29kZSIsInNlYXNvbl95ZWFyIiwic2Vhc29uX3R5cGUiLCJrZXkiLCJwcm9jZXNzIiwiZW52IiwiU1BPUlRTUkFEQVJfQVBJX0tFWSIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwic2V0VGltZW91dCIsInVybCIsImRhdGEiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/standings.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/standings.js"));
module.exports = __webpack_exports__;

})();
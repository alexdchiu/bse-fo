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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst getPlayerProfile = (req, res)=>{\n    // boston celtics\n    const team_id = \"583eccfa-fb46-11e1-82cb-f4ce4684ea4c\";\n    // jason tatum\n    const player_id = \"98136da3-452f-49dc-a794-1ee9c76443f2\";\n    const language_code = \"en\";\n    const access_level = \"trial\";\n    const version = \"v7\";\n    const format = \"json\";\n    const key = \"k2zgd4sf7qnapkupmuby5chm\";\n    const url = `https://api.sportradar.com/nba/${access_level}/${version}/${language_code}/players/${player_id}/profile.${format}?api_key=${key}`;\n    axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url).then((response)=>{\n        // const status = response.status\n        // res.json(data)\n        res.json(response.data);\n    });\n    console.log(\"hi\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPlayerProfile);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGxheWVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUV6QixNQUFNQyxtQkFBbUIsQ0FBQ0MsS0FBS0MsTUFBUTtJQUNyQyxpQkFBaUI7SUFDakIsTUFBTUMsVUFBVTtJQUNoQixjQUFjO0lBQ2QsTUFBTUMsWUFBWTtJQUNsQixNQUFNQyxnQkFBZ0I7SUFDdEIsTUFBTUMsZUFBZTtJQUNyQixNQUFNQyxVQUFVO0lBQ2hCLE1BQU1DLFNBQVM7SUFDZixNQUFNQyxNQUFNO0lBRVosTUFBTUMsTUFBTSxDQUFDLCtCQUErQixFQUFFSixhQUFhLENBQUMsRUFBRUMsUUFBUSxDQUFDLEVBQUVGLGNBQWMsU0FBUyxFQUFFRCxVQUFVLFNBQVMsRUFBRUksT0FBTyxTQUFTLEVBQUVDLElBQUksQ0FBQztJQUs5SVYsaURBQVMsQ0FBQ1csS0FBS0UsSUFBSSxDQUFDLENBQUNDLFdBQWE7UUFDaEMsaUNBQWlDO1FBQ2pDLGlCQUFpQjtRQUNqQlgsSUFBSVksSUFBSSxDQUFDRCxTQUFTRSxJQUFJO0lBQ3hCO0lBQ0FDLFFBQVFDLEdBQUcsQ0FBQztBQUVkO0FBRUEsaUVBQWVqQixnQkFBZ0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1lbmQvLi9wYWdlcy9hcGkvcGxheWVycy5qcz9kZTA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY29uc3QgZ2V0UGxheWVyUHJvZmlsZSA9IChyZXEsIHJlcykgPT4ge1xuICAvLyBib3N0b24gY2VsdGljc1xuICBjb25zdCB0ZWFtX2lkID0gJzU4M2VjY2ZhLWZiNDYtMTFlMS04MmNiLWY0Y2U0Njg0ZWE0YydcbiAgLy8gamFzb24gdGF0dW1cbiAgY29uc3QgcGxheWVyX2lkID0gJzk4MTM2ZGEzLTQ1MmYtNDlkYy1hNzk0LTFlZTljNzY0NDNmMicgXG4gIGNvbnN0IGxhbmd1YWdlX2NvZGUgPSAnZW4nXG4gIGNvbnN0IGFjY2Vzc19sZXZlbCA9ICd0cmlhbCdcbiAgY29uc3QgdmVyc2lvbiA9ICd2NydcbiAgY29uc3QgZm9ybWF0ID0gJ2pzb24nXG4gIGNvbnN0IGtleSA9ICdrMnpnZDRzZjdxbmFwa3VwbXVieTVjaG0nXG5cbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLnNwb3J0cmFkYXIuY29tL25iYS8ke2FjY2Vzc19sZXZlbH0vJHt2ZXJzaW9ufS8ke2xhbmd1YWdlX2NvZGV9L3BsYXllcnMvJHtwbGF5ZXJfaWR9L3Byb2ZpbGUuJHtmb3JtYXR9P2FwaV9rZXk9JHtrZXl9YFxuXG5cblxuXG4gIGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgLy8gY29uc3Qgc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzXG4gICAgLy8gcmVzLmpzb24oZGF0YSlcbiAgICByZXMuanNvbihyZXNwb25zZS5kYXRhKVxuICB9KVxuICBjb25zb2xlLmxvZygnaGknKVxuXG59XG4gIFxuZXhwb3J0IGRlZmF1bHQgZ2V0UGxheWVyUHJvZmlsZSJdLCJuYW1lcyI6WyJheGlvcyIsImdldFBsYXllclByb2ZpbGUiLCJyZXEiLCJyZXMiLCJ0ZWFtX2lkIiwicGxheWVyX2lkIiwibGFuZ3VhZ2VfY29kZSIsImFjY2Vzc19sZXZlbCIsInZlcnNpb24iLCJmb3JtYXQiLCJrZXkiLCJ1cmwiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/players.js\n");

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
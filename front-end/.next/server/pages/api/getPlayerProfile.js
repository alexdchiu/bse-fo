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
exports.id = "pages/api/getPlayerProfile";
exports.ids = ["pages/api/getPlayerProfile"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/getPlayerProfile.js":
/*!***************************************!*\
  !*** ./pages/api/getPlayerProfile.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPlayerProfile\": () => (/* binding */ getPlayerProfile)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst getPlayerProfile = ()=>{\n    // boston celtics\n    const team_id = \"583eccfa-fb46-11e1-82cb-f4ce4684ea4c\";\n    // jason tatum\n    const player_id = \"98136da3-452f-49dc-a794-1ee9c76443f2\";\n    const language_code = \"en\";\n    const access_level = \"trial\";\n    const version = \"v7\";\n    const format = \".json\";\n    const key = \"k2zgd4sf7qnapkupmuby5chm\";\n    const url = `https://api.sportradar.com/nba/${access_level}/${version}/${language_code}/players/${player_id}/profile.${format}?api_key={your_api_key}`;\n    // axios.get(url).then((response) => {\n    //   const data = response.json()\n    //   // const status = response.status\n    //   return data\n    // })\n    return \"hi\";\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0UGxheWVyUHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUVsQixNQUFNQyxtQkFBbUIsSUFBTTtJQUNwQyxpQkFBaUI7SUFDakIsTUFBTUMsVUFBVTtJQUNoQixjQUFjO0lBQ2QsTUFBTUMsWUFBWTtJQUNsQixNQUFNQyxnQkFBZ0I7SUFDdEIsTUFBTUMsZUFBZTtJQUNyQixNQUFNQyxVQUFVO0lBQ2hCLE1BQU1DLFNBQVM7SUFDZixNQUFNQyxNQUFNO0lBRVosTUFBTUMsTUFBTSxDQUFDLCtCQUErQixFQUFFSixhQUFhLENBQUMsRUFBRUMsUUFBUSxDQUFDLEVBQUVGLGNBQWMsU0FBUyxFQUFFRCxVQUFVLFNBQVMsRUFBRUksT0FBTyx1QkFBdUIsQ0FBQztJQUt0SixzQ0FBc0M7SUFDdEMsaUNBQWlDO0lBQ2pDLHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsS0FBSztJQUNMLE9BQU87QUFFVCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQtZW5kLy4vcGFnZXMvYXBpL2dldFBsYXllclByb2ZpbGUuanM/ZGZlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBjb25zdCBnZXRQbGF5ZXJQcm9maWxlID0gKCkgPT4ge1xuICAvLyBib3N0b24gY2VsdGljc1xuICBjb25zdCB0ZWFtX2lkID0gJzU4M2VjY2ZhLWZiNDYtMTFlMS04MmNiLWY0Y2U0Njg0ZWE0YydcbiAgLy8gamFzb24gdGF0dW1cbiAgY29uc3QgcGxheWVyX2lkID0gJzk4MTM2ZGEzLTQ1MmYtNDlkYy1hNzk0LTFlZTljNzY0NDNmMicgXG4gIGNvbnN0IGxhbmd1YWdlX2NvZGUgPSAnZW4nXG4gIGNvbnN0IGFjY2Vzc19sZXZlbCA9ICd0cmlhbCdcbiAgY29uc3QgdmVyc2lvbiA9ICd2NydcbiAgY29uc3QgZm9ybWF0ID0gJy5qc29uJ1xuICBjb25zdCBrZXkgPSAnazJ6Z2Q0c2Y3cW5hcGt1cG11Ynk1Y2htJ1xuXG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5zcG9ydHJhZGFyLmNvbS9uYmEvJHthY2Nlc3NfbGV2ZWx9LyR7dmVyc2lvbn0vJHtsYW5ndWFnZV9jb2RlfS9wbGF5ZXJzLyR7cGxheWVyX2lkfS9wcm9maWxlLiR7Zm9ybWF0fT9hcGlfa2V5PXt5b3VyX2FwaV9rZXl9YFxuXG5cblxuXG4gIC8vIGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gIC8vICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKVxuICAvLyAgIC8vIGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1c1xuICAvLyAgIHJldHVybiBkYXRhXG4gIC8vIH0pXG4gIHJldHVybiAnaGknXG5cbn1cbiAgXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJnZXRQbGF5ZXJQcm9maWxlIiwidGVhbV9pZCIsInBsYXllcl9pZCIsImxhbmd1YWdlX2NvZGUiLCJhY2Nlc3NfbGV2ZWwiLCJ2ZXJzaW9uIiwiZm9ybWF0Iiwia2V5IiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getPlayerProfile.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getPlayerProfile.js"));
module.exports = __webpack_exports__;

})();
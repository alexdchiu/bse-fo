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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst currTeamRoster = async (req, res)=>{\n    const team_id = \"583ec9d6-fb46-11e1-82cb-f4ce4684ea4c\";\n    const language_code = \"en\";\n    const key = `${\"pctnev2hp8f3fv4nwuyvwp5z\"}`;\n    const url = `http://api.sportradar.us/nba/trial/v7/${language_code}/teams/${team_id}/profile.json?api_key=${key}`;\n    const delay = (ms)=>new Promise((res)=>setTimeout(res, ms));\n    await delay(2000);\n    const data = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url).then((response)=>{\n        return response.data;\n    });\n    res.json({\n        currTeam: data\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currTeamRoster);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Q3VycmVudFJvc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUd6QixNQUFNQyxpQkFBaUIsT0FBT0MsS0FBS0MsTUFBUTtJQUN6QyxNQUFNQyxVQUFVO0lBQ2hCLE1BQU1DLGdCQUFnQjtJQUN0QixNQUFNQyxNQUFNLENBQUMsRUFBRUMsMEJBQTJDLENBQUMsQ0FBQztJQUU1RCxNQUFNRyxNQUFNLENBQUMsc0NBQXNDLEVBQUVMLGNBQWMsT0FBTyxFQUFFRCxRQUFRLHNCQUFzQixFQUFFRSxJQUFJLENBQUM7SUFFakgsTUFBTUssUUFBUUMsQ0FBQUEsS0FBTSxJQUFJQyxRQUFRVixDQUFBQSxNQUFPVyxXQUFXWCxLQUFLUztJQUV2RCxNQUFNRCxNQUFNO0lBRVosTUFBTUksT0FBTyxNQUFNZixpREFBUyxDQUFDVSxLQUFLTyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtRQUNuRCxPQUFPQSxTQUFTSCxJQUFJO0lBQ3RCO0lBRUFaLElBQUlnQixJQUFJLENBQUM7UUFDUEMsVUFBVUw7SUFDWjtBQUNGO0FBRUEsaUVBQWVkLGNBQWNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1lbmQvLi9wYWdlcy9hcGkvZ2V0Q3VycmVudFJvc3Rlci5qcz84ZWE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuXG5jb25zdCBjdXJyVGVhbVJvc3RlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB0ZWFtX2lkID0gJzU4M2VjOWQ2LWZiNDYtMTFlMS04MmNiLWY0Y2U0Njg0ZWE0YydcbiAgY29uc3QgbGFuZ3VhZ2VfY29kZSA9ICdlbidcbiAgY29uc3Qga2V5ID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1BPUlRTUkFEQVJfQVBJX0tFWX1gXG5cbiAgY29uc3QgdXJsID0gYGh0dHA6Ly9hcGkuc3BvcnRyYWRhci51cy9uYmEvdHJpYWwvdjcvJHtsYW5ndWFnZV9jb2RlfS90ZWFtcy8ke3RlYW1faWR9L3Byb2ZpbGUuanNvbj9hcGlfa2V5PSR7a2V5fWBcbiAgXG4gIGNvbnN0IGRlbGF5ID0gbXMgPT4gbmV3IFByb21pc2UocmVzID0+IHNldFRpbWVvdXQocmVzLCBtcykpO1xuXG4gIGF3YWl0IGRlbGF5KDIwMDApXG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbiAgfSlcblxuICByZXMuanNvbih7XG4gICAgY3VyclRlYW06IGRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3VyclRlYW1Sb3N0ZXIiXSwibmFtZXMiOlsiYXhpb3MiLCJjdXJyVGVhbVJvc3RlciIsInJlcSIsInJlcyIsInRlYW1faWQiLCJsYW5ndWFnZV9jb2RlIiwia2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NQT1JUU1JBREFSX0FQSV9LRVkiLCJ1cmwiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInNldFRpbWVvdXQiLCJkYXRhIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImN1cnJUZWFtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getCurrentRoster.js\n");

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
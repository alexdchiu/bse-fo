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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst standings = async (req, res)=>{\n    const language_code = \"en\";\n    const season_year = \"2022\";\n    const season_type = \"REG\";\n    const key = `${\"pctnev2hp8f3fv4nwuyvwp5z\"}`;\n    const delay = (ms)=>new Promise((res)=>setTimeout(res, ms));\n    await delay(1000);\n    const url = `http://api.sportradar.us/nba/trial/v7/${language_code}/seasons/${season_year}/${season_type}/standings.json?api_key=${key}`;\n    const data = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url).then((response)=>{\n        console.log(\"123\", response.data);\n        return response.data;\n    });\n    res.json({\n        data\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (standings);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RhbmRpbmdzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlCO0FBRXpCLE1BQU1DLFlBQVksT0FBT0MsS0FBS0MsTUFBUTtJQUNwQyxNQUFNQyxnQkFBZ0I7SUFDdEIsTUFBTUMsY0FBYztJQUNwQixNQUFNQyxjQUFjO0lBQ3BCLE1BQU1DLE1BQU0sQ0FBQyxFQUFFQywwQkFBMkMsQ0FBQyxDQUFDO0lBRTVELE1BQU1HLFFBQVFDLENBQUFBLEtBQU0sSUFBSUMsUUFBUVYsQ0FBQUEsTUFBT1csV0FBV1gsS0FBS1M7SUFFdkQsTUFBTUQsTUFBTTtJQUVaLE1BQU1JLE1BQU0sQ0FBQyxzQ0FBc0MsRUFBRVgsY0FBYyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxFQUFFQyxZQUFZLHdCQUF3QixFQUFFQyxJQUFJLENBQUM7SUFFeEksTUFBTVMsT0FBTyxNQUFNaEIsaURBQVMsQ0FBQ2UsS0FBS0csSUFBSSxDQUFDLENBQUNDLFdBQWE7UUFDbkRDLFFBQVFDLEdBQUcsQ0FBQyxPQUFPRixTQUFTSCxJQUFJO1FBQ2hDLE9BQU9HLFNBQVNILElBQUk7SUFDdEI7SUFFQWIsSUFBSW1CLElBQUksQ0FBQztRQUNQTjtJQUNGO0FBQ0Y7QUFFQSxpRUFBZWYsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LWVuZC8uL3BhZ2VzL2FwaS9zdGFuZGluZ3MuanM/OGVhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IHN0YW5kaW5ncyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBsYW5ndWFnZV9jb2RlID0gJ2VuJ1xuICBjb25zdCBzZWFzb25feWVhciA9ICcyMDIyJ1xuICBjb25zdCBzZWFzb25fdHlwZSA9ICdSRUcnXG4gIGNvbnN0IGtleSA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NQT1JUU1JBREFSX0FQSV9LRVl9YFxuXG4gIGNvbnN0IGRlbGF5ID0gbXMgPT4gbmV3IFByb21pc2UocmVzID0+IHNldFRpbWVvdXQocmVzLCBtcykpO1xuXG4gIGF3YWl0IGRlbGF5KDEwMDApXG4gIFxuICBjb25zdCB1cmwgPSBgaHR0cDovL2FwaS5zcG9ydHJhZGFyLnVzL25iYS90cmlhbC92Ny8ke2xhbmd1YWdlX2NvZGV9L3NlYXNvbnMvJHtzZWFzb25feWVhcn0vJHtzZWFzb25fdHlwZX0vc3RhbmRpbmdzLmpzb24/YXBpX2tleT0ke2tleX1gXG4gIFxuICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICBjb25zb2xlLmxvZygnMTIzJywgcmVzcG9uc2UuZGF0YSlcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICB9KVxuXG4gIHJlcy5qc29uKHtcbiAgICBkYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YW5kaW5ncyJdLCJuYW1lcyI6WyJheGlvcyIsInN0YW5kaW5ncyIsInJlcSIsInJlcyIsImxhbmd1YWdlX2NvZGUiLCJzZWFzb25feWVhciIsInNlYXNvbl90eXBlIiwia2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NQT1JUU1JBREFSX0FQSV9LRVkiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInNldFRpbWVvdXQiLCJ1cmwiLCJkYXRhIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/standings.js\n");

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
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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst currTeamRoster = async (req, res)=>{\n    const team_id = \"583ec9d6-fb46-11e1-82cb-f4ce4684ea4c\";\n    const language_code = \"en\";\n    const key = `${process.env.SPORTSRADAR_API_KEY}`;\n    const url = `http://api.sportradar.us/nba/trial/v7/${language_code}/teams/${team_id}/profile.json?api_key=${key}`;\n    const delay = (ms)=>new Promise((res)=>setTimeout(res, ms));\n    await delay(2000);\n    const data = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url).then((response)=>{\n        return response.data;\n    });\n    res.json({\n        currTeam: data\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currTeamRoster);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Q3VycmVudFJvc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUd6QixNQUFNQyxpQkFBaUIsT0FBT0MsS0FBS0MsTUFBUTtJQUN6QyxNQUFNQyxVQUFVO0lBQ2hCLE1BQU1DLGdCQUFnQjtJQUN0QixNQUFNQyxNQUFNLENBQUMsRUFBRUMsUUFBUUMsR0FBRyxDQUFDQyxtQkFBbUIsQ0FBQyxDQUFDO0lBRWhELE1BQU1DLE1BQU0sQ0FBQyxzQ0FBc0MsRUFBRUwsY0FBYyxPQUFPLEVBQUVELFFBQVEsc0JBQXNCLEVBQUVFLElBQUksQ0FBQztJQUVqSCxNQUFNSyxRQUFRQyxDQUFBQSxLQUFNLElBQUlDLFFBQVFWLENBQUFBLE1BQU9XLFdBQVdYLEtBQUtTO0lBRXZELE1BQU1ELE1BQU07SUFFWixNQUFNSSxPQUFPLE1BQU1mLGlEQUFTLENBQUNVLEtBQUtPLElBQUksQ0FBQyxDQUFDQyxXQUFhO1FBQ25ELE9BQU9BLFNBQVNILElBQUk7SUFDdEI7SUFFQVosSUFBSWdCLElBQUksQ0FBQztRQUNQQyxVQUFVTDtJQUNaO0FBQ0Y7QUFFQSxpRUFBZWQsY0FBY0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LWVuZC8uL3BhZ2VzL2FwaS9nZXRDdXJyZW50Um9zdGVyLmpzPzhlYTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5cbmNvbnN0IGN1cnJUZWFtUm9zdGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHRlYW1faWQgPSAnNTgzZWM5ZDYtZmI0Ni0xMWUxLTgyY2ItZjRjZTQ2ODRlYTRjJ1xuICBjb25zdCBsYW5ndWFnZV9jb2RlID0gJ2VuJ1xuICBjb25zdCBrZXkgPSBgJHtwcm9jZXNzLmVudi5TUE9SVFNSQURBUl9BUElfS0VZfWBcblxuICBjb25zdCB1cmwgPSBgaHR0cDovL2FwaS5zcG9ydHJhZGFyLnVzL25iYS90cmlhbC92Ny8ke2xhbmd1YWdlX2NvZGV9L3RlYW1zLyR7dGVhbV9pZH0vcHJvZmlsZS5qc29uP2FwaV9rZXk9JHtrZXl9YFxuICBcbiAgY29uc3QgZGVsYXkgPSBtcyA9PiBuZXcgUHJvbWlzZShyZXMgPT4gc2V0VGltZW91dChyZXMsIG1zKSk7XG5cbiAgYXdhaXQgZGVsYXkoMjAwMClcblxuICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICB9KVxuXG4gIHJlcy5qc29uKHtcbiAgICBjdXJyVGVhbTogZGF0YVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjdXJyVGVhbVJvc3RlciJdLCJuYW1lcyI6WyJheGlvcyIsImN1cnJUZWFtUm9zdGVyIiwicmVxIiwicmVzIiwidGVhbV9pZCIsImxhbmd1YWdlX2NvZGUiLCJrZXkiLCJwcm9jZXNzIiwiZW52IiwiU1BPUlRTUkFEQVJfQVBJX0tFWSIsInVybCIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwic2V0VGltZW91dCIsImRhdGEiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY3VyclRlYW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getCurrentRoster.js\n");

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
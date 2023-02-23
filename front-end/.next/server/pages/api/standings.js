"use strict";
(() => {
var exports = {};
exports.id = 455;
exports.ids = [455];
exports.modules = {

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 4524:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const standings = async (req, res)=>{
    const language_code = "en";
    const season_year = "2022";
    const season_type = "REG";
    const key = `${"pctnev2hp8f3fv4nwuyvwp5z"}`;
    const delay = (ms)=>new Promise((res)=>setTimeout(res, ms));
    await delay(1000);
    const url = `http://api.sportradar.us/nba/trial/v7/${language_code}/seasons/${season_year}/${season_type}/standings.json?api_key=${key}`;
    const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then((response)=>{
        console.log("123", response.data);
        return response.data;
    });
    res.json({
        data
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (standings);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4524));
module.exports = __webpack_exports__;

})();
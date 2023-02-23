"use strict";
(() => {
var exports = {};
exports.id = 672;
exports.ids = [672];
exports.modules = {

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 2317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getPlayerProfile = async (req, res)=>{
    const team_id = "583eccfa-fb46-11e1-82cb-f4ce4684ea4c";
    const player_id = req.query.id;
    const language_code = "en";
    const access_level = "trial";
    const version = "v7";
    const format = "json";
    const key = `${"pctnev2hp8f3fv4nwuyvwp5z"}`;
    const url = `https://api.sportradar.com/nba/${access_level}/${version}/${language_code}/players/${player_id}/profile.${format}?api_key=${key}`;
    const data = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then((response)=>{
        return response.data;
    });
    res.json(data);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPlayerProfile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2317));
module.exports = __webpack_exports__;

})();
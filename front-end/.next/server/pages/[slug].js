"use strict";
(() => {
var exports = {};
exports.id = 219;
exports.ids = [219,709];
exports.modules = {

/***/ 2481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Schedule = ()=>{
    const [city, setCity] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [teamName, setTeamName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const OppRosterTable = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 158).then(__webpack_require__.bind(__webpack_require__, 4158)), {
        loadableGenerated: {
            modules: [
                "[slug].js -> " + "./components/opponentRosterTable.js"
            ]
        },
        suspense: true
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let path = window && window.location.pathname.split("_");
        setCity(path[0].slice(1));
        setTeamName(path[1]);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container pt-16 pl-6",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OppRosterTable, {
            city: city,
            teamName: teamName
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Schedule);


/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [735,152], () => (__webpack_exec__(2481)));
module.exports = __webpack_exports__;

})();
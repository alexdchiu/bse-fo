"use strict";
exports.id = 136;
exports.ids = [136];
exports.modules = {

/***/ 4136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const TeamRow = ({ team , teamID  })=>{
    let teamNoSpace = team.replace(/ /g, "_");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: `/${teamNoSpace}`,
            className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",
            role: "menuitem",
            value: teamID,
            "data-team": team,
            children: [
                team,
                " "
            ]
        })
    });
};
const AllTeams = ({ teamNames , teamIDs  })=>{
    // console.log('teamNames', teamNames)
    // console.log('teamIDs', teamIDs)
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            children: teamNames && teamNames.map((team)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TeamRow, {
                    team: team,
                    teamID: teamIDs[team]
                }, teamIDs[team]))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllTeams);


/***/ })

};
;
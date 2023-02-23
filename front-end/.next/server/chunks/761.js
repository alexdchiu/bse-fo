"use strict";
exports.id = 761;
exports.ids = [761];
exports.modules = {

/***/ 8761:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const NavBar = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(136), __webpack_require__.e(786)]).then(__webpack_require__.bind(__webpack_require__, 4786)), {
    loadableGenerated: {
        modules: [
            "components/layout.js -> " + "./navBar.js"
        ]
    }
});
function Layout({ children  }) {
    const [allTeams, setAllTeams] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    let conferences = [];
    let divisionNames = [];
    let divisions = {};
    let teamNames = [];
    let teamIDs = {};
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("api/standings").then((response)=>{
            setAllTeams(response.data);
        });
    }, []);
    for(let i = 0; i < allTeams?.data.conferences.length; i++){
        conferences.push(allTeams.data.conferences[i].alias);
        for(let j = 0; j < allTeams.data.conferences[i].divisions.length; j++){
            divisions[allTeams.data.conferences[i].divisions[j].name] = allTeams.data.conferences[i].divisions[j].teams;
            divisionNames.push(allTeams.data.conferences[i].divisions[j].name);
        }
    }
    for(let i = 0; i < divisionNames?.length; i++){
        let division = divisionNames[i];
        for(let j = 0; j < divisionNames.length; j++){
            let market = divisions[division][j]?.market;
            let name = divisions[division][j]?.name;
            let id = divisions[division][j]?.id;
            if (market && name) {
                teamNames.push(`${market} ${name}`);
                teamIDs[`${market} ${name}`] = id;
            }
        }
    }
    teamNames.sort();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavBar, {
            teamNames: teamNames,
            teamIDs: teamIDs,
            children: children
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
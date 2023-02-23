(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8894:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
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




const NavBar = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 446).then(__webpack_require__.bind(__webpack_require__, 1446)), {
    loadableGenerated: {
        modules: [
            "../components/layout.js -> " + "./navBar.js"
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

/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8894);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__]);
([_components_layout__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function MyApp({ Component , pageProps  }) {
    const [currRoster, setCurrRoster] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const [seasonStats, setSeasonStats] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const [player, setPlayer] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    console.log("p123", "pctnev2hp8f3fv4nwuyvwp5z");
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const delay = (ms)=>new Promise((res)=>setTimeout(res, ms));
        async function getData() {
            const [firstResponse, secondResponse, thirdResponse] = await Promise.all([
                axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/api/getCurrentRoster"),
                await delay(2000),
                axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/api/seasonalStats")
            ]);
            setCurrRoster(firstResponse?.data.currTeam?.players);
            setSeasonStats(thirdResponse?.data);
            return {
                firstResponse: firstResponse,
                thirdResponse: thirdResponse
            };
        }
        let responses = getData();
    // axios.get('/api/getCurrentRoster').then((response) => {
    //   setCurrRoster(response?.data.currTeam.players)
    // })
    }, []);
    // useEffect (() => {
    //   axios.get('/api/seasonalStats').then((response) => {
    //     setSeasonStats(response?.data)
    //   })
    // }, [currRoster])
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: currRoster && seasonStats && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps,
            currRoster: currRoster,
            seasonStats: seasonStats
        })
    });
}
MyApp.getInitialProps = async ()=>{
    return {
        props: {}
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [735,152], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();
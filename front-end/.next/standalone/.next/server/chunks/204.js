"use strict";
exports.id = 204;
exports.ids = [204];
exports.modules = {

/***/ 7204:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);
axios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const PlayerOption = ({ player , select  })=>{
    // console.log(player, selectA)
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
            className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
            onClick: select,
            value: player.id,
            children: player.full_name
        })
    });
};
const PlayerSelect = ({ currRoster , seasonStats  })=>{
    const [allTeams, setAllTeams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    // const [conferences, setConferences] = useState()
    const [openA, setOpenA] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [openB, setOpenB] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [playerA, setPlayerA] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [playerB, setPlayerB] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [playerAName, setPlayerAName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [playerAStats, setPlayerAStats] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [playerBName, setPlayerBName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [radarGraph, setRadarGraph] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    // const [openConfA, setOpenConfA] = useState(false)
    // const [openTeamA, setOpenTeamA] = useState(false)
    const [players, setPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const RadarGraph = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/* import() */ 836).then(__webpack_require__.bind(__webpack_require__, 5836)), {
        loadableGenerated: {
            modules: [
                "components/playerSelect.js -> " + "./radarGraph"
            ]
        },
        suspense: true
    });
    const handleOpenA = ()=>{
        setOpenA(!openA);
    };
    const handleOpenB = ()=>{
        setOpenB(!openB);
    };
    const selectA = (e)=>{
        setOpenA(!openA);
        var eVal = e.target.value;
        setPlayerA(eVal);
        var playerObj = currRoster.filter(function(el) {
            return el.id === eVal;
        });
        console.log(playerObj);
        setPlayerAName(playerObj[0].full_name);
        setPlayers({
            ...players,
            "A": playerObj[0]
        });
    };
    const selectB = (e)=>{
        setOpenB(!openB);
        var eVal = e.target.value;
        setPlayerB(eVal);
        var playerObj = currRoster.filter(function(el) {
            return el.id === eVal;
        });
        console.log(playerObj);
        setPlayerBName(playerObj[0].full_name);
        setPlayers({
            ...players,
            "B": playerObj[0]
        });
    };
    // const handleOpenConfA = () => {
    //   setOpenConfA(!openConfA)
    // }
    // const handleOpenTeamA = () => {
    //   setOpenTeamA(!openTeamA)
    // }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("api/standings").then((response)=>{
            setAllTeams(response.data);
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        id: "multiLevelDropdownButton",
                        "data-dropdown-toggle": "dropdown",
                        className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                        type: "button",
                        onClick: handleOpenA,
                        children: [
                            !playerA && "Select Player A",
                            playerA && playerAName,
                            " (Blue) ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                className: "w-4 h-4 ml-2",
                                "aria-hidden": "true",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M19 9l-7 7-7-7"
                                })
                            })
                        ]
                    }),
                    openA && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "dropdown",
                        className: "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "py-2 text-sm text-gray-700 dark:text-gray-200",
                            "aria-labelledby": "multiLevelDropdownButton",
                            children: currRoster && currRoster.map((player)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PlayerOption, {
                                    player: player,
                                    select: selectA
                                }, player.id))
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        id: "multiLevelDropdownButton",
                        "data-dropdown-toggle": "dropdown",
                        className: "text-white bg-gray-700 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-gray-500 dark:hover:bg-gray-500 dark:focus:ring-gray-800",
                        type: "button",
                        onClick: handleOpenB,
                        children: [
                            !playerB && "Select Player B",
                            playerB && playerBName,
                            " (Gray) ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                className: "w-4 h-4 ml-2",
                                "aria-hidden": "true",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M19 9l-7 7-7-7"
                                })
                            })
                        ]
                    }),
                    openB && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "dropdown",
                        className: "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "py-2 text-sm text-gray-700 dark:text-gray-200",
                            "aria-labelledby": "multiLevelDropdownButton",
                            children: currRoster && currRoster.map((player)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PlayerOption, {
                                    player: player,
                                    select: selectB
                                }, player.id))
                        })
                    })
                ]
            }),
            Object.keys(players).length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RadarGraph, {
                players: players,
                seasonStats: seasonStats
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerSelect);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
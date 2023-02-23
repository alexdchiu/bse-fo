"use strict";
(() => {
var exports = {};
exports.id = 731;
exports.ids = [731];
exports.modules = {

/***/ 9141:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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
    const RadarGraph = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 784)), {
        loadableGenerated: {
            modules: [
                "../components/playerSelect.js -> " + "./radarGraph"
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

/***/ }),

/***/ 784:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8968);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([d3__WEBPACK_IMPORTED_MODULE_1__]);
d3__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const radarGraph = ({ players , seasonStats  })=>{
    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    let data = [];
    let features = [
        "eFG%",
        "TS%",
        "PPG",
        "APG",
        "RPG",
        "SPG",
        "BPG"
    ];
    //generate the data
    let nbaSeasonLeaders = {
        "eFG%": 72.2,
        "TS%": 71.0,
        "PPG": 33.3,
        "APG": 10.8,
        "RPG": 12.3,
        "SPG": 2.1,
        "BPG": 3.3
    };
    let playerKeys = Object.keys(players);
    for(var i = 0; i < playerKeys.length; i++){
        let temp = {};
        let currKey = playerKeys[i];
        let currPlayerID = players[currKey].id;
        console.log(seasonStats.players);
        let currPlayerStats = seasonStats.players.filter(function(el) {
            return el.id === currPlayerID;
        });
        var stats = currPlayerStats[0];
        temp["PPG"] = stats.average.points / nbaSeasonLeaders["PPG"] * 10;
        temp["APG"] = stats.average.assists / nbaSeasonLeaders["APG"] * 10;
        temp["RPG"] = stats.average.rebounds / nbaSeasonLeaders["RPG"] * 10;
        temp["SPG"] = stats.average.steals / nbaSeasonLeaders["SPG"] * 10;
        temp["BPG"] = stats.average.blocks / nbaSeasonLeaders["BPG"] * 10;
        temp["TS%"] = stats.total.true_shooting_pct * 100 / nbaSeasonLeaders["TS%"] * 10;
        temp["eFG%"] = stats.total.effective_fg_pct * 100 / nbaSeasonLeaders["eFG%"] * 10;
        data.push(temp);
        console.log(currKey, temp);
    }
    // create 600x600 SVG to draw chart on
    let width = 600;
    let height = 600;
    let svg = d3__WEBPACK_IMPORTED_MODULE_1__.select("body").append("svg").attr("width", width).attr("height", height);
    // make scale to map data values to their radial distance from the center of the chart
    let radialScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear().domain([
        0,
        10
    ]).range([
        0,
        250
    ]);
    let ticks = [
        2,
        4,
        6,
        8,
        10
    ];
    // add text labels for the ticks
    // svg.selectAll(".ticklabel")
    //   .data(ticks)
    //   .join(
    //     enter => enter.append("text")
    //       .attr("class", "ticklabel")
    //       .attr("x", width / 2 + 5)
    //       .attr("y", d => height / 2 - radialScale(d))
    //       .text(d => d.toString())
    //   );
    // map each feature onto a line extending outwards from the center of the chart
    // function maps an angle and value into SVG coordinates using trig -> output is JSON object with x and y field to represent the coordinate
    function angleToCoordinate(angle, value) {
        let x = Math.cos(angle) * radialScale(value);
        let y = Math.sin(angle) * radialScale(value);
        return {
            "x": width / 2 + x,
            "y": height / 2 - y
        };
    }
    let featureData = features.map((f, i)=>{
        let angle = Math.PI / 2 + 2 * Math.PI * i / features.length;
        return {
            "name": f,
            "angle": angle,
            "line_coord": angleToCoordinate(angle, 10),
            "label_coord": angleToCoordinate(angle, 10.5)
        };
    });
    let line = d3__WEBPACK_IMPORTED_MODULE_1__.line().x((d)=>d.x).y((d)=>d.y);
    let colors = [
        "navy",
        "darkgray",
        "darkorange"
    ];
    function getPathCoordinates(data_point) {
        let coordinates = [];
        for(var i = 0; i < features.length; i++){
            let ft_name = features[i];
            let angle = Math.PI / 2 + 2 * Math.PI * i / features.length;
            coordinates.push(angleToCoordinate(angle, data_point[ft_name]));
        }
        return coordinates;
    }
    const drawChart = (svg)=>{
        // create circles - radius determined by the scale defined in previous step
        svg.selectAll("circle").data(ticks).join((enter)=>enter.append("circle").attr("cx", width / 2).attr("cy", height / 2).attr("fill", "none").attr("stroke", "gray").attr("r", (d)=>radialScale(d)));
        // draw axis line
        svg.selectAll("line").data(featureData).join((enter)=>enter.append("line").attr("x1", width / 2).attr("y1", height / 2).attr("x2", (d)=>d.line_coord.x).attr("y2", (d)=>d.line_coord.y).attr("stroke", "black"));
        // draw axis label
        svg.selectAll(".axislabel").data(featureData).join((enter)=>enter.append("text").attr("x", (d)=>d.label_coord.x).attr("y", (d)=>d.label_coord.y).text((d)=>d.name));
        // draw the path element
        svg.selectAll("path").data(data).join((enter)=>enter.append("path").datum((d)=>getPathCoordinates(d)).attr("d", line).attr("stroke-width", 3).attr("stroke", (_, i)=>colors[i]).attr("fill", (_, i)=>colors[i]).attr("stroke-opacity", 1).attr("opacity", 0.5));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (svgRef.current) {
            const svg = d3__WEBPACK_IMPORTED_MODULE_1__.select(svgRef.current);
            drawChart(svg);
        }
    }, [
        svgRef
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                ref: svgRef,
                className: "radarChart container min-h-[600px]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Player current season statistics relative to current NBA season leaders."
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (radarGraph);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5047:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
/* harmony import */ var _components_radarGraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(784);
/* harmony import */ var _components_playerSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_radarGraph__WEBPACK_IMPORTED_MODULE_3__, _components_playerSelect__WEBPACK_IMPORTED_MODULE_4__]);
([_components_radarGraph__WEBPACK_IMPORTED_MODULE_3__, _components_playerSelect__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Comparison = ({ currRoster , seasonStats  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "pt-14",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_playerSelect__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            currRoster: currRoster,
            seasonStats: seasonStats
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comparison);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 8968:
/***/ ((module) => {

module.exports = import("d3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [735,152], () => (__webpack_exec__(5047)));
module.exports = __webpack_exports__;

})();
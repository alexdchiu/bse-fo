"use strict";
(() => {
var exports = {};
exports.id = 933;
exports.ids = [933,709,571];
exports.modules = {

/***/ 3571:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const SeasonRow = (data)=>{
    let seasonData = data?.season;
    // console.log(seasonData)
    var ppg = seasonData.teams[0].average.points.toFixed(1);
    var rpg = seasonData.teams[0].average.rebounds.toFixed(1);
    var apg = seasonData.teams[0].average.assists.toFixed(1);
    var spg = seasonData.teams[0].average.steals.toFixed(1);
    var bpg = seasonData.teams[0].average.blocks.toFixed(1);
    var topg = seasonData.teams[0].average.turnovers.toFixed(1);
    var fgPct = (seasonData.teams[0].total.field_goals_pct * 100).toFixed(2);
    var threePtPct = (seasonData.teams[0].total.three_points_pct * 100).toFixed(2);
    var ftPct = (seasonData.teams[0].total.free_throws_pct * 100).toFixed(2);
    var tsPct = (seasonData.teams[0].total.true_shooting_pct * 100).toFixed(2);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
        className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                scope: "row",
                className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",
                children: seasonData.year
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-6 py-4",
                children: seasonData.teams[0].alias
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-6 py-4",
                children: seasonData.teams[0].total.games_played
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-6 py-4",
                children: seasonData.teams[0].total.games_started
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-6 py-4",
                children: seasonData.teams[0].average.minutes
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-6 py-4",
                children: ppg
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-6 py-4",
                children: rpg
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-6 py-4",
                children: apg
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-6 py-4",
                children: spg
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-6 py-4",
                children: bpg
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-6 py-4",
                children: topg
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                className: "px-6 py-4",
                children: [
                    fgPct,
                    "%"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                className: "px-6 py-4",
                children: [
                    threePtPct,
                    "%"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                className: "px-6 py-4",
                children: [
                    ftPct,
                    "%"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                className: "px-6 py-4",
                children: [
                    tsPct,
                    "%"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                className: "px-6 py-4",
                children: [
                    seasonData.teams[0].total.plus - seasonData.teams[0].total.minus > 0 && "+",
                    seasonData.teams[0].total.plus - seasonData.teams[0].total.minus
                ]
            })
        ]
    });
};
const PlayerCareerTable = (props)=>{
    const [playerData, setPlayerData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("api/playerProfile").then((response)=>{
            setPlayerData(response);
        });
    }, []);
    console.log(props.playerProfile.data);
    const handleReturnToRosterTable = ()=>{
        props.setShowRosterTable(!props.showRosterTable);
        // props.setSelectedPlayer(!props.player)
        props.setShowPlayerTable(!props.showPlayerTable);
    };
    // console.log(props.playerProfile.data)
    let playerCareerStats = props.playerProfile.data.seasons;
    // console.log(playerData?.data.playerDetails)
    let playerDetails = props.playerProfile.data;
    let heightFt = Math.floor(playerDetails?.height / 12);
    let heightInches = playerDetails?.height - heightFt * 12;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative overflow-x-auto shadow-md sm:rounded-lg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                    className: "w-full text-sm text-left text-gray-500 dark:text-gray-400",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("caption", {
                            className: "p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800",
                            children: [
                                playerDetails.full_name,
                                " | #",
                                playerDetails.jersey_number,
                                " | ",
                                playerDetails.primary_position,
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "mt-1 text-sm font-normal text-gray-500 dark:text-gray-400",
                                    children: [
                                        heightFt,
                                        "'",
                                        heightInches,
                                        '" | ',
                                        playerDetails.weight,
                                        "lbs "
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "mt-1 text-sm font-normal text-gray-500 dark:text-gray-400",
                                    children: [
                                        playerDetails.birth_place,
                                        " | ",
                                        playerDetails.birthdate,
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "mt-1 text-sm font-normal text-gray-500 dark:text-gray-400",
                                    children: [
                                        playerDetails.experience,
                                        " seasons | College: ",
                                        playerDetails.college,
                                        " | Draft Year: ",
                                        playerDetails.draft.year,
                                        " | Rookie Year: ",
                                        playerDetails.rookie_year
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                            className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "Season"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "Team"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "GP"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "GS"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "MPG"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "PPG"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "RPG"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "APG"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "SPG"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "BPG"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "TOPG"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "FG%"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "3P%"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "FT%"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "TS%"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "+/-"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                            children: playerCareerStats && playerCareerStats.map((season)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SeasonRow, {
                                    season: season
                                }, season.id))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    id: "multiLevelDropdownButton",
                    "data-dropdown-toggle": "dropdown",
                    className: "text-white bg-gray-600 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-600",
                    type: "button",
                    onClick: handleReturnToRosterTable,
                    children: " Return to Roster Stats Table"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerCareerTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3571));
module.exports = __webpack_exports__;

})();
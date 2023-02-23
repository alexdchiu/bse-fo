"use strict";
(() => {
var exports = {};
exports.id = 127;
exports.ids = [127,888,709,389,646];
exports.modules = {

/***/ 6646:
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);
axios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const PlayerRow = (data)=>{
    const handleSelect = ()=>{
        data.setSelectedPlayer(data.player);
        data.setShowModal(!data.showModal);
    };
    var ppg = data.player.average.points.toFixed(1);
    var rpg = data.player.average.rebounds.toFixed(1);
    var apg = data.player.average.assists.toFixed(1);
    var spg = data.player.average.steals.toFixed(1);
    var bpg = data.player.average.blocks.toFixed(1);
    var topg = data.player.average.turnovers.toFixed(1);
    var fgPct = (data.player.total.field_goals_pct * 100).toFixed(2);
    var threePtPct = (data.player.total.three_points_pct * 100).toFixed(2);
    var ftPct = (data.player.total.free_throws_pct * 100).toFixed(2);
    var tsPct = (data.player.total.true_shooting_pct * 100).toFixed(2);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
        className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                scope: "row",
                className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: handleSelect,
                    value: data.player.id,
                    children: data.player.full_name
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-6 py-4",
                children: data.player.total.games_played
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-6 py-4",
                children: data.player.total.games_started
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-6 py-4",
                children: data.player.average.minutes
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
                    data.player.total.plus - data.player.total.minus > 0 && "+",
                    data.player.total.plus - data.player.total.minus
                ]
            })
        ]
    });
};
const rosterTable = ({ currRoster , seasonStats  })=>{
    const [showRosterTable, setShowRosterTable] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [selectedPlayer, setSelectedPlayer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [showPlayerTable, setShowPlayerTable] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [playerProfile, setPlayerProfile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const PlayerCard = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 140).then(__webpack_require__.bind(__webpack_require__, 9140)), {
        loadableGenerated: {
            modules: [
                "components/rosterTable.js -> " + "./playerCard"
            ]
        },
        suspense: true
    });
    const PlayerCareerTable = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 571).then(__webpack_require__.bind(__webpack_require__, 3571)), {
        loadableGenerated: {
            modules: [
                "components/rosterTable.js -> " + "./playerCareerStatsTable"
            ]
        },
        suspense: true
    });
    // const click = (() => {
    //   setShowModal(true)
    // })
    const currRosterIDs = [];
    const currRosterNames = [];
    for(let i = 0; i < currRoster?.length; i++){
        currRosterIDs.push(currRoster[i].id);
        let name = currRoster[i].full_name;
        currRosterNames.push(name);
    }
    var currPlayersData = seasonStats && Object.values(seasonStats.players).filter(function(el) {
        return currRoster?.find((currPlayer)=>{
            return currPlayer.id === el.id;
        });
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let playerID = selectedPlayer?.id;
        if (selectedPlayer) {
            axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("api/players", {
                params: {
                    id: playerID
                }
            }).then((response)=>{
                setPlayerProfile(response);
            });
        }
    }, [
        selectedPlayer
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative overflow-x-auto shadow-md sm:rounded-lg pt-14",
        children: [
            showRosterTable && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: "w-full text-sm text-left text-gray-500 dark:text-gray-400",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("caption", {
                        className: "p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800",
                        children: [
                            "Brooklyn Nets Current Roster",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mt-1 text-sm font-normal text-gray-500 dark:text-gray-400",
                                children: "2022-23 Season Stats for Current Team"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mt-1 text-sm font-normal text-gray-500 dark:text-gray-400",
                                children: "(Click on player name to see details)"
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
                                    children: "Player"
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
                        children: currPlayersData && currPlayersData.map((player)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PlayerRow, {
                                player: player,
                                setShowModal: setShowModal,
                                showModal: showModal,
                                setSelectedPlayer: setSelectedPlayer
                            }, player.id))
                    })
                ]
            }),
            showModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PlayerCard, {
                playerProfile: playerProfile,
                showRosterTable: showRosterTable,
                setShowRosterTable: setShowRosterTable,
                setShowModal: setShowModal,
                showModal: showModal,
                selectedPlayer: selectedPlayer,
                setSelectedPlayer: setSelectedPlayer,
                showPlayerTable: showPlayerTable,
                setShowPlayerTable: setShowPlayerTable
            }),
            showPlayerTable && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PlayerCareerTable, {
                playerProfile: playerProfile,
                showRosterTable: showRosterTable,
                setShowRosterTable: setShowRosterTable,
                setShowModal: setShowModal,
                showModal: showModal,
                selectedPlayer: selectedPlayer,
                setSelectedPlayer: setSelectedPlayer,
                showPlayerTable: showPlayerTable,
                setShowPlayerTable: setShowPlayerTable
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rosterTable);

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [735,152], () => (__webpack_exec__(6646)));
module.exports = __webpack_exports__;

})();
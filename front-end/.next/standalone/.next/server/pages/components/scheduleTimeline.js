"use strict";
(() => {
var exports = {};
exports.id = 617;
exports.ids = [617,709,522];
exports.modules = {

/***/ 522:
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



const TimelineEntry = ({ game , teamDict  })=>{
    var date_str = game.scheduled;
    var options = {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    var formatted = new Date(date_str).toLocaleDateString("en-US", options);
    var date_parts = formatted.substring(0, formatted.indexOf(",")).split(" ").reverse().join(" ");
    var formatted_date = date_parts + formatted.substr(formatted.indexOf(",") + 1);
    var awayTeam = game.away.name;
    var homeTeam = game.home.name;
    if (homeTeam === "Brooklyn Nets") {
        var opponent = game.away;
        var homeGame = true;
    } else {
        var opponent = game.home;
        var homeGame = false;
    }
    console.log(teamDict);
    var opponentID = opponent.id;
    var opponentWins = teamDict[opponentID].wins;
    var opponentLosses = teamDict[opponentID].losses;
    var opponentConference = toTitleCase(teamDict[opponentID].conference);
    var opponentDivision = teamDict[opponentID].division;
    var opponentPointsAgainst = teamDict[opponentID].points_against;
    var opponentPointsFor = teamDict[opponentID].points_for;
    var opponentConfRank = teamDict[opponentID].calc_rank.conf_rank;
    var opponentDivRank = teamDict[opponentID].calc_rank.div_rank;
    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
    var opponentURL = opponent.name.replace(/ /g, "_");
    console.log(opponentURL);
    // console.log(opponentWins, opponentLosses, opponentConference, opponentDivision, opponentPointsAgainst, opponentPointsFor)
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        className: "mb-10 ml-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    "aria-hidden": "true",
                    className: "w-3 h-3 text-blue-800 dark:text-blue-300",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
                        clipRule: "evenodd"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                className: "mb-1 text-lg font-semibold text-gray-900 dark:text-black",
                children: [
                    formatted_date,
                    " ",
                    homeGame ? null : "| (Away)"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("time", {
                className: "block mb-2 font-normal leading-none text-gray-400 dark:text-gray-500",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: `/${opponentURL}`,
                        children: [
                            homeGame ? "@" : null,
                            " ",
                            opponent.name
                        ]
                    }),
                    " | (",
                    opponentWins,
                    "W - ",
                    opponentLosses,
                    "L)"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-base text-sm font-normal text-gray-500 dark:text-gray-400",
                children: "Current Ranking"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-base text-sm font-normal text-gray-500 dark:text-gray-400 indent-3",
                children: [
                    "- ",
                    opponentConference,
                    ": ",
                    opponentConfRank
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-base text-sm font-normal text-gray-500 dark:text-gray-400 indent-3",
                children: [
                    "- ",
                    opponentDivision,
                    " Division: ",
                    opponentDivRank
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-base text-sm font-normal text-gray-500 dark:text-gray-400",
                children: [
                    "Avg Points For / Against: ",
                    opponentPointsFor,
                    " / ",
                    opponentPointsAgainst
                ]
            })
        ]
    });
};
const timeline = ()=>{
    const [schedule, setSchedule] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [standings, setStandings] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [teamDict, setTeamDict] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("api/schedule").then((response)=>{
            setSchedule(response);
        });
        axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("api/standings").then((response)=>{
            setStandings(response.data.data);
        });
    }, []);
    let allGames = schedule?.data.data.games;
    let netsGames = allGames?.filter(function(el) {
        return el.status === "scheduled" && el.away.alias === "BKN" | el.home.alias === "BKN";
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let temp = {};
        console.log("standings", standings);
        for(let i = 0; i < standings?.conferences.length; i++){
            var conference = standings.conferences[i];
            var conferenceName = conference.name;
            for(let j = 0; j < conference.divisions.length; j++){
                var division = conference.divisions[j];
                var divisionName = division.name;
                for(let k = 0; k < division.teams.length; k++){
                    var team = division.teams[k];
                    var teamID = team.id;
                    temp[teamID] = {
                        ...team,
                        "division": divisionName,
                        "conference": conferenceName
                    };
                }
            }
            setTeamDict(temp);
        }
    }, [
        standings
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
            className: "relative border-l border-gray-200 dark:border-gray-700",
            children: netsGames && teamDict && netsGames.map((game)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TimelineEntry, {
                    game: game,
                    teamDict: teamDict
                }, game.id))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timeline);

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
var __webpack_exports__ = (__webpack_exec__(522));
module.exports = __webpack_exports__;

})();
"use strict";
exports.id = 653;
exports.ids = [653];
exports.modules = {

/***/ 1653:
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



// import {playerDetails, allPlayers} from '../api/playerProfile'
const PlayerCard = (data)=>{
    // console.log('playerCard data', data)
    const [playerData, setPlayerData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("api/playerProfile").then((response)=>{
            setPlayerData(response);
        });
    }, []);
    const handleClose = ()=>{
        data.setShowModal(!data.showModal);
    };
    const handleSeePlayerCareerStats = ()=>{
        data.setShowRosterTable(!data.showRosterTable);
        data.setSelectedPlayer(data.player);
        data.setShowModal(!data.showModal);
        data.setShowPlayerTable(!data.showPlayerTable);
    };
    // console.log('1234', data.playerProfile.data)
    const playerDetails = data.playerProfile?.data;
    const allPlayers = playerData?.data.allPlayers;
    const currFirstName = playerDetails?.first_name;
    const currLastName = playerDetails?.last_name;
    const currFullName = playerDetails?.full_name;
    // console.log(playerDetails)
    // console.log(data)
    var newArray = allPlayers?.filter(function(el) {
        return el.firstName === currFirstName && el.lastName === currLastName;
    });
    var currID = newArray && newArray[0].personId;
    // console.log(currID)
    const headshotURL = currID && `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${currID}.png`;
    let heightFt = Math.floor(playerDetails?.height / 12);
    let heightInches = playerDetails?.height - heightFt * 12;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-x-1/3 md:inset-y-1/4 h-modal md:h-full",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-end px-4 pt-4 bg-slate-700",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        id: "dropdownButton",
                        "data-dropdown-toggle": "dropdownId",
                        className: "inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5",
                        type: "button",
                        onClick: handleClose,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            className: "w-5 h-5",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                fillRule: "evenodd",
                                d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                clipRule: "evenodd"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-center pb-10 bg-slate-700",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "w-24 h-24 mb-3 rounded-full shadow-lg",
                            src: `${headshotURL}`,
                            alt: "Bonnie image"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            className: "mb-1 text-xl font-medium text-gray-900 dark:text-white",
                            children: currFullName
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "text-sm text-gray-500 dark:text-gray-300",
                            children: [
                                "#",
                                playerDetails?.jersey_number,
                                " / ",
                                playerDetails?.primary_position
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "text-sm text-gray-500 dark:text-gray-300",
                            children: [
                                heightFt,
                                "'",
                                heightInches,
                                '" / ',
                                playerDetails?.weight
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "text-sm text-gray-500 dark:text-gray-300",
                            children: [
                                "Born: ",
                                playerDetails?.birthdate,
                                " /  ",
                                playerDetails?.birth_place
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "text-sm text-gray-500 dark:text-gray-300",
                            children: [
                                "Draft: ",
                                playerDetails?.draft.year,
                                " - ",
                                playerDetails?.draft.round,
                                " / ",
                                playerDetails?.draft.pick,
                                " (",
                                playerDetails?.college,
                                ")"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex mt-4 space-x-3 md:mt-6",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                                onClick: handleSeePlayerCareerStats,
                                children: "See Career Stats"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
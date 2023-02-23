"use strict";
exports.id = 446;
exports.ids = [446];
exports.modules = {

/***/ 1446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_navBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/allTeams.js

const TeamRow = ({ team , teamID  })=>{
    let teamNoSpace = team.replace(/ /g, "_");
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
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
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            children: teamNames && teamNames.map((team)=>/*#__PURE__*/ jsx_runtime_.jsx(TeamRow, {
                    team: team,
                    teamID: teamIDs[team]
                }, teamIDs[team]))
        })
    });
};
/* harmony default export */ const allTeams = (AllTeams);

;// CONCATENATED MODULE: ./components/navBar.js



const navBar = ({ teamNames , teamIDs , children  })=>{
    const [open, setOpen] = (0,external_react_.useState)(false);
    const handleOpen = ()=>{
        setOpen(!open);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "px-3 py-3 lg:px-5 lg:pl-3",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center justify-between",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex items-center justify-start",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "https://www.bseglobal.net/",
                                className: "flex ml-2 md:mr-24",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "https://brooklynse.net/bkn/history/assets/logos/logo-2012.png",
                                        className: "h-8 mr-3",
                                        alt: "Nets Logo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white",
                                        children: "BSE Global"
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("aside", {
                id: "separator-sidebar",
                className: "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0",
                "aria-label": "Sidebar",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "#",
                                        className: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                "aria-hidden": "true",
                                                className: "w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "ml-3",
                                                children: "Dashboard"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "/",
                                        className: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                "aria-hidden": "true",
                                                className: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "flex-1 ml-3 whitespace-nowrap",
                                                children: "Home"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "/roster",
                                        className: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                "aria-hidden": "true",
                                                className: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fillRule: "evenodd",
                                                    d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                                                    clipRule: "evenodd"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "flex-1 ml-3 whitespace-nowrap",
                                                children: "Roster"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "/schedule",
                                        className: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                "aria-hidden": "true",
                                                className: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fillRule: "evenodd",
                                                    d: "M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",
                                                    clipRule: "evenodd"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "flex-1 ml-3 whitespace-nowrap",
                                                children: "Schedule"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group ml-3",
                                            onClick: handleOpen,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "All Teams"
                                            })
                                        }),
                                        open ? teamNames && /*#__PURE__*/ jsx_runtime_.jsx(allTeams, {
                                            teamNames: teamNames,
                                            teamIDs: teamIDs
                                        }) : null
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/comparison",
                                        className: "flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "ml-3",
                                            children: "Player Comparison"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "p-4 sm:ml-64",
                children: children
            })
        ]
    });
};
/* harmony default export */ const components_navBar = (navBar);


/***/ })

};
;
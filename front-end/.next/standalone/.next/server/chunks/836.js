"use strict";
exports.id = 836;
exports.ids = [836];
exports.modules = {

/***/ 5836:
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

/***/ })

};
;
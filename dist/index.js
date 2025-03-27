"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing math.js and Plotly (type definitions)
var math = __importStar(require("mathjs"));
var plotly_js_dist_1 = __importDefault(require("plotly.js-dist"));
function draw() {
    try {
        // Compile the expression
        var expression = document.getElementById("eq").value;
        var expr_1 = math.compile(expression);
        // Generate x and y values
        var xValues = math.range(-10, 10, 0.5).toArray();
        var yValues = xValues.map(function (x) { return expr_1.evaluate({ x: x }); });
        // Prepare the plot
        var trace = {
            x: xValues,
            y: yValues,
            type: "scatter",
        };
        var data = [trace];
        // Render the plot
        plotly_js_dist_1.default.newPlot("plot", data);
    }
    catch (err) {
        console.error(err);
        alert("Error: ".concat(err.message));
    }
}
// Initialize and set event listeners
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("form");
    form.onsubmit = function (event) {
        event.preventDefault();
        draw();
    };
    // Initial draw
    draw();
});

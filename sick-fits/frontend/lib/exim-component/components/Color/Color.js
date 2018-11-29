"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var eximUtils_1 = require("./../../utils/eximUtils");
require("./Color.scss");
var copyToClipboard = function (str) {
    var el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};
exports.Color = function (props) {
    var list = Object.keys(eximUtils_1.COLORS).map(function (key) {
        var colorList = eximUtils_1.COLORS[key].map(function (color) {
            return React.createElement("li", { onClick: copyToClipboard.bind(null, color) }, color);
        });
        return React.createElement("div", { className: "color_spacing" },
            React.createElement("h6", null, key),
            React.createElement("ul", null, colorList));
    });
    return (React.createElement("div", null, list));
};
exports.Color.defaultProps = {
    customClass: ''
};
//EXPORT COMPONENT
exports.default = exports.Color;
//# sourceMappingURL=Color.js.map
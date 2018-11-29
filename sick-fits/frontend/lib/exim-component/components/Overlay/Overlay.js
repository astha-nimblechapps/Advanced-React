"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
require("./Overlay.scss");
exports.Overlay = function (props) {
    var customClass = props.customClass, className = props.className;
    var classes = classnames_1.default(customClass, className);
    return (React.createElement("div", { className: classes }));
};
exports.Overlay.defaultProps = {
    customClass: 'overlay'
};
exports.default = exports.Overlay;
//# sourceMappingURL=Overlay.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.InputGroupAddon = function (props) {
    var customClass = props.customClass, children = props.children;
    return (React.createElement("span", { className: customClass }, children ? children : null));
};
exports.InputGroupAddon.defaultProps = {
    customClass: 'input-group-addon'
};
exports.default = exports.InputGroupAddon;
//# sourceMappingURL=InputGroupAddon.js.map
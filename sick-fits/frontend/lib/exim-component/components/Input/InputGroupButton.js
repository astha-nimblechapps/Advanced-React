"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.InputGroupButton = function (props) {
    var customClass = props.customClass, children = props.children;
    return (React.createElement("span", { className: customClass }, children ? children : null));
};
exports.InputGroupButton.defaultProps = {
    customClass: 'input-group-btn'
};
exports.default = exports.InputGroupButton;
//# sourceMappingURL=InputGroupButton.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.InputValidationMessage = function (props) {
    var customClass = props.customClass, children = props.children;
    return (React.createElement("div", { className: customClass }, children ? children : null));
};
exports.InputValidationMessage.defaultProps = {
    customClass: 'input-error-block'
};
exports.default = exports.InputValidationMessage;
//# sourceMappingURL=InputValidationMessage.js.map
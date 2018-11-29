"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
exports.PullOut = function (props) {
    var customClass = props.customClass, children = props.children, className = props.className;
    var classes = classnames_1.default(customClass, className);
    return (React.createElement("div", { className: classes }, children ? children : null));
};
exports.PullOut.defaultProps = {
    customClass: 'pullout'
};
exports.default = exports.PullOut;
//# sourceMappingURL=PullOut.js.map
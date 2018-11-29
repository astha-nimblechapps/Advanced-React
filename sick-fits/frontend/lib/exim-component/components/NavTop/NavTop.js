"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
exports.NavTop = function (props) {
    var customClass = props.customClass, children = props.children, className = props.className;
    var classes = classnames_1.default(customClass, className);
    return (React.createElement("div", { className: classes }, children ? children : null));
};
exports.NavTop.defaultProps = {
    customClass: 'top-navbar'
};
exports.default = exports.NavTop;
//# sourceMappingURL=NavTop.js.map
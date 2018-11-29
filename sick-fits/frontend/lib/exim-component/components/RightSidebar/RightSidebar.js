"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
exports.RightSidebar = function (props) {
    var customClass = props.customClass, children = props.children, className = props.className;
    var classes = classnames_1.default(customClass, className);
    return (React.createElement("div", { className: classes }, children ? children : null));
};
exports.RightSidebar.defaultProps = {
    customClass: 'right-sidebar'
};
exports.default = exports.RightSidebar;
//# sourceMappingURL=RightSidebar.js.map
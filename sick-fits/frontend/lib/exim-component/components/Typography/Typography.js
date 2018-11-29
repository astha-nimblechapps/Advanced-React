"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var styleConfigs_1 = require("./../../utils/styleConfigs");
require("./Typography.scss");
var getClasses = function (props) {
    var useFor = props.useFor, className = props.className;
    return classnames_1.default((useFor && styleConfigs_1.TypographyClasses[useFor]), className);
};
exports.Typography = function (props) {
    var children = props.children, h1 = props.h1, h2 = props.h2, h3 = props.h3, h4 = props.h4, h5 = props.h5, h6 = props.h6;
    var className = getClasses(props);
    if (h1)
        return React.createElement("h1", null, children);
    if (h2)
        return React.createElement("h2", null, children);
    if (h3)
        return React.createElement("h3", null, children);
    if (h4)
        return React.createElement("h4", null, children);
    if (h5)
        return React.createElement("h5", null, children);
    if (h6)
        return React.createElement("h6", null, children);
    return (children ? React.createElement("p", { className: className }, children) : null);
};
exports.default = exports.Typography;
//# sourceMappingURL=Typography.js.map
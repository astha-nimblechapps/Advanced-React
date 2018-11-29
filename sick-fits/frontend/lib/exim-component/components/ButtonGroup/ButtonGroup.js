"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var eximUtils_1 = require("./../../utils/eximUtils");
var styleConfigs_1 = require("./../../utils/styleConfigs");
require("./ButtonGroup.scss");
var getClasses = function (props) {
    var customClass = props.customClass, className = props.className, size = props.size;
    var styles = {};
    if (size && styleConfigs_1.SizeMap[size])
        styles[eximUtils_1.prefix(customClass, styleConfigs_1.SizeMap[size])] = true;
    Object.keys(styleConfigs_1.ButtonGroupStyles).filter(function (key) {
        styles[eximUtils_1.prefix(customClass, key)] = props[key];
    });
    return classnames_1.default(customClass, styles, className);
};
exports.ButtonGroup = function (props) {
    var children = props.children;
    var classes = getClasses(props);
    return (React.createElement("div", { className: classes }, children ? children : null));
};
exports.ButtonGroup.defaultProps = {
    vertical: false,
    block: false,
    justified: false,
    size: 'medium',
    customClass: 'btn-group'
};
exports.default = exports.ButtonGroup;
//# sourceMappingURL=ButtonGroup.js.map
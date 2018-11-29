"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var eximUtils_1 = require("./../../utils/eximUtils");
var styleConfigs_1 = require("./../../utils/styleConfigs");
require("./Alert.scss");
var getClasses = function (props) {
    var className = props.className, customClass = props.customClass;
    var styles = {};
    Object.keys(styleConfigs_1.AlertStyles).filter(function (key) {
        styles[eximUtils_1.prefix(customClass, key)] = props[key];
    });
    return classnames_1.default(customClass, styles, className);
};
exports.Alert = function (props) {
    var children = props.children;
    var classes = getClasses(props);
    return (React.createElement("div", { className: classes }, children ? children : React.createElement("span", null)));
};
exports.Alert.defaultProps = {
    success: false,
    caution: false,
    error: false,
    customClass: 'alert'
};
exports.default = exports.Alert;
//# sourceMappingURL=Alert.js.map
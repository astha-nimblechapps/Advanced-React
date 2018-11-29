"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var eximUtils_1 = require("./../../utils/eximUtils");
var styleConfigs_1 = require("./../../utils/styleConfigs");
require("./Button.scss");
var noop = function () { };
var getClasses = function (props) {
    var customClass = props.customClass, className = props.className;
    var styles = {};
    //Apply classes based on props
    Object.keys(styleConfigs_1.ButtonStyles).filter(function (key) {
        styles[eximUtils_1.prefix(customClass, key)] = props[key];
    });
    return classnames_1.default(customClass, eximUtils_1.prefix(props.customClass, styleConfigs_1.SizeMap.small), styles, className);
};
exports.ButtonSmall = function (props) {
    var onClick = props.onClick, disabled = props.disabled, children = props.children;
    var classes = getClasses(props);
    return (React.createElement("button", { className: classes, onClick: !disabled ? onClick : noop, disabled: disabled }, children ? children : React.createElement("span", null, "Button")));
};
exports.ButtonSmall.defaultProps = {
    disabled: false,
    customClass: 'btn',
    hovered: false,
};
exports.default = exports.ButtonSmall;
//# sourceMappingURL=ButtonSmall.js.map
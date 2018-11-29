"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var eximUtils_1 = require("./../../utils/eximUtils");
var styleConfigs_1 = require("./../../utils/styleConfigs");
require("./ButtonLink.scss");
var noop = function (e) { return e.stopPropagation(); };
var getClasses = function (props) {
    var customClass = props.customClass, className = props.className;
    var styles = {};
    Object.keys(styleConfigs_1.ButtonLinkStyles).filter(function (key) {
        styles[eximUtils_1.prefix(customClass, key)] = props[key];
    });
    return classnames_1.default(customClass, styles, className);
};
exports.ButtonLink = function (props) {
    var onClick = props.onClick, disabled = props.disabled, children = props.children, href = props.href;
    var classes = getClasses(props);
    return (React.createElement("a", { className: classes, onClick: !disabled ? onClick : noop, href: href }, children ? children : React.createElement("span", null, "Button Link")));
};
exports.ButtonLink.defaultProps = {
    disabled: false,
    href: '#',
    customClass: 'anchor',
    link: false,
    plain: false,
    address: false,
    pressed: false,
    hovered: false,
    idle: false
};
exports.default = exports.ButtonLink;
//# sourceMappingURL=ButtonLink.js.map
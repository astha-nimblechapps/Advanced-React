"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var eximUtils_1 = require("./../../utils/eximUtils");
var styleConfigs_1 = require("./../../utils/styleConfigs");
require("./Brand.scss");
var getClasses = function (props) {
    var customClass = props.customClass, logo = props.logo, token = props.token, tokenCircle = props.tokenCircle, style = props.style, className = props.className;
    var styles = {};
    if (logo)
        styles[(eximUtils_1.prefix(customClass, styleConfigs_1.BrandTypes.logo))] = true;
    if (token)
        styles[(eximUtils_1.prefix(customClass, styleConfigs_1.BrandTypes.token))] = true;
    if (tokenCircle)
        styles[(eximUtils_1.prefix(customClass, styleConfigs_1.BrandTypes.tokenCircle))] = true;
    if (style && styleConfigs_1.BrandStyles[style])
        styles[(eximUtils_1.prefix(customClass, styleConfigs_1.BrandStyles[style]))] = true;
    return classnames_1.default(customClass, styles, className);
};
exports.Brand = function (props) {
    var onClick = props.onClick, href = props.href;
    var classes = getClasses(props);
    return (React.createElement("a", { href: href, onClick: onClick, className: classes }));
};
exports.Brand.defaultProps = {
    customClass: 'brand',
    logo: false,
    tokenCircle: false,
    token: false,
    href: '#'
};
exports.default = exports.Brand;
//# sourceMappingURL=Brand.js.map
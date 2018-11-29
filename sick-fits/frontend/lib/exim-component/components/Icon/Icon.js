"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var eximUtils_1 = require("./../../utils/eximUtils");
var styleConfigs_1 = require("./../../utils/styleConfigs");
require("./Icon.scss");
var getClasses = function (props) {
    var customClass = props.customClass, className = props.className;
    if (styleConfigs_1.Icons[props.for]) {
        return classnames_1.default(customClass, eximUtils_1.prefix(customClass, styleConfigs_1.Icons[props.for]), className);
    }
    else {
        return classnames_1.default(customClass, className);
    }
};
exports.Icon = function (props) {
    var className = getClasses(props);
    return (React.createElement("span", { className: className }));
};
exports.Icon.defaultProps = {
    customClass: 'icon'
};
exports.default = exports.Icon;
//# sourceMappingURL=Icon.js.map
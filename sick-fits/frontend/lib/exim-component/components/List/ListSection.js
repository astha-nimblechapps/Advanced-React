"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var eximUtils_1 = require("./../../utils/eximUtils");
var styleConfigs_1 = require("./../../utils/styleConfigs");
var getClasses = function (props) {
    var _a;
    var primary = props.primary, secondary = props.secondary, customClass = props.customClass;
    var styles = (_a = {},
        _a[customClass + "-primary"] = primary,
        _a[customClass + "-secondary"] = secondary,
        _a);
    return classnames_1.default(eximUtils_1.prefix(customClass, styleConfigs_1.ListStyles.section), styles);
};
exports.ListSection = function (props) {
    var children = props.children;
    var className = getClasses(props);
    return (React.createElement("div", { className: className }, children));
};
exports.ListSection.defaultProps = {
    customClass: 'list-section'
};
exports.default = exports.ListSection;
//# sourceMappingURL=ListSection.js.map
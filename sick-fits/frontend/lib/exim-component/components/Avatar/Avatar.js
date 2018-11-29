"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var eximUtils_1 = require("./../../utils/eximUtils");
var styleConfigs_1 = require("./../../utils/styleConfigs");
require("./Avatar.scss");
var getClasses = function (props) {
    var customClass = props.customClass, src = props.src, badge = props.badge, className = props.className;
    var styles = {};
    if (!src)
        styles[(eximUtils_1.prefix(customClass, styleConfigs_1.AvatarStyles.default))] = true;
    else
        styles[(eximUtils_1.prefix(customClass, styleConfigs_1.AvatarStyles.custom))] = true;
    if (badge)
        styles[(eximUtils_1.prefix(customClass, styleConfigs_1.AvatarStyles.badge))] = true;
    return classnames_1.default(customClass, styles, className);
};
exports.Avatar = function (props) {
    var src = props.src, badge = props.badge;
    var className = getClasses(props);
    var badgeContent = null;
    if (typeof badge == 'string')
        badgeContent = (React.createElement("span", null, badge));
    if (badge && typeof badge == 'boolean')
        badgeContent = (React.createElement("span", null,
            React.createElement("i", { className: "icon icon-blockmaker" })));
    return (React.createElement("div", { className: className },
        React.createElement("img", { src: src }),
        badgeContent));
};
exports.Avatar.defaultProps = {
    customClass: 'avatar'
};
exports.default = exports.Avatar;
//# sourceMappingURL=Avatar.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var getClasses = function (props) {
    var _a;
    var customClass = props.customClass, selected = props.selected, disabled = props.disabled;
    var styles = (_a = {},
        _a[customClass + "-selected"] = selected,
        _a[customClass + "-disabled"] = disabled,
        _a);
    return classnames_1.default(customClass, styles);
};
var noop = function () { };
var NavItem = function (props) {
    var children = props.children, key = props.key, onClick = props.onClick, disabled = props.disabled;
    var className = getClasses(props);
    return (React.createElement("li", { key: key, className: className, onClick: !disabled ? onClick : noop }, children));
};
NavItem.defaultProps = {
    customClass: 'nav-item'
};
exports.default = NavItem;
//# sourceMappingURL=NavItem.js.map
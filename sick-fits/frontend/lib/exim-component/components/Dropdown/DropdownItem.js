"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var eximUtils_1 = require("./../../utils/eximUtils");
var styleConfigs_1 = require("./../../utils/styleConfigs");
exports.DropdownItem = function (props) {
    var children = props.children, customClass = props.customClass, link = props.link;
    var className = eximUtils_1.prefix(customClass, styleConfigs_1.DropdownStyles.item);
    return (React.createElement("li", { className: className }, link ? React.createElement("a", { href: link ? link : '' }, children) : React.createElement("span", null, children)));
};
exports.DropdownItem.defaultProps = {
    link: '#'
};
exports.default = exports.DropdownItem;
//# sourceMappingURL=DropdownItem.js.map
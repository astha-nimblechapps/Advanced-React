"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var eximUtils_1 = require("./../../utils/eximUtils");
var styleConfigs_1 = require("./../../utils/styleConfigs");
exports.ListItem = function (props) {
    var children = props.children, customClass = props.customClass;
    var className = eximUtils_1.prefix(customClass, styleConfigs_1.ListStyles.item);
    return (React.createElement("li", { className: className }, children));
};
exports.ListItem.defaultProps = {
    customClass: 'list-item'
};
exports.default = exports.ListItem;
//# sourceMappingURL=ListItem.js.map
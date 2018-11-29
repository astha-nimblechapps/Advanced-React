"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ListItem_1 = require("./ListItem");
var eximUtils_1 = require("./../../utils/eximUtils");
var styleConfigs_1 = require("./../../utils/styleConfigs");
exports.ListContent = function (props) {
    var customClass = props.customClass, items = props.items;
    var className = eximUtils_1.prefix(customClass, styleConfigs_1.ListStyles.content);
    return (React.createElement("div", { className: className },
        React.createElement("ul", null, items && items.map(function (item, key) { return (React.createElement(ListItem_1.default, { key: key, customClass: customClass }, item)); }))));
};
exports.ListContent.defaultProps = {
    customClass: "list-content"
};
exports.default = exports.ListContent;
//# sourceMappingURL=ListContent.js.map
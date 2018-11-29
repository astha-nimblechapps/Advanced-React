"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var eximUtils_1 = require("./../../utils/eximUtils");
var styleConfigs_1 = require("./../../utils/styleConfigs");
exports.DropdownTrigger = function (props) {
    var children = props.children, customClass = props.customClass, onClick = props.onClick;
    var className = eximUtils_1.prefix(customClass, styleConfigs_1.DropdownStyles.trigger);
    return (React.createElement("a", { className: className, onClick: onClick },
        children,
        React.createElement("i", { className: "caret" })));
};
exports.default = exports.DropdownTrigger;
//# sourceMappingURL=DropdownTrigger.js.map
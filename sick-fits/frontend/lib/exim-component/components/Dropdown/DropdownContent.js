"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var eximUtils_1 = require("./../../utils/eximUtils");
var styleConfigs_1 = require("./../../utils/styleConfigs");
exports.DropdownContent = function (props) {
    var children = props.children, customClass = props.customClass;
    var className = eximUtils_1.prefix(customClass, styleConfigs_1.DropdownStyles.content);
    var boundChildren = React.Children.map(children, function (child) {
        return React.cloneElement(child, {
            customClass: customClass
        });
    });
    return (React.createElement("div", { className: className },
        React.createElement("ul", null, boundChildren)));
};
exports.default = exports.DropdownContent;
//# sourceMappingURL=DropdownContent.js.map
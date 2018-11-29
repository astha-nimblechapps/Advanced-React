"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var eximUtils_1 = require("./../../utils/eximUtils");
require("./Divider.scss");
exports.Divider = function (props) {
    var customClass = props.customClass, primary = props.primary, secondary = props.secondary;
    var classes = [customClass];
    primary && classes.push(eximUtils_1.prefix(props, 'primary'));
    secondary && classes.push(eximUtils_1.prefix(props, 'secondary'));
    var className = classes.join(' ');
    return (React.createElement("span", { className: className }));
};
exports.Divider.defaultProps = {
    customClass: 'divider'
};
exports.default = exports.Divider;
//# sourceMappingURL=Divider.js.map
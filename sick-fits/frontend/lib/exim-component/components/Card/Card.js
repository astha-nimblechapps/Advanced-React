"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
require("./Card.scss");
exports.Card = function (props) {
    var customClass = props.customClass, children = props.children, className = props.className;
    var classes = classnames_1.default(customClass, className);
    return (React.createElement("div", { className: classes }, children ? children : null));
};
exports.Card.defaultProps = {
    customClass: 'card'
};
exports.default = exports.Card;
//# sourceMappingURL=Card.js.map
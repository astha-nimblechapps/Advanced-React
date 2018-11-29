"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var Label_1 = require("./../Label/Label");
var Icon_1 = require("./../Icon/Icon");
require("./Address.scss");
exports.Address = function (props) {
    var onClick = props.onClick, title = props.title, label = props.label, icon = props.icon, customClass = props.customClass, className = props.className;
    var data = {
        title: title,
        label: label
    };
    var classes = classnames_1.default(className, customClass);
    return (React.createElement("div", { className: classes, onClick: function (e) { onClick && onClick(e, data); } },
        React.createElement("p", null,
            icon ? React.createElement(Icon_1.default, { for: icon }) : null,
            title),
        React.createElement("div", { className: "text-left" },
            React.createElement(Label_1.default, { color: "lightNeutral" }, label))));
};
exports.Address.defaultProps = {
    customClass: 'address',
    icon: 'blockmaker'
};
exports.default = exports.Address;
//# sourceMappingURL=Address.js.map
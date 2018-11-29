"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var eximUtils_1 = require("./../../utils/eximUtils");
var styleConfigs_1 = require("./../../utils/styleConfigs");
require("./CheckBox.scss");
var getClasses = function (props) {
    var customClass = props.customClass, className = props.className;
    var styles = {};
    Object.keys(styleConfigs_1.CheckboxStyles).filter(function (key) {
        styles[eximUtils_1.prefix(customClass, key)] = props[key];
    });
    if (props.validationState && styleConfigs_1.ValidationStates[props.validationState]) {
        styles[eximUtils_1.getValidationClass(props.validationState)] = true;
    }
    return classnames_1.default(customClass, styles, className);
};
exports.CheckBox = function (props) {
    var disabled = props.disabled, inputRef = props.inputRef, title = props.title, children = props.children, onClick = props.onClick, checked = props.checked, name = props.name;
    var classes = getClasses(props);
    return (React.createElement("div", { className: classes },
        React.createElement("label", { title: title, onClick: onClick, htmlFor: name },
            React.createElement("input", { type: "checkbox", name: name, disabled: disabled, ref: inputRef, checked: checked }),
            children ? children : null)));
};
exports.CheckBox.defaultProps = {
    title: '',
    inline: false,
    disabled: false,
    customClass: 'checkbox',
    hovered: false,
    checked: false
};
exports.default = exports.CheckBox;
//# sourceMappingURL=CheckBox.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var Input_1 = require("./Input");
var InputGroupAddon_1 = require("./InputGroupAddon");
var InputValidationMessage_1 = require("./InputValidationMessage");
var eximUtils_1 = require("./../../utils/eximUtils");
var getClasses = function (props) {
    var customClass = props.customClass, validationState = props.validationState, disabled = props.disabled, className = props.className;
    var styles = {};
    if (validationState)
        styles['has-' + validationState] = true;
    styles[eximUtils_1.prefix(customClass, 'disabled')] = disabled;
    return classnames_1.default(customClass, styles, className);
};
var getChildren = function (props) {
    var children = props.children, disabled = props.disabled, placeholder = props.placeholder, inputRef = props.inputRef;
    return React.Children.map(children, function (child) {
        if (child.type === Input_1.default) {
            child = React.cloneElement(child, {
                placehoder: placeholder,
                disabled: disabled,
                ref: inputRef
            });
        }
        return child;
    });
};
exports.InputGroup = function (props) {
    var validationState = props.validationState, validationMessage = props.validationMessage, addon = props.addon;
    var className = getClasses(props);
    var boundChildren = getChildren(props);
    return (React.createElement("div", { className: className },
        boundChildren.length ? boundChildren : null,
        addon ? React.createElement(InputGroupAddon_1.default, null, addon) : null,
        validationState ? React.createElement(InputValidationMessage_1.default, null, validationMessage) : null));
};
exports.InputGroup.defaultProps = {
    customClass: 'input-group',
    disabled: false
};
exports.default = exports.InputGroup;
//# sourceMappingURL=InputGroup.js.map
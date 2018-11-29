"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
require("./Input.scss");
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.render = function () {
        var _a = this.props, type = _a.type, inputRef = _a.inputRef, customClass = _a.customClass, placeholder = _a.placeholder, children = _a.children, disabled = _a.disabled, value = _a.value, className = _a.className, onChange = _a.onChange, name = _a.name;
        var classes = classnames_1.default(customClass, className);
        if (type == "select") {
            return (React.createElement("div", { className: "select_wrap" },
                React.createElement("select", { className: classes, ref: inputRef, placeholder: placeholder, disabled: disabled }, children ? children : null)));
        }
        return (React.createElement("input", { type: type, className: classes, ref: inputRef, placeholder: placeholder, disabled: disabled, value: value, onChange: onChange, name: name }));
    };
    Input.defaultProps = {
        customClass: 'form-control',
        disabled: false,
        type: 'text'
    };
    return Input;
}(React.Component));
exports.Input = Input;
__export(require("./InputGroup"));
__export(require("./InputGroupAddon"));
__export(require("./InputGroupButton"));
__export(require("./InputValidationMessage"));
exports.default = Input;
//# sourceMappingURL=Input.js.map
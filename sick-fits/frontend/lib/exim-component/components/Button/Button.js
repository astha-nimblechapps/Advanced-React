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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var ButtonSmall_1 = require("./ButtonSmall");
exports.ButtonSmall = ButtonSmall_1.default;
var ButtonCancel_1 = require("./ButtonCancel");
exports.ButtonCancel = ButtonCancel_1.default;
var ButtonClose_1 = require("./ButtonClose");
exports.ButtonClose = ButtonClose_1.default;
var eximUtils_1 = require("./../../utils/eximUtils");
var styleConfigs_1 = require("./../../utils/styleConfigs");
require("./Button.scss");
var noop = function () { };
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hovered: !!_this.props.hovered,
            pressed: !!_this.props.pressed,
            idle: !!_this.props.idle,
            className: _this.getClasses()
        };
        _this.onMouseOver = _this.onMouseOver.bind(_this);
        _this.onMouseOut = _this.onMouseOut.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        _this.onMouseDown = _this.onMouseDown.bind(_this);
        return _this;
    }
    Button.prototype.getClasses = function () {
        var _this = this;
        var _a = this.props, customClass = _a.customClass, className = _a.className, size = _a.size;
        var styles = {};
        //Apply size class
        if (size && styleConfigs_1.SizeMap[size])
            styles[eximUtils_1.prefix(customClass, styleConfigs_1.SizeMap[size])] = true;
        //Apply classes based on props
        Object.keys(styleConfigs_1.ButtonStyles).filter(function (key) {
            styles[eximUtils_1.prefix(customClass, key)] = _this.props[key];
        });
        //Overwrite classes with state value
        if (this.state) {
            var _b = this.state, hovered = _b.hovered, pressed = _b.pressed;
            styles[eximUtils_1.prefix(customClass, styleConfigs_1.ButtonStyles.hovered)] = hovered;
            styles[eximUtils_1.prefix(customClass, styleConfigs_1.ButtonStyles.pressed)] = pressed;
            styles[eximUtils_1.prefix(customClass, styleConfigs_1.ButtonStyles.idle)] = !pressed && !hovered;
        }
        this.setState({
            className: classnames_1.default(customClass, styles, className)
        });
        return classnames_1.default(customClass, styles, className);
    };
    Button.prototype.onMouseOver = function () {
        this.setState({
            hovered: true
        }, this.getClasses);
    };
    Button.prototype.onMouseOut = function () {
        this.setState({
            hovered: false
        }, this.getClasses);
    };
    Button.prototype.onMouseDown = function () {
        this.setState({
            pressed: true
        }, this.getClasses);
    };
    Button.prototype.onMouseUp = function () {
        this.setState({
            pressed: false
        }, this.getClasses);
    };
    Button.prototype.render = function () {
        var _a = this.props, onClick = _a.onClick, disabled = _a.disabled, children = _a.children, loader = _a.loader, type = _a.type;
        return (React.createElement("button", { className: this.state.className, onClick: disabled || loader ? noop : onClick, disabled: disabled, type: type, onMouseUp: this.onMouseUp, onMouseDown: this.onMouseDown, onMouseOver: this.onMouseOver, onMouseOut: this.onMouseOut }, loader ? (React.createElement("i", { className: "fa fa-spinner fa-spin" })) : (children ? children : React.createElement("span", null, "Button"))));
    };
    Button.defaultProps = {
        disabled: false,
        primary: false,
        secondary: false,
        tertiary: false,
        outline: false,
        destructive: false,
        loader: false,
        size: 'medium',
        customClass: 'btn',
        hovered: false,
        idle: false,
        pressed: false
    };
    return Button;
}(React.Component));
exports.Button = Button;
exports.default = Button;
//# sourceMappingURL=Button.js.map
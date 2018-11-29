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
var eximUtils_1 = require("./../../utils/eximUtils");
var styleConfigs_1 = require("./../../utils/styleConfigs");
require("./Button.scss");
var Icon_1 = require("./../Icon/Icon");
var noop = function () { };
var ButtonClose = /** @class */ (function (_super) {
    __extends(ButtonClose, _super);
    function ButtonClose(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hovered: !!_this.props.hovered,
            pressed: !!_this.props.pressed,
            className: _this.getClasses()
        };
        _this.onMouseOver = _this.onMouseOver.bind(_this);
        _this.onMouseOut = _this.onMouseOut.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        _this.onMouseDown = _this.onMouseDown.bind(_this);
        return _this;
    }
    ButtonClose.prototype.getClasses = function () {
        var _a = this.props, customClass = _a.customClass, className = _a.className;
        var styles = {};
        if (this.state) {
            var _b = this.state, hovered = _b.hovered, pressed = _b.pressed;
            styles[eximUtils_1.prefix(customClass, styleConfigs_1.ButtonStyles.hovered)] = hovered;
            styles[eximUtils_1.prefix(customClass, styleConfigs_1.ButtonStyles.pressed)] = pressed;
        }
        this.setState({
            className: classnames_1.default(customClass, styles, className)
        });
        return classnames_1.default(customClass, styles, className);
    };
    ButtonClose.prototype.onMouseOver = function () {
        this.setState({
            hovered: true
        }, this.getClasses);
    };
    ButtonClose.prototype.onMouseOut = function () {
        this.setState({
            hovered: false
        }, this.getClasses);
    };
    ButtonClose.prototype.onMouseDown = function () {
        this.setState({
            pressed: true
        }, this.getClasses);
    };
    ButtonClose.prototype.onMouseUp = function () {
        this.setState({
            pressed: false
        }, this.getClasses);
    };
    ButtonClose.prototype.render = function () {
        var _a = this.props, onClick = _a.onClick, disabled = _a.disabled;
        return (React.createElement("button", { className: this.state.className, onClick: !disabled ? onClick : noop, disabled: disabled, onMouseUp: this.onMouseUp, onMouseDown: this.onMouseDown, onMouseOver: this.onMouseOver, onMouseOut: this.onMouseOut },
            React.createElement(Icon_1.default, { for: "close" })));
    };
    ButtonClose.defaultProps = {
        disabled: false,
        customClass: 'btn-close',
        hovered: false,
        pressed: false
    };
    return ButtonClose;
}(React.Component));
exports.ButtonClose = ButtonClose;
exports.default = ButtonClose;
//# sourceMappingURL=ButtonClose.js.map
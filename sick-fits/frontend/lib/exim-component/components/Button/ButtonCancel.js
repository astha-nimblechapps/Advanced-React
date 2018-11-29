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
var noop = function () { };
var ButtonCancel = /** @class */ (function (_super) {
    __extends(ButtonCancel, _super);
    function ButtonCancel(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hovered: !!_this.props.hovered,
            className: _this.getClasses()
        };
        _this.onMouseOver = _this.onMouseOver.bind(_this);
        _this.onMouseOut = _this.onMouseOut.bind(_this);
        return _this;
    }
    ButtonCancel.prototype.getClasses = function () {
        var _a = this.props, customClass = _a.customClass, className = _a.className;
        var styles = {};
        if (this.state) {
            styles[eximUtils_1.prefix(customClass, styleConfigs_1.ButtonStyles.hovered)] = this.state.hovered;
        }
        this.setState({
            className: classnames_1.default(customClass, styles, className)
        });
        return classnames_1.default(customClass, styles, className);
    };
    ButtonCancel.prototype.onMouseOver = function () {
        this.setState({
            hovered: true
        }, this.getClasses);
    };
    ButtonCancel.prototype.onMouseOut = function () {
        this.setState({
            hovered: false
        }, this.getClasses);
    };
    ButtonCancel.prototype.render = function () {
        var _a = this.props, onClick = _a.onClick, disabled = _a.disabled, children = _a.children;
        return (React.createElement("button", { className: this.state.className, onClick: !disabled ? onClick : noop, disabled: disabled, onMouseOver: this.onMouseOver, onMouseOut: this.onMouseOut }, children ? children : React.createElement("span", null, "Cancel")));
    };
    ButtonCancel.defaultProps = {
        disabled: false,
        customClass: 'btn-cancel',
        hovered: false
    };
    return ButtonCancel;
}(React.Component));
exports.ButtonCancel = ButtonCancel;
exports.default = ButtonCancel;
//# sourceMappingURL=ButtonCancel.js.map
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
var react_onclickoutside_1 = require("react-onclickoutside");
var eximUtils_1 = require("./../../utils/eximUtils");
require("./Dropdown.scss");
var DropdownTrigger_1 = require("./DropdownTrigger");
exports.DropdownTrigger = DropdownTrigger_1.default;
var DropdownContent_1 = require("./DropdownContent");
exports.DropdownContent = DropdownContent_1.default;
var DropdownItem_1 = require("./DropdownItem");
exports.DropdownItem = DropdownItem_1.default;
var DropdownComponent = /** @class */ (function (_super) {
    __extends(DropdownComponent, _super);
    function DropdownComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickOutside = function (evt) {
            _this.hide();
        };
        _this.state = {
            active: false
        };
        _this._onToggleClick = _this._onToggleClick.bind(_this);
        return _this;
    }
    DropdownComponent.prototype.isActive = function () {
        return (typeof this.props.active === 'boolean') ? this.props.active : this.state.active;
    };
    DropdownComponent.prototype.hide = function () {
        var _this = this;
        this.setState({
            active: false
        }, function () {
            if (_this.props.onHide) {
                _this.props.onHide();
            }
        });
    };
    DropdownComponent.prototype.show = function () {
        var _this = this;
        this.setState({
            active: true
        }, function () {
            if (_this.props.onShow) {
                _this.props.onShow();
            }
        });
    };
    DropdownComponent.prototype._onToggleClick = function (event) {
        event.preventDefault();
        if (this.isActive()) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    DropdownComponent.prototype.getChildren = function (active) {
        var _this = this;
        var _a = this.props, children = _a.children, disabled = _a.disabled, customClass = _a.customClass;
        return React.Children.map(children, function (child) {
            if (child.type === DropdownTrigger_1.default) {
                var originalOnClick_1 = child.props.onClick;
                child = React.cloneElement(child, {
                    customClass: customClass,
                    onClick: function (event) {
                        if (!disabled) {
                            _this._onToggleClick(event);
                            if (originalOnClick_1) {
                                originalOnClick_1.apply(child, event);
                            }
                        }
                    }
                });
            }
            else if (child.type === DropdownContent_1.default && !active) {
                child = null;
            }
            else {
                child = React.cloneElement(child, {
                    customClass: customClass
                });
            }
            return child;
        });
    };
    DropdownComponent.prototype.getClasses = function (active) {
        var _a = this.props, customClass = _a.customClass, className = _a.className, disabled = _a.disabled;
        var styles = {};
        styles[eximUtils_1.prefix(customClass, 'disabled')] = disabled;
        styles[eximUtils_1.prefix(customClass, 'active')] = active;
        return classnames_1.default(customClass, styles, className);
    };
    DropdownComponent.prototype.render = function () {
        var active = this.isActive();
        var boundChildren = this.getChildren(active);
        var className = this.getClasses(active);
        return (React.createElement("div", { className: className }, boundChildren));
    };
    DropdownComponent.defaultProps = {
        customClass: 'dropdown'
    };
    return DropdownComponent;
}(React.Component));
exports.DropdownComponent = DropdownComponent;
exports.Dropdown = react_onclickoutside_1.default(DropdownComponent);
exports.default = exports.Dropdown;
//# sourceMappingURL=Dropdown.js.map
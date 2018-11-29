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
var NavItem_1 = require("./NavItem");
exports.NavItem = NavItem_1.default;
var Nav = /** @class */ (function (_super) {
    __extends(Nav, _super);
    function Nav(props) {
        var _this = _super.call(this, props) || this;
        var key = _this.props.selectedKey ? _this.props.selectedKey : null;
        _this.state = {
            selectedKey: key
        };
        return _this;
    }
    Nav.prototype.onSelect = function (event, key) {
        this.setState({
            selectedKey: key
        });
        if (this.props.onSelect)
            this.props.onSelect(event, key);
    };
    Nav.prototype.getClasses = function () {
        var _a = this.props, customClass = _a.customClass, className = _a.className;
        return classnames_1.default(customClass, className);
    };
    Nav.prototype.getChildren = function () {
        var _this = this;
        var _a = this.props, children = _a.children, customClass = _a.customClass;
        return React.Children.map(children, function (child, index) {
            var key = child.key ? child.key : (index + 1);
            var originalOnClick = child.props.onClick;
            child = React.cloneElement(child, {
                customClass: customClass + '-' + 'item',
                key: key,
                selected: (_this.state.selectedKey == key) ? true : false,
                onClick: function (event) {
                    if (!child.props.disabled) {
                        _this.onSelect(event, key);
                        if (originalOnClick) {
                            originalOnClick.apply(child, event);
                        }
                    }
                }
            });
            return child;
        });
    };
    Nav.prototype.render = function () {
        var boundChildren = this.getChildren();
        var classes = this.getClasses();
        return (React.createElement("ul", { className: classes }, boundChildren));
    };
    Nav.defaultProps = {
        customClass: 'nav',
        disabled: false
    };
    return Nav;
}(React.Component));
exports.Nav = Nav;
exports.default = Nav;
//# sourceMappingURL=Nav.js.map
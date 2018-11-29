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
var Address_1 = require("./Address");
require("./AddressSwitcher.scss");
var styleConfigs_1 = require("./../../utils/styleConfigs");
var AddressSwitcher = /** @class */ (function (_super) {
    __extends(AddressSwitcher, _super);
    function AddressSwitcher(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            cursor: 0,
            address: _this.props.addresses[0]
        };
        _this.onUpArrowClick = _this.onUpArrowClick.bind(_this);
        _this.onDownArrowClick = _this.onDownArrowClick.bind(_this);
        _this.onSelect = _this.onSelect.bind(_this);
        return _this;
    }
    AddressSwitcher.prototype.onUpArrowClick = function () {
        var _this = this;
        this.setState(function (prevState) {
            var cursor = (prevState.cursor - 1) >= 0 ? (prevState.cursor - 1) : 0;
            return {
                cursor: cursor,
                address: _this.props.addresses[cursor]
            };
        });
    };
    AddressSwitcher.prototype.onDownArrowClick = function () {
        var _this = this;
        this.setState(function (prevState) {
            var cursor = ((prevState.cursor + 1) >= _this.props.addresses.length) ? _this.props.addresses.length - 1 : prevState.cursor + 1;
            return {
                cursor: cursor,
                address: _this.props.addresses[cursor]
            };
        });
    };
    AddressSwitcher.prototype.onSelect = function (event, data) {
        this.props.onSelect && this.props.onSelect(this.state.cursor, data);
    };
    AddressSwitcher.prototype.getContent = function () {
        var customClass = this.props.customClass;
        if (this.state.address) {
            return (React.createElement("div", null,
                React.createElement("div", { className: customClass + '-' + styleConfigs_1.AddressSwitcherStyles.left },
                    React.createElement(Address_1.default, { title: this.state.address.title, label: this.state.address.label, onClick: this.onSelect, icon: this.state.address.icon })),
                React.createElement("div", { className: customClass + '-' + styleConfigs_1.AddressSwitcherStyles.right },
                    React.createElement("div", { className: "text-center" },
                        React.createElement("a", { href: "javascript:;", onClick: this.onUpArrowClick },
                            React.createElement("i", { className: "fa fa-caret-up" }))),
                    React.createElement("div", { className: "text-center" },
                        React.createElement("a", { href: "javascript:;", onClick: this.onDownArrowClick },
                            React.createElement("i", { className: "fa fa-caret-down" }))))));
        }
        else {
            return (React.createElement("p", null, "No address found!!"));
        }
    };
    AddressSwitcher.prototype.render = function () {
        var _a = this.props, className = _a.className, customClass = _a.customClass, title = _a.title;
        var classes = classnames_1.default(customClass, className);
        var content = this.getContent();
        return (React.createElement("div", { className: classes },
            React.createElement("p", null, title),
            React.createElement("hr", null),
            content));
    };
    AddressSwitcher.defaultProps = {
        customClass: 'address-switcher'
    };
    return AddressSwitcher;
}(React.Component));
exports.AddressSwitcher = AddressSwitcher;
exports.default = AddressSwitcher;
//# sourceMappingURL=AddressSwitcher.js.map
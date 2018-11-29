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
var ListSection_1 = require("./ListSection");
var ListContent_1 = require("./ListContent");
var ListItem_1 = require("./ListItem");
require("./List.scss");
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    List.prototype.getChildren = function () {
        var _a = this.props, children = _a.children, customClass = _a.customClass;
        return React.Children.map(children, function (child) {
            return React.cloneElement(child, {
                customClass: customClass
            });
        });
    };
    List.prototype.getClasses = function () {
        var _a = this.props, customClass = _a.customClass, className = _a.className;
        return classnames_1.default(customClass, className);
    };
    List.prototype.render = function () {
        var _a = this.props, customClass = _a.customClass, items = _a.items;
        var boundChildren = this.getChildren();
        var classes = this.getClasses();
        return (React.createElement("div", { className: classes },
            boundChildren ? boundChildren : null,
            React.createElement(ListContent_1.default, { customClass: customClass, items: items })));
    };
    List.Section = ListSection_1.default;
    List.Content = ListContent_1.default;
    List.Item = ListItem_1.default;
    List.defaultProps = {
        customClass: 'list'
    };
    return List;
}(React.Component));
exports.List = List;
exports.default = List;
//# sourceMappingURL=List.js.map
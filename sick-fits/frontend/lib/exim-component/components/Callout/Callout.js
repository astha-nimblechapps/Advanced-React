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
var react_dom_1 = require("react-dom");
var styleConfigs_1 = require("./../../utils/styleConfigs");
var eximUtils_1 = require("./../../utils/eximUtils");
require("./Callout.scss");
var Callout = /** @class */ (function (_super) {
    __extends(Callout, _super);
    function Callout(props) {
        var _this = _super.call(this, props) || this;
        _this.show = function () { return _this.setVisibility(true); };
        _this.hide = function () { return _this.setVisibility(false); };
        _this.setVisibility = function (visible) {
            _this.setState(Object.assign({}, _this.state, {
                visible: visible,
            }));
        };
        _this.handleTouch = function () {
            _this.show();
            _this.assignOutsideTouchHandler();
        };
        _this.assignOutsideTouchHandler = function () {
            var handler = function (e) {
                var currentNode = e.target;
                var componentNode = react_dom_1.findDOMNode(_this.refs.instance);
                while (currentNode.parentNode) {
                    if (currentNode === componentNode)
                        return;
                    currentNode = currentNode.parentNode;
                }
                if (currentNode !== document)
                    return;
                _this.hide();
                document.removeEventListener('touchstart', handler);
            };
            document.addEventListener('touchstart', handler);
        };
        _this.state = {
            visible: false,
        };
        return _this;
    }
    Callout.prototype.render = function () {
        var _a = this, show = _a.show, hide = _a.hide, handleTouch = _a.handleTouch, state = _a.state;
        var _b = this.props, calloutContent = _b.calloutContent, children = _b.children, customClass = _b.customClass, placement = _b.placement, className = _b.className;
        var wrapperClasses = classnames_1.default(eximUtils_1.prefix(customClass, styleConfigs_1.CalloutStyles.wrapper), className);
        var calloutClasses = classnames_1.default(customClass, eximUtils_1.prefix(customClass, placement));
        var calloutContentClasses = eximUtils_1.prefix(customClass, styleConfigs_1.CalloutStyles.content);
        return (React.createElement("div", { onMouseEnter: show, onMouseLeave: hide, onTouchStart: handleTouch, ref: "wrapper", className: wrapperClasses },
            children,
            state.visible &&
                React.createElement("div", { className: calloutClasses, ref: "callout" },
                    React.createElement("div", { className: calloutContentClasses, ref: "content" }, calloutContent))));
    };
    Callout.defaultProps = {
        customClass: 'callout',
        placement: 'middle'
    };
    return Callout;
}(React.Component));
exports.Callout = Callout;
exports.default = Callout;
//# sourceMappingURL=Callout.js.map
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
var ModalTitle_1 = require("./ModalTitle");
var styleConfigs_1 = require("./../../utils/styleConfigs");
var Button_1 = require("./../Button/Button");
var eximUtils_1 = require("./../../utils/eximUtils");
var ModalHeader = /** @class */ (function (_super) {
    __extends(ModalHeader, _super);
    function ModalHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalHeader.prototype.getChildren = function () {
        var _a = this.props, children = _a.children, customClass = _a.customClass;
        return React.Children.map(children, function (child) {
            if (child.type == ModalTitle_1.default) {
                child = React.cloneElement(child, {
                    customClass: customClass
                });
            }
            else {
                child = null;
            }
            return child;
        });
    };
    ModalHeader.prototype.render = function () {
        var _a = this.props, customClass = _a.customClass, closeButton = _a.closeButton, onCloseClick = _a.onCloseClick;
        var className = eximUtils_1.prefix(customClass, styleConfigs_1.ModalStyles.header);
        var boundChildren = this.getChildren();
        return (React.createElement("div", { className: className },
            boundChildren,
            closeButton ? React.createElement(Button_1.ButtonClose, { onClick: onCloseClick }) : null));
    };
    ModalHeader.defaultProps = {
        customClass: 'modal-header'
    };
    return ModalHeader;
}(React.Component));
exports.default = ModalHeader;
//# sourceMappingURL=ModalHeader.js.map
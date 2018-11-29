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
var styleConfigs_1 = require("./../../utils/styleConfigs");
var Button_1 = require("./../Button/Button");
var eximUtils_1 = require("./../../utils/eximUtils");
var ModalFooter = /** @class */ (function (_super) {
    __extends(ModalFooter, _super);
    function ModalFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFooter.prototype.render = function () {
        var _a = this.props, children = _a.children, customClass = _a.customClass, cancelButton = _a.cancelButton, confirmButton = _a.confirmButton, onCancelClick = _a.onCancelClick, onConfirmClick = _a.onConfirmClick;
        var className = eximUtils_1.prefix(customClass, styleConfigs_1.ModalStyles.footer);
        return (React.createElement("div", { className: className },
            cancelButton && React.createElement(Button_1.default, { primary: true, onClick: onCancelClick }, "cancel"),
            confirmButton && React.createElement(Button_1.default, { primary: true, onClick: onConfirmClick }, "confirm"),
            children));
    };
    ModalFooter.defaultProps = {
        customClass: 'modal-footer'
    };
    return ModalFooter;
}(React.Component));
exports.default = ModalFooter;
//# sourceMappingURL=ModalFooter.js.map
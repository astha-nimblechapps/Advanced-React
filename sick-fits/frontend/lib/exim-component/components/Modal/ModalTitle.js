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
var eximUtils_1 = require("./../../utils/eximUtils");
var ModalTitle = /** @class */ (function (_super) {
    __extends(ModalTitle, _super);
    function ModalTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalTitle.prototype.render = function () {
        var _a = this.props, children = _a.children, customClass = _a.customClass;
        var className = eximUtils_1.prefix(customClass, styleConfigs_1.ModalStyles.title);
        return (React.createElement("h6", { className: className }, children));
    };
    ModalTitle.defaultProps = {
        customClass: 'modal-title'
    };
    return ModalTitle;
}(React.Component));
exports.default = ModalTitle;
//# sourceMappingURL=ModalTitle.js.map
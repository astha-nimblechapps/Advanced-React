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
var eximUtils_1 = require("./../../utils/eximUtils");
var styleConfigs_1 = require("./../../utils/styleConfigs");
var ModalBody = /** @class */ (function (_super) {
    __extends(ModalBody, _super);
    function ModalBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalBody.prototype.render = function () {
        var _a = this.props, children = _a.children, customClass = _a.customClass;
        var className = eximUtils_1.prefix(customClass, styleConfigs_1.ModalStyles.body);
        return (React.createElement("div", { className: className }, children));
    };
    ModalBody.defaultProps = {
        customClass: 'modal-body'
    };
    return ModalBody;
}(React.Component));
exports.default = ModalBody;
//# sourceMappingURL=ModalBody.js.map
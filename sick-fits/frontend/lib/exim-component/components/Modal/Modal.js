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
var ModalDialog_1 = require("./ModalDialog");
var ModalHeader_1 = require("./ModalHeader");
var ModalTitle_1 = require("./ModalTitle");
var ModalBody_1 = require("./ModalBody");
var ModalFooter_1 = require("./ModalFooter");
var eximUtils_1 = require("./../../utils/eximUtils");
var styleConfigs_1 = require("./../../utils/styleConfigs");
require("./Modal.scss");
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            show: _this.props.show
        };
        _this.onCloseClick = _this.onCloseClick.bind(_this);
        _this.onBackdropClick = _this.onBackdropClick.bind(_this);
        _this.escFunction = _this.escFunction.bind(_this);
        return _this;
    }
    Modal.prototype.hideModal = function () {
        this.setState({
            show: !this.state.show
        });
        this.props.onHide && this.props.onHide();
    };
    Modal.prototype.onBackdropClick = function (event) {
        if (this.props.closeOnOutsideClick)
            this.hideModal();
    };
    Modal.prototype.onCloseClick = function (event) {
        this.hideModal();
    };
    Modal.prototype.getClasses = function () {
        var _a = this.props, customClass = _a.customClass, size = _a.size, className = _a.className;
        var sizeClasses = '';
        if (size && styleConfigs_1.SizeMap[size])
            sizeClasses = eximUtils_1.prefix(customClass, styleConfigs_1.SizeMap[size]);
        return classnames_1.default(customClass, sizeClasses, className);
    };
    Modal.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.show !== this.state.show) {
            this.setState({ show: nextProps.show });
        }
    };
    Modal.prototype.componentDidMount = function () {
        document.addEventListener("keydown", this.escFunction, false);
    };
    Modal.prototype.componentWillUnmount = function () {
        document.removeEventListener("keydown", this.escFunction, false);
    };
    Modal.prototype.escFunction = function (event) {
        if (event.keyCode === 27 && this.state.show) {
            this.hideModal();
        }
    };
    Modal.prototype.getChildren = function () {
        var _this = this;
        var _a = this.props, children = _a.children, customClass = _a.customClass;
        return React.Children.map(children, function (child) {
            if (child.type == ModalHeader_1.default) {
                child = React.cloneElement(child, {
                    customClass: customClass,
                    onCloseClick: _this.onCloseClick
                });
            }
            else {
                child = React.cloneElement(child, {
                    customClass: customClass
                });
            }
            return child;
        });
    };
    Modal.prototype.render = function () {
        var _a = this.props, customClass = _a.customClass, backdrop = _a.backdrop;
        var className = this.getClasses();
        var boundChildren = this.getChildren();
        var backdropClass = eximUtils_1.prefix(customClass, styleConfigs_1.ModalStyles.backdrop);
        var contentClass = eximUtils_1.prefix(customClass, styleConfigs_1.ModalStyles.content);
        return (React.createElement("div", { className: className, style: this.state.show ? { display: 'block' } : {} },
            backdrop ? backdrop : React.createElement("div", { className: backdropClass, onClick: this.onBackdropClick }),
            React.createElement("div", { className: contentClass }, boundChildren)));
    };
    Modal.Dialog = ModalDialog_1.default;
    Modal.Header = ModalHeader_1.default;
    Modal.Title = ModalTitle_1.default;
    Modal.Body = ModalBody_1.default;
    Modal.Footer = ModalFooter_1.default;
    Modal.defaultProps = {
        customClass: 'modal',
        size: 'medium',
        closeOnOutsideClick: true
    };
    return Modal;
}(React.Component));
exports.Modal = Modal;
exports.default = Modal;
//# sourceMappingURL=Modal.js.map
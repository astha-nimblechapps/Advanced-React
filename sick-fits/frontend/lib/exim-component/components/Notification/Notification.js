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
var Avatar_1 = require("./../Avatar/Avatar");
require("./Notification.scss");
var eximUtils_1 = require("./../../utils/eximUtils");
var styleConfigs_1 = require("./../../utils/styleConfigs");
var Notification = /** @class */ (function (_super) {
    __extends(Notification, _super);
    function Notification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Notification.prototype.render = function () {
        var _a = this.props, customClass = _a.customClass, onClick = _a.onClick, className = _a.className, avatarImg = _a.avatarImg, avatarBadge = _a.avatarBadge, timestamp = _a.timestamp, title = _a.title;
        var notificationClasses = classnames_1.default(customClass, className);
        var titleClass = eximUtils_1.prefix(customClass, styleConfigs_1.NotificationStyles.title);
        var timestampClass = eximUtils_1.prefix(customClass, styleConfigs_1.NotificationStyles.timestamp);
        var badge = !avatarBadge ? true : avatarBadge;
        return (React.createElement("div", { className: notificationClasses, onClick: onClick },
            React.createElement(Avatar_1.default, { src: avatarImg, badge: badge }),
            React.createElement("div", { className: titleClass }, title),
            timestamp ? React.createElement("div", { className: timestampClass },
                timestamp,
                " ") : null));
    };
    Notification.defaultProps = {
        customClass: 'notification'
    };
    return Notification;
}(React.Component));
exports.Notification = Notification;
exports.default = Notification;
//# sourceMappingURL=Notification.js.map
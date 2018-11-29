"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
require("./ProgressBar.scss");
exports.ProgressBar = function (props) {
    var customClass = props.customClass, caption = props.caption, showPercentage = props.showPercentage, progress = props.progress, className = props.className;
    var classes = classnames_1.default(customClass, className);
    if (!progress || progress < 0)
        progress = 0;
    if (progress > 100)
        progress = 100;
    return (React.createElement("div", { className: classes },
        React.createElement("div", { className: "progress-bar", style: { width: progress + "%" } }, showPercentage ? progress + "%" : null),
        caption ? React.createElement("span", null, caption) : null));
};
exports.ProgressBar.defaultProps = {
    customClass: 'progress',
    showPercentage: false
};
exports.default = exports.ProgressBar;
//# sourceMappingURL=ProgressBar.js.map
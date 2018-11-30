"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var eximUtils_1 = require("./../../utils/eximUtils");
var styleConfigs_1 = require("./../../utils/styleConfigs");
require("./Label.scss");
var getClasses = function(props) {
  var customClass = props.customClass,
    size = props.size,
    className = props.className,
    color = props.color,
    status = props.status,
    outline = props.outline;
  var styles = {};
  if (status && styleConfigs_1.LabelStauts[status]) {
    styles[
      eximUtils_1.prefix(customClass, styleConfigs_1.LabelStauts[status])
    ] = true;
    return classnames_1.default(customClass, styles, className);
  }
  styles[eximUtils_1.prefix(customClass, "outline")] = outline;
  if (size && styleConfigs_1.LabelSize[size])
    styles[
      eximUtils_1.prefix(customClass, styleConfigs_1.LabelSize[size])
    ] = true;
  if (color && styleConfigs_1.LabelColors[color])
    styles[
      eximUtils_1.prefix(customClass, styleConfigs_1.LabelColors[color])
    ] = true;
  return classnames_1.default(customClass, styles, className);
};
exports.Label = function(props) {
  var children = props.children;
  var classes = getClasses(props);
  return React.createElement(
    "label",
    { className: classes },
    children ? children : React.createElement("span", null)
  );
};
exports.Label.defaultProps = {
  outline: false,
  size: "small",
  customClass: "label"
};
exports.default = exports.Label;
//# sourceMappingURL=Label.js.map

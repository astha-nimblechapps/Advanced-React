"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./Table.scss");
var classnames_1 = require("classnames");
var generateTableMarkup = function (columns, records) {
    var header = React.createElement("thead", null,
        React.createElement("tr", null, columns.map(function (column) {
            return React.createElement("td", null, column.title);
        })));
    var body = React.createElement("tbody", null, records.map(function (item) {
        return (React.createElement("tr", null, columns.map(function (column) {
            return React.createElement("td", null, item[column.field]);
        })));
    }));
    return [header, body];
};
exports.Table = function (props) {
    var customClass = props.customClass, className = props.className, columns = props.columns, records = props.records, children = props.children;
    var classes = classnames_1.default(customClass, className);
    return (React.createElement("table", { className: classes }, (!columns || !records) ? children : generateTableMarkup(columns, records)));
};
exports.Table.defaultProps = {
    customClass: 'table'
};
exports.default = exports.Table;
//# sourceMappingURL=Table.js.map
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
var styleConfigs_1 = require("./../../utils/styleConfigs");
require("./Search.scss");
var noop = function () { };
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            searchText: ''
        };
        _this.onSearchChange = _this.onSearchChange.bind(_this);
        _this.onClearClick = _this.onClearClick.bind(_this);
        return _this;
    }
    Search.prototype.onSearchChange = function (e) {
        this.setState({
            searchText: e.target.value
        });
        if (typeof this.props.onChange === 'function')
            this.props.onChange(e, e.target.value);
    };
    Search.prototype.onClearClick = function (e) {
        this.setState({
            searchText: ''
        });
        if (typeof this.props.onClear === 'function')
            this.props.onClear();
        if (typeof this.props.onChange === 'function')
            this.props.onChange(e, e.target.value);
    };
    Search.prototype.getClasses = function (props) {
        var customClass = props.customClass, className = props.className;
        return classnames_1.default(customClass, className);
    };
    Search.prototype.render = function () {
        var _a = this.props, placeholder = _a.placeholder, onSearch = _a.onSearch, inputRef = _a.inputRef;
        var classes = this.getClasses(this.props);
        return (React.createElement("div", { className: classes },
            React.createElement("input", { type: "search", placeholder: placeholder, ref: inputRef ? inputRef : noop, onChange: this.onSearchChange, value: this.state.searchText }),
            React.createElement("span", { className: styleConfigs_1.SearchClasses.searchIcon, onClick: onSearch }),
            this.state.searchText && React.createElement("span", { className: styleConfigs_1.SearchClasses.closeIcon, onClick: this.onClearClick })));
    };
    Search.defaultProps = {
        placeholder: 'Search text',
        customClass: 'search'
    };
    return Search;
}(React.Component));
exports.Search = Search;
exports.default = Search;
//# sourceMappingURL=Search.js.map
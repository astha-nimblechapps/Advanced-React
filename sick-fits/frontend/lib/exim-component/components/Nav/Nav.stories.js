"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var Nav_1 = require("./Nav");
var utils_1 = require("../../utils");
var react_2 = require("@storybook/addon-knobs/react");
var AddressSwitcher_1 = require("./../AddressSwitcher/AddressSwitcher");
require("./Nav.scss");
react_1.storiesOf("Components/Nav", module).addWithJSX("Eximchain Nav", utils_1.wInfo("\n    ### Note\n    example Nav story\n    ### Usage\n    ~~~js\n    <div className=\"left_sidebar\">\n      <h6>Governance</h6>\n      <Nav selectedKey={1} onSelect={(event:any, key:any) => console.log(event, key)}>\n        <NavItem key={1}><span><i className=\"icon icon-members\"></i> Members </span></NavItem>\n        <NavItem key={2}><span><i className=\"icon icon-promotion\"></i> Promotions </span></NavItem>\n        <NavItem key={3} disabled><span><i className=\"icon icon-demotion\"></i> Demotions </span></NavItem>\n      </Nav>\n      <div className=\"address_switcher\">\n          ......\n      </div>\n    </div>\n    ~~~")(function () {
    var addresses = [
        {
            title: '0x123456789...',
            label: '12,843.12 EXC'
        },
        {
            title: 'abc98745613...',
            label: '11,843.12 EXC'
        },
        {
            title: 'yzx12395424...',
            label: '10,843.12 EXC'
        },
        {
            title: '0x123456789...',
            label: '12,843.12 EXC'
        },
        {
            title: 'abc98745613...',
            label: '11,843.12 EXC'
        },
        {
            title: 'yzx12395424...',
            label: '10,843.12 EXC'
        },
        {
            title: '0x123456789...',
            label: '12,843.12 EXC'
        },
        {
            title: 'abc98745613...',
            label: '11,843.12 EXC'
        },
        {
            title: 'yzx12395424...',
            label: '10,843.12 EXC'
        },
        {
            title: '0x123456789...',
            label: '12,843.12 EXC'
        },
        {
            title: 'abc98745613...',
            label: '11,843.12 EXC'
        },
        {
            title: 'yzx12395424...',
            label: '10,843.12 EXC'
        }
    ];
    return (React.createElement("div", null,
        React.createElement("div", { className: "left_sidebar" },
            React.createElement("h6", null, "Governance"),
            React.createElement(Nav_1.Nav, { selectedKey: 1, onSelect: function (event, key) { return console.log(event, key); } },
                React.createElement(Nav_1.NavItem, { key: 1, onClick: function () { console.log('navItem click'); } },
                    React.createElement("span", null,
                        React.createElement("i", { className: "icon icon-members" }),
                        " Members ")),
                React.createElement(Nav_1.NavItem, { key: 2 },
                    React.createElement("span", null,
                        React.createElement("i", { className: "icon icon-promotion" }),
                        " Promotions ")),
                React.createElement(Nav_1.NavItem, { key: 3, disabled: true },
                    React.createElement("span", null,
                        React.createElement("i", { className: "icon icon-demotion" }),
                        " Demotions "))),
            React.createElement(AddressSwitcher_1.AddressSwitcher, { title: react_2.text('Title', 'Signing txs as'), addresses: addresses, onSelect: function (index, data) { console.log(index, data); } }))));
}));
//# sourceMappingURL=Nav.stories.js.map
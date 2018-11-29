"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var AddressSwitcher_1 = require("./AddressSwitcher");
var react_1 = require("@storybook/react");
var utils_1 = require("../../utils");
var react_2 = require("@storybook/addon-knobs/react");
react_1.storiesOf("Components/AddressSwitcher", module).addWithJSX("Eximchain AddressSwitcher", utils_1.wInfo("\n    ### Note\n    example AddressSwitcher story\n    ### Usage\n    ~~~js\n    <AddressSwitcher title={text('Title', 'Signing txs as')} addresses={addresses} onSelect={(index: any, data: any) => { console.log(index, data) }}></AddressSwitcher>\n    ~~~")(function () {
    var addresses = [
        {
            title: '0x123456789...',
            label: '12,843.12 EXC'
        },
        {
            title: '0x123456789...',
            label: '11,843.12 EXC'
        },
        {
            title: '0x123456789...',
            label: '10,843.12 EXC'
        }
    ];
    return (React.createElement(AddressSwitcher_1.AddressSwitcher, { title: react_2.text('Title', 'Signing txs as'), addresses: addresses, onSelect: function (index, data) { console.log(index, data); } }));
}));
//# sourceMappingURL=AddressSwitcher.stories.js.map
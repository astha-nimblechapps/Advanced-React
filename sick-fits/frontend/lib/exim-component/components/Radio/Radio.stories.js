"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var Radio_1 = require("./Radio");
var utils_1 = require("../../utils");
var react_2 = require("@storybook/addon-knobs/react");
var lbl_state = 'state';
var stateDefaultValue = 'idle';
var stateGroupId = 'state';
var stateOptions = ['unchecked', 'hovered', 'disabled'];
react_1.storiesOf("Components/Radio", module).addWithJSX("Eximchain Radio", utils_1.wInfo("\n    ### Note\n    example Radio story\n    ### Usage\n    ~~~js\n    <Radio\n      title={'One'}\n      disabled={false}\n      onClick={() => alert('Radio click event')}\n      ....\n    />\n    ~~~")(function () { return (React.createElement("div", null,
    React.createElement(Radio_1.Radio, { disabled: "disabled" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), hovered: "hovered" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), title: react_2.text("title", "One"), onClick: function () { return alert("Radio is clicked"); }, inline: react_2.boolean("inline", false), name: "group" },
        React.createElement("span", null, react_2.text("Radio One", "Radio text one"))),
    React.createElement(Radio_1.Radio, { disabled: "disabled" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), hovered: "hovered" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), title: react_2.text("title", "One"), onClick: function () { return alert("Radio is clicked"); }, inline: react_2.boolean("inline", false), name: "group" },
        React.createElement("span", null, react_2.text("Radio Two", "Radio text two"))),
    React.createElement(Radio_1.Radio, { disabled: "disabled" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), hovered: "hovered" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), title: react_2.text("title", "One"), onClick: function () { return alert("Radio is clicked"); }, inline: react_2.boolean("inline", false), name: "group" },
        React.createElement("span", null, react_2.text("Radio Three", "Radio text three"))))); }));
//# sourceMappingURL=Radio.stories.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var CheckBox_1 = require("./CheckBox");
var utils_1 = require("../../utils");
var react_2 = require("@storybook/addon-knobs/react");
var lbl_state = 'state';
var stateDefaultValue = 'idle';
var stateGroupId = 'state';
var stateOptions = ['unchecked', 'checked', 'hovered', 'disabled'];
react_1.storiesOf("Components/CheckBox", module).addWithJSX("Eximchain CheckBox", utils_1.wInfo("\n    ### Note\n    example CheckBox story\n    ### Usage\n    ~~~js\n    <CheckBox\n      title={'One'}\n      disabled={false}\n      onClick={() => alert('CheckBox click event')}\n      ....\n    />\n    ~~~")(function () { return (React.createElement("div", null,
    React.createElement(CheckBox_1.CheckBox, { disabled: "disabled" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), hovered: "hovered" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), checked: "checked" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), title: react_2.text("title", "One"), onClick: function () { return alert("CheckBox is clicked"); }, inline: react_2.boolean("inline", false) },
        React.createElement("span", null, react_2.text("CheckBox One", "Check Box One"))),
    React.createElement(CheckBox_1.CheckBox, { disabled: "disabled" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), hovered: "hovered" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), checked: "checked" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), title: react_2.text("title", "One"), onClick: function () { return alert("CheckBox is clicked"); }, inline: react_2.boolean("inline", false) },
        React.createElement("span", null, react_2.text("CheckBox Two", "Check Box Two"))),
    React.createElement(CheckBox_1.CheckBox, { disabled: "disabled" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), hovered: "hovered" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), checked: "checked" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), title: react_2.text("title", "One"), onClick: function () { return alert("CheckBox is clicked"); }, inline: react_2.boolean("inline", false) },
        React.createElement("span", null, react_2.text("CheckBox Three", "Check Box Three"))),
    React.createElement(CheckBox_1.CheckBox, { disabled: "disabled" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), hovered: "hovered" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), checked: "checked" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), title: react_2.text("title", "One"), onClick: function () { return alert("CheckBox is clicked"); }, inline: react_2.boolean("inline", false) },
        React.createElement("span", null, react_2.text("CheckBox Four", "Check Box Four"))))); }));
//# sourceMappingURL=CheckBox.stories.js.map
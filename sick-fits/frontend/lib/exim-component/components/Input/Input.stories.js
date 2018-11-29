"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var Input_1 = require("./../Input/Input");
var utils_1 = require("../../utils");
var react_2 = require("@storybook/addon-knobs/react");
react_1.storiesOf("Components/Input", module).addWithJSX("Eximchain Input", utils_1.wInfo("\n    ### Note\n    example input story\n    ### Usage\n    ~~~js\n    <Input\n      type={'text'}\n      placehoder={'placeholder'}\n    />\n    ~~~")(function () {
    var label = 'type';
    var defaultValue = 'text';
    var groupId = 'type';
    var options = ["text", "email", "password", "file", "number", "select"];
    return (React.createElement("div", null,
        React.createElement(Input_1.Input, { onChange: function (e) { console.log(e.target.value); }, type: react_2.select(label, options, defaultValue, groupId), placeholder: react_2.text("placeholder", "Text input"), disabled: react_2.boolean("disabled", false) },
            React.createElement("option", { value: "one" }, "One"),
            React.createElement("option", { value: "two" }, "Two"))));
})).addWithJSX("Eximchain Input Group", utils_1.wInfo("\n    ### Note\n    example input story\n    ### Usage\n    ~~~js\n    <InputGroup validationState={select(label, options, defaultValue, groupId)}>\n      <Input type=\"number\" />\n      <InputGroupAddon>Units</InputGroupAddon>\n      <InputValidationMessage>{text(\"Validation Message\",\"This is a Message\")}</InputValidationMessage>\n    </InputGroup>\n    ~~~")(function () {
    var label = 'validationState';
    var defaultValue = '';
    var groupId = 'validationState';
    var options = ["", "error", "success", "warning"];
    return (React.createElement("div", null,
        React.createElement(Input_1.InputGroup, { addon: react_2.text("Addon text", "Units"), validationMessage: react_2.text("Validation Message", "This is a Message"), validationState: react_2.select(label, options, defaultValue, groupId), disabled: react_2.boolean("disabled", false) },
            React.createElement(Input_1.Input, { type: "number" }))));
}));
//# sourceMappingURL=Input.stories.js.map
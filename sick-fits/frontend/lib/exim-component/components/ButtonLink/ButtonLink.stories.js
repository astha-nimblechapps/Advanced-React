"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var ButtonLink_1 = require("./ButtonLink");
var utils_1 = require("../../utils");
var react_2 = require("@storybook/addon-knobs/react");
var lbl_state = 'state';
var stateDefaultValue = 'idle';
var stateGroupId = 'state';
var stateOptions = ['idle', 'pressed', 'hovered', 'disabled'];
var lbl_style = 'style';
var styleDefaultValue = 'plain';
var styleGroupId = 'style';
var styleOptions = ['plain', 'link', 'address'];
react_1.storiesOf("Components/ButtonLink", module).addWithJSX("Eximchain ButtonLink", utils_1.wInfo("\n    ### Note\n    example button story\n    ### Usage\n    ~~~js\n    <ButtonLink\n      disabled={false}\n      onClick={() => alert('ButtonLink clicked.')}\n      .....\n    />\n    ~~~")(function () { return (React.createElement(ButtonLink_1.ButtonLink, { href: react_2.text("href", '#'), plain: "plain" === react_2.select(lbl_style, styleOptions, styleDefaultValue, styleGroupId), link: "link" === react_2.select(lbl_style, styleOptions, styleDefaultValue, styleGroupId), address: "address" === react_2.select(lbl_style, styleOptions, styleDefaultValue, styleGroupId), onClick: function () { return alert("This is button link click."); }, idle: "idle" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), pressed: "pressed" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), hovered: "hovered" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), disabled: "disabled" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId) }, react_2.text("Titles", "Title here"))); }));
//# sourceMappingURL=ButtonLink.stories.js.map
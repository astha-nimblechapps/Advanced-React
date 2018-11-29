"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var Button_1 = require("./Button");
var Icon_1 = require("./../Icon/Icon");
var utils_1 = require("../../utils");
var react_2 = require("@storybook/addon-knobs/react");
var label = 'Icon';
var defaultValue = 'vote';
var groupId = 'ICON';
var options = [
    'add',
    'blockmaker',
    'chevronLeft',
    'close',
    'cycle',
    'demotion',
    'filter',
    'governanceCycle',
    'help',
    'home',
    'listView',
    'media',
    'members',
    'more',
    'node',
    'notificationBell',
    'promotion',
    'remove',
    'search',
    'settings',
    'upload',
    'user',
    'vote',
    'arrowDown'
];
var lbl_style = 'style';
var styleDefaultValue = 'primary';
var styleGroupId = 'style';
var styleOptions = ['primary', 'secondary', 'tertiary', 'outline', 'destructive'];
var lbl_state = 'state';
var stateDefaultValue = 'idle';
var stateGroupId = 'state';
var stateOptions = ['idle', 'hovered', 'pressed', 'disabled'];
var stateOptionsSmall = ['idle', 'hovered', 'disabled'];
var stateOptionsCancel = ['idle', 'hovered', 'disabled'];
var lbl_size = 'size';
var sizeDefaultValue = 'medium';
var sizeGroupId = 'size';
var sizeOptions = ['medium', 'large'];
var lbl_type = 'type';
var typeDefaultValue = 'button';
var typeGroupId = 'type';
var typeOptions = ['button', 'reset', 'submit'];
react_1.storiesOf("Components/Button", module)
    .addWithJSX("Eximchain Button", utils_1.wInfo("\n    ### Note\n    Example Button Story\n    ### Usage\n    ~~~js\n\n    <Button\n      label={'Enroll'}\n      disabled={false}\n      onClick={() => alert('Button clicked.')}\n      primary={true}\n      ....\n      secondary={false}\n    >\n      Button\n    </Button>\n    ~~~")(function () { return (React.createElement(Button_1.Button, { size: react_2.select(lbl_size, sizeOptions, sizeDefaultValue, sizeGroupId), type: react_2.select(lbl_type, typeOptions, typeDefaultValue, typeGroupId), primary: 'primary' === react_2.select(lbl_style, styleOptions, styleDefaultValue, styleGroupId), secondary: "secondary" === react_2.select(lbl_style, styleOptions, styleDefaultValue, styleGroupId), tertiary: "tertiary" === react_2.select(lbl_style, styleOptions, styleDefaultValue, styleGroupId), outline: "outline" === react_2.select(lbl_style, styleOptions, styleDefaultValue, styleGroupId), destructive: "destructive" === react_2.select(lbl_style, styleOptions, styleDefaultValue, styleGroupId), idle: "idle" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), hovered: "hovered" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), pressed: "pressed" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), disabled: "disabled" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), loader: react_2.boolean("loader", false), onClick: function () { return alert("Button clicked."); } }, react_2.text("Button Title", "Button"))); }))
    .addWithJSX("Eximchain ButtonIcon", utils_1.wInfo("\n    ### Note\n    example button with icon story\n    ### Usage\n    ~~~js\n\n    <Button\n      label={'Enroll'}\n      disabled={false}\n      onClick={() => alert('Button clicked.')}\n      primary={true}\n      ....\n      secondary={false}\n    >\n      <Icon for={'vote'}/> Button\n    </Button>\n\n    ~~~")(function () { return (React.createElement(Button_1.Button, { size: react_2.select(lbl_size, sizeOptions, sizeDefaultValue, styleGroupId), primary: 'primary' === react_2.select(lbl_style, styleOptions, styleDefaultValue, styleGroupId), secondary: "secondary" === react_2.select(lbl_style, styleOptions, styleDefaultValue, styleGroupId), tertiary: "tertiary" === react_2.select(lbl_style, styleOptions, styleDefaultValue, styleGroupId), outline: "outline" === react_2.select(lbl_style, styleOptions, styleDefaultValue, styleGroupId), destructive: "destructive" === react_2.select(lbl_style, styleOptions, styleDefaultValue, styleGroupId), idle: "idle" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), hovered: "hovered" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), pressed: "pressed" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), disabled: "disabled" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), onClick: function () { return alert("Button clicked."); } },
    React.createElement(Icon_1.Icon, { for: react_2.select(label, options, defaultValue, groupId) }),
    "  ",
    react_2.text("Button Title", "Button"))); }))
    .addWithJSX("Eximchain Button Small", utils_1.wInfo("\n    ### Note\n    Example ButtonSmall\n    ### Usage\n    ~~~js\n\n    <ButtonSmall\n      disabled={false}\n      ...\n      onClick={() => alert('Button clicked.')}\n    >\n      Small\n    </Button>\n\n    ~~~")(function () { return (React.createElement(Button_1.ButtonSmall, { hovered: "hovered" === react_2.select(lbl_state, stateOptionsSmall, stateDefaultValue, stateGroupId), disabled: "disabled" === react_2.select(lbl_state, stateOptionsSmall, stateDefaultValue, stateGroupId) }, react_2.text("Button Title", "Button"))); }))
    .addWithJSX("Eximchain ButtonSmall Icon", utils_1.wInfo("\n    ### Note\n    Example Button Small Icon\n    ### Usage\n    ~~~js\n\n    <ButtonSmall\n      disabled={false}\n      ...\n      onClick={() => alert('Button clicked.')}\n    >\n      <Icon For={'more'}/>\n    </Button>\n\n    ~~~")(function () { return (React.createElement(Button_1.ButtonSmall, { hovered: "hovered" === react_2.select(lbl_state, stateOptionsSmall, stateDefaultValue, stateGroupId), disabled: "disabled" === react_2.select(lbl_state, stateOptionsSmall, stateDefaultValue, stateGroupId) },
    React.createElement(Icon_1.Icon, { for: react_2.select(label, options, defaultValue, groupId) }))); }))
    .addWithJSX("Eximchain ButtonCancel", utils_1.wInfo("\n    ### Note\n    Example ButtonCancel\n    ### Usage\n    ~~~js\n\n    <ButtonCancel\n      disabled={false}\n      ...\n      onClick={() => alert('Button clicked.')}\n    ></ButtonCancel>\n\n    ~~~")(function () { return (React.createElement(Button_1.ButtonCancel, { hovered: "hovered" === react_2.select(lbl_state, stateOptionsCancel, stateDefaultValue, stateGroupId), disabled: "disabled" === react_2.select(lbl_state, stateOptionsCancel, stateDefaultValue, stateGroupId) })); }))
    .addWithJSX("Eximchain ButtonClose", utils_1.wInfo("\n    ### Note\n    Example ButtonClose\n    ### Usage\n    ~~~js\n\n    <ButtonClose\n      disabled={false}\n      ...\n      onClick={() => alert('Button clicked.')}\n    ></ButtonClose>\n\n    ~~~")(function () { return (React.createElement(Button_1.ButtonClose, { hovered: "hovered" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), pressed: "pressed" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), disabled: "disabled" === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId) })); }));
//# sourceMappingURL=Button.stories.js.map
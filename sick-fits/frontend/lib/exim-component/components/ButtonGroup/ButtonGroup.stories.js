"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var ButtonGroup_1 = require("./ButtonGroup");
var Button_1 = require("./../Button/Button");
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
var lbl_state = 'state';
var stateDefaultValue = 'idle';
var stateGroupId = 'state';
var stateOptions = ['unselected', 'selected', 'disabled'];
var lbl_size = 'size';
var sizeDefaultValue = 'medium';
var sizeGroupId = 'size';
var sizeOptions = ['small', 'medium', 'large'];
var lbl_align = 'align';
var alignDefaultValue = '';
var alignGroupId = 'align';
var alignOptions = ['none(default)', 'justified', 'vertical'];
react_1.storiesOf("Components/ButtonGroup", module).addWithJSX("Eximchain ButtonGroup", utils_1.wInfo("\n    ### Note\n    example ButtonGroup story\n    ### Usage\n    ~~~js\n    <ButtonGroup\n      justified={false}\n      vertical={false}\n      block={false}\n      size={'medium'}\n    />\n      <Button>BUTTON</Button>\n      <Button>BUTTON</Button>\n      <Button>BUTTON</Button>\n      .....\n    </ButtonGroup>\n    ~~~")(function () { return (React.createElement(ButtonGroup_1.ButtonGroup, { justified: "justified" === react_2.select(lbl_align, alignOptions, alignDefaultValue, alignGroupId), vertical: "vertical" === react_2.select(lbl_align, alignOptions, alignDefaultValue, alignGroupId), block: react_2.boolean("block when vertical align", false), disabled: 'disabled' === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), selected: 'selected' === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), size: react_2.select(lbl_size, sizeOptions, sizeDefaultValue, sizeGroupId) },
    React.createElement(Button_1.Button, null, react_2.text("Button left", "Button Left")),
    React.createElement(Button_1.Button, null, react_2.text("Button middle", "Button Middle")),
    React.createElement(Button_1.Button, null, react_2.text("Button right", "Button Right")))); })).addWithJSX("Eximchain ButtonGroup with Icon", utils_1.wInfo("\n    ### Note\n    example ButtonGroup story\n    ### Usage\n    ~~~js\n    <ButtonGroup\n      justified={false}\n      vertical={false}\n      block={false}\n      size={'meduim'}\n    />\n      <Button><Icon for=\"{vote}\"/><BUTTON</Button>\n      <Button><Icon for=\"{vote}\"/><BUTTON</Button>\n      <Button><Icon for=\"{vote}\"/><BUTTON</Button>\n      .....\n    </ButtonGroup>\n    ~~~")(function () { return (React.createElement(ButtonGroup_1.ButtonGroup, { justified: "justified" === react_2.select(lbl_align, alignOptions, alignDefaultValue, alignGroupId), vertical: "vertical" === react_2.select(lbl_align, alignOptions, alignDefaultValue, alignGroupId), block: react_2.boolean("block when vertical align", false), disabled: 'disabled' === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), selected: 'selected' === react_2.select(lbl_state, stateOptions, stateDefaultValue, stateGroupId), size: react_2.select(lbl_size, sizeOptions, sizeDefaultValue, sizeGroupId) },
    React.createElement(Button_1.Button, null,
        React.createElement(Icon_1.Icon, { for: react_2.select(label, options, defaultValue, groupId) }),
        react_2.text("Button left", "Button Left")),
    React.createElement(Button_1.Button, null,
        React.createElement(Icon_1.Icon, { for: react_2.select(label, options, defaultValue, groupId) }),
        react_2.text("Button middle", "Button Middle")),
    React.createElement(Button_1.Button, null,
        React.createElement(Icon_1.Icon, { for: react_2.select(label, options, defaultValue, groupId) }),
        react_2.text("Button right", "Button Right")))); }));
//# sourceMappingURL=ButtonGroup.stories.js.map
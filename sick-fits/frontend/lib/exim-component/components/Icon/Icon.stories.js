"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var Icon_1 = require("./Icon");
var utils_1 = require("../../utils");
var react_2 = require("@storybook/addon-knobs/react");
var label = 'for';
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
var defaultValue = 'add';
var groupId = 'ICON';
react_1.storiesOf("Components/Icons", module).addWithJSX("Eximchain Icons", utils_1.wInfo("\n    ### Note\n    example Icons story\n    ### Usage\n    ~~~js\n    <Icon For={'add'}/>\n    ~~~")(function () { return (React.createElement(Icon_1.Icon, { for: react_2.select(label, options, defaultValue, groupId) })); }));
//# sourceMappingURL=Icon.stories.js.map
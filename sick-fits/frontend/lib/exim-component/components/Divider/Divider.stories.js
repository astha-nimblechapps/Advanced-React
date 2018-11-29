"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var Divider_1 = require("./Divider");
var utils_1 = require("../../utils");
var react_2 = require("@storybook/addon-knobs/react");
var label = 'style';
var defaultValue = 'primary';
var groupId = 'style';
var options = ['primary', 'secondary'];
react_1.storiesOf("Components/Divider", module).addWithJSX("Eximchain Divider", utils_1.wInfo("\n    ### Note\n    example Divider story\n    ### Usage\n    ~~~js\n    <Divider\n      primary={'primary' === select(label, options, defaultValue, groupId)}\n      secondary={\"secondary\" === select(label, options, defaultValue, groupId)}\n    />\n    ~~~")(function () { return (React.createElement(Divider_1.Divider, { primary: 'primary' === react_2.select(label, options, defaultValue, groupId), secondary: "secondary" === react_2.select(label, options, defaultValue, groupId) })); }));
//# sourceMappingURL=Divider.stories.js.map
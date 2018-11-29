"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ProgressBar_1 = require("./ProgressBar");
var react_1 = require("@storybook/react");
var utils_1 = require("../../utils");
var react_2 = require("@storybook/addon-knobs/react");
react_1.storiesOf("Components/ProgressBar", module).addWithJSX("Eximchain ProgressBar", utils_1.wInfo("\n    ### Note\n    example ProgressBar story\n    ### Usage\n    ~~~js\n    <ProgressBar showPercentage={true} progress={50} caption={'Profile Completion'}/>\n    ~~~")(function () { return (React.createElement(ProgressBar_1.default, { showPercentage: react_2.boolean('show percentage', false), caption: react_2.text('caption', 'Profile Completion'), progress: react_2.number('progress', 50) })); }));
//# sourceMappingURL=ProgressBar.stories.js.map
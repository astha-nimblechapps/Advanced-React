"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var Callout_1 = require("./Callout");
var utils_1 = require("../../utils");
var react_2 = require("@storybook/addon-knobs/react");
var label = 'callout';
var defaultValue = 'middle';
var groupId = 'callout';
var options = ['left', 'middle', 'right'];
react_1.storiesOf("Components/Callout", module).addWithJSX("Eximchain Callout", utils_1.wInfo("\n    ### Note\n    example Callout story\n    ### Usage\n    ~~~js\n    <Callout placement={select(label, options, defaultValue, groupId) as CalloutPlacementOptions} id=\"callout\" calloutContent={text(\"Callout Text\", \"This is the callout text\")}>\n      <span>Hover me to see callout</span>\n    </Callout>\n    ~~~")(function () { return (React.createElement(Callout_1.Callout, { placement: react_2.select(label, options, defaultValue, groupId), id: "callout", calloutContent: react_2.text("Callout Text", "This is the callout text") },
    React.createElement("span", null, "Hover me to see callout"))); }));
//# sourceMappingURL=Callout.stories.js.map
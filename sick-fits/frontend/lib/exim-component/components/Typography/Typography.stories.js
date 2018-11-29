"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var Typography_1 = require("./Typography");
var utils_1 = require("../../utils");
var react_2 = require("@storybook/addon-knobs/react");
var styleConfigs_1 = require("./../../utils/styleConfigs");
var label = 'usedFor';
var defaultValue = 'subtitle';
var groupId = 'usedFor';
var options = Object.keys(styleConfigs_1.TypographyClasses).map(function (key) {
    return key;
});
;
react_1.storiesOf("Components/Typography", module)
    .addWithJSX("Eximchain Typography Headers", utils_1.wInfo("\n    ### Note\n    example Typography story\n    ### Usage\n    ~~~js\n    <Typography h1>...</Typography>\n    ~~~")(function () { return (React.createElement("div", null,
    React.createElement(Typography_1.Typography, { h1: true }, react_2.text("h1", "H1 Replica Std Regular 96pt")),
    React.createElement(Typography_1.Typography, { h2: true }, react_2.text("h2", "H2 Replica Std Regular 60pt")),
    React.createElement(Typography_1.Typography, { h3: true }, react_2.text("h3", "H3 Replica Std Regular 48pt")),
    React.createElement(Typography_1.Typography, { h4: true }, react_2.text("h4", "H4 Replica Std Regular 34pt")),
    React.createElement(Typography_1.Typography, { h5: true }, react_2.text("h5", "H5 Replica Std Bold 28pt")),
    React.createElement(Typography_1.Typography, { h6: true }, react_2.text("h6", "H6 DIN Round Pro Medium 20pt")))); })).addWithJSX("Eximchain Typography", utils_1.wInfo("\n    ### Note\n    example Typography story\n    ### Usage\n    ~~~js\n    <Typography\n      usedFor={'subtitle'}\n    />\n    ~~~")(function () { return (React.createElement(Typography_1.Typography, { useFor: react_2.select(label, options, defaultValue, groupId) }, "This is some long text")); }));
//# sourceMappingURL=Typography.stories.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var Card_1 = require("./Card");
var Typography_1 = require("./../Typography/Typography");
var Label_1 = require("./../Label/Label");
var Button_1 = require("./../Button/Button");
var Avatar_1 = require("./../Avatar/Avatar");
var ProgressBar_1 = require("./../ProgressBar/ProgressBar");
var CheckBox_1 = require("./../CheckBox/CheckBox");
var utils_1 = require("../../utils");
var react_2 = require("@storybook/addon-knobs/react");
react_1.storiesOf("Components/Card", module).addWithJSX("Eximchain Card", utils_1.wInfo("\n    ### Note\n    example Card story\n    ### Usage\n    ~~~js\n    <Card>Content</Card>\n    ~~~")(function () { return (React.createElement("div", null,
    React.createElement(Card_1.Card, null,
        React.createElement("div", { className: "card-cycle" },
            React.createElement(Typography_1.Typography, { h6: true },
                "Cycle #4 ",
                React.createElement(Label_1.Label, { color: "darkNeutral" }, "Open")),
            React.createElement(Typography_1.Typography, { useFor: 'subtitleSmall' },
                React.createElement("i", { className: "fa fa-circle-o-notch fa-spin" }),
                "08:03:27 remaining"))),
    React.createElement(Card_1.Card, null,
        React.createElement("div", { className: "card-inner" },
            React.createElement(Typography_1.Typography, { useFor: 'contentSmall' },
                "You have ",
                React.createElement("span", null, "900 EXC"),
                " of unclaimed tokens from the last governance cycle"),
            React.createElement(Button_1.Button, { tertiary: true }, "Claim Tokens"))),
    React.createElement(Card_1.Card, null,
        React.createElement("div", { className: "card-secondary" },
            React.createElement("div", { className: "card-secondary-left" },
                React.createElement(Typography_1.Typography, { useFor: 'contentSmall' }, "\u201CI nominated Richard for promotion because I believe he will maintain the node well and fairly. He currently works as CEO of Github and is one of the best people I know.\u201D"),
                React.createElement(Avatar_1.Avatar, { src: react_2.text("img", "https://image.ibb.co/eJqyRK/profile.png") }),
                React.createElement("div", { className: "avatar_section" },
                    React.createElement(Typography_1.Typography, { useFor: 'contentSmall' },
                        React.createElement("span", null, "Katie Lau,"),
                        " Nominator"))),
            React.createElement("div", { className: "card-secondary-right" },
                React.createElement(Button_1.Button, { outline: true }, "Vote for richard")))),
    React.createElement(Card_1.Card, null,
        React.createElement("div", { className: "card-primary" },
            React.createElement("div", { className: "card-primary-left" },
                React.createElement(ProgressBar_1.ProgressBar, { showPercentage: react_2.boolean('show percentage', false), caption: react_2.text('caption', 'Profile Completion'), progress: react_2.number('progress', 50) })),
            React.createElement("div", { className: "card-primary-right" },
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(CheckBox_1.CheckBox, { checked: true },
                            React.createElement("span", null, "Account Created"))),
                    React.createElement("li", null,
                        React.createElement(CheckBox_1.CheckBox, { disabled: true },
                            React.createElement("span", null, "Add a bio"))),
                    React.createElement("li", null,
                        React.createElement(CheckBox_1.CheckBox, { disabled: true },
                            React.createElement("span", null, "Add a profile picture"))),
                    React.createElement("li", null,
                        React.createElement(CheckBox_1.CheckBox, { disabled: true },
                            React.createElement("span", null, "Learn how to use Exim Governance"))))))))); }));
//# sourceMappingURL=Card.stories.js.map
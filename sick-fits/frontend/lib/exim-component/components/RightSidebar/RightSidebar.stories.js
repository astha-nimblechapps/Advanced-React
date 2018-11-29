"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var RightSidebar_1 = require("./RightSidebar");
var Button_1 = require("./../Button/Button");
var Icon_1 = require("./../Icon/Icon");
var Card_1 = require("./../Card/Card");
var Typography_1 = require("./../Typography/Typography");
var Label_1 = require("./../Label/Label");
var utils_1 = require("../../utils");
require("./RightSidebar.scss");
react_1.storiesOf("Components/RightSidebar", module).addWithJSX("Eximchain RightSidebar", utils_1.wInfo("\n    ### Note\n    example RightSidebar story\n    ### Usage\n    ~~~js\n    <RightSidebar>\n      <Button primary><Icon for='vote'></Icon> Vote</Button>\n      <Card>\n        <div className=\"card-cycle\">\n        ....\n        </div>\n      </Card>\n      <Card>\n        <div className=\"card-inner\">\n          .....\n        </div>\n      </Card>\n      <div className=\"right_sidebar_full\">\n          <ul className=\"ul_vote\">\n              <li>.....</li>\n          </ul>\n          <ul className=\"ul_vote\">\n              <li>.....</li>\n          </ul>\n      </div>\n    </RightSidebar>\n    ~~~")(function () { return (React.createElement(RightSidebar_1.RightSidebar, null,
    React.createElement(Button_1.Button, { primary: true },
        React.createElement(Icon_1.Icon, { for: 'vote' }),
        " Vote"),
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
    React.createElement("div", { className: "right_sidebar_full" },
        React.createElement("ul", { className: "ul_vote" },
            React.createElement("li", null,
                React.createElement("span", null, "Total Voters"),
                React.createElement("span", null, "1,000")),
            React.createElement("li", null,
                React.createElement("span", null, "Nominators"),
                React.createElement("span", null, "23")),
            React.createElement("li", null,
                React.createElement("span", null, "Voters"),
                React.createElement("span", null, "623"))),
        React.createElement("ul", { className: "ul_vote" },
            React.createElement("li", null,
                React.createElement("span", null, "Total Votes"),
                React.createElement("span", null, "1,000")),
            React.createElement("li", null,
                React.createElement("span", null, "For"),
                React.createElement("span", null, "23")),
            React.createElement("li", null,
                React.createElement("span", null, "Against"),
                React.createElement("span", null, "623")))))); }));
//# sourceMappingURL=RightSidebar.stories.js.map
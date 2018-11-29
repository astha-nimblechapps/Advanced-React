"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var PullOut_1 = require("./PullOut");
var utils_1 = require("../../utils");
var Avatar_1 = require("./../Avatar/Avatar");
var Typography_1 = require("./../Typography/Typography");
var Button_1 = require("./../Button/Button");
var ButtonLink_1 = require("./../ButtonLink/ButtonLink");
var Icon_1 = require("./../Icon/Icon");
var react_2 = require("@storybook/addon-knobs/react");
require("./PullOut.scss");
react_1.storiesOf("Components/PullOut", module).addWithJSX("Eximchain PullOut", utils_1.wInfo("\n    ### Note\n    example PullOut story\n    ### Usage\n    ~~~js\n    <PullOut>\n      <div className=\"nav-sidebar\">\n      ...........\n      </div>\n    </PullOut>\n    ~~~")(function () { return (React.createElement(PullOut_1.PullOut, null,
    React.createElement("div", { className: "nav-sidebar" },
        React.createElement("div", { className: "avatar_section" },
            React.createElement(Avatar_1.Avatar, { src: react_2.text("img", "https://preview.ibb.co/nc6SLe/profile_user.jpg"), badge: react_2.boolean("badge", true) }),
            React.createElement(Typography_1.Typography, { h5: true }, "Michael Smith"),
            React.createElement(Typography_1.Typography, { useFor: 'contentSmall' }, "Controlling 2 Blocks")),
        React.createElement("hr", null),
        React.createElement("div", { className: "nav-sidebar-pad bio-text" },
            React.createElement(Typography_1.Typography, { useFor: 'content' }, "Bio"),
            React.createElement(Typography_1.Typography, { useFor: 'contentSmall' }, "To a general advertiser outdoor advertising is worthy of considers. Outdoor advertising is considered as the oldest form of advertising. Posting bills on wooden boards in the late 19 century led to the birth of the term. Posting bills on wooden boards in the late 19 century led to the birth of the term.")),
        React.createElement("hr", null),
        React.createElement("div", { className: "nav-sidebar-pad add-text" },
            React.createElement(Typography_1.Typography, { useFor: 'subtitleSmall' }, "Address"),
            React.createElement("ul", { className: "address" },
                React.createElement("li", null,
                    React.createElement(ButtonLink_1.ButtonLink, { href: "#" },
                        React.createElement(Icon_1.Icon, { for: 'blockmaker' }),
                        "0xe2daaf29f1ca089b4bdbaaedios")),
                React.createElement("li", null,
                    React.createElement(ButtonLink_1.ButtonLink, { href: "#" },
                        React.createElement(Icon_1.Icon, { for: 'blockmaker' }),
                        "0xe2daaf29f1ca089b4bdbaaedios")),
                React.createElement("li", null,
                    React.createElement(ButtonLink_1.ButtonLink, { href: "#" },
                        React.createElement(Icon_1.Icon, { for: 'blockmaker' }),
                        "0xe2daaf29f1ca089b4bdbaaedios")))),
        React.createElement("hr", null),
        React.createElement("div", { className: "nav-sidebar-pad nomi-text" },
            React.createElement(Typography_1.Typography, { useFor: 'subtitleSmall' }, "NOMINATIONS"),
            React.createElement("ul", { className: "nomination" },
                React.createElement("li", null,
                    React.createElement("div", null,
                        React.createElement(Icon_1.Icon, { for: 'promotion' }),
                        " Promotion"),
                    React.createElement("div", null, "32 Votes"),
                    React.createElement("div", null,
                        React.createElement(ButtonLink_1.ButtonLink, { href: "#", plain: true }, "Vote"))),
                React.createElement("li", null,
                    React.createElement("div", null,
                        React.createElement(Icon_1.Icon, { for: 'demotion' }),
                        " Promotion"),
                    React.createElement("div", null, "32 Votes"),
                    React.createElement("div", null,
                        React.createElement(ButtonLink_1.ButtonLink, { href: "#", plain: true }, "Vote"))),
                React.createElement("li", null,
                    React.createElement("div", null,
                        React.createElement(Icon_1.Icon, { for: 'promotion' }),
                        " Promotion"),
                    React.createElement("div", null, "32 Votes"),
                    React.createElement("div", null,
                        React.createElement(ButtonLink_1.ButtonLink, { href: "#", plain: true }, "Vote"))),
                React.createElement("li", null,
                    React.createElement("div", null,
                        React.createElement(Icon_1.Icon, { for: 'demotion' }),
                        " Promotion"),
                    React.createElement("div", null, "32 Votes"),
                    React.createElement("div", null,
                        React.createElement(ButtonLink_1.ButtonLink, { href: "#", plain: true }, "Vote"))))),
        React.createElement("hr", null),
        React.createElement("div", { className: "nav-sidebar-pad" },
            React.createElement("ul", { className: "nav-sidebar-footer" },
                React.createElement("li", null,
                    React.createElement(Button_1.Button, { tertiary: true }, "Send EXC")),
                React.createElement("li", null,
                    React.createElement(Button_1.Button, { outline: true }, "VIEW PROFILE"))))))); }));
//# sourceMappingURL=PullOut.stories.js.map
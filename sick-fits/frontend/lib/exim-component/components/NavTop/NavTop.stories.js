"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var NavTop_1 = require("./NavTop");
var utils_1 = require("../../utils");
var Search_1 = require("./../Search/Search");
var Dropdown_1 = require("./../Dropdown/Dropdown");
var Typography_1 = require("./../Typography/Typography");
var Icon_1 = require("./../Icon/Icon");
require("./NavTop.scss");
react_1.storiesOf("Components/NavTop", module).addWithJSX("Eximchain NavTop", utils_1.wInfo("\n    ### Note\n    example NavTop story\n    ### Usage\n    ~~~js\n    <NavTop>\n      <div className=\"top-navbar-inner\">\n        ........\n      </div>\n    </NavTop>\n    ~~~")(function () { return (React.createElement(NavTop_1.NavTop, null,
    React.createElement("div", { className: "top-navbar-inner" },
        React.createElement("div", { className: "title" },
            React.createElement(Typography_1.Typography, { h5: true },
                React.createElement(Icon_1.Icon, { for: "user" }),
                "Members")),
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement(Search_1.Search, { placeholder: "Search" })),
            React.createElement("li", null,
                React.createElement(Dropdown_1.Dropdown, null,
                    React.createElement(Dropdown_1.DropdownTrigger, null,
                        React.createElement("img", { src: "https://image.ibb.co/nrJMWU/notification_bell.png" })),
                    React.createElement(Dropdown_1.DropdownContent, null,
                        React.createElement("ul", null,
                            React.createElement("li", null,
                                React.createElement("a", { href: "/profile" }, "Profile")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "/favorites" }, "Favorites")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "/logout" }, "Log Out")))))),
            React.createElement("li", null,
                React.createElement(Dropdown_1.Dropdown, null,
                    React.createElement(Dropdown_1.DropdownTrigger, null,
                        React.createElement("img", { src: "https://image.ibb.co/eJqyRK/profile.png" })),
                    React.createElement(Dropdown_1.DropdownContent, null,
                        React.createElement("ul", null,
                            React.createElement("li", null,
                                React.createElement("a", { href: "/profile" }, "Profile")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "/favorites" }, "Favorites")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "/logout" }, "Log Out")))))))))); }));
//# sourceMappingURL=NavTop.stories.js.map
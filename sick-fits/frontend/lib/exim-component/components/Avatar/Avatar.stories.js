"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path='./../../../globals.d.ts'/>
var React = require("react");
var react_1 = require("@storybook/react");
var Avatar_1 = require("./Avatar");
var utils_1 = require("../../utils");
var react_2 = require("@storybook/addon-knobs/react");
react_1.storiesOf("Components/Avatar", module).addWithJSX("Eximchain Avatar", utils_1.wInfo("\n    ### Note\n    example Avatar story\n    ### Usage\n    ~~~js\n    //Default avatar\n    <Avatar/>\n\n    //Custom avatar\n    <Avatar src={text(\"img\", \"https://image.ibb.co/eJqyRK/profile.png\")}></Avatar>\n\n    //Avatar with badge\n    <Avatar src={text(\"img\", \"https://preview.ibb.co/nc6SLe/profile_user.jpg\")} badge={boolean(\"badge\", true)}></Avatar>\n\n    //Avatar with badge value\n    <Avatar src={text(\"img\", \"https://preview.ibb.co/nc6SLe/profile_user.jpg\")} badge={text(\"badgeValue\", \"5\")}></Avatar>\n    ~~~")(function () { return (React.createElement("div", null,
    React.createElement("div", null,
        React.createElement("p", null, "Default Avatar"),
        React.createElement(Avatar_1.Avatar, null)),
    React.createElement("div", null,
        React.createElement("p", null, "Custom Avatar"),
        React.createElement(Avatar_1.Avatar, { src: react_2.text("img", "https://image.ibb.co/eJqyRK/profile.png") })),
    React.createElement("div", null,
        React.createElement("p", null, "Avatar with badge"),
        React.createElement(Avatar_1.Avatar, { src: react_2.text("img", "https://preview.ibb.co/nc6SLe/profile_user.jpg"), badge: react_2.boolean("badge", true) })),
    React.createElement("div", null,
        React.createElement("p", null, "Avatar with badge value"),
        React.createElement(Avatar_1.Avatar, { src: react_2.text("img", "https://preview.ibb.co/nc6SLe/profile_user.jpg"), badge: react_2.text("badgeValue", "5") })))); }));
//# sourceMappingURL=Avatar.stories.js.map
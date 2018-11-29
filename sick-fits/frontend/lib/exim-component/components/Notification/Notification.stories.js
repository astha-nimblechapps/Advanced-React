"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Notification_1 = require("./Notification");
var react_1 = require("@storybook/react");
var utils_1 = require("../../utils");
var react_2 = require("@storybook/addon-knobs/react");
react_1.storiesOf("Components/Notification", module).addWithJSX("Eximchain Notification", utils_1.wInfo("\n    ### Note\n    example Notification story\n    ### Usage\n    ~~~js\n    <Notification avatarImg={imgSrc} title={title} timestamp={timestamp}></Notification>\n    ~~~")(function () { return (React.createElement(Notification_1.default, { avatarImg: react_2.text("img", "https://preview.ibb.co/nc6SLe/profile_user.jpg"), title: react_2.text("title", "Micheal Smith has nominated you for promotion."), timestamp: "May 5 at 9.39am" })); }));
//# sourceMappingURL=Notification.stories.js.map
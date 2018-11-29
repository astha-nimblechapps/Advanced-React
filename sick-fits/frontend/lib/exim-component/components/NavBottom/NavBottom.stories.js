"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var NavBottom_1 = require("./NavBottom");
var Button_1 = require("./../Button/Button");
var Button_2 = require("./../Button/Button");
var utils_1 = require("../../utils");
react_1.storiesOf("Components/NavBottom", module).addWithJSX("Eximchain NavBottom", utils_1.wInfo("\n    ### Note\n    example NavBottom story\n    ### Usage\n    ~~~js\n    <NavBottom>\n      .....\n      <ButtonCancel> Cancel </ButtonCancel>\n      <Button primary> Save </Button>\n      ....\n    </NavBottom>\n    ~~~")(function () { return (React.createElement(NavBottom_1.NavBottom, null,
    React.createElement(Button_2.ButtonCancel, null, " Cancel "),
    React.createElement(Button_1.Button, { primary: true }, " Save "))); }));
//# sourceMappingURL=NavBottom.stories.js.map
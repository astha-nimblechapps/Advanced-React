"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var Search_1 = require("./Search");
var utils_1 = require("../../utils");
var react_2 = require("@storybook/addon-knobs/react");
react_1.storiesOf("Components/Search", module).addWithJSX("Eximchain Search", utils_1.wInfo("\n    ### Note\n    example Search story\n    ### Usage\n    ~~~js\n    <Search placeholder={text(\"placeholder\", \"Search\")}></Search>\n    ~~~")(function () { return (React.createElement(Search_1.Search, { placeholder: react_2.text("placeholder", "Search") })); }));
//# sourceMappingURL=Search.stories.js.map
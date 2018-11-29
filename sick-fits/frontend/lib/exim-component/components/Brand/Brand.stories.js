"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var Brand_1 = require("./Brand");
var utils_1 = require("../../utils");
var react_2 = require("@storybook/addon-knobs/react");
react_1.storiesOf("Components/Brand", module)
    .addWithJSX("Eximchain Brand Logo", utils_1.wInfo("\n    ### Note\n    example Brand story - Logo\n    ### Usage\n    ~~~js\n    <Brand logo type={'dark'} onClick={ () => { alert('Handle click') } />\n    ~~~")(function () {
    var label = 'logo';
    var defaultValue = 'exim';
    var groupId = 'logo';
    var options = ['exim', 'dark', 'blue', 'white', 'blueOnWhite'];
    return (React.createElement(Brand_1.Brand, { logo: true, style: react_2.select(label, options, defaultValue, groupId) }));
}))
    .addWithJSX("Eximchain Brand Token", utils_1.wInfo("\n    ### Note\n    example Brand story - Token\n    ### Usage\n    ~~~js\n    <Brand token type={'blue'} onClick={ () => { alert('Handle click') } />\n    ~~~")(function () {
    var label = 'token';
    var defaultValue = 'white';
    var groupId = 'token';
    var options = ['white', 'black', 'blue'];
    return (React.createElement(Brand_1.Brand, { token: true, style: react_2.select(label, options, defaultValue, groupId) }));
}))
    .addWithJSX("Eximchain Brand Token Circle", utils_1.wInfo("\n    ### Note\n    example Brand story - Token circle\n    ### Usage\n    ~~~js\n    <Brand tokenCircle type={'black-on-white'} onClick={ () => { alert('Handle click') } />\n    ~~~")(function () {
    var label = 'tokenCircle';
    var defaultValue = 'blackOnWhite';
    var groupId = 'tokenCircle';
    var options = ['blackOnWhite', 'whiteOnBlack', 'blueOnWhite', 'whiteOnBlue'];
    return (React.createElement(Brand_1.Brand, { tokenCircle: true, style: react_2.select(label, options, defaultValue, groupId) }));
}));
//# sourceMappingURL=Brand.stories.js.map
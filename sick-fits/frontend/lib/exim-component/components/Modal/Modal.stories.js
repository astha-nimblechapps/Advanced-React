"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path='./../../../globals.d.ts'/>
var React = require("react");
var react_1 = require("@storybook/react");
var Modal_1 = require("./Modal");
var Button_1 = require("./../Button/Button");
var Typography_1 = require("./../Typography/Typography");
var Avatar_1 = require("./../Avatar/Avatar");
var ButtonLink_1 = require("./../ButtonLink/ButtonLink");
var Input_1 = require("./../Input/Input");
var utils_1 = require("../../utils");
var react_2 = require("@storybook/addon-knobs/react");
var Media = require("./../../images/media.svg");
var Group = require("./../../images/group.svg");
var lbl_size = 'size';
var sizeDefaultValue = 'medium';
var sizeGroupId = 'size';
var sizeOptions = ['small', 'medium', 'large'];
react_1.storiesOf("Components/Modal", module).addWithJSX("Eximchain Modal", utils_1.wInfo("\n    ### Note\n    example Modal Primary\n    ### Usage\n    ~~~js\n    <Modal show={boolean('show', true)} onHide={() => console.log('On hide')} size={select(lbl_size, sizeOptions, sizeDefaultValue, sizeGroupId) as ModalSizeOptions}>\n      <Modal.Header closeButton>\n        <Modal.Title>\n          Modal Header\n         </Modal.Title>\n      </Modal.Header>\n      <Modal.Body>\n        ........\n      </Modal.Body>\n      <Modal.Footer>\n        ........\n      </Modal.Footer>\n    </Modal>\n    ~~~")(function () { return (React.createElement(Modal_1.Modal, { show: react_2.boolean('show', true), onHide: function () { return console.log('On hide'); }, size: react_2.select(lbl_size, sizeOptions, sizeDefaultValue, sizeGroupId) },
    React.createElement(Modal_1.Modal.Header, { closeButton: true },
        React.createElement(Modal_1.Modal.Title, null, "Modal Header")),
    React.createElement(Modal_1.Modal.Body, null,
        React.createElement("div", { className: "modal_cnt_demo" }, "Modal Body")),
    React.createElement(Modal_1.Modal.Footer, null,
        React.createElement(Button_1.Button, { primary: true }, "Button")))); })).addWithJSX("Eximchain Modal single", utils_1.wInfo("\n    ### Note\n    example Modal Single\n    ### Usage\n    ~~~js\n    <Modal show={boolean('show', true)} onHide={() => console.log('On hide')} size={select(lbl_size, sizeOptions, sizeDefaultValue, sizeGroupId) as ModalSizeOptions}>\n      <Modal.Header closeButton>\n        <Modal.Title>\n          Modal Header\n         </Modal.Title>\n      </Modal.Header>\n      <Modal.Body>\n        .........\n      </Modal.Body>\n      <Modal.Footer>\n        .........\n      </Modal.Footer>\n    </Modal>\n    ~~~")(function () { return (React.createElement(Modal_1.Modal, { show: react_2.boolean('show', true), onHide: function () { return console.log('On hide'); }, size: react_2.select(lbl_size, sizeOptions, sizeDefaultValue, sizeGroupId) },
    React.createElement(Modal_1.Modal.Header, { closeButton: true },
        React.createElement(Modal_1.Modal.Title, null, "Modal Header")),
    React.createElement(Modal_1.Modal.Body, null,
        React.createElement("div", { className: "modal-single-option-body" },
            React.createElement(Avatar_1.Avatar, { src: Media }),
            React.createElement(Typography_1.Typography, { h6: true }, "This is a heading"),
            React.createElement(Typography_1.Typography, { useFor: "contentSmall" }, "This is a subheading with a bit more description"))),
    React.createElement(Modal_1.Modal.Footer, null,
        React.createElement("div", { className: "modal-single-option-footer" },
            React.createElement(Button_1.Button, { primary: true }, "Button"))))); })).addWithJSX("Eximchain Modal Signin", utils_1.wInfo("\n    ### Note\n    example Modal Signin\n    ### Usage\n    ~~~js\n    <Modal show={boolean('show', true)} onHide={() => console.log('On hide')} size={select(lbl_size, sizeOptions, sizeDefaultValue, sizeGroupId) as ModalSizeOptions}>\n      <div className=\"signin_header\">\n        <div className=\"brand-exim-short\"></div>\n        <Typography useFor=\"content\">Eximchain\u2019s blockchain network</Typography>\n      </div>\n      <Modal.Body>\n        ........\n      </Modal.Body>\n      <Modal.Footer>\n        ........\n      </Modal.Footer>\n    </Modal>\n    ~~~")(function () { return (React.createElement(Modal_1.Modal, { show: react_2.boolean('show', true), onHide: function () { return console.log('On hide'); }, size: react_2.select(lbl_size, sizeOptions, sizeDefaultValue, sizeGroupId) },
    React.createElement("div", { className: "signin_header" },
        React.createElement("div", { className: "brand-exim-short" }),
        React.createElement(Typography_1.Typography, { useFor: "content" }, "Eximchain\u2019s blockchain network")),
    React.createElement(Modal_1.Modal.Body, null,
        React.createElement("div", { className: "modal-signin" },
            React.createElement(Typography_1.Typography, { h5: true }, "Sign In"),
            React.createElement("div", { className: "input-group" },
                React.createElement(Input_1.Input, { type: 'text', placeholder: 'email' })),
            React.createElement(ButtonLink_1.ButtonLink, { link: true }, "Forgot email?"))),
    React.createElement(Modal_1.Modal.Footer, null,
        React.createElement("div", { className: "signin_footer" },
            React.createElement("div", { className: "signin_footer_left" },
                React.createElement(ButtonLink_1.ButtonLink, { link: true }, "Create account")),
            React.createElement("div", { className: "signin_footer_right" },
                React.createElement(Button_1.Button, { primary: true }, "Next")))),
    React.createElement("ul", { className: "terms_ul" },
        React.createElement("li", null,
            React.createElement("a", { href: "#" },
                "English ",
                React.createElement("i", { className: "fa fa-caret-down" }))),
        React.createElement("li", null,
            React.createElement("a", { href: "#" }, "Privacy")),
        React.createElement("li", null,
            React.createElement("a", { href: "#" }, "Terms"))))); })).addWithJSX("Eximchain Modal Signup", utils_1.wInfo("\n    ### Note\n    example Modal Signup\n    ### Usage\n    ~~~js\n    <Modal show={boolean('show', true)} onHide={() => console.log('On hide')} size={select(lbl_size, sizeOptions, sizeDefaultValue, sizeGroupId) as ModalSizeOptions}>\n      <Modal.Header closeButton>\n        ...\n      </Modal.Header>\n      <Modal.Body>\n      ...\n      </Modal.Body>\n      <Modal.Footer>\n        ...\n      </Modal.Footer>\n    </Modal>\n    ~~~")(function () { return (React.createElement(Modal_1.Modal, { show: react_2.boolean('show', true), onHide: function () { return console.log('On hide'); }, size: react_2.select(lbl_size, sizeOptions, sizeDefaultValue, sizeGroupId) },
    React.createElement("div", { className: "signin_header" },
        React.createElement("div", { className: "brand-exim-short" }),
        React.createElement(Typography_1.Typography, { useFor: "content" }, "Eximchain\u2019s blockchain network")),
    React.createElement("div", { className: "signup_modal" },
        React.createElement("div", { className: "signup_modal_left" },
            React.createElement(Typography_1.Typography, { h5: true }, "Create Account"),
            React.createElement("div", { className: "input-group" },
                React.createElement(Input_1.Input, { type: 'text', placeholder: 'email' })),
            React.createElement("div", { className: "input-group-left" },
                React.createElement(Input_1.Input, { type: 'password', placeholder: 'password' })),
            React.createElement("div", { className: "input-group-right" },
                React.createElement(Input_1.Input, { type: 'password', placeholder: 'confirm password' })),
            React.createElement("div", { className: "input-group" },
                React.createElement(Typography_1.Typography, { useFor: "caption" },
                    "*you must have passed our KYC Process to create a valid account. ",
                    React.createElement("a", { href: "" }, "Learn more"))),
            React.createElement("div", { className: "input-group-btn-left" },
                React.createElement(ButtonLink_1.ButtonLink, { link: true }, "Sign in instead")),
            React.createElement("div", { className: "input-group-btn-right" },
                React.createElement(Button_1.Button, { primary: true }, "Next"))),
        React.createElement("div", { className: "signup_modal_right" },
            React.createElement(Avatar_1.Avatar, { src: Group }),
            React.createElement(Typography_1.Typography, { useFor: "contentSmall" }, "A secure, collaborative blockchain governance mechanism"))),
    React.createElement("ul", { className: "terms_ul" },
        React.createElement("li", null,
            React.createElement("a", { href: "#" },
                "English ",
                React.createElement("i", { className: "fa fa-caret-down" }))),
        React.createElement("li", null,
            React.createElement("a", { href: "#" }, "Privacy")),
        React.createElement("li", null,
            React.createElement("a", { href: "#" }, "Terms"))))); }));
//# sourceMappingURL=Modal.stories.js.map
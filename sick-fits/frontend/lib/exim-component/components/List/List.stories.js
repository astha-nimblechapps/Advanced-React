"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var List_1 = require("./List");
var Avatar_1 = require("./../Avatar/Avatar");
var Typography_1 = require("./../Typography/Typography");
var Button_1 = require("./../Button/Button");
var Icon_1 = require("./../Icon/Icon");
var utils_1 = require("../../utils");
var react_2 = require("@storybook/addon-knobs/react");
var Profile = require("./../../images/profile-pic.svg");
var label = 'List section style';
var styleDefaultValue = 'primary';
var styleGroupId = 'style';
var styleOptions = ['primary', 'secondary'];
react_1.storiesOf("Components/List", module).addWithJSX("Eximchain List", utils_1.wInfo("\n    ### Note\n    example List story\n    ### Usage\n    ~~~js\n    <List>\n        <List.Section primary={true}>\n            User Profile\n        </List.Section>\n\n        <List.Content>\n          <List.Item>\n            .....\n          </List.Item>\n          ...\n        </List.Content>\n      </List>\n    ~~~")(function () {
    var items = [
        React.createElement("div", null,
            React.createElement("div", { className: "list-column-one" },
                React.createElement(Avatar_1.Avatar, { src: Profile }),
                React.createElement(Typography_1.Typography, { useFor: 'plexMonoMed' }, "Katie Lau")),
            React.createElement("div", { className: "list-column-two" },
                React.createElement("div", { className: "rectangle" })),
            React.createElement("div", { className: "list-column-three" },
                React.createElement(Typography_1.Typography, { useFor: 'plexMonoMed' }, "339 Votes")),
            React.createElement("div", { className: "list-column-four" },
                React.createElement(Button_1.ButtonSmall, null, react_2.text("Button Title", "Vote")),
                React.createElement(Button_1.ButtonSmall, null,
                    React.createElement(Icon_1.Icon, { for: 'more' })))),
        React.createElement("div", null,
            React.createElement("div", { className: "list-column-one" },
                React.createElement(Avatar_1.Avatar, { src: Profile }),
                React.createElement(Typography_1.Typography, { useFor: 'plexMonoMed' }, "Katie Lau")),
            React.createElement("div", { className: "list-column-two" },
                React.createElement("div", { className: "rectangle" })),
            React.createElement("div", { className: "list-column-three" },
                React.createElement(Typography_1.Typography, { useFor: 'plexMonoMed' }, "339 Votes")),
            React.createElement("div", { className: "list-column-four" },
                React.createElement(Button_1.ButtonSmall, null, react_2.text("Button Title", "Vote")),
                React.createElement(Button_1.ButtonSmall, null,
                    React.createElement(Icon_1.Icon, { for: 'more' })))),
        React.createElement("div", null,
            React.createElement("div", { className: "list-column-one" },
                React.createElement(Avatar_1.Avatar, { src: Profile }),
                React.createElement(Typography_1.Typography, { useFor: 'plexMonoMed' }, "Katie Lau")),
            React.createElement("div", { className: "list-column-two" },
                React.createElement("div", { className: "rectangle" })),
            React.createElement("div", { className: "list-column-three" },
                React.createElement(Typography_1.Typography, { useFor: 'plexMonoMed' }, "339 Votes")),
            React.createElement("div", { className: "list-column-four" },
                React.createElement(Button_1.ButtonSmall, null, react_2.text("Button Title", "Vote")),
                React.createElement(Button_1.ButtonSmall, null,
                    React.createElement(Icon_1.Icon, { for: 'more' })))),
        React.createElement("div", null,
            React.createElement("div", { className: "list-column-one" },
                React.createElement(Avatar_1.Avatar, { src: Profile }),
                React.createElement(Typography_1.Typography, { useFor: 'plexMonoMed' }, "Katie Lau")),
            React.createElement("div", { className: "list-column-two" },
                React.createElement("div", { className: "rectangle" })),
            React.createElement("div", { className: "list-column-three" },
                React.createElement(Typography_1.Typography, { useFor: 'plexMonoMed' }, "339 Votes")),
            React.createElement("div", { className: "list-column-four" },
                React.createElement(Button_1.ButtonSmall, null, react_2.text("Button Title", "Vote")),
                React.createElement(Button_1.ButtonSmall, null,
                    React.createElement(Icon_1.Icon, { for: 'more' })))),
        React.createElement("div", null,
            React.createElement("div", { className: "list-column-one" },
                React.createElement(Avatar_1.Avatar, { src: Profile }),
                React.createElement(Typography_1.Typography, { useFor: 'plexMonoMed' }, "Katie Lau")),
            React.createElement("div", { className: "list-column-two" },
                React.createElement("div", { className: "rectangle" })),
            React.createElement("div", { className: "list-column-three" },
                React.createElement(Typography_1.Typography, { useFor: 'plexMonoMed' }, "339 Votes")),
            React.createElement("div", { className: "list-column-four" },
                React.createElement(Button_1.ButtonSmall, null, react_2.text("Button Title", "Vote")),
                React.createElement(Button_1.ButtonSmall, null,
                    React.createElement(Icon_1.Icon, { for: 'more' }))))
    ];
    return (React.createElement(List_1.List, { items: items },
        React.createElement(List_1.List.Section, { primary: "primary" === react_2.select(label, styleOptions, styleDefaultValue, styleGroupId), secondary: "secondary" === react_2.select(label, styleOptions, styleDefaultValue, styleGroupId) }, react_2.text("Section Title", "User Profile"))));
}));
//# sourceMappingURL=List.stories.js.map
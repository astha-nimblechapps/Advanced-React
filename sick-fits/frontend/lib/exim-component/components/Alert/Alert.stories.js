"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var Alert_1 = require("./Alert");
var utils_1 = require("../../utils");
var react_2 = require("@storybook/addon-knobs/react");
var alert_color = 'type';
var alertDefaultValue = 'success';
var alertGroupId = 'style';
var alertOptions = ['success', 'caution', 'error'];
react_1.storiesOf("Components/Alert", module).addWithJSX("Eximchain Alert", utils_1.wInfo("\n    ### Note\n    example Alert story\n    ### Usage\n    ~~~js\n    <Alert\n      success={\"success\" === select(alert_color, alertOptions, alertDefaultValue, alertGroupId)}\n      caution={\"caution\" === select(alert_color, alertOptions, alertDefaultValue, alertGroupId)}\n      error={\"error\" === select(alert_color, alertOptions, alertDefaultValue, alertGroupId)}\n    >\n      {text(\"Alert Text\", \"Your changes have been saved\")}\n    </Alert>\n    ~~~")(function () { return (React.createElement(Alert_1.Alert, { success: "success" === react_2.select(alert_color, alertOptions, alertDefaultValue, alertGroupId), caution: "caution" === react_2.select(alert_color, alertOptions, alertDefaultValue, alertGroupId), error: "error" === react_2.select(alert_color, alertOptions, alertDefaultValue, alertGroupId) }, react_2.text("Alert Text", "Your changes have been saved"))); }));
//# sourceMappingURL=Alert.stories.js.map
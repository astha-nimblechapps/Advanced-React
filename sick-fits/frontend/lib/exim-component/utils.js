"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addon_info_1 = require("@storybook/addon-info");
var wInfoStyle = require("./styles.json");
function wInfo(text) {
    return addon_info_1.withInfo({ inline: true, source: false, styles: wInfoStyle, text: text });
}
exports.wInfo = wInfo;
//# sourceMappingURL=utils.js.map
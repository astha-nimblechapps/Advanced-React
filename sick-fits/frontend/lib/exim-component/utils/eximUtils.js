"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styleConfigs_1 = require("./styleConfigs");
exports.COLORS = {
    NEUTRALS: ['rgb(255,255,255)', 'rgb(247,248,249)', 'rgb(240,242,244)', 'rgb(224,227,232)', 'rgb(207,210,215)', 'rgb(183,190,198)', 'rgb(154,162,175)', 'rgb(141,149,161)', 'rgb(98,107,118)', 'rgb(81,87,98)', 'rgb(43,51,63)', 'rgb(36,42,47)'],
    BLUES: ['rgb(240,246,253)', 'rgb(130,179,231)', 'rgb(38,126,220)', 'rgb(6,103,208)', 'rgb(0,90,187)', 'rgb(33,72,133)', 'rgb(15,41,82)', 'rgb(22,43,77)'],
    STATES: ['rgb(204,65,73)', 'rgb(52,180,126)', 'rgb(246,190,125)', 'rgb(141,80,170)', 'rgb(124,118,118)', 'rgb(107,117,112)', 'rgb(140,135,129)', 'rgb(107,107,110)', 'rgb(255,244,244)', 'rgb(234,244,238)', 'rgb(255,248,236)', 'rgb(241,241,243)']
};
exports.ValidationClasses = Object.values(styleConfigs_1.ValidationStates);
function prefix(baseClass, style) {
    return baseClass + (style ? '-' + style : '');
}
exports.prefix = prefix;
function getValidationClass(validationState) {
    if (!validationState)
        return '';
    var i = exports.ValidationClasses.indexOf(validationState);
    return (i > -1) ? ('has-' + exports.ValidationClasses[i]) : '';
}
exports.getValidationClass = getValidationClass;
//# sourceMappingURL=eximUtils.js.map
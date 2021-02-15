"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var RootContainer_1 = require("./RootContainer");
var TextContainer = function () {
    console.log("update textcontainer!");
    var _a = react_1.useState(""), valueText = _a[0], setValueText = _a[1];
    function textChange(e) {
        setValueText(e.target.value);
    }
    var state = react_1.useContext(RootContainer_1.IndexState);
    var dispatch = react_1.useContext(RootContainer_1.DispatchContext).dispatch;
    function handleClick() {
        dispatch({
            type: 'create',
            id: state.length,
            text: valueText,
            doUpdate: false
        });
        setValueText("");
    }
    state.forEach(function (element) {
        if (element.doUpdate) {
            ;
            dispatch({
                type: 'update',
                id: element.id,
                text: valueText,
                doUpdate: false
            });
        }
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("input", { type: "text", onChange: textChange, value: valueText }),
        react_1.default.createElement("button", { onClick: handleClick }, "+")));
};
exports.default = TextContainer;

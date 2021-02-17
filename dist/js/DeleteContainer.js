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
var DeleteContainer = function (_a) {
    var Id = _a.Id, Text = _a.Text;
    var dispatch = react_1.useContext(RootContainer_1.DispatchContext).dispatch;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", null,
            Id,
            Text,
            react_1.default.createElement("button", { type: "submit", onClick: function () {
                    dispatch({
                        type: "delete",
                        id: Id,
                        text: "",
                        doUpdate: false,
                    });
                } }, "\u00D7"))));
};
exports.default = DeleteContainer;

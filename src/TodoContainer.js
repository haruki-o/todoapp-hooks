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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var DeleteContainer_1 = __importDefault(require("./DeleteContainer"));
var RootContainer_1 = require("./RootContainer");
var UpdateContainer_1 = __importDefault(require("./UpdateContainer"));
var TodoContainer = function () {
    var state = react_1.useContext(RootContainer_1.IndexState);
    return (react_1.default.createElement(react_1.default.Fragment, null, state.map(function (todo) {
        if (todo.id > 0) {
            return (react_1.default.createElement("div", { key: todo.id },
                react_1.default.createElement(DeleteContainer_1.default, { Id: todo.id, Text: todo.text }),
                react_1.default.createElement("span", null, "  "),
                react_1.default.createElement(UpdateContainer_1.default, { Id: todo.id })));
        }
    })));
};
exports.default = TodoContainer;

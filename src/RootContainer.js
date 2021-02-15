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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispatchContext = exports.IndexState = void 0;
var react_1 = __importStar(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var CreateContainer_1 = __importDefault(require("./CreateContainer"));
var TodoContainer_1 = __importDefault(require("./TodoContainer"));
exports.IndexState = react_1.createContext([{ id: 0, text: "", doUpdate: false }]);
exports.DispatchContext = react_1.createContext({});
var RootContainer = function () {
    var initialState = [
        { id: 0, text: "", doUpdate: false }
    ];
    var reducer = function (state, action) {
        switch (action.type) {
            case 'create':
                return __spreadArrays(state, [{ id: action.id, text: action.text, doUpdate: false }]);
            case 'delete':
                var varState = __spreadArrays(state);
                varState.splice(action.id, 1);
                var youstate = varState.map(function (x) {
                    if (x.id > action.id) {
                        return { id: x.id -= 1, text: x.text, doUpdate: false };
                    }
                    else {
                        return x;
                    }
                });
                return youstate;
            case 'updateNotice':
                var letState = __spreadArrays(state);
                var offState = letState.map(function (x) {
                    if (x.id === action.id) {
                        return { id: x.id, text: x.text, doUpdate: true };
                    }
                    else {
                        return x;
                    }
                });
                return offState;
            case 'update':
                var varState3 = __spreadArrays(state);
                var llState = varState3.map(function (x) {
                    if (x.id === action.id) {
                        return { id: x.id, text: action.text, doUpdate: false };
                    }
                    else {
                        return x;
                    }
                });
                return llState;
        }
    };
    var _a = react_1.useReducer(reducer, initialState), state = _a[0], dispatch = _a[1];
    console.log("update rootcontainer");
    console.log(state);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(exports.DispatchContext.Provider, { value: { dispatch: dispatch } },
            react_1.default.createElement(exports.IndexState.Provider, { value: state },
                react_1.default.createElement(CreateContainer_1.default, null),
                react_1.default.createElement(TodoContainer_1.default, null)))));
};
react_dom_1.default.render(react_1.default.createElement(RootContainer, null), document.getElementById('root'));

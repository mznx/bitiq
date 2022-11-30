"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = exports.Get = exports.Request = exports.Controller = void 0;
const Router_1 = require("../Router");
function Controller(path) {
    const defaultPath = '/';
    const p = path || defaultPath;
    return (target) => {
        Reflect.setMetadata(target, 'path', p);
    };
}
exports.Controller = Controller;
function Request(method) {
    return (path) => {
        const defaultPath = '';
        const p = path || defaultPath;
        return (target, key, desc) => {
            Reflect.setMetadata(desc.value, 'path', p);
            Reflect.setMetadata(desc.value, 'method', method);
        };
    };
}
exports.Request = Request;
exports.Get = Request(Router_1.HttpMethod.GET);
exports.Post = Request(Router_1.HttpMethod.POST);

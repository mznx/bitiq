"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = exports.Request = exports.Controller = void 0;
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
        const defaultPath = '/';
        const p = path || defaultPath;
        return (target, key, desc) => {
            Reflect.setMetadata(desc.value, 'path', p);
            Reflect.setMetadata(desc.value, 'method', method);
        };
    };
}
exports.Request = Request;
exports.Post = Request('POST');

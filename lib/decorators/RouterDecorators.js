"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = exports.Controller = void 0;
function Controller(path) {
    const defaultPath = '/';
    const p = path || defaultPath;
    return (target) => {
        Reflect.setMetadata(target, 'path', p);
    };
}
exports.Controller = Controller;
function Post(path) {
    const defaultPath = '/';
    const p = path || defaultPath;
    return (target, key, desc) => {
        Reflect.setMetadata(desc.value, 'path', p);
        Reflect.setMetadata(desc.value, 'method', 'post');
    };
}
exports.Post = Post;

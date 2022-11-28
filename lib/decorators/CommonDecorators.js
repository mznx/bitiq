"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = void 0;
function Module(param) {
    return (target) => {
        Reflect.setMetadata(target, 'model', param.model);
        Reflect.setMetadata(target, 'import', param.import);
        Reflect.setMetadata(target, 'controller', param.controller);
    };
}
exports.Module = Module;

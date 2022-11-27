"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () {
    const metadataStorage = new Map();
    Reflect.setMetadata = function (target, key, value) {
        let targetMetadata = metadataStorage.get(target);
        if (!targetMetadata) {
            targetMetadata = new Map();
            metadataStorage.set(target, targetMetadata);
        }
        targetMetadata.set(key, value);
        return true;
    };
    Reflect.getMetadata = function (target, key) {
        let targetMetadata = metadataStorage.get(target);
        if (!targetMetadata) {
            return undefined;
        }
        return targetMetadata.get(key);
    };
})();

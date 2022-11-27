export default (function() {
    const metadataStorage = new Map();


    Reflect.setMetadata = function(target: any, key: string, value: any) {
        let targetMetadata = metadataStorage.get(target);

        if (!targetMetadata) {
            targetMetadata = new Map();
            metadataStorage.set(target, targetMetadata);
        }

        targetMetadata.set(key, value);

        return true;
    }


    Reflect.getMetadata = function(target: any, key: string) {
        let targetMetadata = metadataStorage.get(target);

        if (!targetMetadata) {
            return undefined;
        }

        return targetMetadata.get(key);
    }
})();

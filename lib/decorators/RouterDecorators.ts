export function Controller(path?: string) {
    const defaultPath = '/';
    const p = path || defaultPath;

    return (target: any) => {
        Reflect.setMetadata(target, 'path', p);
    };
}


export function Request(method: string) {
    return (path?: string) => {
        const defaultPath = '/';
        const p = path || defaultPath;

        return (target: any, key: string, desc: TypedPropertyDescriptor<any>) => {
            Reflect.setMetadata(desc.value, 'path', p);
            Reflect.setMetadata(desc.value, 'method', method);
        }
    }
}


export const Post = Request('POST');

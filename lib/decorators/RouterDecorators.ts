export function Controller(path?: string) {
    const defaultPath = '/';
    const p = path || defaultPath;

    return (target: any) => {
        Reflect.setMetadata(target, 'path', p);
    };
}


export function Post(path?: string): any {
    const defaultPath = '/';
    const p = path || defaultPath;

    return (target: any, key: any, desc: any) => {
        Reflect.setMetadata(desc.value, 'path', p);
        Reflect.setMetadata(desc.value, 'method', 'post');
    }
}

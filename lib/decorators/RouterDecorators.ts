import { HttpMethod } from "../Router";


export function Controller(path?: string) {
    const defaultPath = '/';
    const p = path || defaultPath;

    return (target: any) => {
        Reflect.setMetadata(target, 'path', p);
    };
}


export function Request(method: HttpMethod) {
    return (path?: string) => {
        const defaultPath = '';
        const p = path || defaultPath;

        return (target: any, key: string, desc: TypedPropertyDescriptor<any>) => {
            Reflect.setMetadata(desc.value, 'path', p);
            Reflect.setMetadata(desc.value, 'method', method);
        }
    }
}


export const Get = Request(HttpMethod.GET);


export const Post = Request(HttpMethod.POST);

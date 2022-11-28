export declare function Controller(path?: string): (target: any) => void;
export declare function Request(method: string): (path?: string) => (target: any, key: string, desc: TypedPropertyDescriptor<any>) => void;
export declare const Post: (path?: string) => (target: any, key: string, desc: TypedPropertyDescriptor<any>) => void;

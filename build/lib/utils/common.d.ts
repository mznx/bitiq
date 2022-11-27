/// <reference types="node" />
import http from 'node:http';
export declare function parseUrlPath(str: string | undefined): string;
export declare function getRequestBody(req: http.IncomingMessage): Promise<string>;
export declare function getClassMethodNames(obj: any): string[];
declare const _default: {
    parseUrl: typeof parseUrlPath;
    getReqBody: typeof getRequestBody;
    getClassMethodNames: typeof getClassMethodNames;
};
export default _default;

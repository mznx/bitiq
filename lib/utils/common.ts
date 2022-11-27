import url from 'node:url';
import http from 'node:http';


export function parseUrlPath(str: string | undefined) {
    return url.parse(str || '').pathname || '';
}


export async function getRequestBody(req: http.IncomingMessage) {
    const buffer = [];

    for await (const chunk of req) {
        buffer.push(chunk);
    }
    const data = Buffer.concat(buffer).toString();

    return data;
}


export function getClassMethodNames(obj: any) {
    const proto = Object.getPrototypeOf(obj);
    const names = Object.getOwnPropertyNames(proto);
    const methodNames: string[] = [];

    for (const name of names) {
        const el = obj[name];
        if (typeof el === 'function' && name !== 'constructor') {
            methodNames.push(name);
        }
    }

    return methodNames;
}


export default {
    parseUrl: parseUrlPath,
    getReqBody: getRequestBody,
    getClassMethodNames: getClassMethodNames,
};

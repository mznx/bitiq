import url from 'node:url';
import http from 'node:http';


export function parseUrlPath(str: string | undefined) {
    return url.parse(str || '').pathname || '';
}


export async function getRequestBody(req: http.IncomingMessage) {
    const buffer: Uint8Array[] = [];

    for await (const chunk of req) {
        buffer.push(chunk);
    }
    const data = Buffer.concat(buffer).toString();

    return data;
}


export function getClassMethodNames<T extends object, J extends keyof T>(obj: T) {
    const proto = Object.getPrototypeOf(obj);
    const names = Object.getOwnPropertyNames(proto) as J[];
    const methodNames: J[] = [];

    for (const name of names) {
        const elem = obj[name];
        if (typeof elem === 'function' && name !== 'constructor') {
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

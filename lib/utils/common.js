"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClassMethodNames = exports.getRequestBody = exports.parseUrlPath = void 0;
const node_url_1 = __importDefault(require("node:url"));
function parseUrlPath(str) {
    return node_url_1.default.parse(str || '').pathname || '';
}
exports.parseUrlPath = parseUrlPath;
async function getRequestBody(req) {
    const buffer = [];
    for await (const chunk of req) {
        buffer.push(chunk);
    }
    const data = Buffer.concat(buffer).toString();
    return data;
}
exports.getRequestBody = getRequestBody;
function getClassMethodNames(obj) {
    const proto = Object.getPrototypeOf(obj);
    const names = Object.getOwnPropertyNames(proto);
    const methodNames = [];
    for (const name of names) {
        const elem = obj[name];
        if (typeof elem === 'function' && name !== 'constructor') {
            methodNames.push(name);
        }
    }
    return methodNames;
}
exports.getClassMethodNames = getClassMethodNames;
exports.default = {
    parseUrl: parseUrlPath,
    getReqBody: getRequestBody,
    getClassMethodNames: getClassMethodNames,
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = exports.Router = void 0;
const common_1 = require("./utils/common");
class Router {
    post = new Map();
    constructor() { }
    async use(controllers, globalCtx) {
        const global = globalCtx || {};
        for (const controller of controllers) {
            const ctrlPath = Reflect.getMetadata(controller, 'path');
            const ctrl = new controller(global);
            const methodNames = (0, common_1.getClassMethodNames)(ctrl);
            for (const name of methodNames) {
                const action = ctrl[name];
                const routePath = Reflect.getMetadata(action, 'path');
                const routeMethod = Reflect.getMetadata(action, 'method');
                const path = `/${ctrlPath}/${routePath}`;
                switch (routeMethod) {
                    case 'post':
                        this['post'].set(path, action);
                        break;
                    default:
                }
            }
        }
    }
}
exports.Router = Router;
class BaseController {
    model;
    constructor(model) {
        this.model = model;
    }
}
exports.BaseController = BaseController;

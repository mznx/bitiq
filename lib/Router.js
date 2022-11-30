"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpMethod = exports.BaseController = exports.Router = void 0;
const common_1 = require("./utils/common");
class Router {
    routes = new Map();
    constructor(module) {
        this.init();
        this.generate(module);
    }
    generate(module) {
        const moduleModel = Reflect.getMetadata(module, 'model');
        const moduleController = Reflect.getMetadata(module, 'controller');
        const moduleImports = Reflect.getMetadata(module, 'import');
        if (moduleModel && moduleController) {
            const model = new moduleModel();
            const controller = new moduleController(model);
            const controllerPath = Reflect.getMetadata(moduleController, 'path');
            const methodNames = (0, common_1.getClassMethodNames)(controller);
            for (const name of methodNames) {
                const methodPath = Reflect.getMetadata(controller[name], 'path');
                const methodMethod = Reflect.getMetadata(controller[name], 'method');
                const actionFullPath = `/${controllerPath}/${methodPath}`;
                this.routes.get(methodMethod).set(actionFullPath, controller[name]);
            }
        }
        if (moduleImports?.length) {
            for (const module of moduleImports) {
                this.generate(module);
            }
        }
    }
    init() {
        this.routes.set(HttpMethod.GET, new Map());
        this.routes.set(HttpMethod.POST, new Map());
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
var HttpMethod;
(function (HttpMethod) {
    HttpMethod[HttpMethod["GET"] = 0] = "GET";
    HttpMethod[HttpMethod["POST"] = 1] = "POST";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));

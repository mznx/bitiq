import { getClassMethodNames } from "./utils/common";


export class Router {
    // public readonly post = new Map();
    public readonly routes: Map<HttpMethod, Map<string, any>> = new Map();

    constructor(module: any) {
        this.init();
        this.generate(module);
    }

    private generate(module: any) {
        const moduleModel = Reflect.getMetadata(module, 'model');
        const moduleController = Reflect.getMetadata(module, 'controller');
        const moduleImports = Reflect.getMetadata(module, 'import') as any[];

        if (moduleModel && moduleController) {
            const model = new moduleModel();
            const controller = new moduleController(model);

            const controllerPath = Reflect.getMetadata(moduleController, 'path');
            
            const methodNames = getClassMethodNames(controller);

            for (const name of methodNames) {
                const methodPath = Reflect.getMetadata(controller[name], 'path') as string;
                const methodMethod = Reflect.getMetadata(controller[name], 'method') as HttpMethod;
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

    private init() {
        this.routes.set(HttpMethod.GET, new Map());
        this.routes.set(HttpMethod.POST, new Map());
    }
}


export class BaseController {
    constructor(protected readonly model: any) { }
}


export enum HttpMethod {
    'GET' = 0,
    'POST' = 1,
}

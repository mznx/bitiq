import { getClassMethodNames } from "./utils/common";

export class Router {
    public readonly post = new Map();

    constructor() {}

    public async use(controllers: any[], globalCtx?: any) {
        const global = globalCtx || {};

        for (const controller of controllers) {
            const ctrlPath = Reflect.getMetadata(controller, 'path');
            const ctrl = new controller(global);
            const methodNames = getClassMethodNames(ctrl);
            for (const name of methodNames) {
                const action = ctrl[name];
                const routePath = Reflect.getMetadata(action, 'path');
                const routeMethod = Reflect.getMetadata(action, 'method');
                const path = `/${ctrlPath}/${routePath}`;

                // TODO тут проверки

                switch(routeMethod) {
                    case 'post':
                        this['post'].set(path, action)
                        break;
                    default:
                        //
                }
            }
        }
    }
}

export class BaseController {
    constructor(protected readonly model: any) { }
}

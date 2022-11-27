export declare class Router {
    readonly post: Map<any, any>;
    constructor();
    use(controllers: any[], globalCtx?: any): Promise<void>;
}
export declare class BaseController {
    protected readonly model: any;
    constructor(model: any);
}

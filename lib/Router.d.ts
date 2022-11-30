export declare class Router {
    readonly routes: Map<HttpMethod, Map<string, any>>;
    constructor(module: any);
    private generate;
    private init;
}
export declare class BaseController {
    protected readonly model: any;
    constructor(model: any);
}
export declare enum HttpMethod {
    'GET' = 0,
    'POST' = 1
}

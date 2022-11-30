import { BaseController, Router } from "./Router";


export class Server {
    private readonly router: Router;

    constructor(private readonly AppModule: any) {
        this.router = new Router(AppModule);
    }

    public async init() {
        //
    }

    public listen() {}
}

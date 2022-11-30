"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const Router_1 = require("./Router");
class Server {
    AppModule;
    router;
    constructor(AppModule) {
        this.AppModule = AppModule;
        this.router = new Router_1.Router(AppModule);
    }
    async init() {
    }
    listen() { }
}
exports.Server = Server;

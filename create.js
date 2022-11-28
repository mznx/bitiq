"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateApp = void 0;
const Server_1 = require("./lib/Server");
async function CreateApp(AppModule) {
    const app = new Server_1.Server(AppModule);
    await app.init();
    return app;
}
exports.CreateApp = CreateApp;

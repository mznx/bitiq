import { Server } from "./lib/Server";


export async function CreateApp(AppModule: any) {
    const app = new Server(AppModule);
    await app.init();

    return app;
}

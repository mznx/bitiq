export declare class Server {
    private readonly AppModule;
    private readonly router;
    constructor(AppModule: any);
    init(): Promise<void>;
    listen(): void;
}

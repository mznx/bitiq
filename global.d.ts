export { }

declare global {
    namespace Reflect {
        function setMetadata(target: any, key: string, value: any): boolean;
    
        function getMetadata(target: any, key: string): any;
    }
}

import { ModuleParam } from "../interfaces";


export function Module(param: ModuleParam) {
    return (target: any) => {
        Reflect.setMetadata(target, 'model', param.model);
        Reflect.setMetadata(target, 'controller', param.controller);
        Reflect.setMetadata(target, 'import', param.import);
    }
}

import { errors } from "./errors";

export let componentTypes = {} as { [key: string]: React.ComponentClass<any> | string };
export function registerComponent(componentName: string, componentType: React.ComponentClass<any>): void {
    if (componentType == null && typeof componentName == 'function') {
        componentType = componentName;
        componentName = (componentType as React.ComponentClass<any>).name;
        (componentType as any)['componentName'] = componentName;
    }

    if (!componentName)
        throw errors.argumentNull('componentName');

    if (!componentType)
        throw errors.argumentNull('componentType');

    componentTypes[componentName] = componentType;
}
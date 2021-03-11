// import { ComponentInfo } from "./component-info";
// import { registerComponent } from "./register";

// /** 组件标记，用于将指定的组件标记为可被外部加载 */
// export function component(options?: Partial<ComponentInfo>) {
//     return function classDecorator(constructor: React.ComponentClass<any>) {
//         let type = options?.type || constructor.name;
//         registerComponent(type, constructor);
//     }
// }
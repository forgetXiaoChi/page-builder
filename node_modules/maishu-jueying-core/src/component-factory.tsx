
import { ComponentData } from "./component-data";

export type ComponentFactory<Context = any> = (componentData: ComponentData, context?: Context) => JSX.Element;


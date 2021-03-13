/// <reference types="react" />
import { PropertyEditorInfo } from "maishu-jueying";
export declare function setComponentRender(typeName: string, value: (propEditors: PropertyEditorInfo[]) => JSX.Element): void;
export declare function getComponentRender(typeName: string): (propEditors: PropertyEditorInfo[]) => JSX.Element;

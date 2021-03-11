import { ComponentData } from "./component-data";

type Item = Omit<ComponentData, "children"> & {
    id: string, parentId: string | null,
};
export type ComponentDataList = Item[];


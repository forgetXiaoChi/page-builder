export declare let errors: {
    pageRecordNotExists(id: string): Error;
    urlParameterEmpty(name: string): Error;
    canntFindComponentInfo(typeName: string): Error;
    moduleNotExport(modulePath: string, memberName: string): Error;
    pageNameCanntEmpty(): Error;
    fileNotExists(filePath: string): Error;
} & import("maishu-toolkit").Errors;

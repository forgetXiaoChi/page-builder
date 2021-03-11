interface Options {
    wrapperClassName?: string;
    name?: string;
    baseUrl?: string;
}
export declare class Less {
    private static pathname;
    static load(url: string, options?: Options): Promise<void>;
    static renderByRequireJS(moduleName: string, options?: Options & {
        contextName?: string;
    }): Promise<void>;
    static renderByText(lessText: string, options?: Options): Promise<void>;
    static parse(lessText: string): Promise<string>;
}
export {};

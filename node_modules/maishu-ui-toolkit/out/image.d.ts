export declare let loadImageConfig: {
    /** 图片显示的文字 */
    imageDisaplyText: string;
};
export declare type CanvasDraw = (ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => void;
export declare type DrawOption = {
    fontSize?: number;
    bgColor?: string;
    textColor?: string;
};
export declare function generateImageBase64(width: number, height: number, text: string, options?: DrawOption): string;
export declare function generateImageBase64(width: number, height: number, draw: CanvasDraw): string;
export declare type LoadImageOptions = {
    imageSize?: {
        width: number;
        height: number;
    };
    loadImage?: () => Promise<string>;
    imageText?: string;
};
/**
 * 在 IMG 元素上渲染图片
 * @param element 要渲染的 IMG 元素
 * @param options 渲染选项，默认将 IMG 元素的 SRC 属性渲染出来
 */
export declare function renderImage(element: HTMLImageElement, options?: LoadImageOptions): Promise<string>;
export declare type ImageFileToBase64Result = {
    base64: string;
    width: number;
    height: number;
};
export declare function imageFileToBase64(imageFile: File, size?: {
    width?: number;
    height?: number;
}): Promise<ImageFileToBase64Result>;
export declare function fileToBase64(file: File): Promise<string>;

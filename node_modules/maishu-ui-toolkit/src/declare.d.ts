
declare module "less" {

	class FileManager {
		extractUrlParts: (url: string, baseUrl: string) => string;
	}

	let less: {
		render: (content: string, callback: (e: Error, result: { css: string }) => void) => void;
		FileManager: typeof FileManager
	}


	export = less;
}
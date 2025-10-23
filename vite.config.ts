import { defineConfig } from "vite";

export default defineConfig(({ command, mode }) => {
	console.log("command: ", command);
	console.log("mode: ", mode);
	return {
		root: "",
		plugins: [],
		// 作为静态资源服务的文件夹。该目录中的文件在开发期间在 / 处提供，并在构建期间复制到 outDir 的根目录，并且始终按原样提供或复制而无需进行转换。
		publicDir: "/public",
		resolve: {
			alias: {
				"@": "",
			},
		},
		css: {},
		build: {
			target: ["es2015", "chrome58"],
			outDir: "dist",
			sourcemap: mode === "development" || mode === "test",
			// 以库的形式构建
			lib: {
				// 入口。必需。
				entry: "lib/index.ts",
				// name 是暴露的全局变量，当 formats 包括 'umd' 或 'iife' 时必须使用。
				name: "hiUtils",
				formats: ["es", "umd", "cjs"],
			},
		},
	};
});

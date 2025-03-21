import js from "@eslint/js";
import prettier from "eslint-plugin-prettier/recommended";

export default [
	js.configs.recommended,
	prettier,
	{
		files: ["**/*.js"],
		ignores: ["node_modules/**", "dist/**", "build/**"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				process: "readonly",
			},
		},
		rules: {
			"no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
			"no-console": "ignores",
			"prettier/prettier": "warn",
		},
	},
];

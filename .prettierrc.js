module.exports = {
	useTabs: true,
	tabWidth: 4,
	singleQuote: true,
	jsxSingleQuote: true,
	arrowParens: 'always',
	trailingComma: 'all',
	semi: true,
	printWidth: 100,
	bracketSpacing: true,
	overrides: [
		{
			files: ['**/*.yml', '**/*.yaml'],
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
		{
			files: ['**/*.md'],
			options: {
				useTabs: true,
				tabWidth: 2,
			},
		},
	],
};

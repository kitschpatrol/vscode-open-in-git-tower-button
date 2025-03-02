import { eslintConfig } from '@kitschpatrol/eslint-config'

export default eslintConfig(
	{
		json: {
			overrides: {
				// VS Code bundler needs LICENSE.txt listed in the package.json
				'json-package/no-redundant-files': 'off',
			},
		},
		ts: {
			overrides: {
				'jsdoc/require-jsdoc': 'off',
				'ts/no-empty-function': 'off',
			},
		},
	},
	{
		files: ['LICENSE.txt', 'README.md'],
		rules: {
			'unicorn/filename-case': 'off',
		},
	},
)

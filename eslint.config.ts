import { eslintConfig } from '@kitschpatrol/eslint-config'

export default eslintConfig(
	{
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

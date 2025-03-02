import { knipConfig } from '@kitschpatrol/knip-config'

export default knipConfig({
	entry: [
		'src/extension.ts',
		// Remove these after next patch of @kitschpatrol/shared-config
		'.remarkrc.mjs',
		'cspell.config.mjs',
		'eslint.config.mjs',
		'knip.config.mjs',
		'mdat.config.mjs',
		'prettier.config.mjs',
		'stylelint.config.mjs',
	],
	ignoreDependencies: ['@types/vscode'],
})

import { knipConfig } from '@kitschpatrol/knip-config'

export default knipConfig({
	entry: ['src/extension.ts'],
	ignoreDependencies: [
		'@kitschpatrol/chagent', // Typically invoked through bumpp's --execute argument, which Knip doesn't parse
	],
})

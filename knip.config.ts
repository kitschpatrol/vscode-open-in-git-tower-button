import { knipConfig } from '@kitschpatrol/knip-config'

export default knipConfig({
	entry: ['src/extension.ts'],
	ignoreDependencies: ['@types/vscode'],
})

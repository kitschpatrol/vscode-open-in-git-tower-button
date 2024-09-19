import { StatusBarAlignment, window } from 'vscode'

export function activate() {
	const statusBar = window.createStatusBarItem(StatusBarAlignment.Left, 0)
	statusBar.command = 'openInGitTower.open'
	statusBar.text = '$(filter-filled)'
	statusBar.tooltip = 'Open in Git Tower'
	statusBar.show()
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function deactivate() {}

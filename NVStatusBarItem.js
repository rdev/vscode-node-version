const vscode = require('vscode');
var spawn = require('child_process').spawnSync;

class NVStatusBarItem {
	constructor() {
		this._statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, -90);
		this._statusBarItem.show();

		this._interval = setInterval(() => this.refreshUI(), 10 * 1000);

		this.refreshUI();
	}

	dispose() {
		this._statusBarItem.dispose();
		clearInterval(this._interval);
	}

	refreshUI() {
		this._statusBarItem.text = 'Node ' + spawn('node', ['--version']).output[1];
	}
}

module.exports = NVStatusBarItem;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, the puredit webview extension is now active!');

	let disposable = vscode.commands.registerCommand('pureditExtension.start', () => {
        // Get the active text editor
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            // Get the text from the active editor
            const text = editor.document.getText();
            vscode.commands.executeCommand('simpleBrowser.show', vscode.Uri.parse('http://localhost:5173'));
        } else {
            vscode.commands.executeCommand('simpleBrowser.show', vscode.Uri.parse('http://localhost:5173'));
        }
    });

    context.subscriptions.push(disposable);


	console.log("Successfully opened simple browser!");
}

// This method is called when your extension is deactivated
export function deactivate() {}

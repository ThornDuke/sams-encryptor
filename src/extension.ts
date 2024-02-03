/**
 * extension.ts
 *
 * The main file.
 *
 * First edit: 2024-01-31
 */

import * as vscode from 'vscode';
import * as engine from './engine';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  /* TESTS */

  const text = 'This is a sample text';
  const pwKey = 'secret';

  const encrText = engine.encrypted(text, pwKey);

  const decrText = engine.decrypted(encrText, pwKey);

  console.log('§> encryption', { text, pwKey, encrText });
  console.log('===');
  console.log('§> decryption', { encrText, pwKey, decrText });

  /* END TESTS */

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    'sams-file-encryptor.helloWorld',
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage(
        engine.encrypted('Gualalla lalla palla', 'poropero')
      );
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

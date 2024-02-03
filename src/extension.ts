/**
 * extension.ts
 *
 * The main file.
 *
 * First edit: 2024-01-31
 */

import * as vscode from 'vscode';
import * as engine from './engine';

/* ******************************************************
 *
 * to modify text in VSCode:
 *
 * https://github.com/Microsoft/vscode-extension-samples/tree/main/document-editing-sample
 *
 */

const encryptCurrentFile = () => {
  const editor = vscode.window.activeTextEditor;

  if (editor) {
    let document = editor.document;

    // Get the document text
    const documentText = document.getText();

    console.log('§>', { documentText });
  }
};

const decryptCurrentFile = () => {
  vscode.window
    .showInformationMessage(
      'Ready to DEcrypt the current file',
      'Ok',
      'Not Ok',
      'Retry',
      'Do Not Retry'
    )
    .then((response) => console.log('§>', { response }));
};

export function activate(context: vscode.ExtensionContext) {
  let disposableEncrypt = vscode.commands.registerCommand(
    'sams-file-encryptor.encrypt',
    () => {
      encryptCurrentFile();
    }
  );

  let disposableìDecrypt = vscode.commands.registerCommand(
    'sams-file-encryptor.decrypt',
    () => {
      decryptCurrentFile();
    }
  );

  context.subscriptions.push(disposableEncrypt);
  context.subscriptions.push(disposableìDecrypt);
}

export function deactivate() {}

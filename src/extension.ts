/**
 * extension.ts
 *
 * The main file.
 *
 * First edit: 2024-01-31
 */

import * as vscode from 'vscode';
import * as engine from './engine';
import crypto from 'node:crypto';

/* ******************************************************
 *
 * to modify text in VSCode:
 *
 * https://github.com/Microsoft/vscode-extension-samples/tree/main/document-editing-sample
 *
 * a library that abstracts upon crypto
 *
 * https://www.npmjs.com/package/crypto-shield?activeTab=readme
 *
 */

// ********************
// CODICE DI PROVA. VA CANCELLATO PRIMA DEL RILASCIO
//
const pw = 'sammarino';

const applyToCurrentFile = (operation: Function) => {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;
  const text = editor.document.getText();
  let lastLine = editor.document.lineCount - 1;
  if (lastLine < 0) {
    lastLine = 0;
  }
  let lastChar = editor.document.lineAt(lastLine).text.length;
  if (lastChar <= 0) {
    lastChar = 1;
  }
  editor.selection = new vscode.Selection(
    new vscode.Position(0, 0),
    new vscode.Position(lastLine, lastChar)
  );
  operation(text, pw).then((encrText: string) => {
    editor.edit((editBuilder) => {
      editBuilder.delete(editor.selection);
      editBuilder.insert(new vscode.Position(0, 0), encrText);
    });
  });
};
// *********************

export function activate(context: vscode.ExtensionContext) {
  let disposableEncrypt = vscode.commands.registerCommand(
    'sams-file-encryptor.encrypt',
    () => {
      applyToCurrentFile(engine.encrypt);
    }
  );

  let disposableDecrypt = vscode.commands.registerCommand(
    'sams-file-encryptor.decrypt',
    () => {
      applyToCurrentFile(engine.decrypt);
    }
  );

  context.subscriptions.push(disposableEncrypt);
  context.subscriptions.push(disposableDecrypt);
}

export function deactivate() {}

// End of file extension.ts

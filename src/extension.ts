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
 * a library that abstracts upon crypto
 *
 * https://www.npmjs.com/package/crypto-shield?activeTab=readme
 *
 */

const text =
  'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.';
const pw = 'sammarino';

const encryptCurrentFile = async () => {
  const tk: string | undefined = await engine.encrypted(text, pw);
  const ta: string | undefined = await engine.decrypted(tk, pw);
  console.log('§>', { text, tk, ta });
};

const decryptCurrentFile = () => {};

export function activate(context: vscode.ExtensionContext) {
  let disposableEncrypt = vscode.commands.registerCommand(
    'sams-file-encryptor.encrypt',
    () => {
      encryptCurrentFile();
    }
  );

  let disposableDecrypt = vscode.commands.registerCommand(
    'sams-file-encryptor.decrypt',
    () => {
      decryptCurrentFile();
    }
  );

  context.subscriptions.push(disposableEncrypt);
  context.subscriptions.push(disposableDecrypt);
}

export function deactivate() {}

/**
 * extension.ts
 *
 * The main file.
 *
 * First edit: 2024-01-31
 */

import * as vscode from 'vscode';
import * as engine from './engine';
import { $$logErrors } from './globals';

const applyToCurrentFile = (operation: Function, key: string) => {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }
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
  operation(text, key).then((encrText: string) => {
    editor.edit((editBuilder) => {
      editBuilder.delete(editor.selection);
      editBuilder.insert(new vscode.Position(0, 0), encrText);
    });
  });
};

const getUserKey = async (context: 'encryption' | 'decryption') => {
  const firstKey = await vscode.window.showInputBox({
    password: true,
    placeHolder: 'Your secret key',
    prompt: 'Type a key',
    title: `File ${context}`,
  });

  if (!firstKey) {
    if ($$logErrors) {
      console.log(
        '§> getUserKey: There is no key or the key is invalid. Procedure aborted.'
      );
      return;
    }
  }

  if (context === 'encryption') {
    const secondKey = await vscode.window.showInputBox({
      password: true,
      placeHolder: 'Your secret key',
      prompt: 'Confirm your key',
      title: `File ${context}`,
    });

    if (!secondKey) {
      if ($$logErrors) {
        console.log(
          '§> getUserKey: There is no key or the key is invalid. Procedure aborted.'
        );
        return;
      }
    }

    if (firstKey === secondKey) {
      return firstKey;
    } else {
      console.log('§>', 'Key mismatch. Procedure aborted');
      return;
    }
  }

  return firstKey;
};

export function activate(context: vscode.ExtensionContext) {
  let disposableEncrypt = vscode.commands.registerCommand(
    'sams-file-encryptor.encrypt',
    () => {
      getUserKey('encryption').then((key) => {
        if (key) {
          applyToCurrentFile(engine.encrypt, key);
        }
      });
    }
  );

  let disposableDecrypt = vscode.commands.registerCommand(
    'sams-file-encryptor.decrypt',
    () => {
      getUserKey('decryption').then((key) => {
        if (key) {
          applyToCurrentFile(engine.decrypt, key);
        }
      });
    }
  );

  context.subscriptions.push(disposableEncrypt);
  context.subscriptions.push(disposableDecrypt);
}

export function deactivate() {}

// End of file extension.ts

/**
 * extension.ts
 *
 * The main file.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or (at
 * your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * First edit: 2024-01-31
 * Thorn Duke
 */

import * as vscode from 'vscode';
import * as engine from './engine';
import { $$logErrors, getConfigValueAtKey } from './globals';

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
  let hideKey = getConfigValueAtKey('showKeyInPlainText');

  const firstKey = await vscode.window.showInputBox({
    password: !hideKey,
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
      password: !hideKey,
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
          try {
            applyToCurrentFile(engine.encrypt, key);
            vscode.window.showInformationMessage(
              'Document successfully encrypted.'
            );
          } catch {
            if ($$logErrors) {
              console.log('§> Error encrypting the file');
            }
          }
        }
      });
    }
  );

  let disposableDecrypt = vscode.commands.registerCommand(
    'sams-file-encryptor.decrypt',
    () => {
      getUserKey('decryption').then((key) => {
        if (key) {
          try {
            applyToCurrentFile(engine.decrypt, key);
            vscode.window.showInformationMessage(
              'Document successfully decrypted.'
            );
          } catch {
            if ($$logErrors) {
              console.log('§> Error encrypting the file');
            }
          }
        }
      });
    }
  );

  context.subscriptions.push(disposableEncrypt);
  context.subscriptions.push(disposableDecrypt);
}

export function deactivate() {}

// End of file extension.ts

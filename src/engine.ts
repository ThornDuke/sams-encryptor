/**
 * engine.ts
 *
 * The extension engine: collects the data to be
 * encrypted, processes it and returns it encrypted.
 *
 * First edit: 2024-02-03
 */

import crypto from 'node:crypto';
import { $$debugging } from './globals';

const algorithm = 'aes-256-cbc';

const getCipher = (key: string) => {
  const cipher = crypto.createCipher(algorithm, key);

  if ($$debugging) {
    console.log('§> getCipher', { key, cipher });
  }
};

getCipher('secret');

/*
var encryptor_Encrypt = function (text, password) {
  var cipher = crypto.createCipher(encryptor_Algorithm, password);
  var crypted = cipher.update(text, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
};

var encryptor_Decrypt = function (text, password) {
  var decipher = crypto.createDecipher(encryptor_Algorithm, password);
  var dec = decipher.update(text, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
};

function activate(context) {
  console.log('Encryptor activated');

  var encryptFile = vscode.commands.registerCommand(
    'extension.encryptor_EncryptFile',
    function () {
      var e = vscode.window.activeTextEditor;
      if (!e) {
        return; // No open text editor
      }
      vscode.window
        .showInputBox({
          password: true,
          prompt: 'Type your password',
        })
        .then((pw1) => {
          vscode.window
            .showInputBox({
              password: true,
              prompt: 'Confirm password',
            })
            .then((pw2) =>
              e.edit(function (edit) {
                if (pw1 != pw2) {
                  return;
                }
                var text = e.document.getText();
                var lastLine = e.document.lineCount - 1;
                if (lastLine < 0) {
                  lastLine = 0;
                }
                var lastChar = e.document.lineAt(lastLine).text.length;
                if (lastChar <= 0) {
                  lastChar = 1;
                }
                e.selection = new vscode.Selection(
                  new vscode.Position(0, 0),
                  new vscode.Position(lastLine, lastChar)
                );
                var encryptedText = encryptor_Encrypt(text, pw1);
                edit.replace(e.selection, encryptedText);
              })
            );
        });
    }
  );
  var decryptFile = vscode.commands.registerCommand(
    'extension.encryptor_DecryptFile',
    function () {
      var e = vscode.window.activeTextEditor;
      if (!e) {
        return; // No open text editor
      }
      vscode.window
        .showInputBox({
          password: true,
          prompt: 'Type your password',
        })
        .then((pw) => {
          e.edit(function (edit) {
            var encryptedText = e.document.getText();
            var lastLine = e.document.lineCount - 1;
            if (lastLine < 0) {
              lastLine = 0;
            }
            var lastChar = e.document.lineAt(lastLine).text.length;
            if (lastChar <= 0) {
              lastChar = 1;
            }
            e.selection = new vscode.Selection(
              new vscode.Position(0, 0),
              new vscode.Position(lastLine, lastChar)
            );
            var text = encryptor_Decrypt(encryptedText, pw);
            edit.replace(e.selection, text);
          });
        });
    }
  );
  var encryptString = vscode.commands.registerCommand(
    'extension.encryptor_EncryptString',
    function () {
      var e = vscode.window.activeTextEditor;
      if (!e) {
        return; // No open text editor
      }
      vscode.window
        .showInputBox({
          password: true,
          prompt: 'Type your password',
        })
        .then((pw1) =>
          e.edit(function (edit) {
            vscode.window
              .showInputBox({
                password: true,
                prompt: 'Confirm password',
              })
              .then((pw2) =>
                e.edit(function (edit) {
                  if (pw1 != pw2) {
                    return;
                  }
                  var text = e.document.getText(e.selection);
                  var encryptedText = encryptor_Encrypt(text, pw1);
                  edit.replace(e.selection, encryptedText);
                })
              );
          })
        );
    }
  );
  var decryptString = vscode.commands.registerCommand(
    'extension.encryptor_DecryptString',
    function () {
      var e = vscode.window.activeTextEditor;
      if (!e) {
        return; // No open text editor
      }
      vscode.window
        .showInputBox({
          password: true,
          prompt: 'Type your password',
        })
        .then((pw) =>
          e.edit(function (edit) {
            var encryptedText = e.document.getText(e.selection);
            var text = encryptor_Decrypt(encryptedText, pw);
            edit.replace(e.selection, text);
          })
        );
    }
  );

  context.subscriptions.push(encryptFile);
  context.subscriptions.push(decryptFile);
  context.subscriptions.push(encryptString);
  context.subscriptions.push(decryptString);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
  console.log('Encryptor deactivated');
}
exports.deactivate = deactivate;

*/

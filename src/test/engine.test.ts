import * as assert from 'assert';
import * as vscode from 'vscode';
import * as engine from '../engine';

const testNumber = 121;
const testString = 'Gommalacca';
const testPw = 'abracadabra';
const testError = new Error();

suite('Sams Text Encryptor', () => {
  vscode.window.showInformationMessage('Start all tests.');

  test('Testing encrypt(): accepts two parameters of type string', () => {
    assert.doesNotReject(
      async () => engine.encrypt(testString, testPw),
      'Should not throw an error'
    );

    assert.equal(
      typeof engine.encrypt(testString, testPw),
      'object',
      'Should return an object (a promise)'
    );

    assert.equal(
      typeof engine.decrypt(
        '752352bb19ea6b6d6bf3fd51207956468bfe272a35e8664072d7a097db6fc591b3d49a3355e30a5094332060443000c6d7052c6bff156737537c58b74463fe858293f14b19af',
        testPw
      ),
      'object',
      'Should return an object (a promise)'
    );
  });
});

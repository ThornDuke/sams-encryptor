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

  return cipher;
};

const getDecipher = (key: string) => {
  const decipher = crypto.createDecipher(algorithm, key);

  if ($$debugging) {
    console.log('§> getdecipher', { key, decipher });
  }

  return decipher;
};

export const encrypted = (text: string, pw: string) => {
  const cipher = getCipher(pw);
  let encryptedText = cipher.update(text, 'utf8', 'hex');
  encryptedText += cipher.final('hex');

  if ($$debugging) {
    console.log('§> ecrypted', { text, pw, cipher, encryptedText });
  }

  return encryptedText;
};

export const decrypted = (text: string, pw: string) => {
  const decipher = getDecipher(pw);
  let decryptedText = decipher.update(text, 'hex', 'utf8');
  decryptedText += decipher.final('utf8');

  if ($$debugging) {
    console.log('§> deecrypted', { text, pw, decipher, decryptedText });
  }

  return decryptedText;
};

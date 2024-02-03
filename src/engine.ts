/**
 * engine.ts
 *
 * The extension engine: collects the data to be
 * encrypted, processes it and returns it encrypted.
 *
 * First edit: 2024-02-03
 */

// import crypto from 'node:crypto';
import CryptoShield from 'crypto-shield';
import { $$debugging, $$logErrors } from './globals';

export const encrypted = async (text: any, pwKey: string) => {
  const encryptor = new CryptoShield();
  encryptor.setSecretKey(pwKey);

  try {
    const encryptedText = await encryptor.encryptText(text);

    if ($$debugging) {
      console.log('§> encrypted', { text, pwKey, encryptedText });
    }

    return encryptedText;
  } catch (error) {
    if ($$logErrors) {
      console.error('§> encrypted() Error:', error);
    }
  }
};

export const decrypted = async (text: any, pwKey: string) => {
  const decryptor = new CryptoShield();
  decryptor.setSecretKey(pwKey);

  try {
    const decryptedText = await decryptor.decryptText(text);

    if ($$debugging) {
      console.log('§> decrypted', { text, pwKey, decryptedText });
    }

    return decryptedText;
  } catch (error) {
    if ($$logErrors) {
      console.error('§> decrypted() Error:', error);
    }
  }
};

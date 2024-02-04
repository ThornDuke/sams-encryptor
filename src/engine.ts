/**
 * engine.ts
 *
 * The extension engine: collects the data to be
 * encrypted, processes it and returns it encrypted.
 *
 * First edit: 2024-02-03
 */

import CryptoShield from 'crypto-shield';
import { $$debugging, $$logErrors } from './globals';

/**
 * Encrypt a text using a password
 *
 * @param {any} text The text to encrypt
 * @param {string} pwKey The password
 * @returns {Promise<string>} t
 */
export const encrypt = async (text: any, pwKey: string) => {
  const encryptor = new CryptoShield();
  encryptor.setSecretKey(pwKey);

  try {
    const encryptedText = await encryptor.encryptText(text);

    if ($$debugging) {
      console.log('§> encrypt', { text, pwKey, encryptedText });
    }

    return encryptedText;
  } catch (error) {
    if ($$logErrors) {
      console.error('§> encrypted() Error:', error);
    }
  }
};

/**
 * Decrypts a text previously encrypted with a password
 *
 * @param {any} text The text to decrypt
 * @param {string} pwKey The password
 * @returns {Promise<string} A promise that eventually returns a string
 */
export const decrypt = async (text: any, pwKey: string) => {
  const decryptor = new CryptoShield();
  decryptor.setSecretKey(pwKey);

  try {
    const decryptedText = await decryptor.decryptText(text);

    if ($$debugging) {
      console.log('§> decrypt', { text, pwKey, decryptedText });
    }

    return decryptedText;
  } catch (error) {
    if ($$logErrors) {
      console.error('§> decrypted() Error:', error);
    }
  }
};

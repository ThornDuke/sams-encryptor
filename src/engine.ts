/**
 * engine.ts
 *
 * The extension engine: collects the data to be
 * encrypted, processes it and returns it encrypted.
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
 * First edit: 2024-02-03
 * Thorn Duke
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
 * @returns {Promise<string>} A promise that eventually returns a string
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

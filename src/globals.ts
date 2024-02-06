/**
 * globals.ts
 *
 * Constants and functions used throughout the project.
 *
 * First edit: 2024-01-31
 */

import * as vscode from 'vscode';

/**
 * if true many logs are generated and sent to the console
 */
export const $$debugging = false;
export const $$logErrors = true;

/**
 * Name of the key within the configuration file to look
 * for certain values.
 *
 * !!! If it is changed here it must also be changed !!!
 * !!! in the `package.json` file, into the key      !!!
 * !!! `contributes.configuration.properties`        !!!
 */
export const configKey = 'samtextencryptor';

/**
 * Takes a string representing a `setting.json => sam-encryptor
 * key and returns the value for that key. The `sam-encryptor`
 * part of the key is hardcoded into the method
 *
 * @param {string} key
 * @returns {string | number | boolean | undefined}
 */
export const getConfigValueAtKey = (
  key: string
): string | number | boolean | undefined => {
  const value: string | number | boolean | undefined = vscode.workspace
    .getConfiguration(configKey)
    .get(key);

  if ($$debugging) {
    console.log('§> getConfigValueAtKey', { key, value });
  }

  return value;
};

// End of file globals.ts

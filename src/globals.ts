/**
 * globals.ts
 *
 * Constants and functions used throughout the project.
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
 * Takes a string representing a `setting.json => samtextencryptor`
 * key and returns the value for that key. The `samtextencryptor`
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

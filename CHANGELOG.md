# Change Log

<!--
## [Unreleased] | [major.minor.patch] - yyyy-mm-dd
### Added | Fixed | Changed | Removed | Deprecated | Security
- filename {section}: description
-->

## [Unreleased]

### Changed

- README.md {Features}: more explanatory text

## [1.0.1] - 2024-02-05

### Added

- demo.gif: A video for the `README` file

### Fixed

- .vscodeignore: typescript no more inserted into the bundle

### Changed

- Icon
- extension.ts {getUserKey}: If encrypting the user is asked to inserts the key
  twice; if decrypting the user is asked to insert the key once.

## [1.0.0] - 2024-02-04

First working release.

## [0.2.0] - 2024-02-04

The extension fully works.

### Added

- engine.ts {getCipher}
- engine.ts {getDecipher}
- engine.ts {encrypted}
- engine.ts {decrypted}
- package.json {contributes.commands}: encrypt; decrypt
- Now use CryptoShield
- engine.test.ts: suite of test
- extension.ts {applyToCurrentFile}: encrypt or decrypt the text in the file
  based on the parameter passed to the function
- extension.ts {getUserKey}: ask the user for a key

### Changed

- engine.ts {encrypted}: supported by CryptoShield
- engine.ts {decrypted}: supported by CryptoShield
- The name of the project now is: `Sam's Text Encryptor`
- README.md: fully filled out.

### Removed

- README.md {Table of content}: auto-link
- engine.ts {getCipher}: rendered useless by CryptoShield
- engine.ts {getDecipher}: rendered useless by CryptoShield
- extension.ts {encryptCurrentFile}: rendered useless by applyToCurrentFile
- extension.ts {decryptCurrentFile}: rendered useless by applyToCurrentFile

## [0.1.0] - 2024-02-03

- 2024-01-31: First scratch

### Added

- CHANGELOG.md: created and structured
- project-notes.md: created and structured
- package.json: created and configured
- .gitignore: created and configured
- .eslintrc.json: created and configured
- .vscodeignore: created and configured
- tsconfig.json: created and configured
- LICENCE: created
- Icon
- src/globals.ts: created
- src/globals.ts {getConfigValueAtKey}: created
- README.md: created and structured
- engine.ts: created and structured
- project.code-snippets: created and structured
- markdown.css: created and structured

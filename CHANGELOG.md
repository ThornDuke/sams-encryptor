# Change Log

<!--
## [major.minor.patch] - yyyy-mm-dd
### Added | Fixed | Changed | Removed | Deprecated | Security
- filena.me {section}: description
-->

## [Unreleased]

### Added

- engine.ts {getCipher}
- engine.ts {getDecipher}
- engine.ts {encrypted}
- engine.ts {decrypted}
- package.json {contributes.commands}: encrypt; decrypt
- extension.ts {encryptCurrentFile}
- extension.ts {decryptCurrentFile}
- Now use CryptoShield

### Changed

- engine.ts {encrypted}
- engine.ts {decrypted}

### Removed

- README.md {Table of content}: auto-link
- engine.ts {getCipher}: rendered useless by CryptoShield
- engine.ts {getDecipher}: rendered useless by CryptoShield

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

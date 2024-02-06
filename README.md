# Sam's Text Encryptor

![GitHub License](https://img.shields.io/github/license/ThornDuke/sams-pwd-generator?style=plastic&logo=gnu)
![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/thornduke.sams-file-encryptor.svg?style=plastic&logo=visualstudiocode)
![Static Badge](https://img.shields.io/badge/strong-security?style=plastic&logo=keepassxc&logoColor=white&label=security&labelColor=black&color=red)
![Static Badge](https://img.shields.io/badge/enabled-crypto?style=plastic&logo=alienware&logoColor=white&label=crypto&labelColor=black&color=green)

<!--
![Visual Studio Marketplace Rating Stars](https://img.shields.io/visual-studio-marketplace/stars/thornduke.sams-pw-gen.svg?style=plastic)
![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/thornduke.sams-pw-gen.svg?style=plastic)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/thornduke.sams-pw-gen.svg?style=plastic)
![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/thornduke.sams-pw-gen.svg?style=plastic)
-->

<img
  src="https://github.com/ThornDuke/sams-encryptor/raw/master/resources/demo.gif"
  alt="Demo"
  width="650"
/>

## Table of content

- [Features](#features)
- [Installation](#installation)
- [How to use](#how-to-use)
- [Managing settings](#managing-settings)
- [Release Notes](#release-notes)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Features

This extension encrypts and decrypts the text present in the current window. It
was designed to securely encrypt an entire file and to do so with maximum
simplicity.

It uses the latest updates to the `crypto` library and the `aes-256-gcm`
algorithm, which is extremely secure. It is the most secure encryption algorithm
available today and is used extensively in government and military applications,
as well as by businesses operating in highly regulated industries.

[Back to [table of content](#table-of-content)]

## Installation

1. Open **Extensions** sidebar panel in VS Code. `View → Extensions`
2. Search for `Sam's Text Encryptor`
3. Click `Install` to install it.

[Back to [table of content](#table-of-content)]

## How to use

At any time, you can press `⌘ + ⇧ + P` on Mac or `Control + ⇧ + P` on Windows /
Linux and start typing `Encrypt` or `Decrypt`.

You can choose from the following commands:

- `Encrypt file`
- `Decrypt file`

Choose one of the two commands. You will be asked to enter a key; if you have
chosen to encrypt a file you will be asked to confirm the key entered.

Once the key is entered the file will be encrypted or decrypted depending on the
command chosen.

**WARNING!**

1. **If you forget the key it will no longer be possible to decrypt the file.**
2. **If you modify an encrypted file it will no longer be possible to decrypt it
   and the original content will be lost.**

These risks are inherent to modern encryption systems: they are powerful but
dangerous.

[Back to [table of content](#table-of-content)]

## Managing settings

Click on `Manage / Extension settings`. There is one setting:

`Show Key In Plain Text` It should be set to `true` to make the
encryption/decryption key readable in plain text as you type it. Default is
`false`

Alternatively, you can change the values ​​directly in the configuration file:

1. Open the command palette (either with `F1` or `Ctrl+Shift+P` or
   `Shift+Command+P`)
2. Type `open settings`
3. You are presented with a few options, choose `Open User Settings (JSON)`
4. Add or modify the following line.

```json
{
  "samtextencryptor.showKeyInPlainText": false
}
```

[Back to [table of content](#table-of-content)]

## Release Notes

To know the release notes refer to the `CHANGELOG` file.

[Back to [table of content](#table-of-content)]

## Contributing

Contributions to this project are welcomed!

Whether you have

- questions, concerns, or suggestions for improving this extension
- want to report a bug
- submit a fix
- propose new features

please don't hesitate to reach out to us on GitHub and
[open an issue](https://github.com/ThornDuke/sams-encryptor/issues).

[Back to [table of content](#table-of-content)]

## Acknowledgements

The engine of this extension is based on the
[crypto-shield package](https://socket.dev/npm/package/crypto-shield), which I
choosed after studying the code.

The icon is created by [Freepik - Flaticon](https://www.flaticon.com)

[Back to [table of content](#table-of-content)]

<!--
Copyright 2023 MathExpansion

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->
# Overview

A project for implementing formula models in Google Spreadsheets.
Script ID =
`1DbavNp1b_wXRyII-Q1Hsxa1RoHDOSBJmRPDH_PRbfe1-BSv0K-6boWWc`
[Discord URL](https://discord.gg/tKj4anHgu8)
[Japanese](docs/README_JA.md)

# Development Environment

## About Version Control Tools

You can use Sourcetree, GitBash, or any Git management tool you are comfortable with.

### Sourcetree

- Installation Guide
  - [https://mteam.jp/column/10210/](https://mteam.jp/column/10210/)
- Download
  - [https://www.sourcetreeapp.com/](https://www.sourcetreeapp.com/)

### GitBash

- Installation Guide
  - [https://www.sejuku.net/blog/72673](https://www.sejuku.net/blog/72673)
- Download
  - [https://gitforwindows.org/](https://gitforwindows.org/)

## Setting Up a Local Environment for Google Apps Script (GAS)

### Prerequisites

- This guide assumes that you are working within the project directory `MathExpansion\MathExpansion` (directly under the cloned directory).
- You should be able to use `npm` and `node` commands in the Command Prompt.

  Ensure that the following commands display their respective versions:
```
Node --version
npm --version
```
If they don't, you can refer to the following instructions to install them:

- [https://kinsta.com/jp/blog/how-to-install-node-js/](https://kinsta.com/jp/blog/how-to-install-node-js/)

### Steps

For the most part, we are following the instructions on the following site:

- [https://dev.classmethod.jp/articles/gas-aside/](https://dev.classmethod.jp/articles/gas-aside/)

#### Activating the Google Apps Script API

Enable the Google Apps Script API from the settings page:

- [https://script.google.com/home/usersettings](https://script.google.com/home/usersettings)

#### Creating a Project Using `aside`

Run the following command in the Command Prompt:  
```
npx @google/aside init
```

#### Deployment Environment

Each individual will create their own test Google Sheets document. After creating the Google Sheets document, go to Apps Script and copy the `Script ID` from the project settings.

Input the copied Script ID into `clasp-dev.json` as follows:
```
{"scriptId":"{Paste Script ID Here}","rootDir":"./src"}

Example:
{"scriptId":"111122223333-4444","rootDir":"./src"}
```

#### Deployment Testing

Deploy to the Google Sheets document created earlier using the following command:
```
$ npm run deploy
```

If the code is reflected in Apps Script after running the command, the deployment was successful.

The following command is intended for shared projects related to MathExpansion and should generally be executed only on the `develop` branch:
```
$ npm run deploy:prod
```

# Branch

## About Branch Management

Please create branches based on `develop`, using the format `feature/{issue number}`. For example: `feature/1`, `feature/5`. The `main` branch is planned to be merged from `develop` when releasing.

### If the Same Branch Name Already Exists

Please add an underscore `_` as needed, such as `feature/1_`.

## Commit Messages

If you could use a message format like `#{issue number} Description`, it would be greatly appreciated as it helps link to issues. For example: `#1 Update ReadMe`.

# Others

We don't expect a strong sense of duty or commitment, but feel free to work on tasks when you have some free time.

# Constants and Custom Function References

$k_b = 1.380649^{-23}$  
$n_a = 6.02214076^{23}$  
$h = 6.62607015^{-34}$  
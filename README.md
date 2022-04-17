# bonfire

A Dark Souls tool to help backup saves

## Installation

1. Clone repository
   ```powershell
   $ git clone https://github.com/Hyokune/bonfire.git
   ```
2. Nagivate to the cloned directory and run the command:
   ```powershell
   $ npm run build
   ```
3. Run project
   ```powershell
   $ npm run start
   ```
4. To run the project in developer mode
   ```powershell
   $ npm run dev
   ```

## Linting Javascript - ESLint & Prettier

[ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) are configured using the workspace settings inside `.vscode/settings.json`.

Make sure ESLint and Prettier extensions are installed on your Visual Studio Code for the configuration to work.

- To enable ESLint on save, add these settings to `settings.json`.

  > Sometimes when saving a big file, the linter could take some time to apply the changes therefore it may be better to apply the changes manually.
  > To disable linting on save, update the value in `settings.json` to `false`

  ```json
  ...
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  ```

- Prettier can be applied using `ALT + SHIFT + F` OR `⌥ + ⇧ F` for Mac keyboards

Because ESLint is installed locally in the project the `eslint` CLI command is not available, therefore installing [eslint-cli](https://github.com/eslint/eslint-cli) globally will fix this issue.

To manually run the linter and view the warnings/errors

```powershell
$ npm run lint
```

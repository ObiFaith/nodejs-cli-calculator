import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js, prettier: prettierPlugin },
    languageOptions: { globals: globals.node },
  },
  {
    rules: {
      ...js.configs.recommended.rules,
      'no-duplicate-imports': 'error',
      'no-use-before-define': 'error',
      'no-useless-assignment': 'error',
    },
  },
]);

import { defineConfig } from 'eslint/config';
import pluginReact from 'eslint-plugin-react';
import pluginBoundaries from 'eslint-plugin-boundaries';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin'; // Правильный импорт для плагина

export default defineConfig([
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      react: pluginReact,
      boundaries: pluginBoundaries,
      '@typescript-eslint': tseslint,  // Убедитесь, что добавлен плагин для TypeScript
    },
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            { from: 'shared', allow: ['shared'] },
            { from: 'entities', allow: ['shared', 'entities'] },
            { from: 'features', allow: ['shared', 'entities', 'features'] },
            { from: 'widgets', allow: ['shared', 'entities', 'features', 'widgets'] },
            { from: 'pages', allow: ['widgets', 'features', 'entities', 'shared', 'pages'] },
            { from: 'app', allow: ['pages', 'widgets', 'features', 'entities', 'shared', 'app'] },
          ],
        },
      ],
    },
    settings: {
      'boundaries/elements': [
        { type: 'app', pattern: '^app$' },
        { type: 'pages', pattern: '^app/\\(pages\\)$' },
        { type: 'widgets', pattern: '^widgets$' },
        { type: 'features', pattern: '^features$' },
        { type: 'entities', pattern: '^entities$' },
        { type: 'shared', pattern: '^shared$' },
      ],
    },
    ignorePatterns: [
      "**/.next/**",
      "**/node_modules/**",
      "**/.turbopack/**",
    ],
  },
  {
    extends: ['plugin:@typescript-eslint/recommended'], // Убедитесь, что добавлена эта строка
  },
  {
    plugins: {
      react: pluginReact,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
]);

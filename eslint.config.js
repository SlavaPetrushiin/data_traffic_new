import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import i18nextPlugin from 'eslint-plugin-i18next'
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import css from "@eslint/css";


export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ["**/*.css"],
    plugins: {
      css,
    },
    language: "css/css",
    rules: {
      "css/no-duplicate-imports": "error",
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'i18next': i18nextPlugin,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...i18nextPlugin.configs.recommended.rules,
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      'i18next/no-literal-string': [
        'error',
        {
          markupOnly: true,
          ignoreAttribute: ['className', 'style', 'role', 'aria-label'],
          ignoreComponent: ['Link', 'NavLink']
        }
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^@?\\w'],       // 1. React и npm-пакеты
            ['^@/'],                     // 2. Алиасы (@/)
            ['^[^.][^\\.]'],             // 3. Всё, что не начинается с точки (кроме алиасов)
            ['^\\.\\.(?!/?$)', '^\\.'],  // 4. Родительские и текущие директории
            ['^.+\\.s?css$']             // 5. Стили (.css/.scss)
          ]
        }
      ],
      'simple-import-sort/exports': 'warn',
    }
  },
])

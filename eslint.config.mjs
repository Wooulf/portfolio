import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'next', 'prettier'),

  // 🔹 Ajoute Prettier en tant que plugin
  {
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': 'error' // 🚨 Prettier sera exécuté comme une règle ESLint
    }
  },

  // 🔹 Désactive les règles ESLint en conflit avec Prettier
  prettierConfig
]

export default eslintConfig

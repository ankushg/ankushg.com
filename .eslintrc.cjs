module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {},
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],

      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',

      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },

      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      // define the configuration only for jsx/tsx files
      files: ['*.tsx', '*.jsx'],
      plugins: ['react'],
      extends: ['plugin:react/recommended'],
      rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
}

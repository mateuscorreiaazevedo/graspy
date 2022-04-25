module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    camelcase: 'off',
    'no-useless-constructor': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off'
  }
}

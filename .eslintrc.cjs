module.exports = {
  env: { browser: true},
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 2021,ecmaFeatures:{ jsx:true}, sourceType: 'module' },
  settings: { react: { version: "detect" } },
  plugins: ['react-refresh'],
  rules: {
    "react/prop-types":"off",
    'react-refresh/only-export-components': 'warn',
    'no-unused-vars':'warn',
  },
}

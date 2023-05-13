module.exports = {
  env: { browser: true, es2020: true, node: true, },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:react-three/drei',
    'plugin:react-three/fiber',
    'plugin:three'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'react-three/drei', 'react-three/fiber', 'three'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
};

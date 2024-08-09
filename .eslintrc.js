// const path = require('path');

// module.exports = {
//   parser: '@typescript-eslint/parser', // Specifies the ESLint parser
//   extends: [
//     'eslint:recommended', // Use the recommended ESLint rules
//     'plugin:@typescript-eslint/recommended', // Use recommended rules from @typescript-eslint
//     'prettier', // Disable ESLint rules that might conflict with Prettier
//     'plugin:prettier/recommended', // Enable Prettier rules and show errors for Prettier issues
//   ],
//   parserOptions: {
//     ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
//     sourceType: 'module', // Allows for the use of imports
//     ecmaFeatures: {
//       jsx: true, // Enable JSX parsing if needed
//     },
//   },
//   plugins: [
//     '@typescript-eslint', // Use the TypeScript ESLint plugin
//   ],
//   rules: {
//     '@typescript-eslint/no-unused-vars': ['error', { // Ensure no unused variables
//       vars: 'all',
//       args: 'none',
//       ignoreRestSiblings: true,
//     }],
//     '@typescript-eslint/no-unused-parameters': 'error', // Ensure no unused parameters
//     'import/no-unused-modules': ['error', { // Ensure no unused modules
//       missingExports: true,
//       unusedExports: true,
//     }],
//     'no-unused-expressions': 'error', // Disallow unused expressions
//   },
//   settings: {
//     'import/resolver': {
//       typescript: {
//         // Resolve TypeScript paths
//         alwaysTryTypes: true,
//         project: path.resolve(__dirname, './tsconfig.json'),
//       },
//     },
//   },
// };

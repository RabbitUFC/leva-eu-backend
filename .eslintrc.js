module.exports = {
  'env': {
    'es6': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {'experimentalObjectRestSpread': true},
    'sourceType': 'module',
  },
  'plugins': [
    'import',
  ],
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'windows'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'always-multiline',
    }],
    'comma-spacing': 'error',
    'no-unused-vars': ['error', {'ignoreRestSiblings': true, 'argsIgnorePattern': '^_'}],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'never'],
    'object-curly-newline': ['error', {'multiline': true, 'consistent': true}],
    'key-spacing': ['error', {'beforeColon': false, 'afterColon': true}],
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': ['error', {'max': 1, 'maxEOF': 0, 'maxBOF': 1}],
    'curly': 'error',
    'camelcase': ['error', {'properties': 'never'}],
    'keyword-spacing': 'error',
    'space-before-blocks': 'error',
    'arrow-spacing': 'error',
    'space-in-parens': ['error', 'never'],
    'space-before-function-paren': ['error', {'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always'}],
    'brace-style': ['error', '1tbs'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {'words': true, 'nonwords': false}],
    'semi-spacing': 'error',
    'no-console': 'off',
    'import/order': ['error', {'groups': [['external', 'builtin'], ['index', 'sibling', 'parent', 'internal']], 'newlines-between': 'always', 'alphabetize': {'order': 'asc', 'caseInsensitive': true}}],
    'no-shadow': ['error', {'builtinGlobals': true, 'hoist': 'all'}],
    'import/no-cycle': 'warn',
    'prefer-const': ['error', {'destructuring': 'all', 'ignoreReadBeforeAssign': false}],
  },
};

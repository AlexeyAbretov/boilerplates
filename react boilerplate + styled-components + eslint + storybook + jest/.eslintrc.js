module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
  },
  overrides: [
    {
      files: [
        '*.stories.js',
      ],
      rules: {
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
        'no-alert': 'off',
        'import/no-extraneous-dependencies': 'off',
        'max-len': 'off',
        'no-sequences': 'off',
      },
    },
    {
      files: [
        '*.test.js',
      ],
      rules: {
        'react/jsx-filename-extension': 'off',
        'no-alert': 'off',
        'no-undef': 'off',
        'max-len': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};

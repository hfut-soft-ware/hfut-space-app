module.exports = {
  extends: '@antfu',
  overrides: [
    {
      files: ['*'],
      rules: {
        curly: [2, 'all'],
        'brace-style': [2, '1tbs', { allowSingleLine: true }],
        'no-useless-return': 'off',
        'prefer-const': 'off',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-vars': 'off', // If open this, it will create some unexcepted errors
        'no-unused-vars': 'error', // best choice
        '@typescript-eslint/no-use-before-define': 'off',
        'react/no-children-prop': 'off',
        'react/display-name': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/brace-style': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        'n/handle-callback-err': 'off',
        'no-extra-boolean-cast': 'off',
        'vue/attribute-hyphenation': 'off',
        'no-console': 'off',
      },
    },
  ],
}

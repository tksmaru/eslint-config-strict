module.exports = {
  extends: [
    'eslint-config-strict/lib/basic',
    'eslint:recommended'
  ].map(require.resolve),
  rules: {}
};

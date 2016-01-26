module.exports = {
  extends: [
    'eslint-config-strict/lib/basic',
    'eslint-config-strict/lib/possible_errors',
    'eslint-config-strict/lib/best_practices',
    'eslint-config-strict/lib/strict_mode',
    'eslint-config-strict/lib/node_and_common',
    'eslint-config-strict/lib/stylistic_issues'
  ].map(require.resolve),
  rules: {}
};


module.exports = {
  '*.{ts,tsx}': [
    'eslint --max-warnings 0 --fix',
    'prettier --write',
  ],
  '*.{css,md,json}': [
    'prettier --write',
  ],
};
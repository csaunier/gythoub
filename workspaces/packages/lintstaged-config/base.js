export default {
    "*.css": (stagedFiles) => [
      `stylelint --config "./stylelint.config.js" --fix ${stagedFiles.join(' ')}`,
      `prettier --config "./prettier.config.js" --write ${stagedFiles.join(' ')}`
    ],
    '*.{js,jsx,ts,tsx}': (stagedFiles) => [
      `eslint --config "./eslint.config.js" --fix ${stagedFiles.join(' ')}`,
      `prettier --config "./prettier.config.js" --write ${stagedFiles.join(' ')}`
    ],
    '/*.json"': (stagedFiles) => [
      `prettier --config "./prettier.config.js" --write ${stagedFiles.join(' ')}`
    ],
}
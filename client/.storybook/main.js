const path = require('path');

module.exports = {
  stories: ['../ui/**/*.stories.tsx'],
  // Add nextjs preset
  presets: [path.resolve(__dirname, './next-preset.js')]
};

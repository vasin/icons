const { generateIcons } = require('../packages/icons-scripts');
const { DEPRECATED_ICONS } = require('../src/deprecated');

generateIcons({
  srcDirectory: './src',
  distDirectory: './dist',
  tsFilesDirectory: './ts',
  deprecatedIcons: DEPRECATED_ICONS,
});

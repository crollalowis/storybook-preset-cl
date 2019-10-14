function addons(entry = []) {
  return [
    ...entry,
    require.resolve("@storybook/addon-actions/register"),
    require.resolve("@storybook/addon-links/register"),
    require.resolve("@storybook/addon-knobs/register"),
    require.resolve("@storybook/addon-options/register"),
    require.resolve("@storybook/addon-notes/register-panel")
  ];
}

function babelDefault(config) {
  return {
    ...config,
    presets: [...config.presets, "@storybook/addon-docs/react/preset"]
  };
}

module.exports = {
  addons,
  babelDefault
};

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

function babel(config) {
  return {
    ...config,
    presets: [
      ...config.presets,
      require.resolve("@storybook/addon-docs/react/preset")
    ]
  };
}

module.exports = {
  addons,
  babel
};

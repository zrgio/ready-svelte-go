module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "storybook-dark-mode",
    "storybook-css-modules-preset",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
        "name": "@storybook/addon-postcss",
        "options": {
            "postcssLoaderOptions": {
                "implementation": import("postcss"),
            },
        },
    },
  ],
  "framework": "@storybook/svelte",
  "core": {
    "builder": "@storybook/builder-vite",
    "disableTelemetry": true
  },
  "svelteOptions": {
    "preprocess": import("../svelte.config.js").preprocess
  },
  "features": {
    "storyStoreV7": true
  }
}

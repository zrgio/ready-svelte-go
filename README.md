# Ready, Svelte, GO!

SvelteKit project template, which includes [TailwindCSS](https://tailwindcss.com) & [Storybook](https://storybook.js.org).

## Usage

Clone this repo:

```sh
npx degit zrgio/ready-svelte-go new-project
```

Install dependencies:

```sh
cd new-project
npm install --save-dev -D --legacy-peer-deps=true
```

Optionally, rename `ready-svelte-go` inside `package.json`.

```sh
sed -i '/name/s/ready-svelte-go/new-project/' package.json
```

Too many steps? paste this function in your `.*rc` file (don't forget to `source` it!):

```sh
function svelte-init() {
    npx degit zrgio/ready-svelte-go "$1"
    cd "$1"
    sed -i "/name/s/ready-svelte-go/$1/" package.json
    npm install --save-dev -D --legacy-peer-deps=true
}
```

## How It's done

### The Node issue

Webpack (used by storybook) has an SSL issue with newer verions of Node, so install and use LTS. Preferably using [NVM](https://github.com/nvm-sh/nvm)

```sh
nvm install --lts
nvm use --lts
```

### SvelteKit

Create a SvelteKit project and install its dependencies:

```sh
npm create svelte@latest ready-svelte-go
cd ready-svelte-go
npm install -D
```

Add the following lines to `vite.config.ts`:

```ts
server: {
    hmr: true,
    watch: {
        usePolling: true,
    },
},
```

Without them, HMR might not not work under WSL2.

### Storybook

Install Storybook:

```sh
npx storybook init
```

Then run:

```sh
npm install --save-dev --leacy-peer-deps=true
```

Replace `.storybook/main.cjs`'s content with:

```cjs
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)",
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
    "disableTelemetry": true,
  },
  "svelteOptions": {
    "preprocess": import("../svelte.config.js").preprocess
  },
  "features": {
    "storyStoreV7": true,
  }
}
```

Replace `.storybook/preview.cjs`'s content with:

```cjs
import { themes } from '@storybook/theming';
import '../src/app.postcss'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'red' },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
```

### TailwindCSS

Add TailwindCSS to the project:

```sh
npx svelte-add@latest tailwindcss
```

Install required dependencies:

```sh
npm install -D
```

> Note: The following changes are not required, however, they demostrate how to expand TailwindCSS defaults.

Replace `tailwind.config.cjs`'s content with:

```cjs
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
        colors: {
            'mantis': '#74C365',
            'silver': '#C6C6C6',
        },
    },
    fontFamily: {
      'ComicMono': ['ComicMono'],
    },
  },
};

module.exports = config;
```

Add the following lines to `src/app.postcss`:

```postcss
@font-face {
    font-family: "Comic Mono";
    src: local("ComicMono"), url("https://cdn.jsdelivr.net/npm/comic-mono@0.0.1/index.css") format("ttf")
}
```


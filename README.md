# Ready, Svelte, GO!

SvelteKit project template, which includes [TailwindCSS](https://tailwindcss.com) & [Storybook](https://storybook.js.org).

## Usage

Simply run:

```sh

```

## How I did it

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
npx sb init --builder storybook-builder-vite
```

In `.storybook/main.cjs` replace the string:

```cjs
"preprocess": require("../svelte.config.js").preprocess
```

with:

```cjs
"preprocess": import("../svelte.config.js").preprocess
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


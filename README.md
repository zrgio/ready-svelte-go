# Ready, Svelte, GO!

SvelteKit project template, which includes [TailwindCSS](https://tailwindcss.com), [Storybook](https://storybook.js.org) 

## Usage

## How I did it

### The Node issue

Newer versions of Node have issues with SSL, so install and use LTS

```sh
nvm install --lts
nvm use --lts
```

### SvelteKit

Create a SvelteKit project and install its dependencies

```sh
npm create svelte@latest ready-svelte-go
cd ready-svelte-go
npm install -D
```

Add the following lines to `vite.config.ts`. Without them, HMR might not not work under WSL2

```ts
server: {
    hmr: true,
    watch: {
        usePolling: true,
    },
},
```

### Storybook

Install Storybook

```sh
npx sb init --builder storybook-builder-vite
```

In `.storybook/main.cjs` replace the string

```cjs
"preprocess": require("../svelte.config.js").preprocess
```

with

```cjs
"preprocess": import("../svelte.config.js").preprocess
```

### TailwindCSS

Add TailwindCSS to the project

```sh
npm svelte-add@latest tailwindcss
```

Install required dependencies

```sh
npm install -D
```


import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
    server: {
        hmr: true,
        watch: {
            usePolling: true,
        },
    },
};

export default config;

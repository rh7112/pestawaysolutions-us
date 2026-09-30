import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({ fallback: undefined }),
			// GitHub Pages-only: this branch (gh-pages-preview) exists solely to
			// host a throwaway client preview at a non-claude.ai URL, served
			// from /pestawaysolutions-us/ rather than domain root. Neither line
			// belongs on master -- the real deploy is domain-root (see
			// wrangler.jsonc's custom_domain routes), where base defaults to ''
			// and handleHttpError's default ('fail') is what you want.
			paths: { base: '/pestawaysolutions-us' },
			prerender: { handleHttpError: 'warn' }
		})
	]
});

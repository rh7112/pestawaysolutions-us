import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// BASE_PATH is unset (-> '') for the real site, which deploys at domain
// root (see wrangler.jsonc's custom_domain routes). The GitHub Pages
// preview workflow (.github/workflows/preview.yml) sets it to
// "/pestawaysolutions-us" instead, since Pages project sites serve from
// a repo-name subpath, not domain root. handleHttpError mirrors that:
// 'fail' (the real default) for the real build, 'warn' for the preview,
// since prerendering can't yet confirm every internal link resolves
// correctly relative to a base path it doesn't control.
// Type assertion, not a blind cast: SvelteKit's paths.base type only
// accepts '' or a string starting with '/', which is exactly what
// BASE_PATH is ever set to (see this workflow's own env block) -- a
// malformed value would still fail loudly at runtime via SvelteKit's
// own validation (see the config docs linked above) even though the
// type system can't narrow a plain env var string on its own.
const basePath = (process.env.BASE_PATH || '') as '' | `/${string}`;

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({ fallback: undefined }),
			paths: { base: basePath },
			prerender: { handleHttpError: basePath ? 'warn' : 'fail' }
		})
	]
});

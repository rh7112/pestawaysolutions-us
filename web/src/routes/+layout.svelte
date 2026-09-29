<script lang="ts">
	import './layout.css';

	let { children } = $props();

	const phoneDisplay = '(574) 527-4665';
	const phoneHref = '+15745274665';
	let navOpen = $state(false);

	const wildlifePages = [
		{ href: '/wildlife-removal/bats', label: 'Bats' },
		{ href: '/wildlife-removal/squirrels', label: 'Squirrels' },
		{ href: '/wildlife-removal/moles', label: 'Moles' },
		{ href: '/wildlife-removal/raccoons', label: 'Raccoons' },
		{ href: '/wildlife-removal/groundhogs', label: 'Groundhogs' }
	];
</script>

<svelte:head>
	<title>Pest Away Solutions — Pest Control & Wildlife Removal | Warsaw, IN</title>
	<meta
		name="description"
		content="Pest control and nuisance wildlife removal serving Warsaw and Kosciusko County, Indiana. Call or text (574) 527-4665."
	/>
	<script type="module" src="https://cdn.jsdelivr.net/gh/rh7112/hurd-footer@main/hurd-footer.js"></script>
</svelte:head>

<div class="flex min-h-screen flex-col bg-[#faf8f2] text-[#1e2a1f]">
	<header class="sticky top-0 z-50 border-b border-[#ddd6c4] bg-[#faf8f2]/95 backdrop-blur">
		<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
			<a href="/" class="flex items-center gap-2">
				<span class="text-lg font-bold tracking-tight text-[#1f4a33]"
					>Pest Away <span class="text-[#c97a2b]">Solutions</span></span
				>
			</a>

			<nav class="hidden items-center gap-7 text-sm font-medium text-[#3d4536] md:flex">
				<a href="/about" class="transition hover:text-[#c97a2b]">About</a>
				<a href="/pest-control" class="transition hover:text-[#c97a2b]">Pest Control</a>
				<div class="group relative">
					<button class="flex items-center gap-1 transition hover:text-[#c97a2b]">
						Wildlife Removal
						<svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					<div
						class="invisible absolute left-0 z-10 mt-2 w-44 rounded-lg border border-[#ddd6c4] bg-[#faf8f2] py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100"
					>
						{#each wildlifePages as page (page.href)}
							<a href={page.href} class="block px-4 py-2 text-sm hover:bg-[#f0ead9] hover:text-[#c97a2b]">
								{page.label}
							</a>
						{/each}
					</div>
				</div>
				<a href="/reviews" class="transition hover:text-[#c97a2b]">Reviews</a>
				<a href="/contact" class="transition hover:text-[#c97a2b]">Contact</a>
			</nav>

			<div class="hidden md:block">
				<a
					href="tel:{phoneHref}"
					class="rounded-full bg-[#1f4a33] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#163826]"
				>
					Call/Text {phoneDisplay}
				</a>
			</div>

			<button
				class="text-[#1e2a1f] md:hidden"
				aria-label="Toggle menu"
				aria-expanded={navOpen}
				onclick={() => (navOpen = !navOpen)}
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					{#if navOpen}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					{:else}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					{/if}
				</svg>
			</button>
		</div>

		{#if navOpen}
			<nav class="flex flex-col gap-1 border-t border-[#ddd6c4] bg-[#faf8f2] px-4 py-3 text-sm font-medium text-[#3d4536] md:hidden">
				<a href="/about" class="rounded px-2 py-2 hover:bg-[#f0ead9]" onclick={() => (navOpen = false)}>About</a>
				<a href="/pest-control" class="rounded px-2 py-2 hover:bg-[#f0ead9]" onclick={() => (navOpen = false)}>
					Pest Control
				</a>
				<p class="mt-2 px-2 text-xs font-semibold tracking-wide text-[#6b6f5e] uppercase">Wildlife Removal</p>
				{#each wildlifePages as page (page.href)}
					<a href={page.href} class="rounded px-4 py-2 hover:bg-[#f0ead9]" onclick={() => (navOpen = false)}>
						{page.label}
					</a>
				{/each}
				<a href="/reviews" class="mt-2 rounded px-2 py-2 hover:bg-[#f0ead9]" onclick={() => (navOpen = false)}>
					Reviews
				</a>
				<a href="/contact" class="rounded px-2 py-2 hover:bg-[#f0ead9]" onclick={() => (navOpen = false)}>Contact</a>
				<a href="tel:{phoneHref}" class="mt-2 rounded-full bg-[#1f4a33] px-4 py-2 text-center font-semibold text-white">
					Call/Text {phoneDisplay}
				</a>
			</nav>
		{/if}
	</header>

	<main class="flex-1">
		{@render children()}
	</main>

	<footer class="border-t border-[#ddd6c4] bg-[#f3efe3]">
		<div class="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
			<div>
				<span class="text-lg font-bold text-[#1f4a33]">Pest Away Solutions</span>
				<p class="mt-3 text-sm text-[#6b6f5e]">
					Pest control and nuisance wildlife removal for homes and businesses in Warsaw and Kosciusko County, Indiana.
				</p>
			</div>

			<div class="text-sm text-[#6b6f5e]">
				<h3 class="mb-3 text-xs font-semibold tracking-wide text-[#3d4536] uppercase">Contact</h3>
				<ul class="space-y-2">
					<li><a href="tel:{phoneHref}" class="transition hover:text-[#c97a2b]">Call: {phoneDisplay}</a></li>
					<li><a href="sms:{phoneHref}" class="transition hover:text-[#c97a2b]">Text: {phoneDisplay}</a></li>
				</ul>
			</div>

			<div class="text-sm text-[#6b6f5e]">
				<h3 class="mb-3 text-xs font-semibold tracking-wide text-[#3d4536] uppercase">Service Area</h3>
				<ul class="space-y-2">
					<li>Warsaw &amp; Kosciusko County, IN</li>
				</ul>
			</div>
		</div>

		<div class="border-t border-[#ddd6c4] px-4 py-4 text-center text-xs text-[#8a8b7e] sm:px-6">
			&copy; {new Date().getFullYear()} Pest Away Solutions LLC. All rights reserved.
		</div>
	</footer>

	<hurd-footer tagline="Pest Away Solutions LLC"></hurd-footer>
</div>

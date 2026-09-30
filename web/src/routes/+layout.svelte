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
	<link rel="icon" href="/favicon.png" />
	<script type="module" src="https://cdn.jsdelivr.net/gh/rh7112/hurd-footer@main/hurd-footer.js"></script>
</svelte:head>

<div class="flex min-h-screen flex-col bg-[#FFFFFF] text-[#1A1A1A]">
	<header class="sticky top-0 z-50 border-b border-[#E5E5E5] bg-[#FFFFFF]/95 backdrop-blur">
		<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
			<a href="/" class="flex items-center gap-2.5">
				<img src="/images/pestaway-logo-mark.png" alt="" class="h-9 w-auto" />
				<span class="text-lg font-bold tracking-tight text-[#1A1A1A]">Pest Away Solutions</span>
			</a>

			<nav class="hidden items-center gap-7 text-sm font-medium text-[#333333] md:flex">
				<a href="/about" class="transition hover:text-[#F48222]">About</a>
				<a href="/pest-control" class="transition hover:text-[#F48222]">Pest Control</a>
				<div class="group relative">
					<button class="flex items-center gap-1 transition hover:text-[#F48222]">
						Wildlife Removal
						<svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					<div
						class="invisible absolute left-0 z-10 mt-2 w-44 rounded-lg border border-[#E5E5E5] bg-[#FFFFFF] py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100"
					>
						{#each wildlifePages as page (page.href)}
							<a href={page.href} class="block px-4 py-2 text-sm hover:bg-[#FDF1E7] hover:text-[#F48222]">
								{page.label}
							</a>
						{/each}
					</div>
				</div>
				<a href="/reviews" class="transition hover:text-[#F48222]">Reviews</a>
				<a href="/contact" class="transition hover:text-[#F48222]">Contact</a>
			</nav>

			<div class="hidden md:block">
				<a
					href="tel:{phoneHref}"
					class="rounded-full bg-[#F48222] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#D9721A]"
				>
					Call/Text {phoneDisplay}
				</a>
			</div>

			<button
				class="text-[#1A1A1A] md:hidden"
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
			<nav class="flex flex-col gap-1 border-t border-[#E5E5E5] bg-[#FFFFFF] px-4 py-3 text-sm font-medium text-[#333333] md:hidden">
				<a href="/about" class="rounded px-2 py-2 hover:bg-[#FDF1E7]" onclick={() => (navOpen = false)}>About</a>
				<a href="/pest-control" class="rounded px-2 py-2 hover:bg-[#FDF1E7]" onclick={() => (navOpen = false)}>
					Pest Control
				</a>
				<p class="mt-2 px-2 text-xs font-semibold tracking-wide text-[#6B6B6B] uppercase">Wildlife Removal</p>
				{#each wildlifePages as page (page.href)}
					<a href={page.href} class="rounded px-4 py-2 hover:bg-[#FDF1E7]" onclick={() => (navOpen = false)}>
						{page.label}
					</a>
				{/each}
				<a href="/reviews" class="mt-2 rounded px-2 py-2 hover:bg-[#FDF1E7]" onclick={() => (navOpen = false)}>
					Reviews
				</a>
				<a href="/contact" class="rounded px-2 py-2 hover:bg-[#FDF1E7]" onclick={() => (navOpen = false)}>Contact</a>
				<a href="tel:{phoneHref}" class="mt-2 rounded-full bg-[#F48222] px-4 py-2 text-center font-semibold text-white">
					Call/Text {phoneDisplay}
				</a>
			</nav>
		{/if}
	</header>

	<main class="flex-1">
		{@render children()}
	</main>

	<footer class="border-t border-[#E5E5E5] bg-[#FAFAFA]">
		<div class="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
			<div>
				<span class="text-lg font-bold text-[#F48222]">Pest Away Solutions</span>
				<p class="mt-3 text-sm text-[#6B6B6B]">
					Pest control and nuisance wildlife removal for homes and businesses in Warsaw and Kosciusko County, Indiana.
				</p>
			</div>

			<div class="text-sm text-[#6B6B6B]">
				<h3 class="mb-3 text-xs font-semibold tracking-wide text-[#333333] uppercase">Contact</h3>
				<ul class="space-y-2">
					<li><a href="tel:{phoneHref}" class="transition hover:text-[#F48222]">Call: {phoneDisplay}</a></li>
					<li><a href="sms:{phoneHref}" class="transition hover:text-[#F48222]">Text: {phoneDisplay}</a></li>
				</ul>
			</div>

			<div class="text-sm text-[#6B6B6B]">
				<h3 class="mb-3 text-xs font-semibold tracking-wide text-[#333333] uppercase">Service Area</h3>
				<ul class="space-y-2">
					<li>Warsaw &amp; Kosciusko County, IN</li>
				</ul>
			</div>
		</div>
	</footer>

	<!-- Copyright/company name shown here, not duplicated above -- hurd-footer
		 auto-renders "© <year> <tagline>", which already covers what a
		 separate "© year Pest Away Solutions LLC. All rights reserved." bar
		 here used to repeat. -->
	<hurd-footer tagline="Pest Away Solutions LLC"></hurd-footer>
</div>

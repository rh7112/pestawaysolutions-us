<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const phoneHref = '+15745274665';
	const phoneDisplay = '(574) 527-4665';
</script>

<svelte:head>
	<title>{data.animal.label} Removal — Pest Away Solutions</title>
	<meta name="description" content={data.animal.summary} />
	<link rel="canonical" href="https://pestawaysolutions.com/wildlife-removal/{data.animal.slug}" />
</svelte:head>

<section class="mx-auto max-w-3xl px-4 py-16 sm:px-6">
	<p class="text-sm font-semibold tracking-[0.2em] text-[#c97a2b] uppercase">Wildlife Removal</p>
	<h1 class="mt-2 text-3xl font-bold text-[#1e2a1f] sm:text-4xl">{data.animal.label} Removal</h1>
	<p class="mt-4 text-lg text-[#3d4536]">{data.animal.summary}</p>
	<p class="mt-4 text-[#3d4536]">{data.animal.details}</p>

	<div class="mt-10">
		<a
			href="tel:{phoneHref}"
			class="rounded-full bg-[#1f4a33] px-6 py-3 font-semibold text-white transition hover:bg-[#163826]"
		>
			Call/Text {phoneDisplay}
		</a>
	</div>
</section>

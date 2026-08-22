<script lang="ts">
	const phoneHref = '+15745274665';
	const phoneDisplay = '(574) 527-4665';

	const pests = [
		{ name: 'Ants', note: 'Colony treatment and entry-point prevention.' },
		{ name: 'Spiders', note: 'Interior and exterior treatment for common household species.' },
		{ name: 'Hornets & Yellow Jackets', note: 'Nest removal — especially in-season, when they show up fast.' },
		{ name: 'Bees', note: 'Careful removal that accounts for their role as pollinators where possible.' },
		{ name: 'Termites', note: 'Inspection and treatment to protect your home’s structure.' },
		{ name: 'Mice & Rodents', note: 'Trapping, exclusion, and entry-point sealing.' }
	];
</script>

<svelte:head>
	<title>Pest Control — Pest Away Solutions</title>
	<meta
		name="description"
		content="Pest control for ants, spiders, hornets, bees, termites, and rodents in Warsaw and Kosciusko County, Indiana."
	/>
	<link rel="canonical" href="https://pestawaysolutions.com/pest-control" />
</svelte:head>

<section class="mx-auto max-w-4xl px-4 py-16 sm:px-6">
	<p class="text-sm font-semibold tracking-[0.2em] text-[#c97a2b] uppercase">Pest Control</p>
	<h1 class="mt-2 text-3xl font-bold text-[#1e2a1f] sm:text-4xl">Seasonal home and business pest prevention.</h1>
	<p class="mt-4 max-w-2xl text-lg text-[#3d4536]">
		Seasonal programs to keep your home free from pests year round, and business pest control to help you avoid
		fines and protect your reputation.
	</p>

	<div class="mt-10 grid gap-4 sm:grid-cols-2">
		{#each pests as pest (pest.name)}
			<div class="rounded-2xl border border-[#ddd6c4] bg-[#f3efe3] p-5">
				<h2 class="font-semibold text-[#1f4a33]">{pest.name}</h2>
				<p class="mt-1 text-sm text-[#3d4536]">{pest.note}</p>
			</div>
		{/each}
	</div>

	<div class="mt-10">
		<a
			href="tel:{phoneHref}"
			class="rounded-full bg-[#1f4a33] px-6 py-3 font-semibold text-white transition hover:bg-[#163826]"
		>
			Call/Text {phoneDisplay}
		</a>
	</div>
</section>

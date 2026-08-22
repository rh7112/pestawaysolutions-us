<script lang="ts">
	const phoneHref = '+15745274665';
	const phoneDisplay = '(574) 527-4665';

	const pests = [
		'Ants',
		'Spiders',
		'Hornets',
		'Yellow Jackets',
		'Bees',
		'Termites',
		'Mice & Rodents',
		'Bats',
		'Moles',
		'Squirrels',
		'Raccoons',
		'Groundhogs'
	];
</script>

<svelte:head>
	<link rel="canonical" href="https://pestawaysolutions.com/" />
</svelte:head>

<section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
	<div class="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
		<div>
			<p class="text-sm font-semibold tracking-[0.2em] text-[#c97a2b] uppercase">Warsaw &amp; Kosciusko County, IN</p>
			<h1 class="mt-3 text-4xl font-bold tracking-tight text-[#1e2a1f] sm:text-5xl">
				Protect your home and business from unwanted pests.
			</h1>
			<p class="mt-5 max-w-xl text-lg text-[#3d4536]">
				When you need to prevent and get rid of insects, rodents, and nuisance wildlife, turn to an experienced local
				professional.
			</p>
			<div class="mt-8 flex flex-wrap gap-4">
				<a
					href="tel:{phoneHref}"
					class="rounded-full bg-[#1f4a33] px-6 py-3 font-semibold text-white transition hover:bg-[#163826]"
				>
					Call/Text {phoneDisplay}
				</a>
				<a
					href="/contact"
					class="rounded-full border border-[#1f4a33] px-6 py-3 font-semibold text-[#1f4a33] transition hover:bg-[#f0ead9]"
				>
					Request a quote
				</a>
			</div>
		</div>
	</div>
</section>

<section class="border-t border-[#ddd6c4] bg-[#f3efe3] py-16">
	<div class="mx-auto max-w-6xl px-4 sm:px-6">
		<div class="grid gap-6 md:grid-cols-3">
			<div class="rounded-2xl border border-[#ddd6c4] bg-[#faf8f2] p-6">
				<h2 class="text-lg font-semibold text-[#1f4a33]">Seasonal Home Pest Prevention</h2>
				<p class="mt-2 text-sm text-[#3d4536]">
					Seasonal programs to keep your home free from pests year round.
				</p>
			</div>
			<div class="rounded-2xl border border-[#ddd6c4] bg-[#faf8f2] p-6">
				<h2 class="text-lg font-semibold text-[#1f4a33]">Business Pest Control</h2>
				<p class="mt-2 text-sm text-[#3d4536]">
					Whatever your industry, pest control is crucial to avoid fines, protect your reputation, and keep the doors
					open.
				</p>
			</div>
			<div class="rounded-2xl border border-[#ddd6c4] bg-[#faf8f2] p-6">
				<h2 class="text-lg font-semibold text-[#1f4a33]">Wildlife Removal</h2>
				<p class="mt-2 text-sm text-[#3d4536]">
					Removing problem animals and repairing entry points to prevent them from coming back.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="mx-auto max-w-6xl px-4 py-16 sm:px-6">
	<h2 class="text-2xl font-bold text-[#1e2a1f]">What we handle</h2>
	<div class="mt-6 flex flex-wrap gap-3">
		{#each pests as pest (pest)}
			<span class="rounded-full border border-[#ddd6c4] bg-[#f3efe3] px-4 py-2 text-sm text-[#3d4536]">{pest}</span>
		{/each}
	</div>
</section>

<section class="border-t border-[#ddd6c4] bg-[#1f4a33] py-16 text-white">
	<div class="mx-auto max-w-3xl px-4 text-center sm:px-6">
		<h2 class="text-2xl font-bold">Ready to get your pest problem solved?</h2>
		<p class="mt-3 text-[#dce8de]">
			Call or text Robert Eccles for prices and availability — or send a message and we'll get back to you.
		</p>
		<div class="mt-6 flex flex-wrap justify-center gap-4">
			<a href="tel:{phoneHref}" class="rounded-full bg-white px-6 py-3 font-semibold text-[#1f4a33]">
				Call/Text {phoneDisplay}
			</a>
			<a href="/contact" class="rounded-full border border-white px-6 py-3 font-semibold text-white hover:bg-white/10">
				Contact form
			</a>
		</div>
	</div>
</section>

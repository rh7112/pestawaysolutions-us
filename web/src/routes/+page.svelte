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
			<p class="text-sm font-semibold tracking-[0.2em] text-[#F48222] uppercase">Warsaw &amp; Kosciusko County, IN</p>
			<h1 class="mt-3 text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl">
				Protect your home and business from unwanted pests.
			</h1>
			<p class="mt-5 max-w-xl text-lg text-[#333333]">
				When you need to prevent and get rid of insects, rodents, and nuisance wildlife, turn to an experienced local
				professional.
			</p>
			<div class="mt-8 flex flex-wrap gap-4">
				<a
					href="tel:{phoneHref}"
					class="rounded-full bg-[#F48222] px-6 py-3 font-semibold text-white transition hover:bg-[#D9721A]"
				>
					Call/Text {phoneDisplay}
				</a>
				<a
					href="/contact"
					class="rounded-full border border-[#F48222] px-6 py-3 font-semibold text-[#F48222] transition hover:bg-[#FDF1E7]"
				>
					Request a quote
				</a>
			</div>
		</div>
	</div>
</section>

<section class="border-t border-[#E5E5E5] bg-[#FAFAFA] py-16">
	<div class="mx-auto max-w-6xl px-4 sm:px-6">
		<div class="grid gap-6 md:grid-cols-3">
			<div class="rounded-2xl border border-[#E5E5E5] bg-[#FFFFFF] p-6">
				<h2 class="text-lg font-semibold text-[#F48222]">Seasonal Home Pest Prevention</h2>
				<p class="mt-2 text-sm text-[#333333]">
					Seasonal programs to keep your home free from pests year round.
				</p>
			</div>
			<div class="rounded-2xl border border-[#E5E5E5] bg-[#FFFFFF] p-6">
				<h2 class="text-lg font-semibold text-[#F48222]">Business Pest Control</h2>
				<p class="mt-2 text-sm text-[#333333]">
					Whatever your industry, pest control is crucial to avoid fines, protect your reputation, and keep the doors
					open.
				</p>
			</div>
			<div class="rounded-2xl border border-[#E5E5E5] bg-[#FFFFFF] p-6">
				<h2 class="text-lg font-semibold text-[#F48222]">Wildlife Removal</h2>
				<p class="mt-2 text-sm text-[#333333]">
					Removing problem animals and repairing entry points to prevent them from coming back.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="mx-auto max-w-6xl px-4 py-16 sm:px-6">
	<h2 class="text-2xl font-bold text-[#1A1A1A]">What we handle</h2>
	<div class="mt-6 flex flex-wrap gap-3">
		{#each pests as pest (pest)}
			<span class="rounded-full border border-[#E5E5E5] bg-[#FAFAFA] px-4 py-2 text-sm text-[#333333]">{pest}</span>
		{/each}
	</div>
</section>

<section class="border-t border-[#E5E5E5] bg-[#F48222] py-16 text-white">
	<div class="mx-auto max-w-3xl px-4 text-center sm:px-6">
		<h2 class="text-2xl font-bold">Ready to get your pest problem solved?</h2>
		<p class="mt-3 text-[#FBE4CE]">
			Call or text Robert Eccles for prices and availability — or send a message and we'll get back to you.
		</p>
		<div class="mt-6 flex flex-wrap justify-center gap-4">
			<a href="tel:{phoneHref}" class="rounded-full bg-white px-6 py-3 font-semibold text-[#F48222]">
				Call/Text {phoneDisplay}
			</a>
			<a href="/contact" class="rounded-full border border-white px-6 py-3 font-semibold text-white hover:bg-white/10">
				Contact form
			</a>
		</div>
	</div>
</section>

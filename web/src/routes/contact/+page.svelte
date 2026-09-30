<script lang="ts">
	const phoneHref = '+15745274665';
	const phoneDisplay = '(574) 527-4665';

	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let message = $state('');
	let status: 'idle' | 'sending' | 'sent' | 'error' = $state('idle');
	let errorMessage = $state('');

	async function submit(e: SubmitEvent) {
		e.preventDefault();
		status = 'sending';
		errorMessage = '';
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ firstName, lastName, email, message })
			});
			if (!res.ok) {
				const body = await res.json().catch(() => ({}));
				throw new Error(body.error ?? 'Something went wrong');
			}
			status = 'sent';
		} catch (err) {
			status = 'error';
			errorMessage = err instanceof Error ? err.message : 'Something went wrong';
		}
	}
</script>

<svelte:head>
	<title>Contact — Pest Away Solutions</title>
	<meta name="description" content="Contact Pest Away Solutions for pest control and wildlife removal in Warsaw, Indiana." />
	<link rel="canonical" href="https://pestawaysolutions.com/contact" />
</svelte:head>

<section class="mx-auto max-w-2xl px-4 py-16 sm:px-6">
	<p class="text-sm font-semibold tracking-[0.2em] text-[#F48222] uppercase">Contact</p>
	<h1 class="mt-2 text-3xl font-bold text-[#1A1A1A] sm:text-4xl">Get in touch</h1>
	<p class="mt-4 text-lg text-[#333333]">
		For the fastest response, call or text
		<a href="tel:{phoneHref}" class="font-semibold text-[#F48222] underline">{phoneDisplay}</a>. Or send a message
		below.
	</p>

	{#if status === 'sent'}
		<div class="mt-8 rounded-2xl border border-[#F48222]/30 bg-[#FDF1E7] p-6 text-[#F48222]">
			Thanks — your message has been sent. We'll get back to you soon.
		</div>
	{:else}
		<form class="mt-8 space-y-4" onsubmit={submit}>
			<div class="grid gap-4 sm:grid-cols-2">
				<label class="block text-sm font-medium text-[#333333]">
					First name
					<input
						bind:value={firstName}
						required
						class="mt-1 w-full rounded-lg border border-[#E5E5E5] bg-white px-3 py-2 text-[#1A1A1A]"
					/>
				</label>
				<label class="block text-sm font-medium text-[#333333]">
					Last name
					<input
						bind:value={lastName}
						required
						class="mt-1 w-full rounded-lg border border-[#E5E5E5] bg-white px-3 py-2 text-[#1A1A1A]"
					/>
				</label>
			</div>
			<label class="block text-sm font-medium text-[#333333]">
				Email
				<input
					type="email"
					bind:value={email}
					required
					class="mt-1 w-full rounded-lg border border-[#E5E5E5] bg-white px-3 py-2 text-[#1A1A1A]"
				/>
			</label>
			<label class="block text-sm font-medium text-[#333333]">
				What's going on?
				<textarea
					bind:value={message}
					required
					rows="5"
					class="mt-1 w-full rounded-lg border border-[#E5E5E5] bg-white px-3 py-2 text-[#1A1A1A]"
				></textarea>
			</label>

			{#if status === 'error'}
				<p class="text-sm text-red-700">{errorMessage} — or call/text {phoneDisplay} instead.</p>
			{/if}

			<button
				type="submit"
				disabled={status === 'sending'}
				class="rounded-full bg-[#F48222] px-6 py-3 font-semibold text-white transition hover:bg-[#D9721A] disabled:opacity-60"
			>
				{status === 'sending' ? 'Sending…' : 'Send message'}
			</button>
		</form>
	{/if}
</section>

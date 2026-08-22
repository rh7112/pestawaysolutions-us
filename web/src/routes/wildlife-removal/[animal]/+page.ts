import { error } from '@sveltejs/kit';
import { wildlifeAnimals } from '$lib/wildlife';
import type { PageLoad, EntryGenerator } from './$types';

export const entries: EntryGenerator = () => wildlifeAnimals.map((a) => ({ animal: a.slug }));

export const load: PageLoad = ({ params }) => {
	const animal = wildlifeAnimals.find((a) => a.slug === params.animal);
	if (!animal) {
		error(404, 'Not found');
	}
	return { animal };
};

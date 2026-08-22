// Single source of truth for wildlife-removal content, one entry per
// animal, rendered by the [animal] dynamic route -- avoids the old
// WordPress site's problem of near-duplicate hand-copied pages (it had
// two raccoon-removal pages differing only by photo).
export interface WildlifeAnimal {
	slug: string;
	label: string;
	summary: string;
	details: string;
}

export const wildlifeAnimals: WildlifeAnimal[] = [
	{
		slug: 'bats',
		label: 'Bats',
		summary: 'Safe bat removal and exclusion, done at the right time of year to avoid trapping young inside.',
		details:
			'Bats often get into attics and soffits through small gaps. We identify entry points, remove bats using humane exclusion methods, and seal the home so they can\'t get back in.'
	},
	{
		slug: 'squirrels',
		label: 'Squirrels',
		summary: 'Removing squirrels from attics and walls, then repairing how they got in.',
		details:
			'Squirrels can chew through soffits, fascia, and even roofing to get inside. We trap and remove them, then repair and seal entry points so the problem doesn\'t come back next season.'
	},
	{
		slug: 'moles',
		label: 'Moles',
		summary: 'Trapping and yard treatment to stop mole tunneling.',
		details:
			'Moles tunnel through lawns looking for grubs and worms, leaving raised ridges and mounds behind. We trap them and can advise on grub control so new moles aren\'t drawn back to the same yard.'
	},
	{
		slug: 'raccoons',
		label: 'Raccoons',
		summary: 'Raccoon removal from attics, chimneys, and crawl spaces.',
		details:
			'Raccoons are strong and persistent, capable of tearing into rooflines and chimneys. We remove them safely and repair the entry point they used, since a raccoon will return to a den site if it\'s left open.'
	},
	{
		slug: 'groundhogs',
		label: 'Groundhogs',
		summary: 'Groundhog trapping and burrow-area prevention.',
		details:
			'Groundhogs dig burrows that can undermine sheds, decks, and foundations. We trap and remove them and can advise on discouraging new burrows near structures.'
	}
];

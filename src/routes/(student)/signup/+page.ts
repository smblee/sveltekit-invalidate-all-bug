import { redirect } from '@sveltejs/kit';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { currentProfile } = await parent();
	console.log('(student)/signup/+page | ', currentProfile.id);

	if (currentProfile.type !== 'not-onboarded') {
		console.log('(student)/signup/+page | redirecting to /');
		throw redirect(303, '/');
	}
};

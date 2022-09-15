import { redirect } from '@sveltejs/kit';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { currentProfile } = await parent();

	// depends(`profile:page`);

	console.log('+page | ', currentProfile?.id);

	if (!currentProfile) {
		console.log('+page | redirecting to /notset');
		throw redirect(303, '/notset');
	}

	if (currentProfile.type === 'onboarded') {
		console.log('+page | redirecting to /onboarded-home');
		throw redirect(303, '/onboarded-home');
	}

	if (currentProfile.type === 'not-onboarded') {
		console.log('+page | redirecting to /signup');
		throw redirect(303, '/signup');
	}
};

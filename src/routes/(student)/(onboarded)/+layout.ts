import { redirect } from '@sveltejs/kit';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ parent }) => {
	const { currentProfile } = await parent();

	console.log('(student)/(onboarded)/+layout | ', currentProfile.id);

	if (currentProfile.type !== 'onboarded') {
		console.log('+(student)/(onboarded)/+layout | redirecting to /');
		throw redirect(303, '/');
	}
};

import { redirect } from '@sveltejs/kit';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { currentProfile } = await parent();

	// depends(`profile:page`);

	console.log('+page | ', currentProfile?.id);

	if (!currentProfile) {
		return {};
	}

	console.log('notset/+page | redirecting to /');
	throw redirect(303, '/');
};

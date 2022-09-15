import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const currentProfileId = cookies.get('profileId');
	console.log('+layout.server | ', currentProfileId);

	return {
		currentProfileId
	};
};

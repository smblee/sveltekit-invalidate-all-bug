import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ parent }) => {
	const { currentProfile } = await parent();

	console.log('(student)/+layout | ', currentProfile.id);

	return {
		currentProfile: {
			...currentProfile,
			extraStudentInfo: 'hi'
		}
	};
};

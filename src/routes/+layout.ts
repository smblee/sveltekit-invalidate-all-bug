// import { featureFlagClient, getFeatureFlagUser } from '$lib/featureFlag';
import { browser } from '$app/environment';

import type { LayoutLoad } from './$types';
import { getProfiles, getCookie } from '$lib/utils';

export const load: LayoutLoad = async ({ data }) => {
	const currentProfileId = browser ? getCookie('profileId') : data.currentProfileId;

	console.log('+layout | ', currentProfileId);

	const profiles = await getProfiles();
	const currentProfile = profiles.find((p) => p.id === currentProfileId);

	return {
		profiles,
		currentProfile
	};
};

<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { setCookie } from '$lib/utils';

	const setProfile = async (id: string) => {
		if (id === $page.data?.currentProfile.id) {
			console.log('ID is same. Skipping.');
			return;
		}
		console.log(`---------------------------`);
		console.log(`SETTING PROFILE: START`);
		console.log('prev:', $page.data?.currentProfile.id);
		console.log('expected:', id);

		document.cookie = setCookie('profileId', id, 10);
		console.log(`SETTING PROFILE: SET COOKIE`);
		console.log(`cookie:`, document.cookie);
		console.log(`SETTING PROFILE: INVALIDATE ALL START`);
		await invalidateAll();
		console.log(`SETTING PROFILE: INVALIDATE ALL ENDED`);
		console.log(`---------------------------`);
	};
</script>

<button on:click={() => setProfile('onboarded-id')}>Set onboarded profile</button>
<button on:click={() => setProfile('not-onboarded-id')}>Set not onboarded profile</button>

<slot />

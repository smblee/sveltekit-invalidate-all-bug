<script lang="ts">
	import { browser } from '$app/environment';

	import { deleteCookie, setCookie } from '$lib/utils';
	import Selector from '$lib/Selector.svelte';

	import type { LayoutData } from './$types';

	export let data: LayoutData;

	$: {
		if (browser) {
			document.cookie = data.currentProfile
				? setCookie('profileId', data.currentProfile.id, 10)
				: deleteCookie('profileId');
		}
	}
</script>

{JSON.stringify(data.currentProfile)}
<Selector />
<slot />

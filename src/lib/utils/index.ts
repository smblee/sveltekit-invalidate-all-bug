export function setCookie(name, value, days) {
	var expires = '';
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = '; expires=' + date.toUTCString();
	}
	return name + '=' + (value || '') + expires + '; path=/';
}

export function deleteCookie(name) {
	return name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;' + 'path=/';
}

export function getCookie(name) {
	var nameEQ = name + '=';
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

export function delay(duration) {
	return new Promise((resolve) => setTimeout(resolve, duration));
}

export const getProfiles = async () => {
	await delay(500);
	return [
		{
			id: 'onboarded-id',
			type: 'onboarded'
		},
		{
			id: 'not-onboarded-id',
			type: 'not-onboarded'
		}
	];
};

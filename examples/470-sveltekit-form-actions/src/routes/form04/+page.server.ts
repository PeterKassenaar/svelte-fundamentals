// this file has just one default action - it calls an API. This is very
// handy if the API has CORS-restrictions or should have a (secret) API key.
export const actions = {
	default: async ({ request, fetch }) => {
		// extract the country name from the form
		const data = await request.formData();
		const country = data.get('country');

		// call API
		const url = `https://restcountries.com/v3.1/name/${country}?fields=name,capital,flags,population,borders`;
		const res = await fetch(url);
		const result = await res.json();

		// return the first country found. NO ERROR HANDLING!!
		return {
			country: result[0]
		};
	}
};

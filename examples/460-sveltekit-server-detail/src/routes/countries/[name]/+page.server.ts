import type { PageServerLoad } from './$types';
import type { Country } from '../../../types/Country';
import { error } from '@sveltejs/kit';

// 0. export the load() function. We now destructure fetch and params from the arguments
export const load: PageServerLoad = async ({ fetch, params }) => {
	const { name } = params;

	// 1. Fetch details for the specific country by name
	const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fullText=true&fields=name,capital,flags,cca3,population,borders`;
	const res = await fetch(url); // this is SERVER SIDED SvelteKit-enhanced fetch(). Not the common browser fetch()

	if (!res.ok) {
		throw error(404, `Country "${name}" not found`);
	}

	const data: Country[] = await res.json();

	// 2. some basic error handling, when a faulty country name is provided
	if (!data || data.length === 0) {
		throw error(404, `Country "${name}" not found`);
	}

	// 3. We found a country. Return it
	return {
		country: data[0]
	};
};

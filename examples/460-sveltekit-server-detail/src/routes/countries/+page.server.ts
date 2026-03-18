// countries/+page.server.ts - fetch the countries from the API and
// pass them to the page component.
import type { PageServerLoad } from './$types';
import type { Country } from '../../types/Country';

export const load: PageServerLoad = async ({ fetch }) => {
	// 1. Fetch the countries from the API
	const url = 'https://restcountries.com/v3.1/all?fields=name,capital,flags,cca3,population,borders';
	const res = await fetch(url);
	const countries: Country[] = await res.json();

	// 2. Sort the countries alphabetically by name (of course this is optional)
	countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

	// 3. Pass to the page component
	return {
		countries
	};
};

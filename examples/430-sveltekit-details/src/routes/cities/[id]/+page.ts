// +page.ts for the cities/[id] route
import cities from '$lib/cities.json';
import type { PageLoad } from './$types';

// Export the load function that runs on the server and/or client to fetch data before rendering the page
export const load: PageLoad = ({ params }) => {
	// Convert the id route parameter from string to number
	const id = Number(params.id);
	// Find the city object in the cities array that matches the id from the URL
	const city = cities.find((c) => c.id === id);

	// Return an object containing the id and city data to be available in the page component
	return {
		id,
		city
	};
};

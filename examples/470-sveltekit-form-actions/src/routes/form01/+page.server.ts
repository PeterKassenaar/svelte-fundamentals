// +page.server.ts - handling a very simple form with one field.
// NOTE: 'actions' is an OBJECT. Not a function. It has the 'default' property
export const actions = {
	// @ts-ignore (ignoring the 'any' type)
	default: async ({ request }) => {
		const data = await request.formData();

		const name = data.get('name');

		// Note: this is the SERVER console. Not the browser
		console.log('Received:', name);

		// Our return object has a success property that we can test in the page
		return {
			success: true
		};
	}
};

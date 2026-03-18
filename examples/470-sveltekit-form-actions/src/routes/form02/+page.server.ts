// +page.server.ts - Performing simple server-side validation
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');

		// test if name is of type string, otherwise there is no 'length' property and we get a TS error.
		if (typeof name !== 'string' || name.trim().length < 3) {
			console.log('ERROR name was to short ::', name);
			return {
				error: 'Name must be at least 3 characters'
			};
		}

		// Success. Write message in the console and return success.
		console.log('SUCCESS: received:', name);
		return {
			success: true
		};
	}
};

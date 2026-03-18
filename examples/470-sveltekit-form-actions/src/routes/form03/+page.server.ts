// This file has MULTIPLE actions. It can handle different submissions from the same page.
export const actions = {
	login: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const password = data.get('password');

		// Succesfully logged in with admin/admin
		if (name === 'admin' && password === 'admin') {
			return { success: true, message: 'successfully logged in' };
		}

		// Error.
		return { success: false, message: 'invalid credentials' };
	},

	register: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		return {
			success: true,
			message: `You have succesfully registered with email address: ${email}`
		};
	}
};

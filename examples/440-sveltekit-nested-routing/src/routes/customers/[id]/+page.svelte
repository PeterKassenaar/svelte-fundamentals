<script lang="ts">
	// 1. Import the customer data from the local JSON file
	import customers from '$lib/data/customers.json';

	// 2. Import the page store from SvelteKit to access route parameters
	import { page } from '$app/state';

	// 3. Create a reactive variable for the customer ID, derived from the URL parameter
	const id = $derived(Number(page.params.id));

	// 4 Create a reactive variable for the customer object, found in the list by ID.
	// In real life, we would do a database lookup or API call to fetch the customer details.
	const customer = $derived(customers.find((c) => c.id === id));
</script>

<!--The UI of this component. Just a simple Bootstrap card and utility classes, displaying-->
<!--customer data.-->
<div class="mt-4">
	{#if customer}
		<div class="card">
			<div class="card-header">
				<h3>Customer Details</h3>
			</div>
			<div class="card-body">
				<p><strong>ID:</strong> {customer.id}</p>
				<p><strong>Name:</strong> {customer.name}</p>
				<p><strong>Email:</strong> {customer.email}</p>
			</div>
			<div class="card-footer">
				<a href="/customers" class="btn btn-secondary">Clear</a>
			</div>
		</div>
	{:else}
		<!--		Make sure to have a fallback, if someone tries to access a non-existing customer.-->
		<div class="alert alert-danger">
			Customer not found.
			<div class="mt-2">
				<a href="/customers" class="btn btn-outline-danger">Back to List</a>
			</div>
		</div>
	{/if}
</div>

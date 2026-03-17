<script lang="ts">
	interface Customer {
		id: number;
		name: string;
		email: string;
	}

	let customers: Customer[] = [
		{ id: 1, name: 'John Doe', email: 'john.doe@example.com' },
		{ id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
		{ id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com' },
		{ id: 4, name: 'Alice Williams', email: 'alice.williams@example.com' }
	];
</script>

<div>
	<h2>Customer List (new route)</h2>
	<ul class="list-group">
		{#each customers as customer (customer.id)}
			<li class="list-group-item">
				<strong>{customer.name}</strong> - {customer.email}
			</li>
		{/each}
	</ul>
</div>

<style>
	div{
			margin: 1rem;
			padding: 1rem;
			border: 1px solid red;
	}
</style>

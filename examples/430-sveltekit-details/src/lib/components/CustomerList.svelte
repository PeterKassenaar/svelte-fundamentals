<script lang="ts">
	import customers from '$lib/data/customers.json';

	interface Customer {
		id: number;
		name: string;
		email: string;
	}
</script>

<div>
	<h2>Customer List (dynamic)</h2>
	<ul class="list-group">
		{#each customers as customer}
			<li class="list-group-item">
				<a href="/customers/{customer.id}" class="text-decoration-none">
					<strong>{customer.name}</strong>
				</a>
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

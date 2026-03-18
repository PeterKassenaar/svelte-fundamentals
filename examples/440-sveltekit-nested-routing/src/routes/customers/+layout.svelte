<script lang="ts">
	import CustomerList from '$lib/CustomerList.svelte';
	let { children } = $props();
</script>

<div class="row">
	<div class="col-md-4 border-end">
		<CustomerList />
	</div>
	<div class="col-md-8">
		{@render children()}
	</div>
</div>

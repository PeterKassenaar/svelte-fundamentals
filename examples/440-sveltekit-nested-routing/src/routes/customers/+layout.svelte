<!--This is **another** +layout.svelte file, containing the nested routing. Note
    that it has two columns, one for the CustomerList and one for the selected customer.
    This one is rendered using the @render directive with the children() function. -->
<script lang="ts">
	import CustomerList from '$lib/components/CustomerList.svelte';
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

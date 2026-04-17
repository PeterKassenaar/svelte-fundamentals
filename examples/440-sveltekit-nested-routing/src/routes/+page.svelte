<script>
	import CustomerList from '$lib/components/CustomerList.svelte';
</script>

<div>
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

	<div>
		This application has three routes - but there is no main navigation (yet). You have
		to type the routes directly in the browser address bar.
		<h3>Available routes</h3>
		<ul>
			<li><code>/</code> - the home page</li>
			<li><code>/customers</code> - the customers page, using <code>page.params.id</code> for dynamic data</li>
			<li><code>/cities</code> - the cities page, using the <code>load()</code> function and <code>+page.ts</code></li>
			<li><code>/about</code> - the about page</li>
		</ul>
	</div>
</div>

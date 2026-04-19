<script>
	const { form } = $props();
</script>

<h2>Country Search - Calling an API</h2>
<div>This page has one form, it submits the form to the server and the server calls an API to get the country data.
	In this case, only the first country is returned from the API. See <code>+page.server.ts</code> for more details.
</div>
<hr>
<form method="POST">
	<div class="form-group">
		<label for="country">Country</label>
		<input type="text" class="form-control" id="country" name="country" placeholder="Enter country" />
	</div>
	<button class="btn btn-primary">Search</button>
</form>

{#if form?.country}
	<div class="card mt-3">
		<div class="card-header d-flex align-items-center">
			<img src={form.country.flags.svg} alt="{form.country.name.common} flag"
					 style="width: 50px; height: auto; margin-right: 15px;" />
			<h5 class="mb-0">{form.country.name.common}</h5>
		</div>
		<div class="card-body">
			<p><strong>Capital:</strong> {form.country.capital?.[0] || 'N/A'}</p>
			<p><strong>Population:</strong> {form.country.population?.toLocaleString() || 'N/A'}</p>
			<p><strong>Borders:</strong> {form.country.borders?.join(', ') || 'None'}</p>
		</div>
	</div>
{/if}

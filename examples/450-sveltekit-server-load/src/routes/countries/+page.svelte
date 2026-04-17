<script lang="ts">
	import CountryCard from '$lib/CountryCard.svelte';
	import type { PageProps } from './$types';

	// 0. data is loaded from +page.server.ts and passed as a prop
	// to the page component
	let { data }: PageProps = $props();
</script>

<!--Simple UI. Just show the country, pass the selected country to a Child component-->
<h1 class="mb-4 text-center">Countries</h1>
<div class="align-content-center">data is loaded from <code>+page.server.ts</code> and passed as a prop
	to the <code>+page.svelte</code> component</div>
<hr>
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 g-4 mb-5">
	<!--	Choice: only render the first 30 countries-->
	{#each data.countries.slice(0, 30) as country}
		<div class="col">
			<CountryCard {country} />
		</div>
	{/each}
</div>

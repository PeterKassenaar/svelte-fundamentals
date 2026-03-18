<script lang="ts">
	import type { Country } from '../types/Country';

	// props for this view component: we pass in a country
	let { country }: { country: Country } = $props();
</script>

<!-- A pure view component. It shows the country that was passed in-->
<!-- When the country is clicked, we navigate to a dynamic route-->
<a href="/countries/{encodeURIComponent(country.name.common)}" class="text-decoration-none text-dark">
	<div class="card h-100 shadow-sm">
		<img
			src={country.flags.svg || country.flags.png}
			class="card-img-top"
			alt={country.flags.alt || `Flag of ${country.name.common}`}
			style="height: 160px; object-fit: cover; border-bottom: 1px solid #eee;"
		/>
		<div class="card-body">
			<h5 class="card-title text-truncate">{country.name.common}</h5>
			<p class="card-text text-muted">
				<strong>Capital:</strong> {country.capital ? country.capital.join(', ') : 'N/A'}
			</p>
		</div>
	</div>
</a>

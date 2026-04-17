<!--cities/+page.svelte-->
<script lang="ts">
	import cities from '$lib/data/cities.json';

	interface City {
		id: number;
		name: string;
		country: string;
	}

</script>

<div>
	<h2>City List</h2>
	<ul class="list-group">
		{#each cities as city}
			<li class="list-group-item">
				<a href="/cities/{city.id}">
					<strong>{city.name}</strong>
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
    div {
        margin: 1rem;
        padding: 1rem;
        border: 1px solid blue;
    }
</style>

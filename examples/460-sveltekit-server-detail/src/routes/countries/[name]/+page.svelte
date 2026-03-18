<script lang="ts">
	import type { PageProps } from './$types';

	// 0. No logic in this (browser) page. It retrieves data from the server via $props().
	let { data }: PageProps = $props();
	const { country } = data;
</script>

<div class="container mt-4">
	<!-- 1.	Just for some nice navigation: the Bootstrap breadcrumb class-->
	<nav aria-label="breadcrumb">
		<ol class="breadcrumb">
			<li class="breadcrumb-item"><a href="/countries">All countries</a></li>
			<li class="breadcrumb-item active" aria-current="page">{country.name.common}</li>
		</ol>
	</nav>

	<!--	2. Showing details of the country. -->
	<div class="row g-4 mt-2">
		<div class="col-md-5">
			<img
				src={country.flags.svg || country.flags.png}
				alt={country.flags.alt || `Flag of ${country.name.common}`}
				class="img-fluid rounded shadow-sm border"
			/>
		</div>
		<div class="col-md-7">
			<h1 class="display-4 fw-bold">{country.name.common}</h1>
			<p class="lead text-muted">{country.name.official}</p>

			<div class="card bg-light border-0 shadow-sm mt-4">
				<div class="card-body">
					<div class="row g-3">
						<div class="col-sm-6">
							<h6 class="text-uppercase text-muted small fw-bold">Capital</h6>
							<p class="fs-5 mb-0">{country.capital ? country.capital.join(', ') : 'N/A'}</p>
						</div>
						<div class="col-sm-6">
							<h6 class="text-uppercase text-muted small fw-bold">Country Code</h6>
							<p class="fs-5 mb-0">{country.cca3}</p>
						</div>
						<div class="col-sm-6">
							<h6 class="text-uppercase text-muted small fw-bold">Population</h6>
							<p class="fs-5 mb-0">{country.population.toLocaleString()}</p>
						</div>
						<!-- 3. If the country has any borders, show them as little badges-->
						{#if country.borders && country.borders.length > 0}
							<div class="col-12">
								<h6 class="text-uppercase text-muted small fw-bold">Borders</h6>
								<div class="d-flex flex-wrap gap-2 mt-2">
									{#each country.borders as border}
										<span class="badge bg-white text-dark border px-3 py-2 fw-normal">{border}</span>
									{/each}
								</div>
							</div>
						{/if}
					</div>
				</div>
			</div>

			<div class="mt-4">
				<a href="/countries" class="btn btn-outline-primary">
					<i class="bi bi-arrow-left me-2"></i> Back to List
				</a>
			</div>
		</div>
	</div>
</div>

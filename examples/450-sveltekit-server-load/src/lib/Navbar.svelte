<!--src/lib/Navbar.svelte-->
<script>
	// Array of route objects, to build the navigation menu dynamically
	const routes = [
		{ path: '/', label: 'Home' },
		{ path: '/countries', label: 'Countries' },
		{ path: '/about', label: 'About' }
	];
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">SvelteKit Demo</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				{#each routes as route}
					<li class="nav-item">
						<a class="nav-link" href={route.path}>{route.label}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>

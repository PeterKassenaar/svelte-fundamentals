<!--src/lib/Navbar.svelte-->
<script>
	import { page } from '$app/stores';

	// Array of route objects, to build the navigation menu dynamically
	const routes = [
		{ path: '/', label: 'Home' },
		{ path: '/form01', label: 'Form 01 - simple' },
		{ path: '/form02', label: 'Form 02 - validation' },
		{ path: '/form03', label: 'Form 03 - multiple actions' },
		{ path: '/form04', label: 'Form 04 - calling an API' },
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
						<a class="nav-link" class:active={$page.url.pathname === route.path} href={route.path}>{route.label}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>

<style>
    .nav-link:hover {
        background-color: rgba(0, 0, 0, 0.075);
        border-radius: 0.25rem;
        transition: background-color 0.2s ease-in-out;
    }

    .nav-link.active {
        font-weight: bold;
        color: #0d6efd !important;
    }
</style>

<!--+layout.svelte-->
<script lang="ts">
	// Svelte imports
	import { onMount } from 'svelte';

	// Custom imports
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	// using global css
	import 'bootstrap/dist/css/bootstrap.min.css';

	// The bootstrap JS import is necessary for the navbar-toggler and other interactive components
	// to work correctly. Bootstrap 5 uses JavaScript to manage visibility and animations
	// for elements using data-bs attributes like the toggle button in our navbar.
	// We use onMount/async to import the JS bundle after the page has loaded, just to make sure.
	onMount(async () => {
		// @ts-ignore
		await import('bootstrap/dist/js/bootstrap.bundle.min.js');
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />

<main class="container mt-4">
	<!--	Components will be rendered here-->
	{@render children()}
</main>

<!--CountryList.svelte - displaying a list of countries-->
<script lang="ts">
    import {onMount} from 'svelte';
    import type {Country} from './types/Country';

    // local state, prepared for reactive updates
    let countries: Country[] = $state([]);
    let selectedCountry: Country | null = $state(null);
    let loading: boolean = $state(true);
    let error: string | null = $state(null);
    let url : string = 'https://restcountries.com/v3.1/all?fields=name,capital,flags';

    // loading the countries data from the API on startup.
    // More on Svelte lifecycle hooks: https://svelte.dev/docs/svelte/lifecycle-hooks
    onMount(async () => {
        try {
            // Simulated delay of 1500ms to show loading state
            await new Promise(resolve => setTimeout(resolve, 1500));
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.statusText}`);
            }
            const data: Country[] = await response.json();
            // Sort countries alphabetically by common name. For this, we provide
            // a comparison function. You can also just sort on local name for the country to make it easier.
            countries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        } catch (e) {
            error = e instanceof Error ? e.message : 'An unknown error occurred';
        } finally {
            loading = false;
        }
    });
</script>

<!--UI/HTML for this component, taking the state into account-->
<div class="country-explorer">
    <h2>Country Explorer</h2>
    <div class="description">Select a country from the dropdown to view its details. Data from
        <a href="https://restcountries.com/" target="_blank">
            https://restcountries.com/
        </a>
    </div>

    {#if loading}
        <div class="loading-container">
            <div class="spinner"></div>
            <p>Loading countries...</p>
        </div>
    {:else if error}
        <p class="error-message">Error: {error}</p>
    {:else}
        <div class="selector-container">
            <label for="country-select">Choose a country:</label>
            <select id="country-select" bind:value={selectedCountry}>
                <option value={null}>-- Please select a country --</option>
                {#each countries as country}
                    <option value={country}>{country.name.common}</option>
                {/each}
            </select>
        </div>

        {#if selectedCountry}
            <div class="country-details">
                <h3>{selectedCountry.name.common}</h3>
                <div class="details-content">
                    <img src={selectedCountry.flags.png}
                         alt={selectedCountry.flags.alt || `Flag of ${selectedCountry.name.common}`}
                         class="country-flag" />
                    <div class="text-details">
                        <p><strong>Common Name:</strong> {selectedCountry.name.common}</p>
                        <p><strong>Capital:</strong> {selectedCountry.capital?.[0] || 'N/A'}</p>
                    </div>
                </div>
            </div>
        {/if}
    {/if}
</div>

<!--CSS-->
<style>
    .country-explorer {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        font-family: sans-serif;
    }

    .description {
        margin-bottom: 20px;
        color: #666;
    }

    .selector-container {
        margin-bottom: 30px;
    }

    select {
        width: 100%;
        padding: 8px;
        font-size: 16px;
        border-radius: 4px;
        border: 1px solid #ccc;
    }

    label {
        display: block;
        margin-bottom: 8px;
        font-weight: bold;
    }

    .country-details {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 20px;
        background-color: #f9f9f9;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .details-content {
        display: flex;
        gap: 20px;
        align-items: flex-start;
    }

    .country-flag {
        max-width: 200px;
        height: auto;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    .text-details p {
        margin: 8px 0;
    }

    .error-message {
        color: red;
        font-weight: bold;
    }

    .loading-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        padding: 40px 0;
    }

    .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #4caf50;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>

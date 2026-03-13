<!--CountryList.svelte - displaying a list of countries-->
<script lang="ts">
    import type {Country} from './types/Country';

    // local state, prepared for reactive updates
    let countries: Country[] = $state([]);
    let loading: boolean = $state(false);
    let error: string | null = $state(null);
    let url: string = 'https://restcountries.com/v3.1/all?fields=name,capital,flags';
    let hasLoaded: boolean = $state(false);

    async function loadCountries() {
        loading = true;
        error = null;
        try {
            // Simulated delay of 1500ms to show loading state
            await new Promise(resolve => setTimeout(resolve, 1500));
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.statusText}`);
            }
            countries = await response.json();
            hasLoaded = true;
        } catch (e) {
            error = e instanceof Error ? e.message : 'An unknown error occurred';
        } finally {
            loading = false;
        }
    }
</script>

<!--UI/HTML for this component, taking the state into account-->
<div>
    <h2>Countries List</h2>
    <div>Displaying a list of Country data from
        <a href="https://restcountries.com/" target="_blank">
            https://restcountries.com/
        </a>
    </div>

    <button onclick={loadCountries} disabled={loading} style="margin: 10px 0;">
        <!--        Text on the button, based on current state-->
        {hasLoaded ? 'reload countries' : 'load countries'}
    </button>

    <!--List of Countries-->
    {#if loading}
        <div class="loading-container">
            <div class="spinner"></div>
            <p>Loading countries...</p>
        </div>
    {:else if error}
        <p style="color: red;">Error: {error}</p>
    {:else if hasLoaded}
        <ul class="country-grid">
            {#each countries as country}
                <li class="country-card">
                    <img src={country.flags.png} alt={country.flags.alt || `Flag of ${country.name.common}`}
                         width="50"/>
                    <div>
                        <strong>{country.name.common}</strong>
                        <p>Capital: {country.capital?.[0] || 'N/A'}</p>
                    </div>
                </li>
            {/each}
        </ul>
    {/if}
</div>

<!--CSS-->
<style>
    li {
        border: 1px solid green;
        margin: 4px;
        padding: 16px;
    }

    .country-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 16px;
        list-style: none;
        padding: 0;
    }

    .country-card {
        border: 1px solid #ccc;
        padding: 8px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .country-card img {
        border: 1px solid #eee;
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
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>

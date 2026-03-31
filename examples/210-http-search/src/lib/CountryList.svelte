<!--CountryList.svelte - displaying a list of countries-->
<script lang="ts">
    import type {Country} from './types/Country';

    // 0. local state, prepared for reactive updates
    let countries: Country[] = $state([]);
    let loading: boolean = $state(false);
    let error: string | null = $state(null);
    let searchTerm: string = $state(''); // string holding the search term from the input box
    let hasSearched: boolean = $state(false); // to prevent error msg from showing up when the user has not searched yet

    // 1. these variable don't change, so we don't need to use $state();
    const url = 'https://restcountries.com/v3.1/name/';
    const fields = '?fields=name,capital,flags'
    const errorMsg = 'Please enter at least 3 characters to search.';

    // 2. helper function to clear the results and reset the state
    function clearResults() {
        countries = [];
        hasSearched = false;
    }

    // 3. Search countries by name.
    // The API endpoint is: https://restcountries.com/v3.1/name/{name}
    // It filters for countries that have that part in their name.
    async function searchCountries() {
        // check if the search term is not empty
        if (!searchTerm.trim()) return;

        // we need at least 3 characters to search.
        if (searchTerm.length < 3) {
            error = errorMsg; // UI
            throw new Error(errorMsg); // DevTools Console
        }

        // resetting the state
        loading = true;
        error = null;
        countries = [];

        try {
            // Simulated delay of 1500ms to show loading state
            await new Promise(resolve => setTimeout(resolve, 1500));

            // composing the correct url
            const response = await fetch(`${url}${searchTerm}${fields}`);
            if (response.status === 404) {
                // If no countries are found, the API returns a 404.
                countries = [];
                hasSearched = true;
                return;
            }

            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.statusText}`);
            }
            countries = await response.json();
            hasSearched = true;
            searchTerm = '';
        } catch (e) {
            error = e instanceof Error ? e.message : 'An unknown error occurred';
        } finally {
            loading = false;
        }
    }

    // Handler for the Enter key press (user can also click the search button)
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            searchCountries();
        }
    }
</script>

<!--UI/HTML for this component, taking the state into account-->
<div>
    <h2>Countries List</h2>
    <div>Searching for specific country(ies) from
        <a href="https://restcountries.com/" target="_blank">
            https://restcountries.com/
        </a>
    </div>
    <!--Search UI-->
    <div class="search-container">
        <input
                type="text"
                bind:value={searchTerm}
                onkeydown={handleKeyDown}
                placeholder="Enter country name..."
        />
        <button onclick={searchCountries} disabled={loading}>search</button>
    </div>

    <!--List of Countries-->
    {#if loading}
        <div class="loading-container">
            <div class="spinner"></div>
            <p>Loading countries...</p>
        </div>
    {:else if error}
        <p style="color: red;">Error: {error}</p>
    {:else if countries.length > 0}
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
        <button class="clear-button" onclick={clearResults}>Clear</button>
    {:else if hasSearched && !loading}
        <!--  We can also set 'error' if no countries are found.-->
        <p>
            No countries found matching <strong>"{searchTerm}"</strong>.
        </p>
    {/if}
</div>

<!-- Some styles for this component. Can of course be moved to a separate CSS file
     or use Tailwind CSS or Bootstrap or other component library. -->
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

    .search-container {
        display: flex;
        gap: 8px;
        margin: 20px 0;
    }

    .search-container input {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        flex-grow: 1;
    }

    .search-container button {
        padding: 8px 16px;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .search-container button:hover {
        background-color: #45a049;
    }

    .search-container button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    .clear-button {
        margin-top: 16px;
        padding: 8px 16px;
        background-color: #f44336;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .clear-button:hover {
        background-color: #d32f2f;
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

<!--CountryList.svelte - displaying a list of countries-->
<script lang="ts">
    import type {Country} from './types/Country';
    import CountryDetail from './CountryDetail.svelte';

    // 0. local state, prepared for reactive updates
    let countries: Country[] = $state([]);
    let loading: boolean = $state(false);
    let error: string | null = $state(null);
    let searchTerm: string = $state(''); // string holding the search term from the input box
    let hasSearched: boolean = $state(false); // to prevent error msg from showing up when the user has not searched yet

    // 0a. More local state, handling loading of country details.
    let selectedCountry: Country | null = $state(null);
    let loadingDetail: boolean = $state(false);

    // 1. these variable don't change, so we don't need to use $state();
    const url = `https://restcountries.com/v3.1/name/{name}?fields=name,capital,flags`;
    const detailUrl = `https://restcountries.com/v3.1/name/{name}?fullText=true&fields=name,capital,flags,population,region,borders,continents`;
    const errorMsg = 'Please enter at least 3 characters to search.';

    // 2. helper function to clear the results and reset the state
    function clearResults() {
        countries = [];
        hasSearched = false;
        selectedCountry = null;
    }

    async function fetchCountryDetail(name: string) {
        loadingDetail = true;
        error = null;
        try {
            const response = await fetch(detailUrl.replace('{name}', encodeURIComponent(name)));
            if (!response.ok) {
                throw new Error(`Failed to fetch details: ${response.statusText}`);
            }
            const data = await response.json();
            // Since fullText=true is used, the API returns an array with one element if successful
            selectedCountry = data[0];
        } catch (e) {
            error = e instanceof Error ? e.message : 'An error occurred while fetching details';
        } finally {
            loadingDetail = false;
        }
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

            // using .replace() here to replace the placeholder {name} with the actual search term;
            // of course this can also be done in the API endpoint itself or using string literals.
            const response = await fetch(url.replace('{name}', encodeURIComponent(searchTerm)));
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

    <div class="main-content">
        <!--Left Column: List of Countries-->
        <div class="list-column">
            {#if loading}
                <div class="loading-container">
                    <div class="spinner"></div>
                    <p>Loading countries...</p>
                </div>
            {:else if error}
                <p style="color: red;">Error: {error}</p>
            {:else if countries.length > 0}
                <ul class="country-list">
                    {#each countries as country}
                        <li class="country-list-item">
                            <div class="country-info">
                                <img src={country.flags.png} alt={country.flags.alt || `Flag of ${country.name.common}`}
                                     width="50"/>
                                <div class="card-text">
                                    <strong>{country.name.common}</strong>
                                    <p>Capital: {country.capital?.[0] || 'N/A'}</p>
                                </div>
                            </div>
                            <!-- In the main list we add a button to search for details-->
                            <button
                                    class="details-button"
                                    onclick={() => fetchCountryDetail(country.name.common)}
                                    type="button">
                                Details
                            </button>
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

        <!--Right Column: Country Details-->
        <div class="detail-column">
            <!-- This template logic is only here to make it look nice-->
            {#if loadingDetail}
                <div class="loading-container">
                    <div class="spinner"></div>
                    <p>Fetching details...</p>
                </div>
            {:else if selectedCountry}
                <!-- Here: passing the data down to the CountryDetail component.-->
                <!-- This is a View Component, so it contains no logic. Only View data and functions-->
                <CountryDetail country={selectedCountry} onClear={() => selectedCountry = null}/>
            {:else if countries.length > 0}
                <!-- Show the placeholder only if there is at least one country in the list and no country is currently selected-->
                <p class="placeholder-text">please select a country from the list</p>
            {/if}
        </div>
    </div>
</div>

<!-- Some styles for this component. Using flexbox here.
     Can of course be moved to a separate CSS file
     or use Tailwind CSS or Bootstrap or other component library. -->
<style>
    li {
        margin: 4px;
    }

    .main-content {
        display: flex;
        gap: 24px;
        align-items: flex-start;
    }

    .list-column {
        flex: 1;
    }

    .detail-column {
        flex: 1;
        min-width: 300px;
    }

    .country-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
        list-style: none;
        padding: 0;
    }

    .country-list-item {
        border: 1px solid #ccc;
        padding: 8px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        transition: background-color 0.2s;
    }

    .country-info {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .details-button {
        padding: 6px 12px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .details-button:hover {
        background-color: #45a049;
    }

    .card-text {
        display: flex;
        flex-direction: column;
    }

    .card-text p {
        margin: 0;
    }

    .country-list-item:hover {
        background-color: #f0f0f0;
    }

    .country-list-item img {
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

    .placeholder-text {
        color: #666;
        font-style: italic;
        padding: 40px;
        text-align: center;
        border: 1px dashed #ccc;
        border-radius: 8px;
    }
</style>

<script lang="ts">
    import type {Country} from './types/Country';
    import CountryList from './CountryList.svelte';
    import CountryDetail from './CountryDetail.svelte';
    import SearchCountries from './SearchCountries.svelte';

    // This is the 'Smart Component'. It is the parent for the child components, which are pure View components.
    // It holds all logic, hooks up the state management, API calls, and business logic to the UI components.

    // 0. State management
    let countries: Country[] = $state([]);
    let loading: boolean = $state(false);
    let error: string | null = $state(null);
    let searchTerm: string = $state('');
    let hasSearched: boolean = $state(false);
    let selectedCountry: Country | null = $state(null);
    let loadingDetail: boolean = $state(false);

    // 1. API URLs
    const url = `https://restcountries.com/v3.1/name/{name}?fields=name,capital,flags`;
    const detailUrl = `https://restcountries.com/v3.1/name/{name}?fullText=true&fields=name,capital,flags,population,region,borders,continents`;
    const errorMsg = 'Please enter at least 3 characters to search.';

    // 2. Business Logic

    // 2a. Clear results
    function clearResults() {
        countries = [];
        hasSearched = false;
        selectedCountry = null;
        error = null;
    }

    // 2b. Search countries
    async function searchCountries(term: string) {
        if (!term.trim()) return;

        if (term.length < 3) {
            error = errorMsg;
            return;
        }

        loading = true;
        error = null;
        countries = [];
        selectedCountry = null;

        try {
            // Simulated delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            const response = await fetch(url.replace('{name}', encodeURIComponent(term)));
            if (response.status === 404) {
                countries = [];
                hasSearched = true;
                return;
            }

            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.statusText}`);
            }
            countries = await response.json();
            hasSearched = true;
        } catch (e) {
            error = e instanceof Error ? e.message : 'An unknown error occurred';
        } finally {
            loading = false;
        }
    }

    // 2c. Fetch country details
    async function fetchCountryDetail(name: string) {
        loadingDetail = true;
        error = null;
        try {
            const response = await fetch(detailUrl.replace('{name}', encodeURIComponent(name)));
            if (!response.ok) {
                throw new Error(`Failed to fetch details: ${response.statusText}`);
            }
            const data = await response.json();
            selectedCountry = data[0];
        } catch (e) {
            error = e instanceof Error ? e.message : 'An error occurred while fetching details';
        } finally {
            loadingDetail = false;
        }
    }


    // 2d. A new search term is entered in the search input (child component).
    // Set the state and pass the search term to the parent component.
    function handleSearchTermChange(term: string) {
        searchTerm = term;
    }
</script>

<!-- The UI of this smart component is pretty minimal.
    It just renders the child components and some basic layout styles like columns etc. -->
<div class="country-container">
    <h2>Countries List</h2>
    <div>Searching for specific country(ies) from
        <a href="https://restcountries.com/" target="_blank">
            https://restcountries.com/
        </a>
    </div>

    <!-- The first View Component. We pass in the search term and loading state-->
    <SearchCountries
            {searchTerm}
            {loading}
            onSearch={searchCountries}
            onSearchTermChange={handleSearchTermChange}
    />

    <div class="main-content">
        <!-- The Second View Component. We pass in the countries list, loading state, error, and search term-->
        <CountryList
                {countries}
                {loading}
                {error}
                {hasSearched}
                {searchTerm}
                onFetchDetail={fetchCountryDetail}
                onClear={clearResults}
        />

        <div class="detail-column">
            <!-- The Third View Component. We pass in the selected country, loading state, and error-->
            {#if loadingDetail}
                <div class="loading-container">
                    <div class="spinner"></div>
                    <p>Fetching details...</p>
                </div>
            {:else if selectedCountry}
                <CountryDetail
                        country={selectedCountry}
                        onClear={() => selectedCountry = null}
                />
            {:else if countries.length > 0}
                <p class="placeholder-text">please select a country from the list</p>
            {/if}
        </div>
    </div>
</div>

<style>
    .country-container {
        padding: 20px;
    }

    .main-content {
        display: flex;
        gap: 24px;
        align-items: flex-start;
    }

    .detail-column {
        flex: 1;
        min-width: 300px;
    }

    .placeholder-text {
        text-align: center;
        color: #666;
        font-style: italic;
        margin-top: 50px;
    }

    .loading-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    .spinner {
        border: 4px solid #f3f3f3;
        border-top: 4px solid #3498db;
        border-radius: 50%;
        width: 30px;
        height: 30px;
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

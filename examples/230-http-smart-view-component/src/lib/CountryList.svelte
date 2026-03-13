<script lang="ts">
    import type {Country} from './types/Country';

    interface Props {
        countries: Country[];
        loading: boolean;
        error: string | null;
        hasSearched: boolean;
        searchTerm: string;
        onFetchDetail: (name: string) => void;
        onClear: () => void;
    }

    let { countries, loading, error, hasSearched, searchTerm, onFetchDetail, onClear }: Props = $props();
</script>

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
                    <button
                            class="details-button"
                            onclick={() => onFetchDetail(country.name.common)}
                            type="button">
                        Details
                    </button>
                </li>
            {/each}
        </ul>
        <button class="clear-button" onclick={onClear}>Clear</button>
    {:else if hasSearched && !loading}
        <p>
            No countries found matching <strong>"{searchTerm}"</strong>.
        </p>
    {/if}
</div>

<style>
    .list-column {
        flex: 1;
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

    .card-text {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .card-text p {
        margin: 0;
        font-size: 0.9em;
        color: #666;
    }

    .details-button {
        background-color: #4CAF50;
        color: white;
        border: none;
        padding: 6px 12px;
        border-radius: 4px;
        cursor: pointer;
    }

    .details-button:hover {
        background-color: #45a049;
    }

    .clear-button {
        margin-top: 20px;
        background-color: #6c757d;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
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
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>

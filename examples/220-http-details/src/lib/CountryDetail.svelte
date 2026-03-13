<!--CountryDetail.svelte - displaying details of a specific country-->
<script lang="ts">
    import type {Country} from './types/Country';

    // Proper types for the props passed to this component
    interface Props {
        country: Country;
        onClear: () => void;
    }

    // destructure the props passed to this component
    let {country, onClear}: Props = $props();

    // No further logic or state changes in this component.
    // It is just a VIEW Component.
</script>

<!--UI/HTML for this component, taking the state into account-->
<div class="country-detail">
    <div class="header">
        <h2>{country.name.common}</h2>
    </div>
    <img src={country.flags.png} alt={country.flags.alt || `Flag of ${country.name.common}`}/>
    <div class="info">
        <p><strong>Official Name:</strong> {country.name.official}</p>
        <p><strong>Capital:</strong> {country.capital?.join(', ') || 'N/A'}</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Continents:</strong> {country.continents.join(', ')}</p>
        <p><strong>Borders:</strong> {country.borders?.join(', ') || 'None'}</p>
    </div>
    <!--    Clicking this button calls the onClear function passed as a prop from the parent component!-->
    <!--    So this component is a pure View Component. It does not have any logic or change the state-->
    <button class="detail-clear-button" onclick={onClear}>Clear</button>
</div>

<!-- Some styles for this component. Can of course be moved to a separate CSS file
     or use Tailwind CSS or Bootstrap or other component library. -->
<style>
    .country-detail {
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #f9f9f9;
        position: sticky;
        top: 20px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
    }

    .header h2 {
        margin: 0;
    }

    .detail-clear-button {
        background-color: #ff4444;
        color: white;
        border: none;
        padding: 6px 12px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9em;
    }

    .detail-clear-button:hover {
        background-color: #cc0000;
    }

    .country-detail img {
        max-width: 100%;
        height: auto;
        border: 1px solid #eee;
        margin-bottom: 16px;
    }

    .info p {
        margin: 8px 0;
    }

    .info strong {
        color: #333;
    }
</style>

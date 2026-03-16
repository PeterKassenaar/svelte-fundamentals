<script lang="ts">
    // Example of a <select>/dropdown component
    let selectedCountry = 'NL';

    const countries = [
        { code: 'NL', name: 'Netherlands' },
        { code: 'DE', name: 'Germany' },
        { code: 'FR', name: 'France' },
        { code: 'ES', name: 'Spain' }
    ];
</script>

<h3>Select Country from dropdown</h3>
<p>
    The <code>code</code> property represents the country code,
    which is used for identification purposes.
</p>
<p>Selected country code: <strong>{selectedCountry}</strong></p>
<select bind:value={selectedCountry}>
    {#each countries as country}
        <option value={country.code}>
            {country.name}
        </option>
    {/each}
</select>


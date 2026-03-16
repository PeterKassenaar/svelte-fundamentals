<script lang="ts">
    // Option 1: Example of a <select>/dropdown component
    let selectedCountry = 'NL';


    // Option 2: using a complete object as binding
    interface Country {
        code: string;
        name: string;
    }
    let selectedCountryObject: Country;

    // Our array with country data which is bound to the dropdown.
    const countries: Country[] = [
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
<hr>

<!--<p>Also possible: using a complete object as binding:</p>-->
<!--<p>Selected country: {selectedCountryObject?.name}</p>-->

<!--<select bind:value={selectedCountryObject}>-->
<!--    {#each countries as country}-->
<!--        <option value={country}>-->
<!--            {country.name}-->
<!--        </option>-->
<!--    {/each}-->
<!--</select>-->


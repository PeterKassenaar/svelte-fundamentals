<script lang="ts">
    import CountryList from './lib/CountryList.svelte';
    import CountryListOnClick from "./lib/CountryListOnClick.svelte";
</script>

<!--HTML template-->
<div>
    <h1>Svelte app</h1>
    <CountryList />
</div>

<style>
    div {
        border: 1px solid red;
        padding: 10px;
    }
</style>

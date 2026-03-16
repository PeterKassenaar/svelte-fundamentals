<script lang="ts">
    // import the components that use the state
    import CounterDisplay from "./lib/CounterDisplay.svelte";
    import CounterControls from "./lib/CounterControls.svelte";
</script>

<!--HTML template-->
<div>
    <h2>Shared state with Svelte 5 runes</h2>
    <CounterDisplay/>
    <hr>
    <CounterControls/>
</div>

<style>
    div {
        border: 1px solid red;
        padding: 10px;
    }
</style>

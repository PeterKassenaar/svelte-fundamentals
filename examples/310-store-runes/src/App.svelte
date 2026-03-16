<script lang="ts">

    import CounterDisplay from "./lib/CounterDisplay.svelte";
    import CounterControls from "./lib/CounterControls.svelte";
</script>

<!--HTML template-->
<div>
    <h1>Svelte app</h1>
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

<script lang="ts">
import StateReadWriteComponent from "./lib/StateReadWriteComponent.svelte";
import StateReadOnlyComponent from "./lib/StateReadOnlyComponent.svelte";
</script>

<!--HTML template-->
<div>
    <h1>Svelte app</h1>
    <StateReadWriteComponent />
    <hr>
    <StateReadOnlyComponent />
</div>

<style>
    div {
        border: 1px solid red;
        padding: 10px;
    }
</style>

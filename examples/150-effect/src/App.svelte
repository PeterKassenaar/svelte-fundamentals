<script lang="ts">

import EffectComponent from "./lib/EffectComponent.svelte";
</script>

<!--HTML template-->
<div>
    <h1>Svelte app</h1>
    <EffectComponent/>
<!--    Example on a more complex component using $effect()-->
<!--    <EffectComponent2/>-->
</div>

<style>
    div {
        border: 1px solid red;
        padding: 10px;
    }
</style>

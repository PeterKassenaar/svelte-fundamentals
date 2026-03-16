<script lang="ts">
    import {counterState} from "./store/counterstate.svelte";
</script>

<h3>Counter Display</h3>
<!--Note: no $ prefix needed-->
<p>Current count: {counterState.count}</p>

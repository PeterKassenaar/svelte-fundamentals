<!--CounterDisplay.svelte - just showing the current state of the counter-->
<script lang="ts">
    import {counterState} from "./store/counterstate.svelte";
</script>

<h3>Counter Display</h3>
<!--Note: no $ prefix needed, as opposd to classic Svelte stores -->
<p>Current count: {counterState.count}</p>

<script lang="ts">
    import {counterState, increment, decrement, reset} from './store/counterstate.svelte';
</script>

<h3>Counter Controls</h3>

<button class="btn btn-decrement" onclick={increment}>+</button>
<button class="btn btn-increment" onclick={decrement}>-</button>
<button class="btn btn-reset" onclick={reset}>Reset</button>

<p>Count in controls: {counterState.count}</p>

<!--Some simple CSS for this component-->
<style>
    .btn {
        padding: 8px 16px;
        margin: 5px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
    }

    .btn-increment {
        background-color: #4CAF50;
        color: white;
    }

    .btn-increment:hover {
        background-color: #45a049;
    }

    .btn-decrement {
        background-color: #f44336;
        color: white;
    }

    .btn-decrement:hover {
        background-color: #da190b;
    }
</style>

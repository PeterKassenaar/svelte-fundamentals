<script lang="ts">
    // importing the counter from a global store
    import {counter} from "./store/counterStore";

    // functions to update the counter. The store has a method .update()
    const increment = () => counter.update(n => n + 1);
    const decrement = () => counter.update(n => n - 1);

    // Workshop 1: Reset the counter to 0, using the .set() method
</script>

<!--UI for this component-->
<h2>Updating the state:</h2>
<h3>value of count: { $counter}</h3>
<div>
    <button class="btn btn-increment" onclick={increment}>
        Increment +
    </button>
    <button class="btn btn-decrement" onclick={decrement}>
        Decrement -
    </button>
    <!--    Workshop: create a button to reset the state counter to 0-->
</div>

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


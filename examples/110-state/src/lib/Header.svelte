<!--Header.svelte-->
<script lang="ts">
    let {name, age} = $props();
</script>

<div>
    <h2>Hello, my name is { name}</h2>
    <p>And I am {age} years old</p>
</div>
<style>
    div {
        border: 1px solid #ccc;
        padding: 4px;
        margin: 4px;
    }
</style>

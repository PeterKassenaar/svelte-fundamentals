<!--ReactiveName.svelte-->
<script lang="ts">
    // name is now a reactive variable
    let name = $state('Peter');
    // Derived state: the variable is updated when 'name' changes.
    // It is 'dependend' on another state variable.
    let full_name = $derived(`${name} Kassenaar`);
</script>

<!--UI-->
<div>
    <!--    Using the state. 1. Using 'name'-->
    <p>Using <code>$state()</code>: Type a name</p>
    <input type="text"
           bind:value={name}
           placeholder="your name..."/>
    <h3>Hello { name }</h3>
    Using derived state: updated when 'name' changes
    <h3>Hello {full_name}</h3>
</div>


<style>
    div {
        border: 1px solid blue;
        padding: 4px;
        margin: 4px;
    }
</style>


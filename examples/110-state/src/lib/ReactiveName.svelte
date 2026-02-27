<!--ReactiveName.svelte-->
<script lang="ts">
    // name is now a reactive variable
    let name = $state('Peter');
    let status: 'Open' | 'Closed' = $state('Open');
    const toggle = () => {
        status = status === 'Open' ? 'Closed' : 'Open';
    }
    // shorthand notation for the onclick event
    const onclick = () => {
        status = status === 'Open' ? 'Closed' : 'Open';
    }

</script>

<!--UI-->
<div>
    <!--    Using the state. 1. Using 'name'-->
    <p>Using <code>$state()</code>: Type a name</p>
    <input type="text"
           bind:value={name}
           placeholder="your name..."/>
    <h3>Hello { name }</h3>
    <!--    Using the state. 2. Using 'status'-->
    <h2>Our store is now: {status}</h2>
    <button onclick={toggle}>Toggle status</button>
    <!--    ALso available: shorthand notation (in this case: onclick)-->
    <!--    <button {onclick}> Toggle status (shorthand</button>-->
</div>


<style>
    div {
        border: 1px solid blue;
        padding: 4px;
        margin: 4px;
    }
</style>


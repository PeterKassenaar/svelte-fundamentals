<script lang="ts">

    // import components
    import DefaultProps from "./lib/DefaultProps.svelte";
    import UpdateProps from "./lib/UpdateProps.svelte";
    import BindableProps from "./lib/BindableProps.svelte";

    let count = $state(10);
</script>

<!--HTML template-->
<div>
    <h1>Svelte app</h1>
    <DefaultProps message="Hello world" a="1" b="2"/>
    <!--    <UpdateProps count={count}/>-->
    <!--    <button onclick={()=>count++}>Update count in parent</button>-->
    <!--    <BindableProps bind:count={count}/>-->
    <!--    <p>Value of count: {count} (it is changed in the client component)</p>-->
</div>

<!--Styles for this component, to distinguish it from child components -->
<style>
    div {
        border: 1px solid red;
        padding: 10px;
    }
</style>

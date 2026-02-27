<script>
    import Counter from "./lib/Counter.svelte";
    import ReactiveName from "./lib/ReactiveName.svelte";
</script>

<!--HTML template-->
<div>
    <h1>Svelte app</h1>
    <!-- Including the counter component -->
    <Counter/>

    <!--    Including the ReactiveName component-->
    <ReactiveName/>
</div>

<style>
    div {
        border: 1px solid red;
        padding: 10px;
    }
</style>

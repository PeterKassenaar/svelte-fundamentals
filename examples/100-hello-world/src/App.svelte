<script>
    import Header from "./lib/Header.svelte";
    let name = "Peter";
    let age = 12;
</script>

<!--HTML template-->
<div>
    <h1>Svelte app</h1>
    <!--    Traditional notation-->
    <Header name={name} age={age}/>
    <!-- Shorthand notation,
        when key and value are the same-->
    <Header {name} {age}/>
</div>

<style>
    div {
        border: 1px solid red;
        padding: 10px;
    }
</style>

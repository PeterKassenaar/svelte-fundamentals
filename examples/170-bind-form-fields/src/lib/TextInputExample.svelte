<script lang="ts">
    let name = '';
</script>

<h3>Text Input</h3>

<!--Svelte two-way binding-->
<input type="text" bind:value={name} placeholder="Enter your name" />

<!--Is shorthand notation for: -->
<!--<input-->
<!--        value={name}-->
<!--        on:input={(e:any) => name = e.target.value}-->
<!--/>-->
<p>Hello {name}</p>

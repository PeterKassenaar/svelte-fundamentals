<script lang="ts">
    let fruits : string[] = [];
</script>

<h3>Checkbox Group</h3>

<!--In real life: of course create an array containing fruits and loop over them-->
<label>
    <input type="checkbox" bind:group={fruits} value="apple" />
    Apple
</label>

<label>
    <input type="checkbox" bind:group={fruits} value="banana" />
    Banana
</label>

<label>
    <input type="checkbox" bind:group={fruits} value="orange" />
    Orange
</label>

<label>
    <input type="checkbox" bind:group={fruits} value="pear" />
    Pear
</label>

<p>Selected fruits: [{fruits.join(', ')}]</p>

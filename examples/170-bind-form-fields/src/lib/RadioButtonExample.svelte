<script lang="ts">
    let color = 'red';
</script>

<h3>Radio buttons</h3>

<label>
    <input type="radio" bind:group={color} value="red" />
    Red
</label>

<label>
    <input type="radio" bind:group={color} value="green" />
    Green
</label>

<label>
    <input type="radio" bind:group={color} value="blue" />
    Blue
</label>

<p>Selected color: {color}</p>

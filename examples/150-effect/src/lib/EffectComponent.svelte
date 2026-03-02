<script lang="ts">
    let sliderValue = $state(50);

    $effect(() => {
        // This effect will run, every time the sliderValue changes (b/c this is state)
        console.log('Slider value changed to:', sliderValue);
    });
</script>

<!--html part-->
<div class="component">
    <h2>Simple <code>$effect()</code> component</h2>
    <input type="range" min="0" max="100" bind:value={sliderValue}/>
    <div>Current value: {sliderValue}</div>
</div>
<style>
    .component {
        border: 1px solid #ccc;
        margin: 4px;
        padding: 4px;
    }
</style>

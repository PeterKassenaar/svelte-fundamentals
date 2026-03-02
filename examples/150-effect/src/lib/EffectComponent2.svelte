<script lang="ts">
    // Declare a reactive state variable for the slider value,
    // initialized to 10.
    let sliderValue = $state(10);

    // Create a derived reactive value that updates automatically based on sliderValue
    // Credits: https://svelte.dev/docs/svelte/$derived#$derived.by
    let temperatureIndicator = $derived.by(() => {
        // Bunch of if-statements, reading the current temperature
        if (sliderValue < -10) return 'freezing';
        if (sliderValue >= -10 && sliderValue <= 10) return 'cold';
        if (sliderValue >= 11 && sliderValue <= 20) return 'fine';
        if (sliderValue >= 21 && sliderValue <= 35) return 'warm';
        return 'hot';
    });

    // Reactive state for the colors
    let backgroundColor = $state('darkblue');
    let textColor = $state('white');

    // Run this effect whenever temperatureIndicator changes
    $effect(() => {
        // Switch based on the current temperature category
        switch (temperatureIndicator) {
            case 'freezing':
                backgroundColor = 'darkblue';
                textColor = 'white';
                break;
            case 'cold':
                backgroundColor = 'lightblue';
                textColor = 'black';
                break;
            case 'fine':
                backgroundColor = 'green';
                textColor = 'white';
                break;
            case 'warm':
                backgroundColor = 'orange';
                textColor = 'black';
                break;
            case 'hot':
                backgroundColor = 'red';
                textColor = 'white';
                break;
        }
    });

    // Side effect to log the slider value to the console
    // whenever it changes. Note: we can have **multiple** effects.
    // They all run when the state changes.
    $effect(() => {
        console.log('Slider value changed to:', sliderValue); // debugging purposes
    });
</script>

<!-- Container div with dynamic background and text color styling -->
<div class="component"
     style:background-color={backgroundColor}
     style:color={textColor}>
    <h2>More complex <code>$effect()</code> component</h2>
    <input type="range" min="-25" max="45" bind:value={sliderValue}/>
    <!-- Output container for displaying the current value and indicator -->
    <div class="slider-output">
        <p>Current Temperature: {sliderValue}°C ({temperatureIndicator})</p>
    </div>
</div>

<style>
    /* Styling for the main component container */
    .component {
        border: 1px solid #ccc;
        margin: 4px;
        padding: 4px;
        /* Enable smooth transitions for color and background color changes */
        transition: background-color 0.5s ease, color 0.5s ease;
    }
    /* Styling for the numeric output section */
    .slider-output {
        font-weight: bold;
        margin-top: 10px;
    }
</style>

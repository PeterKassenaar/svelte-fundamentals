<script lang="ts">

    // Examples in this mini project. Replace the component on line 13 to use the other examples.
    import TextInputExample from "./lib/TextInputExample.svelte";
    import CheckboxExample from "./lib/CheckboxExample.svelte";
    import RadioButtonExample from "./lib/RadioButtonExample.svelte";
    import CheckboxGroupExample from "./lib/CheckboxGroupExample.svelte";
    import TextAreaExample from "./lib/TextAreaExample.svelte";
    import SelectExample from "./lib/SelectExample.svelte";
</script>
<!--HTML template-->
<div>
    <h2>A small Svelte app showing different <code>bind:</code> options for form fields</h2>
    <TextInputExample/>
</div>

<style>
    div {
        border: 1px solid red;
        padding: 10px;
    }
</style>

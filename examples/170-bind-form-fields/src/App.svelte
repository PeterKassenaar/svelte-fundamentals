<script lang="ts">

    import TextInputExample from "./lib/TextInputExample.svelte";
    import CheckboxExample from "./lib/CheckboxExample.svelte";
    import RadioButtonExample from "./lib/RadioButtonExample.svelte";
    import CheckboxGroupExample from "./lib/CheckboxGroupExample.svelte";
    import TextAreaExample from "./lib/TextAreaExample.svelte";
</script>
<!--HTML template-->
<div>
    <h2>A small Svelte app showing different <code>bind:</code> options for form fields</h2>
    <TextInputExample />
</div>

<style>
    div {
        border: 1px solid red;
        padding: 10px;
    }
</style>

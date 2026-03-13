<script lang="ts">
    let {
        // 1. normal property
        message,

        // 2. normal property with default value
        defaultMessage = 'Please provide a message',

        // 3. rest of the properties, using the rest (...) operator
        ...rest
    } = $props();
</script>


<!--UI/HTML for this component-->
<div>
    <!--    Using destructured props-->
    <h2>Message from parent component: <code>{ message }</code></h2>
    <h2>Default Message: <code>{ defaultMessage }</code></h2>
    <h2>Rest of the properties:</h2>
    <code>{ JSON.stringify(rest) }</code>

</div>


<!--CSS-->
<style>
    div {
        border: 1px solid green;
        margin: 4px;
        padding: 4px;
    }
</style>

<script lang="ts">
    interface Props {
        count: number
    }

    let {
        // reactive prop, using TypeScript interface
        count
    }: Props = $props();
</script>


<!--UI/HTML for this component-->
<div>
    <!--    The property is updated in the parent component-->
    <h2>Value <code>count</code>: {count}</h2>

</div>


<!--CSS-->
<style>
    div {
        border: 1px solid green;
        margin: 4px;
        padding: 4px;
    }
</style>

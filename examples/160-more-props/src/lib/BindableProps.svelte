<script lang="ts">
    interface Props {
        count: number
    }

    let {
        // bindable prop, using TypeScript interface.
        // Changes in this client, are propagated to the parent component.
        count = $bindable(),
    }: Props = $props();
</script>


<!--UI/HTML for this component-->
<div>
    <!--    The property is updated in the parent component-->
    <h2>Value <code>count</code>: {count}</h2>
    <button onclick={()=>count++}>Update count in child</button>

</div>


<!--CSS-->
<style>
    div {
        border: 1px solid green;
        margin: 4px;
        padding: 4px;
    }
</style>

<script lang="ts">
    let count: number = $state(0) // the state is intialized with a number
    let name: string = $state('Peter') // the state is intialized with a string

    // function
    const increment = () => {
        // update the state. Here, 'count' is just a variable
        // that you can update directly (unlike other frameworks, where 'count' is an object)
        count += 1
    }
</script>
<div>
    <button onclick={increment}>
        count is {count}
    </button>
</div>

<style>
    div {
        border: 1px solid green;
        padding: 4px;
        margin: 4px;
    }
</style>

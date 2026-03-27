<script lang="ts">
  // variable in this component. It is reactive, b/c of $state()
  let count: number = $state(0)

  // function to update the variable
  const increment = () => {
    count += 1
  }
</script>

<!--Call function. Use simple javascript 'onclick' for that-->
<button onclick={increment}>
  count is {count}
</button>

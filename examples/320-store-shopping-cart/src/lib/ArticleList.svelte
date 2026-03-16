<script lang="ts">
    // import stuff from the store - don't do anything with it inside this component
    import {addToCart, shopState} from './store/shopStore.svelte';
</script>

<!--Our list with articles. They come from a central store-->
<!--Some Bootstrap Styling to make it look nice-->
<h2 class="mb-4 border-bottom pb-2">Articles</h2>

<div class="list-group">
    {#each shopState.articles as article}
        <div class="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <h5 class="mb-1">{article.name}</h5>
                <p class="mb-0 text-muted small">Price: €{article.price.toFixed(2)}</p>
            </div>
            <!-- This is a pure View Component, so we call a function in the store.
                 The component itself only displays the data-->
            <button class="btn btn-primary btn-sm" onclick={() => addToCart(article)}>
                Add to cart
            </button>
        </div>
    {/each}
</div>

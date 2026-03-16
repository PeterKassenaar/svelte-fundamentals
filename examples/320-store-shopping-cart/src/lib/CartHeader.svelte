<script lang="ts">
    import { getCartSummary } from './store/shopStore.svelte';
</script>

<!-- This is a pure View Component, the component itself only displays the totalPrice from the store -->
<header class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container d-flex justify-content-between">
        <span class="navbar-brand d-flex align-items-center">
            <strong>🛒 Shopping Cart Demo</strong>
        </span>
        <div class="text-light">
            <span class="me-2 text-secondary">Total:</span>
            <span class="h5 mb-0">€{getCartSummary().totalPrice.toFixed(2)}</span>
        </div>
    </div>
</header>

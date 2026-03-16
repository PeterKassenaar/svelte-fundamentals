<script lang="ts">
    // import the stuff from the store. There is no logic here to manipulate the data.
    import {
        clearCart,
        getCartSummary,
        orderCart,
        shopState
    } from './store/shopStore.svelte';
</script>

<!--UI for this component. Only Bootstrap classes to make it look nice-->
<h2 class="mb-4 border-bottom pb-2">Shopping Cart</h2>

{#if shopState.cart.length === 0}
    <div class="alert alert-info">
        Your shopping cart is empty.
    </div>
{:else}
    <div class="table-responsive">
        <table class="table table-striped table-hover align-middle">
            <thead class="table-light">
            <tr>
                <th>Article</th>
                <th class="text-end">Price</th>
                <th class="text-center">Qty</th>
                <th class="text-end">Total</th>
            </tr>
            </thead>
            <tbody>
            {#each shopState.cart as item}
                <tr>
                    <td>{item.name}</td>
                    <td class="text-end">€{item.price.toFixed(2)}</td>
                    <td class="text-center">{item.quantity}</td>
                    <td class="text-end fw-bold">€{(item.price * item.quantity).toFixed(2)}</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>

    <div class="mt-4 p-3 bg-light rounded">
        <div class="d-flex justify-content-between mb-2">
            <span>Total items:</span>
            <span class="fw-bold">{getCartSummary().totalItems}</span>
        </div>
        <div class="d-flex justify-content-between border-top pt-2">
            <span class="h5 mb-0">Total price:</span>
            <span class="h5 mb-0 text-primary">€{getCartSummary().totalPrice.toFixed(2)}</span>
        </div>
    </div>

    <div class="mt-4 d-flex gap-2">
        <button class="btn btn-success flex-grow-1" onclick={orderCart}>Order Now</button>
        <button class="btn btn-outline-danger" onclick={clearCart}>Clear Cart</button>
    </div>
{/if}

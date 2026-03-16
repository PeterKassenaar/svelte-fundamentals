<script lang="ts">
    // import bootstrap css library to make it look nice.
    // You could also use a CSS framework like Tailwind CSS or Material Design, etc.
    import 'bootstrap/dist/css/bootstrap.min.css';

    // import our different components
    import ArticleList from './lib/ArticleList.svelte';
    import ShoppingCart from './lib/ShoppingCart.svelte';
    import CartHeader from "./lib/CartHeader.svelte";
</script>

<!-- This is a View Component. It only displays the UI. There is no logic in this component -->
<CartHeader />

<!--Content, only using some Bootstrap 5 CSS classes to make it look nice-->
<div class="container mt-4">
    <h1 class="mb-4 text-center">Svelte 5 Shopping Cart</h1>

    <div class="row">
        <div class="col-md-6 mb-4">
            <div class="card h-100">
                <div class="card-body">
                    <ArticleList />
                </div>
            </div>
        </div>

        <div class="col-md-6 mb-4">
            <div class="card h-100">
                <div class="card-body">
                    <ShoppingCart />
                </div>
            </div>
        </div>
    </div>
</div>

<style>
</style>

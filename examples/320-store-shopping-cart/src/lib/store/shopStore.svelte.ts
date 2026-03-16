import type {Article, CartItem} from "../types/article";

// This is our store. It contains the state of our application and logic to update the state

// our state has two properties: articles and cart
// - Articles is an array of articles
// - Cart is an array of cart items
type ShopState = {
    articles: Article[];
    cart: CartItem[];
};
// 1. The state itself
export const shopState: ShopState = $state({
    articles: [
        { id: 1, name: 'Hammer', price: 12.95 },
        { id: 2, name: 'Saw', price: 18.5 },
        { id: 3, name: 'Drill', price: 79.0 },
        { id: 4, name: 'Screwdriver Set', price: 24.99 },
        { id: 5, name: 'Tape Measure', price: 9.75 }
    ],
    cart: []
});

// 2. Derived state, for calculating the total price of the cart and the total number of items.
const cartSummary = $derived.by(() => {
    let totalItems = 0;
    let totalPrice = 0;

    // If you want to, you can also use .reduce() here.
    for (const item of shopState.cart) {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;
    }

    return { totalItems, totalPrice };
});

// In Svelte, it is forbidden to export a derived state directly, so we export a function that returns it.
export const getCartSummary = () => cartSummary;

// *******************
// Store functionality
// *******************
// 1. function for adding an article to the cart
export const addToCart =(article: Article)  =>{
    // 1a. Check if the article is already in the cart
    const existing = shopState.cart.find((item) => item.id === article.id);

    // 1b. Yes. Update the quantity
    if (existing) {
        existing.quantity += 1;
    } else {
        // 1c. No. Add the article to the cart
        shopState.cart.push({
            ...article,
            quantity: 1
        });
    }
}

// 2. Function for resetting/clearing the cart
export const clearCart=()=> {
    shopState.cart = [];
}

// 3. Function for placing an order
export const orderCart = ()=> {
    if (shopState.cart.length === 0) {
        alert('Your shopping cart is empty.');
        return;
    }

    const { totalItems, totalPrice } = getCartSummary();

    // 3a. Display the order confirmation to the user
    alert(
        `Order placed!\n\nItems: ${totalItems}\nTotal: €${totalPrice.toFixed(2)}`
    );

    // 3b. Clear the cart after successful order
    clearCart();
}

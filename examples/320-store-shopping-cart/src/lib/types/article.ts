// article.ts - a model for an article in the database/store
export type Article = {
    id: number;
    name: string;
    price: number;
};

// A single item in the cart. It consists of an article and the quantity.
// This is the TypeScript construct for combining two types into one.
export type CartItem = Article & {
    quantity: number;
};

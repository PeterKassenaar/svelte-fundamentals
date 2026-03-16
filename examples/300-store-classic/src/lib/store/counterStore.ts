// counterStore.ts - a simple store, exporting a globally available $count variable
// This is now also called a 'classic store', but still
// used heavily because it gives you full control over the state.
import {writable} from "svelte/store";

// the 'writable' function creates a store/reactive state container that can be written to
export const counter = writable(0);

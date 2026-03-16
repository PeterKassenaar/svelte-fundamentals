// counterstate.svelte.ts - note: no 'import's needed

export const counterState = $state({
    count: 0
});

// increment the state
export const increment = () => {
    counterState.count += 1;
}

// decrement the state
export const decrement = () => {
    counterState.count -= 1;
}

// reset the state
export const reset = () => {
    counterState.count = 0;
}

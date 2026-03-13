<script lang="ts">
    interface Props {
        searchTerm: string;
        loading: boolean;
        onSearch: (term: string) => void;
        onSearchTermChange: (term: string) => void;
    }

    let { searchTerm, loading, onSearch, onSearchTermChange }: Props = $props();

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            onSearch(searchTerm);
        }
    };
</script>

<div class="search-container">
    <input
            type="text"
            value={searchTerm}
            oninput={(e) => onSearchTermChange(e.currentTarget.value)}
            onkeydown={handleKeyDown}
            placeholder="Enter country name..."
    />
    <button onclick={() => onSearch(searchTerm)} disabled={loading}>search</button>
</div>

<style>
    .search-container {
        display: flex;
        gap: 8px;
        margin-bottom: 20px;
    }

    input {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        flex: 1;
    }

    button {
        padding: 8px 16px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
</style>

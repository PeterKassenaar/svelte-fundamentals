<script lang="ts">
    interface Customer {
        id: number;
        name: string;
        city: string;
        employees?: number;
    }

    // our list of customers, following the interface
    let customers: Customer[] = [
        {id: 1, name: 'KPN', city: 'Amsterdam', employees: 120000},
        {id: 2, name: 'Belastingdienst', city: 'Apeldoorn'},
        {id: 3, name: 'DSM', city: 'Maastricht', employees: 800},
        {id: 4, name: 'Rabobank', city: 'Utrecht'}]

    let showCustomers = $state(true);
</script>

<div>
    <h2>Our customers</h2>
    <!--    Rendering this block only if showCustomers is true-->
    {#if showCustomers}
        <ul>
            <!-- Showing the list in the UI, using {#each} from svelte-->
            {#each customers as customer}
                <li>
                    {customer.name} - {customer.city}
                    <!--    Conditional logic: only show the employees if they exist-->
                    {#if customer.employees}
                        ({customer.employees} employees)
                    {/if}
                </li>
            {/each}
        </ul>
    {/if}
    <button onclick={() =>showCustomers = !showCustomers}>Toggle customers</button>
</div>
<style>

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin-bottom: 10px;
        border-bottom: 1px solid #ccc;
        text-align: left;
    }
</style>

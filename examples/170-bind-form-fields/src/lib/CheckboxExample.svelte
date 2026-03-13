<script lang="ts">
    interface User {
        id: number;
        name: string;
        email: string;
        subscribed: boolean;
    }

    // 0. Simple usage of boolean value for a checkbox:
    let subscribed = false;

    // 1. More complex usage with a boolean value in an object:
    let users: User[] = [
        {id: 1, name: 'John Doe', email: 'john.doe@example.com', subscribed: false},
        {id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', subscribed: true},
        {id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', subscribed: false},
    ];

</script>

<!-- UI for this component-->
<h3>Checkbox example</h3>

<!--Simple example-->
<label>
    <input type="checkbox" bind:checked={subscribed}/>
    Subscribe to newsletter
</label>

<p>Subscribed: {subscribed}</p>

<hr>
<!--More complex example-->
<div class="container">
    <!--    Left column-->
    <div class="user-list">
        {#each users as user}
            <div style="margin-bottom: 10px; padding: 10px; border: 1px solid #ddd;">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <label>
                    <input type="checkbox" bind:checked={user.subscribed}/>
                    Subscribed to newsletter
                </label>
                <p>Status: {user.subscribed ? 'Subscribed' : 'Not subscribed'}</p>
            </div>
        {/each}
    </div>

    <!--    Right column-->
    <div class="json-display">
        <h4>Users Array (JSON):</h4>
        <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
</div>

<!-- Scoped CSS Styles for this component -->
<style>
    .container {
        display: flex;
        gap: 20px;
        align-items: flex-start;
    }

    .user-list {
        flex: 1;
        min-width: 0;
    }

    .json-display {
        flex: 1;
        min-width: 0;
        padding: 10px;
        border: 1px solid #ddd;
        background-color: #f5f5f5;
        text-align: left;
    }
</style>


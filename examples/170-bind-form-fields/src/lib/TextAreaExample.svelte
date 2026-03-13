<script lang="ts">
    let msg = '';
</script>

<!--Simple UI for this component -->
<h3>Textarea</h3>

<textarea
        rows="4"
        cols="40"
        bind:value={msg}
        placeholder="Write a message"
></textarea>

<p>Message:</p>
<pre>{msg}</pre>

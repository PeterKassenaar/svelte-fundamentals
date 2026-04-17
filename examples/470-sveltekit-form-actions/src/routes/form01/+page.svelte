<script lang="ts">
	// The props are avoilable after form submission.
	const { form } = $props();
</script>

<h1>Contact form</h1>
<div class="mb-3">
	A very simple form, no JavaScript required. See <code>+page.server.ts</code> for code that handles
	this form submission.
</div>
<!--Simple submission form. Note: no target, just POST-->
<form method="POST">
	<div class="mb-3">
		<label for="name" class="form-label">Name</label>
		<input name="name" id="name" class="form-control" placeholder="Your name" />
	</div>
	<button type="submit" class="btn btn-primary">Send</button>
</form>
<!--The form posts back to itself, so once it is reloaded,-->
<!--the 'form' object will be available in the component's props and-->
<!--we can inspect it-->
{#if form?.success}
	<div class="alert alert-success mt-3" role="alert">
		Form submitted successfully!
		We received: <strong>{form.name}</strong>
	</div>
{/if}

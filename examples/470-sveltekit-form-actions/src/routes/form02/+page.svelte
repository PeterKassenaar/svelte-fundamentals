<script lang="ts">
	// The props are avoilable after form submission.
	const { form } = $props();
</script>

<h1>Contact form - server side validation</h1>
<div class="mb-3">
	A very simple form with validation on the server. See <code>+page.server.ts</code> for code that handles
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
<!--The form posts back to itself. Validation is on the server -->
{#if form?.success}
	<div class="alert alert-success mt-3" role="alert">Form submitted successfully!</div>
{/if}

{#if form?.error}
	<div class="alert alert-danger mt-3" role="alert">{form.error}</div>
{/if}

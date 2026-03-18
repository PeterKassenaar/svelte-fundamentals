<script>
	const { form } = $props();
</script>
<h2>Multiple forms - multiple actions</h2>
<div>This page has two forms, it also has two actions in the backend <code>+page.server.ts</code>.
	They are annotated with <code>?/login</code> and <code>?/register</code> attributes.
</div>
<form method="POST" action="?/login">
	<h3>Form 1 - Login</h3>
	<div class="form-group">
		<label for="name">Name</label>
		<input type="text" class="form-control" id="name" name="name" />
	</div>

	<div class="form-group">
		<label for="password">Password</label>
		<input type="password" class="form-control" id="password" name="password" />
	</div>

	<button class="btn btn-primary">Login</button>
</form>
<hr>
<div>
	This form has just an email field and a <code>Register</code> button
</div>
<form method="POST" action="?/register">
	<h3>Form 2 - Register</h3>
	<label for="email">Email</label>
	<input type="email" class="form-control" id="email"
				 name="email" placeholder="Your email" />
	<button class="btn btn-secondary">Register</button>
</form>
<hr>
<!--Only show a message on postback-->
{#if form?.message}
	<h3>Results</h3>
	<div class={form?.success ? 'alert alert-success' : 'alert alert-danger'}>
		<p>{form?.message}</p>
	</div>
{/if}
<style>
	form {
			padding: 10px;
			border: 1px solid red;
		margin-bottom: 20px;
	}
</style>

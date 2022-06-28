<script>
	import { useMutation } from '@sveltestack/svelte-query';
	import { signin } from './index';

	const post = useMutation((credentials) => signin(credentials));
</script>

<div class="main min-h-screen">
	<section class="bg-slate-800 show" />
	<section class="form-area w-full px-8 sm:px-12">
		<h1 class="sr-only">Sign in</h1>
		<div class="w-full max-w-[500px] h-fit">
			<h2 class="h text-2xl sm:text-[28px] font-semibold">Welcome to Inventrie</h2>
			<div class="mt-3 mb-8 flex gap-1 text-sm">
				<span>Don't have an account?</span><span><a href="dsakdkjsa">Sign up</a></span>
			</div>
			<form class="w-full flex flex-col gap-4" on:submit|preventDefault={() => $post.mutate({})}>
				<div class="form-group">
					<input class="input" type="text" required />
					<label for="">Email</label>
				</div>
				<div class="form-group">
					<input class="input" type="text" />
					<label for="">Password</label>
				</div>
				<button class="btn-primary h-12 max-w-[200px]">Login</button>
			</form>
			<div class="flex gap-1 text-sm">
				<span>Forgot your password?</span><span><a href="dsakdkjsa">Click here</a></span>
			</div>
			<div>
				{#if $post.status === 'loading'}
					Loading...
				{:else if $post.status === 'error'}
					<span>Error: {$post.error}</span>
				{:else}
					<h1>{JSON.stringify($post.data)}</h1>
					<div>{$post.isLoading ? 'Background Updating...' : ' '}</div>
				{/if}
			</div>
		</div>
	</section>
</div>

<style scoped>
	.show {
		display: none;
	}

	.main {
		display: grid;
		grid-template-columns: 1fr;
	}

	.form-area {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (min-width: 640px) {
		.show {
			display: grid;
		}

		.main {
			grid-template-columns: 1fr 1fr;
		}

		.form-area {
			justify-content: flex-start;
		}
	} ;
</style>

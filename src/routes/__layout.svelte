<script>
	import '../scss/styles.scss';
	import '../app.css';
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	const queryClient = new QueryClient();
</script>

<main class="text-slate-900">
	<QueryClientProvider client={queryClient}>
		<slot />
	</QueryClientProvider>
</main>

<style>
</style>

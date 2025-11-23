<script lang="ts">
	import '../app.css';
	import FloatingElements from '$lib/components/FloatingElements.svelte';
</script>

<FloatingElements />
<main class="container mx-auto max-w-6xl px-4 py-8">
	<slot />
</main>

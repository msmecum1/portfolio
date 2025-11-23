<script lang="ts">
	export let title: string;
	export let className: string = '';
</script>

<section
	class="animate-fade-in-up mb-8 rounded-3xl bg-white/95 p-10 shadow-2xl backdrop-blur-xl {className}"
>
	<h2 class="relative mb-8 pb-4 text-3xl font-bold text-gray-800 md:text-4xl">
		{title}
		<div
			class="absolute bottom-0 left-0 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
		></div>
	</h2>

	<slot />
</section>

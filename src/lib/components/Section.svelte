<script lang="ts">
	export let title: string;
	export let className: string = '';
</script>

<section class="bg-white/95 backdrop-blur-xl rounded-3xl p-10 mb-8 shadow-2xl animate-fade-in-up {className}">
	<h2 class="text-3xl md:text-4xl font-bold mb-8 text-gray-800 relative pb-4">
		{title}
		<div class="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
	</h2>
	
	<slot />
</section>
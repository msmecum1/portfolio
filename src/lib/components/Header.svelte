<script lang="ts">
	import { contactInfo } from '$lib/data/portfolio';
	import { onMount } from 'svelte';

	let name = '';
	const originalText = 'Matthew Mecum';

	onMount(() => {
		let i = 0;
		const typeWriter = () => {
			if (i < originalText.length) {
				name += originalText.charAt(i);
				i++;
				setTimeout(typeWriter, 100);
			}
		};
		setTimeout(typeWriter, 500);
	});
</script>

<header
	class="animate-fade-in-up relative mb-8 overflow-hidden rounded-3xl bg-white/95 p-10 text-center shadow-2xl backdrop-blur-xl"
>
	<div
		class="animate-shimmer absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
	></div>

	<h1
		class="mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl"
	>
		{name}
	</h1>

	<p class="animate-fade-in-up animation-delay-200 mb-8 text-xl text-gray-600 md:text-2xl">
		Software Engineer & System Architect
	</p>

	<div class="animate-fade-in-up animation-delay-400 flex flex-wrap justify-center gap-6">
		<a
			href="mailto:{contactInfo.email}"
			class="flex items-center gap-2 rounded-full bg-indigo-50 px-6 py-3 text-gray-700 transition-all duration-300 hover:scale-105 hover:bg-indigo-100 hover:text-indigo-600 hover:shadow-lg"
		>
			<span class="text-xl">📧</span>
			<span class="hidden sm:inline">{contactInfo.email}</span>
		</a>

		<a
			href="tel:{contactInfo.phone}"
			class="flex items-center gap-2 rounded-full bg-indigo-50 px-6 py-3 text-gray-700 transition-all duration-300 hover:scale-105 hover:bg-indigo-100 hover:text-indigo-600 hover:shadow-lg"
		>
			<span class="text-xl">📱</span>
			<span class="hidden sm:inline">{contactInfo.phone}</span>
		</a>

		<a
			href={contactInfo.linkedin}
			target="_blank"
			rel="noopener noreferrer"
			class="flex items-center gap-2 rounded-full bg-indigo-50 px-6 py-3 text-gray-700 transition-all duration-300 hover:scale-105 hover:bg-indigo-100 hover:text-indigo-600 hover:shadow-lg"
		>
			<span class="text-xl">💼</span>
			<span class="hidden sm:inline">LinkedIn</span>
		</a>

		<a
			href={contactInfo.github}
			target="_blank"
			rel="noopener noreferrer"
			class="flex items-center gap-2 rounded-full bg-indigo-50 px-6 py-3 text-gray-700 transition-all duration-300 hover:scale-105 hover:bg-indigo-100 hover:text-indigo-600 hover:shadow-lg"
		>
			<span class="text-xl">🔗</span>
			<span class="hidden sm:inline">GitHub</span>
		</a>
	</div>

	<nav class="animate-fade-in-up animation-delay-600 mt-8 flex flex-wrap justify-center gap-6">
		<a
			href="/hire-me"
			class="flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-700 hover:shadow-lg"
		>
			<span class="text-xl">🚀</span>
			Hire Me Now
		</a>
	</nav>
</header>

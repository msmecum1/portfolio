<script lang="ts">
	import { contactInfo } from '$lib/data/portfolio';
	import { onMount } from 'svelte';

	let nameElement: HTMLElement;
	let isTyping = false;

	onMount(() => {
		// Typewriter effect for name
		const originalText = 'Matthew Mecum';
		nameElement.textContent = '';
		isTyping = true;
		
		let i = 0;
		const typeWriter = () => {
			if (i < originalText.length) {
				nameElement.textContent += originalText.charAt(i);
				i++;
				setTimeout(typeWriter, 100);
			} else {
				isTyping = false;
			}
		};
		
		setTimeout(typeWriter, 500);
	});
</script>

<header class="bg-white/95 backdrop-blur-xl rounded-3xl p-10 mb-8 shadow-2xl text-center relative overflow-hidden animate-fade-in-up">
	<div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-shimmer"></div>
	
	<h1 bind:this={nameElement} class="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
		<!-- Name will be typed here -->
	</h1>
	
	<p class="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in-up animation-delay-200">
		Software Engineer & System Architect
	</p>
	
	<div class="flex flex-wrap justify-center gap-6 animate-fade-in-up animation-delay-400">
		<a 
			href="mailto:{contactInfo.email}" 
			class="flex items-center gap-2 px-6 py-3 bg-indigo-50 hover:bg-indigo-100 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg text-gray-700 hover:text-indigo-600"
		>
			<span class="text-xl">📧</span>
			<span class="hidden sm:inline">{contactInfo.email}</span>
		</a>
		
		<a 
			href="tel:{contactInfo.phone}" 
			class="flex items-center gap-2 px-6 py-3 bg-indigo-50 hover:bg-indigo-100 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg text-gray-700 hover:text-indigo-600"
		>
			<span class="text-xl">📱</span>
			<span class="hidden sm:inline">{contactInfo.phone}</span>
		</a>
		
		<a 
			href={contactInfo.linkedin} 
			target="_blank" 
			rel="noopener noreferrer"
			class="flex items-center gap-2 px-6 py-3 bg-indigo-50 hover:bg-indigo-100 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg text-gray-700 hover:text-indigo-600"
		>
			<span class="text-xl">💼</span>
			<span class="hidden sm:inline">LinkedIn</span>
		</a>
		
		<a 
			href={contactInfo.github} 
			target="_blank" 
			rel="noopener noreferrer"
			class="flex items-center gap-2 px-6 py-3 bg-indigo-50 hover:bg-indigo-100 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg text-gray-700 hover:text-indigo-600"
		>
			<span class="text-xl">🔗</span>
			<span class="hidden sm:inline">GitHub</span>
		</a>
	</div>
</header>
<div class="fixed inset-0 pointer-events-none overflow-hidden -z-10">
	{#each Array(8) as _, i}
		<div 
			class="absolute w-4 h-4 bg-white/20 rounded-full animate-float"
			style="
				left: {Math.random() * 100}%;
				top: {Math.random() * 100}%;
				animation-delay: {i * 0.5}s;
				animation-duration: {6 + Math.random() * 4}s;
			"
		></div>
	{/each}
</div>
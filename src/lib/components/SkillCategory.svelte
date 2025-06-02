<script lang="ts">
	import type { SkillCategory } from '$lib/types';
	
	export let category: SkillCategory;
</script>

<div class="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
	<h3 class="text-xl font-semibold text-indigo-600 mb-6">{category.title}</h3>
	<div class="flex flex-wrap gap-3">
		{#each category.skills as skill}
			<span class="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default">
				{skill}
			</span>
		{/each}
	</div>
</div>
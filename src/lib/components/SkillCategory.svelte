<script lang="ts">
	import type { SkillCategory } from '$lib/types';
	export let category: SkillCategory;
</script>

<div
	class="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
>
	<h3 class="mb-6 text-xl font-semibold text-indigo-600">{category.title}</h3>
	<div class="flex flex-wrap gap-3">
		{#each category.skills as skill (skill)}
			<span
				class="cursor-default rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
			>
				{skill}
			</span>
		{/each}
	</div>
</div>

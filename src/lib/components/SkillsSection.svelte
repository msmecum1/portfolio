<script lang="ts">
	import Section from './Section.svelte';
	import SkillCategory from './SkillCategory.svelte';
	import { skillCategories } from '$lib/data/portfolio';
</script>

<Section title="Technical Skills">
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		{#each skillCategories as category (category.title)}
			<SkillCategory {category} />
		{/each}
	</div>
</Section>

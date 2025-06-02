<script lang="ts">
	import Section from './Section.svelte';
	import { education } from '$lib/data/portfolio';
</script>

<Section title="Education">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		{#each education as edu}
			<div class="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
				<h3 class="text-xl font-semibold text-indigo-600 mb-2">{edu.degree}</h3>
				{#if edu.fieldOfStudy}
					<p class="text-lg text-gray-800 mb-2">{edu.fieldOfStudy}</p>
				{/if}
				<p class="text-gray-700 mb-3">{edu.school}</p>
				<span class="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-medium">
					{edu.graduationDate}
				</span>
			</div>
		{/each}
	</div>
</Section>
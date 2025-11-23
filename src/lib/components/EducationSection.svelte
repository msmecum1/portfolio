<script lang="ts">
	import Section from './Section.svelte';
	import { education } from '$lib/data/portfolio';
</script>

<Section title="Education">
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		{#each education as edu (edu.degree)}
			<div
				class="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
			>
				<h3 class="mb-2 text-xl font-semibold text-indigo-600">{edu.degree}</h3>
				{#if edu.fieldOfStudy}
					<p class="mb-2 text-lg text-gray-800">{edu.fieldOfStudy}</p>
				{/if}
				<p class="mb-3 text-gray-700">{edu.school}</p>
				<span
					class="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 text-sm font-medium text-white"
				>
					{edu.graduationDate}
				</span>
			</div>
		{/each}
	</div>
</Section>

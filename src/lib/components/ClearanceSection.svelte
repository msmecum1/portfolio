<script lang="ts">
	import Section from './Section.svelte';
	import { clearances } from '$lib/data/portfolio';
</script>

<Section title="Security Clearances">
	<div class="space-y-6">
		{#each clearances as clearance}
			<div class="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
				<div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
					<div>
						<h3 class="text-xl font-semibold text-indigo-600 mb-2">{clearance.type}</h3>
						<p class="text-lg text-gray-800 mb-2">{clearance.level}</p>
						{#if clearance.description}
							<p class="text-gray-600">{clearance.description}</p>
						{/if}
					</div>
					<div class="mt-2 md:mt-0">
						<span class="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-medium">
							Adjudicated: {clearance.adjudicationDate}
						</span>
					</div>
				</div>
			</div>
		{/each}
	</div>
</Section>
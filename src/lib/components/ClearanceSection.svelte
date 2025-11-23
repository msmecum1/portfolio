<script lang="ts">
	import Section from './Section.svelte';
	import { clearances } from '$lib/data/portfolio';
</script>

<Section title="Security Clearances">
	<div class="space-y-6">
		{#each clearances as clearance (clearance.type)}
			<div
				class="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
			>
				<div class="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
					<div>
						<h3 class="mb-2 text-xl font-semibold text-indigo-600">{clearance.type}</h3>
						<p class="mb-2 text-lg text-gray-800">{clearance.level}</p>
						{#if clearance.description}
							<p class="text-gray-600">{clearance.description}</p>
						{/if}
					</div>
					<div class="mt-2 md:mt-0">
						<span
							class="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-medium text-white"
						>
							Adjudicated: {clearance.adjudicationDate}
						</span>
					</div>
				</div>
			</div>
		{/each}
	</div>
</Section>

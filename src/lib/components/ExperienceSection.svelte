<script lang="ts">
	import Section from './Section.svelte';
	import { experiences } from '$lib/data/portfolio';
</script>

<Section title="Professional Experience">
	<div class="space-y-8">
		{#each experiences as experience (experience.title)}
			<div
				class="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
			>
				<div class="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
					<div>
						<h3 class="mb-2 text-xl font-semibold text-indigo-600">{experience.title}</h3>
						<p class="text-lg font-medium text-gray-800">{experience.company}</p>
						<p class="text-gray-600">{experience.location}</p>
					</div>
					<div class="mt-2 text-right md:mt-0">
						<span
							class="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-medium text-white"
						>
							{experience.startDate} - {experience.endDate}
						</span>
					</div>
				</div>
				<ul class="space-y-3">
					{#each experience.achievements as achievement, index (index)}
						<li class="flex items-start gap-3">
							<span class="mt-1 text-indigo-500">▸</span>
							<span class="leading-relaxed text-gray-700">{achievement}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</Section>

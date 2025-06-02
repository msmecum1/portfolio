<script lang="ts">
	import Section from './Section.svelte';
	import { experiences } from '$lib/data/portfolio';
</script>

<Section title="Professional Experience">
	<div class="space-y-8">
		{#each experiences as experience}
			<div class="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
				<div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
					<div>
						<h3 class="text-xl font-semibold text-indigo-600 mb-2">{experience.title}</h3>
						<p class="text-lg font-medium text-gray-800">{experience.company}</p>
						<p class="text-gray-600">{experience.location}</p>
					</div>
					<div class="mt-2 md:mt-0 text-right">
						<span class="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-medium">
							{experience.startDate} - {experience.endDate}
						</span>
					</div>
				</div>
				<ul class="space-y-3">
					{#each experience.achievements as achievement}
						<li class="flex items-start gap-3">
							<span class="text-indigo-500 mt-1">▸</span>
							<span class="text-gray-700 leading-relaxed">{achievement}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</Section>
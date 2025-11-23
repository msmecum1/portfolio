<script lang="ts">
	import Section from './Section.svelte';
	import { professionalSummary } from '$lib/data/portfolio';
</script>

<Section title="Professional Summary">
	<p class="text-justify text-lg leading-relaxed text-gray-700">
		{professionalSummary}
	</p>
</Section>

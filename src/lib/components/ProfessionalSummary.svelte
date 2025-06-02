<script lang="ts">
	import Section from './Section.svelte';
	import { professionalSummary } from '$lib/data/portfolio';
</script>

<Section title="Professional Summary">
	<p class="text-lg leading-relaxed text-gray-700 text-justify">
		{professionalSummary}
	</p>
</Section>
<script lang="ts">
	export let value: string = '';
	export let label: string = '';
	export let description: string = '';
	export let selectedOption: string = '';
</script>

<label
	class="block cursor-pointer rounded-lg bg-indigo-50 p-6 transition-all duration-300 hover:bg-indigo-100 hover:shadow-lg"
>
	<input
		type="radio"
		name="hireOption"
		{value}
		bind:group={selectedOption}
		class="mr-2 accent-green-600"
	/>
	<span class="text-lg font-semibold">{label}</span>
	<p class="mt-1 text-sm text-gray-600">{description}</p>
</label>

<script lang="ts">
    export let value: string = '';
    export let label: string = '';
    export let description: string = '';
    export let selectedOption: string = '';
</script>

<label class="block p-6 bg-indigo-50 rounded-lg cursor-pointer hover:bg-indigo-100 transition-all duration-300 hover:shadow-lg">
    <input
        type="radio"
        name="hireOption"
        {value}
        bind:group={selectedOption}
        class="mr-2 accent-green-600"
    />
    <span class="font-semibold text-lg">{label}</span>
    <p class="text-sm text-gray-600 mt-1">{description}</p>
</label>
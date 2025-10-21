<script lang="ts">
    import HireOption from '$lib/HireOption.svelte';
    let selectedOption: string = '';
    let message: string = '';
    let jobDescription: string = '';
    let startDate: string = '';
    let payRange: string = '';
    let pocName: string = '';
    let company: string = '';
    let phoneNumber: string = '';
    let email: string = '';

    // Reset additional fields when option changes
    $: if (selectedOption !== 'full-time') {
        jobDescription = '';
        startDate = '';
        payRange = '';
        pocName = '';
        company = '';
        phoneNumber = '';
        email = '';
    }
</script>

<section class="container mx-auto px-4 py-8 max-w-6xl">
    <h1 class="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Hire Me</h1>
    <p class="mb-6 text-center text-gray-600 text-lg">Select how you'd like to work with me on your next project:</p>

    <form method="POST" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <HireOption
                value="full-time"
                label="Full-Time"
                description="Join your team for a dedicated, full-time role."
                bind:selectedOption
            />
            <HireOption
                value="part-time"
                label="Part-Time"
                description="Collaborate part-time to support your projects."
                bind:selectedOption
            />
            <HireOption
                value="large-project"
                label="Large Project"
                description="Tackle a major project with my expertise."
                bind:selectedOption
            />
            <HireOption
                value="small-project"
                label="Small Project"
                description="Get quick, focused solutions for smaller tasks."
                bind:selectedOption
            />
        </div>

        {#if selectedOption === 'full-time'}
            <div class="space-y-4 mt-6">
                <div>
                    <label for="jobDescription" class="block text-sm font-medium text-gray-700">Job Description</label>
                    <textarea
                        id="jobDescription"
                        name="jobDescription"
                        bind:value={jobDescription}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
                        rows="4"
                        placeholder="Describe the job role and responsibilities"
                    ></textarea>
                </div>
                <div>
                    <label for="startDate" class="block text-sm font-medium text-gray-700">Requested Start Date</label>
                    <input
                        id="startDate"
                        name="startDate"
                        type="date"
                        bind:value={startDate}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
                    />
                </div>
                <div>
                    <label for="payRange" class="block text-sm font-medium text-gray-700">Pay Range</label>
                    <input
                        id="payRange"
                        name="payRange"
                        type="text"
                        bind:value={payRange}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
                        placeholder="e.g., $80,000 - $120,000 per year"
                    />
                </div>
                <div>
                    <label for="pocName" class="block text-sm font-medium text-gray-700">Point of Contact Name</label>
                    <input
                        id="pocName"
                        name="pocName"
                        type="text"
                        bind:value={pocName}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
                        placeholder="e.g., John Doe"
                    />
                </div>
                <div>
                    <label for="company" class="block text-sm font-medium text-gray-700">Affiliated Company</label>
                    <input
                        id="company"
                        name="company"
                        type="text"
                        bind:value={company}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
                        placeholder="e.g., Acme Corp"
                    />
                </div>
                <div>
                    <label for="phoneNumber" class="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        bind:value={phoneNumber}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
                        placeholder="e.g., +1 (123) 456-7890"
                    />
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        bind:value={email}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
                        placeholder="e.g., john.doe@example.com"
                    />
                </div>
            </div>
        {/if}

        <div class="text-center">
            <button
                type="submit"
                class="px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-full transition-all duration-300 hover:bg-green-700 hover:scale-105 hover:shadow-lg disabled:bg-gray-400"
                disabled={!selectedOption || (selectedOption === 'full-time' && (!jobDescription || !startDate || !payRange || !pocName || !company || !phoneNumber || !email))}
            >
                Submit Inquiry
            </button>
        </div>
    </form>

    {#if message}
        <p class="mt-6 text-center text-green-600 font-semibold">{message}</p>
    {/if}
</section>
<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    import HireOption from '$lib/HireOption.svelte';
    let selectedOption: string = '';
    let message: string = '';
    
    // Full-Time fields
    let ftJobDescription: string = '';
    let ftStartDate: string = '';
    let ftPayRange: string = '';
    let ftPocName: string = '';
    let ftCompany: string = '';
    let ftPhoneNumber: string = '';
    let ftEmail: string = '';
    
    // Part-Time fields
    let ptJobDescription: string = '';
    let ptStartDate: string = '';
    let ptHourlyRate: string = '';
    let ptPocName: string = '';
    let ptCompany: string = '';
    let ptPhoneNumber: string = '';
    let ptEmail: string = '';
    
    // Large Project fields
    let lpProjectDescription: string = '';
    let lpTimelineStart: string = '';
    let lpTimelineEnd: string = '';
    let lpBudget: string = '';
    let lpPocName: string = '';
    let lpCompany: string = '';
    let lpPhoneNumber: string = '';
    let lpEmail: string = '';
    
    // Small Project fields
    let spTaskDescription: string = '';
    let spDeadline: string = '';
    let spBudget: string = '';
    let spPocName: string = '';
    let spCompany: string = '';
    let spPhoneNumber: string = '';
    let spEmail: string = '';

    // Reset fields when option changes
    $: if (selectedOption === 'full-time') {
        ptJobDescription = ptStartDate = ptHourlyRate = ptPocName = ptCompany = ptPhoneNumber = ptEmail = '';
        lpProjectDescription = lpTimelineStart = lpTimelineEnd = lpBudget = lpPocName = lpCompany = lpPhoneNumber = lpEmail = '';
        spTaskDescription = spDeadline = spBudget = spPocName = spCompany = spPhoneNumber = spEmail = '';
    } else if (selectedOption === 'part-time') {
        ftJobDescription = ftStartDate = ftPayRange = ftPocName = ftCompany = ftPhoneNumber = ftEmail = '';
        lpProjectDescription = lpTimelineStart = lpTimelineEnd = lpBudget = lpPocName = lpCompany = lpPhoneNumber = lpEmail = '';
        spTaskDescription = spDeadline = spBudget = spPocName = spCompany = spPhoneNumber = spEmail = '';
    } else if (selectedOption === 'large-project') {
        ftJobDescription = ftStartDate = ftPayRange = ftPocName = ftCompany = ftPhoneNumber = ftEmail = '';
        ptJobDescription = ptStartDate = ptHourlyRate = ptPocName = ptCompany = ptPhoneNumber = ptEmail = '';
        spTaskDescription = spDeadline = spBudget = spPocName = spCompany = spPhoneNumber = spEmail = '';
    } else if (selectedOption === 'small-project') {
        ftJobDescription = ftStartDate = ftPayRange = ftPocName = ftCompany = ftPhoneNumber = ftEmail = '';
        ptJobDescription = ptStartDate = ptHourlyRate = ptPocName = ptCompany = ptPhoneNumber = ptEmail = '';
        lpProjectDescription = lpTimelineStart = lpTimelineEnd = lpBudget = lpPocName = lpCompany = lpPhoneNumber = lpEmail = '';
    } else {
        ftJobDescription = ftStartDate = ftPayRange = ftPocName = ftCompany = ftPhoneNumber = ftEmail = '';
        ptJobDescription = ptStartDate = ptHourlyRate = ptPocName = ptCompany = ptPhoneNumber = ptEmail = '';
        lpProjectDescription = lpTimelineStart = lpTimelineEnd = lpBudget = lpPocName = lpCompany = lpPhoneNumber = lpEmail = '';
        spTaskDescription = spDeadline = spBudget = spPocName = spCompany = spPhoneNumber = spEmail = '';
    }
</script>

<Header />
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
                    <label for="ftJobDescription" class="block text-sm font-medium text-gray-700">Job Description</label>
                    <textarea
                        id="ftJobDescription"
                        name="ftJobDescription"
                        bind:value={ftJobDescription}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        rows="4"
                        placeholder="Describe the job role and responsibilities"
                    ></textarea>
                </div>
                <div>
                    <label for="ftStartDate" class="block text-sm font-medium text-gray-700">Requested Start Date</label>
                    <input
                        id="ftStartDate"
                        name="ftStartDate"
                        type="date"
                        bind:value={ftStartDate}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                    />
                </div>
                <div>
                    <label for="ftPayRange" class="block text-sm font-medium text-gray-700">Pay Range (Annual)</label>
                    <input
                        id="ftPayRange"
                        name="ftPayRange"
                        type="text"
                        bind:value={ftPayRange}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        placeholder="e.g., $80,000 - $120,000 per year"
                    />
                </div>
                <div>
                    <label for="ftPocName" class="block text-sm font-medium text-gray-700">Point of Contact Name</label>
                    <input
                        id="ftPocName"
                        name="ftPocName"
                        type="text"
                        bind:value={ftPocName}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        placeholder="e.g., John Doe"
                    />
                </div>
                <div>
                    <label for="ftCompany" class="block text-sm font-medium text-gray-700">Affiliated Company</label>
                    <input
                        id="ftCompany"
                        name="ftCompany"
                        type="text"
                        bind:value={ftCompany}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        placeholder="e.g., Acme Corp"
                    />
                </div>
                <div>
                    <label for="ftPhoneNumber" class="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        id="ftPhoneNumber"
                        name="ftPhoneNumber"
                        type="tel"
                        bind:value={ftPhoneNumber}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        placeholder="e.g., +1 (123) 456-7890"
                    />
                </div>
                <div>
                    <label for="ftEmail" class="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="ftEmail"
                        name="ftEmail"
                        type="email"
                        bind:value={ftEmail}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        placeholder="e.g., john.doe@example.com"
                    />
                </div>
            </div>
        {/if}

        {#if selectedOption === 'part-time'}
            <div class="space-y-4 mt-6">
                <div>
                    <label for="ptJobDescription" class="block text-sm font-medium text-gray-700">Job Description</label>
                    <textarea
                        id="ptJobDescription"
                        name="ptJobDescription"
                        bind:value={ptJobDescription}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        rows="4"
                        placeholder="Describe the part-time role and responsibilities"
                    ></textarea>
                </div>
                <div>
                    <label for="ptStartDate" class="block text-sm font-medium text-gray-700">Requested Start Date</label>
                    <input
                        id="ptStartDate"
                        name="ptStartDate"
                        type="date"
                        bind:value={ptStartDate}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                    />
                </div>
                <div>
                    <label for="ptHourlyRate" class="block text-sm font-medium text-gray-700">Hourly Rate Range</label>
                    <input
                        id="ptHourlyRate"
                        name="ptHourlyRate"
                        type="text"
                        bind:value={ptHourlyRate}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        placeholder="e.g., $50 - $80 per hour"
                    />
                </div>
                <div>
                    <label for="ptPocName" class="block text-sm font-medium text-gray-700">Point of Contact Name</label>
                    <input
                        id="ptPocName"
                        name="ptPocName"
                        type="text"
                        bind:value={ptPocName}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        placeholder="e.g., John Doe"
                    />
                </div>
                <div>
                    <label for="ptCompany" class="block text-sm font-medium text-gray-700">Affiliated Company</label>
                    <input
                        id="ptCompany"
                        name="ptCompany"
                        type="text"
                        bind:value={ptCompany}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        placeholder="e.g., Acme Corp"
                    />
                </div>
                <div>
                    <label for="ptPhoneNumber" class="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        id="ptPhoneNumber"
                        name="ptPhoneNumber"
                        type="tel"
                        bind:value={ptPhoneNumber}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        placeholder="e.g., +1 (123) 456-7890"
                    />
                </div>
                <div>
                    <label for="ptEmail" class="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="ptEmail"
                        name="ptEmail"
                        type="email"
                        bind:value={ptEmail}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        placeholder="e.g., john.doe@example.com"
                    />
                </div>
            </div>
        {/if}

        {#if selectedOption === 'large-project'}
            <div class="space-y-4 mt-6">
                <div>
                    <label for="lpProjectDescription" class="block text-sm font-medium text-gray-700">Project Description</label>
                    <textarea
                        id="lpProjectDescription"
                        name="lpProjectDescription"
                        bind:value={lpProjectDescription}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        rows="4"
                        placeholder="Describe the large project scope and goals"
                    ></textarea>
                </div>
                <div>
                    <label for="lpTimelineStart" class="block text-sm font-medium text-gray-700">Timeline Start Date</label>
                    <input
                        id="lpTimelineStart"
                        name="lpTimelineStart"
                        type="date"
                        bind:value={lpTimelineStart}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                    />
                </div>
                <div>
                    <label for="lpTimelineEnd" class="block text-sm font-medium text-gray-700">Timeline End Date</label>
                    <input
                        id="lpTimelineEnd"
                        name="lpTimelineEnd"
                        type="date"
                        bind:value={lpTimelineEnd}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                    />
                </div>
                <div>
                    <label for="lpBudget" class="block text-sm font-medium text-gray-700">Budget Range</label>
                    <input
                        id="lpBudget"
                        name="lpBudget"
                        type="text"
                        bind:value={lpBudget}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        placeholder="e.g., $10,000 - $50,000"
                    />
                </div>
                <div>
                    <label for="lpPocName" class="block text-sm font-medium text-gray-700">Point of Contact Name</label>
                    <input
                        id="lpPocName"
                        name="lpPocName"
                        type="text"
                        bind:value={lpPocName}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        placeholder="e.g., John Doe"
                    />
                </div>
                <div>
                    <label for="lpCompany" class="block text-sm font-medium text-gray-700">Affiliated Company</label>
                    <input
                        id="lpCompany"
                        name="lpCompany"
                        type="text"
                        bind:value={lpCompany}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        placeholder="e.g., Acme Corp"
                    />
                </div>
                <div>
                    <label for="lpPhoneNumber" class="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        id="lpPhoneNumber"
                        name="lpPhoneNumber"
                        type="tel"
                        bind:value={lpPhoneNumber}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        placeholder="e.g., +1 (123) 456-7890"
                    />
                </div>
                <div>
                    <label for="lpEmail" class="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="lpEmail"
                        name="lpEmail"
                        type="email"
                        bind:value={lpEmail}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        placeholder="e.g., john.doe@example.com"
                    />
                </div>
            </div>
        {/if}

        {#if selectedOption === 'small-project'}
            <div class="space-y-4 mt-6">
                <div>
                    <label for="spTaskDescription" class="block text-sm font-medium text-gray-700">Task Description</label>
                    <textarea
                        id="spTaskDescription"
                        name="spTaskDescription"
                        bind:value={spTaskDescription}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        rows="4"
                        placeholder="Describe the small task or project"
                    ></textarea>
                </div>
                <div>
                    <label for="spDeadline" class="block text-sm font-medium text-gray-700">Deadline</label>
                    <input
                        id="spDeadline"
                        name="spDeadline"
                        type="date"
                        bind:value={spDeadline}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                    />
                </div>
                <div>
                    <label for="spBudget" class="block text-sm font-medium text-gray-700">Budget Range</label>
                    <input
                        id="spBudget"
                        name="spBudget"
                        type="text"
                        bind:value={spBudget}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        placeholder="e.g., $500 - $2,000"
                    />
                </div>
                <div>
                    <label for="spPocName" class="block text-sm font-medium text-gray-700">Point of Contact Name</label>
                    <input
                        id="spPocName"
                        name="spPocName"
                        type="text"
                        bind:value={spPocName}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        placeholder="e.g., John Doe"
                    />
                </div>
                <div>
                    <label for="spCompany" class="block text-sm font-medium text-gray-700">Affiliated Company</label>
                    <input
                        id="spCompany"
                        name="spCompany"
                        type="text"
                        bind:value={spCompany}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        placeholder="e.g., Acme Corp"
                    />
                </div>
                <div>
                    <label for="spPhoneNumber" class="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        id="spPhoneNumber"
                        name="spPhoneNumber"
                        type="tel"
                        bind:value={spPhoneNumber}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        placeholder="e.g., +1 (123) 456-7890"
                    />
                </div>
                <div>
                    <label for="spEmail" class="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="spEmail"
                        name="spEmail"
                        type="email"
                        bind:value={spEmail}
                        class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-white"
                        placeholder="e.g., john.doe@example.com"
                    />
                </div>
            </div>
        {/if}

        <div class="text-center">
            <button
                type="submit"
                class="px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-full transition-all duration-300 hover:bg-green-700 hover:scale-105 hover:shadow-lg disabled:bg-gray-400"
                disabled={!selectedOption ||
                    (selectedOption === 'full-time' && (!ftJobDescription || !ftStartDate || !ftPayRange || !ftPocName || !ftCompany || !ftPhoneNumber || !ftEmail)) ||
                    (selectedOption === 'part-time' && (!ptJobDescription || !ptStartDate || !ptHourlyRate || !ptPocName || !ptCompany || !ptPhoneNumber || !ptEmail)) ||
                    (selectedOption === 'large-project' && (!lpProjectDescription || !lpTimelineStart || !lpTimelineEnd || !lpBudget || !lpPocName || !lpCompany || !lpPhoneNumber || !lpEmail)) ||
                    (selectedOption === 'small-project' && (!spTaskDescription || !spDeadline || !spBudget || !spPocName || !spCompany || !spPhoneNumber || !spEmail))}
            >
                Submit Inquiry
            </button>
        </div>
    </form>

    {#if message}
        <p class="mt-6 text-center text-green-600 font-semibold">{message}</p>
    {/if}
</section>
import { fail } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const hireOption = data.get('hireOption');
        const jobDescription = data.get('jobDescription');
        const startDate = data.get('startDate');
        const payRange = data.get('payRange');
        const pocName = data.get('pocName');
        const company = data.get('company');
        const phoneNumber = data.get('phoneNumber');
        const email = data.get('email');

        if (typeof hireOption !== 'string' || !hireOption) {
            return fail(400, { error: 'Please select an option' });
        }

        if (hireOption === 'full-time') {
            if (
                typeof jobDescription !== 'string' ||
                typeof startDate !== 'string' ||
                typeof payRange !== 'string' ||
                typeof pocName !== 'string' ||
                typeof company !== 'string' ||
                typeof phoneNumber !== 'string' ||
                typeof email !== 'string' ||
                !jobDescription ||
                !startDate ||
                !payRange ||
                !pocName ||
                !company ||
                !phoneNumber ||
                !email
            ) {
                return fail(400, { error: 'Please fill out all fields for a full-time position' });
            }
        }

        // For demo purposes, return a success message with all fields
        if (hireOption === 'full-time') {
            return {
                success: true,
                message: `Thank you for your full-time hiring inquiry! Details: ${jobDescription}, Start Date: ${startDate}, Pay Range: ${payRange}, Contact: ${pocName}, ${company}, ${phoneNumber}, ${email}`
            };
        }

        return { success: true, message: `Thank you for choosing to hire me as a ${hireOption}! I'll get back to you soon.` };
    }
};
import { fail } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const hireOption = data.get('hireOption');

        if (typeof hireOption !== 'string' || !hireOption) {
            return fail(400, { error: 'Please select an option' });
        }

        return { success: true, message: `Thank you for choosing to hire me as a ${hireOption}! I'll get back to you soon.` };
    }
};
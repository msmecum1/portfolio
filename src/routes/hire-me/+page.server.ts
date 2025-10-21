import { fail } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const hireOption = data.get('hireOption');

        if (typeof hireOption !== 'string' || !hireOption) {
            return fail(400, { error: 'Please select an option' });
        }

        if (hireOption === 'full-time') {
            const ftJobDescription = data.get('ftJobDescription');
            const ftStartDate = data.get('ftStartDate');
            const ftPayRange = data.get('ftPayRange');
            const ftPocName = data.get('ftPocName');
            const ftCompany = data.get('ftCompany');
            const ftPhoneNumber = data.get('ftPhoneNumber');
            const ftEmail = data.get('ftEmail');

            if (
                typeof ftJobDescription !== 'string' ||
                typeof ftStartDate !== 'string' ||
                typeof ftPayRange !== 'string' ||
                typeof ftPocName !== 'string' ||
                typeof ftCompany !== 'string' ||
                typeof ftPhoneNumber !== 'string' ||
                typeof ftEmail !== 'string' ||
                !ftJobDescription ||
                !ftStartDate ||
                !ftPayRange ||
                !ftPocName ||
                !ftCompany ||
                !ftPhoneNumber ||
                !ftEmail
            ) {
                return fail(400, { error: 'Please fill out all fields for a full-time position' });
            }

            const message = `Full-Time Inquiry: Job Description: ${ftJobDescription}, Start Date: ${ftStartDate}, Pay Range: ${ftPayRange}, Contact: ${ftPocName} (${ftCompany}, ${ftPhoneNumber}, ${ftEmail})`;
            return { message: `Thank you! ${message}. I'll get back to you soon.` };
        }

        if (hireOption === 'part-time') {
            const ptJobDescription = data.get('ptJobDescription');
            const ptStartDate = data.get('ptStartDate');
            const ptHourlyRate = data.get('ptHourlyRate');
            const ptPocName = data.get('ptPocName');
            const ptCompany = data.get('ptCompany');
            const ptPhoneNumber = data.get('ptPhoneNumber');
            const ptEmail = data.get('ptEmail');

            if (
                typeof ptJobDescription !== 'string' ||
                typeof ptStartDate !== 'string' ||
                typeof ptHourlyRate !== 'string' ||
                typeof ptPocName !== 'string' ||
                typeof ptCompany !== 'string' ||
                typeof ptPhoneNumber !== 'string' ||
                typeof ptEmail !== 'string' ||
                !ptJobDescription ||
                !ptStartDate ||
                !ptHourlyRate ||
                !ptPocName ||
                !ptCompany ||
                !ptPhoneNumber ||
                !ptEmail
            ) {
                return fail(400, { error: 'Please fill out all fields for a part-time position' });
            }

            const message = `Part-Time Inquiry: Job Description: ${ptJobDescription}, Start Date: ${ptStartDate}, Hourly Rate: ${ptHourlyRate}, Contact: ${ptPocName} (${ptCompany}, ${ptPhoneNumber}, ${ptEmail})`;
            return { message: `Thank you! ${message}. I'll get back to you soon.` };
        }

        if (hireOption === 'large-project') {
            const lpProjectDescription = data.get('lpProjectDescription');
            const lpTimelineStart = data.get('lpTimelineStart');
            const lpTimelineEnd = data.get('lpTimelineEnd');
            const lpBudget = data.get('lpBudget');
            const lpPocName = data.get('lpPocName');
            const lpCompany = data.get('lpCompany');
            const lpPhoneNumber = data.get('lpPhoneNumber');
            const lpEmail = data.get('lpEmail');

            if (
                typeof lpProjectDescription !== 'string' ||
                typeof lpTimelineStart !== 'string' ||
                typeof lpTimelineEnd !== 'string' ||
                typeof lpBudget !== 'string' ||
                typeof lpPocName !== 'string' ||
                typeof lpCompany !== 'string' ||
                typeof lpPhoneNumber !== 'string' ||
                typeof lpEmail !== 'string' ||
                !lpProjectDescription ||
                !lpTimelineStart ||
                !lpTimelineEnd ||
                !lpBudget ||
                !lpPocName ||
                !lpCompany ||
                !lpPhoneNumber ||
                !lpEmail
            ) {
                return fail(400, { error: 'Please fill out all fields for a large project' });
            }

            const message = `Large Project Inquiry: Project Description: ${lpProjectDescription}, Timeline: ${lpTimelineStart} to ${lpTimelineEnd}, Budget: ${lpBudget}, Contact: ${lpPocName} (${lpCompany}, ${lpPhoneNumber}, ${lpEmail})`;
            return { message: `Thank you! ${message}. I'll get back to you soon.` };
        }

        if (hireOption === 'small-project') {
            const spTaskDescription = data.get('spTaskDescription');
            const spDeadline = data.get('spDeadline');
            const spBudget = data.get('spBudget');
            const spPocName = data.get('spPocName');
            const spCompany = data.get('spCompany');
            const spPhoneNumber = data.get('spPhoneNumber');
            const spEmail = data.get('spEmail');

            if (
                typeof spTaskDescription !== 'string' ||
                typeof spDeadline !== 'string' ||
                typeof spBudget !== 'string' ||
                typeof spPocName !== 'string' ||
                typeof spCompany !== 'string' ||
                typeof spPhoneNumber !== 'string' ||
                typeof spEmail !== 'string' ||
                !spTaskDescription ||
                !spDeadline ||
                !spBudget ||
                !spPocName ||
                !spCompany ||
                !spPhoneNumber ||
                !spEmail
            ) {
                return fail(400, { error: 'Please fill out all fields for a small project' });
            }

            const message = `Small Project Inquiry: Task Description: ${spTaskDescription}, Deadline: ${spDeadline}, Budget: ${spBudget}, Contact: ${spPocName} (${spCompany}, ${spPhoneNumber}, ${spEmail})`;
            return { message: `Thank you! ${message}. I'll get back to you soon.` };
        }

        return { message: `Thank you for choosing to hire me as a ${hireOption}! I'll get back to you soon.` };
    }
};
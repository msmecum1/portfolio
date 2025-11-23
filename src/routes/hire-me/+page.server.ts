import { fail } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: 'smtp.zoho.com',
	port: 587,
	secure: false, // Use TLS
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS
	}
});

// Basic email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const hireOption = data.get('hireOption');

		if (typeof hireOption !== 'string' || !hireOption) {
			return fail(400, { error: 'Please select an option' });
		}

		const sendEmail = async (subject: string, text: string) => {
			try {
				await transporter.sendMail({
					from: `MadMecs Portfolio <${process.env.EMAIL_USER}>`,
					to: process.env.EMAIL_TO,
					subject,
					text,
					html: `<h2>${subject}</h2><p>${text.replace(/\n/g, '<br>')}</p>`
				});
			} catch (error) {
				console.error('Email sending failed:', error);
				return fail(500, { error: 'Failed to send inquiry. Please try again later.' });
			}
		};

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

			if (!emailRegex.test(ftEmail)) {
				return fail(400, { error: 'Please provide a valid email address' });
			}

			const message = `Full-Time Inquiry:\nJob Description: ${ftJobDescription}\nStart Date: ${ftStartDate}\nPay Range: ${ftPayRange}\nContact: ${ftPocName}\nCompany: ${ftCompany}\nPhone: ${ftPhoneNumber}\nEmail: ${ftEmail}`;
			const emailResult = await sendEmail('New Full-Time Inquiry from MadMecs.org', message);
			if (emailResult) return emailResult;

			return {
				message:
					'Thank you for your full-time hiring inquiry! I have received your details and will get back to you soon.'
			};
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

			if (!emailRegex.test(ptEmail)) {
				return fail(400, { error: 'Please provide a valid email address' });
			}

			const message = `Part-Time Inquiry:\nJob Description: ${ptJobDescription}\nStart Date: ${ptStartDate}\nHourly Rate: ${ptHourlyRate}\nContact: ${ptPocName}\nCompany: ${ptCompany}\nPhone: ${ptPhoneNumber}\nEmail: ${ptEmail}`;
			const emailResult = await sendEmail('New Part-Time Inquiry from MadMecs.org', message);
			if (emailResult) return emailResult;

			return {
				message:
					'Thank you for your part-time hiring inquiry! I have received your details and will get back to you soon.'
			};
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

			if (!emailRegex.test(lpEmail)) {
				return fail(400, { error: 'Please provide a valid email address' });
			}

			const message = `Large Project Inquiry:\nProject Description: ${lpProjectDescription}\nTimeline: ${lpTimelineStart} to ${lpTimelineEnd}\nBudget: ${lpBudget}\nContact: ${lpPocName}\nCompany: ${lpCompany}\nPhone: ${lpPhoneNumber}\nEmail: ${lpEmail}`;
			const emailResult = await sendEmail('New Large Project Inquiry from MadMecs.org', message);
			if (emailResult) return emailResult;

			return {
				message:
					'Thank you for your large project inquiry! I have received your details and will get back to you soon.'
			};
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

			if (!emailRegex.test(spEmail)) {
				return fail(400, { error: 'Please provide a valid email address' });
			}

			const message = `Small Project Inquiry:\nTask Description: ${spTaskDescription}\nDeadline: ${spDeadline}\nBudget: ${spBudget}\nContact: ${spPocName}\nCompany: ${spCompany}\nPhone: ${spPhoneNumber}\nEmail: ${spEmail}`;
			const emailResult = await sendEmail('New Small Project Inquiry from MadMecs.org', message);
			if (emailResult) return emailResult;

			return {
				message:
					'Thank you for your small project inquiry! I have received your details and will get back to you soon.'
			};
		}

		return {
			message: `Thank you for choosing to hire me as a ${hireOption}! I'll get back to you soon.`
		};
	}
};

import { Resend } from 'resend';

export default async function handler(req, res): Promise<void> {

    if (req.method === 'POST') {

        const resend = new Resend('*hidden*');

        try {

            await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: req.body.to,
                subject: req.body.subject,
                html: req.body.html,
            });

            res.status(200).json({ message: 'Email sent successfully' });

        } catch (error) {

            res.status(500).json({ error: 'Error sending email' });
        }
    } else {

        res.status(405).json({ error: 'Method Not Allowed' });
    }

}

import { Resend } from 'resend';

export default async function handler(req, res): Promise<void> {

    // Allow requests from GitHub Pages (replace with your specific domain if needed)
    res.setHeader('Access-Control-Allow-Origin', 'https://calvindo.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'POST') {

        const resend = new Resend(process.env.RESEND_API_KEY);

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

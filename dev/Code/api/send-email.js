var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Resend } from 'resend';
export default function handler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.method === 'POST') {
            const resend = new Resend('*hidden*');
            try {
                yield resend.emails.send({
                    from: 'onboarding@resend.dev',
                    to: req.body.to,
                    subject: req.body.subject,
                    html: req.body.html,
                });
                res.status(200).json({ message: 'Email sent successfully' });
            }
            catch (error) {
                res.status(500).json({ error: 'Error sending email' });
            }
        }
        else {
            res.status(405).json({ error: 'Method Not Allowed' });
        }
    });
}
//# sourceMappingURL=send-email.js.map
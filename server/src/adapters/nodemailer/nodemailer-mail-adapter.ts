import nodemailer from 'nodemailer';
import { mailAdapter, SendEmailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "daed8e57c428cf",
      pass: "d3b76deaae361a"
    }
});


export class NodemailerMailAdapter implements mailAdapter {
    async sendMail({subject, body}: SendEmailData){
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Érick Henrique <herick.henri16@gmail.com>",
            subject,
            html: body,

        });
    };
}
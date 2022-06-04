export interface SendEmailData {
    subject: string;
    body: string;
}

export interface mailAdapter {
    sendMail: (Data: SendEmailData) => Promise<void>;
}
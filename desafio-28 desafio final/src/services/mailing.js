const nodemailer = require('nodemailer')

class mailingService{
    constructor(){
            this.transporter = nodemailer.createTransport({
                service:'gmail',
                port: 587,
                auth: {
                    user: 'isskaneki@gmail.com',
                    pass: 'audnwlqqbkgvnior'
                }
            });

    }
    async sendMail ({from,to,subject,html,attachments=[]})  {
        let result = await this.transporter.sendMail({
            from,
            to,
            subject,
            html,
            attachments
        })
        return result
    }
}

module.exports = mailingService
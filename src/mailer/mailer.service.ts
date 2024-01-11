import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  private async transporter() {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'garnett16@ethereal.email',
        pass: 'xQ6rdkHw1C5dHrEFxp',
      },
    });
    return transporter;
  }

  async sendRegisterConfirmation(userEmail: string, code: string) {
    await (
      await this.transporter()
    ).sendMail({
      from: 'confirm-email@games.com',
      to: userEmail,
      subject: 'Welcome to the app',
      html: `<h3>registered successfully, code : ${code} </h3>`,
    });
  }

  async sendResetPassword(userEmail: string, url: string, code: string) {
    await (
      await this.transporter()
    ).sendMail({
      from: 'reset-password@games.com',
      to: userEmail,
      subject: 'Reset your password',
      html: `<a href="${url}">Reset your password</a>
      <p>Code: ${code}</p>
      <p>Code expires in 15 minutes</p>`,
    });
  }
}

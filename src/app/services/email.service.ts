// src/app/services/email.service.ts
import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private serviceId = 'service_wz5arsn';  // Replace with your EmailJS service ID
  private templateId = 'template_llwkrs9';  // Replace with your EmailJS template ID
  private userId = 'iZu4PXMZHw3IciG2B';  // Replace with your EmailJS user ID

  constructor() {}

  public sendEmail(templateParams: { [key: string]: any }): Promise<EmailJSResponseStatus> {
    return emailjs.send(this.serviceId, this.templateId, templateParams, this.userId);
  }
}

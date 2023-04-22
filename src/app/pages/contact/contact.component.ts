import { Component,OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
  
export class ContactComponent {
  constructor(private router: Router) { }
  async sendEmail(e: Event) {
    e.preventDefault()
    emailjs.sendForm('service_a9y4g2b', 'template_hchc1py', e.target as HTMLFormElement, 'qXG5XVRFXE6inUn93')
      .then((result: EmailJSResponseStatus) => {
        alert("successfull filled")
        this.router.navigateByUrl('');
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
 }


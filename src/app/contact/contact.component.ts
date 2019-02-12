import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { StringifyOptions } from 'querystring';
// import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  headerId: String;
  headerTitle: String;
  headerSubtext: String;

  formName: String;
  formEmail: String;
  formMessage: String;
  // formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.headerId = 'contact-header';
    this.headerTitle = 'Contact Us';
    // tslint:disable-next-line:max-line-length
    this.headerSubtext = 'Let\'s get in touch!';
  }

  submitContactForm (): void {
    console.log('hit submit form');
    // console.log(this.formGroup);
    // // form.reset();
    // const uri = 'http://localhost:5000/sendMail';
    // const data = this.formGroup.getRawValue();
    // this.http.post(uri, data)
    //     .subscribe(res => console.log('email sent'));
  }

}

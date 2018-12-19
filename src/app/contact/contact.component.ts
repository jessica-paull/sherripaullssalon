import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  headerId: String;
  headerTitle: String;
  headerSubtext: String;

  constructor() { }

  ngOnInit() {
    this.headerId = 'contact-header';
    this.headerTitle = 'Let\'s get in touch';
    // tslint:disable-next-line:max-line-length
    this.headerSubtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  }

}

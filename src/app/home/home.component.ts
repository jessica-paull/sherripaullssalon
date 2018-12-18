import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  headerId: String;
  headerTitle: String;
  headerSubtext: String;

  constructor() { }

  ngOnInit() {
    this.headerId = 'home-header';
    this.headerTitle = 'An art of rejuvenation';
    // tslint:disable-next-line:max-line-length
    this.headerSubtext = 'Join us to relax, refresh, and rejuvenate - you deserve it!';
  }

}

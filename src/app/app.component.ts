import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome to Sherri Paulls';

  onActivate(event) {
    window.scrollTo(0, 0);
    // const scrollToTop = window.setInterval(() => {
    //   const pos = window.pageYOffset;
    //     if (pos > 0) {
    //         window.scrollTo(0, pos - 20);
    //     } else {
    //         window.clearInterval(scrollToTop);
    //     }
    // }, 16);
  }
}

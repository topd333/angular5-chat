import { Component } from '@angular/core';

import { AuthenticationService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chat';

  constructor(
    private authenticationService: AuthenticationService
  ) {}

  logout() {
    this.authenticationService.logout();
  }
}
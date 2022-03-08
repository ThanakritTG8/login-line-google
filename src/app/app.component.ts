import { Component, OnInit } from '@angular/core';
import liff from '@line/liff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-line-login';
  idToken: string = '';
  displayName: string = '';
  pictureUrl: string = '';
  statusMessage: string = '';
  userId: string = '';

  ngOnInit(): void {
    this.initLine();
  }

  initLine(): void {
    liff.init({ liffId: '1656952075-4nEpqz6O' }, () => {
      if (liff.isLoggedIn()) {
        this.runApp();
      } else {
        liff.login();
      }
    }, err => console.error(err));
  }

  runApp(): void {
    const idToken = liff.getIDToken();
    // this.idToken = idToken;
    console.log(idToken);
    liff.getProfile().then(profile => {
      console.log(profile);
      this.displayName = profile.displayName;
      // this.pictureUrl = profile.pictureUrl;
      // this.statusMessage = profile.statusMessage;
      this.userId = profile.userId;
    }).catch(err => console.error(err));
  }

  logout(): void {
    liff.logout();
    window.location.reload();
  }
}

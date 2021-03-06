import { Component, OnInit } from '@angular/core';
import liff from '@line/liff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-line-login';
  idToken: string = '';
  displayName: string = '';
  pictureUrl: any;
  statusMessage: any;
  userId: string = '';
  profile = {};

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
      console.log('---->');
      console.log(liff.getDecodedIDToken());
      console.log(liff.getVersion());
      this.profile = profile;
      this.displayName = profile.displayName;
      this.pictureUrl = profile.pictureUrl;
      this.statusMessage = profile.statusMessage;
      this.userId = profile.userId;
    }).catch(err => console.error(err));
  }

  logout(): void {
    liff.logout();
    window.location.reload();
  }
}

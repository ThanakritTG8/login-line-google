import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GoogleSigninService } from 'src/app/core/google-signin.service';
import { LineSigninService } from 'src/app/core/line-signin.service';
import liff from '@line/liff';
import { catchError, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  visible = false;
  isVisible = false;
  user!: gapi.auth2.GoogleUser;
  lineUser: any;
  type: string = '';
  displayName: string = '';
  pictureUrl: any;
  email: any;

  constructor(
    private GoogleSignInService: GoogleSigninService,
    private LineSignInService: LineSigninService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  signIn(type: any) {
    if (type === 'google') {
      this.GoogleSignInService.signin();
      this.getGoogleProfile();

    } else if (type === 'line') {
      this.LineSignInService.loginWithLine();
      this.getLineProfile();
      console.log('line');
    }
    this.type = type;
  }

  signOut() {
    if (this.type === 'google') {
      this.GoogleSignInService.signOut();
    } else if (this.type === 'line') {
      console.log('line');

    }
  }

  getLineProfile() {
    liff.getProfile().then(profile => {
      console.log(profile);
      this.lineUser = profile;
      this.displayName = profile.displayName;
      this.pictureUrl = profile.pictureUrl;

    }).catch(err => console.error(err));

  }

  getGoogleProfile() {
    this.GoogleSignInService.observable().subscribe(user => {
      this.user = user;
      console.log(user.getBasicProfile());
      this.displayName = this.user.getBasicProfile().getName();
      this.pictureUrl = this.user.getBasicProfile().getImageUrl();
      this.email = this.user.getBasicProfile().getEmail();

      this.ref.detectChanges()
    })
  }
}

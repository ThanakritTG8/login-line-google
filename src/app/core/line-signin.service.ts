import { Injectable } from '@angular/core';
import liff from '@line/liff';

@Injectable({
  providedIn: 'root'
})
export class LineSigninService {

  constructor() { }

  loginWithLine() {
    liff.init({ liffId: '1656952075-4nEpqz6O' }, () => {
      liff.login();
    }, err => console.error(err));
  }

  logout() {
    liff.logout();
  }
}

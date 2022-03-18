import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  radioValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  changeLanguage(lang: string) {
    // this.translate.use(lang);
    console.log(lang);
  }
}

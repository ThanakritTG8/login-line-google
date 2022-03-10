import { Component, OnInit } from '@angular/core';

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

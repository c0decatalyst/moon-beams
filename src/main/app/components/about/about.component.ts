import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-about',
  templateUrl: './template/about.component.html',
  styleUrls: ['./template/about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
  }

}

import { Component, OnInit } from '@angular/core';

import { HssLayoutComponent } from './../hss-layout/hss-layout.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(public hssLayout: HssLayoutComponent) { }

  ngOnInit() {
  }

}

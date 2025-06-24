import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private myTitle: Title) {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
    this.myTitle.setTitle('Page not found | ' + environment.commonTitle);
  }

}

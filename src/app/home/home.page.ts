import { Component } from '@angular/core';
import {Route, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private activatedRoute: ActivatedRoute) {}

}

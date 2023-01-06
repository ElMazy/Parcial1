import { Component, OnInit } from '@angular/core';
import {Route, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}

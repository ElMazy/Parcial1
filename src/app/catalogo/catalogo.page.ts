import { Component, OnInit } from '@angular/core';
import {Route, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}

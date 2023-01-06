import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Route, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private alertController: AlertController, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
  }
  async alertaRegistro () {
    const alert = await this.alertController.create({
      message: 'Usuario registrado',
      buttons: ['OK'],
    });

    await alert.present();
  }
}

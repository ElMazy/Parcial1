import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Route, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-olvidopassword',
  templateUrl: './olvidopassword.page.html',
  styleUrls: ['./olvidopassword.page.scss'],
})
export class OlvidopasswordPage implements OnInit {

  constructor(private alertController: AlertController, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
  }
  async alertaPassword () {
    const alert = await this.alertController.create({
      message: 'Si los datos coinciden recibiras tu correo',
      buttons: ['OK'],
    });

    await alert.present();
  }
}

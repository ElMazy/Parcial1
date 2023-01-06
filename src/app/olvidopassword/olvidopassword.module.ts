import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidopasswordPageRoutingModule } from './olvidopassword-routing.module';

import { OlvidopasswordPage } from './olvidopassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidopasswordPageRoutingModule
  ],
  declarations: [OlvidopasswordPage]
})
export class OlvidopasswordPageModule {}

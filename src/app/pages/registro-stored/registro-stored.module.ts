import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroStoredPageRoutingModule } from './registro-stored-routing.module';

import { RegistroStoredPage } from './registro-stored.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroStoredPageRoutingModule
  ],
  declarations: [RegistroStoredPage]
})
export class RegistroStoredPageModule {}

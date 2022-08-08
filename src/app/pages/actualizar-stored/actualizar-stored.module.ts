import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarStoredPageRoutingModule } from './actualizar-stored-routing.module';

import { ActualizarStoredPage } from './actualizar-stored.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarStoredPageRoutingModule
  ],
  declarations: [ActualizarStoredPage]
})
export class ActualizarStoredPageModule {}

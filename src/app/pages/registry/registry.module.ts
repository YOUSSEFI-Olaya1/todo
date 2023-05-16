import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { RegistryPageRoutingModule } from './registry-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistryPage } from './registry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    RegistryPageRoutingModule
  ],
  declarations: [RegistryPage]
})
export class RegistryPageModule {}

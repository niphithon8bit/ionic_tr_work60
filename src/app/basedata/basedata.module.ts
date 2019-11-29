import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaseDataPageRoutingModule } from './basedata-routing.module';

import { BaseDataPage } from './basedata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaseDataPageRoutingModule
  ],
  declarations: [BaseDataPage]
})
export class BaseDataPageModule { }

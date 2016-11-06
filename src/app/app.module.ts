import 'zone.js';
import 'reflect-metadata';
declare var require: any;
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {UpgradeAdapter} from '@angular/upgrade';
import { ButtonComponent } from './shared/components/button/button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ButtonComponent]
})
export class AppModule {}


const up = new UpgradeAdapter(AppModule)
export default up;

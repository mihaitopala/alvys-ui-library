import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import {
  ButtonOutlinedComponent,
  ButtonFilledComponent,
  ButtonTextComponent,
} from './components';

@NgModule({
  declarations: [
    ButtonOutlinedComponent,
    ButtonFilledComponent,
    ButtonTextComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AngularMaterialModule],
  exports: [
    ButtonOutlinedComponent,
    ButtonFilledComponent,
    ButtonTextComponent,
  ],
})
export class AlvysUiComponentsModule {}

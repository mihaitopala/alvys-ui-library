import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import {
  ButtonOutlinedComponent,
  ButtonFilledComponent,
  ButtonTextComponent,
  DatePickerComponent,
} from './components';

@NgModule({
  declarations: [
    ButtonOutlinedComponent,
    ButtonFilledComponent,
    ButtonTextComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  exports: [
    ButtonOutlinedComponent,
    ButtonFilledComponent,
    ButtonTextComponent,
    DatePickerComponent
  ],
})
export class AlvysUiComponentsModule {}

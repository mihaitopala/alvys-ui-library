import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormDatePickerDirective } from './form-date-picker.directive';

@NgModule({
  declarations: [FormDatePickerDirective],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormDatePickerDirective],
  providers: [],
})
export class DirectivesModule {}

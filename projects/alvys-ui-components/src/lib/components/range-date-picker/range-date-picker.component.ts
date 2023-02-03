import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDateRangePicker } from '@angular/material/datepicker';

@Component({
  selector: 'alvys-range-date-picker',
  templateUrl: './range-date-picker.component.html',
  styleUrls: ['./range-date-picker.component.scss'],
})
export class RangeDatePickerComponent {
  @ViewChild('picker')
  public datePicker!: MatDateRangePicker<void>;

  @Output()
  clearValue? = new EventEmitter<Event>();

  datePickerForm!: FormGroup;

  public get startDateControl(): FormControl {
    return this.datePickerForm.controls?.['StartDate'] as FormControl;
  }

  public get endDateControl(): FormControl {
    return this.datePickerForm.controls?.['EndDate'] as FormControl;
  }

  constructor() {
    this.buildForm();
  }

  buildForm(): void {
    this.datePickerForm = new FormGroup({
      start: new FormControl(null),
      end: new FormControl(null),
    });
  }

  clearFormValue(): void {
    this.datePickerForm.reset();
    this.datePicker.close();

    this.clearValue?.emit();
  }
}

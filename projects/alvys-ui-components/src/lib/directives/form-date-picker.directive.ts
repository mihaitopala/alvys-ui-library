import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[formDatePicker]'
})
export class FormDatePickerDirective implements AfterViewInit {
  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    (this.el.nativeElement as HTMLInputElement).readOnly = true;
  }
}

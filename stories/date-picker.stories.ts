import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DatePickerComponent } from 'alvys-ui-components';
import { AngularMaterialModule } from 'projects/alvys-ui-components/src/lib/angular-material.module';

export default {
  title: 'DatePicker/Default',
  component: DatePickerComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        // BrowserModule,
        // BrowserAnimationsModule,
        // FormsModule,
        // AngularMaterialModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule
      ],
      providers: [],
    }),
  ],
} as Meta;

const Template: Story<DatePickerComponent> = (args: DatePickerComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

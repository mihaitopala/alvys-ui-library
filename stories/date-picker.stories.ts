import { FormsModule } from '@angular/forms';
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
        BrowserAnimationsModule,
        FormsModule,
        AngularMaterialModule,
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
